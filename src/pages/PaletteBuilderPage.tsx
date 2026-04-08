import { useState, useMemo, useCallback, Fragment } from 'react';
import {
  hexToRgb,
  hexToHsl,
  hslToHex,
  getRelatedHues,
  parseHex,
  rgbToHex,
  contrastRatioWcag,
  clamp,
  luminanceWcag,
} from '../utils/color.ts';
import type { Relationship } from '../utils/color.ts';
import styles from './PaletteBuilderPage.module.css';

/* ── Types ────────────────────────────────────────────────────────────────── */

interface PaletteColor {
  hex: string;
  label: string;
  lighter: string;
  darker: string;
  muted: string;
}

type RoleKey =
  | 'background'
  | 'surface'
  | 'primaryText'
  | 'secondaryText'
  | 'accent'
  | 'accentSecondary';

const ROLE_LABELS: Record<RoleKey, string> = {
  background: 'background',
  surface: 'surface',
  primaryText: 'primary text',
  secondaryText: 'secondary text',
  accent: 'accent',
  accentSecondary: 'accent 2',
};

const ROLE_KEYS: RoleKey[] = [
  'background',
  'surface',
  'primaryText',
  'secondaryText',
  'accent',
  'accentSecondary',
];

const HARMONY_DESC: Record<Relationship, string> = {
  analogous:
    'Colors adjacent on the wheel (30 degrees apart). Harmonious and low-contrast palette, great for cohesive UI themes.',
  complementary:
    'Colors opposite on the wheel (180 degrees apart). High contrast and vibrant, ideal for accent vs. background pairings.',
  triadic:
    'Three colors evenly spaced (120 degrees apart). Balanced variety, good for multi-role systems with distinct semantic zones.',
};

/* ── Helpers ──────────────────────────────────────────────────────────────── */

function buildVariants(hex: string) {
  const { h, s, l } = hexToHsl(hex);
  return {
    lighter: hslToHex(h, s, clamp(l + 25, 0, 100)),
    darker: hslToHex(h, s, clamp(l - 25, 0, 100)),
    muted: hslToHex(h, Math.round(s * 0.4), l),
  };
}

function buildPalette(
  primaryHex: string,
  harmony: Relationship,
): PaletteColor[] {
  const { h, s, l } = hexToHsl(primaryHex);
  const relatedHues = getRelatedHues(h, harmony);

  const baseHues = [h, ...relatedHues];
  const labels =
    harmony === 'analogous'
      ? ['primary', 'analogous +30', 'analogous -30']
      : harmony === 'complementary'
        ? ['primary', 'complement']
        : ['primary', 'triadic +120', 'triadic +240'];

  return baseHues.map((hue, i) => {
    const hex = hslToHex(hue, s, l);
    const variants = buildVariants(hex);
    return { hex, label: labels[i], ...variants };
  });
}

function allPaletteHexes(palette: PaletteColor[]): string[] {
  const out: string[] = [];
  for (const c of palette) {
    out.push(c.hex, c.lighter, c.darker, c.muted);
  }
  return out;
}

function lum(hex: string) {
  return luminanceWcag(hexToRgb(hex));
}

function sortByLuminance(hexes: string[], asc: boolean) {
  return [...hexes].sort((a, b) =>
    asc ? lum(a) - lum(b) : lum(b) - lum(a),
  );
}

function autoAssignRoles(
  palette: PaletteColor[],
  mode: 'dark' | 'light',
): Record<RoleKey, string> {
  const all = allPaletteHexes(palette);
  const sorted = sortByLuminance(all, true); // darkest first

  if (mode === 'dark') {
    const bg = sorted[0] ?? '#0a0a23';
    const surface = sorted[1] ?? '#1b1b32';
    const primaryText = sorted[sorted.length - 1] ?? '#ffffff';
    const secondaryText = sorted[sorted.length - 2] ?? '#d0d0d5';
    const accent = palette[0]?.hex ?? '#3b82f6';
    const accentSecondary = palette[1]?.hex ?? palette[0]?.hex ?? '#3b82f6';

    // If bg is too light (L>20), synthesize a darker one
    const bgHsl = hexToHsl(bg);
    const finalBg = bgHsl.l > 20 ? hslToHex(bgHsl.h, bgHsl.s, 8) : bg;
    const surfaceHsl = hexToHsl(surface);
    const finalSurface =
      surfaceHsl.l > 25 ? hslToHex(surfaceHsl.h, surfaceHsl.s, 15) : surface;

    return {
      background: finalBg,
      surface: finalSurface,
      primaryText,
      secondaryText,
      accent,
      accentSecondary,
    };
  } else {
    const bg = sorted[sorted.length - 1] ?? '#ffffff';
    const surface = sorted[sorted.length - 2] ?? '#f5f6f7';
    const primaryText = sorted[0] ?? '#0a0a23';
    const secondaryText = sorted[1] ?? '#1b1b32';
    const accent = palette[0]?.darker ?? palette[0]?.hex ?? '#3b82f6';
    const accentSecondary =
      palette[1]?.darker ?? palette[1]?.hex ?? palette[0]?.hex ?? '#3b82f6';

    // If bg is too dark, synthesize
    const bgHsl = hexToHsl(bg);
    const finalBg = bgHsl.l < 85 ? hslToHex(bgHsl.h, bgHsl.s, 97) : bg;
    const surfaceHsl = hexToHsl(surface);
    const finalSurface =
      surfaceHsl.l < 80 ? hslToHex(surfaceHsl.h, surfaceHsl.s, 92) : surface;

    return {
      background: finalBg,
      surface: finalSurface,
      primaryText,
      secondaryText,
      accent,
      accentSecondary,
    };
  }
}

function contrastBadge(ratio: number) {
  if (ratio >= 7)
    return <span className={styles.badgeAaa}>AAA {ratio.toFixed(1)}:1</span>;
  if (ratio >= 4.5)
    return <span className={styles.badgeAa}>AA {ratio.toFixed(1)}:1</span>;
  return <span className={styles.badgeFail}>fail {ratio.toFixed(1)}:1</span>;
}

function ratioOf(a: string, b: string) {
  return contrastRatioWcag(hexToRgb(a), hexToRgb(b));
}

/* ── Component ────────────────────────────────────────────────────────────── */

export function PaletteBuilderPage() {
  const [hexInput, setHexInput] = useState('#3B82F6');
  const [primaryHex, setPrimaryHex] = useState('#3B82F6');
  const [harmony, setHarmony] = useState<Relationship>('analogous');
  const [darkRoles, setDarkRoles] = useState<Record<RoleKey, string> | null>(
    null,
  );
  const [lightRoles, setLightRoles] = useState<Record<RoleKey, string> | null>(
    null,
  );
  const [openPicker, setOpenPicker] = useState<{
    mode: 'dark' | 'light';
    role: RoleKey;
  } | null>(null);

  const isValid = parseHex(hexInput) !== null;

  const palette = useMemo(
    () => buildPalette(primaryHex, harmony),
    [primaryHex, harmony],
  );

  const allColors = useMemo(() => allPaletteHexes(palette), [palette]);

  const effectiveDark = useMemo(
    () => darkRoles ?? autoAssignRoles(palette, 'dark'),
    [darkRoles, palette],
  );
  const effectiveLight = useMemo(
    () => lightRoles ?? autoAssignRoles(palette, 'light'),
    [lightRoles, palette],
  );

  // Reset role overrides when palette changes
  const applyPrimary = useCallback(
    (hex: string) => {
      setPrimaryHex(hex);
      setDarkRoles(null);
      setLightRoles(null);
      setOpenPicker(null);
    },
    [],
  );

  const handleHexBlur = () => {
    const parsed = parseHex(hexInput);
    if (parsed) {
      const canonical = rgbToHex(parsed);
      setHexInput(canonical);
      applyPrimary(canonical);
    }
  };

  const handleHexKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleHexBlur();
  };

  const handlePickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toUpperCase();
    setHexInput(val);
    applyPrimary(val);
  };

  const handleHarmonyChange = (h: Relationship) => {
    setHarmony(h);
    setDarkRoles(null);
    setLightRoles(null);
    setOpenPicker(null);
  };

  const handleRoleClick = (mode: 'dark' | 'light', role: RoleKey) => {
    if (
      openPicker &&
      openPicker.mode === mode &&
      openPicker.role === role
    ) {
      setOpenPicker(null);
    } else {
      setOpenPicker({ mode, role });
    }
  };

  const handleRolePick = (
    mode: 'dark' | 'light',
    role: RoleKey,
    hex: string,
  ) => {
    if (mode === 'dark') {
      setDarkRoles((prev) => ({ ...(prev ?? effectiveDark), [role]: hex }));
    } else {
      setLightRoles((prev) => ({ ...(prev ?? effectiveLight), [role]: hex }));
    }
    setOpenPicker(null);
  };

  /* ── Contrast matrix data ───────────────────────────────────────────────── */

  const uniqueColors = useMemo(() => {
    const seen = new Set<string>();
    return allColors.filter((c) => {
      const upper = c.toUpperCase();
      if (seen.has(upper)) return false;
      seen.add(upper);
      return true;
    });
  }, [allColors]);

  const matrixPairs = useMemo(() => {
    const pairs: { fg: string; bg: string; ratio: number }[] = [];
    for (let i = 0; i < uniqueColors.length; i++) {
      for (let j = i + 1; j < uniqueColors.length; j++) {
        const a = uniqueColors[i];
        const b = uniqueColors[j];
        const lA = hexToHsl(a).l;
        const lB = hexToHsl(b).l;
        if (Math.abs(lA - lB) < 30) continue;
        pairs.push({ fg: a, bg: b, ratio: ratioOf(a, b) });
      }
    }
    pairs.sort((a, b) => b.ratio - a.ratio);
    return pairs;
  }, [uniqueColors]);

  /* ── Suggestions ────────────────────────────────────────────────────────── */

  const darkSuggestions = useMemo(() => {
    const msgs: string[] = [];
    const r = effectiveDark;
    const txtBg = ratioOf(r.primaryText, r.background);
    if (txtBg < 7)
      msgs.push(
        `Primary text on background is ${txtBg.toFixed(1)}:1 (needs 7:1 for AAA). Try a lighter text or darker background.`,
      );
    const txtSurf = ratioOf(r.secondaryText, r.surface);
    if (txtSurf < 4.5)
      msgs.push(
        `Secondary text on surface is ${txtSurf.toFixed(1)}:1 (needs 4.5:1). Try adjusting surface or text lightness.`,
      );
    const accBg = ratioOf(r.accent, r.background);
    if (accBg < 4.5)
      msgs.push(
        `Accent on background is ${accBg.toFixed(1)}:1 (needs 4.5:1). Try a brighter accent.`,
      );
    return msgs;
  }, [effectiveDark]);

  const lightSuggestions = useMemo(() => {
    const msgs: string[] = [];
    const r = effectiveLight;
    const txtBg = ratioOf(r.primaryText, r.background);
    if (txtBg < 7)
      msgs.push(
        `Primary text on background is ${txtBg.toFixed(1)}:1 (needs 7:1 for AAA). Try a darker text or lighter background.`,
      );
    const txtSurf = ratioOf(r.secondaryText, r.surface);
    if (txtSurf < 4.5)
      msgs.push(
        `Secondary text on surface is ${txtSurf.toFixed(1)}:1 (needs 4.5:1). Try adjusting surface or text lightness.`,
      );
    const accBg = ratioOf(r.accent, r.background);
    if (accBg < 4.5)
      msgs.push(
        `Accent on background is ${accBg.toFixed(1)}:1 (needs 4.5:1). Try a darker accent.`,
      );
    return msgs;
  }, [effectiveLight]);

  /* ── Render ─────────────────────────────────────────────────────────────── */

  const primaryHsl = hexToHsl(primaryHex);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>palette builder</h1>
      <p className={styles.subtitle}>
        Start from a single color. Generate harmonies, check contrast, and
        build palettes that work in dark and light mode.
      </p>

      {/* ── A. Color Input ──────────────────────────────────────────────── */}
      <div className={styles.inputBar}>
        <input
          type="color"
          className={styles.colorPicker}
          value={primaryHex.toLowerCase()}
          onChange={handlePickerChange}
          aria-label="Pick primary color"
        />
        <input
          type="text"
          className={`${styles.hexInput} ${!isValid ? styles.hexInputInvalid : ''}`}
          value={hexInput}
          onChange={(e) => setHexInput(e.target.value)}
          onBlur={handleHexBlur}
          onKeyDown={handleHexKey}
          aria-label="Hex color value"
          spellCheck={false}
        />
        <div
          className={styles.swatchPreview}
          style={{ backgroundColor: primaryHex }}
          aria-hidden="true"
        />
        <span className={styles.hslReadout}>
          H {primaryHsl.h} &middot; S {primaryHsl.s} &middot; L {primaryHsl.l}
        </span>
      </div>

      {/* ── B. Harmony Selector ─────────────────────────────────────────── */}
      <div className={styles.harmonyGroup}>
        <div className={styles.harmonyButtons}>
          {(['analogous', 'complementary', 'triadic'] as Relationship[]).map(
            (h) => (
              <button
                key={h}
                className={`${styles.harmonyBtn} ${harmony === h ? styles.harmonyBtnActive : ''}`}
                onClick={() => handleHarmonyChange(h)}
              >
                {h}
              </button>
            ),
          )}
        </div>
        <p className={styles.harmonyDesc}>{HARMONY_DESC[harmony]}</p>
      </div>

      {/* ── C. Palette Grid ─────────────────────────────────────────────── */}
      <div className={styles.section}>
        <h2 className={styles.sectionHeading}>palette</h2>
        <div className={styles.paletteGrid}>
          {palette.map((color) => (
            <div key={color.label} className={styles.swatchColumn}>
              <span className={styles.swatchColumnLabel}>{color.label}</span>
              <div
                className={styles.swatch}
                style={{ backgroundColor: color.hex }}
              />
              <span className={styles.swatchHex}>{color.hex.toUpperCase()}</span>
              <div className={styles.variantRow}>
                {(
                  [
                    ['lighter', color.lighter],
                    ['darker', color.darker],
                    ['muted', color.muted],
                  ] as const
                ).map(([label, hex]) => (
                  <div key={label} className={styles.variantSwatch}>
                    <div
                      className={styles.variantBlock}
                      style={{ backgroundColor: hex }}
                    />
                    <span className={styles.variantLabel}>{label}</span>
                    <span className={styles.variantHex}>
                      {hex.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── D. Contrast Matrix ──────────────────────────────────────────── */}
      <div className={styles.section}>
        <h2 className={styles.sectionHeading}>contrast pairings</h2>
        {matrixPairs.length === 0 ? (
          <p className={styles.harmonyDesc}>
            No high-contrast pairings found. Try a color with more lightness
            variation.
          </p>
        ) : (
          <div className={styles.matrixWrap}>
            <div
              className={styles.matrix}
              style={{
                gridTemplateColumns: `14ch 1fr 1fr 1fr`,
              }}
            >
              <div className={styles.matrixHeader}>pair</div>
              <div className={styles.matrixHeader}>ratio</div>
              <div className={styles.matrixHeader}>level</div>
              <div className={styles.matrixHeader}>preview</div>
              {matrixPairs.slice(0, 20).map(({ fg, bg, ratio }, i) => {
                const even = i % 2 === 0;
                const cellCls = even
                  ? styles.matrixCellEven
                  : styles.matrixCellOdd;
                return (
                  <Fragment key={`${fg}-${bg}`}>
                    <div className={`${styles.matrixCell} ${cellCls}`}>
                      <span style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                        <span
                          className={styles.matrixHeaderSwatch}
                          style={{ backgroundColor: fg }}
                        />
                        <span style={{ color: 'var(--muted)' }}>on</span>
                        <span
                          className={styles.matrixHeaderSwatch}
                          style={{ backgroundColor: bg }}
                        />
                      </span>
                    </div>
                    <div className={`${styles.matrixCell} ${cellCls}`}>
                      <span className={styles.matrixRatio}>
                        {ratio.toFixed(1)}:1
                      </span>
                    </div>
                    <div className={`${styles.matrixCell} ${cellCls}`}>
                      {contrastBadge(ratio)}
                    </div>
                    <div className={`${styles.matrixCell} ${cellCls}`}>
                      <span
                        style={{
                          backgroundColor: bg,
                          color: fg,
                          padding: '2px 8px',
                          borderRadius: 'var(--radius-sm)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.85rem',
                        }}
                      >
                        sample
                      </span>
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* ── E. Dark + Light Mode Arranger ───────────────────────────────── */}
      <div className={styles.section}>
        <h2 className={styles.sectionHeading}>theme arranger</h2>
        <div className={styles.arrangerRow}>
          {(
            [
              ['dark', effectiveDark, darkSuggestions],
              ['light', effectiveLight, lightSuggestions],
            ] as const
          ).map(([mode, roles, suggestions]) => (
            <div key={mode} className={styles.modePanel}>
              <h3 className={styles.sectionHeading}>{mode} mode</h3>

              {ROLE_KEYS.map((role) => (
                <div key={role}>
                  <div className={styles.roleRow}>
                    <span className={styles.roleLabel}>
                      {ROLE_LABELS[role]}
                    </span>
                    <button
                      className={styles.roleSwatch}
                      style={{ backgroundColor: roles[role] }}
                      onClick={() => handleRoleClick(mode, role)}
                      aria-label={`Change ${mode} ${ROLE_LABELS[role]} color`}
                    />
                    <span className={styles.roleHex}>
                      {roles[role].toUpperCase()}
                    </span>
                  </div>
                  {openPicker?.mode === mode && openPicker?.role === role && (
                    <div className={styles.rolePickerPopover}>
                      {allColors.map((hex, i) => (
                        <button
                          key={`${hex}-${i}`}
                          className={styles.rolePickerSwatch}
                          style={{ backgroundColor: hex }}
                          onClick={() => handleRolePick(mode, role, hex)}
                          aria-label={`Select ${hex.toUpperCase()}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mini preview */}
              <div
                className={styles.miniPreview}
                style={{
                  backgroundColor: roles.background,
                  borderColor: roles.surface,
                }}
              >
                <div
                  style={{
                    backgroundColor: roles.surface,
                    padding: 'var(--spacing-sm)',
                    borderRadius: 'var(--radius-sm)',
                  }}
                >
                  <span
                    className={styles.miniPreviewHeading}
                    style={{ color: roles.primaryText }}
                  >
                    Card heading
                  </span>
                  <p
                    className={styles.miniPreviewBody}
                    style={{ color: roles.secondaryText }}
                  >
                    Secondary body text on surface.
                  </p>
                </div>
                <span
                  className={styles.miniPreviewBtn}
                  style={{
                    backgroundColor: roles.accent,
                    color: roles.background,
                  }}
                >
                  accent button
                </span>
                <span
                  className={styles.miniPreviewBtn}
                  style={{
                    backgroundColor: roles.accentSecondary,
                    color: roles.background,
                  }}
                >
                  secondary action
                </span>
              </div>

              {/* Contrast checks */}
              <div className={styles.contrastChecks}>
                <div className={styles.checkRow}>
                  text/bg:{' '}
                  {contrastBadge(ratioOf(roles.primaryText, roles.background))}
                </div>
                <div className={styles.checkRow}>
                  text/surface:{' '}
                  {contrastBadge(
                    ratioOf(roles.secondaryText, roles.surface),
                  )}
                </div>
                <div className={styles.checkRow}>
                  accent/bg:{' '}
                  {contrastBadge(ratioOf(roles.accent, roles.background))}
                </div>
              </div>

              {/* Suggestions */}
              {suggestions.length > 0 && (
                <div className={styles.suggestion}>
                  {suggestions.map((msg, i) => (
                    <p key={i}>{msg}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

