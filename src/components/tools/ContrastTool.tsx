import { useState } from 'react';
import { hexToHsl } from '../../utils/color.ts';
import shellStyles from './ToolShell.module.css';

interface ProblemArea {
  id: string;
  label: string;
  textColor: string;
  bgColor: string;
  fixBg: boolean; // true = user adjusts bg lightness; false = adjust text lightness
  minL: number; // lightness boundary that makes it "readable"
}

const AREAS: ProblemArea[] = [
  { id: 'heading', label: 'Section label', textColor: '#858591', bgColor: '#2a2a40', fixBg: false, minL: 75 },
  { id: 'helper', label: 'Helper text below input', textColor: '#5a5a6e', bgColor: '#2a2a40', fixBg: false, minL: 65 },
  { id: 'button', label: 'Submit button', textColor: '#ffffff', bgColor: '#4a4a60', fixBg: true, minL: 35 },
];

interface ContrastToolProps {
  interactive?: boolean;
  onComplete?: () => void;
}

export function ContrastTool({ interactive = true, onComplete }: ContrastToolProps) {
  const [lightness, setLightness] = useState<Record<string, number>>({
    heading: hexToHsl(AREAS[0].textColor).l,
    helper: hexToHsl(AREAS[1].textColor).l,
    button: hexToHsl(AREAS[2].bgColor).l,
  });
  const [completed, setCompleted] = useState(false);

  function isFixed(area: ProblemArea) {
    const l = lightness[area.id];
    return area.fixBg ? l <= area.minL : l >= area.minL;
  }

  function handleChange(id: string, val: number) {
    if (completed || !interactive) return;
    setLightness((prev) => {
      const next = { ...prev, [id]: val };
      const nextAllFixed = AREAS.every((area) => {
        const l = next[area.id];
        return area.fixBg ? l <= area.minL : l >= area.minL;
      });

      if (nextAllFixed) {
        setCompleted(true);
        onComplete?.();
      }

      return next;
    });
  }

  return (
    <div className={shellStyles.shell}>
      <span className={shellStyles.toolLabel}>contrast repair lab</span>
      <p style={{ fontSize: '0.9rem', color: 'var(--secondary-foreground)' }}>
        Adjust the lightness slider for each problem area until it's easy to read.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
        {AREAS.map((area) => {
          const l = lightness[area.id];
          const fixed = isFixed(area);

          // Compute displayed color
          const baseHSL = area.fixBg
            ? hexToHsl(area.bgColor)
            : hexToHsl(area.textColor);

          const displayedColor = `hsl(${baseHSL.h}, ${baseHSL.s}%, ${l}%)`;
          const textColor = area.fixBg ? area.textColor : displayedColor;
          const bgColor = area.fixBg ? displayedColor : area.bgColor;

          const gradient = `linear-gradient(to right, hsl(${baseHSL.h},${baseHSL.s}%,5%), hsl(${baseHSL.h},${baseHSL.s}%,50%), hsl(${baseHSL.h},${baseHSL.s}%,95%))`;

          return (
            <div
              key={area.id}
              style={{
                background: 'var(--surface)',
                border: `1px solid ${fixed ? 'var(--green)' : 'var(--border)'}`,
                borderRadius: 'var(--radius-md)',
                padding: 'var(--spacing-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-sm)',
                transition: 'border-color 0.2s ease',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase' }}>
                  {area.label}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: fixed ? 'var(--green)' : 'var(--muted)' }}>
                  {fixed ? '✓ readable' : 'adjust lightness'}
                </span>
              </div>

              {/* Preview */}
              <div
                style={{
                  background: bgColor,
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.65rem var(--spacing-md)',
                  color: textColor,
                  fontSize: area.id === 'button' ? '0.9rem' : '0.9rem',
                  fontFamily: area.id === 'button' ? 'var(--font-mono)' : 'var(--font-sans)',
                  fontWeight: area.id === 'button' ? 700 : 400,
                  transition: 'background 0.1s ease, color 0.1s ease',
                  border: area.id === 'button' ? 'none' : '1px solid rgba(255,255,255,0.05)',
                  display: area.id === 'button' ? 'inline-block' : 'block',
                }}
              >
                {area.id === 'heading' && 'Section label text'}
                {area.id === 'helper' && 'Enter your email address'}
                {area.id === 'button' && 'Submit'}
              </div>

              {/* Lightness slider */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)' }}>
                    {area.fixBg ? 'button background' : 'text'} lightness
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--yellow)' }}>
                    {l}%
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={95}
                  value={l}
                  disabled={completed || !interactive}
                  style={{
                    width: '100%',
                    background: gradient,
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    height: '6px',
                    borderRadius: '3px',
                    cursor: completed ? 'not-allowed' : 'pointer',
                  }}
                  onChange={(e) => handleChange(area.id, Number(e.target.value))}
                  aria-label={`Lightness for ${area.label}: ${l}%`}
                />
              </div>
            </div>
          );
        })}
      </div>

      {completed && (
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--green)' }}>
          ✓ All three areas are now readable. Good work!
        </p>
      )}
    </div>
  );
}
