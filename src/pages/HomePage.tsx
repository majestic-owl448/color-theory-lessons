import { Link } from 'react-router-dom';
import { units } from '../data/units.ts';
import { getLessonById } from '../lessons/lesson-registry.ts';
import { useAppState } from '../state/app-context.tsx';
import styles from './HomePage.module.css';

export function HomePage() {
  const { completedLessons } = useAppState();

  // Find the first lesson the user hasn't completed yet
  const allLessonIds = units.flatMap((u) => u.lessons);
  const nextLessonId = allLessonIds.find((id) => !completedLessons.includes(id)) ?? allLessonIds[0];

  return (
    <>
      <section className={styles.hero}>
        <span className={styles.prompt}>~/color-quest $ learn --interactive</span>
        <h1 className={styles.title}>
          Color Theory
          <br />
          for Developers
        </h1>
        <p className={styles.subtitle}>
          Six units of hands-on lessons covering color perception, digital color
          models, accessibility, and design systems — built for people who write code.
        </p>
        <Link to={`/lesson/${nextLessonId}`} className={styles.startBtn}>
          {completedLessons.length === 0 ? 'start learning' : 'continue →'}
        </Link>
      </section>

      <section>
        <p className={styles.unitsHeading}>units</p>
        <div className={styles.units}>
          {units.map((unit, i) => {
            const total = unit.lessons.length;
            const done = unit.lessons.filter((id) => completedLessons.includes(id)).length;
            const complete = total > 0 && done === total;
            const started = done > 0 && !complete;
            const firstLesson = unit.lessons[0];
            const showLessons = started || complete;
            return (
              <div key={unit.id} className={styles.unitGroup}>
                <div className={`${styles.unitCard} ${complete ? styles.unitComplete : ''} ${showLessons ? styles.unitExpanded : ''}`}>
                  <span className={styles.unitIndex}>{String(i + 1).padStart(2, '0')}</span>
                  <div className={styles.unitInfo}>
                    <span className={styles.unitTitle}>{unit.title}</span>
                    <span className={styles.unitDesc}>{unit.description}</span>
                  </div>
                  <div className={styles.unitMeta}>
                    {complete ? (
                      <span className={styles.unitBadge} style={{ color: 'var(--green)', borderColor: 'var(--green)' }}>
                        ✓ done
                      </span>
                    ) : started ? (
                      <span className={styles.unitBadge}>
                        {done}/{total}
                      </span>
                    ) : total > 0 ? (
                      firstLesson && (
                        <Link to={`/lesson/${firstLesson}`} className={styles.unitStart}>
                          start →
                        </Link>
                      )
                    ) : (
                      <span className={styles.unitBadge} style={{ color: 'var(--muted)', borderColor: 'var(--border)' }}>
                        coming soon
                      </span>
                    )}
                  </div>
                </div>
                {showLessons && (
                  <ul className={styles.lessonList}>
                    {unit.lessons.map((lessonId, li) => {
                      const lessonConfig = getLessonById(lessonId);
                      const isDone = completedLessons.includes(lessonId);
                      return (
                        <li key={lessonId} className={styles.lessonRow}>
                          <span className={styles.lessonNum}>{String(li + 1).padStart(2, '0')}</span>
                          <span className={styles.lessonName}>{lessonConfig?.title ?? lessonId}</span>
                          <Link to={`/lesson/${lessonId}`} className={isDone ? styles.lessonRedo : styles.lessonContinue}>
                            {isDone ? 'redo →' : 'continue →'}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
