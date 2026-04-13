/** Configuration for a top-level learning unit. */
export interface UnitConfig {
  /** Unique identifier (e.g., 'unit-1'). */
  id: string;
  /** Display title for the unit. */
  title: string;
  /** Brief summary of what the unit covers. */
  description: string;
  /** Array of lesson IDs included in this unit, in order. */
  lessons: string[];
  /** ID of the capstone milestone for this unit. */
  milestoneId: string;
}

/** Complete configuration for an interactive lesson. */
export interface LessonConfig {
  /** Unique identifier (e.g., 'u1-l1'). */
  id: string;
  /** ID of the parent unit. */
  unitId: string;
  /** Display title. */
  title: string;
  /** Detailed summary for the lesson preview. */
  description: string;
  /** One-sentence statement of what the user will achieve. */
  learningGoal: string;
  /** Predicted completion time for the UI. */
  estimatedMinutes: number;
  /** IDs of lessons that must be completed before starting this one. */
  prerequisites: string[];
  /** List of technical terms or ideas introduced here. */
  conceptsIntroduced: string[];
  /** The specific interactive tool used in this lesson. */
  interactionType: InteractionType;
  /** Sequential narrative content for the 'steps' phase. */
  steps: LessonStep[];
  /** Task(s) that the user must perform in the 'challenge' phase. */
  challenges: Challenge[];
  /** Knowledge check questions for the 'quiz' phase. */
  quizItems: QuizItem[];
  /** Glossary terms that become 'seen' after finishing this lesson. */
  glossaryTerms: string[];
  /** Metadata tags for searching and grouping in the Review page. */
  reviewTags: string[];
  /** Summary of what was learned, shown on the completion screen. */
  keyPoints?: string[];
}

/** Supported interactive tool types. Each must have a case in ToolRenderer. */
export type InteractionType =
  | 'color-wheel'
  | 'rgb-mixer'
  | 'palette-builder'
  | 'contrast-checker'
  | 'before-after'
  | 'slider-explore'
  | 'additive-sort'
  | 'mismatch-explainer'
  | 'background-shift'
  | 'interface-tuner'
  | 'format-reveal'
  | 'hex-rgb-editor'
  | 'hsl-playground'
  | 'alpha-layer'
  | 'theme-sandbox'
  | 'token-map'
  | 'color-space-lab'
  | 'eye-diagram'
  | 'vision-cards'
  | 'interface-gallery'
  | 'color-only-detector'
  | 'state-workshop'
  | 'inclusive-review'

  | 'text-contrast-lab'
  | 'component-checker'

  | 'audit-flow'
  | 'pattern-repair'
  | 'system-comparison'
  | 'role-builder'
  | 'brand-pressure'
  | 'dark-translator'
  | 'chart-tuner'
  | 'system-stress'
  | 'none';

/** A single screen of narrative text in the lesson flow. */
export interface LessonStep {
  /** Unique ID within the lesson. */
  id: string;
  /** The text content to display. */
  text: string;
  /** Specific words to visually emphasize in the UI. */
  highlights?: string[];
}

/** A task that requires the user to interact with a tool. */
export interface Challenge {
  /** Unique ID within the lesson. */
  id: string;
  /** Instructions for the user. */
  prompt: string;
  /** Logic type used to determine success. */
  type: ChallengeType;
  /** Progressive assistance if the user gets stuck. */
  hints: string[];
  /** A description of what counts as success. */
  successCriteria: string;
}

/** Logic categories for challenge verification. */
export type ChallengeType =
  | 'build-palette'
  | 'fix-interface'
  | 'match-target'
  | 'adjust-contrast'
  | 'identify-problem'
  | 'sort'
  | 'explore-all'
  | 'add-cues'
  | 'audit'
  | 'repair'
  | 'system-build';

/** A multiple-choice knowledge check. */
export interface QuizItem {
  /** Unique ID within the lesson. */
  id: string;
  /** The question prompt. */
  prompt: string;
  /** Selectable answers. */
  choices: { 
    id: string; 
    label: string; 
    isCorrect: boolean; 
    /** Feedback provided after the user selects this choice. */
    explanation?: string 
  }[];
}

/** A dictionary entry unlocked via lessons. */
export interface GlossaryTerm {
  /** The term name. */
  term: string;
  /** The dictionary definition. */
  definition: string;
  /** IDs of lessons that teach this term. */
  relatedLessons: string[];
}
