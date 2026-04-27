import { memo, useState } from 'react';
import type { RGB } from '../../utils/color.ts';
import { rgbString, luminance, contrastRatio as contrast, channelSpread } from '../../utils/color.ts';
import shellStyles from './ToolShell.module.css';

const CHANNEL_META = [
  { key: 'r' as const, label: 'R', color: '#e03030' },
  { key: 'g' as const, label: 'G', color: '#22c55e' },
  { key: 'b' as const, label: 'B', color: '#3b82f6' },
];

/* ── Check definitions ───────────────────────────────────────────────── */

interface Check {
  id: string;
  label: string;
  description: string;
  pass: (accent: RGB, surface: RGB, neutral: RGB) => boolean;
}

const CHECKS: Check[] = [
  {
    id: 'accent-contrast',
    label: 'Accent stands out from surface',
    description: 'Contrast ratio ≥ 3 : 1',
    pass: (accent, surface) => contrast(accent, surface) >= 3,
  },
  {
    id: 'surface-neutral',
    label: 'Surface is low-saturation',
    description: 'Channel spread ≤ 40',
    pass: (_accent, surface) => channelSpread(surface) <= 40,
  },
  {
    id: 'neutral-legible',
    label: 'Neutral is legible on surface',
    description: 'Contrast ratio ≥ 2 : 1',
    pass: (_accent, surface, neutral) => contrast(neutral, surface) >= 2,
  },
];

/* ── RGB slider group ───────────────────────────────────────────────── */

interface SliderGroupProps {
  label: string;
  value: RGB;
  onChange: (val: RGB) => void;
  disabled: boolean;
}

function SliderGroup({ label, value, onChange, disabled }: SliderGroupProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: rgbString(value),
            border: '1px solid rgba(255,255,255,0.1)',
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--secondary-foreground)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {label}
        </span>
      </div>
      {CHANNEL_META.map(({ key, label: ch, color }) => (
        <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color,
              width: '12px',
              flexShrink: 0,
            }}
          >
            {ch}
          </span>
          <input
            type="range"
            min={0}
            max={255}
            value={value[key]}
            disabled={disabled}
            onChange={(e) => onChange({ ...value, [key]: Number(e.target.value) })}
            style={{ flex: 1, accentColor: color, cursor: disabled ? 'not-allowed' : 'pointer' }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--muted)',
              width: '28px',
              textAlign: 'right',
              flexShrink: 0,
            }}
          >
            {value[key]}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ── Mini UI mockup ─────────────────────────────────────────────────── */

interface MockupProps {
  accent: RGB;
  surface: RGB;
  neutral: RGB;
}

function Mockup({ accent, surface, neutral }: MockupProps) {
  return (
    <div
      style={{
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        border: '1px solid var(--border)',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.8rem',
      }}
    >
      {/* Nav */}
      <div
        style={{
          backgroundColor: rgbString(surface),
          padding: '8px 14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: `1px solid rgba(${neutral.r},${neutral.g},${neutral.b},0.25)`,
        }}
      >
        <span style={{ color: rgbString(neutral), fontWeight: 600, fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
          color-theory-course$
        </span>
        <div style={{ display: 'flex', gap: '10px' }}>
          {['home', 'learn', 'sandbox'].map((t) => (
            <span key={t} style={{ color: rgbString(neutral), fontSize: '0.7rem', opacity: 0.75 }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Card body */}
      <div
        style={{
          backgroundColor: `rgb(${Math.min(surface.r + 12, 255)},${Math.min(surface.g + 12, 255)},${Math.min(surface.b + 12, 255)})`,
          padding: '14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <p style={{ color: rgbString(neutral), margin: 0, fontSize: '0.82rem' }}>
          This is a card. It uses the surface color as its background and the neutral for body text.
        </p>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button
            style={{
              padding: '5px 14px',
              backgroundColor: rgbString(accent),
              color: luminance(accent) > 0.4 ? '#111' : '#fff',
              border: 'none',
              borderRadius: '4px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 700,
              cursor: 'default',
            }}
          >
            primary action
          </button>
          <span style={{ color: rgbString(accent), fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
            secondary link
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Main tool ──────────────────────────────────────────────────────── */

interface InterfaceTunerToolProps {
  interactive?: boolean;
  onComplete?: () => void;
}

const DEFAULT_ACCENT:  RGB = { r: 220, g: 50,  b: 50  }; // too red, too close to surface
const DEFAULT_SURFACE: RGB = { r: 180, g: 60,  b: 60  }; // too saturated, too close to accent
const DEFAULT_NEUTRAL: RGB = { r: 120, g: 100, b: 100 }; // passable but low contrast on surface

export const InterfaceTunerTool = memo(function InterfaceTunerTool({ interactive = true, onComplete }: InterfaceTunerToolProps) {
  const [accent,  setAccent]  = useState<RGB>(DEFAULT_ACCENT);
  const [surface, setSurface] = useState<RGB>(DEFAULT_SURFACE);
  const [neutral, setNeutral] = useState<RGB>(DEFAULT_NEUTRAL);
  const [completed, setCompleted] = useState(false);

  const checks = CHECKS.map((c) => ({ ...c, passing: c.pass(accent, surface, neutral) }));
  const allPass = checks.every((c) => c.passing);

  function handleCheck() {
    if (allPass && !completed) {
      setCompleted(true);
      onComplete?.();
    }
  }

  return (
    <div className={shellStyles.shell}>
      <span className={shellStyles.toolLabel}>interface tuning lab</span>

      {/* Live mockup */}
      <Mockup accent={accent} surface={surface} neutral={neutral} />

      {/* Balance checks */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'var(--muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          balance checks
        </span>
        {checks.map((c) => (
          <div
            key={c.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '5px 8px',
              borderRadius: 'var(--radius-sm)',
              background: c.passing
                ? 'color-mix(in srgb, var(--green) 8%, var(--surface))'
                : 'color-mix(in srgb, var(--red) 6%, var(--surface))',
              border: `1px solid ${c.passing ? 'color-mix(in srgb, var(--green) 25%, var(--border))' : 'color-mix(in srgb, var(--red) 20%, var(--border))'}`,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: c.passing ? 'var(--green)' : 'var(--red)',
                width: '12px',
                flexShrink: 0,
              }}
            >
              {c.passing ? '✓' : '✗'}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--secondary-foreground)', flex: 1 }}>
              {c.label}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--muted)' }}>
              {c.description}
            </span>
          </div>
        ))}
      </div>

      {/* Sliders — only when interactive */}
      {interactive && (
        <>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 'var(--spacing-md)',
              borderTop: '1px solid var(--border)',
              paddingTop: 'var(--spacing-md)',
            }}
          >
            <SliderGroup label="accent" value={accent} onChange={setAccent} disabled={completed} />
            <SliderGroup label="surface" value={surface} onChange={setSurface} disabled={completed} />
            <SliderGroup label="neutral" value={neutral} onChange={setNeutral} disabled={completed} />
          </div>

          {!completed && (
            <button
              onClick={handleCheck}
              disabled={!allPass}
              style={{
                alignSelf: 'flex-start',
                padding: '0.5rem 1.25rem',
                background: allPass ? 'var(--yellow)' : 'var(--border)',
                color: 'var(--gray-90)',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: '0.85rem',
                borderRadius: 'var(--radius-sm)',
                border: 'none',
                cursor: allPass ? 'pointer' : 'not-allowed',
              }}
            >
              {allPass ? 'submit palette →' : `${checks.filter((c) => !c.passing).length} check${checks.filter((c) => !c.passing).length > 1 ? 's' : ''} failing`}
            </button>
          )}

          {completed && (
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--green)',
                margin: 0,
              }}
            >
              ✓ palette balanced — all checks pass.
            </p>
          )}
        </>
      )}
    </div>
  );
});
