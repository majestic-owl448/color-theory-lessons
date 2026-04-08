# Plan: Palette Builder Page

## Context

The nav bar currently links to an external contrast checker (`../palette-contrast-checker/`). Replace it with an internal **Palette Builder** page that helps users start from a primary color, generate harmony-based palettes with tonal variants, validate WCAG AAA contrast, and arrange colors for dark + light mode themes.

## Design System: Command-line Chic

All styling must follow freeCodeCamp's "Command-line Chic" aesthetic:

- **Dark-first**: `#0a0a23` (gray-90) base background. Never pure black.
- **7:1 contrast minimum** for all text on backgrounds.
- **18px minimum font size** — no exceptions.
- **Monospace** (Hack-ZeroSlash / `var(--font-mono)`) for all labels, data, hex values.
- **Lato** (`var(--font-sans)`) only for descriptive prose.
- **Accent colors by semantic role only** (using app token names from `src/index.css`):
  - `var(--accent-success)` (`#acd157`) → AAA pass indicators
  - `var(--accent-cta)` (`#f1be32`) → AA-only / warnings, CTA buttons
  - `var(--accent-danger)` (`#ffadad`) → fail indicators
  - `var(--accent-link)` (`#99c9ff`) → interactive elements, links
  - `var(--accent-emphasis)` (`#dbb8ff`) → emphasis/highlights
- **Focus outlines**: `var(--focus-ring)` (`#198eee`), already globally applied via `*:focus-visible` in index.css.
- **Inputs**: `var(--primary-background)` (gray-90) bg on `var(--surface)` (gray-80) surface.
- **Cards/panels**: `var(--surface)` bg, `var(--border)` border. No shadows in dark mode.
- **Depth via luminance**, not shadows.
- **No color-only signaling** — pair color badges with text labels (AAA, AA, fail).
- **Responsive breakpoints**: 500px, 700px, 1000px.

## Files to Create

### `src/pages/PaletteBuilderPage.tsx`
Standalone page component (no lesson/tool props). Sections:

**A. Color Input** — hex text input (monospace, gray-90 bg on gray-80 surface, focus ring `#198eee`) + native `<input type="color">` + large swatch preview with HSL readout in monospace. Validates via `parseHex()`. Invalid input gets `--danger-color` border (`#ffadad`). Default: `#3B82F6`.

**B. Harmony Selector** — three toggle buttons styled as ghost buttons (gray-75 border, gray-15 text). Active button gets gray-80 background + gray-00 text. Brief explanation of selected type below in gray-15 Lato prose.

**C. Palette Grid** — CSS grid, one column per hue. Each column is a card (gray-80 bg, gray-75 border, `var(--radius-md)`). Each shows:
- Base swatch (large, 120px tall) with hex label in monospace below
- Three smaller variant swatches: lighter (L+25), darker (L-25), muted (S×0.4)
- Analogous → 3 columns, complementary → 2, triadic → 3

**D. Contrast Matrix** — grid styled like a terminal table. Monospace throughout. Header row gets gray-85 bg. Alternating rows use gray-80/gray-85. Each cell shows ratio (e.g. `7.2:1`) + text badge:
- `AAA` in green (`#acd157`) for ≥7:1
- `AA` in yellow (`#f1be32`) for ≥4.5:1 but <7:1
- `fail` in red (`#ffadad`) for <4.5:1
- Filter out same-lightness pairs (L difference < 30)

**E. Dark + Light Mode Arranger** — two side-by-side panels (gray-80 bg, gray-75 border). Section headings in uppercase monospace gray-45 (matching SettingsPage `.sectionHeading` pattern). Each panel has 6 role slots (background, surface, primaryText, secondaryText, accent, accentSecondary). Clicking a role swatch opens an inline picker showing all palette colors. Below each panel: a mini-preview card + contrast checks for critical pairs (text/bg, text/surface, accent/bg) using the same AAA/AA/fail badges. If palette can't fill both modes, show a suggestion box with dashed gray-75 border containing synthesized hex recommendations.

**State shape:**
```
hexInput, primaryHex       — user input
harmony                    — 'analogous' | 'complementary' | 'triadic'
darkRoles, lightRoles      — Record<RoleKey, string> for 6 roles each
previewMode                — 'dark' | 'light' (which preview is expanded)
```
All palette colors, contrast pairs, and suggestions are derived via `useMemo`.

**Auto-populate dark/light roles:**
- Dark: darkest color → bg, second darkest → surface, lightest → primaryText, muted lightest → secondaryText, primary → accent, first harmony → accentSecondary
- Light: lightest → bg, second lightest → surface, darkest → primaryText, muted darkest → secondaryText, darker primary → accent
- If no color exists in the needed luminance range, synthesize one by pushing L toward 0 or 100

### `src/pages/PaletteBuilderPage.module.css`
Follow existing page pattern (`.container`, `.heading`). Use `max-width: var(--max-content-width)` (900px — data-rich tool layout per command-line-chic "terminal-grade information density"). All values via the app's semantic tokens — never hardcode hex in CSS (dynamic swatch colors are inline styles in TSX only).

**App token names** (from `src/index.css`):
- Backgrounds: `var(--primary-background)` (gray-90), `var(--secondary-background)` (gray-85), `var(--surface)` (gray-80)
- Border: `var(--border)` (gray-75)
- Text: `var(--primary-foreground)` (white), `var(--secondary-foreground)` (gray-15), `var(--muted)` (gray-45)
- Accents: `var(--accent-success)` (green), `var(--accent-cta)` (yellow), `var(--accent-danger)` (red), `var(--accent-link)` (blue), `var(--accent-emphasis)` (purple)
- Fonts: `var(--font-mono)` for labels/data, `var(--font-sans)` for prose
- Focus: `var(--focus-ring)` (`#198eee`) — already applied globally via `*:focus-visible` in index.css
- Spacing: `var(--spacing-sm)` through `var(--spacing-2xl)`
- Radius: `var(--radius-sm)` (3px), `var(--radius-md)` (6px)

Responsive: stack arranger panels vertically below 700px, contrast matrix `overflow-x: auto` below 500px

## Files to Modify

### `src/utils/color.ts` — add 3 functions at end

```ts
/** WCAG 2.x relative luminance with proper sRGB linearization. */
export function luminanceWcag({ r, g, b }: RGB): number {
  const lin = (c: number) => {
    const s = c / 255;
    return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

/** WCAG contrast ratio using proper sRGB luminance. */
export function contrastRatioWcag(a: RGB, b: RGB): number {
  const la = luminanceWcag(a);
  const lb = luminanceWcag(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

/** Clamp a number to [min, max]. */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
```

Note: the existing `luminance`/`contrastRatio` use simplified linear math — lesson tools depend on them, so leave untouched. The palette builder uses the `Wcag` variants for accurate validation.

### `src/components/nav/TopNav.tsx` — replace external link (lines 12-19)

Replace:
```tsx
<a href="https://majestic-owl448.github.io/palette-contrast-checker/"
  target="_blank" rel="noopener noreferrer" className={styles.link}>
  contrast checker ↗
</a>
```

With:
```tsx
<NavLink to="/palette-builder"
  className={({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link
  }>
  palette builder
</NavLink>
```

### `src/App.tsx` — add route + import

Add import for `PaletteBuilderPage`, add route:
```tsx
<Route path="/palette-builder" element={<PaletteBuilderPage />} />
```

## Reused Utilities (from `src/utils/color.ts`)

| Function | Use |
|----------|-----|
| `hexToRgb` | Feed into contrast ratio calculations |
| `hexToHsl` / `hslToHex` | Generate tonal variants (adjust L and S) |
| `getRelatedHues` | Generate analogous/complementary/triadic hues |
| `parseHex` | Validate hex text input |
| `rgbToHex` | Convert back from RGB after parseHex |
| `contrastRatioWcag` (new) | All WCAG validation on this page |
| `clamp` (new) | Clamp L/S values when generating variants |

## Verification

1. `npm run build` — no TypeScript errors
2. `npm run dev` — test manually:
   - Navigate to palette builder via nav bar link
   - Enter a hex color or use the picker → palette grid updates
   - Toggle harmony types → correct number of hues displayed
   - Verify tonal variants (lighter/darker/muted) are visually distinct
   - Check contrast matrix shows correct AAA/AA/fail badges
   - Verify dark/light arranger auto-populates roles
   - Click roles to cycle through palette colors → mini-preview updates
   - Test with extreme colors (pure white, pure black, mid-gray) — suggestions should appear when palette can't cover both modes
   - Test responsive layout at narrow viewport
