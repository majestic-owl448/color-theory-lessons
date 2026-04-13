import { useEffect, useMemo, useState } from 'react';
import { units } from '../data/units.ts';
import { loadLessonsByIds } from '../lessons/lesson-loader.ts';
import type { LessonConfig } from '../types/lesson.ts';
import { useAppState } from '../state/app-context.tsx';
import styles from './ReviewPage.module.css';

// Human-readable labels for review tags
const TAG_LABELS: Record<string, string> = {
  'additive': 'Additive Color',
  'color-function': 'Color Function in UI',
  'color-models': 'Color Models',
  'contrast': 'Contrast',
  'display': 'Displays and Pixels',
  'emphasis': 'Emphasis',
  'formats': 'Color Formats',
  'foundations': 'Foundations',
  'harmony': 'Harmony and Relationships',
  'hierarchy': 'Visual Hierarchy',
  'hue': 'Hue',
  'HSL': 'HSL',
  'HEX': 'HEX',
  'implementation': 'Implementation',
  'interface': 'Interface Design',
  'lightness': 'Lightness',
  'mental-models': 'Mental Models',
  'palette': 'Palette',
  'perception': 'Color Perception',
  'practical': 'Practical Application',
  'print': 'Print and Physical Media',
  'readability': 'Readability',
  'RGB': 'RGB',
  'saturation': 'Saturation',
  'screens': 'Screens',
  'subtractive': 'Subtractive Color',
  'temperature': 'Color Temperature',
  'visual-vocabulary': 'Visual Vocabulary',
};

interface ReviewEntry {
  lessonId: string;
  title: string;
  keyPoints: string[];
}

type ReviewLesson = Pick<LessonConfig, 'id' | 'title' | 'keyPoints' | 'reviewTags'>;

export function ReviewPage() {
  const { completedLessons } = useAppState();
  const [lessons, setLessons] = useState<ReviewLesson[]>([]);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      const orderedIds = units
        .flatMap((unit) => unit.lessons)
        .filter((id) => completedLessons.includes(id));
      const loaded = await loadLessonsByIds(orderedIds);
      if (!cancelled) {
        setLessons(loaded);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [completedLessons]);

  const topicMap = useMemo(() => {
    const map = new Map<string, ReviewEntry[]>();

    for (const lesson of lessons) {
      if (!lesson.keyPoints || lesson.keyPoints.length === 0) continue;

      const entry: ReviewEntry = {
        lessonId: lesson.id,
        title: lesson.title,
        keyPoints: lesson.keyPoints,
      };

      for (const tag of lesson.reviewTags) {
        if (!map.has(tag)) map.set(tag, []);
        if (!map.get(tag)!.some((e) => e.lessonId === lesson.id)) {
          map.get(tag)!.push(entry);
        }
      }
    }

    return Array.from(map.entries()).sort(([a], [b]) => {
      const labelA = TAG_LABELS[a] ?? a;
      const labelB = TAG_LABELS[b] ?? b;
      return labelA.localeCompare(labelB);
    });
  }, [lessons]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>review</h1>
      <p className={styles.subtitle}>
        Key facts from completed lessons, grouped by topic.
      </p>

      {topicMap.length === 0 ? (
        <p className={styles.empty}>
          No review content yet — complete your first lesson to unlock this section.
        </p>
      ) : (
        <div className={styles.topicList}>
          {topicMap.map(([tag, entries]) => (
            <section key={tag} className={styles.topic}>
              <h2 className={styles.topicHeading}>
                {TAG_LABELS[tag] ?? tag}
              </h2>
              <div className={styles.entryList}>
                {entries.map((entry) => (
                  <div key={`${tag}-${entry.lessonId}`} className={styles.entry}>
                    <span className={styles.entryTitle}>{entry.title}</span>
                    <ul className={styles.pointList}>
                      {entry.keyPoints.map((point, i) => (
                        <li key={i} className={styles.point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
