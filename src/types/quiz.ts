export interface QuizConfig {
  id: string;
  title: string;
  unlockedBy: string;
  questions: QuizQuestion[];
  passingScore: number;
}

export type QuizQuestion =
  | MultipleChoiceQuestion
  | DragDropQuestion
  | IdentifyProblemQuestion
  | ChoosePaletteQuestion;

interface BaseQuestion {
  id: string;
  prompt: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice';
  choices: { id: string; label: string; isCorrect: boolean; explanation?: string }[];
}

export interface DragDropQuestion extends BaseQuestion {
  type: 'drag-drop';
  items: { id: string; label: string }[];
  targets: { id: string; label: string; acceptsItemId: string }[];
}

export interface IdentifyProblemQuestion extends BaseQuestion {
  type: 'identify-problem';
  scenarioId: string;
  problems: { id: string; description: string; isCorrect: boolean }[];
}

export interface ChoosePaletteQuestion extends BaseQuestion {
  type: 'choose-palette';
  palettes: { id: string; colors: string[]; isCorrect: boolean; explanation?: string }[];
}
