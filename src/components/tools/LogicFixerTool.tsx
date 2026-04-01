import { useState } from 'react';
import shellStyles from './ToolShell.module.css';

interface Choice {
  id: string;
  label: string;
  isCorrect: boolean;
  explanation: string;
}

interface Scenario {
  wrong: string;
  context: string;
  choices: Choice[];
}

const SCENARIOS: Scenario[] = [
  {
    wrong: 'If I use more colors on screen, the result will get muddier and darker.',
    context: 'A beginner is explaining why they avoided combining too many colors in their UI.',
    choices: [
      {
        id: 'a',
        label: 'More pigment absorbs more light, so using more colors creates darkness on screen.',
        isCorrect: false,
        explanation: 'This is still paint logic. Screens do not use pigment — they emit light.',
      },
      {
        id: 'b',
        label: 'On a screen, adding more active channels increases brightness, moving toward white — not mud.',
        isCorrect: true,
        explanation: 'Correct screen logic. More light channels = brighter result. Muddiness is a pigment concept.',
      },
      {
        id: 'c',
        label: 'Colors on screen blend like paint when layered on top of each other.',
        isCorrect: false,
        explanation: 'Screen colors are not layered pigment. Each pixel emits controlled light.',
      },
      {
        id: 'd',
        label: 'Using too many colors makes the interface hard to read regardless of the model.',
        isCorrect: false,
        explanation: 'That may be true for hierarchy, but it does not address the mixing behavior being described.',
      },
    ],
  },
  {
    wrong: 'This blue looks too dark. I need to mix in some white to lighten it.',
    context: 'A designer is trying to lighten a button color and describing their approach.',
    choices: [
      {
        id: 'a',
        label: 'Adding white pigment will reflect more wavelengths and lighten the screen color.',
        isCorrect: false,
        explanation: 'Screens have no pigment to add. Mixing in white is a paint concept.',
      },
      {
        id: 'b',
        label: 'Raise the blue channel value to increase its light intensity and brighten the color.',
        isCorrect: true,
        explanation: 'On screen, brighter means more light — higher channel values. No mixing is involved.',
      },
      {
        id: 'c',
        label: 'Mix in a white swatch to dilute the color and increase its brightness.',
        isCorrect: false,
        explanation: '"Diluting" is a paint concept. Screen colors are adjusted by changing channel numbers.',
      },
      {
        id: 'd',
        label: 'Raise all channels equally so the color becomes lighter.',
        isCorrect: false,
        explanation: 'Raising all channels equally shifts toward white, not a lighter version of the original hue.',
      },
    ],
  },
  {
    wrong: 'Red and green mixed together on screen will give me a brownish color, like mixing paint.',
    context: 'A learner is predicting the result of combining two channels before trying it.',
    choices: [
      {
        id: 'a',
        label: 'Red and green pigments do combine into brown, and screen color behaves similarly.',
        isCorrect: false,
        explanation: 'Screen color does not behave like pigment. The models produce different results.',
      },
      {
        id: 'b',
        label: 'Red and green light combine additively to produce yellow — not brown.',
        isCorrect: true,
        explanation: 'In additive color, red + green light = yellow. Brownish results are a pigment phenomenon.',
      },
      {
        id: 'c',
        label: 'Mixing red and green on screen always produces an unpredictable warm neutral.',
        isCorrect: false,
        explanation: 'Additive mixing is predictable. Red + green light reliably produces yellow.',
      },
      {
        id: 'd',
        label: 'Screen color is too variable to predict without testing every combination.',
        isCorrect: false,
        explanation: 'Additive mixing follows clear rules. Knowing the model makes outcomes predictable.',
      },
    ],
  },
];

interface LogicFixerToolProps {
  interactive?: boolean;
  onComplete?: () => void;
}

export function LogicFixerTool({ interactive = true, onComplete }: LogicFixerToolProps) {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const scenario = SCENARIOS[scenarioIdx];
  const chosen = scenario.choices.find((c) => c.id === selected);
  const isCorrect = chosen?.isCorrect ?? false;

  function handleSelect(id: string) {
    if (submitted || !interactive) return;
    setSelected(id);
  }

  function handleSubmit() {
    if (!selected || submitted) return;
    setSubmitted(true);
  }

  function handleNext() {
    if (scenarioIdx < SCENARIOS.length - 1) {
      setScenarioIdx((i) => i + 1);
      setSelected(null);
      setSubmitted(false);
    } else {
      onComplete?.();
    }
  }

  function handleRetry() {
    setSelected(null);
    setSubmitted(false);
  }

  return (
    <div className={shellStyles.shell}>
      <span className={shellStyles.toolLabel}>fix the reasoning</span>

      {/* Scenario header */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
        {interactive && (
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--yellow)' }}>
            scenario {scenarioIdx + 1} of {SCENARIOS.length}
          </span>
        )}
        <p style={{ fontSize: '0.8rem', color: 'var(--muted)', fontStyle: 'italic', margin: 0 }}>
          {scenario.context}
        </p>
      </div>

      {/* Wrong statement */}
      <div style={{
        background: 'color-mix(in srgb, var(--red) 8%, var(--surface))',
        border: '1px solid color-mix(in srgb, var(--red) 30%, var(--border))',
        borderRadius: 'var(--radius-sm)',
        padding: 'var(--spacing-md)',
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--red)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          paint logic
        </span>
        <p style={{ margin: '6px 0 0', fontSize: '0.95rem', color: 'var(--primary-foreground)', fontStyle: 'italic' }}>
          "{scenario.wrong}"
        </p>
      </div>

      {/* Choices */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase' }}>
          which rewrite uses screen logic?
        </span>
        {scenario.choices.map((choice) => {
          const isSelected = selected === choice.id;
          const showResult = submitted;
          const borderColor = showResult && choice.isCorrect
            ? 'var(--green)'
            : showResult && isSelected && !choice.isCorrect
            ? 'var(--red)'
            : isSelected
            ? 'var(--yellow)'
            : 'var(--border)';
          const bg = showResult && choice.isCorrect
            ? 'color-mix(in srgb, var(--green) 8%, var(--surface))'
            : showResult && isSelected && !choice.isCorrect
            ? 'color-mix(in srgb, var(--red) 8%, var(--surface))'
            : isSelected
            ? 'color-mix(in srgb, var(--yellow) 8%, var(--surface))'
            : 'var(--surface)';

          return (
            <button
              key={choice.id}
              onClick={() => handleSelect(choice.id)}
              disabled={(submitted && !choice.isCorrect && selected !== choice.id) || !interactive}
              style={{
                padding: 'var(--spacing-sm) var(--spacing-md)',
                background: bg,
                border: `1px solid ${borderColor}`,
                borderRadius: 'var(--radius-sm)',
                color: 'var(--primary-foreground)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                textAlign: 'left',
                cursor: submitted || !interactive ? 'default' : 'pointer',
                display: 'flex',
                gap: 'var(--spacing-sm)',
                alignItems: 'flex-start',
                transition: 'border-color 0.15s ease, background 0.15s ease',
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)', flexShrink: 0, paddingTop: '2px' }}>
                {choice.id}.
              </span>
              <span>{choice.label}</span>
            </button>
          );
        })}
      </div>

      {/* Explanation after submit */}
      {submitted && chosen && (
        <div style={{
          background: isCorrect
            ? 'color-mix(in srgb, var(--green) 8%, var(--surface))'
            : 'color-mix(in srgb, var(--red) 8%, var(--surface))',
          border: `1px solid ${isCorrect ? 'var(--green)' : 'var(--red)'}`,
          borderRadius: 'var(--radius-sm)',
          padding: 'var(--spacing-md)',
        }}>
          <p style={{ margin: 0, fontSize: '0.875rem', color: isCorrect ? 'var(--green)' : 'var(--red)' }}>
            {isCorrect ? '✓ ' : '✗ '}{chosen.explanation}
          </p>
        </div>
      )}

      {/* Actions */}
      {interactive && !submitted && (
        <button
          onClick={handleSubmit}
          disabled={!selected}
          style={{
            alignSelf: 'flex-start',
            padding: '0.5rem 1.25rem',
            background: selected ? 'var(--yellow)' : 'var(--border)',
            color: 'var(--gray-90)',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            fontSize: '0.85rem',
            borderRadius: 'var(--radius-sm)',
            border: 'none',
            cursor: selected ? 'pointer' : 'not-allowed',
          }}
        >
          check
        </button>
      )}

      {interactive && submitted && (
        isCorrect ? (
          <button
            onClick={handleNext}
            style={{
              alignSelf: 'flex-start',
              padding: '0.5rem 1.25rem',
              background: 'var(--yellow)',
              color: 'var(--gray-90)',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: '0.85rem',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {scenarioIdx < SCENARIOS.length - 1 ? 'next scenario →' : 'finish →'}
          </button>
        ) : (
          <button
            onClick={handleRetry}
            style={{
              alignSelf: 'flex-start',
              padding: '0.4rem 0.9rem',
              background: 'transparent',
              color: 'var(--secondary-foreground)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border)',
              cursor: 'pointer',
            }}
          >
            try again
          </button>
        )
      )}
    </div>
  );
}
