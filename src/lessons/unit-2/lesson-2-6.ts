import type { LessonConfig } from '../../types/lesson.ts';

export const lesson2_6: LessonConfig = {
  id: 'u2-l6',
  unitId: 'unit-2',
  title: 'Applying Additive Thinking to UI Design',
  description: 'Turn the additive color model into practical design judgment for screen-based interfaces.',
  learningGoal: 'Make and explain intentional screen-first color decisions for accent, surface, and neutral roles in a simple UI palette.',
  estimatedMinutes: 14,
  prerequisites: ['u2-l5'],
  conceptsIntroduced: ['surface color', 'screen-first decision', 'palette balance'],
  interactionType: 'interface-tuner',
  glossaryTerms: ['surface color', 'neutral', 'palette balance', 'screen-first decision'],
  reviewTags: ['additive', 'interface', 'palette', 'practical'],
  steps: [
    {
      id: 's1',
      text: 'Designers rarely work with a single color. A screen-based UI palette usually has at least three roles: a vivid accent that draws attention, a surface color that fills large areas quietly, and a neutral that handles text or subtle borders.',
      highlights: ['vivid accent', 'surface color', 'neutral'],
    },
    {
      id: 's2',
      text: 'Additive thinking lets you predict how each role will behave. A vivid accent has at least one channel at high intensity and the others lower — it stands out because it is unbalanced. A neutral has channels that are roughly equal — balanced channels produce no color cast.',
    },
    {
      id: 's3',
      text: 'Surface colors are usually dark or light with low saturation — low, equal-ish channels for dark surfaces, high equal-ish channels for light ones. Their job is to recede. They should not compete with the accent.',
    },
    {
      id: 's4',
      text: 'The relationship between roles matters more than any individual color. A vivid accent on a dark surface looks strong. That same accent on a light surface reads softer. A muted accent on a light surface can disappear entirely.',
    },
    {
      id: 's5',
      text: 'In the tuning lab on the right, adjust the three color roles to pass balance thresholds. Think about each change in terms of channels and contrast — not just whether you like the look.',
    },
  ],
  challenges: [
    {
      id: 'c1',
      prompt: 'Tune the accent, surface, and neutral using RGB sliders until all three balance thresholds pass. Each change should have a screen-logic reason.',
      type: 'build-palette',
      hints: [
        'The accent needs to stand out from the surface — if they are too close in brightness, the tab fails.',
        'The surface should be low-saturation: keep its channels close in value.',
        'The neutral sits between the surface and the accent in brightness — it should not overpower either.',
      ],
      successCriteria: 'All three balance checks pass: accent contrast, surface neutrality, and neutral legibility.',
    },
  ],
  quizItems: [
    {
      id: 'q1',
      prompt: 'Which explanation sounds most screen-aware?',
      choices: [
        { id: 'a', label: 'I chose this blue because it looks professional and matches the brand.', isCorrect: false, explanation: 'This is aesthetic language with no screen reasoning. It does not explain how the color behaves as emitted light.' },
        { id: 'b', label: 'I raised the blue channel and kept red and green low to get a vivid, unambiguous blue accent that stands out on the dark surface.', isCorrect: true, explanation: 'This explains the choice in terms of channel values, emitted light, and contrast with the surrounding surface — screen-first reasoning.' },
        { id: 'c', label: 'I mixed a cooler tone into the base color to get the blue I wanted.', isCorrect: false, explanation: '"Mixing a cooler tone" is pigment language. Screen colors are built from channel values, not mixed from physical tones.' },
        { id: 'd', label: 'Blue is naturally calming, so it works well for UI backgrounds.', isCorrect: false, explanation: 'This is associative reasoning, not screen logic. It does not address how the color is produced or how it interacts with surrounding values.' },
      ],
    },
    {
      id: 'q2',
      prompt: 'A designer wants to make a button look less harsh without changing its hue. Which change uses additive thinking correctly?',
      choices: [
        { id: 'a', label: 'Mix in a neutral gray to reduce the intensity.', isCorrect: false, explanation: '"Mixing in" is pigment thinking. On screen, reduce intensity by lowering the dominant channel value.' },
        { id: 'b', label: 'Lower the dominant channel value slightly so the button emits less of that hue.', isCorrect: true, explanation: 'Correct screen logic. Less channel intensity means less of that light — the color becomes less harsh without switching hue.' },
        { id: 'c', label: 'Add a complementary color to cancel out the harshness.', isCorrect: false, explanation: 'Cancelling with complements is a pigment concept. On screen, adding a complementary channel shifts the hue toward a secondary or neutral — it does not simply calm the original.' },
        { id: 'd', label: 'Use a lighter version of the same color to reduce contrast.', isCorrect: false, explanation: 'Lightening changes the surface interaction but does not address the harshness of the emitted hue itself. The correct approach is lowering the dominant channel.' },
      ],
    },
    {
      id: 'q3',
      prompt: 'Why is RGB the right mental model for digital UI color work?',
      choices: [
        { id: 'a', label: 'Because RGB is the most common file format for web design.', isCorrect: false, explanation: 'RGB is not a file format. It is a color model describing emitted light — which is why it matches how screens actually produce color.' },
        { id: 'b', label: 'Because screens physically emit red, green, and blue light to produce every visible color.', isCorrect: true, explanation: 'RGB is not a convention — it describes the physical mechanism of displays. Designing in RGB means working directly with the system you are targeting.' },
        { id: 'c', label: 'Because RGB is easier to understand than other color models.', isCorrect: false, explanation: 'Ease of use is not the reason. RGB is correct because it matches the underlying physical behavior of screens.' },
        { id: 'd', label: 'Because print designers also use RGB as their primary model.', isCorrect: false, explanation: 'Print designers typically work in CMYK. RGB is the right model for screens specifically because of how displays emit light.' },
      ],
    },
  ],
  keyPoints: [
    'Screen-first thinking means choosing colors with backlit display rendering as the primary context.',
    'Surface colors set the base against which all other colors in the UI are perceived.',
    'Palette balance means no single color dominates unintentionally — tested in context, not in isolation.',
    'A color that looks balanced in a swatch may look dominant or invisible when placed in actual UI.',
    'Screen color decisions should always be validated on the target screen, not assumed from static design files.',
  ],
};
