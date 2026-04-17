import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { LessonConfig } from '../../types/lesson.ts';
import { useAppDispatch } from '../../state/app-context.tsx';
import { units } from '../../data/units.ts';
import { ToolRenderer } from '../tools/ToolRenderer.tsx';
import styles from './LessonPlayer.module.css';

interface LessonPlayerProps {
  lesson: LessonConfig;
}

type Phase = 'steps' | 'challenge' | 'quiz' | 'complete';

interface QuizAnswer {
  questionId: string;
  choiceId: string;
  isCorrect: boolean;
}

export function LessonPlayer({ lesson }: LessonPlayerProps) {
  const dispatch = useAppDispatch();
  const [phase, setPhase] = useState<Phase>('steps');
  const [stepIndex, setStepIndex] = useState(0);
  const [challengeDone, setChallengeDone] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleNextStep() {
    if (stepIndex < lesson.steps.length - 1) {
      setStepIndex((i) => i + 1);
    } else {
      setPhase('challenge');
    }
  }

  function handlePrevStep() {
    if (stepIndex > 0) setStepIndex((i) => i - 1);
  }

  function handleChallengeComplete() {
    setChallengeDone(true);
    if (lesson.quizItems.length > 0) {
      setPhase('quiz');
    } else {
      finishLesson();
    }
  }

  function handleChoiceSelect(choiceId: string) {
    if (submitted) return;
    setSelectedChoice(choiceId);
  }

  function handleRedo() {
    setPhase('steps');
    setStepIndex(0);
    setChallengeDone(false);
    setQuizIndex(0);
    setAnswers([]);
    setSelectedChoice(null);
    setSubmitted(false);
  }

  function handleSubmitAnswer() {
    if (!selectedChoice || submitted) return;
    const question = lesson.quizItems[quizIndex];
    const choice = question.choices.find((c) => c.id === selectedChoice);
    if (!choice) return;
    setSubmitted(true);
    setAnswers((prev) => [
      ...prev,
      { questionId: question.id, choiceId: selectedChoice, isCorrect: choice.isCorrect },
    ]);
  }

  function handleNextQuestion() {
    setSelectedChoice(null);
    setSubmitted(false);
    if (quizIndex < lesson.quizItems.length - 1) {
      setQuizIndex((i) => i + 1);
    } else {
      finishLesson();
    }
  }

  function finishLesson() {
    dispatch({ type: 'COMPLETE_LESSON', lessonId: lesson.id });
    if (lesson.glossaryTerms.length > 0) {
      dispatch({ type: 'ADD_GLOSSARY_TERMS', terms: lesson.glossaryTerms });
    }
    setPhase('complete');
  }

  const question = phase === 'quiz' ? lesson.quizItems[quizIndex] : null;
  const challenge = lesson.challenges[0] ?? null;
  const currentStep = lesson.steps[stepIndex];

  return (
    <div className={styles.layout}>
      {/* ── Left instruction panel ── */}
      <aside className={styles.panel}>
        <div className={styles.lessonMeta}>
          <span className={styles.unitLabel}>
            Unit {lesson.unitId.split('-')[1]} · Lesson {lesson.id.split('-')[1].replace('l', '')}
          </span>
          <h1 className={styles.lessonTitle}>{lesson.title}</h1>
        </div>

        {/* Progress dots */}
        <div className={styles.progress} aria-label="Lesson progress">
          {lesson.steps.map((_, i) => (
            <span
              key={i}
              className={`${styles.progressDot} ${
                phase === 'steps' && i < stepIndex
                  ? styles.done
                  : phase === 'steps' && i === stepIndex
                    ? styles.current
                    : phase !== 'steps'
                      ? styles.done
                      : ''
              }`}
            />
          ))}
          <span
            className={`${styles.progressDot} ${
              challengeDone || phase === 'quiz' || phase === 'complete' || phase === 'challenge' ? styles.done : ''
            }`}
          />
          {lesson.quizItems.map((_, i) => (
            <span
              key={`q${i}`}
              className={`${styles.progressDot} ${
                phase === 'quiz' && i < quizIndex
                  ? styles.done
                  : phase === 'quiz' && i === quizIndex
                    ? styles.current
                    : phase === 'complete'
                      ? styles.done
                      : ''
              }`}
            />
          ))}
        </div>

        {/* ── Steps phase ── */}
        {phase === 'steps' && (
          <div className={styles.stepContent}>
            <span className={styles.stepNumber}>
              {stepIndex + 1} / {lesson.steps.length}
            </span>
            <p className={styles.stepText}>{currentStep.text}</p>
            {stepIndex === lesson.steps.length - 1 && challenge && (
              <>
                <p className={styles.challengePrompt}>{challenge.prompt}</p>
                <div className={styles.hints}>
                  <span className={styles.hintsLabel}>hints</span>
                  {challenge.hints.map((h, i) => (
                    <p key={i} className={styles.hint}>{h}</p>
                  ))}
                </div>
              </>
            )}
            <div className={styles.stepActions}>
              <button
                className={styles.btnSecondary}
                onClick={handlePrevStep}
                disabled={stepIndex === 0}
              >
                back
              </button>
              {stepIndex < lesson.steps.length - 1 ? (
                <button className={styles.btnPrimary} onClick={handleNextStep}>
                  next
                </button>
              ) : challengeDone ? (
                <button className={styles.btnPrimary} onClick={handleChallengeComplete}>
                  {lesson.quizItems.length > 0 ? 'take the quiz →' : 'finish lesson →'}
                </button>
              ) : null}
            </div>
          </div>
        )}

        {/* ── Challenge phase ── */}
        {phase === 'challenge' && challenge && (
          <div className={styles.stepContent}>
            <span className={styles.stepNumber}>challenge</span>
            <p className={styles.challengePrompt}>{challenge.prompt}</p>
            <div className={styles.hints}>
              <span className={styles.hintsLabel}>hints</span>
              {challenge.hints.map((h, i) => (
                <p key={i} className={styles.hint}>{h}</p>
              ))}
            </div>
            {challengeDone && (
              <div className={styles.stepActions}>
                <button className={styles.btnPrimary} onClick={handleChallengeComplete}>
                  {lesson.quizItems.length > 0 ? 'take the quiz →' : 'finish lesson →'}
                </button>
              </div>
            )}
          </div>
        )}

        {/* ── Quiz phase ── */}
        {phase === 'quiz' && question && (
          <div className={styles.stepContent}>
            <span className={styles.quizHeader}>
              question {quizIndex + 1} of {lesson.quizItems.length}
            </span>
            <p className={styles.quizPrompt}>{question.prompt}</p>
            <div className={styles.choices}>
              {question.choices.map((choice) => {
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

            {submitted && question.choices.find((c) => c.id === selectedChoice)?.explanation && (
              <p className={styles.explanation}>
                {question.choices.find((c) => c.id === selectedChoice)!.explanation}
              </p>
            )}

            <div className={styles.stepActions}>
              {!submitted ? (
                <button
                  className={styles.btnPrimary}
                  onClick={handleSubmitAnswer}
                  disabled={!selectedChoice}
                >
                  check
                </button>
              ) : (
                <button className={styles.btnPrimary} onClick={handleNextQuestion}>
                  {quizIndex < lesson.quizItems.length - 1 ? 'next question →' : 'finish lesson →'}
                </button>
              )}
            </div>
          </div>
        )}

        {/* ── Complete phase ── */}
        {phase === 'complete' && (() => {
          const allLessonIds = units.flatMap((unit) => unit.lessons);
          const idx = allLessonIds.indexOf(lesson.id);
          const nextLessonId = idx >= 0 ? allLessonIds[idx + 1] : undefined;
          const nextLesson = nextLessonId
            ? { id: nextLessonId, unitId: nextLessonId.split('-')[0].replace('u', 'unit-') }
            : undefined;
          const isSameUnit = nextLesson?.unitId === lesson.unitId;
          const currentUnit = units.find((u) => u.id === lesson.unitId);
          const isLastInUnit = !isSameUnit;
          const milestoneLink =
            isLastInUnit && currentUnit?.milestoneId
              ? `/milestone/${currentUnit.milestoneId}`
              : null;
          return (
            <div className={styles.complete}>
              <span className={styles.completeBadge}>lesson complete</span>
              <p className={styles.completeTitle}>{lesson.title}</p>
              <p className={styles.completeBody}>
                {answers.filter((a) => a.isCorrect).length} of {lesson.quizItems.length} quiz
                questions correct.
              </p>
              <div className={styles.completeActions}>
                {isSameUnit && nextLesson ? (
                  <Link to={`/lesson/${nextLesson.id}`} className={styles.btnPrimary}>
                    next lesson →
                  </Link>
                ) : milestoneLink ? (
                  <Link to={milestoneLink} className={styles.btnPrimary}>
                    start milestone →
                  </Link>
                ) : nextLesson ? (
                  <Link to={`/lesson/${nextLesson.id}`} className={styles.btnPrimary}>
                    next unit →
                  </Link>
                ) : null}
                <button className={styles.btnSecondary} onClick={handleRedo}>
                  redo lesson
                </button>
                <Link to="/" className={styles.btnSecondary}>
                  ← all units
                </Link>
              </div>
            </div>
          );
        })()}
      </aside>

      {/* ── Right tool panel ── */}
      <ToolRenderer
        lesson={lesson}
        toolUnlocked={phase !== 'steps' || stepIndex === lesson.steps.length - 1}
        onChallengeComplete={() => setChallengeDone(true)}
      />
    </div>
  );
}
