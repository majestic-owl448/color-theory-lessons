import { useState, useMemo } from 'react';
import shellStyles from './ToolShell.module.css';
import styles from './HSLSliderTool.module.css';

interface HSL { h: number; s: number; l: number }

function hslString({ h, s, l }: HSL) {
  return `hsl(${h}, ${s}%, ${l}%)`;
}

interface Target {
  name: string;
  locked: 'h' | 's' | 'l';
  target: HSL;
  start: HSL;
}

const TARGETS: Target[] = [
  {
    name: 'Match the hue',
    locked: 'h',
    target: { h: 200, s: 70, l: 55 },
    start: { h: 0, s: 70, l: 55 },
  },
  {
    name: 'Match the saturation',
    locked: 's',
    target: { h: 200, s: 20, l: 55 },
    start: { h: 200, s: 90, l: 55 },
  },
  {
    name: 'Match the lightness',
    locked: 'l',
    target: { h: 200, s: 70, l: 20 },
    start: { h: 200, s: 70, l: 80 },
  },
];

const TOLERANCE = 8;

interface HSLSliderToolProps {
  interactive?: boolean;
  onComplete?: () => void;
}

export function HSLSliderTool({ interactive = true, onComplete }: HSLSliderToolProps) {
  const [targetIdx, setTargetIdx] = useState(0);
  const [current, setCurrent] = useState<HSL>({ ...TARGETS[0].start });
  const [checked, setChecked] = useState(false);
  const [allDone, setAllDone] = useState(false);

  const target = TARGETS[targetIdx];

  const close =
    Math.abs(current.h - target.target.h) <= TOLERANCE &&
    Math.abs(current.s - target.target.s) <= TOLERANCE &&
    Math.abs(current.l - target.target.l) <= TOLERANCE;

  function updateChannel(ch: 'h' | 's' | 'l', val: number) {
    if (checked) return;
    setCurrent((prev) => ({ ...prev, [ch]: val }));
  }

  function handleCheck() {
    setChecked(true);
    if (close) {
      setTimeout(() => {
        if (targetIdx < TARGETS.length - 1) {
          const next = targetIdx + 1;
          setTargetIdx(next);
          setCurrent({ ...TARGETS[next].start });
          setChecked(false);
        } else {
          setAllDone(true);
          onComplete?.();
        }
      }, 900);
    }
  }

  function handleRetry() {
    setCurrent({ ...target.start });
    setChecked(false);
  }

  const hueGradient = useMemo(
    () =>
      `linear-gradient(to right, hsl(0,${current.s}%,${current.l}%), hsl(60,${current.s}%,${current.l}%), hsl(120,${current.s}%,${current.l}%), hsl(180,${current.s}%,${current.l}%), hsl(240,${current.s}%,${current.l}%), hsl(300,${current.s}%,${current.l}%), hsl(360,${current.s}%,${current.l}%))`,
    [current.s, current.l],
  );

  const satGradient = `linear-gradient(to right, hsl(${current.h},0%,${current.l}%), hsl(${current.h},100%,${current.l}%))`;
  const lightGradient = `linear-gradient(to right, hsl(${current.h},${current.s}%,0%), hsl(${current.h},${current.s}%,50%), hsl(${current.h},${current.s}%,100%))`;

  return (
    <div className={shellStyles.shell}>
      <span className={shellStyles.toolLabel}>HSL color lab</span>

      <div className={styles.root}>
        {/* Swatches */}
        <div className={styles.swatchRow}>
          <div className={styles.swatchBox}>
            <span className={styles.swatchLabel}>your color</span>
            <div className={styles.swatch} style={{ backgroundColor: hslString(current) }} />
            <span className={styles.hslValue}>
              H:{current.h} S:{current.s}% L:{current.l}%
            </span>
          </div>
          <div className={styles.swatchBox}>
            <span className={styles.swatchLabel}>target</span>
            <div className={styles.swatch} style={{ backgroundColor: hslString(target.target) }} />
            <span className={styles.hslValue}>
              {target.locked === 'h' ? `H:${target.target.h}` : `H:?`}{' '}
              {target.locked === 's' ? `S:${target.target.s}%` : `S:?`}{' '}
              {target.locked === 'l' ? `L:${target.target.l}%` : `L:?`}
            </span>
          </div>
        </div>

        {/* Challenge label */}
        <div>
          <span className={styles.sliderName} style={{ color: 'var(--yellow)' }}>
            {targetIdx + 1}/{TARGETS.length}: {target.name}
          </span>
          <p style={{ fontSize: '0.85rem', color: 'var(--secondary-foreground)', marginTop: '4px' }}>
            Only the <strong style={{ color: 'var(--primary-foreground)' }}>
              {target.locked === 'h' ? 'hue' : target.locked === 's' ? 'saturation' : 'lightness'}
            </strong> slider is unlocked. Adjust it to match the target, then check.
          </p>
        </div>

        {/* Sliders */}
        <div className={styles.sliders}>
          {(['h', 's', 'l'] as const).map((ch) => {
            const isLocked = target.locked !== ch;
            const max = ch === 'h' ? 360 : 100;
            const label = ch === 'h' ? 'Hue' : ch === 's' ? 'Saturation' : 'Lightness';
            const unit = ch === 'h' ? '°' : '%';
            const gradient = ch === 'h' ? hueGradient : ch === 's' ? satGradient : lightGradient;
            return (
              <div key={ch} className={styles.sliderRow}>
                <div className={styles.sliderHeader}>
                  <span className={styles.sliderName}>{label}</span>
                  {isLocked ? (
                    <span className={styles.sliderLocked}>locked</span>
                  ) : (
                    <span className={styles.sliderVal}>{current[ch]}{unit}</span>
                  )}
                </div>
                <input
                  type="range"
                  className={styles.slider}
                  min={0}
                  max={max}
                  value={current[ch]}
                  disabled={isLocked || !interactive || checked}
                  style={{ background: gradient }}
                  onChange={(e) => updateChannel(ch, Number(e.target.value))}
                  aria-label={`${label}: ${current[ch]}${unit}`}
                />
              </div>
            );
          })}
        </div>

        {/* Actions / result */}
        {!allDone && !checked && (
          <button
            onClick={handleCheck}
            disabled={!interactive}
            style={{
              alignSelf: 'flex-start',
              padding: '0.4rem 1rem',
              background: 'var(--yellow)',
              color: 'var(--gray-90)',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: '0.8rem',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            check
          </button>
        )}

        {checked && !allDone && (
          close ? (
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--green)' }}>
              ✓ match! advancing…
            </p>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--red)' }}>
                not quite — try again
              </p>
              <button
                onClick={handleRetry}
                style={{
                  padding: '0.3rem 0.75rem',
                  background: 'transparent',
                  color: 'var(--secondary-foreground)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border)',
                  cursor: 'pointer',
                }}
              >
                retry
              </button>
            </div>
          )
        )}

        {allDone && (
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--green)' }}>
            ✓ all three dimensions matched. Great work!
          </p>
        )}
      </div>
    </div>
  );
}
