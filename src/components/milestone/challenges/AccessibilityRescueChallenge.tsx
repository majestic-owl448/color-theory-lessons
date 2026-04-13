import { useMemo, useState } from 'react';
import { contrastRatioWcag, hexToRgb, hslToHex } from '../../../utils/color.ts';
import styles from './AccessibilityRescueChallenge.module.css';

interface AccessibilityRescueChallengeProps {
  onComplete: () => void;
}

function textColorFromLightness(lightness: number): string {
  return hslToHex(220, 18, lightness);
}

export function AccessibilityRescueChallenge({ onComplete }: AccessibilityRescueChallengeProps) {
  const [textLightness, setTextLightness] = useState(46);
  const [requiredCueOn, setRequiredCueOn] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);
  const [iconLightness, setIconLightness] = useState(72);

  const checks = useMemo(() => {
    const textColor = textColorFromLightness(textLightness);
    const textBackground = '#f5f7fb';
    const textContrast = contrastRatioWcag(hexToRgb(textColor), hexToRgb(textBackground));

    const iconColor = hslToHex(220, 14, iconLightness);
    const iconBackground = '#ffffff';
    const iconContrast = contrastRatioWcag(hexToRgb(iconColor), hexToRgb(iconBackground));

    return {
      textColor,
      iconColor,
      textContrast,
      iconContrast,
      textPass: textContrast >= 4.5,
      cuePass: requiredCueOn,
      focusPass: focusVisible,
      iconPass: iconContrast >= 3,
    };
  }, [textLightness, requiredCueOn, focusVisible, iconLightness]);

  const passed = checks.textPass && checks.cuePass && checks.focusPass && checks.iconPass;

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span>Repair 4 WCAG failures</span>
        <span className={styles.progress}>{[checks.textPass, checks.cuePass, checks.focusPass, checks.iconPass].filter(Boolean).length} / 4 fixed</span>
      </div>

      <section className={styles.block}>
        <p className={styles.title}>1) Body text contrast (target at least 4.5)</p>
        <p className={styles.sample} style={{ color: checks.textColor, backgroundColor: '#f5f7fb' }}>
          This paragraph starts below accessibility contrast.
        </p>
        <label className={styles.sliderLabel}>
          Text lightness: {textLightness}
          <input type="range" min={20} max={70} value={textLightness} onChange={(event) => setTextLightness(Number(event.target.value))} />
        </label>
        <p className={checks.textPass ? styles.good : styles.bad}>Contrast: {checks.textContrast.toFixed(2)} (need at least 4.5)</p>
      </section>

      <section className={styles.block}>
        <p className={styles.title}>2) Required field uses color only</p>
        <div className={styles.row}>
          <label>Email address <span className={styles.errorMark}>*</span></label>
          <button type="button" className={styles.toggle} onClick={() => setRequiredCueOn((prev) => !prev)}>
            {requiredCueOn ? 'icon+text cue on' : 'add icon+text cue'}
          </button>
        </div>
        {requiredCueOn && <p className={styles.note}>! Required field</p>}
        <p className={checks.cuePass ? styles.good : styles.bad}>{checks.cuePass ? 'Non-color cue added.' : 'Still color-only.'}</p>
      </section>

      <section className={styles.block}>
        <p className={styles.title}>3) Invisible focus ring</p>
        <div className={styles.row}>
          <button type="button" className={`${styles.fakeButton} ${focusVisible ? styles.focusOn : ''}`}>Submit</button>
          <button type="button" className={styles.toggle} onClick={() => setFocusVisible((prev) => !prev)}>
            {focusVisible ? 'focus ring visible' : 'enable focus ring'}
          </button>
        </div>
        <p className={checks.focusPass ? styles.good : styles.bad}>{checks.focusPass ? 'Focus indicator is visible.' : 'Focus indicator missing.'}</p>
      </section>

      <section className={styles.block}>
        <p className={styles.title}>4) Faint icon button (target at least 3.0)</p>
        <div className={styles.iconPreview}>
          <span className={styles.icon} style={{ color: checks.iconColor }}>⚙</span>
        </div>
        <label className={styles.sliderLabel}>
          Icon lightness: {iconLightness}
          <input type="range" min={20} max={90} value={iconLightness} onChange={(event) => setIconLightness(Number(event.target.value))} />
        </label>
        <p className={checks.iconPass ? styles.good : styles.bad}>Contrast: {checks.iconContrast.toFixed(2)} (need at least 3.0)</p>
      </section>

      <div className={styles.actions}>
        <button type="button" className={styles.button} disabled={!passed} onClick={onComplete}>
          finish challenge
        </button>
      </div>
    </div>
  );
}
