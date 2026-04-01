export interface MilestoneQuestion {
  id: string;
  prompt: string;
  /** Hex color to display as a swatch in the right panel. */
  swatchColor?: string;
  choices: { id: string; label: string; isCorrect: boolean; explanation?: string }[];
}

export interface MilestonePart {
  id: string;
  title: string;
  description: string;
  questions: MilestoneQuestion[];
}

export interface MilestoneConfig {
  id: string;
  unitId: string;
  title: string;
  description: string;
  badgeTitle: string;
  estimatedMinutes: number;
  /**
   * Optional persistent visual shown in the right panel for the entire milestone.
   * Individual questions can also specify a `swatchColor` which takes precedence.
   */
  heroVisual?: 'interface-mockup';
  /** Minimum number of correct answers required to earn the badge. */
  passThreshold: number;
  parts: MilestonePart[];
}
