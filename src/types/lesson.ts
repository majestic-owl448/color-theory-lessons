export interface UnitConfig {
  id: string;
  title: string;
  description: string;
  lessons: string[];
  milestoneId: string;
}

export interface LessonConfig {
  id: string;
  unitId: string;
  title: string;
  description: string;
  learningGoal: string;
  estimatedMinutes: number;
  prerequisites: string[];
  conceptsIntroduced: string[];
  interactionType: InteractionType;
  steps: LessonStep[];
  challenges: Challenge[];
  quizItems: QuizItem[];
  glossaryTerms: string[];
  reviewTags: string[];
}

export type InteractionType =
  | 'color-wheel'
  | 'rgb-mixer'
  | 'palette-builder'
  | 'contrast-checker'
  | 'color-blindness-sim'
  | 'theme-editor'
  | 'code-playground'
  | 'before-after'
  | 'slider-explore'
  | 'additive-sort'
  | 'logic-fixer'
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
  | 'none';

export interface LessonStep {
  id: string;
  text: string;
  highlights?: string[];
}

export interface Challenge {
  id: string;
  prompt: string;
  type: ChallengeType;
  hints: string[];
  successCriteria: string;
}

export type ChallengeType =
  | 'build-palette'
  | 'fix-interface'
  | 'match-target'
  | 'adjust-contrast'
  | 'identify-problem'
  | 'code-to-color'
  | 'sort';

export interface QuizItem {
  id: string;
  prompt: string;
  choices: { id: string; label: string; isCorrect: boolean; explanation?: string }[];
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  relatedLessons: string[];
}
