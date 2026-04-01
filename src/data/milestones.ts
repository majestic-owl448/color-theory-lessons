import type { MilestoneConfig } from '../types/milestone.ts';

const milestone1: MilestoneConfig = {
  id: 'milestone-1',
  unitId: 'unit-1',
  title: 'Read the Interface',
  description:
    'Apply your Unit 1 vocabulary to analyze a real interface mockup. Use the panel on the right to answer each question.',
  badgeTitle: 'Color Observer',
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
  badgeTitle: 'Screen Mixer',
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

const milestoneRegistry: MilestoneConfig[] = [milestone1, milestone2];

export function getMilestoneById(id: string): MilestoneConfig | undefined {
  return milestoneRegistry.find((m) => m.id === id);
}
