import { useState } from 'react';
import shellStyles from './ToolShell.module.css';

/* ── Pixel zoom explorer ─────────────────────────────────────────────── */

// Subpixel triplets for a 6×4 grid of "pixels" showing a vivid blue accent
// Each "pixel" is 3 subpixels wide (R, G, B), contributing to the perceived color
const ACCENT_RGB = { r: 37, g: 99, b: 235 }; // blue accent ~#2563eb

const SUBPIXEL_COLORS = [
  `rgb(${ACCENT_RGB.r}, 0, 0)`,
  `rgb(0, ${ACCENT_RGB.g}, 0)`,
  `rgb(0, 0, ${ACCENT_RGB.b})`,
];

const GRID_COLS = 6;
const GRID_ROWS = 4;

function PixelZoomExplorer({ interactive }: { interactive: boolean }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-sm)',
        background: 'var(--gray-90)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--spacing-md)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 'var(--spacing-xs)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          pixel explorer
        </span>
        <button
          onClick={() => interactive && setZoomed((z) => !z)}
          disabled={!interactive}
          style={{
            padding: '0.2rem 0.6rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            background: 'transparent',
            color: 'var(--yellow)',
            border: '1px solid var(--yellow)',
            borderRadius: '3px',
            cursor: interactive ? 'pointer' : 'not-allowed',
            opacity: interactive ? 1 : 0.4,
          }}
        >
          {zoomed ? 'zoom out' : 'zoom in'}
        </button>
      </div>

      {zoomed ? (
        /* Subpixel grid view */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {Array.from({ length: GRID_ROWS }).map((_, row) => (
            <div key={row} style={{ display: 'flex', gap: '2px' }}>
              {Array.from({ length: GRID_COLS }).map((_, col) => (
                <div key={col} style={{ display: 'flex', gap: '1px', flex: 1 }}>
                  {SUBPIXEL_COLORS.map((color, si) => (
                    <div
                      key={si}
                      style={{
                        flex: 1,
                        height: '28px',
                        backgroundColor: color,
                        borderRadius: '1px',
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          ))}
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--muted)',
              margin: '4px 0 0',
              textAlign: 'center',
            }}
          >
            R · G · B subpixels — zoomed in
          </p>
        </div>
      ) : (
        /* Blended swatch view */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div
            style={{
              height: '80px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: `rgb(${ACCENT_RGB.r},${ACCENT_RGB.g},${ACCENT_RGB.b})`,
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          />
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--muted)',
              margin: 0,
              textAlign: 'center',
            }}
          >
            perceived color — zoomed out
          </p>
        </div>
      )}
    </div>
  );
}

/* ── Background-shift challenge ─────────────────────────────────────── */

interface Scenario {
  accentHex: string;
  accentLabel: string;
  choices: { id: string; label: string; isCorrect: boolean; explanation: string }[];
}

const SCENARIOS: Scenario[] = [
  {
    accentHex: '#2563eb',
    accentLabel: 'vivid blue',
    choices: [
      {
        id: 'a',
        label: 'The dark background emits low light, creating high contrast that makes the accent\'s emitted light stand out sharply.',
        isCorrect: true,
        explanation: 'Correct. The accent values do not change — only the surrounding context does. Dark surroundings raise relative contrast and make emitted color appear more vivid.',
      },
      {
        id: 'b',
        label: 'The light background amplifies the accent because white reflects it back toward the viewer.',
        isCorrect: false,
        explanation: 'Screens emit light — they do not reflect. The light background competes with the accent\'s brightness rather than amplifying it.',
      },
      {
        id: 'c',
        label: 'The accents appear identical on both backgrounds.',
        isCorrect: false,
        explanation: 'They are visually different. The dark-background version appears more vivid due to the contrast difference.',
      },
      {
        id: 'd',
        label: 'The blue gets lighter on a dark background because the display compensates for the surroundings.',
        isCorrect: false,
        explanation: 'The RGB values are fixed. The display does not automatically adjust the accent based on what surrounds it.',
      },
    ],
  },
  {
    accentHex: '#ea580c',
    accentLabel: 'vivid orange',
    choices: [
      {
        id: 'a',
        label: 'The dark background makes the orange warmer in hue.',
        isCorrect: false,
        explanation: 'Background darkness does not change the hue of the accent. It changes perceived contrast and vividness only.',
      },
      {
        id: 'b',
        label: 'The orange is surrounded by low light, so even its moderate brightness reads as intense relative to the near-black context.',
        isCorrect: true,
        explanation: 'Correct. Perceived intensity is relative. Against a near-black field, the same emitted color feels stronger because the contrast gap is wider.',
      },
      {
        id: 'c',
        label: 'Light backgrounds are better for warm colors because they enhance saturation.',
        isCorrect: false,
        explanation: 'Saturation is an intrinsic value of the color, not something backgrounds enhance. Light backgrounds tend to reduce the perceived pop of warm accents by adding competing brightness.',
      },
      {
        id: 'd',
        label: 'Both backgrounds show the orange the same way — context does not affect screen color.',
        isCorrect: false,
        explanation: 'Context strongly affects perception. The same color can read differently depending on what surrounds it.',
      },
    ],
  },
  {
    accentHex: '#16a34a',
    accentLabel: 'vivid green',
    choices: [
      {
        id: 'a',
        label: 'The dark background absorbs some of the green wavelengths, concentrating the hue.',
        isCorrect: false,
        explanation: 'Screens do not work by absorption. The background does not absorb the accent\'s light.',
      },
      {
        id: 'b',
        label: 'Because the screen emits light, the green reads as an independent light source against the dark — which paint on a wall cannot achieve.',
        isCorrect: true,
        explanation: 'Correct. Emitted light against a dark field evokes a luminous quality. Physical paint reflects ambient light and cannot produce this same isolated-light-source effect.',
      },
      {
        id: 'c',
        label: 'The green appears identical on both backgrounds.',
        isCorrect: false,
        explanation: 'This is visually noticeable. The dark-background version reads as more vivid and luminous.',
      },
      {
        id: 'd',
        label: 'Light backgrounds amplify saturated greens because white boosts their perceived value.',
        isCorrect: false,
        explanation: 'White surroundings compete with the accent\'s brightness rather than boosting it, making the accent feel less dominant.',
      },
    ],
  },
];

/* ── Main tool ──────────────────────────────────────────────────────── */

interface BackgroundShiftToolProps {
  interactive?: boolean;
  onComplete?: () => void;
}

export function BackgroundShiftTool({ interactive = true, onComplete }: BackgroundShiftToolProps) {
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
      <span className={shellStyles.toolLabel}>pixels &amp; background shift</span>

      {/* Pixel explorer — always visible */}
      <PixelZoomExplorer interactive={interactive} />

      {/* Background shift challenge — only when interactive */}
      {interactive && (
        <>
          <div
            style={{
              borderTop: '1px solid var(--border)',
              paddingTop: 'var(--spacing-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-xs)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--yellow)',
              }}
            >
              scenario {scenarioIdx + 1} of {SCENARIOS.length}: {scenario.accentLabel}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--muted)',
                textTransform: 'uppercase',
              }}
            >
              same accent — two backgrounds
            </span>
          </div>

          {/* Side-by-side background comparison */}
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
            {[
              { bg: '#0f0f0f', label: 'dark background' },
              { bg: '#f4f4f5', label: 'light background' },
            ].map(({ bg, label }) => (
              <div
                key={label}
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '72px',
                    backgroundColor: bg,
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: scenario.accentHex,
                    }}
                  />
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--muted)',
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Choices */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--muted)',
                textTransform: 'uppercase',
              }}
            >
              the dark background makes the accent feel stronger because…
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
                  disabled={submitted && !choice.isCorrect && selected !== choice.id}
                  style={{
                    padding: 'var(--spacing-sm) var(--spacing-md)',
                    background: bg,
                    border: `1px solid ${borderColor}`,
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--primary-foreground)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.875rem',
                    textAlign: 'left',
                    cursor: submitted && !choice.isCorrect && selected !== choice.id ? 'default' : 'pointer',
                    transition: 'border-color 0.15s ease, background 0.15s ease',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--muted)', marginRight: '0.5rem' }}>
                    {choice.id}.
                  </span>
                  {choice.label}
                </button>
              );
            })}
          </div>

          {/* Explanation after submit */}
          {submitted && chosen?.explanation && (
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: isCorrect ? 'var(--green)' : 'var(--muted)',
                margin: 0,
                padding: 'var(--spacing-sm)',
                background: isCorrect
                  ? 'color-mix(in srgb, var(--green) 6%, var(--surface))'
                  : 'color-mix(in srgb, var(--red) 6%, var(--surface))',
                borderRadius: 'var(--radius-sm)',
                border: `1px solid ${isCorrect ? 'color-mix(in srgb, var(--green) 30%, var(--border))' : 'color-mix(in srgb, var(--red) 30%, var(--border))'}`,
              }}
            >
              {chosen.explanation}
            </p>
          )}

          {/* Actions */}
          {!submitted && (
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

          {submitted && isCorrect && (
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
              {scenarioIdx < SCENARIOS.length - 1 ? 'next scenario →' : 'finish challenge →'}
            </button>
          )}

          {submitted && !isCorrect && (
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
          )}
        </>
      )}
    </div>
  );
}
