import { useState, useMemo, Fragment } from 'react';
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

/* ── Helpers ──────────────────────────────────────────────────────────────── */

function buildVariants(hex: string) {
  const { h, s, l } = hexToHsl(hex);
  return {
    lighter: hslToHex(h, s, clamp(l + 25, 0, 96)),
    darker: hslToHex(h, s, clamp(l - 25, 5, 100)),
    muted: hslToHex(h, Math.round(s * 0.4), l),
  };
}

interface HarmonySuggestion {
  hex: string;
  label: string;
  lighter: string;
  darker: string;
  muted: string;
}

function buildHarmonySuggestions(
  primaryHex: string,
  harmony: Relationship,
): HarmonySuggestion[] {
  const { h, s, l } = hexToHsl(primaryHex);
  const relatedHues = getRelatedHues(h, harmony);

  const labels =
    harmony === 'analogous'
      ? ['analogous +30', 'analogous −30']
      : harmony === 'complementary'
        ? ['complement']
        : ['triadic +120', 'triadic +240'];

  return relatedHues.map((hue, i) => {
    const hex = hslToHex(hue, s, l);
    const variants = buildVariants(hex);
    return { hex, label: labels[i], ...variants };
  });
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
  const all = palette.map((c) => c.hex);
  const sorted = sortByLuminance(all, true); // darkest first

  if (mode === 'dark') {
    const bg = sorted[0] ?? '#0a0a23';
    const surface = sorted[1] ?? sorted[0] ?? '#1b1b32';
    const primaryText = sorted[sorted.length - 1] ?? '#ffffff';
    const secondaryText = sorted[sorted.length - 2] ?? sorted[sorted.length - 1] ?? '#d0d0d5';
    const accent = palette[0]?.hex ?? '#3b82f6';
    const accentSecondary = palette[1]?.hex ?? palette[0]?.hex ?? '#3b82f6';

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
    const surface = sorted[sorted.length - 2] ?? sorted[sorted.length - 1] ?? '#f5f6f7';
    const primaryText = sorted[0] ?? '#0a0a23';
    const secondaryText = sorted[1] ?? sorted[0] ?? '#1b1b32';
    const accent = palette[0]?.hex ?? '#3b82f6';
    const accentSecondary = palette[1]?.hex ?? palette[0]?.hex ?? '#3b82f6';

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

function findAccessibleVariant(
  fgHex: string,
  bgHex: string,
  targetRatio: number,
  direction: 'lighten' | 'darken',
): string | null {
  const { h, s } = hexToHsl(fgHex);
  let { l } = hexToHsl(fgHex);
  const step = direction === 'lighten' ? 1 : -1;
  for (let i = 0; i < 101; i++) {
    l = clamp(l + step, 0, 100);
    const candidate = hslToHex(h, s, l);
    if (ratioOf(candidate, bgHex) >= targetRatio) return candidate;
    if (l <= 0 || l >= 100) break;
  }
  return null;
}

interface AccessibilitySuggestion {
  msg: string;
  role: RoleKey;
  suggestedHex: string;
  suggestedLabel: string;
}

/* ── Component ────────────────────────────────────────────────────────────── */

export function PaletteBuilderPage() {
  const [hexInput, setHexInput] = useState('#3B82F6');
  const [primaryHex, setPrimaryHex] = useState<string | null>(null);
  const [paletteColors, setPaletteColors] = useState<PaletteColor[]>([]);
  const [paletteIsCustom, setPaletteIsCustom] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editHexInput, setEditHexInput] = useState('');
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

  const paletteHexes = useMemo(
    () => paletteColors.map((c) => c.hex),
    [paletteColors],
  );

  const effectiveDark = useMemo(
    () => darkRoles ?? (paletteColors.length > 0 ? autoAssignRoles(paletteColors, 'dark') : null),
    [darkRoles, paletteColors],
  );
  const effectiveLight = useMemo(
    () => lightRoles ?? (paletteColors.length > 0 ? autoAssignRoles(paletteColors, 'light') : null),
    [lightRoles, paletteColors],
  );

  /* ── All harmony suggestions (all three types at once) ─────────────────── */

  const allHarmonySuggestions = useMemo(() => {
    if (!primaryHex) return [];
    return [
      { type: 'analogous' as Relationship, colors: buildHarmonySuggestions(primaryHex, 'analogous') },
      { type: 'complementary' as Relationship, colors: buildHarmonySuggestions(primaryHex, 'complementary') },
      { type: 'triadic' as Relationship, colors: buildHarmonySuggestions(primaryHex, 'triadic') },
    ];
  }, [primaryHex]);

  const HARMONY_DESC: Record<Relationship, string> = {
    analogous:
      'Colors adjacent on the wheel (30° apart). Harmonious and low-contrast, great for cohesive themes.',
    complementary:
      'Colors opposite on the wheel (180° apart). High contrast and vibrant, ideal for accent pairings.',
    triadic:
      'Three colors evenly spaced (120° apart). Balanced variety for multi-role systems.',
  };

  const paletteHexSet = useMemo(
    () => new Set(paletteColors.map((c) => c.hex.toUpperCase())),
    [paletteColors],
  );

  /* ── Lighter / darker / neutral suggestions ────────────────────────────── */

  const missingLighter = useMemo(() => {
    if (paletteColors.length < 2 || !primaryHex) return [];
    const hasLight = paletteColors.some((c) => hexToHsl(c.hex).l > 75);
    if (hasLight) return [];

    const sources = [...paletteHexes];
    for (const group of allHarmonySuggestions) {
      for (const c of group.colors) sources.push(c.hex);
    }
    const seen = new Set(paletteHexSet);
    const suggestions: { hex: string; from: string }[] = [];
    for (const src of sources) {
      const v = buildVariants(src);
      const upper = v.lighter.toUpperCase();
      if (!seen.has(upper) && hexToHsl(v.lighter).l > 75) {
        seen.add(upper);
        suggestions.push({ hex: v.lighter, from: src });
      }
    }
    return suggestions;
  }, [paletteColors, primaryHex, paletteHexes, paletteHexSet, allHarmonySuggestions]);

  const missingDarker = useMemo(() => {
    if (paletteColors.length < 2 || !primaryHex) return [];
    const hasDark = paletteColors.some((c) => hexToHsl(c.hex).l < 25);
    if (hasDark) return [];

    const sources = [...paletteHexes];
    for (const group of allHarmonySuggestions) {
      for (const c of group.colors) sources.push(c.hex);
    }
    const seen = new Set(paletteHexSet);
    const suggestions: { hex: string; from: string }[] = [];
    for (const src of sources) {
      const v = buildVariants(src);
      const upper = v.darker.toUpperCase();
      if (!seen.has(upper) && hexToHsl(v.darker).l < 25) {
        seen.add(upper);
        suggestions.push({ hex: v.darker, from: src });
      }
    }
    return suggestions;
  }, [paletteColors, primaryHex, paletteHexes, paletteHexSet, allHarmonySuggestions]);

  const missingNeutrals = useMemo(() => {
    if (paletteColors.length < 2 || !primaryHex) return [];
    const hasNeutral = paletteColors.some((c) => hexToHsl(c.hex).s < 20);
    if (hasNeutral) return [];

    const sources = [...paletteHexes];
    for (const group of allHarmonySuggestions) {
      for (const c of group.colors) sources.push(c.hex);
    }
    const seen = new Set(paletteHexSet);
    const suggestions: { hex: string; from: string }[] = [];
    for (const src of sources) {
      const v = buildVariants(src);
      const upper = v.muted.toUpperCase();
      if (!seen.has(upper) && hexToHsl(v.muted).s < 20) {
        seen.add(upper);
        suggestions.push({ hex: v.muted, from: src });
      }
    }
    return suggestions;
  }, [paletteColors, primaryHex, paletteHexes, paletteHexSet, allHarmonySuggestions]);

  /* ── Primary color actions ─────────────────────────────────────────────── */

  const applyPrimary = (hex: string) => {
    setPrimaryHex(hex);
    if (paletteColors.length === 0) {
      setPaletteColors([{ hex, label: 'primary' }]);
    } else {
      setPaletteColors((prev) =>
        prev.map((c, i) => (i === 0 ? { hex, label: 'primary' } : c)),
      );
    }
    setPaletteIsCustom(false);
    setEditingIndex(null);
    setDarkRoles(null);
    setLightRoles(null);
    setOpenPicker(null);
  };

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
      setDarkRoles((prev) => ({ ...(prev ?? effectiveDark!), [role]: hex }));
    } else {
      setLightRoles((prev) => ({ ...(prev ?? effectiveLight!), [role]: hex }));
    }
    setOpenPicker(null);
  };

  /* ── Palette edit helpers ───────────────────────────────────────────────── */

  const updatePaletteColor = (index: number, newHex: string) => {
    setPaletteColors((prev) =>
      prev.map((c, i) => (i === index ? { ...c, hex: newHex } : c)),
    );
    setPaletteIsCustom(true);
  };

  const addPaletteColor = (hex = '#808080', label?: string) => {
    setPaletteColors((prev) => {
      const customCount = prev.filter((c) => c.label.startsWith('custom')).length;
      return [...prev, { hex, label: label ?? `custom ${customCount + 1}` }];
    });
    setPaletteIsCustom(true);
    setEditingIndex(null);
  };

  const removePaletteColor = (index: number) => {
    setPaletteColors((prev) => prev.filter((_, i) => i !== index));
    setPaletteIsCustom(true);
    setEditingIndex((prev) =>
      prev === index ? null : prev !== null && prev > index ? prev - 1 : prev,
    );
  };

  const handleResetPalette = () => {
    if (primaryHex) {
      setPaletteColors([{ hex: primaryHex, label: 'primary' }]);
    } else {
      setPaletteColors([]);
    }
    setPaletteIsCustom(false);
    setEditingIndex(null);
  };

  /* ── Contrast matrix data ───────────────────────────────────────────────── */

  const uniqueColors = useMemo(() => {
    const seen = new Set<string>();
    return paletteHexes.filter((c) => {
      const upper = c.toUpperCase();
      if (seen.has(upper)) return false;
      seen.add(upper);
      return true;
    });
  }, [paletteHexes]);

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

  /* ── Accessibility suggestions ──────────────────────────────────────────── */

  const darkSuggestions = useMemo((): AccessibilitySuggestion[] => {
    if (!effectiveDark) return [];
    const out: AccessibilitySuggestion[] = [];
    const r = effectiveDark;

    const txtBg = ratioOf(r.primaryText, r.background);
    if (txtBg < 7) {
      const fix = findAccessibleVariant(r.primaryText, r.background, 7, 'lighten')
        ?? findAccessibleVariant(r.background, r.primaryText, 7, 'darken');
      const fixRole: RoleKey = findAccessibleVariant(r.primaryText, r.background, 7, 'lighten')
        ? 'primaryText' : 'background';
      if (fix) {
        out.push({
          msg: `Dark: primary text/bg is ${txtBg.toFixed(1)}:1 — needs 7:1 for AAA.`,
          role: fixRole,
          suggestedHex: fix,
          suggestedLabel: fixRole === 'primaryText' ? 'lighter text' : 'darker background',
        });
      }
    }

    const txtSurf = ratioOf(r.secondaryText, r.surface);
    if (txtSurf < 7) {
      const fix = findAccessibleVariant(r.secondaryText, r.surface, 7, 'lighten')
        ?? findAccessibleVariant(r.surface, r.secondaryText, 7, 'darken');
      const fixRole: RoleKey = findAccessibleVariant(r.secondaryText, r.surface, 7, 'lighten')
        ? 'secondaryText' : 'surface';
      if (fix) {
        out.push({
          msg: `Dark: secondary text/surface is ${txtSurf.toFixed(1)}:1 — needs 7:1 for AAA.`,
          role: fixRole,
          suggestedHex: fix,
          suggestedLabel: fixRole === 'secondaryText' ? 'lighter text' : 'darker surface',
        });
      }
    }

    const accBg = ratioOf(r.accent, r.background);
    if (accBg < 7) {
      const fix = findAccessibleVariant(r.accent, r.background, 7, 'lighten');
      if (fix) {
        out.push({
          msg: `Dark: accent/bg is ${accBg.toFixed(1)}:1 — needs 7:1 for AAA.`,
          role: 'accent',
          suggestedHex: fix,
          suggestedLabel: 'lighter accent',
        });
      }
    }

    return out;
  }, [effectiveDark]);

  const lightSuggestions = useMemo((): AccessibilitySuggestion[] => {
    if (!effectiveLight) return [];
    const out: AccessibilitySuggestion[] = [];
    const r = effectiveLight;

    const txtBg = ratioOf(r.primaryText, r.background);
    if (txtBg < 7) {
      const fix = findAccessibleVariant(r.primaryText, r.background, 7, 'darken')
        ?? findAccessibleVariant(r.background, r.primaryText, 7, 'lighten');
      const fixRole: RoleKey = findAccessibleVariant(r.primaryText, r.background, 7, 'darken')
        ? 'primaryText' : 'background';
      if (fix) {
        out.push({
          msg: `Light: primary text/bg is ${txtBg.toFixed(1)}:1 — needs 7:1 for AAA.`,
          role: fixRole,
          suggestedHex: fix,
          suggestedLabel: fixRole === 'primaryText' ? 'darker text' : 'lighter background',
        });
      }
    }

    const txtSurf = ratioOf(r.secondaryText, r.surface);
    if (txtSurf < 7) {
      const fix = findAccessibleVariant(r.secondaryText, r.surface, 7, 'darken')
        ?? findAccessibleVariant(r.surface, r.secondaryText, 7, 'lighten');
      const fixRole: RoleKey = findAccessibleVariant(r.secondaryText, r.surface, 7, 'darken')
        ? 'secondaryText' : 'surface';
      if (fix) {
        out.push({
          msg: `Light: secondary text/surface is ${txtSurf.toFixed(1)}:1 — needs 7:1 for AAA.`,
          role: fixRole,
          suggestedHex: fix,
          suggestedLabel: fixRole === 'secondaryText' ? 'darker text' : 'lighter surface',
        });
      }
    }

    const accBg = ratioOf(r.accent, r.background);
    if (accBg < 7) {
      const fix = findAccessibleVariant(r.accent, r.background, 7, 'darken');
      if (fix) {
        out.push({
          msg: `Light: accent/bg is ${accBg.toFixed(1)}:1 — needs 7:1 for AAA.`,
          role: 'accent',
          suggestedHex: fix,
          suggestedLabel: 'darker accent',
        });
      }
    }

    return out;
  }, [effectiveLight]);

  /* ── Theme insufficiency suggestions ────────────────────────────────────── */

  const themeSuggestions = useMemo((): string[] => {
    if (paletteColors.length === 0) return [];
    const out: string[] = [];
    if (paletteColors.length < 2)
      out.push('Add at least one more color for contrast pairings to appear.');
    if (paletteColors.length < 4)
      out.push('Consider adding lighter and darker tones for backgrounds and text.');
    if (paletteColors.length < 6)
      out.push('A second accent color would let you differentiate primary and secondary actions.');
    const hasLight = paletteColors.some((c) => hexToHsl(c.hex).l > 75);
    const hasDark = paletteColors.some((c) => hexToHsl(c.hex).l < 25);
    if (!hasLight && paletteColors.length >= 2)
      out.push('Your palette lacks a light color — needed for light-mode backgrounds or dark-mode text.');
    if (!hasDark && paletteColors.length >= 2)
      out.push('Your palette lacks a dark color — needed for dark-mode backgrounds or light-mode text.');
    return out;
  }, [paletteColors]);

  /* ── Render ─────────────────────────────────────────────────────────────── */

  const previewHex = primaryHex ?? '#3B82F6';
  const primaryHsl = hexToHsl(previewHex);

  const a11ySuggestions = [...darkSuggestions, ...lightSuggestions];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>palette builder</h1>
      <p className={styles.subtitle}>
        Pick a primary color, explore harmony suggestions, and build your
        palette by choosing the colors you want.
      </p>

      <div className={styles.twoColumn}>
        {/* ════════════════ LEFT: SUGGESTIONS COLUMN ════════════════ */}
        <div className={styles.suggestionsColumn}>

          {/* ── Color Picker ──────────────────────────────────────── */}
          <div className={styles.section}>
            <h2 className={styles.sectionHeading}>pick your primary color</h2>
            <div className={styles.inputBar}>
              <input
                type="color"
                className={styles.colorPicker}
                value={previewHex.toLowerCase()}
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
                style={{ backgroundColor: previewHex }}
                aria-hidden="true"
              />
              <span className={styles.hslReadout}>
                H {primaryHsl.h} &middot; S {primaryHsl.s} &middot; L {primaryHsl.l}
              </span>
            </div>
          </div>

          {/* ── Harmony Suggestions (all three types) ─────────────── */}
          {primaryHex && allHarmonySuggestions.map(({ type, colors }) => (
            <div key={type} className={styles.section}>
              <h2 className={styles.sectionHeading}>{type}</h2>
              <p className={styles.harmonyDesc}>{HARMONY_DESC[type]}</p>
              <div className={styles.suggestionsGrid}>
                {colors.map((color) => {
                  const isAdded = paletteHexSet.has(color.hex.toUpperCase());
                  return (
                    <div key={color.hex} className={styles.suggestionCard}>
                      <div className={styles.swatchColumnHeader}>
                        <span className={styles.swatchColumnLabel}>{color.label}</span>
                      </div>
                      <div
                        className={styles.suggestMainSwatch}
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className={styles.swatchHex}>{color.hex.toUpperCase()}</span>
                      <button
                        className={`${styles.variantPromoteBtn} ${isAdded ? styles.variantPromoAdded : ''}`}
                        onClick={() => { if (!isAdded) addPaletteColor(color.hex, color.label); }}
                        disabled={isAdded}
                        aria-label={isAdded ? `${color.label} already in palette` : `Add ${color.label} to palette`}
                      >
                        {isAdded ? '✓ added' : '+ add to palette'}
                      </button>
                      <div className={styles.variantRow}>
                        {(
                          [
                            ['lighter', color.lighter],
                            ['darker', color.darker],
                            ['muted', color.muted],
                          ] as const
                        ).map(([label, hex]) => {
                          const varAdded = paletteHexSet.has(hex.toUpperCase());
                          return (
                            <div key={label} className={styles.variantSwatch}>
                              <div
                                className={styles.variantBlock}
                                style={{ backgroundColor: hex }}
                              />
                              <span className={styles.variantLabel}>{label}</span>
                              <span className={styles.variantHex}>{hex.toUpperCase()}</span>
                              <button
                                className={`${styles.variantPromoteBtn} ${varAdded ? styles.variantPromoAdded : ''}`}
                                onClick={() => { if (!varAdded) addPaletteColor(hex); }}
                                disabled={varAdded}
                                title={varAdded ? `${hex.toUpperCase()} already in palette` : `Add ${hex.toUpperCase()} as palette color`}
                                aria-label={varAdded ? `${label} already in palette` : `Add ${label} variant as palette color`}
                              >
                                {varAdded ? '✓' : '+ add'}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* ── Missing lighter colors ────────────────────────────── */}
          {missingLighter.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionHeading}>your palette is missing lighter colors</h2>
              <div className={styles.suggestionsGrid}>
                {missingLighter.map(({ hex }) => {
                  const isAdded = paletteHexSet.has(hex.toUpperCase());
                  return (
                    <div key={hex} className={styles.suggestionCard}>
                      <div
                        className={styles.suggestMainSwatch}
                        style={{ backgroundColor: hex }}
                      />
                      <span className={styles.swatchHex}>{hex.toUpperCase()}</span>
                      <button
                        className={`${styles.variantPromoteBtn} ${isAdded ? styles.variantPromoAdded : ''}`}
                        onClick={() => { if (!isAdded) addPaletteColor(hex, 'lighter'); }}
                        disabled={isAdded}
                      >
                        {isAdded ? '✓ added' : '+ add to palette'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── Missing darker colors ─────────────────────────────── */}
          {missingDarker.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionHeading}>your palette is missing darker colors</h2>
              <div className={styles.suggestionsGrid}>
                {missingDarker.map(({ hex }) => {
                  const isAdded = paletteHexSet.has(hex.toUpperCase());
                  return (
                    <div key={hex} className={styles.suggestionCard}>
                      <div
                        className={styles.suggestMainSwatch}
                        style={{ backgroundColor: hex }}
                      />
                      <span className={styles.swatchHex}>{hex.toUpperCase()}</span>
                      <button
                        className={`${styles.variantPromoteBtn} ${isAdded ? styles.variantPromoAdded : ''}`}
                        onClick={() => { if (!isAdded) addPaletteColor(hex, 'darker'); }}
                        disabled={isAdded}
                      >
                        {isAdded ? '✓ added' : '+ add to palette'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── Missing neutrals ──────────────────────────────────── */}
          {missingNeutrals.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionHeading}>your palette is missing neutral colors</h2>
              <div className={styles.suggestionsGrid}>
                {missingNeutrals.map(({ hex }) => {
                  const isAdded = paletteHexSet.has(hex.toUpperCase());
                  return (
                    <div key={hex} className={styles.suggestionCard}>
                      <div
                        className={styles.suggestMainSwatch}
                        style={{ backgroundColor: hex }}
                      />
                      <span className={styles.swatchHex}>{hex.toUpperCase()}</span>
                      <button
                        className={`${styles.variantPromoteBtn} ${isAdded ? styles.variantPromoAdded : ''}`}
                        onClick={() => { if (!isAdded) addPaletteColor(hex, 'neutral'); }}
                        disabled={isAdded}
                      >
                        {isAdded ? '✓ added' : '+ add to palette'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── Theme advice ──────────────────────────────────────── */}
          {themeSuggestions.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionHeading}>theme advice</h2>
              <div className={styles.suggestion}>
                {themeSuggestions.map((msg, i) => (
                  <p key={i} className={styles.a11ySuggestionMsg}>{msg}</p>
                ))}
              </div>
            </div>
          )}

          {/* ── Contrast / accessibility suggestions ──────────────── */}
          {a11ySuggestions.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionHeading}>accessibility suggestions</h2>
              <div className={styles.suggestion}>
                {a11ySuggestions.map((s, i) => (
                  <div key={i} className={styles.a11ySuggestion}>
                    <p className={styles.a11ySuggestionMsg}>{s.msg}</p>
                    <div className={styles.a11ySuggestionFix}>
                      <div
                        className={styles.a11ySuggestionSwatch}
                        style={{ backgroundColor: s.suggestedHex }}
                      />
                      <span className={styles.a11ySuggestionHex}>
                        {s.suggestedHex.toUpperCase()}
                      </span>
                      <span className={styles.a11ySuggestionFixLabel}>
                        {s.suggestedLabel}
                      </span>
                      <button
                        className={styles.a11ySuggestionApply}
                        onClick={() => addPaletteColor(s.suggestedHex, s.suggestedLabel)}
                        aria-label={`Add ${s.suggestedHex.toUpperCase()} to palette`}
                      >
                        + add to palette
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ════════════════ RIGHT: PALETTE COLUMN ════════════════ */}
        <div className={styles.paletteColumn}>

          {/* ── Palette Grid ──────────────────────────────────────── */}
          <div className={styles.section}>
            <div className={styles.sectionHeaderRow}>
              <h2 className={styles.sectionHeading}>your palette</h2>
              {paletteIsCustom && (
                <button className={styles.resetBtn} onClick={handleResetPalette}>
                  ↺ reset
                </button>
              )}
            </div>

            {paletteColors.length === 0 ? (
              <p className={styles.harmonyDesc}>
                Pick a primary color to get started.
              </p>
            ) : (
              <>
                <div className={styles.paletteGrid}>
                  {paletteColors.map((color, i) => (
                    <div key={i} className={styles.swatchColumn}>
                      <div className={styles.swatchColumnHeader}>
                        <span className={styles.swatchColumnLabel}>{color.label}</span>
                        {paletteColors.length > 1 && (
                          <button
                            className={styles.removeBtn}
                            onClick={() => removePaletteColor(i)}
                            aria-label={`Remove ${color.label}`}
                            title="Remove color"
                          >
                            ×
                          </button>
                        )}
                      </div>
                      <button
                        className={styles.swatchEditable}
                        style={{ backgroundColor: color.hex }}
                        onClick={() => {
                          if (editingIndex === i) {
                            setEditingIndex(null);
                          } else {
                            setEditingIndex(i);
                            setEditHexInput(color.hex.toUpperCase());
                          }
                        }}
                        aria-label={`Edit ${color.label} — ${color.hex.toUpperCase()}`}
                        title="Click to edit"
                      />
                      {editingIndex === i && (
                        <div className={styles.editInline}>
                          <input
                            type="color"
                            className={styles.editInlinePicker}
                            value={editHexInput.toLowerCase()}
                            onChange={(e) => {
                              const val = e.target.value.toUpperCase();
                              setEditHexInput(val);
                              updatePaletteColor(i, val);
                            }}
                            aria-label="Pick color"
                          />
                          <input
                            type="text"
                            className={`${styles.editInlineInput} ${parseHex(editHexInput) === null ? styles.hexInputInvalid : ''}`}
                            value={editHexInput}
                            onChange={(e) => setEditHexInput(e.target.value)}
                            onBlur={() => {
                              const parsed = parseHex(editHexInput);
                              if (parsed) {
                                const canonical = rgbToHex(parsed);
                                setEditHexInput(canonical);
                                updatePaletteColor(i, canonical);
                              }
                            }}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                const parsed = parseHex(editHexInput);
                                if (parsed) {
                                  const canonical = rgbToHex(parsed);
                                  setEditHexInput(canonical);
                                  updatePaletteColor(i, canonical);
                                  setEditingIndex(null);
                                }
                              }
                              if (e.key === 'Escape') setEditingIndex(null);
                            }}
                            autoFocus
                            aria-label="Hex color value"
                            spellCheck={false}
                          />
                        </div>
                      )}
                      <span className={styles.swatchHex}>{color.hex.toUpperCase()}</span>
                    </div>
                  ))}
                </div>
                <button className={styles.addColorBtn} onClick={() => addPaletteColor()}>
                  + add color
                </button>
              </>
            )}
          </div>

          {/* ── Contrast Matrix ────────────────────────────────────── */}
          {paletteColors.length >= 2 && (
            <div className={styles.section}>
              <h2 className={styles.sectionHeading}>contrast pairings</h2>
              {matrixPairs.length === 0 ? (
                <p className={styles.harmonyDesc}>
                  No high-contrast pairings found. Try adding colors with more
                  lightness variation.
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
          )}

          {/* ── Theme Arranger ─────────────────────────────────────── */}
          {paletteColors.length >= 1 && effectiveDark && effectiveLight && (
            <div className={styles.section}>
              <h2 className={styles.sectionHeading}>theme arranger</h2>
              <div className={styles.arrangerRow}>
                {(
                  [
                    ['dark', effectiveDark, darkSuggestions] as const,
                    ['light', effectiveLight, lightSuggestions] as const,
                  ]
                ).map(([mode, roles]) => (
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
                            {paletteHexes.map((hex, i) => (
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
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
