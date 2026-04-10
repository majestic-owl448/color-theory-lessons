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
  estimatedMinutes: 20,
  passThreshold: 6,
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
  ],
};

const milestone4: MilestoneConfig = {
  id: 'milestone-4',
  unitId: 'unit-4',
  title: 'Design Beyond Your Own Eyes',
  description:
    'Apply your Unit 4 knowledge of human vision and color perception to identify fragile interface patterns.',
  estimatedMinutes: 15,
  heroVisual: 'interface-mockup',
  passThreshold: 6,
  parts: [
    {
      id: 'm4-p1',
      title: 'Vision Science and CVD Types',
      description:
        'Answer questions about color perception and the types of color vision deficiency.',
      questions: [
        {
          id: 'm4-q1',
          prompt: 'Which cells in the retina are primarily responsible for color perception?',
          choices: [
            { id: 'a', label: 'Rods', isCorrect: false, explanation: 'Rods respond to low-light conditions and are not primarily responsible for color vision.' },
            { id: 'b', label: 'Cones', isCorrect: true, explanation: 'Cones are the photoreceptor cells responsible for color vision. Humans typically have three types, each sensitive to a different range of wavelengths.' },
            { id: 'c', label: 'The optic nerve', isCorrect: false, explanation: 'The optic nerve carries signals from the retina to the brain — it does not process color itself.' },
            { id: 'd', label: 'The cornea', isCorrect: false, explanation: 'The cornea focuses light onto the retina but does not play a role in color processing.' },
          ],
        },
        {
          id: 'm4-q2',
          prompt: 'What does color vision deficiency mean?',
          choices: [
            { id: 'a', label: 'Complete inability to see any color', isCorrect: false, explanation: 'Only achromatopsia involves very limited hue perception. Most CVD types reduce specific color distinctions, not all color.' },
            { id: 'b', label: 'A difference in how some color distinctions are perceived, due to variation in cone function', isCorrect: true, explanation: 'CVD describes a range of conditions where certain color distinctions are harder to perceive because of differences in cone sensitivity.' },
            { id: 'c', label: 'A medical condition that only affects one eye', isCorrect: false, explanation: 'CVD is typically a property of the visual system as a whole, not limited to one eye.' },
            { id: 'd', label: 'The inability to perceive lightness differences', isCorrect: false, explanation: 'CVD affects hue distinctions, not lightness perception. Luminance contrast is generally preserved in most CVD types.' },
          ],
        },
        {
          id: 'm4-q3',
          prompt: 'Which is the most common form of CVD?',
          choices: [
            { id: 'a', label: 'Protanopia', isCorrect: false, explanation: 'Protanopia is relatively rare. Deuteranomaly is the most common form.' },
            { id: 'b', label: 'Tritanopia', isCorrect: false, explanation: 'Tritan types affecting blue-yellow are quite rare. Deuteranomaly is far more common.' },
            { id: 'c', label: 'Deuteranomaly — reduced green cone sensitivity', isCorrect: true, explanation: 'Deuteranomaly affects roughly 5–8% of males with Northern European ancestry, making it the most common form of CVD.' },
            { id: 'd', label: 'Achromatopsia', isCorrect: false, explanation: 'Achromatopsia is a rare condition. Deuteranomaly is substantially more common.' },
          ],
        },
        {
          id: 'm4-q4',
          prompt: 'Which CVD type affects blue-yellow distinctions?',
          choices: [
            { id: 'a', label: 'Protan types', isCorrect: false, explanation: 'Protan types affect red-sensitive cones, weakening red-green distinctions.' },
            { id: 'b', label: 'Deutan types', isCorrect: false, explanation: 'Deutan types affect green-sensitive cones, also weakening red-green distinctions.' },
            { id: 'c', label: 'Tritan types — tritanopia and tritanomaly', isCorrect: true, explanation: 'Tritan types affect the blue-sensitive cone. Blue and yellow become harder to distinguish.' },
            { id: 'd', label: 'Achromatopsia', isCorrect: false, explanation: 'Achromatopsia involves very limited cone function overall, not specifically blue-yellow.' },
          ],
        },
      ],
    },
    {
      id: 'm4-p2',
      title: 'Color-Only Failures',
      description:
        'Identify design failures that rely on color alone and understand why they fail.',
      questions: [
        {
          id: 'm4-q5',
          prompt:
            'A designer marks required form fields with red text and nothing else. What is the problem?',
          choices: [
            { id: 'a', label: 'Red text is too bright and distracting', isCorrect: false, explanation: 'Brightness is not the issue here. The problem is that color is the only signal.' },
            { id: 'b', label: 'Color alone carries the meaning — users with CVD or in high-contrast environments may not distinguish required fields', isCorrect: true, explanation: 'If the only difference is the hue of the text, that difference may not be perceivable for users with CVD or in conditions that reduce color fidelity.' },
            { id: 'c', label: 'Red is not a valid CSS color for form labels', isCorrect: false, explanation: 'Red is a perfectly valid CSS color. The issue is how meaning is communicated, not the CSS syntax.' },
            { id: 'd', label: 'Required fields should always be indicated with an asterisk in the label', isCorrect: false, explanation: 'An asterisk is one good solution, but the question is about identifying the problem — which is color-only communication.' },
          ],
        },
        {
          id: 'm4-q6',
          prompt:
            'A bar chart uses red, green, and orange to distinguish three data series, with no labels. What is the main risk?',
          choices: [
            { id: 'a', label: 'The chart will not render in older browsers', isCorrect: false, explanation: 'Browser rendering is not the concern here. The accessibility risk is the relevant issue.' },
            { id: 'b', label: 'Under protan or deutan simulation, red and green look very similar, making the series indistinguishable', isCorrect: true, explanation: 'Protan and deutan conditions both affect the red-green axis. Without labels, pattern fills, or direct labels, two of the three series become ambiguous.' },
            { id: 'c', label: 'Too many colors in one chart looks cluttered', isCorrect: false, explanation: 'Clutter is a design concern but not the accessibility risk being asked about.' },
            { id: 'd', label: 'Orange is too similar to yellow to be used in charts', isCorrect: false, explanation: 'The main risk is the red-green confusion under CVD, not orange-yellow similarity.' },
          ],
        },
        {
          id: 'm4-q7',
          prompt:
            'A "selected" tab is shown only by a blue highlight. No other visual change occurs. What is the problem?',
          choices: [
            { id: 'a', label: 'Blue is not a good color for selected states', isCorrect: false, explanation: 'Blue is commonly used for selected states. The problem is not the color choice but the absence of other cues.' },
            { id: 'b', label: 'Color is the only cue — there is no shape, border, or label change to support it', isCorrect: true, explanation: 'If the only difference between selected and unselected tabs is a hue change, users who cannot perceive that hue difference have no way to know which tab is active.' },
            { id: 'c', label: 'Tabs should not be highlighted at all', isCorrect: false, explanation: 'Highlighting the selected tab is correct behavior. The problem is relying only on color to communicate the selection.' },
            { id: 'd', label: 'The tab text is too small to read', isCorrect: false, explanation: 'Text size is a separate concern. The color-only selection state is the specific problem being asked about.' },
          ],
        },
        {
          id: 'm4-q8',
          prompt:
            'Why is color-only design a usability issue even for users without CVD?',
          choices: [
            { id: 'a', label: 'It is not — color-only design only affects users with CVD', isCorrect: false, explanation: 'Color perception is reduced in many situations: bright sunlight, low-quality displays, grayscale printing, and simple inattention.' },
            { id: 'b', label: 'Multiple cues benefit all users — in bright sunlight, on grayscale printouts, or when scanning quickly', isCorrect: true, explanation: 'Any condition that reduces effective color perception — physical or contextual — benefits from redundant cues. Good inclusive design helps everyone.' },
            { id: 'c', label: 'All users prefer monochromatic interfaces', isCorrect: false, explanation: 'User preference is not the issue. The point is that multiple cues improve robustness in real-world conditions for all users.' },
            { id: 'd', label: 'Color-only design increases file size', isCorrect: false, explanation: 'File size is unrelated to this accessibility concern.' },
          ],
        },
      ],
    },
  ],
};

const milestone5: MilestoneConfig = {
  id: 'milestone-5',
  unitId: 'unit-5',
  title: 'Accessibility Rescue',
  description: 'Apply your Unit 5 knowledge to audit and repair a flawed interface for color accessibility. Use the panel on the right to answer each question.',
  estimatedMinutes: 20,
  heroVisual: 'interface-mockup',
  passThreshold: 8,
  parts: [
    {
      id: 'm5-p1',
      title: 'Contrast and Readability',
      description: 'Test your knowledge of contrast thresholds and how they apply to real text and backgrounds.',
      questions: [
        { id: 'm5-q1', prompt: 'What contrast ratio is the practical minimum for normal body text?', choices: [{ id: 'a', label: '2:1', isCorrect: false, explanation: '2:1 is well below the minimum for readable body text.' }, { id: 'b', label: '3:1', isCorrect: false, explanation: '3:1 is the threshold for large text, not normal body text.' }, { id: 'c', label: '4.5:1', isCorrect: true, explanation: 'Correct. 4.5:1 is the practical minimum for normal body text.' }, { id: 'd', label: '7:1', isCorrect: false, explanation: '7:1 is enhanced contrast — above the typical minimum.' }] },
        { id: 'm5-q2', prompt: 'A heading is set in 22px bold weight. Which threshold applies?', choices: [{ id: 'a', label: '4.5:1 — all text needs 4.5:1 minimum', isCorrect: false, explanation: '22px bold qualifies as large text and uses the 3:1 threshold.' }, { id: 'b', label: '3:1 for large text', isCorrect: true, explanation: 'Correct. 22px bold is large text and the 3:1 threshold applies.' }, { id: 'c', label: '2:1 — headings are decorative', isCorrect: false, explanation: 'Headings are functional, not decorative.' }, { id: 'd', label: '7:1 — bold text needs more contrast', isCorrect: false, explanation: 'Bold text at large size needs less contrast, not more.' }] },
        { id: 'm5-q3', prompt: 'A text/background pair has a contrast ratio of 3.8:1. It is used for a small 12px label. Does it pass?', choices: [{ id: 'a', label: 'Yes — 3.8:1 is close enough', isCorrect: false, explanation: '3.8:1 does not meet the 4.5:1 minimum for normal (small) text.' }, { id: 'b', label: 'No — 3.8:1 is below 4.5:1 for normal (small) text', isCorrect: true, explanation: 'Correct. 12px is normal text and requires 4.5:1.' }, { id: 'c', label: 'Yes — the label is a UI element so 3:1 applies', isCorrect: false, explanation: 'Text labels use text contrast thresholds, not non-text thresholds.' }, { id: 'd', label: 'Cannot determine without seeing the full design', isCorrect: false, explanation: 'The ratio and text size give us enough information to determine pass/fail.' }] },
        { id: 'm5-q4', prompt: 'Which adjustment would most reliably improve a failing text contrast?', choices: [{ id: 'a', label: 'Change the font family to a more readable typeface', isCorrect: false, explanation: 'Font family does not affect contrast ratio.' }, { id: 'b', label: 'Darken the text or lighten the background — change lightness, not just hue', isCorrect: true, explanation: 'Correct. Contrast depends on luminance difference, which requires changing lightness.' }, { id: 'c', label: 'Increase the font size only', isCorrect: false, explanation: 'Increasing size may change which threshold applies, but does not improve the ratio.' }, { id: 'd', label: 'Change the hue to a more saturated color', isCorrect: false, explanation: 'Hue changes alone do not reliably change luminance or contrast ratio.' }] },
      ],
    },
    {
      id: 'm5-p2',
      title: 'Non-Text and Color-Only Failures',
      description: 'Identify failures beyond text contrast — components, icons, and color-only communication.',
      questions: [
        { id: 'm5-q5', prompt: 'An icon button has no text label. Its icon is #cccccc on a white background. What is the main problem?', choices: [{ id: 'a', label: 'The icon color does not match the brand palette', isCorrect: false, explanation: 'Brand palette is not the accessibility concern here.' }, { id: 'b', label: 'The icon is too faint — low contrast makes it hard to identify the action', isCorrect: true, explanation: 'Correct. A faint icon fails users who need to identify the button action.' }, { id: 'c', label: 'Icon buttons should always have text labels', isCorrect: false, explanation: 'Text labels are recommended but not always required — contrast is the issue here.' }, { id: 'd', label: 'Gray icons are never accessible', isCorrect: false, explanation: 'Gray icons can be accessible with sufficient contrast.' }] },
        { id: 'm5-q6', prompt: 'A form field is required. The only indication is a red asterisk. No other cue is used. What is the failure?', choices: [{ id: 'a', label: 'The asterisk is too small to notice', isCorrect: false, explanation: 'Size is not the primary issue — color-only communication is.' }, { id: 'b', label: 'Color alone carries the required-field meaning — users who cannot distinguish red may miss it', isCorrect: true, explanation: 'Correct. The required state relies entirely on color, which fails WCAG 1.4.1.' }, { id: 'c', label: 'Asterisks are confusing to new users', isCorrect: false, explanation: 'Asterisks are a standard convention — color-only use is the problem.' }, { id: 'd', label: 'The asterisk should be placed after the label, not before', isCorrect: false, explanation: 'Placement is a UX concern, not the accessibility failure here.' }] },
        { id: 'm5-q7', prompt: 'A keyboard user presses Tab to navigate a form. The focused input looks identical to an unfocused one. What has failed?', choices: [{ id: 'a', label: 'The form has too many fields', isCorrect: false, explanation: 'Number of fields is not the accessibility issue.' }, { id: 'b', label: 'The focus indicator is missing or invisible — keyboard navigation is severely impaired', isCorrect: true, explanation: 'Correct. Keyboard users depend on visible focus to know where they are.' }, { id: 'c', label: 'The Tab order is incorrect', isCorrect: false, explanation: 'Tab order may also be an issue, but the invisible focus state is the primary failure.' }, { id: 'd', label: 'The input border color is wrong', isCorrect: false, explanation: 'Border color is a non-text contrast issue — focus visibility is the specific failure.' }] },
        { id: 'm5-q8', prompt: 'A dashboard uses five chart series with a color-only legend. What is the strongest fix?', choices: [{ id: 'a', label: 'Use a more varied color palette', isCorrect: false, explanation: 'A more varied palette is still color-only.' }, { id: 'b', label: 'Add direct data labels to each series so series identity does not depend on the legend', isCorrect: true, explanation: 'Correct. Direct labels remove the dependency on color-only identification.' }, { id: 'c', label: 'Make the legend larger', isCorrect: false, explanation: 'A larger legend is still color-only.' }, { id: 'd', label: 'Reduce the series count to three', isCorrect: false, explanation: 'Fewer series help, but without direct labels it remains color-only.' }] },
      ],
    },
    {
      id: 'm5-p3',
      title: 'Repair and Pattern Thinking',
      description: 'Apply accessible design thinking to real interface patterns and systemic improvements.',
      questions: [
        { id: 'm5-q9', prompt: "An error alert uses a red background and white text. It contains only the message 'Error occurred.' What would make it stronger?", choices: [{ id: 'a', label: 'Use a darker red background', isCorrect: false, explanation: 'Darker background is still color-only in terms of distinguishing the alert type.' }, { id: 'b', label: "Add an error icon, a descriptive heading like 'Payment failed', and actionable next steps", isCorrect: true, explanation: 'Correct. Icon, heading, and actionable content make the alert much more useful.' }, { id: 'c', label: 'Make the text larger', isCorrect: false, explanation: 'Larger text helps readability but does not address the content or redundancy.' }, { id: 'd', label: 'Add a close button', isCorrect: false, explanation: 'A close button is useful UX but does not address the alert content or color-only issue.' }] },
        { id: 'm5-q10', prompt: 'A link in a paragraph is shown only by a slight blue color shift. What is the simplest effective repair?', choices: [{ id: 'a', label: 'Change the link color to a more saturated blue', isCorrect: false, explanation: 'Saturated blue is still color-only.' }, { id: 'b', label: 'Add an underline — this provides a non-color cue that confirms the link', isCorrect: true, explanation: 'Correct. Underlines are the standard non-color cue for links in body text.' }, { id: 'c', label: 'Add an arrow icon after each link', isCorrect: false, explanation: 'Arrow icons work but underlines are the simpler standard solution.' }, { id: 'd', label: 'Move all links to a separate section', isCorrect: false, explanation: 'Moving links removes their inline context — underline is the better solution.' }] },
        { id: 'm5-q11', prompt: 'Why is fixing the form validation pattern more valuable than fixing one form screen?', choices: [{ id: 'a', label: 'It takes less time', isCorrect: false, explanation: 'Pattern work often takes more time initially.' }, { id: 'b', label: 'A pattern fix scales across every form in the product automatically', isCorrect: true, explanation: 'Correct. One pattern fix propagates to every instance across the product.' }, { id: 'c', label: 'Patterns are easier to test', isCorrect: false, explanation: 'Testing scope is not the primary advantage.' }, { id: 'd', label: 'One form screen is usually enough', isCorrect: false, explanation: 'Products typically have many forms — one fix is not enough.' }] },
        { id: 'm5-q12', prompt: "A designer runs a contrast checker on a button and it passes. The button's active/pressed state has no visual difference from its default state. What is missing?", choices: [{ id: 'a', label: 'The button needs a drop shadow', isCorrect: false, explanation: 'Drop shadows are decorative — they are not the accessibility issue.' }, { id: 'b', label: 'A non-text contrast check on the state change — pressed state is a meaningful visual signal', isCorrect: true, explanation: 'Correct. State changes are meaningful visual signals and need visible distinction.' }, { id: 'c', label: 'The button color needs to be darker', isCorrect: false, explanation: 'Darkness is not the issue — state distinction is.' }, { id: 'd', label: 'Nothing — the button passed the checker', isCorrect: false, explanation: 'The contrast checker only checked the default state. State changes require separate review.' }] },
      ],
    },
  ],
};

const milestone6: MilestoneConfig = {
  id: 'milestone-6',
  unitId: 'unit-6',
  title: 'Color System Capstone',
  description: 'Demonstrate your mastery of applied color systems. Answer questions across color roles, dark mode, chart accessibility, brand constraints, and system review.',
  estimatedMinutes: 25,
  heroVisual: 'interface-mockup',
  passThreshold: 12,
  parts: [
    {
      id: 'm6-p1',
      title: 'Color Systems and Roles',
      description: 'Test your understanding of semantic color roles and system thinking.',
      questions: [
        {
          id: 'm6-q1',
          prompt: 'What is the main advantage of assigning semantic color roles over choosing hex values case by case?',
          choices: [
            { id: 'a', label: 'Semantic roles guarantee better contrast ratios automatically', isCorrect: false, explanation: 'Roles do not auto-fix contrast — they provide a consistent vocabulary. Contrast must still be verified.' },
            { id: 'b', label: 'Semantic roles make color decisions consistent and reusable across the entire product', isCorrect: true, explanation: 'Correct. Roles like "action" or "surface" let you update one value and propagate it everywhere, reducing inconsistency.' },
            { id: 'c', label: 'Semantic roles eliminate the need for design tokens', isCorrect: false, explanation: 'Design tokens are how semantic roles are typically implemented — they work together, not against each other.' },
            { id: 'd', label: 'Semantic roles reduce the number of colors a designer has to choose', isCorrect: false, explanation: 'You still choose values for each role. The benefit is clarity of purpose, not fewer decisions.' },
          ],
        },
        {
          id: 'm6-q2',
          prompt: 'A "success" role currently maps to teal (#14b8a6). A developer uses it for both success alerts and a decorative teal accent. What problem does this create?',
          choices: [
            { id: 'a', label: 'The teal color is not accessible', isCorrect: false, explanation: 'Accessibility depends on contrast, not the color itself.' },
            { id: 'b', label: 'The semantic meaning of "success" is diluted when the same color is used decoratively', isCorrect: true, explanation: 'Correct. When a semantic color appears in unrelated contexts, users lose confidence in what it means.' },
            { id: 'c', label: 'Two different components cannot share the same hex value', isCorrect: false, explanation: 'The same value can appear in multiple places — the problem is semantic confusion, not the value itself.' },
            { id: 'd', label: 'Teal is not appropriate for success states', isCorrect: false, explanation: 'The role value choice is independent of the semantic confusion issue.' },
          ],
        },
        {
          id: 'm6-q3',
          prompt: 'A minimal color system needs at least which set of semantic roles?',
          choices: [
            { id: 'a', label: 'Primary, secondary, tertiary, and quaternary', isCorrect: false, explanation: 'These are generic labels, not semantic roles. "Secondary" does not tell you what the color does.' },
            { id: 'b', label: 'Page background, surface, primary text, secondary text, action, success, warning, error', isCorrect: true, explanation: 'Correct. This set covers the core structural and feedback needs of most interfaces.' },
            { id: 'c', label: 'Brand color, highlight, and shadow', isCorrect: false, explanation: 'These are descriptive but incomplete — they miss structural roles like surface and text.' },
            { id: 'd', label: 'A color system needs at least 24 named roles to be useful', isCorrect: false, explanation: 'A compact 8–12 role system can fully support most product components and states.' },
          ],
        },
        {
          id: 'm6-q4',
          prompt: 'When a designer updates the "action" token value from blue to indigo in a design system, what happens to all buttons using that token?',
          choices: [
            { id: 'a', label: 'Nothing — each button must be updated individually', isCorrect: false, explanation: 'That would be true if hex values were hardcoded, not tokens.' },
            { id: 'b', label: 'All buttons update automatically because they reference the same token', isCorrect: true, explanation: 'Correct. This is the primary efficiency benefit of a token-based color system.' },
            { id: 'c', label: 'Only buttons in the design file update, not in code', isCorrect: false, explanation: 'A shared token system propagates to code as well when properly implemented.' },
            { id: 'd', label: 'Tokens only affect new components, not existing ones', isCorrect: false, explanation: 'Existing components referencing the token update when the token value changes.' },
          ],
        },
      ],
    },
    {
      id: 'm6-p2',
      title: 'Brand Constraints and Dark Mode',
      description: 'Apply brand pressure and dark mode adaptation principles.',
      questions: [
        {
          id: 'm6-q5',
          prompt: "A brand's primary color is a bright yellow (#facc15). It is used as button background with white text. What is the likely failure?",
          choices: [
            { id: 'a', label: 'Yellow is not a professional brand color', isCorrect: false, explanation: 'Brand color perception is subjective — accessibility is the objective issue.' },
            { id: 'b', label: 'White text on bright yellow likely fails contrast — dark text would work better', isCorrect: true, explanation: 'Correct. Bright yellow has high luminance; white text often fails 4.5:1. Dark text is the correct pair.' },
            { id: 'c', label: 'Buttons should never use the primary brand color', isCorrect: false, explanation: 'Brand color on buttons is common — the issue is the text contrast choice.' },
            { id: 'd', label: 'Yellow buttons confuse users about the primary action', isCorrect: false, explanation: 'Yellow is a bold choice but not inherently confusing — contrast is the failure.' },
          ],
        },
        {
          id: 'm6-q6',
          prompt: 'A brand accent is used everywhere: buttons, links, headings, card borders, dividers. What is the most likely problem?',
          choices: [
            { id: 'a', label: 'The accent color becomes invisible from overuse and loses its ability to signal importance', isCorrect: true, explanation: 'Correct. Accent overuse dilutes the attention signal — when everything is accented, nothing is.' },
            { id: 'b', label: 'The brand palette becomes too consistent', isCorrect: false, explanation: 'Consistency is a goal, not a problem. Over-application of a single color is the issue.' },
            { id: 'c', label: 'Users will memorize the brand color more easily', isCorrect: false, explanation: 'Memorability is not the failure mode here — signal dilution is.' },
            { id: 'd', label: 'The accent creates too much contrast on most elements', isCorrect: false, explanation: 'High contrast is usually desirable. The problem is semantic dilution.' },
          ],
        },
        {
          id: 'm6-q7',
          prompt: 'Why does a light-mode surface color (#f9fafb) usually fail in dark mode when applied directly?',
          choices: [
            { id: 'a', label: 'Light colors are not supported in dark mode', isCorrect: false, explanation: 'Any color can technically be applied — the problem is perceptual.' },
            { id: 'b', label: 'A near-white surface in a dark context creates blinding contrast and destroys hierarchy', isCorrect: true, explanation: 'Correct. Dark mode surfaces should step from dark, not use light-mode values.' },
            { id: 'c', label: 'Light surfaces are always too transparent in dark mode', isCorrect: false, explanation: 'Transparency is a separate concern — luminance clash is the primary issue.' },
            { id: 'd', label: 'Light colors render differently on dark displays', isCorrect: false, explanation: 'Rendering differences are minor — the perceptual hierarchy issue is the core problem.' },
          ],
        },
        {
          id: 'm6-q8',
          prompt: 'What technique ensures a dark mode system maintains depth hierarchy without using the same color values as light mode?',
          choices: [
            { id: 'a', label: 'Invert all light-mode hex values', isCorrect: false, explanation: 'Simple inversion often produces ugly or inaccessible results — tonal stepping is more reliable.' },
            { id: 'b', label: 'Step surfaces upward in lightness — page bg darkest, cards lighter, elevated panels lightest', isCorrect: true, explanation: 'Correct. Tonal stepping within the dark range preserves depth without using light-mode values.' },
            { id: 'c', label: 'Use identical dark gray for all surfaces to look more refined', isCorrect: false, explanation: 'Identical surfaces flatten hierarchy — users cannot distinguish cards from background.' },
            { id: 'd', label: 'Reduce saturation of all colors to near-zero in dark mode', isCorrect: false, explanation: 'Zero saturation removes personality and makes semantic colors hard to distinguish.' },
          ],
        },
        {
          id: 'm6-q9',
          prompt: 'A dark mode design has a blue action color (#1e40af) carried over from light mode. What is likely wrong?',
          choices: [
            { id: 'a', label: 'Blue is not permitted in dark mode', isCorrect: false, explanation: 'Blue can work in dark mode — the specific value is the issue.' },
            { id: 'b', label: '#1e40af is too dark to be visible on dark backgrounds — a lighter blue is needed', isCorrect: true, explanation: 'Correct. Dark blue on dark surface has low contrast. Dark mode actions typically need lighter, more luminous values.' },
            { id: 'c', label: 'The button will automatically lighten in dark mode', isCorrect: false, explanation: 'Dark mode adaptation requires explicit design decisions — values do not self-adapt.' },
            { id: 'd', label: 'Dark mode should use green for actions instead of blue', isCorrect: false, explanation: 'Hue is not the issue — luminance contrast with the dark background is.' },
          ],
        },
      ],
    },
    {
      id: 'm6-p3',
      title: 'Charts and Data Visualization',
      description: 'Apply color accessibility thinking to data visualization contexts.',
      questions: [
        {
          id: 'm6-q10',
          prompt: 'A line chart with 5 series uses only hue to distinguish them. Under deuteranopia simulation, red and green lines look identical. What is the best fix?',
          choices: [
            { id: 'a', label: 'Remove one of the series', isCorrect: false, explanation: 'Removing series loses information — the design should support all series accessibly.' },
            { id: 'b', label: 'Add direct data labels and use different line styles (dashed, dotted, solid)', isCorrect: true, explanation: 'Correct. Direct labels eliminate legend dependency. Line styles distinguish series by shape, not hue.' },
            { id: 'c', label: 'Change to a pie chart instead', isCorrect: false, explanation: 'Pie charts have their own accessibility challenges — this does not solve the CVD issue.' },
            { id: 'd', label: 'Use a bright red-green pair with higher saturation', isCorrect: false, explanation: 'Higher saturation does not help under CVD — red and green merge regardless of saturation.' },
          ],
        },
        {
          id: 'm6-q11',
          prompt: 'When is a sequential palette more appropriate than a categorical palette in data visualization?',
          choices: [
            { id: 'a', label: 'When the data has no natural ordering', isCorrect: false, explanation: 'Unordered data calls for categorical palettes, not sequential ones.' },
            { id: 'b', label: 'When representing ordered or quantitative data (e.g., heatmaps, density, intensity scales)', isCorrect: true, explanation: 'Correct. Sequential palettes encode magnitude — dark to light or vice versa for ordered data.' },
            { id: 'c', label: 'Always — sequential palettes are more accessible than categorical ones', isCorrect: false, explanation: 'Sequential palettes are appropriate for ordered data. For categories, sequential palettes mislead users into seeing false order.' },
            { id: 'd', label: 'When you need more than 6 series', isCorrect: false, explanation: 'Number of series is not the deciding factor — data structure (ordered vs unordered) is.' },
          ],
        },
        {
          id: 'm6-q12',
          prompt: 'A pie chart has 7 slices with very similar hues. What is the most robust fix?',
          choices: [
            { id: 'a', label: 'Use a wider hue range and higher saturation', isCorrect: false, explanation: 'Wider hue range helps somewhat but still relies on color alone, especially with many slices.' },
            { id: 'b', label: 'Label each slice directly with its value and name; use a table for precise values', isCorrect: true, explanation: 'Correct. Direct labels and supplementary tables eliminate color-only identification and aid precision.' },
            { id: 'c', label: 'Reduce to a maximum of 4 slices by hiding the rest', isCorrect: false, explanation: 'Hiding data is a last resort — labels and tables are more informative solutions.' },
            { id: 'd', label: 'Animate each slice to draw attention', isCorrect: false, explanation: 'Animation does not help distinguish 7 similar-hued slices and may cause accessibility issues.' },
          ],
        },
      ],
    },
    {
      id: 'm6-p4',
      title: 'System Review and Stress Testing',
      description: 'Evaluate a color system holistically across contexts, modes, and simulation.',
      questions: [
        {
          id: 'm6-q13',
          prompt: 'What does a "color system stress test" check that a single-screen contrast check does not?',
          choices: [
            { id: 'a', label: 'Exact hex values used across the codebase', isCorrect: false, explanation: 'A stress test is about visual and semantic performance, not code auditing.' },
            { id: 'b', label: 'Whether the system holds up across multiple contexts — light, dark, charts, alerts, and CVD simulation', isCorrect: true, explanation: 'Correct. A stress test exposes failures invisible in any single view.' },
            { id: 'c', label: 'Whether the brand guidelines were followed exactly', isCorrect: false, explanation: 'Brand compliance is separate from system robustness.' },
            { id: 'd', label: 'The number of tokens defined in the system', isCorrect: false, explanation: 'Token count does not indicate system quality — contextual performance does.' },
          ],
        },
        {
          id: 'm6-q14',
          prompt: 'A consistency audit finds that the primary button uses #1e40af on 3 screens and #3b82f6 on 2 screens. What should happen?',
          choices: [
            { id: 'a', label: 'Accept the variation — slight differences are unnoticeable', isCorrect: false, explanation: 'Slight differences accumulate into inconsistency and erode user confidence in the design.' },
            { id: 'b', label: 'Consolidate to one value via the action token and update all instances', isCorrect: true, explanation: 'Correct. The token should carry the single canonical value and all instances should reference it.' },
            { id: 'c', label: 'Choose the more popular value and manually change the others', isCorrect: false, explanation: 'Manual changes are error-prone — a token ensures future consistency automatically.' },
            { id: 'd', label: 'Use both values as aliases for the same role', isCorrect: false, explanation: 'Two values for one role reintroduces inconsistency. One role, one value.' },
          ],
        },
        {
          id: 'm6-q15',
          prompt: 'Why can the same hex value look different across two screens in the same app?',
          choices: [
            { id: 'a', label: 'The browser renders colors differently per page', isCorrect: false, explanation: 'Browser rendering is consistent per display — perception is the varying factor.' },
            { id: 'b', label: 'Context effect — the surrounding colors change how a color is perceived', isCorrect: true, explanation: 'Correct. A blue on a warm background reads differently than the same blue on a cool background due to simultaneous contrast.' },
            { id: 'c', label: 'Different monitors show different colors', isCorrect: false, explanation: 'Monitor variation is a factor, but context effect explains perceptual differences on the same display.' },
            { id: 'd', label: 'CSS applies different rendering passes per component', isCorrect: false, explanation: 'CSS rendering does not vary between components — context effect is perceptual.' },
          ],
        },
        {
          id: 'm6-q16',
          prompt: 'Before shipping, which five areas should a final color review cover?',
          choices: [
            { id: 'a', label: 'Font size, border radius, spacing, shadows, and animation timing', isCorrect: false, explanation: 'These are important design properties but not specifically color review areas.' },
            { id: 'b', label: 'Hierarchy, text readability, semantic clarity, dark mode, chart readability, and CVD robustness', isCorrect: true, explanation: 'Correct. These six areas together cover the key failure modes of a color system.' },
            { id: 'c', label: 'Brand guidelines, marketing approval, client review, developer handoff, and QA sign-off', isCorrect: false, explanation: 'These are process steps, not color review criteria.' },
            { id: 'd', label: 'Number of colors, token count, palette size, theme support, and documentation', isCorrect: false, explanation: 'Documentation and quantity are secondary to functional review criteria.' },
          ],
        },
        {
          id: 'm6-q17',
          prompt: 'A wide-gamut display shows an interface with highly saturated accent colors as intended. A user on a standard sRGB display sees muted versions of those colors. What approach reduces this problem?',
          choices: [
            { id: 'a', label: 'Use maximum saturation so colors remain vivid even when muted', isCorrect: false, explanation: 'Maximum saturation on wide-gamut displays creates extremely vivid results on wide-gamut while still muting on sRGB — the gap widens.' },
            { id: 'b', label: 'Use moderate saturation that remains readable across display types', isCorrect: true, explanation: 'Correct. Moderate saturation ensures the design holds across both standard and wide-gamut displays.' },
            { id: 'c', label: 'Avoid color entirely and use only grayscale', isCorrect: false, explanation: 'Grayscale removes all color signal — moderation is the goal, not elimination.' },
            { id: 'd', label: 'Wide-gamut issues resolve automatically in modern browsers', isCorrect: false, explanation: 'Browsers do not automatically compensate — designers must make intentional saturation choices.' },
          ],
        },
        {
          id: 'm6-q18',
          prompt: 'A designer completes a color system for a product. What is the single most important ongoing practice after launch?',
          choices: [
            { id: 'a', label: 'Adding new accent colors regularly to keep the design fresh', isCorrect: false, explanation: 'Adding colors without purpose grows entropy — consistency requires discipline.' },
            { id: 'b', label: 'Reviewing new components and feature additions against the system to maintain consistency', isCorrect: true, explanation: 'Correct. Systems decay when new work bypasses them. Regular review keeps the system alive.' },
            { id: 'c', label: 'Redesigning the color system annually', isCorrect: false, explanation: 'Annual redesigns are disruptive — incremental review and refinement is more sustainable.' },
            { id: 'd', label: 'Locking all tokens so no one can change them', isCorrect: false, explanation: 'Lock-down prevents evolution — a governance process with review is more practical.' },
          ],
        },
      ],
    },
  ],
};

const milestoneRegistry: MilestoneConfig[] = [milestone1, milestone2, milestone3, milestone4, milestone5, milestone6];

export function getMilestoneById(id: string): MilestoneConfig | undefined {
  return milestoneRegistry.find((m) => m.id === id);
}
