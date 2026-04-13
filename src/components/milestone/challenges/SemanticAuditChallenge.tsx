import { useMemo, useState } from 'react';
import styles from './SemanticAuditChallenge.module.css';

interface SemanticAuditChallengeProps {
  onComplete: () => void;
}

type Role =
  | 'page-bg'
  | 'surface'
  | 'primary-text'
  | 'secondary-text'
  | 'action'
  | 'success'
  | 'warning'
  | 'error';

interface Swatch {
  id: string;
  hex: string;
  role: Role;
}

const SWATCHES: Swatch[] = [
  { id: 's1', hex: '#0b1220', role: 'page-bg' },
  { id: 's2', hex: '#1c2536', role: 'surface' },
  { id: 's3', hex: '#f8fafc', role: 'primary-text' },
  { id: 's4', hex: '#cbd5e1', role: 'secondary-text' },
  { id: 's5', hex: '#3b82f6', role: 'action' },
  { id: 's6', hex: '#84cc16', role: 'success' },
  { id: 's7', hex: '#f97316', role: 'warning' },
  { id: 's8', hex: '#fb7185', role: 'error' },
];

const ROLE_LABELS: Record<Role, string> = {
  'page-bg': 'Page background',
  surface: 'Surface',
  'primary-text': 'Primary text',
  'secondary-text': 'Secondary text',
  action: 'Action',
  success: 'Success',
  warning: 'Warning',
  error: 'Error',
};

const PROBLEM_ANSWER = 'warning-error-too-close';

export function SemanticAuditChallenge({ onComplete }: SemanticAuditChallengeProps) {
  const [activeSwatch, setActiveSwatch] = useState<string | null>(null);
  const [assignments, setAssignments] = useState<Record<Role, string>>({} as Record<Role, string>);
  const [problem, setProblem] = useState('');

  const correctCount = useMemo(() => {
    return (Object.keys(ROLE_LABELS) as Role[]).reduce((acc, role) => {
      const selectedId = assignments[role];
      const swatch = SWATCHES.find((candidate) => candidate.id === selectedId);
      return swatch?.role === role ? acc + 1 : acc;
    }, 0);
  }, [assignments]);

  const labelsAssigned = (Object.keys(ROLE_LABELS) as Role[]).every((role) => !!assignments[role]);
  const rolePass = correctCount >= 7;
  const problemPass = problem === PROBLEM_ANSWER;
  const passed = labelsAssigned && rolePass && problemPass;

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span>Assign semantic roles</span>
        <span>{correctCount} / 8 correct</span>
      </div>

      <div className={styles.swatches}>
        {SWATCHES.map((swatch) => (
          <button
            key={swatch.id}
            type="button"
            className={`${styles.swatch} ${activeSwatch === swatch.id ? styles.active : ''}`}
            onClick={() => setActiveSwatch(swatch.id)}
            aria-label={`Select swatch ${swatch.hex}`}
          >
            <span className={styles.color} style={{ backgroundColor: swatch.hex }} />
            <code>{swatch.hex.toUpperCase()}</code>
          </button>
        ))}
      </div>

      <div className={styles.roles}>
        {(Object.keys(ROLE_LABELS) as Role[]).map((role) => (
          <button
            key={role}
            type="button"
            className={styles.role}
            onClick={() => {
              if (!activeSwatch) return;
              setAssignments((prev) => ({ ...prev, [role]: activeSwatch }));
            }}
            disabled={!activeSwatch}
          >
            <span>{ROLE_LABELS[role]}</span>
            <code>{assignments[role] ? SWATCHES.find((swatch) => swatch.id === assignments[role])?.hex.toUpperCase() : 'unassigned'}</code>
          </button>
        ))}
      </div>

      <p className={styles.help}>
        Select a swatch first, then click a role label to assign it.
      </p>

      <div className={styles.problem}>
        <p>Which role issue exists in this set?</p>
        <select value={problem} onChange={(event) => setProblem(event.target.value)}>
          <option value="">Choose issue...</option>
          <option value="warning-error-too-close">Warning and error hues are too close</option>
          <option value="surface-too-bright">Surface is brighter than primary text</option>
          <option value="action-too-muted">Action color is too muted for links</option>
          <option value="success-too-dark">Success color is darker than page background</option>
        </select>
      </div>

      <div className={styles.status}>
        <p className={rolePass ? styles.good : styles.bad}>Need at least 7 of 8 roles assigned correctly</p>
        <p className={problemPass ? styles.good : styles.bad}>Need to identify the warning/error semantic problem</p>
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.button} disabled={!passed} onClick={onComplete}>
          finish challenge
        </button>
      </div>
    </div>
  );
}
