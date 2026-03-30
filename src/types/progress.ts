export interface Badge {
  id: string;
  unitId: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProgressState {
  completedLessons: string[];
  completedQuizzes: string[];
  quizBestScores: Record<string, number>;
  completedMilestones: string[];
  earnedBadges: string[];
  glossaryTermsSeen: string[];
}
