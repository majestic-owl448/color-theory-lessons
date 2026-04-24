import { useMemo, useState } from 'react';
import styles from './ReadInterfaceChallenge.module.css';
import { InterfaceMockup } from '../InterfaceMockup.tsx';

interface ReadInterfaceChallengeProps {
  onComplete: () => void;
}

type RoleId = 'focal' | 'low-contrast' | 'competing-accent' | 'accessible-text' | 'hierarchy-anchor';

type Target = {
  id: string;
  label: string;
  correctRole: RoleId;
};

const ROLE_OPTIONS: { id: RoleId; label: string }[] = [
  { id: 'focal', label: 'Focal point' },
  { id: 'low-contrast', label: 'Low-contrast failure' },
  { id: 'competing-accent', label: 'Competing accent' },
  { id: 'accessible-text', label: 'Accessible text' },
  { id: 'hierarchy-anchor', label: 'Hierarchy anchor' },
];

const TARGETS: Target[] = [
  { id: 'cta', label: 'Green CTA button', correctRole: 'focal' },
  { id: 'nav', label: 'Navigation links on blue header', correctRole: 'low-contrast' },
  { id: 'card', label: 'Orange card labels', correctRole: 'competing-accent' },
  { id: 'hero', label: 'Hero headline text', correctRole: 'accessible-text' },
  { id: 'hero-bg', label: 'Blue hero section background', correctRole: 'hierarchy-anchor' },
];

const MIN_TO_PASS = 4;

export function ReadInterfaceChallenge({ onComplete }: ReadInterfaceChallengeProps) {
  const [answers, setAnswers] = useState<Record<string, RoleId | ''>>({});

  const correctCount = useMemo(() => {
    return TARGETS.reduce((acc, target) => {
      return answers[target.id] === target.correctRole ? acc + 1 : acc;
    }, 0);
  }, [answers]);

  const allAnswered = TARGETS.every((target) => answers[target.id]);
  const passed = correctCount >= MIN_TO_PASS;

  return (
    <div className={styles.panel}>
      <InterfaceMockup />

      <div className={styles.meta}>
        <span>Label 5 interface regions</span>
        <span className={styles.score}>{correctCount} / 5 correct</span>
      </div>

      <div className={styles.grid}>
        {TARGETS.map((target) => {
          const selected = answers[target.id] ?? '';
          const isCorrect = selected !== '' && selected === target.correctRole;
          const isWrong = selected !== '' && selected !== target.correctRole;
          return (
            <label key={target.id} className={styles.row}>
              <span className={styles.label}>{target.label}</span>
              <select
                className={styles.select}
                value={selected}
                onChange={(event) => {
                  const value = event.target.value as RoleId | '';
                  setAnswers((prev) => ({ ...prev, [target.id]: value }));
                }}
              >
                <option value="">Choose role...</option>
                {ROLE_OPTIONS.map((role) => (
                  <option key={role.id} value={role.id}>{role.label}</option>
                ))}
              </select>
              <span className={`${styles.hint} ${isCorrect ? styles.good : isWrong ? styles.bad : ''}`}>
                {isCorrect ? 'Correct role.' : isWrong ? 'Not this role.' : ''}
              </span>
            </label>
          );
        })}
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.button}
          onClick={onComplete}
          disabled={!allAnswered || !passed}
        >
          finish challenge
        </button>
      </div>
    </div>
  );
}
