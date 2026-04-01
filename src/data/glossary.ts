import type { GlossaryTerm } from '../types/lesson.ts';

export const glossary: GlossaryTerm[] = [
  // ── Unit 1 ──────────────────────────────────────────────────────────────────
  {
    term: 'accent color',
    definition: 'A color used sparingly to draw attention to a specific element, such as a button or link. Works best when it contrasts clearly with surrounding surface and neutral colors.',
    relatedLessons: ['u1-l5', 'u2-l5'],
  },
  {
    term: 'analogous',
    definition: 'A color relationship where two or more hues sit adjacent to each other on the color wheel. Analogous palettes feel cohesive and harmonious because the colors share a common neighbor.',
    relatedLessons: ['u1-l6'],
  },
  {
    term: 'background',
    definition: 'The color or surface behind foreground content. High contrast between background and foreground text is essential for readability.',
    relatedLessons: ['u1-l3'],
  },
  {
    term: 'balance',
    definition: 'In a color palette, balance refers to distributing visual weight so no single color dominates unintentionally. A common starting point is one dominant neutral, one supporting color, and one accent.',
    relatedLessons: ['u1-l6'],
  },
  {
    term: 'complementary',
    definition: 'A color relationship where two hues sit opposite each other on the color wheel. Complementary pairs create strong visual contrast and are often used to make one color "pop" against the other.',
    relatedLessons: ['u1-l6'],
  },
  {
    term: 'contrast',
    definition: 'The difference in lightness, hue, or saturation between two colors placed together. Sufficient contrast between text and its background is a core accessibility requirement.',
    relatedLessons: ['u1-l3'],
  },
  {
    term: 'cool',
    definition: 'Colors on the blue-green side of the hue spectrum. Cool colors are commonly associated with calm, focus, and professionalism in interface design.',
    relatedLessons: ['u1-l4'],
  },
  {
    term: 'emphasis',
    definition: 'The use of color to make one element stand out from others on a page. Emphasis guides the viewer\'s eye toward the most important content.',
    relatedLessons: ['u1-l1'],
  },
  {
    term: 'focal point',
    definition: 'The single most prominent element on a screen, typically the primary action or key piece of information. Strong focal points rely on contrast and limited competition from other colored elements.',
    relatedLessons: ['u1-l5'],
  },
  {
    term: 'foreground',
    definition: 'Content placed on top of a background, most commonly text or icons. Foreground elements need sufficient contrast with the background to remain legible.',
    relatedLessons: ['u1-l3'],
  },
  {
    term: 'grouping',
    definition: 'The use of shared color to signal that elements belong together. Consistent color across related items helps users build a mental model of the interface.',
    relatedLessons: ['u1-l1'],
  },
  {
    term: 'harmony',
    definition: 'A quality of a color palette where the colors feel intentionally related rather than random. Harmony is often achieved through analogous, complementary, or triadic relationships.',
    relatedLessons: ['u1-l6'],
  },
  {
    term: 'hierarchy',
    definition: 'The visual ordering of elements by importance. In color terms, primary actions are usually the most visually prominent, secondary actions are quieter, and decorative elements do not compete for attention.',
    relatedLessons: ['u1-l5'],
  },
  {
    term: 'hue',
    definition: 'The pure color identity — what we mean when we say red, orange, blue, or green. Hue is one of the three axes of HSL and is measured as a degree on a 360° color wheel.',
    relatedLessons: ['u1-l2'],
  },
  {
    term: 'HEX',
    definition: 'A color format that encodes RGB channel values as a six-character base-16 string, e.g. #1E40AF. The first two characters are red, the middle two are green, and the last two are blue. Compact and widely used in CSS and design tools.',
    relatedLessons: ['u3-l2'],
  },
  {
    term: 'legibility',
    definition: 'The ease with which individual characters or glyphs can be distinguished. Legibility is affected by typeface choice but is also degraded by low contrast between text and background.',
    relatedLessons: ['u1-l3'],
  },
  {
    term: 'lightness',
    definition: 'How light or dark a color is, independent of its hue. In HSL, lightness runs from 0% (black) to 100% (white). Adjusting lightness is one of the fastest ways to create tints and shades from a single hue.',
    relatedLessons: ['u1-l2'],
  },
  {
    term: 'muted',
    definition: 'A color with reduced saturation. Muted colors feel calm and understated and are commonly used for body text, secondary labels, and placeholder content.',
    relatedLessons: ['u1-l2', 'u2-l6'],
  },
  {
    term: 'neutral',
    definition: 'A color with very low saturation — grays, off-whites, and near-blacks. Neutrals dominate most UI surfaces and allow higher-saturation accent colors to stand out.',
    relatedLessons: ['u1-l4', 'u2-l6'],
  },
  {
    term: 'palette',
    definition: 'A defined set of colors used consistently across a design. A controlled palette creates visual coherence and makes it easier to maintain contrast and hierarchy.',
    relatedLessons: ['u1-l6'],
  },
  {
    term: 'palette mood',
    definition: 'The emotional tone created by the combination of hues in a palette. Warm hues tend to feel energetic or urgent; cool hues tend to feel calm or reliable.',
    relatedLessons: ['u1-l4'],
  },
  {
    term: 'primary action',
    definition: 'The most important action available to a user on a given screen — typically a submit button or call-to-action. The primary action should be the most visually prominent interactive element.',
    relatedLessons: ['u1-l5'],
  },
  {
    term: 'readability',
    definition: 'The ease with which a block of text can be read. Readability depends on contrast, line length, typeface, and spacing. In color terms, sufficient contrast between text and background is the main factor.',
    relatedLessons: ['u1-l1', 'u1-l3'],
  },
  {
    term: 'saturation',
    definition: 'The intensity or purity of a color. Fully saturated colors are vivid and pure; fully desaturated colors are gray. In HSL, saturation is expressed as a percentage from 0% (gray) to 100% (fully vivid).',
    relatedLessons: ['u1-l2'],
  },
  {
    term: 'secondary action',
    definition: 'An action that is available but less important than the primary action. Secondary actions are typically styled to be less visually prominent — lower contrast, outlined, or muted.',
    relatedLessons: ['u1-l5'],
  },
  {
    term: 'shade',
    definition: 'A darker version of a hue, created by adding black or decreasing lightness. Shades are used for hover states, pressed states, and text that needs to feel grounded.',
    relatedLessons: ['u1-l2'],
  },
  {
    term: 'status color',
    definition: 'A color assigned to communicate a system state — typically green for success, red for error, yellow for warning, and blue for information. Status colors rely on meaning, so they must not be the only indicator used.',
    relatedLessons: ['u1-l1'],
  },
  {
    term: 'tint',
    definition: 'A lighter version of a hue, created by adding white or increasing lightness. Tints are often used for backgrounds, hover highlights, and subtle fills.',
    relatedLessons: ['u1-l2'],
  },
  {
    term: 'triadic',
    definition: 'A color relationship where three hues are evenly spaced around the color wheel (120° apart). Triadic palettes are vibrant and offer strong contrast if one hue dominates and the other two are used sparingly.',
    relatedLessons: ['u1-l6'],
  },
  {
    term: 'value',
    definition: 'The lightness or darkness of a color, equivalent to lightness in HSL. High-value colors appear lighter; low-value colors appear darker.',
    relatedLessons: ['u1-l2'],
  },
  {
    term: 'visual cue',
    definition: 'Any design element that communicates meaning without words. Color is one of the most common visual cues — used for states, actions, categories, and emphasis.',
    relatedLessons: ['u1-l1'],
  },
  {
    term: 'vivid',
    definition: 'A color with high saturation, appearing pure and intense. Vivid colors attract attention and are best used for accents, calls-to-action, and status indicators rather than large surfaces.',
    relatedLessons: ['u1-l2', 'u2-l6'],
  },
  {
    term: 'warm',
    definition: 'Colors on the red-orange-yellow side of the hue spectrum. Warm colors are commonly associated with energy, urgency, and enthusiasm in interface design.',
    relatedLessons: ['u1-l4'],
  },

  // ── Unit 2 ──────────────────────────────────────────────────────────────────
  {
    term: 'absorption',
    definition: 'The process by which a material takes in certain wavelengths of light rather than reflecting them. Pigments produce color through selective absorption — a red pigment absorbs most wavelengths and reflects only red.',
    relatedLessons: ['u2-l4'],
  },
  {
    term: 'additive color',
    definition: 'A color model where colors are created by combining light. Adding all three primaries (red, green, blue) at full intensity produces white. Used by screens, projectors, and any light-emitting display.',
    relatedLessons: ['u2-l1'],
  },
  {
    term: 'additive primary',
    definition: 'One of the three base colors in the additive model: red, green, and blue. Each primary corresponds to one channel of the RGB color model.',
    relatedLessons: ['u2-l2'],
  },
  {
    term: 'blue channel',
    definition: 'The blue component of an RGB color, ranging from 0 to 255. A high blue channel value shifts the color toward blue or cyan; lowering it removes blue from the mix.',
    relatedLessons: ['u2-l2'],
  },
  {
    term: 'channel',
    definition: 'One of the three independent color components in the RGB model: red, green, and blue. Each channel is a number from 0 to 255, and the combination of all three channels produces a specific color.',
    relatedLessons: ['u3-l2'],
  },
  {
    term: 'channel intensity',
    definition: 'The strength of a single color channel in an RGB value, expressed as a number from 0 (off) to 255 (full). Combining three channel intensities produces a specific screen color.',
    relatedLessons: ['u2-l2'],
  },
  {
    term: 'color gamut',
    definition: 'The full range of colors a device or medium can reproduce. Screens generally have a wider gamut than print, which means some screen colors cannot be accurately reproduced in ink.',
    relatedLessons: ['u2-l4'],
  },
  {
    term: 'dark interface',
    definition: 'A UI in which the primary surface is near-black or very dark. On dark interfaces, even mid-level saturation colors can appear vivid because the dark background amplifies perceived brightness.',
    relatedLessons: ['u2-l5'],
  },
  {
    term: 'green channel',
    definition: 'The green component of an RGB color, ranging from 0 to 255. Green is the channel the human eye is most sensitive to, so high green channel values have a strong impact on perceived brightness.',
    relatedLessons: ['u2-l2'],
  },
  {
    term: 'luminous color',
    definition: 'Color produced by emitted light rather than reflected light. Screen colors are luminous — they glow from within — which is why they can appear more vivid than pigment-based equivalents.',
    relatedLessons: ['u2-l5'],
  },
  {
    term: 'mental model',
    definition: 'An internal framework a person uses to understand how something works. In color design, many beginners apply a paint-based mental model to screens, which leads to incorrect expectations about how colors mix.',
    relatedLessons: ['u2-l3'],
  },
  {
    term: 'paint logic',
    definition: 'The intuitive but incorrect assumption that screen colors mix like paints or pigments. In paint, mixing colors produces darker results (subtractive). On screens, adding colors produces lighter results (additive).',
    relatedLessons: ['u2-l3'],
  },
  {
    term: 'palette balance',
    definition: 'The intentional distribution of neutrals, supporting colors, and accent colors in a UI palette. A common approach is to use a large neutral base, a moderate supporting color, and a small amount of accent.',
    relatedLessons: ['u2-l6'],
  },
  {
    term: 'pigment',
    definition: 'A physical substance that produces color by absorbing certain wavelengths of light. Pigments are used in paints, inks, and dyes. Unlike screen colors, pigment-based color depends on the light source illuminating the surface.',
    relatedLessons: ['u2-l1'],
  },
  {
    term: 'pixel',
    definition: 'The smallest addressable unit of a screen display. Each pixel contains sub-elements that emit red, green, and blue light independently, allowing any screen color to be produced at that point.',
    relatedLessons: ['u2-l5'],
  },
  {
    term: 'red channel',
    definition: 'The red component of an RGB color, ranging from 0 to 255. A high red channel value shifts the color toward red or orange; lowering it removes red from the mix.',
    relatedLessons: ['u2-l2'],
  },
  {
    term: 'reflection',
    definition: 'The process by which a surface bounces certain wavelengths of light back toward the viewer. The wavelengths reflected determine the color the eye perceives.',
    relatedLessons: ['u2-l4'],
  },
  {
    term: 'RGBA',
    definition: 'An extension of RGB that adds a fourth value for the alpha (opacity) channel, e.g. rgba(30, 64, 175, 0.5). The alpha value ranges from 0 (fully transparent) to 1 (fully opaque).',
    relatedLessons: ['u3-l2'],
  },
  {
    term: 'RGB',
    definition: 'A color model that describes colors using three channels: Red, Green, and Blue, each ranging from 0 to 255. RGB is the native model for screens and is the basis for HEX and HSL color notation.',
    relatedLessons: ['u2-l1', 'u2-l2'],
  },
  {
    term: 'screen logic',
    definition: 'The correct mental model for how screen colors behave: adding light makes colors lighter, and combining all three RGB primaries at full intensity produces white. Opposite of paint logic.',
    relatedLessons: ['u2-l3'],
  },
  {
    term: 'screen-first decision',
    definition: 'A color choice made with screen rendering as the primary context. Screen-first thinking considers how colors will look on backlit displays rather than assuming print or physical material behavior.',
    relatedLessons: ['u2-l6'],
  },
  {
    term: 'shorthand HEX',
    definition: 'A three-character HEX notation valid when each pair in the six-character form is a repeated digit, e.g. #ABC expands to #AABBCC. Not applicable when any pair has two different digits.',
    relatedLessons: ['u3-l2'],
  },
  {
    term: 'subtractive color',
    definition: 'A color model where colors are created by subtracting (absorbing) wavelengths from reflected light. Mixing all subtractive primaries produces black. Used by pigments, inks, and physical materials.',
    relatedLessons: ['u2-l1'],
  },
  {
    term: 'subtractive primary',
    definition: 'One of the base colors in the subtractive model: cyan, magenta, and yellow (CMY). In print, these inks are combined to reproduce a wide range of colors by absorbing different wavelengths.',
    relatedLessons: ['u2-l4'],
  },
  {
    term: 'surface color',
    definition: 'The color used for the main background or container areas of a UI. Surface colors are usually low-saturation neutrals that let foreground content and accent colors stand out.',
    relatedLessons: ['u2-l6'],
  },

  // ── Unit 3 ──────────────────────────────────────────────────────────────────
  {
    term: 'color format',
    definition: 'A specific syntax for expressing a color as a value in code. Common formats include HEX (#rrggbb), RGB (rgb(r, g, b)), and HSL (hsl(h, s%, l%)). All three can describe the same color.',
    relatedLessons: ['u3-l1'],
  },
  {
    term: 'color value',
    definition: 'A precise, unambiguous specification of a color as used in code or design files. Color values ensure that the same color is reproduced exactly across different tools, screens, and developers.',
    relatedLessons: ['u3-l1'],
  },
  {
    term: 'implementation',
    definition: 'The act of writing working code that applies a design decision. In color terms, implementation means translating a design color into a format (HEX, RGB, HSL) that can be used in CSS, SVG, or other code.',
    relatedLessons: ['u3-l1'],
  },
  {
    term: 'token',
    definition: 'A named variable that stores a color value (or other design property) and can be referenced by name in code. Tokens separate the meaning of a color (e.g. "brand-primary") from its raw value (e.g. #2563eb).',
    relatedLessons: ['u3-l1'],
  },
];
