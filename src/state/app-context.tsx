import { createContext, useContext, useEffect, useReducer } from 'react';
import type { ReactNode } from 'react';
import type { ProgressState } from '../types/progress.ts';
import { loadState, saveState } from './persistence.ts';

type View = 'home' | 'lesson' | 'sandbox' | 'quiz' | 'glossary' | 'settings' | 'review' | 'capstone';

interface AppState extends ProgressState {
  view: View;
  activeLessonId: string | null;
  activeQuizId: string | null;
  preferences: {
    reducedMotion: boolean;
    colorBlindnessMode: string | null;
  };
}

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

function createInitialState(): AppState {
  const { progress, preferences } = loadState();
  return {
    ...progress,
    view: 'home',
    activeLessonId: null,
    activeQuizId: null,
    preferences,
  };
}

function appReducer(state: AppState, action: Action): AppState {
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

const AppStateContext = createContext<AppState | null>(null);
const AppDispatchContext = createContext<React.Dispatch<Action> | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, undefined, createInitialState);

  useEffect(() => {
    const progress: ProgressState = {
      completedLessons: state.completedLessons,
      completedQuizzes: state.completedQuizzes,
      quizBestScores: state.quizBestScores,
      completedMilestones: state.completedMilestones,
      glossaryTermsSeen: state.glossaryTermsSeen,
    };
    saveState(progress, state.preferences);
  }, [
    state.completedLessons,
    state.completedQuizzes,
    state.quizBestScores,
    state.completedMilestones,
    state.glossaryTermsSeen,
    state.preferences,
  ]);

  return (
    <AppStateContext value={state}>
      <AppDispatchContext value={dispatch}>
        {children}
      </AppDispatchContext>
    </AppStateContext>
  );
}

export function useAppState(): AppState {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppProvider');
  }
  return context;
}

export function useAppDispatch(): React.Dispatch<Action> {
  const context = useContext(AppDispatchContext);
  if (!context) {
    throw new Error('useAppDispatch must be used within an AppProvider');
  }
  return context;
}
