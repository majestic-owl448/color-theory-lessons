import { describe, it, expect } from 'vitest';
import {
  hexToRgb,
  rgbToHex,
  hexToHsl,
  hslToHex,
  parseHex,
  rgbString,
  hslString,
  colorDistance,
  luminance,
  contrastRatio,
  channelSpread,
  getRelatedHues,
  luminanceWcag,
  contrastRatioWcag,
  clamp,
  simulateDeuteranopia,
} from './color.ts';

describe('hexToRgb', () => {
  it('parses black', () => expect(hexToRgb('#000000')).toEqual({ r: 0, g: 0, b: 0 }));
  it('parses white', () => expect(hexToRgb('#FFFFFF')).toEqual({ r: 255, g: 255, b: 255 }));
  it('parses pure red', () => expect(hexToRgb('#FF0000')).toEqual({ r: 255, g: 0, b: 0 }));
  it('parses pure green', () => expect(hexToRgb('#00FF00')).toEqual({ r: 0, g: 255, b: 0 }));
  it('parses pure blue', () => expect(hexToRgb('#0000FF')).toEqual({ r: 0, g: 0, b: 255 }));
  it('parses mixed color', () => expect(hexToRgb('#1A2B3C')).toEqual({ r: 26, g: 43, b: 60 }));
});

describe('rgbToHex', () => {
  it('formats black', () => expect(rgbToHex({ r: 0, g: 0, b: 0 })).toBe('#000000'));
  it('formats white', () => expect(rgbToHex({ r: 255, g: 255, b: 255 })).toBe('#FFFFFF'));
  it('formats pure red', () => expect(rgbToHex({ r: 255, g: 0, b: 0 })).toBe('#FF0000'));
  it('pads single-digit channels', () => expect(rgbToHex({ r: 1, g: 2, b: 3 })).toBe('#010203'));
  it('round-trips with hexToRgb', () => {
    const hex = '#3A7BCD';
    expect(rgbToHex(hexToRgb(hex))).toBe(hex);
  });
});

describe('hexToHsl', () => {
  it('converts black', () => expect(hexToHsl('#000000')).toEqual({ h: 0, s: 0, l: 0 }));
  it('converts white', () => expect(hexToHsl('#FFFFFF')).toEqual({ h: 0, s: 0, l: 100 }));
  it('converts pure red', () => expect(hexToHsl('#FF0000')).toEqual({ h: 0, s: 100, l: 50 }));
  it('converts pure green', () => expect(hexToHsl('#00FF00')).toEqual({ h: 120, s: 100, l: 50 }));
  it('converts pure blue', () => expect(hexToHsl('#0000FF')).toEqual({ h: 240, s: 100, l: 50 }));
  it('converts mid-gray', () => expect(hexToHsl('#808080')).toEqual({ h: 0, s: 0, l: 50 }));
});

describe('hslToHex', () => {
  it('converts black', () => expect(hslToHex(0, 0, 0)).toBe('#000000'));
  it('converts white', () => expect(hslToHex(0, 0, 100)).toBe('#ffffff'));
  it('converts pure red', () => expect(hslToHex(0, 100, 50)).toBe('#ff0000'));
  it('converts pure green', () => expect(hslToHex(120, 100, 50)).toBe('#00ff00'));
  it('converts pure blue', () => expect(hslToHex(240, 100, 50)).toBe('#0000ff'));
  it('round-trips with hexToHsl for primary colors', () => {
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#000000', '#FFFFFF'];
    for (const hex of colors) {
      const { h, s, l } = hexToHsl(hex);
      expect(hslToHex(h, s, l)).toBe(hex.toLowerCase());
    }
  });
});

describe('parseHex', () => {
  it('parses 6-char hex with #', () => expect(parseHex('#FF0000')).toEqual({ r: 255, g: 0, b: 0 }));
  it('parses 6-char hex without #', () => expect(parseHex('001122')).toEqual({ r: 0, g: 17, b: 34 }));
  it('parses 3-char hex with #', () => expect(parseHex('#FFF')).toEqual({ r: 255, g: 255, b: 255 }));
  it('parses 3-char hex without #', () => expect(parseHex('fff')).toEqual({ r: 255, g: 255, b: 255 }));
  it('expands 3-char shorthand correctly', () => expect(parseHex('#1AF')).toEqual({ r: 17, g: 170, b: 255 }));
  it('is case-insensitive', () => expect(parseHex('#ff0000')).toEqual({ r: 255, g: 0, b: 0 }));
  it('returns null for empty string', () => expect(parseHex('')).toBeNull());
  it('returns null for invalid chars', () => expect(parseHex('#GGGGGG')).toBeNull());
  it('returns null for wrong length', () => expect(parseHex('#12345')).toBeNull());
  it('returns null for non-hex string', () => expect(parseHex('invalid')).toBeNull());
});

describe('rgbString', () => {
  it('formats correctly', () => expect(rgbString({ r: 255, g: 128, b: 0 })).toBe('rgb(255, 128, 0)'));
  it('formats black', () => expect(rgbString({ r: 0, g: 0, b: 0 })).toBe('rgb(0, 0, 0)'));
});

describe('hslString', () => {
  it('formats correctly', () => expect(hslString({ h: 200, s: 50, l: 75 })).toBe('hsl(200, 50%, 75%)'));
  it('formats zero values', () => expect(hslString({ h: 0, s: 0, l: 0 })).toBe('hsl(0, 0%, 0%)'));
});

describe('colorDistance', () => {
  it('returns 0 for identical colors', () => {
    expect(colorDistance({ r: 100, g: 100, b: 100 }, { r: 100, g: 100, b: 100 })).toBe(0);
  });
  it('returns correct distance for a 3-4-0 right triangle in RGB space', () => {
    expect(colorDistance({ r: 3, g: 4, b: 0 }, { r: 0, g: 0, b: 0 })).toBe(5);
  });
  it('returns max distance for black vs white', () => {
    const d = colorDistance({ r: 0, g: 0, b: 0 }, { r: 255, g: 255, b: 255 });
    expect(d).toBeCloseTo(255 * Math.sqrt(3), 5);
  });
});

describe('luminance (simplified)', () => {
  it('returns 0 for black', () => expect(luminance({ r: 0, g: 0, b: 0 })).toBe(0));
  it('returns 1 for white', () => expect(luminance({ r: 255, g: 255, b: 255 })).toBeCloseTo(1, 5));
  it('weights green channel highest', () => {
    const green = luminance({ r: 0, g: 255, b: 0 });
    const red = luminance({ r: 255, g: 0, b: 0 });
    const blue = luminance({ r: 0, g: 0, b: 255 });
    expect(green).toBeGreaterThan(red);
    expect(green).toBeGreaterThan(blue);
  });
});

describe('contrastRatio (simplified)', () => {
  it('returns 21 for black vs white', () => {
    expect(contrastRatio({ r: 0, g: 0, b: 0 }, { r: 255, g: 255, b: 255 })).toBeCloseTo(21, 5);
  });
  it('returns 1 for identical colors', () => {
    expect(contrastRatio({ r: 128, g: 64, b: 32 }, { r: 128, g: 64, b: 32 })).toBe(1);
  });
  it('is commutative', () => {
    const a = { r: 255, g: 100, b: 0 };
    const b = { r: 0, g: 50, b: 200 };
    expect(contrastRatio(a, b)).toBeCloseTo(contrastRatio(b, a), 10);
  });
});

describe('channelSpread', () => {
  it('returns 0 for gray', () => expect(channelSpread({ r: 128, g: 128, b: 128 })).toBe(0));
  it('returns 255 for pure red', () => expect(channelSpread({ r: 255, g: 0, b: 0 })).toBe(255));
  it('returns correct spread for mixed color', () => expect(channelSpread({ r: 200, g: 100, b: 50 })).toBe(150));
});

describe('getRelatedHues', () => {
  it('complementary: adds 180°', () => expect(getRelatedHues(0, 'complementary')).toEqual([180]));
  it('complementary: wraps around 360°', () => expect(getRelatedHues(270, 'complementary')).toEqual([90]));
  it('complementary: 180 → 0 (not 360)', () => expect(getRelatedHues(180, 'complementary')).toEqual([0]));
  it('analogous: ±30° with wrap', () => expect(getRelatedHues(10, 'analogous')).toEqual([40, 340]));
  it('analogous: no wrap needed', () => expect(getRelatedHues(60, 'analogous')).toEqual([90, 30]));
  it('triadic: +120° and +240°', () => expect(getRelatedHues(0, 'triadic')).toEqual([120, 240]));
  it('triadic: wraps correctly', () => expect(getRelatedHues(120, 'triadic')).toEqual([240, 0]));
});

describe('luminanceWcag', () => {
  it('returns 0 for black', () => expect(luminanceWcag({ r: 0, g: 0, b: 0 })).toBe(0));
  it('returns 1 for white', () => expect(luminanceWcag({ r: 255, g: 255, b: 255 })).toBeCloseTo(1, 5));
  it('returns ~0.2126 for pure red (linearized)', () => {
    expect(luminanceWcag({ r: 255, g: 0, b: 0 })).toBeCloseTo(0.2126, 4);
  });
  it('returns ~0.7152 for pure green (linearized)', () => {
    expect(luminanceWcag({ r: 0, g: 255, b: 0 })).toBeCloseTo(0.7152, 4);
  });
  it('applies sRGB gamma correction (differs from simplified luminance for mid-tones)', () => {
    const mid = { r: 128, g: 0, b: 0 };
    expect(luminanceWcag(mid)).not.toBeCloseTo(luminance(mid), 2);
  });
});

describe('contrastRatioWcag', () => {
  it('returns 21 for black vs white', () => {
    expect(contrastRatioWcag({ r: 0, g: 0, b: 0 }, { r: 255, g: 255, b: 255 })).toBeCloseTo(21, 5);
  });
  it('returns 1 for identical colors', () => {
    const c = { r: 80, g: 120, b: 200 };
    expect(contrastRatioWcag(c, c)).toBeCloseTo(1, 10);
  });
  it('is commutative', () => {
    const a = { r: 50, g: 100, b: 150 };
    const b = { r: 200, g: 50, b: 30 };
    expect(contrastRatioWcag(a, b)).toBeCloseTo(contrastRatioWcag(b, a), 10);
  });
  it('passes AA body text: #595959 on white ≥ 4.5:1', () => {
    const ratio = contrastRatioWcag({ r: 89, g: 89, b: 89 }, { r: 255, g: 255, b: 255 });
    expect(ratio).toBeGreaterThanOrEqual(4.5);
  });
  it('fails AA body text: #aaaaaa on white < 4.5:1', () => {
    const ratio = contrastRatioWcag({ r: 170, g: 170, b: 170 }, { r: 255, g: 255, b: 255 });
    expect(ratio).toBeLessThan(4.5);
  });
});

describe('clamp', () => {
  it('returns value within range unchanged', () => expect(clamp(5, 0, 10)).toBe(5));
  it('clamps below minimum', () => expect(clamp(-5, 0, 10)).toBe(0));
  it('clamps above maximum', () => expect(clamp(15, 0, 10)).toBe(10));
  it('returns min when value equals min', () => expect(clamp(0, 0, 10)).toBe(0));
  it('returns max when value equals max', () => expect(clamp(10, 0, 10)).toBe(10));
});

describe('simulateDeuteranopia', () => {
  it('returns a valid 7-char hex string', () => {
    expect(simulateDeuteranopia('#FF0000')).toMatch(/^#[0-9a-f]{6}$/);
  });
  it('returns black for black input', () => {
    expect(simulateDeuteranopia('#000000')).toBe('#000000');
  });
  it('produces different output for red vs green (the point of the simulation)', () => {
    expect(simulateDeuteranopia('#FF0000')).not.toBe(simulateDeuteranopia('#00FF00'));
  });
  it('red and green appear more similar under deuteranopia than in normal vision', () => {
    const red = hexToRgb('#FF0000');
    const green = hexToRgb('#00FF00');
    const simRed = hexToRgb(simulateDeuteranopia('#FF0000'));
    const simGreen = hexToRgb(simulateDeuteranopia('#00FF00'));
    expect(colorDistance(simRed, simGreen)).toBeLessThan(colorDistance(red, green));
  });
});
