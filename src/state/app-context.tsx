import { createContext, useContext } from 'react';
import type { ProgressState } from '../types/progress.ts';
import { loadState } from './persistence.ts';

/** All possible route views in the application. */
type View = 'home' | 'lesson' | 'sandbox' | 'quiz' | 'glossary' | 'settings' | 'review' | 'capstone';

/** Combined global state including progress and active UI context. */
interface AppState extends ProgressState {
  /** The current active page/view. */
  view: View;
  /** The ID of the lesson currently being played, if any. */
  activeLessonId: string | null;
  /** The ID of the quiz currently being played, if any. */
  activeQuizId: string | null;
  /** Global user-specific settings. */
  preferences: {
    /** Whether to disable decorative animations. */
    reducedMotion: boolean;
    /** Simulation filter to apply to the UI (e.g., 'deuteranopia'). */
    colorBlindnessMode: string | null;
  };
}

/** Actions that can be dispatched to update the global state. */
type Action =
  | { type: 'NAVIGATE'; view: View }
  | { type: 'START_LESSON'; lessonId: string }
  | { type: 'COMPLETE_LESSON'; lessonId: string }
  | { type: 'START_QUIZ'; quizId: string }
  | { type: 'COMPLETE_QUIZ'; quizId: string; score: number }
  | { type: 'COMPLETE_MILESTONE'; milestoneId: string }
  | { type: 'ADD_GLOSSARY_TERMS'; terms: string[] }
  | { type: 'SET_PREFERENCE'; key: string; value: string | boolean | null }
  | { type: 'RESET_PROGRESS' };

/** Initialize state from localStorage or defaults. */
export function createInitialState(): AppState {
  const { progress, preferences } = loadState();
  return {
    ...progress,
    view: 'home',
    activeLessonId: null,
    activeQuizId: null,
    preferences,
  };
}

/**
 * Reducer for managing application state updates.
 * Most completion actions are idempotent to prevent duplicate entries.
 */
export function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'NAVIGATE':
      return { ...state, view: action.view };

    case 'START_LESSON':
      return { ...state, view: 'lesson', activeLessonId: action.lessonId };

    case 'COMPLETE_LESSON':
      if (state.completedLessons.includes(action.lessonId)) return state;
      return {
        ...state,
        completedLessons: [...state.completedLessons, action.lessonId],
      };

    case 'START_QUIZ':
      return { ...state, view: 'quiz', activeQuizId: action.quizId };

    case 'COMPLETE_QUIZ': {
      const alreadyCompleted = state.completedQuizzes.includes(action.quizId);
      const previousBest = state.quizBestScores[action.quizId] ?? 0;
      return {
        ...state,
        completedQuizzes: alreadyCompleted
          ? state.completedQuizzes
          : [...state.completedQuizzes, action.quizId],
        quizBestScores: {
          ...state.quizBestScores,
          [action.quizId]: Math.max(previousBest, action.score),
        },
      };
    }

    case 'COMPLETE_MILESTONE':
      if (state.completedMilestones.includes(action.milestoneId)) return state;
      return {
        ...state,
        completedMilestones: [...state.completedMilestones, action.milestoneId],
      };

    case 'ADD_GLOSSARY_TERMS': {
      const newTerms = action.terms.filter(
        (t) => !state.glossaryTermsSeen.includes(t),
      );
      if (newTerms.length === 0) return state;
      return {
        ...state,
        glossaryTermsSeen: [...state.glossaryTermsSeen, ...newTerms],
      };
    }

    case 'SET_PREFERENCE':
      return {
        ...state,
        preferences: {
          ...state.preferences,
          [action.key]: action.value,
        },
      };

    case 'RESET_PROGRESS':
      return {
        ...state,
        completedLessons: [],
        completedQuizzes: [],
        quizBestScores: {},
        completedMilestones: [],
        glossaryTermsSeen: [],
      };

    default:
      return state;
  }
}

export const AppStateContext = createContext<AppState | null>(null);
export const AppDispatchContext = createContext<React.Dispatch<Action> | null>(null);

/** Access the global application state. */
export function useAppState(): AppState {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppProvider');
  }
  return context;
}

/** Access the global dispatch function for state updates. */
export function useAppDispatch(): React.Dispatch<Action> {
  const context = useContext(AppDispatchContext);
  if (!context) {
    throw new Error('useAppDispatch must be used within an AppProvider');
  }
  return context;
}
