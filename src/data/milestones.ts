import type { MilestoneConfig } from '../types/milestone.ts';

const milestone1: MilestoneConfig = {
  id: 'milestone-1',
  unitId: 'unit-1',
  title: 'Read the Interface',
  description:
    'Apply your Unit 1 vocabulary to analyze a real interface mockup. Use the panel on the right to answer each question.',
  estimatedMinutes: 15,
  heroVisual: 'interface-mockup',
  passThreshold: 4,
  parts: [
    {
      id: 'm1-p1',
      title: 'Analyze the Mockup',
      description:
        'Study the interface on the right. It has intentional strengths and weaknesses. Answer each question using the vocabulary from Unit 1.',
      questions: [
        {
          id: 'm1-q1',
          prompt: 'What is the first element your eye is drawn to in this interface?',
          choices: [
            {
              id: 'a',
              label: 'The navigation links',
              isCorrect: false,
              explanation:
                'The nav links have low contrast on the blue header — they draw less attention than they should.',
            },
            {
              id: 'b',
              label: 'The green "Try it free" button',
              isCorrect: true,
              explanation:
                'The green CTA sits on the large blue hero and has the highest contrast of any element. It is the clear focal point.',
            },
            {
              id: 'c',
              label: 'The card grid',
              isCorrect: false,
              explanation:
                'The cards are below the hero and share visual weight with each other. They do not lead the hierarchy.',
            },
            {
              id: 'd',
              label: 'The footer',
              isCorrect: false,
              explanation:
                'The footer has the worst contrast on the page — it recedes rather than draws attention.',
            },
          ],
        },
        {
          id: 'm1-q2',
          prompt:
            'Which element is most likely to fail an accessibility contrast check?',
          choices: [
            {
              id: 'a',
              label: 'The hero headline',
              isCorrect: false,
              explanation:
                'White text on the dark blue hero has high contrast and should pass accessibility checks.',
            },
            {
              id: 'b',
              label: 'The navigation links on the blue header',
              isCorrect: true,
              explanation:
                'The medium-gray nav links (#9ca3af) on a saturated blue (#1e40af) background likely fall below the WCAG 4.5:1 minimum for normal text.',
            },
            {
              id: 'c',
              label: 'The green CTA button',
              isCorrect: false,
              explanation:
                'The green button with white text has sufficient contrast to be readable.',
            },
            {
              id: 'd',
              label: 'The card headings',
              isCorrect: false,
              explanation:
                'Dark text on a light card background is typically high contrast and accessible.',
            },
          ],
        },
        {
          id: 'm1-q3',
          prompt:
            'How would you describe the color relationship between the hero blue and the card accent orange?',
          choices: [
            {
              id: 'a',
              label: 'Monochromatic — same hue, different lightness',
              isCorrect: false,
              explanation:
                'Monochromatic means variations of a single hue. Blue and orange are very different hues.',
            },
            {
              id: 'b',
              label: 'Analogous — neighboring hues on the color wheel',
              isCorrect: false,
              explanation:
                'Analogous colors sit next to each other. Blue and orange are on opposite sides of the wheel.',
            },
            {
              id: 'c',
              label: 'Complementary — opposite hues on the color wheel',
              isCorrect: true,
              explanation:
                'Blue and orange sit directly opposite each other on the standard color wheel — a classic complementary pair.',
            },
            {
              id: 'd',
              label: 'Triadic — three hues equally spaced around the wheel',
              isCorrect: false,
              explanation:
                'A triadic scheme uses three hues. This interface contrasts only two: blue and orange.',
            },
          ],
        },
        {
          id: 'm1-q4',
          prompt:
            'The footer text is difficult to read. What adjustment would help most?',
          choices: [
            {
              id: 'a',
              label: 'Change the text hue to match the brand blue',
              isCorrect: false,
              explanation:
                'Changing hue does not fix a lightness contrast problem. Dark blue on near-black is still unreadable.',
            },
            {
              id: 'b',
              label: 'Increase the lightness of the text so it contrasts with the dark background',
              isCorrect: true,
              explanation:
                'The problem is insufficient lightness difference. Lighter text on the dark footer restores the contrast needed for readability.',
            },
            {
              id: 'c',
              label: 'Add a drop shadow to the text',
              isCorrect: false,
              explanation:
                'Drop shadows can help in some situations, but they do not fix the underlying low-contrast relationship between text and surface.',
            },
            {
              id: 'd',
              label: 'Reduce the font size',
              isCorrect: false,
              explanation:
                'Smaller text makes the contrast problem worse, not better.',
            },
          ],
        },
        {
          id: 'm1-q5',
          prompt: 'What is the dominant color temperature of this palette?',
          choices: [
            {
              id: 'a',
              label: 'Warm — orange and red tones dominate',
              isCorrect: false,
              explanation:
                'The orange accent is present but it is outnumbered by the large blue areas.',
            },
            {
              id: 'b',
              label: 'Cool — blue and green tones dominate',
              isCorrect: true,
              explanation:
                'The blue header and hero cover the most surface area. The green CTA and light card backgrounds reinforce the cool read. The orange is an accent, not the dominant temperature.',
            },
            {
              id: 'c',
              label: 'Balanced — warm and cool are equally distributed',
              isCorrect: false,
              explanation:
                'The cool blue area is much larger than the warm orange accent area.',
            },
            {
              id: 'd',
              label: 'Neutral — mostly grays with no temperature',
              isCorrect: false,
              explanation:
                'The interface has clear hue in the header and hero, so it is not neutral.',
            },
          ],
        },
        {
          id: 'm1-q6',
          prompt:
            'What single change would most improve visual hierarchy on this page?',
          choices: [
            {
              id: 'a',
              label: 'Make all text the same size for consistency',
              isCorrect: false,
              explanation:
                'Uniform text size removes size-based hierarchy. Good hierarchy requires variation, not uniformity.',
            },
            {
              id: 'b',
              label: 'Remove the orange accent from the cards to reduce competition with the CTA',
              isCorrect: true,
              explanation:
                'The orange card labels compete with the green CTA for the role of "most important colored element." Neutralizing the card accents lets the CTA clearly win that role.',
            },
            {
              id: 'c',
              label: 'Change the hero background to white',
              isCorrect: false,
              explanation:
                'A white hero would reduce the contrast that currently makes the CTA stand out. The hero is doing its job.',
            },
            {
              id: 'd',
              label: 'Change the footer to match the hero blue',
              isCorrect: false,
              explanation:
                'A blue footer would compete with the hero for saturation dominance and make the page feel heavy at both ends.',
            },
          ],
        },
      ],
    },
  ],
};

const milestone2: MilestoneConfig = {
  id: 'milestone-2',
  unitId: 'unit-2',
  title: 'Mix for Screen',
  description:
    'Prove that you can classify color models, read RGB channel values, and reason about screen-first color decisions.',
  estimatedMinutes: 20,
  passThreshold: 9,
  parts: [
    {
      id: 'm2-p1',
      title: 'Sort the Examples',
      description:
        'Classify each example as additive (light-based) or subtractive (pigment-based).',
      questions: [
        {
          id: 'm2-q1',
          prompt: 'An LED billboard advertising a film premiere.',
          choices: [
            {
              id: 'a',
              label: 'Additive — emits light, mixes RGB channels',
              isCorrect: true,
              explanation:
                'LED displays emit light directly. The more light channels are active, the brighter and closer to white the result.',
            },
            {
              id: 'b',
              label: 'Subtractive — absorbs light, mixes pigments',
              isCorrect: false,
              explanation:
                'Subtractive mixing applies to physical pigments like ink or paint, not to light-emitting technology.',
            },
          ],
        },
        {
          id: 'm2-q2',
          prompt: 'A printed magazine with a full-color illustration.',
          choices: [
            {
              id: 'a',
              label: 'Additive — emits light, mixes RGB channels',
              isCorrect: false,
              explanation:
                'A printed page does not emit light. It reflects ambient light after ink absorbs some wavelengths.',
            },
            {
              id: 'b',
              label: 'Subtractive — absorbs light, mixes pigments',
              isCorrect: true,
              explanation:
                'Ink pigments absorb (subtract) certain wavelengths and reflect the rest. What we see is whatever light was not absorbed.',
            },
          ],
        },
        {
          id: 'm2-q3',
          prompt: 'A smartphone screen showing a navigation app.',
          choices: [
            {
              id: 'a',
              label: 'Additive — emits light, mixes RGB channels',
              isCorrect: true,
              explanation:
                'Smartphone screens emit light from individual red, green, and blue sub-pixels. Color is formed by mixing those emissions.',
            },
            {
              id: 'b',
              label: 'Subtractive — absorbs light, mixes pigments',
              isCorrect: false,
              explanation:
                'Screens do not contain ink. They produce color through light emission, not pigment absorption.',
            },
          ],
        },
        {
          id: 'm2-q4',
          prompt: 'A hand-painted mural on the side of a building.',
          choices: [
            {
              id: 'a',
              label: 'Additive — emits light, mixes RGB channels',
              isCorrect: false,
              explanation:
                'Paint does not emit light. It reflects whatever its pigments do not absorb from the ambient light source.',
            },
            {
              id: 'b',
              label: 'Subtractive — absorbs light, mixes pigments',
              isCorrect: true,
              explanation:
                'Paint is a physical pigment. Mixing paints creates subtractive results — more mixed paint absorbs more wavelengths and produces darker, muddier colors.',
            },
          ],
        },
        {
          id: 'm2-q5',
          prompt: 'A laptop monitor displaying a design mockup.',
          choices: [
            {
              id: 'a',
              label: 'Additive — emits light, mixes RGB channels',
              isCorrect: true,
              explanation:
                'LCD and OLED monitors produce color by combining red, green, and blue light emissions. All three at full intensity produce white.',
            },
            {
              id: 'b',
              label: 'Subtractive — absorbs light, mixes pigments',
              isCorrect: false,
              explanation:
                'Laptop monitors are light-emitting devices. They do not use ink or pigments.',
            },
          ],
        },
      ],
    },
    {
      id: 'm2-p2',
      title: 'Recreate Target Colors',
      description:
        'Each question shows a target color swatch. Identify which RGB channel values produce that color.',
      questions: [
        {
          id: 'm2-q6',
          prompt: 'Which RGB values produce the color shown in this swatch?',
          swatchColor: '#2563eb',
          choices: [
            {
              id: 'a',
              label: 'R:37  G:99  B:235',
              isCorrect: true,
              explanation:
                'A small red component, moderate green, and large blue channel produces this rich, saturated blue.',
            },
            {
              id: 'b',
              label: 'R:235  G:99  B:37',
              isCorrect: false,
              explanation:
                'Swapping red and blue channels gives a warm orange-red — not blue.',
            },
            {
              id: 'c',
              label: 'R:99  G:235  B:37',
              isCorrect: false,
              explanation:
                'High green with low blue and moderate red produces a bright lime-green.',
            },
            {
              id: 'd',
              label: 'R:235  G:37  B:99',
              isCorrect: false,
              explanation:
                'High red as the dominant channel produces a vibrant pink-magenta.',
            },
          ],
        },
        {
          id: 'm2-q7',
          prompt: 'Which RGB values produce the color shown in this swatch?',
          swatchColor: '#16a34a',
          choices: [
            {
              id: 'a',
              label: 'R:22  G:74  B:163',
              isCorrect: false,
              explanation:
                'Blue is the highest value here — this would produce a blue hue, not green.',
            },
            {
              id: 'b',
              label: 'R:163  G:22  B:74',
              isCorrect: false,
              explanation:
                'Red is the dominant channel — this would produce a muted red or rose hue.',
            },
            {
              id: 'c',
              label: 'R:22  G:163  B:74',
              isCorrect: true,
              explanation:
                'Green is highest at 163. The very low red (22) and moderate blue (74) produce a cool, mid-tone green.',
            },
            {
              id: 'd',
              label: 'R:74  G:163  B:22',
              isCorrect: false,
              explanation:
                'The low blue and similar R/G proportions would shift the result toward yellow-green.',
            },
          ],
        },
        {
          id: 'm2-q8',
          prompt: 'Which RGB values produce the color shown in this swatch?',
          swatchColor: '#ea580c',
          choices: [
            {
              id: 'a',
              label: 'R:234  G:88  B:12',
              isCorrect: true,
              explanation:
                'Very high red, moderate green, and near-zero blue creates this vivid orange. On screen, orange always needs high red and significant green.',
            },
            {
              id: 'b',
              label: 'R:12  G:88  B:234',
              isCorrect: false,
              explanation:
                'The high blue channel would make this appear blue, not orange.',
            },
            {
              id: 'c',
              label: 'R:88  G:234  B:12',
              isCorrect: false,
              explanation:
                'High green with low red and almost no blue produces a lime-green.',
            },
            {
              id: 'd',
              label: 'R:234  G:12  B:88',
              isCorrect: false,
              explanation:
                'High red with low green and moderate blue produces a hot pink or magenta.',
            },
          ],
        },
        {
          id: 'm2-q9',
          prompt: 'Which RGB values produce the color shown in this swatch?',
          swatchColor: '#7c3aed',
          choices: [
            {
              id: 'a',
              label: 'R:58  G:237  B:124',
              isCorrect: false,
              explanation:
                'High green and moderate blue with low red gives a mint or teal color.',
            },
            {
              id: 'b',
              label: 'R:124  G:58  B:237',
              isCorrect: true,
              explanation:
                'Purple needs moderate red, very low green, and high blue. The low green is the key — it stops the result from shifting toward pink or white.',
            },
            {
              id: 'c',
              label: 'R:237  G:58  B:124',
              isCorrect: false,
              explanation:
                'High red with low green and moderate blue produces a hot pink or magenta.',
            },
            {
              id: 'd',
              label: 'R:124  G:237  B:58',
              isCorrect: false,
              explanation:
                'High green with moderate red and low blue shifts the result toward yellow-green.',
            },
          ],
        },
        {
          id: 'm2-q10',
          prompt: 'Which RGB values produce the color shown in this swatch?',
          swatchColor: '#0f766e',
          choices: [
            {
              id: 'a',
              label: 'R:118  G:15  B:110',
              isCorrect: false,
              explanation:
                'Moderate red and blue with low green creates a purple-pink, not teal.',
            },
            {
              id: 'b',
              label: 'R:15  G:110  B:118',
              isCorrect: false,
              explanation:
                'Very close — but the blue channel (118) is slightly higher than green (110), which shifts the hue toward blue-teal rather than green-teal.',
            },
            {
              id: 'c',
              label: 'R:110  G:118  B:15',
              isCorrect: false,
              explanation:
                'High red and green with near-zero blue produces an olive-yellow.',
            },
            {
              id: 'd',
              label: 'R:15  G:118  B:110',
              isCorrect: true,
              explanation:
                'Teal needs very low red, with green slightly higher than blue. This low-red + nearly-equal green and blue is the recipe for a blue-green teal.',
            },
          ],
        },
      ],
    },
    {
      id: 'm2-p3',
      title: 'Explain the Reasoning',
      description:
        'Show that you understand the logic behind additive color and can explain it in plain language.',
      questions: [
        {
          id: 'm2-q11',
          prompt: 'Why is RGB the right model for designing colors on screens?',
          choices: [
            {
              id: 'a',
              label: 'Because screens use red, blue, and gray channels to produce every color',
              isCorrect: false,
              explanation:
                'There is no gray channel. Screens use red, green, and blue light emitters.',
            },
            {
              id: 'b',
              label: 'Because screens emit light by combining red, green, and blue channels',
              isCorrect: true,
              explanation:
                'Screen pixels are physically built from red, green, and blue sub-pixels that emit light. RGB values map directly to the intensity of each emitter — that is why it is the native model for screens.',
            },
            {
              id: 'c',
              label: 'Because RGB is the only model that supports more than 256 colors',
              isCorrect: false,
              explanation:
                'Many color models support large color spaces. RGB is used for screens because of how screen hardware is built, not because of a color count.',
            },
            {
              id: 'd',
              label: 'Because most print designers already use RGB in their workflows',
              isCorrect: false,
              explanation:
                'Print workflows typically use CMYK. RGB dominates screen design because of how screens emit light, not because of convention.',
            },
          ],
        },
        {
          id: 'm2-q12',
          prompt:
            'Why does paint-first thinking sometimes lead to wrong predictions for screen color?',
          choices: [
            {
              id: 'a',
              label: 'Because mixing paints produces lighter results, the opposite of screen mixing',
              isCorrect: false,
              explanation:
                'This is backwards. Mixing more paints produces darker, muddier results. Mixing screen light channels produces lighter results.',
            },
            {
              id: 'b',
              label: 'Because mixing pigments produces darker results while mixing screen channels produces lighter results',
              isCorrect: true,
              explanation:
                'Paint intuition says "mix more colors → darker mud." Screen logic says "add more light channels → lighter, brighter." These are opposite behaviors, which is exactly why paint experience misleads screen decisions.',
            },
            {
              id: 'c',
              label: 'Because paint colors are always too dark for digital use',
              isCorrect: false,
              explanation:
                'The problem is behavioral, not about absolute brightness. Paint and screen mixing produce opposite directional results.',
            },
            {
              id: 'd',
              label: 'Because screens cannot accurately reproduce paint pigments',
              isCorrect: false,
              explanation:
                'Gamut limitations are real, but not the core issue. The main problem is that the mixing rules work in opposite directions.',
            },
          ],
        },
        {
          id: 'm2-q13',
          prompt:
            'Why is understanding subtractive color still useful for screen designers?',
          choices: [
            {
              id: 'a',
              label: 'Because screen designers often need to print their designs too',
              isCorrect: false,
              explanation:
                'While some workflows involve print, this is not the core educational reason. The deeper value is understanding why screens and print diverge at a model level.',
            },
            {
              id: 'b',
              label: 'Because it explains why backlit designs look different when printed and why some colors fall outside a printer\'s gamut',
              isCorrect: true,
              explanation:
                'Screen colors can look vivid on a display but appear dull or shifted in print because ink cannot reproduce additive light values. Knowing subtractive color helps you anticipate and explain those differences.',
            },
            {
              id: 'c',
              label: 'Because CMYK is used inside screens for internal color management',
              isCorrect: false,
              explanation:
                'Screens do not use CMYK internally. They operate in RGB throughout.',
            },
            {
              id: 'd',
              label: 'It is only relevant for designers who also work in print',
              isCorrect: false,
              explanation:
                'Any screen designer who collaborates with print teams or needs to explain screen-to-print color shifts will benefit from understanding subtractive color.',
            },
          ],
        },
      ],
    },
  ],
};

const milestone3: MilestoneConfig = {
  id: 'milestone-3',
  unitId: 'unit-3',
  title: 'Build a UI Palette in Code',
  description:
    'Apply your Unit 3 knowledge to build a small but coherent digital color system using implementation-style thinking.',
  estimatedMinutes: 25,
  passThreshold: 8,
  parts: [
    {
      id: 'm3-p1',
      title: 'Color Formats and Conversion',
      description:
        'Demonstrate your understanding of HEX, RGB, HSL, and alpha by answering practical format questions.',
      questions: [
        {
          id: 'm3-q1',
          prompt: 'Which format is often easiest for making a color more muted without changing the hue?',
          choices: [
            { id: 'a', label: 'HEX', isCorrect: false, explanation: 'HEX encodes RGB channels in base-16. Muting a color in HEX requires calculating which channels to adjust — less intuitive than HSL.' },
            { id: 'b', label: 'RGB', isCorrect: false, explanation: 'RGB requires changing multiple channels in a balanced way to reduce saturation.' },
            { id: 'c', label: 'HSL', isCorrect: true, explanation: 'In HSL, lowering saturation mutes the color directly without affecting hue or lightness.' },
            { id: 'd', label: 'RGBA', isCorrect: false, explanation: 'The alpha channel controls transparency, not saturation or mutedness.' },
          ],
        },
        {
          id: 'm3-q2',
          prompt: 'What does rgba(0, 0, 0, 0.5) describe?',
          choices: [
            { id: 'a', label: 'A medium gray at full opacity', isCorrect: false, explanation: 'The RGB channels are all 0, which is black — not gray. The 0.5 is alpha, not brightness.' },
            { id: 'b', label: 'Black at 50% transparency', isCorrect: true, explanation: 'rgb(0, 0, 0) is black. The alpha of 0.5 makes it 50% transparent — commonly used for scrims and overlays.' },
            { id: 'c', label: 'A dark color that is half as saturated', isCorrect: false, explanation: 'Alpha controls transparency, not saturation. The visual result depends on the background underneath.' },
            { id: 'd', label: 'An invalid value — alpha must be a percentage', isCorrect: false, explanation: 'Alpha as a decimal from 0 to 1 is standard and valid in CSS.' },
          ],
        },
        {
          id: 'm3-q3',
          prompt: 'Why does the same 50% transparent overlay look different on a white background versus a dark background?',
          choices: [
            { id: 'a', label: 'Because the browser adjusts alpha differently for each background', isCorrect: false, explanation: 'The browser renders alpha consistently. The visual difference comes from the blend of foreground and background colors.' },
            { id: 'b', label: 'Because the perceived result is a blend of the overlay and the background', isCorrect: true, explanation: 'A dark overlay on white produces a visible gray tint, while the same overlay on a dark background is barely noticeable.' },
            { id: 'c', label: 'Because transparency values are measured relative to the background lightness', isCorrect: false, explanation: 'Alpha is absolute — 0.5 always means 50% transparent regardless of the background.' },
            { id: 'd', label: 'It does not — the result always looks the same', isCorrect: false, explanation: 'The visual result changes significantly because the blended color depends on both the foreground and the background.' },
          ],
        },
        {
          id: 'm3-q4',
          prompt: 'Which HEX value is closest to white?',
          swatchColor: '#F0F0F0',
          choices: [
            { id: 'a', label: '#F0F0F0', isCorrect: true, explanation: 'F0 in hex is 240 in decimal — very close to the maximum of 255. Equal high channel values produce a near-white neutral.' },
            { id: 'b', label: '#303030', isCorrect: false, explanation: '30 in hex is 48 in decimal — a very dark neutral, far from white.' },
            { id: 'c', label: '#808080', isCorrect: false, explanation: '80 in hex is 128 — a medium gray, exactly between black and white.' },
            { id: 'd', label: '#101010', isCorrect: false, explanation: '10 in hex is 16 — nearly black.' },
          ],
        },
      ],
    },
    {
      id: 'm3-p2',
      title: 'Themes and Token Thinking',
      description:
        'Show that you understand role-based color systems, design tokens, and how theme propagation works.',
      questions: [
        {
          id: 'm3-q5',
          prompt: 'What makes --color-text-primary a better token name than --dark-gray?',
          choices: [
            { id: 'a', label: 'It is shorter', isCorrect: false, explanation: 'Length is not the issue. The advantage is that role names stay meaningful even when the value changes.' },
            { id: 'b', label: 'It describes what the color does, not what it looks like — so it stays useful even if the value changes', isCorrect: true, explanation: 'In a dark theme, primary text might be light — but --color-text-primary still makes sense. --dark-gray would not.' },
            { id: 'c', label: 'CSS requires dashes in variable names', isCorrect: false, explanation: 'Both names use valid CSS custom property syntax. The issue is semantic clarity, not syntax.' },
            { id: 'd', label: 'It loads faster because it references a system color', isCorrect: false, explanation: 'Token naming has no impact on loading speed. The advantage is maintainability and semantic clarity.' },
          ],
        },
        {
          id: 'm3-q6',
          prompt: 'What happens when you change a base alias token that multiple role tokens reference?',
          choices: [
            { id: 'a', label: 'Only the first component using it updates', isCorrect: false, explanation: 'Token references propagate to all consumers. Every component referencing the updated alias will update.' },
            { id: 'b', label: 'Every role token that references that alias updates automatically', isCorrect: true, explanation: 'This is the power of token systems — one change propagates through every role that references the base value.' },
            { id: 'c', label: 'Nothing — role tokens store a copy of the value, not a reference', isCorrect: false, explanation: 'Role tokens reference aliases. Changing the alias changes the resolved value for all referencing roles.' },
            { id: 'd', label: 'The system throws an error because multiple tokens cannot share a base', isCorrect: false, explanation: 'Sharing base tokens is exactly the intended usage pattern. It enables consistent, cascading updates.' },
          ],
        },
        {
          id: 'm3-q7',
          prompt: 'Which of these is NOT a color role you would typically find in a theme?',
          choices: [
            { id: 'a', label: 'Surface background', isCorrect: false, explanation: 'Surface background is a standard structural role in most design systems.' },
            { id: 'b', label: 'Error state', isCorrect: false, explanation: 'Error is a standard semantic status role.' },
            { id: 'c', label: 'Hover animation timing', isCorrect: true, explanation: 'Animation timing is a motion property, not a color role. Color themes define values like surfaces, text, borders, and semantic states.' },
            { id: 'd', label: 'Primary action', isCorrect: false, explanation: 'Primary action is a standard interactive role for buttons, links, and focus indicators.' },
          ],
        },
        {
          id: 'm3-q8',
          prompt: 'Why are gradients sometimes problematic for text readability?',
          choices: [
            { id: 'a', label: 'Because gradients cannot be used in CSS backgrounds', isCorrect: false, explanation: 'CSS fully supports gradient backgrounds. The issue is that contrast varies across the gradient.' },
            { id: 'b', label: 'Because the background color varies, making contrast unpredictable across the area', isCorrect: true, explanation: 'Text may pass contrast in one region of the gradient but fail in another where the background is lighter or darker.' },
            { id: 'c', label: 'Because screen readers cannot process gradient backgrounds', isCorrect: false, explanation: 'Screen readers process text content regardless of background style. The issue is visual readability for sighted users.' },
            { id: 'd', label: 'Because gradients always reduce contrast by blending toward gray', isCorrect: false, explanation: 'Gradients blend between whatever colors you choose — they do not inherently reduce contrast.' },
          ],
        },
      ],
    },
    {
      id: 'm3-p3',
      title: 'Color Spaces and Implementation Awareness',
      description:
        'Demonstrate practical awareness of sRGB, Display P3, and the need for accessibility checking in all contexts.',
      questions: [
        {
          id: 'm3-q9',
          prompt: 'Which color space is the safer default baseline for most web design?',
          choices: [
            { id: 'a', label: 'Display P3', isCorrect: false, explanation: 'P3 offers wider gamut but is not universally supported. sRGB is the universal baseline.' },
            { id: 'b', label: 'sRGB', isCorrect: true, explanation: 'sRGB is supported by virtually all screens and is the default color space for standard CSS color functions.' },
            { id: 'c', label: 'Adobe RGB', isCorrect: false, explanation: 'Adobe RGB is primarily used in photography and print workflows, not web design.' },
            { id: 'd', label: 'It depends on which browser is being used', isCorrect: false, explanation: 'sRGB is universally supported across all modern browsers. It is the safe baseline regardless of browser choice.' },
          ],
        },
        {
          id: 'm3-q10',
          prompt: 'A color compiles correctly in your CSS file. Is it automatically accessible?',
          choices: [
            { id: 'a', label: 'Yes — if the syntax is valid, accessibility is handled', isCorrect: false, explanation: 'Valid syntax only means the browser can render it. Contrast, readability, and color-only meaning still need checking.' },
            { id: 'b', label: 'No — you still need to check contrast, readability, and whether meaning depends on color alone', isCorrect: true, explanation: 'A vivid yellow text on white background is perfectly valid CSS but nearly unreadable. Accessibility requires design judgment, not just valid code.' },
            { id: 'c', label: 'Only if you used HSL format, which is inherently more accessible', isCorrect: false, explanation: 'No format is inherently more accessible. Accessibility depends on the actual color values and their usage in context.' },
            { id: 'd', label: 'Yes — modern browsers auto-correct poor contrast', isCorrect: false, explanation: 'Browsers render exactly what you specify. They do not auto-correct accessibility issues.' },
          ],
        },
        {
          id: 'm3-q11',
          prompt: 'Why might a vivid Display P3 color look different on a device that only supports sRGB?',
          choices: [
            { id: 'a', label: 'The device will show an error message', isCorrect: false, explanation: 'Devices do not show errors for out-of-gamut colors. They silently clip or map the color to the nearest displayable value.' },
            { id: 'b', label: 'The color gets clipped to the nearest sRGB equivalent, which may look less vivid', isCorrect: true, explanation: 'Colors outside the sRGB gamut are mapped to the closest representable value, which can reduce vividness or shift hue slightly.' },
            { id: 'c', label: 'It will look identical — all modern screens support P3', isCorrect: false, explanation: 'Many screens, especially older or budget displays, do not support Display P3.' },
            { id: 'd', label: 'The browser converts it to grayscale automatically', isCorrect: false, explanation: 'Out-of-gamut colors are clipped to the nearest in-gamut color, not converted to grayscale.' },
          ],
        },
      ],
    },
  ],
};

const milestoneRegistry: MilestoneConfig[] = [milestone1, milestone2, milestone3];

export function getMilestoneById(id: string): MilestoneConfig | undefined {
  return milestoneRegistry.find((m) => m.id === id);
}
