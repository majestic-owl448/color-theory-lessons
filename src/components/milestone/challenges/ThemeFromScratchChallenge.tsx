import { useMemo, useState } from 'react';
import { contrastRatioWcag, hexToRgb, hslToHex } from '../../../utils/color.ts';
import styles from './ThemeFromScratchChallenge.module.css';

interface ThemeFromScratchChallengeProps {
  onComplete: () => void;
}

type RoleKey = 'bg' | 'surface' | 'primaryText' | 'secondaryText' | 'accent';

interface RoleHsl {
  h: number;
  s: number;
  l: number;
}

const BASE = { h: 215, s: 82, l: 52 };

const ROLE_LABELS: Record<RoleKey, string> = {
  bg: 'Background',
  surface: 'Surface',
  primaryText: 'Primary text',
  secondaryText: 'Secondary text',
  accent: 'Accent',
};

const DEFAULTS: Record<RoleKey, RoleHsl> = {
  bg: { h: BASE.h, s: 30, l: 12 },
  surface: { h: BASE.h, s: 24, l: 14 },
  primaryText: { h: BASE.h, s: 20, l: 78 },
  secondaryText: { h: BASE.h, s: 16, l: 56 },
  accent: { h: BASE.h, s: BASE.s, l: 44 },
};

function ratio(a: string, b: string): number {
  return contrastRatioWcag(hexToRgb(a), hexToRgb(b));
}

export function ThemeFromScratchChallenge({ onComplete }: ThemeFromScratchChallengeProps) {
  const [roles, setRoles] = useState<Record<RoleKey, RoleHsl>>(DEFAULTS);

  const hex = useMemo(() => {
    return {
      bg: hslToHex(roles.bg.h, roles.bg.s, roles.bg.l),
      surface: hslToHex(roles.surface.h, roles.surface.s, roles.surface.l),
      primaryText: hslToHex(roles.primaryText.h, roles.primaryText.s, roles.primaryText.l),
      secondaryText: hslToHex(roles.secondaryText.h, roles.secondaryText.s, roles.secondaryText.l),
      accent: hslToHex(roles.accent.h, roles.accent.s, roles.accent.l),
    };
  }, [roles]);

  const checks = useMemo(() => {
    const primaryContrast = ratio(hex.primaryText, hex.bg);
    const secondaryContrast = ratio(hex.secondaryText, hex.bg);
    const separation = ratio(hex.bg, hex.surface);
    const accentContrast = ratio(hex.accent, hex.surface);

    return {
      primaryContrast,
      secondaryContrast,
      separation,
      accentContrast,
      primaryPass: primaryContrast >= 4.5,
      secondaryPass: secondaryContrast >= 3,
      separationPass: separation >= 1.2,
      accentPass: accentContrast >= 3,
    };
  }, [hex]);

  const passed = checks.primaryPass && checks.secondaryPass && checks.separationPass && checks.accentPass;

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span>Build a 5-role theme from HSL</span>
        <span className={styles.brand}>Brand hue {BASE.h}deg</span>
      </div>

      <div className={styles.grid}>
        {(Object.keys(ROLE_LABELS) as RoleKey[]).map((key) => (
          <div key={key} className={styles.roleCard}>
            <div className={styles.roleTop}>
              <span>{ROLE_LABELS[key]}</span>
              <code>{hslToHex(roles[key].h, roles[key].s, roles[key].l).toUpperCase()}</code>
            </div>
            <div className={styles.sliderRow}>
              <label htmlFor={`${key}-h`}>H</label>
              <input
                id={`${key}-h`}
                type="range"
                min={0}
                max={360}
                value={roles[key].h}
                onChange={(event) => {
                  const value = Number(event.target.value);
                  setRoles((prev) => ({ ...prev, [key]: { ...prev[key], h: value } }));
                }}
              />
              <span>{roles[key].h}</span>
            </div>
            <div className={styles.sliderRow}>
              <label htmlFor={`${key}-s`}>S</label>
              <input
                id={`${key}-s`}
                type="range"
                min={0}
                max={100}
                value={roles[key].s}
                onChange={(event) => {
                  const value = Number(event.target.value);
                  setRoles((prev) => ({ ...prev, [key]: { ...prev[key], s: value } }));
                }}
              />
              <span>{roles[key].s}</span>
            </div>
            <div className={styles.sliderRow}>
              <label htmlFor={`${key}-l`}>L</label>
              <input
                id={`${key}-l`}
                type="range"
                min={0}
                max={100}
                value={roles[key].l}
                onChange={(event) => {
                  const value = Number(event.target.value);
                  setRoles((prev) => ({ ...prev, [key]: { ...prev[key], l: value } }));
                }}
              />
              <span>{roles[key].l}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.preview} style={{ backgroundColor: hex.bg }}>
        <div className={styles.previewCard} style={{ backgroundColor: hex.surface }}>
          <p className={styles.previewTitle} style={{ color: hex.primaryText }}>Palette Draft</p>
          <p className={styles.previewBody} style={{ color: hex.secondaryText }}>
            Keep hierarchy clear: page background, readable text, and an accent that still pops.
          </p>
          <button type="button" className={styles.previewButton} style={{ backgroundColor: hex.accent }}>
            primary action
          </button>
        </div>
      </div>

      <div className={styles.checks}>
        <p className={checks.primaryPass ? styles.good : styles.bad}>Primary text on bg: {checks.primaryContrast.toFixed(2)} (need at least 4.5)</p>
        <p className={checks.secondaryPass ? styles.good : styles.bad}>Secondary text on bg: {checks.secondaryContrast.toFixed(2)} (need at least 3.0)</p>
        <p className={checks.separationPass ? styles.good : styles.bad}>Background/surface separation: {checks.separation.toFixed(2)} (need at least 1.2)</p>
        <p className={checks.accentPass ? styles.good : styles.bad}>Accent on surface: {checks.accentContrast.toFixed(2)} (need at least 3.0)</p>
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.button} disabled={!passed} onClick={onComplete}>
          finish challenge
        </button>
      </div>
    </div>
  );
}
