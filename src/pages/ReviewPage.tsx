import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { lessonRegistry } from '../lessons/lesson-registry.ts';
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
  learningGoal: string;
  unitId: string;
}

export function ReviewPage() {
  const { completedLessons } = useAppState();

  const topicMap = useMemo(() => {
    const map = new Map<string, ReviewEntry[]>();

    for (const lesson of lessonRegistry) {
      if (!completedLessons.includes(lesson.id)) continue;

      const entry: ReviewEntry = {
        lessonId: lesson.id,
        title: lesson.title,
        learningGoal: lesson.learningGoal,
        unitId: lesson.unitId,
      };

      for (const tag of lesson.reviewTags) {
        if (!map.has(tag)) map.set(tag, []);
        // Avoid duplicates within the same tag group
        if (!map.get(tag)!.some((e) => e.lessonId === lesson.id)) {
          map.get(tag)!.push(entry);
        }
      }
    }

    // Sort tags alphabetically, using human labels where available
    return Array.from(map.entries()).sort(([a], [b]) => {
      const labelA = TAG_LABELS[a] ?? a;
      const labelB = TAG_LABELS[b] ?? b;
      return labelA.localeCompare(labelB);
    });
  }, [completedLessons]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>review</h1>
      <p className={styles.subtitle}>
        Key learning goals from completed lessons, grouped by topic.
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
              <ul className={styles.entryList}>
                {entries.map((entry) => (
                  <li key={`${tag}-${entry.lessonId}`} className={styles.entry}>
                    <span className={styles.entryTitle}>{entry.title}</span>
                    <span className={styles.entryGoal}>{entry.learningGoal}</span>
                    <Link to={`/lesson/${entry.lessonId}`} className={styles.entryLink}>
                      redo →
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
