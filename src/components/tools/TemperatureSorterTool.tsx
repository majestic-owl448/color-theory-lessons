import { useState } from 'react';
import shellStyles from './ToolShell.module.css';

interface Swatch {
  id: string;
  label: string;
  color: string;
  correct: 'warm' | 'cool' | 'neutral';
}

const SWATCHES: Swatch[] = [
  { id: 'coral', label: 'Coral', color: '#ff6b6b', correct: 'warm' },
  { id: 'navy', label: 'Navy', color: '#1a3a6b', correct: 'cool' },
  { id: 'sand', label: 'Sand', color: '#c9b99a', correct: 'neutral' },
  { id: 'amber', label: 'Amber', color: '#f59e0b', correct: 'warm' },
  { id: 'teal', label: 'Teal', color: '#14b8a6', correct: 'cool' },
  { id: 'stone', label: 'Stone gray', color: '#78716c', correct: 'neutral' },
  { id: 'rust', label: 'Rust', color: '#c2410c', correct: 'warm' },
  { id: 'slate', label: 'Slate blue', color: '#475569', correct: 'cool' },
  { id: 'cream', label: 'Cream', color: '#fef9c3', correct: 'neutral' },
];

const INTERFACE_GOALS = [
  { id: 'friendly', label: 'Friendly sign-up page', correct: 'warm' as const },
  { id: 'dashboard', label: 'Serious data dashboard', correct: 'cool' as const },
  { id: 'urgent', label: 'Urgent alert banner', correct: 'warm' as const },
];

type Temperature = 'warm' | 'cool' | 'neutral';

interface TemperatureSorterToolProps {
  onComplete?: () => void;
}

export function TemperatureSorterTool({ onComplete }: TemperatureSorterToolProps) {
  const [swatchAnswers, setSwatchAnswers] = useState<Record<string, Temperature | ''>>(() =>
    Object.fromEntries(SWATCHES.map((s) => [s.id, ''])),
  );
  const [goalAnswers, setGoalAnswers] = useState<Record<string, Temperature | ''>>(() =>
    Object.fromEntries(INTERFACE_GOALS.map((g) => [g.id, ''])),
  );
  const [checked, setChecked] = useState(false);

  const swatchCorrect = SWATCHES.filter((s) => swatchAnswers[s.id] === s.correct).length;
  const goalCorrect = INTERFACE_GOALS.filter((g) => goalAnswers[g.id] === g.correct).length;
  const totalCorrect = swatchCorrect + goalCorrect;
  const totalItems = SWATCHES.length + INTERFACE_GOALS.length;
  const allAnswered =
    SWATCHES.every((s) => swatchAnswers[s.id] !== '') &&
    INTERFACE_GOALS.every((g) => goalAnswers[g.id] !== '');

  function handleCheck() {
    setChecked(true);
    if (totalCorrect >= totalItems * 0.7) {
      onComplete?.();
    }
  }

  const tempColor = (t: Temperature | '') =>
    t === 'warm' ? '#f59e0b' : t === 'cool' ? '#60a5fa' : t === 'neutral' ? '#9ca3af' : 'transparent';

  return (
    <div className={shellStyles.shell}>
      <span className={shellStyles.toolLabel}>palette temperature sorter</span>

      {/* Swatch sorting */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase' }}>
          sort each swatch
        </span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 'var(--spacing-sm)' }}>
          {SWATCHES.map((s) => {
            const chosen = swatchAnswers[s.id];
            const isCorrect = checked && chosen === s.correct;
            const isWrong = checked && chosen !== '' && chosen !== s.correct;
            return (
              <div
                key={s.id}
                style={{
                  background: 'var(--surface)',
                  border: `1px solid ${isCorrect ? 'var(--green)' : isWrong ? 'var(--red)' : 'var(--border)'}`,
                  borderRadius: 'var(--radius-sm)',
                  padding: 'var(--spacing-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <div
                  style={{
                    height: '40px',
                    borderRadius: '3px',
                    backgroundColor: s.color,
                    border: `2px solid ${tempColor(chosen)}`,
                    transition: 'border-color 0.2s ease',
                  }}
                />
                <span style={{ fontSize: '0.8rem', color: 'var(--secondary-foreground)' }}>{s.label}</span>
                <select
                  value={swatchAnswers[s.id]}
                  disabled={checked}
                  onChange={(e) => setSwatchAnswers((prev) => ({ ...prev, [s.id]: e.target.value as Temperature }))}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    background: 'var(--primary-background)',
                    color: 'var(--primary-foreground)',
                    border: '1px solid var(--border)',
                    borderRadius: '3px',
                    padding: '0.25rem 0.35rem',
                    cursor: checked ? 'not-allowed' : 'pointer',
                  }}
                  aria-label={`Temperature for ${s.label}`}
                >
                  <option value="">— ?</option>
                  <option value="warm">warm</option>
                  <option value="cool">cool</option>
                  <option value="neutral">neutral</option>
                </select>
                {checked && (
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: isCorrect ? 'var(--green)' : isWrong ? 'var(--red)' : 'var(--muted)' }}>
                    {isCorrect ? '✓' : isWrong ? `→ ${s.correct}` : '—'}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Interface goals */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase' }}>
          match the palette direction to the goal
        </span>
        {INTERFACE_GOALS.map((g) => {
          const chosen = goalAnswers[g.id];
          const isCorrect = checked && chosen === g.correct;
          const isWrong = checked && chosen !== '' && chosen !== g.correct;
          return (
            <div
              key={g.id}
              style={{
                background: 'var(--surface)',
                border: `1px solid ${isCorrect ? 'var(--green)' : isWrong ? 'var(--red)' : 'var(--border)'}`,
                borderRadius: 'var(--radius-sm)',
                padding: 'var(--spacing-sm) var(--spacing-md)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-md)',
              }}
            >
              <span style={{ flex: 1, fontSize: '0.9rem' }}>{g.label}</span>
              <select
                value={goalAnswers[g.id]}
                disabled={checked}
                onChange={(e) => setGoalAnswers((prev) => ({ ...prev, [g.id]: e.target.value as Temperature }))}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  background: 'var(--primary-background)',
                  color: 'var(--primary-foreground)',
                  border: '1px solid var(--border)',
                  borderRadius: '3px',
                  padding: '0.3rem 0.5rem',
                  cursor: checked ? 'not-allowed' : 'pointer',
                }}
                aria-label={`Palette direction for ${g.label}`}
              >
                <option value="">— choose</option>
                <option value="warm">warm</option>
                <option value="cool">cool</option>
                <option value="neutral">balanced</option>
              </select>
              {checked && (
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: isCorrect ? 'var(--green)' : isWrong ? 'var(--red)' : 'var(--muted)', width: '80px' }}>
                  {isCorrect ? '✓ correct' : isWrong ? `→ ${g.correct}` : '—'}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {!checked && (
        <button
          disabled={!allAnswered}
          onClick={handleCheck}
          style={{
            alignSelf: 'flex-start',
            padding: '0.5rem 1.25rem',
            background: allAnswered ? 'var(--yellow)' : 'var(--border)',
            color: 'var(--gray-90)',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            fontSize: '0.85rem',
            borderRadius: 'var(--radius-sm)',
            border: 'none',
            cursor: allAnswered ? 'pointer' : 'not-allowed',
          }}
        >
          check answers
        </button>
      )}

      {checked && (
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: totalCorrect >= totalItems * 0.7 ? 'var(--green)' : 'var(--yellow)' }}>
          {totalCorrect} / {totalItems} correct
          {totalCorrect >= totalItems * 0.7 ? ' — well done!' : ' — review the incorrect ones.'}
        </p>
      )}
    </div>
  );
}
