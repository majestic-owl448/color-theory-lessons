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

  // ── Unit 3 continued (L3–L7) ──────────────────────────────────────────────
  {
    term: 'HSL',
    definition: 'A color format that describes a color as hue (0–360°), saturation (0–100%), and lightness (0–100%). HSL maps directly to how designers describe visible changes and is often easier than RGB for tasks like muting or lightening a color.',
    relatedLessons: ['u3-l3'],
  },
  {
    term: 'HSLA',
    definition: 'HSL with an added alpha channel (0–1) controlling transparency. hsla(220, 60%, 50%, 0.5) is a blue at 50% opacity. Works the same way as RGBA but uses the HSL model.',
    relatedLessons: ['u3-l3'],
  },
  {
    term: 'alpha',
    definition: 'A value from 0 (fully transparent) to 1 (fully opaque) that controls how much of a color is visible versus how much the background shows through. Used in RGBA and HSLA color formats.',
    relatedLessons: ['u3-l3', 'u3-l4'],
  },
  {
    term: 'color family',
    definition: 'A group of colors that share the same hue but vary in saturation and lightness. For example, navy, sky blue, and baby blue all belong to the blue color family.',
    relatedLessons: ['u3-l3'],
  },
  {
    term: 'tonal variation',
    definition: 'A lighter, darker, more vivid, or more muted version of the same base color. Created by adjusting saturation and lightness while keeping the hue constant.',
    relatedLessons: ['u3-l3'],
  },
  {
    term: 'opacity',
    definition: 'How opaque a color or layer is. Full opacity (1) blocks everything behind it. Lower opacity lets the background show through. Controlled by the alpha channel in RGBA and HSLA.',
    relatedLessons: ['u3-l4'],
  },
  {
    term: 'transparency',
    definition: 'The opposite of opacity. A transparent layer lets the background show through. In CSS, transparency is controlled by the alpha channel or the opacity property.',
    relatedLessons: ['u3-l4'],
  },
  {
    term: 'overlay',
    definition: 'A semi-transparent layer placed over other content. Used for hover states, modal backdrops, image text areas, and disabled states. The perceived color depends on both the overlay and the background.',
    relatedLessons: ['u3-l4'],
  },
  {
    term: 'scrim',
    definition: 'A semi-transparent overlay — usually dark — placed behind a modal or dialog to dim the background content and focus user attention on the foreground.',
    relatedLessons: ['u3-l4'],
  },
  {
    term: 'blend perception',
    definition: 'The way a semi-transparent color appears to the eye as a mix of the foreground and the background. The same overlay can look very different on light vs dark backgrounds because the blended result changes.',
    relatedLessons: ['u3-l4'],
  },
  {
    term: 'layered interface',
    definition: 'An interface design that uses stacked visual layers — such as page background, card surface, overlay, and modal — often relying on transparency and depth cues to create spatial hierarchy.',
    relatedLessons: ['u3-l4'],
  },
  {
    term: 'gradient',
    definition: 'A smooth transition between two or more colors. In CSS, gradients can be linear (direction-based) or radial (center-outward). Used for backgrounds, hero sections, and data visualization.',
    relatedLessons: ['u3-l5'],
  },
  {
    term: 'linear gradient',
    definition: 'A gradient that transitions along a straight line — for example, from left to right or from top to bottom. Defined in CSS as linear-gradient(direction, color1, color2).',
    relatedLessons: ['u3-l5'],
  },
  {
    term: 'radial gradient',
    definition: 'A gradient that transitions outward from a center point in a circular or elliptical pattern. Defined in CSS as radial-gradient(shape, color1, color2).',
    relatedLessons: ['u3-l5'],
  },
  {
    term: 'border color',
    definition: 'The color applied to the border of an interface element such as a card, input field, or button. Border colors help define edges, separate regions, and indicate states like focus or error.',
    relatedLessons: ['u3-l5'],
  },
  {
    term: 'text color',
    definition: 'The color applied to text content. Effective text color depends on sufficient contrast against the background to ensure readability.',
    relatedLessons: ['u3-l5'],
  },
  {
    term: 'semantic color',
    definition: 'A color assigned to a specific meaning or role in an interface — such as red for errors, green for success, or yellow for warnings. Semantic colors communicate status, not just style.',
    relatedLessons: ['u3-l5'],
  },
  {
    term: 'theme',
    definition: 'A coordinated set of color role assignments that can be applied across a product. Switching themes (e.g. light to dark) means reassigning the values behind the roles, not rewriting every component.',
    relatedLessons: ['u3-l5'],
  },
  {
    term: 'design token',
    definition: 'A named variable in a design system that stores a specific value — often a color — and can be referenced by name across components. Tokens separate meaning from raw values, making updates and theming easier.',
    relatedLessons: ['u3-l6'],
  },
  {
    term: 'variable',
    definition: 'A named container that holds a value, such as a CSS custom property (--color-primary: #2563eb). Variables allow the same value to be reused and updated from a single location.',
    relatedLessons: ['u3-l6'],
  },
  {
    term: 'alias token',
    definition: 'A token that points to a base palette value, such as --blue-600: #1E40AF. Alias tokens name palette steps without assigning interface meaning.',
    relatedLessons: ['u3-l6'],
  },
  {
    term: 'role token',
    definition: 'A token that assigns interface meaning to a color, such as --color-action-primary: var(--blue-600). Role tokens describe usage, not appearance, and stay meaningful across themes.',
    relatedLessons: ['u3-l6'],
  },
  {
    term: 'theme propagation',
    definition: 'The automatic updating of all interface elements when a base or alias token value changes. Because role tokens reference aliases, one base change can cascade to every component in the system.',
    relatedLessons: ['u3-l6'],
  },
  {
    term: 'sRGB',
    definition: 'The standard color space for most web and screen work. sRGB defines the range of colors that virtually all displays can reproduce and is the default for CSS color functions.',
    relatedLessons: ['u3-l7'],
  },
  {
    term: 'Display P3',
    definition: 'A wider color space available on many modern screens (especially Apple devices) that can represent more vivid colors than sRGB. Colors outside sRGB may be clipped on devices that do not support P3.',
    relatedLessons: ['u3-l7'],
  },
  {
    term: 'color space',
    definition: 'A defined range of colors that a system can represent. sRGB and Display P3 are two common color spaces for digital design. Wider spaces can represent more vivid colors but may not be universally supported.',
    relatedLessons: ['u3-l7'],
  },
  {
    term: 'Canvas',
    definition: 'An HTML element that provides a drawing surface for graphics rendered via JavaScript. Canvas uses explicit color values for fills and strokes and is commonly used for charts, games, and custom visualizations.',
    relatedLessons: ['u3-l7'],
  },
  {
    term: 'SVG',
    definition: 'Scalable Vector Graphics — an XML-based format for vector images in the browser. SVG elements use fill and stroke attributes with color values in HEX, RGB, HSL, or named colors.',
    relatedLessons: ['u3-l7'],
  },
  {
    term: 'WebGL',
    definition: 'A JavaScript API for rendering 3D and 2D graphics in the browser. WebGL uses explicit color values for surfaces, lights, and materials. Color decisions in WebGL still need accessibility consideration.',
    relatedLessons: ['u3-l7'],
  },
  {
    term: 'contrast checker',
    definition: 'A tool that calculates the contrast ratio between a foreground and background color and reports whether the pair meets WCAG accessibility thresholds. Essential for verifying readability.',
    relatedLessons: ['u3-l7'],
  },
  // ── Unit 4 ──────────────────────────────────────────────────────────────────
  {
    term: 'color perception',
    definition: 'The process by which the human eye and brain convert light signals into the experience of color. Perception is constructed by the visual system and varies between individuals.',
    relatedLessons: ['u4-l1'],
  },
  {
    term: 'color vision',
    definition: 'The ability to distinguish colors. Depends on functioning cone cells in the retina and correct processing in the visual cortex.',
    relatedLessons: ['u4-l1'],
  },
  {
    term: 'cone',
    definition: 'A type of photoreceptor cell in the retina that is sensitive to color. Humans typically have three cone types, each most responsive to a different range of wavelengths.',
    relatedLessons: ['u4-l1'],
  },
  {
    term: 'rod',
    definition: 'A photoreceptor cell in the retina that is more sensitive to low light than to color. Rods are concentrated toward the edges of the retina and are less relevant to everyday color design.',
    relatedLessons: ['u4-l1'],
  },
  {
    term: 'retina',
    definition: 'The light-sensitive layer at the back of the eye that contains rods and cones. The retina converts incoming light into electrical signals sent to the brain.',
    relatedLessons: ['u4-l1'],
  },
  {
    term: 'optic nerve',
    definition: 'The nerve that carries visual signals from the retina to the brain for interpretation.',
    relatedLessons: ['u4-l1'],
  },
  {
    term: 'simultaneous contrast',
    definition: 'A perceptual effect where the same color appears different depending on its surrounding colors. A neutral gray looks warmer on a cool background and cooler on a warm one. This means color decisions must be tested in real layouts, not isolated swatches.',
    relatedLessons: ['u4-l1', 'u6-l6'],
  },
  {
    term: 'visual system',
    definition: 'The network of eye, optic nerve, and brain regions that together process incoming light and construct the experience of vision, including color.',
    relatedLessons: ['u4-l1'],
  },
  {
    term: 'color vision deficiency',
    definition: 'A condition in which certain color distinctions are harder or impossible to perceive, due to differences in cone function. Not a single condition — includes multiple types and severities.',
    relatedLessons: ['u4-l2'],
  },
  {
    term: 'protanopia',
    definition: 'A form of CVD with absent red-sensitive cone function. Reds appear very dark and red-green distinctions are severely weakened.',
    relatedLessons: ['u4-l2'],
  },
  {
    term: 'protanomaly',
    definition: 'A form of CVD with reduced red cone sensitivity. Milder than protanopia, but red-green distinctions are still weakened.',
    relatedLessons: ['u4-l2'],
  },
  {
    term: 'deuteranopia',
    definition: 'A form of CVD with absent green-sensitive cone function. Red-green distinctions are severely weakened.',
    relatedLessons: ['u4-l2'],
  },
  {
    term: 'deuteranomaly',
    definition: 'The most common form of CVD. Reduced green cone sensitivity weakens red-green distinctions.',
    relatedLessons: ['u4-l2'],
  },
  {
    term: 'tritanopia',
    definition: 'A form of CVD affecting blue-sensitive cones. Blue and yellow distinctions are weakened.',
    relatedLessons: ['u4-l2'],
  },
  {
    term: 'tritanomaly',
    definition: 'A rare form of CVD with reduced blue cone sensitivity. Blue-yellow distinctions are mildly weakened.',
    relatedLessons: ['u4-l2'],
  },
  {
    term: 'achromatopsia',
    definition: 'A rare condition with very limited or absent cone function. Only brightness is perceived — hues appear as shades of gray.',
    relatedLessons: ['u4-l2'],
  },
  {
    term: 'simulation',
    definition: 'A visual filter or transformation that approximates how a CVD viewer might perceive an interface. Useful for quick design review, though not a perfect replacement for user testing.',
    relatedLessons: ['u4-l2'],
  },
  {
    term: 'protan',
    definition: 'Referring to the protan category of CVD (protanopia and protanomaly), affecting red-sensitive cones.',
    relatedLessons: ['u4-l3'],
  },
  {
    term: 'deutan',
    definition: 'Referring to the deutan category of CVD (deuteranopia and deuteranomaly), affecting green-sensitive cones.',
    relatedLessons: ['u4-l3'],
  },
  {
    term: 'tritan',
    definition: 'Referring to the tritan category of CVD (tritanopia and tritanomaly), affecting blue-sensitive cones.',
    relatedLessons: ['u4-l3'],
  },
  {
    term: 'backup cue',
    definition: 'A secondary visual signal — such as an icon, label, pattern, or shape — that carries the same meaning as a color change, so meaning survives if color is hard to perceive.',
    relatedLessons: ['u4-l3'],
  },
  {
    term: 'redundancy',
    definition: 'In inclusive design, providing meaning through more than one visual channel so that losing any one channel does not break the design.',
    relatedLessons: ['u4-l3'],
  },
  {
    term: 'chart key',
    definition: 'A legend that maps symbols, colors, or patterns to data categories in a chart or graph.',
    relatedLessons: ['u4-l4'],
  },
  {
    term: 'legend',
    definition: 'A key that explains the visual encoding of a chart or map. A color-only legend is fragile; adding patterns or direct labels makes it more robust.',
    relatedLessons: ['u4-l4'],
  },
  {
    term: 'icon',
    definition: 'A small visual symbol used to reinforce meaning. Icons are valuable backup cues because they carry semantic meaning independently of color.',
    relatedLessons: ['u4-l4'],
  },
  {
    term: 'label',
    definition: 'A text string attached to an interface element that explains its state, category, or value. Labels provide a non-color channel of information.',
    relatedLessons: ['u4-l4'],
  },
  {
    term: 'pattern',
    definition: 'A repeating visual texture or fill used to differentiate areas or series without relying solely on hue. Useful in charts and maps for CVD robustness.',
    relatedLessons: ['u4-l4'],
  },
  {
    term: 'selected state',
    definition: 'The visual treatment indicating an interface element is currently chosen or active. Relying only on color for selected state is a common design problem.',
    relatedLessons: ['u4-l4'],
  },
  {
    term: 'semantic state',
    definition: 'A named state with a conventional meaning in an interface — such as success, warning, error, or info — typically associated with a color but ideally reinforced with icons and text.',
    relatedLessons: ['u4-l4'],
  },
  {
    term: 'use of color',
    definition: 'WCAG 1.4.1 — a principle that color must not be the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.',
    relatedLessons: ['u4-l4'],
  },
  {
    term: 'annotation',
    definition: 'A text or symbol note added directly to a chart or diagram to label data points without requiring the viewer to cross-reference a separate legend.',
    relatedLessons: ['u4-l5'],
  },
  {
    term: 'chart series',
    definition: 'A single data set in a multi-series chart. Series are typically differentiated by color, but robust charts also use patterns, direct labels, or different line styles.',
    relatedLessons: ['u4-l5'],
  },
  {
    term: 'direct label',
    definition: 'A label placed adjacent to a data line or bar, eliminating the need for a separate legend. Direct labels are more readable and more CVD-robust than color-coded legends.',
    relatedLessons: ['u4-l5'],
  },
  {
    term: 'error state',
    definition: 'A UI state indicating that an action failed or a field contains invalid input. Should be communicated through color + icon + text, not color alone.',
    relatedLessons: ['u4-l5'],
  },
  {
    term: 'info state',
    definition: 'A UI state conveying neutral informational context. Should use icon + color, not color alone.',
    relatedLessons: ['u4-l5'],
  },
  {
    term: 'pattern fill',
    definition: 'A repeating texture or hatch pattern applied to a chart bar, area, or region to make it distinguishable from adjacent elements without relying solely on hue.',
    relatedLessons: ['u4-l5'],
  },
  {
    term: 'success state',
    definition: 'A UI state confirming that an action completed correctly. Should include a success icon and confirmation text, not just a green color change.',
    relatedLessons: ['u4-l5'],
  },
  {
    term: 'validation feedback',
    definition: 'Visual and textual messages that inform users whether their input is valid or what correction is needed. Effective feedback combines border state, icon, and a clear error message.',
    relatedLessons: ['u4-l5'],
  },
  {
    term: 'warning state',
    definition: 'A UI state alerting the user to a potential problem that has not yet caused failure. Should use a warning icon and text alongside a color indicator.',
    relatedLessons: ['u4-l5'],
  },
  {
    term: 'approximation',
    definition: 'In the context of CVD simulation, a computed transformation of colors that resembles what a CVD viewer might see. Useful but not identical to actual human perception.',
    relatedLessons: ['u4-l6'],
  },
  {
    term: 'inclusive design',
    definition: 'An approach to design that proactively considers a wide range of human abilities and situations, rather than designing for an assumed default user.',
    relatedLessons: ['u4-l6'],
  },
  {
    term: 'review pass',
    definition: 'A structured inspection of a design artifact against a specific set of criteria — such as color robustness, contrast, or label coverage.',
    relatedLessons: ['u4-l6'],
  },
  {
    term: 'robustness',
    definition: 'The quality of a design that remains usable and understandable across a wide range of conditions and user differences.',
    relatedLessons: ['u4-l6'],
  },
  {
    term: 'task check',
    definition: 'A method of reviewing an interface by asking whether a user can complete a specific task, rather than asking only whether visual elements look correct.',
    relatedLessons: ['u4-l6'],
  },
  {
    term: 'user test',
    definition: 'A method of evaluating a design by observing real users attempting to complete tasks. More accurate than simulation alone for assessing CVD robustness.',
    relatedLessons: ['u4-l6'],
  },
  {
    term: 'workflow',
    definition: 'A repeatable sequence of steps used to accomplish a design task. In inclusive design, a workflow for color review includes simulation, task-checking, and redundant cue verification.',
    relatedLessons: ['u4-l6'],
  },

  // ── Unit 5 ──────────────────────────────────────────────────────────────────
  {
    term: 'accessibility',
    definition: 'The practice of designing digital products so they can be used by people with a range of abilities, including those with low vision, color vision deficiency, motor differences, and cognitive differences.',
    relatedLessons: ['u5-l1'],
  },
  {
    term: 'alert',
    definition: 'A UI pattern that delivers time-sensitive or important information, such as a success confirmation, warning notice, or error message. Should combine color, icon, and structured text.',
    relatedLessons: ['u5-l6'],
  },
  {
    term: 'audit',
    definition: 'A structured review of a design artifact against a defined set of accessibility or quality criteria. A color audit typically checks contrast, color-only patterns, and component visibility.',
    relatedLessons: ['u5-l5'],
  },
  {
    term: 'boundary',
    definition: 'The edge or border of a UI component that defines its visible extent and helps users identify it as interactive. A low-contrast boundary makes a control harder to locate.',
    relatedLessons: ['u5-l3'],
  },
  {
    term: 'chart palette',
    definition: 'A set of colors chosen for a data visualization. Accessible chart palettes maintain distinguishability under CVD simulation, use sufficient contrast between adjacent series, and are supplemented by direct labels or patterns.',
    relatedLessons: ['u5-l6'],
  },
  {
    term: 'checker',
    definition: 'A tool that evaluates color pairs for contrast ratio. A checker provides data but not judgment — the designer must still decide how to apply the results.',
    relatedLessons: ['u5-l5'],
  },
  {
    term: 'color-only meaning',
    definition: 'A design pattern where information is communicated exclusively through color, with no supporting label, icon, shape, or text. A failure mode under WCAG 1.4.1.',
    relatedLessons: ['u5-l1'],
  },
  {
    term: 'context',
    definition: 'The actual use condition of a color pair — the surrounding colors, element size, font weight, and user context. Color decisions made without context may pass a checker but fail in practice.',
    relatedLessons: ['u5-l5'],
  },
  {
    term: 'contrast ratio',
    definition: 'A number from 1:1 (no contrast) to 21:1 (maximum contrast) expressing the luminance difference between two colors. Used to evaluate color pair accessibility.',
    relatedLessons: ['u5-l2'],
  },
  {
    term: 'luminance',
    definition: 'The relative brightness of a color as perceived by the human eye, calculated from its RGB values. Contrast ratio is based on the luminance difference between two colors, not their hue difference.',
    relatedLessons: ['u5-l1', 'u5-l2'],
  },
  {
    term: 'dashboard',
    definition: 'A screen layout that presents multiple data summaries, often using charts, indicators, and status panels. Dashboards often contain multiple accessibility risks including color-only charts and low-contrast small labels.',
    relatedLessons: ['u5-l6'],
  },
  {
    term: 'fail',
    definition: 'A contrast pair that falls below the target ratio. A failing pair may cause readability or usability problems for users with low vision or CVD.',
    relatedLessons: ['u5-l2'],
  },
  {
    term: 'focus indicator',
    definition: 'A visible outline or highlight that shows which interactive element is currently focused during keyboard navigation. Must be clearly visible to support keyboard accessibility.',
    relatedLessons: ['u5-l3'],
  },
  {
    term: 'form validation',
    definition: 'The process and visual design of informing users whether their form input meets requirements, and providing clear guidance for correction. Accessible validation combines color, icon, and text.',
    relatedLessons: ['u5-l6'],
  },
  {
    term: 'graphical object',
    definition: 'A visual element — icon, chart mark, or meaningful image — that conveys information not conveyed in text. Graphical objects need sufficient contrast when they carry essential meaning.',
    relatedLessons: ['u5-l3'],
  },
  {
    term: 'icon contrast',
    definition: 'The contrast between a meaningful icon and its background. Icons that communicate important information — such as a warning or a download action — need sufficient contrast to be reliably identified.',
    relatedLessons: ['u5-l3'],
  },
  {
    term: 'inline error',
    definition: 'An error message displayed adjacent to the specific form field where the error occurred, rather than in a general banner. Should include icon, field reference, and actionable description.',
    relatedLessons: ['u5-l6'],
  },
  {
    term: 'large text',
    definition: 'Text at 18pt or above in regular weight, or 14pt and above in bold weight. Large text can meet a lower contrast threshold of 3:1 because its size supports legibility.',
    relatedLessons: ['u5-l2'],
  },
  {
    term: 'link distinction',
    definition: 'The visual difference between a hyperlink and surrounding non-link text. Links in body text should be identified by underline or another non-color cue to avoid color-only identification.',
    relatedLessons: ['u5-l6'],
  },
  {
    term: 'non-text contrast',
    definition: 'The contrast requirement for user interface components and graphical objects that are not text — such as input borders, icons, focus rings, and chart marks. The practical target is 3:1 against adjacent colors.',
    relatedLessons: ['u5-l3'],
  },
  {
    term: 'normal text',
    definition: 'Body-sized text — typically under 18pt regular weight or under 14pt bold — which requires a minimum contrast ratio of 4.5:1 in typical accessibility guidance.',
    relatedLessons: ['u5-l2'],
  },
  {
    term: 'notification',
    definition: 'A message that informs the user of a relevant event or change, such as a new message, task completion, or system update. Should be identifiable beyond background color alone.',
    relatedLessons: ['u5-l6'],
  },
  {
    term: 'outline',
    definition: 'A visual stroke around an element. Used as a focus indicator, active state, or input border. Outlines need sufficient contrast to be seen reliably.',
    relatedLessons: ['u5-l3'],
  },
  {
    term: 'pass',
    definition: 'A contrast pair that meets or exceeds the target ratio for its use case. A passing pair is reliably readable or identifiable for most users.',
    relatedLessons: ['u5-l2'],
  },
  {
    term: 'pattern library',
    definition: 'A shared collection of reusable, defined interface patterns with specified visual rules. Accessible pattern libraries embed contrast and redundancy rules into each component definition, scaling accessibility across an entire product.',
    relatedLessons: ['u5-l6'],
  },
  {
    term: 'priority element',
    definition: 'An interface element that users depend on to complete a task, such as a heading, body text, button, input, status indicator, or chart mark. Priority elements should be audited first.',
    relatedLessons: ['u5-l5'],
  },
  {
    term: 'redundant cue',
    definition: 'A design approach in which the same meaning is communicated through two or more channels — color plus icon, plus label, plus shape — so that the meaning survives if any one channel is unavailable.',
    relatedLessons: ['u5-l4'],
  },
  {
    term: 'state indicator',
    definition: 'A visual element that communicates the current condition of an interface element or system, such as active, disabled, error, or success. Should not rely on color alone.',
    relatedLessons: ['u5-l1'],
  },
  {
    term: 'state visibility',
    definition: 'The clarity with which different states of a component — default, hover, active, focus, error, success — are visually distinguishable from one another.',
    relatedLessons: ['u5-l3'],
  },
  {
    term: 'status message',
    definition: 'A short text that communicates the outcome of an action or the current state of a system. A status message is more robust than a color-only indicator.',
    relatedLessons: ['u5-l4'],
  },
  {
    term: 'text contrast',
    definition: 'The measured luminance difference between text and its background, expressed as a ratio. Determines readability for a given text size and weight.',
    relatedLessons: ['u5-l2'],
  },
  {
    term: 'user interface component',
    definition: 'An interactive control in a digital interface, such as a button, input, checkbox, toggle, or dropdown. Components need sufficient contrast between their boundaries and adjacent backgrounds.',
    relatedLessons: ['u5-l3'],
  },
  {
    term: 'usability',
    definition: 'The quality of a design that makes it easy and reliable for people to complete tasks. Accessibility failures are usability failures.',
    relatedLessons: ['u5-l1'],
  },
  {
    term: 'validation state',
    definition: 'The visual treatment applied to a form field or input to indicate whether the value meets requirements. Should include color, icon, and text message — not color alone.',
    relatedLessons: ['u5-l4'],
  },
  {
    term: 'verification',
    definition: 'The step in an audit workflow where the designer confirms that a repair actually solves the problem — not just that the ratio passes, but that the design communicates clearly in context.',
    relatedLessons: ['u5-l5'],
  },
  {
    term: 'visual affordance',
    definition: 'A visual property that suggests how an interface element can be used — such as a button shape suggesting it is clickable. Weak visual affordances make interfaces harder to use.',
    relatedLessons: ['u5-l1'],
  },
  // Unit 6 terms
  {
    term: 'accent overuse',
    definition: 'Applying an accent color to too many elements so that it loses its ability to signal importance or draw attention. When everything is accented, nothing stands out.',
    relatedLessons: ['u6-l3'],
  },
  {
    term: 'brand color',
    definition: 'A color defined by brand guidelines as representing an organization\'s visual identity. In product design, the brand color must be adapted to serve both brand and functional requirements.',
    relatedLessons: ['u6-l3'],
  },
  {
    term: 'categorical palette',
    definition: 'A set of distinct hues used to represent unordered groups in data visualizations. Categorical palettes encode identity, not quantity.',
    relatedLessons: ['u6-l5'],
  },
  {
    term: 'chart contrast',
    definition: 'The degree to which chart series are visually distinguishable from each other and from the chart background. Adequate chart contrast is necessary for accessibility under both normal and CVD conditions.',
    relatedLessons: ['u6-l5'],
  },
  // ── Unit 6 ──────────────────────────────────────────────────────────────────
  {
    term: 'color system',
    definition: 'A structured approach to color usage in a product, assigning colors to named roles with defined purposes. A color system promotes consistency and makes design decisions scalable.',
    relatedLessons: ['u6-l1'],
  },
  {
    term: 'component state',
    definition: 'A distinct visual condition of a UI component, such as default, hover, active, focused, or disabled. Each state must be visually distinguishable using color and non-color cues.',
    relatedLessons: ['u6-l2'],
  },
  {
    term: 'consistency',
    definition: 'The property of using the same visual treatment for the same element or role throughout a product. Color consistency builds user trust and makes interfaces predictable.',
    relatedLessons: ['u6-l1'],
  },
  {
    term: 'consistency audit',
    definition: 'A review process that checks whether a color role is applied uniformly across all screens and components, identifying instances where the same role uses different values.',
    relatedLessons: ['u6-l6'],
  },
  {
    term: 'context effect',
    definition: 'A perceptual phenomenon where the same color appears different depending on its surrounding colors. Context effect means hex values alone do not determine perceived color.',
    relatedLessons: ['u6-l6'],
  },
  {
    term: 'dark mode',
    definition: 'An interface theme that uses dark backgrounds and lighter foreground colors, reducing luminance in dim environments. Dark mode requires deliberate color role adaptation, not simple value inversion.',
    relatedLessons: ['u6-l4'],
  },
  {
    term: 'data emphasis',
    definition: 'Highlighting a specific data point or series in a chart using a more vivid or contrasting color while reducing visual weight of the others, to guide viewer attention.',
    relatedLessons: ['u6-l5'],
  },
  {
    term: 'disabled',
    definition: 'A component state indicating an element is not interactive. Disabled elements typically use reduced opacity or muted color values to communicate their inactive status.',
    relatedLessons: ['u6-l2'],
  },
  {
    term: 'elevated surface',
    definition: 'A UI surface that appears above the base page background, such as a modal or floating card. In dark mode, elevation is communicated by stepping surfaces lighter rather than darker.',
    relatedLessons: ['u6-l2'],
  },
  {
    term: 'encoding',
    definition: 'Using a visual property such as color, shape, or size to represent a data attribute in a visualization. Robust encoding uses more than one property simultaneously to support CVD users.',
    relatedLessons: ['u6-l5'],
  },
  {
    term: 'hover',
    definition: 'A component state triggered when the pointer is over an interactive element. Hover state should be visually distinct from the default state to confirm interactivity.',
    relatedLessons: ['u6-l2'],
  },
  {
    term: 'inverse text',
    definition: 'Text color that is lighter on dark backgrounds. In dark mode, text roles must invert relative to light mode to maintain readability against darker surfaces.',
    relatedLessons: ['u6-l4'],
  },
  {
    term: 'light mode',
    definition: 'An interface theme using light backgrounds and dark foreground content, the default for most web products. Color roles designed for light mode do not automatically work in dark mode.',
    relatedLessons: ['u6-l4'],
  },
  {
    term: 'mode adaptation',
    definition: 'The deliberate redesign of color role values for a different interface theme, such as translating a light-mode palette into a dark-mode equivalent while preserving hierarchy and meaning.',
    relatedLessons: ['u6-l4'],
  },
  {
    term: 'primary text',
    definition: 'The highest-contrast text color in a palette, used for headings and body copy that must be clearly legible against the page or surface background.',
    relatedLessons: ['u6-l2'],
  },
  {
    term: 'secondary text',
    definition: 'A lower-contrast text color used for supporting labels, metadata, and less critical information. Secondary text must still meet contrast thresholds for its context.',
    relatedLessons: ['u6-l2'],
  },
  {
    term: 'semantic role',
    definition: 'A named purpose assigned to a color in a design system, such as "action", "success", or "error". Semantic roles describe what a color does, not what value it is.',
    relatedLessons: ['u6-l1'],
  },
  {
    term: 'semantic status',
    definition: 'A category of color role reserved for communicating system feedback states: success, warning, error, and informational. Semantic status colors must be consistently applied.',
    relatedLessons: ['u6-l2'],
  },
  {
    term: 'sequential palette',
    definition: 'A set of colors that step from light to dark (or low to high saturation) to represent ordered or quantitative data. Sequential palettes encode magnitude, not category.',
    relatedLessons: ['u6-l5'],
  },
  {
    term: 'stress test',
    definition: 'A systematic review of a color system across multiple contexts (light, dark, charts, alerts, CVD simulation) to reveal weaknesses that are invisible in any single view.',
    relatedLessons: ['u6-l6'],
  },
  {
    term: 'supporting palette',
    definition: 'A set of colors that complement the primary brand color in a product, providing range for semantic roles, neutrals, and secondary actions without overusing the brand hue.',
    relatedLessons: ['u6-l3'],
  },
  {
    term: 'surface depth',
    definition: 'The visual layering of surfaces in an interface where backgrounds, cards, and elevated panels appear at progressively different lightness levels to create perceived depth.',
    relatedLessons: ['u6-l4'],
  },
  {
    term: 'system review',
    definition: 'A structured evaluation of a color system after launch or feature additions, checking for consistency drift, contrast failures, and semantic dilution.',
    relatedLessons: ['u6-l6'],
  },
  {
    term: 'theme pairing',
    definition: 'The practice of designing light and dark mode color roles in parallel so that both themes have equivalent hierarchy, readability, and semantic clarity.',
    relatedLessons: ['u6-l4'],
  },
  {
    term: 'tonal scale',
    definition: 'A sequence of lightness steps derived from a base hue, used to generate a range of values for a role (such as action-100 through action-900) without changing hue.',
    relatedLessons: ['u6-l3'],
  },
  {
    term: 'tonal separation',
    definition: 'Sufficient lightness difference between adjacent surfaces to communicate their layering relationship, even in dark mode where contrast differences are smaller.',
    relatedLessons: ['u6-l4'],
  },
  {
    term: 'visual grouping',
    definition: 'Using color (and other Gestalt cues) to make related data elements appear to belong together in a chart or layout, aiding comprehension of structure.',
    relatedLessons: ['u6-l5'],
  },
  {
    term: 'wide-gamut display',
    definition: 'A screen technology that can show more colors than the standard sRGB range, making highly saturated colors appear more vivid. Designs should use moderate saturation to remain consistent across display types.',
    relatedLessons: ['u6-l6'],
  },
];
