import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { MilestoneConfig } from '../../types/milestone.ts';
import { useAppDispatch } from '../../state/app-context.tsx';
import { units } from '../../data/units.ts';
import { InterfaceMockup } from './InterfaceMockup.tsx';
import styles from './MilestonePlayer.module.css';

interface MilestonePlayerProps {
  milestone: MilestoneConfig;
}

type Phase = 'question' | 'part-summary' | 'complete';

interface Answer {
  questionId: string;
  isCorrect: boolean;
}

export function MilestonePlayer({ milestone }: MilestonePlayerProps) {
  const dispatch = useAppDispatch();
  const [partIndex, setPartIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [phase, setPhase] = useState<Phase>('question');

  const currentPart = milestone.parts[partIndex];
  const currentQuestion = phase === 'question' ? currentPart.questions[questionIndex] : null;

  const totalQuestions = milestone.parts.reduce((acc, p) => acc + p.questions.length, 0);
  const totalCorrect = answers.filter((a) => a.isCorrect).length;
  const passed = totalCorrect >= milestone.passThreshold;

  // How many questions completed before the current part
  const questionsBeforePart = milestone.parts
    .slice(0, partIndex)
    .reduce((acc, p) => acc + p.questions.length, 0);
  const globalQuestionNumber = questionsBeforePart + questionIndex + 1;

  // Correct count within the current part only (for part-summary)
  const partQuestionIds = new Set(currentPart.questions.map((q) => q.id));
  const partCorrect = answers.filter((a) => partQuestionIds.has(a.questionId) && a.isCorrect).length;

  // Next unit's first lesson (for the complete screen)
  const currentUnitIndex = units.findIndex((u) => u.id === milestone.unitId);
  const nextUnit = currentUnitIndex >= 0 ? units[currentUnitIndex + 1] : undefined;
  const nextUnitFirstLesson = nextUnit?.lessons[0];

  function handleChoiceSelect(id: string) {
    if (submitted) return;
    setSelectedChoice(id);
  }

  function handleSubmit() {
    if (!selectedChoice || submitted || !currentQuestion) return;
    const choice = currentQuestion.choices.find((c) => c.id === selectedChoice);
    if (!choice) return;
    setSubmitted(true);
    setAnswers((prev) => [
      ...prev,
      { questionId: currentQuestion.id, isCorrect: choice.isCorrect },
    ]);
  }

  function handleNext() {
    const isLastQuestion = questionIndex >= currentPart.questions.length - 1;
    const isLastPart = partIndex >= milestone.parts.length - 1;

    if (!isLastQuestion) {
      setQuestionIndex((i) => i + 1);
      setSelectedChoice(null);
      setSubmitted(false);
    } else if (!isLastPart) {
      setPhase('part-summary');
    } else {
      // Last question of last part — complete the milestone
      dispatch({ type: 'COMPLETE_MILESTONE', milestoneId: milestone.id });
      setPhase('complete');
    }
  }

  function handleNextPart() {
    setPartIndex((i) => i + 1);
    setQuestionIndex(0);
    setSelectedChoice(null);
    setSubmitted(false);
    setPhase('question');
  }

  function handleRetry() {
    setPartIndex(0);
    setQuestionIndex(0);
    setSelectedChoice(null);
    setSubmitted(false);
    setAnswers([]);
    setPhase('question');
  }

  // Determine right-panel content
  const showMockup =
    milestone.heroVisual === 'interface-mockup' && phase !== 'complete';
  const swatchColor =
    phase === 'question' && currentQuestion?.swatchColor
      ? currentQuestion.swatchColor
      : undefined;

  return (
    <div className={styles.layout}>
      {/* ── Left instruction panel ── */}
      <aside className={styles.panel}>
        <div className={styles.milestoneMeta}>
          <span className={styles.unitLabel}>
            Unit {milestone.unitId.split('-')[1]} · Milestone
          </span>
          <h1 className={styles.milestoneTitle}>{milestone.title}</h1>
        </div>

        {/* Part progress dots */}
        <div className={styles.progress} aria-label="Milestone progress">
          {milestone.parts.map((p, i) => (
            <span
              key={p.id}
              className={`${styles.progressDot} ${
                i < partIndex
                  ? styles.done
                  : i === partIndex && phase !== 'complete'
                    ? styles.current
                    : phase === 'complete'
                      ? styles.done
                      : ''
              }`}
            />
          ))}
        </div>

        {/* ── Question phase ── */}
        {phase === 'question' && currentQuestion && (
          <div className={styles.stepContent}>
            <div className={styles.questionMeta}>
              <span className={styles.partLabel}>
                Part {partIndex + 1} of {milestone.parts.length} — {currentPart.title}
              </span>
              <span className={styles.questionCounter}>
                {globalQuestionNumber} / {totalQuestions}
              </span>
            </div>

            <p className={styles.questionPrompt}>{currentQuestion.prompt}</p>

            <div className={styles.choices}>
              {currentQuestion.choices.map((choice) => {
                const isSelected = selectedChoice === choice.id;
                const showResult = submitted;
                return (
                  <button
                    key={choice.id}
                    className={`${styles.choice} ${
                      showResult && choice.isCorrect
                        ? styles.correct
                        : showResult && isSelected && !choice.isCorrect
                          ? styles.incorrect
                          : isSelected && !showResult
                            ? styles.chosen
                            : ''
                    }`}
                    onClick={() => handleChoiceSelect(choice.id)}
                    disabled={submitted && !choice.isCorrect && selectedChoice !== choice.id}
                  >
                    <span className={styles.choiceKey}>{choice.id}.</span>
                    <span>{choice.label}</span>
                  </button>
                );
              })}
            </div>

            {submitted && currentQuestion.choices.find((c) => c.id === selectedChoice)?.explanation && (
              <p className={styles.explanation}>
                {currentQuestion.choices.find((c) => c.id === selectedChoice)!.explanation}
              </p>
            )}

            <div className={styles.stepActions}>
              {!submitted ? (
                <button
                  className={styles.btnPrimary}
                  onClick={handleSubmit}
                  disabled={!selectedChoice}
                >
                  check
                </button>
              ) : (
                <button className={styles.btnPrimary} onClick={handleNext}>
                  {questionIndex < currentPart.questions.length - 1
                    ? 'next →'
                    : partIndex < milestone.parts.length - 1
                      ? 'finish part →'
                      : 'finish milestone →'}
                </button>
              )}
            </div>
          </div>
        )}

        {/* ── Part summary phase ── */}
        {phase === 'part-summary' && (
          <div className={styles.partSummary}>
            <span className={styles.partSummaryBadge}>
              Part {partIndex + 1} complete
            </span>
            <p className={styles.partSummaryTitle}>{currentPart.title}</p>
            <p className={styles.partSummaryScore}>
              {partCorrect} of {currentPart.questions.length} correct
            </p>
            <div className={styles.stepActions}>
              <button className={styles.btnPrimary} onClick={handleNextPart}>
                next part →
              </button>
            </div>
          </div>
        )}

        {/* ── Complete phase ── */}
        {phase === 'complete' && (
          <div className={styles.complete}>
            <span
              className={`${styles.completeBadge} ${passed ? styles.completeBadgePassed : styles.completeBadgeFailed}`}
            >
              {passed ? 'milestone passed' : 'milestone complete'}
            </span>
            <p className={styles.completeTitle}>{milestone.title}</p>
            <p className={styles.completeScore}>
              {totalCorrect} / {totalQuestions} correct
              {passed
                ? ` — you passed (needed ${milestone.passThreshold})`
                : ` — needed ${milestone.passThreshold} to pass`}
            </p>
            <div className={styles.completeActions}>
              {nextUnitFirstLesson && (
                <Link
                  to={`/lesson/${nextUnitFirstLesson}`}
                  className={styles.btnPrimary}
                >
                  continue to Unit {(currentUnitIndex + 2)} →
                </Link>
              )}
              <button className={styles.btnSecondary} onClick={handleRetry}>
                retry milestone
              </button>
              <Link to="/" className={styles.btnSecondary}>
                ← all units
              </Link>
            </div>
          </div>
        )}
      </aside>

      {/* ── Right context panel ── */}
      <div className={styles.contextPanel}>
        {swatchColor ? (
          <div className={styles.swatchPanel}>
            <span className={styles.swatchLabel}>target color</span>
            <div
              className={styles.swatch}
              style={{ backgroundColor: swatchColor }}
            />
            <span className={styles.swatchHex}>{swatchColor.toUpperCase()}</span>
            <p className={styles.swatchHint}>
              Identify which RGB channel values produce this color.
            </p>
          </div>
        ) : showMockup ? (
          <InterfaceMockup />
        ) : (
          <div className={styles.contextCard}>
            <span className={styles.contextCardLabel}>
              Part {partIndex + 1} of {milestone.parts.length}
            </span>
            <p className={styles.contextCardTitle}>{currentPart.title}</p>
            <p className={styles.contextCardDesc}>{currentPart.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
