/** Represents a color in the RGB color space. */
export interface RGB {
  /** Red channel (0-255). */
  r: number;
  /** Green channel (0-255). */
  g: number;
  /** Blue channel (0-255). */
  b: number;
}

/** Represents a color in the HSL color space. */
export interface HSL {
  /** Hue (0-360). */
  h: number;
  /** Saturation (0-100). */
  s: number;
  /** Lightness (0-100). */
  l: number;
}

/** Supported color harmony relationships. */
export type Relationship = 'analogous' | 'complementary' | 'triadic';

/**
 * Parse a 7-char hex string (#RRGGBB) into RGB channels.
 * @param hex - A string starting with '#' followed by 6 hexadecimal characters.
 * @returns An RGB object with r, g, and b values from 0-255.
 */
export function hexToRgb(hex: string): RGB {
  const n = parseInt(hex.slice(1), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

/**
 * Convert RGB channels to a 7-char uppercase hex string.
 * @param rgb - An object containing r, g, and b numeric values.
 * @returns A string in the format #RRGGBB.
 */
export function rgbToHex({ r, g, b }: RGB): string {
  return (
    '#' +
    [r, g, b]
      .map((v) => v.toString(16).padStart(2, '0').toUpperCase())
      .join('')
  );
}

/**
 * Convert a 7-char hex string to rounded HSL values.
 * @param hex - A 7-character hex string (e.g., #FFFFFF).
 * @returns An HSL object with h (0-360), s (0-100), and l (0-100).
 */
export function hexToHsl(hex: string): HSL {
  const { r, g, b } = hexToRgb(hex);
  const rn = r / 255, gn = g / 255, bn = b / 255;
  const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  if (max === min) return { h: 0, s: 0, l: Math.round(l * 100) };
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h: number;
  switch (max) {
    case rn: h = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6; break;
    case gn: h = ((bn - rn) / d + 2) / 6; break;
    default:  h = ((rn - gn) / d + 4) / 6;
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

/**
 * Convert HSL values to a 7-char lowercase hex string.
 * @param h - Hue (0-360).
 * @param s - Saturation (0-100).
 * @param l - Lightness (0-100).
 * @returns A lowercase hex string (e.g., #ffffff).
 */
export function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const col = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * col).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

/**
 * Parse a 3- or 6-char hex string (with or without #) into RGB, or null if invalid.
 * @param raw - A hex string like '#FFF', 'abc', or '#001122'.
 * @returns An RGB object or null if the string is not a valid hex color.
 */
export function parseHex(raw: string): RGB | null {
  const s = raw.replace(/^#/, '').trim().toUpperCase();
  if (s.length === 3 && /^[0-9A-F]{3}$/.test(s)) {
    return {
      r: parseInt(s[0] + s[0], 16),
      g: parseInt(s[1] + s[1], 16),
      b: parseInt(s[2] + s[2], 16),
    };
  }
  if (s.length === 6 && /^[0-9A-F]{6}$/.test(s)) {
    return {
      r: parseInt(s.slice(0, 2), 16),
      g: parseInt(s.slice(2, 4), 16),
      b: parseInt(s.slice(4, 6), 16),
    };
  }
  return null;
}

/**
 * Format an RGB object as a CSS rgb() string.
 * @param rgb - RGB color object.
 * @returns A CSS-compatible rgb string, e.g., 'rgb(255, 0, 0)'.
 */
export function rgbString({ r, g, b }: RGB): string {
  return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Format an HSL object as a CSS hsl() string.
 * @param hsl - HSL color object.
 * @returns A CSS-compatible hsl string, e.g., 'hsl(200, 50%, 50%)'.
 */
export function hslString({ h, s, l }: HSL): string {
  return `hsl(${h}, ${s}%, ${l}%)`;
}

/**
 * Euclidean distance between two RGB colors. 
 * Often used to determine how "different" two colors look.
 * @param a - First RGB color.
 * @param b - Second RGB color.
 * @returns The distance between the two points in 3D color space.
 */
export function colorDistance(a: RGB, b: RGB): number {
  return Math.sqrt(
    (a.r - b.r) ** 2 + (a.g - b.g) ** 2 + (a.b - b.b) ** 2,
  );
}

/** 
 * Relative luminance (simplified linear approximation). 
 * Use luminanceWcag for standard-compliant contrast calculations.
 */
export function luminance({ r, g, b }: RGB): number {
  return 0.2126 * (r / 255) + 0.7152 * (g / 255) + 0.0722 * (b / 255);
}

/** 
 * WCAG contrast ratio between two RGB colors using the simplified luminance model.
 * @returns A ratio between 1 and 21.
 */
export function contrastRatio(a: RGB, b: RGB): number {
  const la = luminance(a);
  const lb = luminance(b);
  const lighter = Math.max(la, lb);
  const darker = Math.min(la, lb);
  return (lighter + 0.05) / (darker + 0.05);
}

/** 
 * Spread between the highest and lowest RGB channel values. 
 * High spread indicates a more saturated/vibrant color.
 */
export function channelSpread({ r, g, b }: RGB): number {
  return Math.max(r, g, b) - Math.min(r, g, b);
}

/** 
 * Return related hues for a given base hue and relationship type. 
 * @param baseH - The primary hue (0-360).
 * @param rel - The harmony type (e.g., 'complementary').
 * @returns An array of hues that form the requested relationship.
 */
export function getRelatedHues(baseH: number, rel: Relationship): number[] {
  switch (rel) {
    case 'analogous':
      return [(baseH + 30) % 360, (baseH - 30 + 360) % 360];
    case 'complementary':
      return [(baseH + 180) % 360];
    case 'triadic':
      return [(baseH + 120) % 360, (baseH + 240) % 360];
  }
}

/** 
 * WCAG 2.x relative luminance with proper sRGB linearization.
 * Required for accessibility tools and contrast checking.
 */
export function luminanceWcag({ r, g, b }: RGB): number {
  const lin = (c: number) => {
    const s = c / 255;
    return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

/** 
 * WCAG contrast ratio using proper sRGB luminance.
 * Use this for standard-compliant "Pass/Fail" accessibility checks.
 * @returns A ratio between 1 (no contrast) and 21 (black on white).
 */
export function contrastRatioWcag(a: RGB, b: RGB): number {
  const la = luminanceWcag(a);
  const lb = luminanceWcag(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

/** 
 * Clamp a number to a specific range.
 * @param value - The input value.
 * @param min - The lower bound.
 * @param max - The upper bound.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

/** 
 * Approximate deuteranopia (green-blindness) simulation on a hex string.
 * Useful for providing "Color Blindness Mode" previews in the UI.
 * @param hex - Original hex color.
 * @returns Simulated hex color.
 */
export function simulateDeuteranopia(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const sr = Math.min(1, r * 0.367 + g * 0.861 - b * 0.228);
  const sg = Math.min(1, r * 0.280 + g * 0.673 + b * 0.047);
  const sb = Math.min(1, -r * 0.012 + g * 0.043 + b * 0.969);
  const toHex = (v: number) => Math.round(Math.max(0, Math.min(255, v * 255))).toString(16).padStart(2, '0');
  return `#${toHex(sr)}${toHex(sg)}${toHex(sb)}`;
}
