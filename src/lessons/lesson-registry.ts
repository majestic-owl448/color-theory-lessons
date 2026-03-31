import type { LessonConfig } from '../types/lesson.ts';
import { lesson1_1 } from './unit-1/lesson-1-1.ts';
import { lesson1_2 } from './unit-1/lesson-1-2.ts';
import { lesson1_3 } from './unit-1/lesson-1-3.ts';
import { lesson1_4 } from './unit-1/lesson-1-4.ts';
import { lesson1_5 } from './unit-1/lesson-1-5.ts';
import { lesson1_6 } from './unit-1/lesson-1-6.ts';
import { lesson2_1 } from './unit-2/lesson-2-1.ts';
import { lesson2_2 } from './unit-2/lesson-2-2.ts';

export const lessonRegistry: LessonConfig[] = [
  lesson1_1,
  lesson1_2,
  lesson1_3,
  lesson1_4,
  lesson1_5,
  lesson1_6,
  lesson2_1,
  lesson2_2,
];

export function getLessonById(id: string): LessonConfig | undefined {
  return lessonRegistry.find((l) => l.id === id);
}

export function getLessonsForUnit(unitId: string): LessonConfig[] {
  return lessonRegistry.filter((l) => l.unitId === unitId);
}
