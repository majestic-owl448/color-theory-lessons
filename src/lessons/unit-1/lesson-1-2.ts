import type { LessonConfig } from '../../types/lesson.ts';

export const lesson1_2: LessonConfig = {
  id: 'u1-l2',
  unitId: 'unit-1',
  title: 'Hue, Saturation, and Lightness',
  description: 'Learn the three dimensions used to describe visible color differences and predict how changing each one affects what you see.',
  learningGoal: 'Correctly identify hue, saturation, and lightness changes in most examples.',
  estimatedMinutes: 14,
  prerequisites: ['u1-l1'],
  conceptsIntroduced: ['hue', 'saturation', 'lightness', 'value', 'muted', 'vivid', 'tint', 'shade'],
  interactionType: 'slider-explore',
  glossaryTerms: ['hue', 'saturation', 'lightness', 'value', 'muted', 'vivid', 'tint', 'shade'],
  reviewTags: ['foundations', 'hue', 'saturation', 'lightness'],
  steps: [
    {
      id: 's1',
      text: 'Every visible color can be described across three independent dimensions. Changing one does not have to change the others.',
    },
    {
      id: 's2',
      text: 'Hue answers: which color family is it? Red, orange, yellow, green, blue, purple — hue is the quality we name when we say "it\'s a blue" or "it\'s a red."',
      highlights: ['hue'],
      panel: { type: 'hsl-slider-preview', dimension: 'h' },
    },
    {
      id: 's3',
      text: 'Saturation answers: how intense or muted is it? A highly saturated color looks vivid and strong. A low-saturation color looks washed out, grayish, or soft.',
      highlights: ['saturation', 'muted', 'vivid'],
      panel: { type: 'hsl-slider-preview', dimension: 's' },
    },
    {
      id: 's4',
      text: 'Lightness (also called value) answers: how light or dark is it? A tint is a lighter version of a hue. A shade is a darker version. Lightness contrast is often more important for readability than hue difference.',
      highlights: ['lightness', 'value', 'tint', 'shade'],
      panel: { type: 'hsl-slider-preview', dimension: 'l' },
    },
    {
      id: 's5',
      text: 'Use the sliders to explore each dimension. Only one slider is unlocked at a time — adjust it and notice what shifts and what stays the same.',
    },
  ],
  challenges: [
    {
      id: 'c1',
      prompt: 'Match the target color by adjusting only the dimension shown. The other two sliders are locked. When the color in your swatch is close enough, you\'ll move on.',
      type: 'match-target',
      hints: [
        'Look at whether the color family changed — that\'s hue.',
        'If it looks washed out vs vivid with the same hue, that\'s saturation.',
        'If it looks darker or lighter with no change in color family or intensity, that\'s lightness.',
      ],
      successCriteria: 'Matches all three targets within acceptable tolerance.',
    },
  ],
  quizItems: [
    {
      id: 'q1',
      prompt: 'A designer changes a button from vivid red to a soft dusty rose. The color still reads as red-ish. Which dimension changed most?',
      choices: [
        { id: 'a', label: 'Hue', isCorrect: false, explanation: 'The color family stayed in the red range — hue did not change significantly.' },
        { id: 'b', label: 'Saturation', isCorrect: true, explanation: 'Going from vivid to soft and dusty is a saturation decrease — the color becomes less intense.' },
        { id: 'c', label: 'Lightness', isCorrect: false, explanation: 'Dusty rose is lighter than vivid red, but the defining shift here is intensity, not just lightness.' },
        { id: 'd', label: 'Contrast', isCorrect: false, explanation: 'Contrast describes the relationship between two colors, not a single color change.' },
      ],
    },
    {
      id: 'q2',
      prompt: 'Which change makes a color darker without changing its family or intensity?',
      choices: [
        { id: 'a', label: 'Decreasing hue', isCorrect: false, explanation: 'Changing hue shifts the color family, not brightness.' },
        { id: 'b', label: 'Increasing saturation', isCorrect: false, explanation: 'More saturation makes a color more intense, not darker.' },
        { id: 'c', label: 'Decreasing lightness', isCorrect: true, explanation: 'Lightness controls how dark or light the color appears while hue and saturation stay the same.' },
        { id: 'd', label: 'Decreasing saturation', isCorrect: false, explanation: 'Less saturation makes a color more muted or grayish, which can look duller but not necessarily darker.' },
      ],
    },
    {
      id: 'q3',
      prompt: 'Two colors both look blue but one is bright sky blue and the other is a deep navy. Which dimension is most different between them?',
      choices: [
        { id: 'a', label: 'Hue', isCorrect: false, explanation: 'Both are in the blue family — hue is similar.' },
        { id: 'b', label: 'Saturation', isCorrect: false, explanation: 'Both can be fairly saturated blues — saturation alone does not explain sky vs navy.' },
        { id: 'c', label: 'Lightness', isCorrect: true, explanation: 'Sky blue is much lighter; navy is much darker. Lightness is the primary difference.' },
        { id: 'd', label: 'Temperature', isCorrect: false, explanation: 'Temperature is a relative quality, not one of the three HSL dimensions.' },
      ],
    },
  ],
  keyPoints: [
    'Hue is the color family — red, orange, blue, green. It is measured as a degree on a 360° wheel.',
    'Saturation is intensity: fully saturated colors are vivid; fully desaturated colors are neutral grays.',
    'Lightness is brightness: 0% is black, 100% is white, 50% with full saturation is the purest form of a hue.',
    'Tints are lighter versions of a hue (adding white); shades are darker versions (adding black).',
    'Each HSL axis can be adjusted independently — changing one does not automatically change the others.',
  ],
};
