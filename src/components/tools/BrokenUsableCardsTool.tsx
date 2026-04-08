import { useState, useRef } from 'react';
import shellStyles from './ToolShell.module.css';

type Classification = 'Usable' | 'Risky' | 'Broken';

interface Card {
  id: string;
  name: string;
  correct: Classification;
  visual: React.ReactNode;
  explanation: string;
}

const CARDS: Card[] = [
  {
    id: 'low-contrast-text',
    name: 'Low-contrast body text',
    correct: 'Broken',
    visual: (
      <div style={{ background: '#fff', padding: '0.5rem', borderRadius: 4, border: '1px solid #eee' }}>
        <p style={{ color: '#999', fontSize: '0.8rem', margin: 0 }}>
          The quick brown fox jumps over the lazy dog.
        </p>
      </div>
    ),
    explanation: 'Text is below 4.5:1 contrast — many users cannot read this comfortably.',
  },
  {
    id: 'nav-link',
    name: 'Low-saturation nav link',
    correct: 'Risky',
    visual: (
      <div style={{ background: '#ffffff', padding: '0.5rem', borderRadius: 4, border: '1px solid #eee' }}>
        <span style={{ color: '#888', fontSize: '0.8rem', cursor: 'pointer' }}>About us</span>
      </div>
    ),
    explanation: 'Passes contrast barely but the color-only link style is fragile under CVD conditions.',
  },
  {
    id: 'color-only-error',
    name: 'Color-only error badge',
    correct: 'Broken',
    visual: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: '#fff', padding: '0.5rem', borderRadius: 4, border: '1px solid #eee' }}>
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ef4444', display: 'inline-block', flexShrink: 0 }} />
        <span style={{ fontSize: '0.78rem', color: '#111' }}>Status</span>
      </div>
    ),
    explanation: 'No label, icon, or text supports the color — color alone carries the meaning.',
  },
  {
    id: 'labeled-error',
    name: 'Labeled error state',
    correct: 'Usable',
    visual: (
      <div style={{ background: '#fff', padding: '0.5rem', borderRadius: 4, border: '2px solid #ef4444' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.2rem' }}>
          <span style={{ color: '#ef4444', fontWeight: 700, fontSize: '0.85rem' }}>✕</span>
          <span style={{ color: '#ef4444', fontSize: '0.75rem', fontWeight: 600 }}>Invalid email</span>
        </div>
        <input readOnly value="notanemail" style={{ width: '100%', padding: '0.2rem 0.4rem', fontSize: '0.75rem', border: '1px solid #ef4444', borderRadius: 3, boxSizing: 'border-box' }} />
      </div>
    ),
    explanation: 'Multiple cues make the error clear regardless of color perception.',
  },
  {
    id: 'faint-link',
    name: 'Faint link in paragraph',
    correct: 'Risky',
    visual: (
      <div style={{ background: '#fff', padding: '0.5rem', borderRadius: 4, border: '1px solid #eee' }}>
        <p style={{ fontSize: '0.78rem', color: '#333', margin: 0, lineHeight: 1.5 }}>
          Read our <span style={{ color: '#93c5fd', fontSize: '0.78rem' }}>privacy policy</span> here.
        </p>
      </div>
    ),
    explanation: 'The link is identifiable in ideal conditions but may be missed under CVD or fatigue.',
  },
  {
    id: 'cta-button',
    name: 'Primary CTA button',
    correct: 'Usable',
    visual: (
      <div style={{ background: '#f9fafb', padding: '0.5rem', borderRadius: 4, border: '1px solid #eee', display: 'flex', justifyContent: 'center' }}>
        <button
          style={{
            background: '#1d4ed8', color: '#ffffff', border: '2px solid #1e40af',
            borderRadius: 4, padding: '0.35rem 0.9rem', fontSize: '0.8rem',
            fontWeight: 700, cursor: 'default',
          }}
        >
          Get started
        </button>
      </div>
    ),
    explanation: 'Strong contrast and label make this reliable.',
  },
];

interface BrokenUsableCardsToolProps {
  interactive?: boolean;
  onComplete?: () => void;
}

export function BrokenUsableCardsTool({ interactive = false, onComplete }: BrokenUsableCardsToolProps) {
  const [answers, setAnswers] = useState<Record<string, Classification | null>>({});
  const [locked, setLocked] = useState<Record<string, boolean>>({});
  const completed = useRef(false);

  function handleAnswer(cardId: string, choice: Classification) {
    if (!interactive || completed.current || locked[cardId]) return;
    const card = CARDS.find((c) => c.id === cardId)!;
    const isCorrect = choice === card.correct;
    setAnswers((prev) => ({ ...prev, [cardId]: choice }));
    if (isCorrect) {
      setLocked((prev) => {
        const next = { ...prev, [cardId]: true };
        const allDone = CARDS.every((c) => next[c.id]);
        if (allDone && !completed.current) {
          completed.current = true;
          onComplete?.();
        }
        return next;
      });
    }
  }

  return (
    <div className={shellStyles.shell}>
      <span className={shellStyles.toolLabel}>broken · risky · usable classifier</span>

      {interactive && (
        <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '0.25rem' }}>
          Classify each card: is this color approach <strong>Usable</strong>, <strong>Risky</strong>, or <strong>Broken</strong>?
          ({Object.values(locked).filter(Boolean).length}/{CARDS.length} correct)
        </p>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {CARDS.map((card) => {
          const answer = answers[card.id];
          const isLocked = locked[card.id];
          const isWrong = answer && !isLocked;

          return (
            <div
              key={card.id}
              style={{
                border: `1px solid ${isLocked ? 'var(--success)' : isWrong ? 'var(--error)' : 'var(--border)'}`,
                borderRadius: 'var(--radius-md)',
                padding: '0.65rem',
                background: isLocked
                  ? 'color-mix(in srgb, var(--success) 6%, transparent)'
                  : isWrong
                  ? 'color-mix(in srgb, var(--error) 6%, transparent)'
                  : 'transparent',
              }}
            >
              <p style={{ fontWeight: 600, fontSize: '0.8rem', marginBottom: '0.4rem', color: 'var(--foreground)' }}>
                {card.name}
              </p>
              <div style={{ marginBottom: '0.5rem' }}>{card.visual}</div>

              {interactive && !isLocked && (
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {(['Usable', 'Risky', 'Broken'] as Classification[]).map((choice) => (
                    <button
                      key={choice}
                      onClick={() => handleAnswer(card.id, choice)}
                      style={{
                        padding: '0.25rem 0.65rem',
                        fontSize: '0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        border: `1px solid ${answer === choice ? (isWrong ? 'var(--error)' : 'var(--accent)') : 'var(--border)'}`,
                        background: answer === choice
                          ? isWrong
                            ? 'color-mix(in srgb, var(--error) 15%, transparent)'
                            : 'color-mix(in srgb, var(--accent) 15%, transparent)'
                          : 'transparent',
                        color: 'var(--foreground)',
                        cursor: 'pointer',
                      }}
                    >
                      {choice}
                    </button>
                  ))}
                </div>
              )}

              {isWrong && (
                <p style={{ fontSize: '0.72rem', color: 'var(--error)', marginTop: '0.3rem', margin: '0.3rem 0 0' }}>
                  Not quite — try again.
                </p>
              )}

              {isLocked && (
                <p style={{ fontSize: '0.72rem', color: 'var(--success)', marginTop: '0.3rem', margin: '0.3rem 0 0' }}>
                  ✓ {card.correct} — {card.explanation}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {completed.current && (
        <p style={{ color: 'var(--success)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
          ✓ All cards correctly classified. You can reliably spot usable, risky, and broken color patterns.
        </p>
      )}
    </div>
  );
}
