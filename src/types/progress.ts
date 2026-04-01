export interface ProgressState {
  completedLessons: string[];
  completedQuizzes: string[];
  quizBestScores: Record<string, number>;
  completedMilestones: string[];
  glossaryTermsSeen: string[];
}
