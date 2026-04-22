import { useState } from 'react';
import { Link } from 'react-router-dom';
import { units } from '../data/units.ts';
import { getMilestoneById } from '../data/milestones.ts';
import { useAppState } from '../state/app-context.tsx';
import styles from './HomePage.module.css';

const LESSON_TITLES: Record<string, string> = {
  'u1-l1': 'What Color Does in Interface Design',
  'u1-l2': 'Hue, Saturation, and Lightness',
  'u1-l3': 'Contrast and Readability',
  'u1-l4': 'Warm and Cool Colors in Practice',
  'u1-l5': 'Visual Hierarchy Through Color',
  'u1-l6': 'Basic Color Relationships and Harmony',
  'u2-l1': 'Two Ways Color Mixes',
  'u2-l2': 'How RGB Light Works',
  'u2-l3': 'Subtractive Color for Digital Designers',
  'u2-l4': 'Seeing Pixels as Light, Not Paint',
  'u2-l5': 'Applying Additive Thinking to UI Design',
  'u3-l1': 'Why Digital Design Needs Color Formats',
  'u3-l2': 'HEX and RGB',
  'u3-l3': 'HSL and HSLA',
  'u3-l4': 'Alpha, Transparency, and Layered Color',
  'u3-l5': 'Gradients, CSS Color Usage, and Theme Building',
  'u3-l6': 'Design Tokens and Role-Based Color Systems',
  'u4-l1': 'How Humans Perceive Color',
  'u4-l2': 'Types of Color Vision Deficiency',
  'u4-l3': 'Seeing Through Simulated Eyes',
  'u4-l4': 'What Color Perception Means for Design',
  'u5-l1': 'Text Contrast in Practice',
  'u5-l2': 'Non-Text Contrast for Controls and Graphics',
  'u5-l3': 'Color-Only Problems and Redundant Cues',
  'u5-l4': 'Accessible Patterns for Real Interfaces',
  'u5-l5': 'Accessibility Audit Workflow',
  'u5-l6': 'Inclusive Testing and Review',
  'u6-l1': 'From Individual Colors to Color Systems',
  'u6-l2': 'Building Semantic Color Roles for UI',
  'u6-l3': 'Brand Constraints and Hierarchy',
  'u6-l4': 'Dark Mode and Theme Pairing',
  'u6-l5': 'Color for Charts and Data Visualization',
  'u6-l6': 'Color Spaces and Modern Screens',
  'u6-l7': 'Final System Review and Stress Test',
};

export function HomePage() {
  const { completedLessons, completedMilestones } = useAppState();
  const [expandedUnit, setExpandedUnit] = useState<string | null>(null);

  // Find the first lesson the user hasn't completed yet
  const allLessonIds = units.flatMap((u) => u.lessons);
  const nextLessonId = allLessonIds.find((id) => !completedLessons.includes(id)) ?? allLessonIds[0];

  return (
    <>
      <section className={styles.hero}>
        <span className={styles.prompt}>~/color-theory-course $ learn --interactive</span>
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
            const canExpand = started || complete;

            const prevUnit = i > 0 ? units[i - 1] : null;
            const prevUnitLessonsDone = prevUnit
              ? prevUnit.lessons.every((id) => completedLessons.includes(id))
              : true;
            const prevUnitMilestoneDone = prevUnit?.milestoneId
              ? completedMilestones.includes(prevUnit.milestoneId)
              : true;
            const prevUnitComplete = prevUnitLessonsDone && prevUnitMilestoneDone;
            const isUnlocked = i === 0 || prevUnitComplete;
            const isExpanded = expandedUnit === unit.id;

            function toggleExpand() {
              setExpandedUnit((prev) => (prev === unit.id ? null : unit.id));
            }

            return (
              <div key={unit.id} className={styles.unitGroup}>
                <div
                  className={`${styles.unitCard} ${complete ? styles.unitComplete : ''} ${isExpanded ? styles.unitExpanded : ''}`}
                  onClick={canExpand ? toggleExpand : undefined}
                  role={canExpand ? 'button' : undefined}
                  tabIndex={canExpand ? 0 : undefined}
                  aria-label={canExpand ? `${unit.title} — click to ${isExpanded ? 'collapse' : 'expand'}` : undefined}
                  aria-expanded={canExpand ? isExpanded : undefined}
                  onKeyDown={(e) => canExpand && (e.key === 'Enter' || e.key === ' ') && toggleExpand()}
                  style={{ cursor: canExpand ? 'pointer' : 'default' }}
                >
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
                      firstLesson && isUnlocked ? (
                        <Link
                          to={`/lesson/${firstLesson}`}
                          className={styles.unitStart}
                          onClick={(e) => e.stopPropagation()}
                        >
                          start →
                        </Link>
                      ) : (
                        <span className={styles.unitBadge} style={{ color: 'var(--muted)', borderColor: 'var(--border)' }}>
                          locked
                        </span>
                      )
                    ) : (
                      <span className={styles.unitBadge} style={{ color: 'var(--muted)', borderColor: 'var(--border)' }}>
                        coming soon
                      </span>
                    )}
                    {canExpand && (
                      <span className={styles.expandChevron}>{isExpanded ? '▲' : '▼'}</span>
                    )}
                  </div>
                </div>
                {isExpanded && (
                  <ul className={styles.lessonList}>
                    {unit.lessons.map((lessonId, li) => {
                      const isDone = completedLessons.includes(lessonId);
                      const isNext = !isDone && unit.lessons[li - 1] !== undefined && completedLessons.includes(unit.lessons[li - 1]);
                      const isLocked = !isDone && !isNext;
                      return (
                        <li key={lessonId} className={`${styles.lessonRow} ${isLocked ? styles.lessonLocked : ''}`}>
                          <span className={styles.lessonNum}>{String(li + 1).padStart(2, '0')}</span>
                          <span className={styles.lessonName}>{LESSON_TITLES[lessonId] ?? lessonId}</span>
                          {isDone && (
                            <Link to={`/lesson/${lessonId}`} className={styles.lessonRedo}>redo →</Link>
                          )}
                          {isNext && (
                            <Link to={`/lesson/${lessonId}`} className={styles.lessonContinue}>continue →</Link>
                          )}
                          {isLocked && (
                            <span className={styles.lessonLockedLabel}>locked</span>
                          )}
                        </li>
                      );
                    })}
                    {unit.milestoneId && (() => {
                      const milestone = getMilestoneById(unit.milestoneId);
                      if (!milestone) return null;
                      const allLessonsDone = total > 0 && done === total;
                      const milestoneDone = completedMilestones.includes(unit.milestoneId);
                      const milestoneNext = allLessonsDone && !milestoneDone;
                      const milestoneLocked = !allLessonsDone && !milestoneDone;
                      return (
                        <li
                          key={unit.milestoneId}
                          className={`${styles.lessonRow} ${styles.milestoneRow} ${milestoneLocked ? styles.lessonLocked : ''}`}
                        >
                          <span className={`${styles.lessonNum} ${styles.milestoneIcon}`}>★</span>
                          <span className={styles.lessonName}>{milestone.title}</span>
                          {milestoneDone && (
                            <Link to={`/milestone/${unit.milestoneId}`} className={styles.lessonRedo}>redo →</Link>
                          )}
                          {milestoneNext && (
                            <Link to={`/milestone/${unit.milestoneId}`} className={styles.lessonContinue}>start →</Link>
                          )}
                          {milestoneLocked && (
                            <span className={styles.lessonLockedLabel}>locked</span>
                          )}
                        </li>
                      );
                    })()}
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
