import type { UnitConfig } from '../types/lesson.ts';

export const units: UnitConfig[] = [
  { id: 'unit-1', title: 'Seeing and Describing Color', description: 'Build your visual vocabulary for color.', badgeTitle: 'Color Observer', lessons: ['u1-l1', 'u1-l2', 'u1-l3', 'u1-l4', 'u1-l5', 'u1-l6'], milestoneId: 'milestone-1' },
  { id: 'unit-2', title: 'Additive and Subtractive Color', description: 'Understand light-based and pigment-based color models.', badgeTitle: 'Screen Mixer', lessons: ['u2-l1', 'u2-l2', 'u2-l3', 'u2-l4', 'u2-l5'], milestoneId: 'milestone-2' },
  { id: 'unit-3', title: 'Digital Color in Programming', description: 'Master HEX, RGB, HSL, and alpha in code.', badgeTitle: 'UI Color Coder', lessons: [], milestoneId: 'milestone-3' },
  { id: 'unit-4', title: 'Human Vision and Color Blindness', description: 'Design with awareness of how others see color.', badgeTitle: 'Inclusive Vision Designer', lessons: [], milestoneId: 'milestone-4' },
  { id: 'unit-5', title: 'Accessible Color and WCAG in Practice', description: 'Apply WCAG contrast and color guidance.', badgeTitle: 'Accessibility Fixer', lessons: [], milestoneId: 'milestone-5' },
  { id: 'unit-6', title: 'Applied Design Systems and Advanced Color', description: 'Apply color strategically in modern digital design.', badgeTitle: 'System Builder', lessons: [], milestoneId: 'milestone-6' },
];
