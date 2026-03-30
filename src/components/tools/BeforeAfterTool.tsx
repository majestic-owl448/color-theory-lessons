import { useState } from 'react';
import shellStyles from './ToolShell.module.css';
import styles from './BeforeAfterTool.module.css';

const COLOR_JOBS = ['drawing attention', 'grouping items', 'signaling status', 'separating sections', 'making text hard to read', 'no clear purpose'] as const;
type ColorJob = typeof COLOR_JOBS[number];

interface SpotItem {
  id: string;
  label: string;
  swatchColor: string;
  correctJob: ColorJob;
}

const SPOT_ITEMS: SpotItem[] = [
  { id: 'cta', label: 'Gold CTA button on dark surface', swatchColor: '#f1be32', correctJob: 'drawing attention' },
  { id: 'nav-bg', label: 'Deep navy nav background', swatchColor: '#1b1b32', correctJob: 'separating sections' },
  { id: 'success', label: 'Green success text after form submit', swatchColor: '#acd157', correctJob: 'signaling status' },
  { id: 'info-card', label: 'Blue left border on info card', swatchColor: '#99c9ff', correctJob: 'grouping items' },
  { id: 'muted-help', label: 'Gray helper text below input', swatchColor: '#858591', correctJob: 'making text hard to read' },
  { id: 'random-hero', label: 'Bright orange hero background', swatchColor: '#ff8c00', correctJob: 'no clear purpose' },
];

interface BeforeAfterToolProps {
  variant?: 'color-function' | 'hierarchy';
  onComplete?: () => void;
}

export function BeforeAfterTool({ variant = 'color-function', onComplete }: BeforeAfterToolProps) {
  const [spotAnswers, setSpotAnswers] = useState<Record<string, ColorJob | ''>>(() =>
    Object.fromEntries(SPOT_ITEMS.map((s) => [s.id, ''])),
  );
  const [done, setDone] = useState(false);

  const correct = SPOT_ITEMS.filter((s) => spotAnswers[s.id] === s.correctJob).length;
  const allAnswered = SPOT_ITEMS.every((s) => spotAnswers[s.id] !== '');
  const enoughCorrect = correct >= 4;

  function handleChange(id: string, val: string) {
    if (done) return;
    setSpotAnswers((prev) => ({ ...prev, [id]: val as ColorJob }));
  }

  function handleDone() {
    setDone(true);
    if (enoughCorrect) onComplete?.();
  }

  if (variant === 'hierarchy') {
    return (
      <div className={shellStyles.shell}>
        <span className={shellStyles.toolLabel}>hierarchy tuner</span>
        <HierarchyDemo onComplete={onComplete} />
      </div>
    );
  }

  return (
    <div className={shellStyles.shell}>
      <span className={shellStyles.toolLabel}>before / after comparison</span>

      {/* Before / After mockups */}
      <div className={styles.pair}>
        <div className={styles.panel}>
          <span className={styles.panelLabel}>purposeful color</span>
          <div className={`${styles.mockup} ${styles.mockupGood}`}>
            <div className="nav">
              <span className="navLogo">color-quest$</span>
              <span className="navLink">settings</span>
            </div>
            <div className="hero">
              <span className="heroHeading">Learn color theory</span>
              <span className="heroSub">Six interactive units for developers.</span>
              <span className="cta">start learning</span>
            </div>
            <span className="successBadge">✓ Unit 1 complete</span>
            <div className="card">Lesson 2: Hue, saturation, and lightness →</div>
          </div>
        </div>
        <div className={styles.panel}>
          <span className={styles.panelLabel}>noisy color</span>
          <div className={`${styles.mockup} ${styles.mockupBad}`}>
            <div className="nav">
              <span className="navLogo">color-quest$</span>
              <span className="navLink">settings</span>
            </div>
            <div className="hero">
              <span className="heroHeading">Learn color theory</span>
              <span className="heroSub">Six interactive units for developers.</span>
              <span className="cta">start learning</span>
            </div>
            <span className="successBadge">✓ Unit 1 complete</span>
            <div className="card">Lesson 2: Hue, saturation, and lightness →</div>
          </div>
        </div>
      </div>

      {/* Spot-the-job activity */}
      <span className={shellStyles.toolLabel}>spot the job of each color</span>
      <div className={styles.spotGrid}>
        {SPOT_ITEMS.map((item) => {
          const chosen = spotAnswers[item.id];
          const isCorrect = done && chosen === item.correctJob;
          const isWrong = done && chosen !== '' && chosen !== item.correctJob;
          return (
            <div key={item.id} className={`${styles.spotCard} ${isCorrect ? styles.answered : ''}`}>
              <div
                className={styles.spotSwatch}
                style={{ backgroundColor: item.swatchColor }}
              />
              <span className={styles.spotLabel}>{item.label}</span>
              <select
                className={styles.spotSelect}
                value={spotAnswers[item.id]}
                onChange={(e) => handleChange(item.id, e.target.value)}
                disabled={done}
                aria-label={`What is ${item.label} doing?`}
              >
                <option value="">— choose —</option>
                {COLOR_JOBS.map((job) => (
                  <option key={job} value={job}>{job}</option>
                ))}
              </select>
              {done && (
                <span className={styles.feedback} style={{ color: isCorrect ? 'var(--green)' : isWrong ? 'var(--red)' : 'var(--muted)' }}>
                  {isCorrect ? '✓ correct' : isWrong ? `✗ → ${item.correctJob}` : '—'}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {!done && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
          <button
            className={styles.doneBtn}
            onClick={handleDone}
            disabled={!allAnswered}
          >
            check answers
          </button>
          <span className={styles.score}>{Object.values(spotAnswers).filter(Boolean).length} / {SPOT_ITEMS.length} answered</span>
        </div>
      )}

      {done && (
        <span className={styles.score}>{correct} / {SPOT_ITEMS.length} correct</span>
      )}
    </div>
  );
}

/* ── Hierarchy demo (lesson 5) ────────────────────────────────────────── */

const HIERARCHY_ITEMS = [
  { id: 'submit', label: 'Submit', role: 'primary' },
  { id: 'draft', label: 'Save Draft', role: 'secondary' },
  { id: 'cancel', label: 'Cancel', role: 'tertiary' },
] as const;
type BtnRole = 'primary' | 'secondary' | 'tertiary';

function HierarchyDemo({ onComplete }: { onComplete?: () => void }) {
  const [roles, setRoles] = useState<Record<string, BtnRole>>({
    submit: 'secondary',
    draft: 'secondary',
    cancel: 'secondary',
  });
  const [checked, setChecked] = useState(false);

  const btnStyle = (role: BtnRole): React.CSSProperties => {
    if (role === 'primary') return { background: 'var(--yellow)', color: 'var(--gray-90)', border: 'none', padding: '0.5rem 1.2rem', borderRadius: '3px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer' };
    if (role === 'secondary') return { background: 'transparent', color: 'var(--secondary-foreground)', border: '1px solid var(--border)', padding: '0.5rem 1.2rem', borderRadius: '3px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', cursor: 'pointer' };
    return { background: 'transparent', color: 'var(--muted)', border: 'none', padding: '0.5rem 0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', textDecoration: 'underline', cursor: 'pointer' };
  };

  const isCorrect = roles.submit === 'primary' && roles.draft === 'secondary' && roles.cancel === 'tertiary';

  function handleCheck() {
    setChecked(true);
    if (isCorrect) onComplete?.();
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
      {/* Live preview */}
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '6px', padding: 'var(--spacing-lg)', display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
        {HIERARCHY_ITEMS.map((item) => (
          <button key={item.id} style={btnStyle(roles[item.id])}>{item.label}</button>
        ))}
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase' }}>assign roles</span>
        {HIERARCHY_ITEMS.map((item) => (
          <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', width: '90px' }}>{item.label}</span>
            <select
              value={roles[item.id]}
              onChange={(e) => setRoles((r) => ({ ...r, [item.id]: e.target.value as BtnRole }))}
              disabled={checked}
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', background: 'var(--primary-background)', color: 'var(--primary-foreground)', border: '1px solid var(--border)', borderRadius: '3px', padding: '0.3rem 0.5rem' }}
            >
              <option value="primary">primary (accent)</option>
              <option value="secondary">secondary (outlined)</option>
              <option value="tertiary">tertiary (text link)</option>
            </select>
          </div>
        ))}
      </div>

      {!checked && (
        <button
          onClick={handleCheck}
          style={{ alignSelf: 'flex-start', padding: '0.5rem 1.25rem', background: 'var(--yellow)', color: 'var(--gray-90)', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.85rem', borderRadius: '3px', border: 'none', cursor: 'pointer' }}
        >
          check hierarchy
        </button>
      )}

      {checked && (
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: isCorrect ? 'var(--green)' : 'var(--red)' }}>
          {isCorrect
            ? '✓ Submit stands out as the primary action. Well done.'
            : '✗ Submit should be primary, Save Draft secondary, and Cancel a text link.'}
        </p>
      )}
    </div>
  );
}
