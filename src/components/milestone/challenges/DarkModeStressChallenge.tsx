import { useMemo, useState } from 'react';
import { contrastRatioWcag, hexToRgb, hslToHex } from '../../../utils/color.ts';
import styles from './DarkModeStressChallenge.module.css';

interface DarkModeStressChallengeProps {
  onComplete: () => void;
}

export function DarkModeStressChallenge({ onComplete }: DarkModeStressChallengeProps) {
  const [textL, setTextL] = useState(96);
  const [surfaceL, setSurfaceL] = useState(20);
  const [accentL, setAccentL] = useState(68);

  const checks = useMemo(() => {
    const bg = '#0a0a23';
    const text = hslToHex(220, 16, textL);
    const surface = hslToHex(222, 18, surfaceL);
    const accent = hslToHex(221, 88, accentL);

    const textContrast = contrastRatioWcag(hexToRgb(text), hexToRgb(bg));
    const hierarchyContrast = contrastRatioWcag(hexToRgb(surface), hexToRgb(bg));
    const accentContrast = contrastRatioWcag(hexToRgb(accent), hexToRgb(surface));

    return {
      bg,
      text,
      surface,
      accent,
      textContrast,
      hierarchyContrast,
      accentContrast,
      textPass: textContrast >= 4.5,
      hierarchyPass: hierarchyContrast >= 1.2,
      accentPass: accentContrast >= 3,
    };
  }, [textL, surfaceL, accentL]);

  const passed = checks.textPass && checks.hierarchyPass && checks.accentPass;

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span>Repair a broken dark theme</span>
        <span>{[checks.textPass, checks.hierarchyPass, checks.accentPass].filter(Boolean).length} / 3 fixed</span>
      </div>

      <div className={styles.preview} style={{ backgroundColor: checks.bg }}>
        <div className={styles.surface} style={{ backgroundColor: checks.surface }}>
          <p className={styles.title} style={{ color: checks.text }}>Dashboard title</p>
          <button type="button" className={styles.action} style={{ backgroundColor: checks.accent }}>Apply changes</button>
        </div>
      </div>

      <div className={styles.row}>
        <label htmlFor="dark-text">Text lightness ({textL})</label>
        <input id="dark-text" type="range" min={60} max={100} value={textL} onChange={(event) => setTextL(Number(event.target.value))} />
        <span className={checks.textPass ? styles.good : styles.bad}>{checks.textContrast.toFixed(2)} (at least 4.5)</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="dark-surface">Surface lightness ({surfaceL})</label>
        <input id="dark-surface" type="range" min={10} max={40} value={surfaceL} onChange={(event) => setSurfaceL(Number(event.target.value))} />
        <span className={checks.hierarchyPass ? styles.good : styles.bad}>{checks.hierarchyContrast.toFixed(2)} (at least 1.2)</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="dark-accent">Accent lightness ({accentL})</label>
        <input id="dark-accent" type="range" min={35} max={85} value={accentL} onChange={(event) => setAccentL(Number(event.target.value))} />
        <span className={checks.accentPass ? styles.good : styles.bad}>{checks.accentContrast.toFixed(2)} (at least 3.0)</span>
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.button} disabled={!passed} onClick={onComplete}>
          finish challenge
        </button>
      </div>
    </div>
  );
}
