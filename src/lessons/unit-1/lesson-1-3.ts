import type { LessonConfig } from '../../types/lesson.ts';

export const lesson1_3: LessonConfig = {
  id: 'u1-l3',
  unitId: 'unit-1',
  title: 'Contrast and Readability',
  description: 'Learn to see contrast as a practical usability tool and identify when low contrast is making content harder to use.',
  learningGoal: 'Recognize contrast failures in common UI patterns and improve at least one broken example.',
  estimatedMinutes: 14,
  prerequisites: ['u1-l2'],
  conceptsIntroduced: ['contrast', 'readability', 'legibility', 'foreground', 'background', 'low contrast', 'high contrast'],
  interactionType: 'contrast-checker',
  glossaryTerms: ['contrast', 'readability', 'legibility', 'foreground', 'background'],
  reviewTags: ['contrast', 'readability', 'foundations'],
  steps: [
    {
      id: 's1',
      text: 'Two colors can be different and still create weak, hard-to-read contrast. A hue change is not the same as a readability improvement.',
      highlights: ['contrast'],
    },
    {
      id: 's2',
      text: 'Contrast matters everywhere text appears: labels, buttons, nav links, helper text, placeholder text. Weak contrast makes content feel effortful to read.',
      highlights: ['readability'],
    },
    {
      id: 's3',
      text: 'Lightness difference between foreground and background is the strongest driver of readable contrast. Two hues at similar lightness levels can be almost impossible to read against each other.',
      highlights: ['foreground', 'background', 'lightness'],
    },
    {
      id: 's4',
      text: 'A beautiful color palette can still fail if important information blends into the background. Good aesthetics and good readability must work together.',
    },
    {
      id: 's5',
      text: 'Try the contrast lab. Adjust the background lightness and see how readability changes. Notice when the text becomes easy to read without strain.',
    },
  ],
  challenges: [
    {
      id: 'c1',
      prompt: 'A dashboard card has three low-contrast problems: a muted label, faint helper text, and a light button on a light surface. Adjust the colors until all three areas are clearly readable.',
      type: 'adjust-contrast',
      hints: [
        'Focus on lightness difference first — hue changes alone rarely fix contrast.',
        'Helper text is often the weakest contrast in a design. Try making it darker.',
        'Button contrast depends on both the button color and the surface it sits on.',
      ],
      successCriteria: 'All three problem areas reach clearly readable contrast.',
    },
  ],
  quizItems: [
    {
      id: 'q1',
      prompt: 'True or false: two very different hues always have strong, readable contrast.',
      choices: [
        { id: 'a', label: 'True', isCorrect: false, explanation: 'Hue alone does not determine contrast. Red and green at the same lightness can have very weak readable contrast.' },
        { id: 'b', label: 'False', isCorrect: true, explanation: 'Readability depends on lightness difference, not hue difference. Two colors can share a very similar lightness level and be nearly unreadable together.' },
      ],
    },
    {
      id: 'q2',
      prompt: 'Which pair most likely has the stronger text contrast?',
      choices: [
        { id: 'a', label: 'Medium blue text on a blue-green background', isCorrect: false, explanation: 'Similar hue and similar lightness typically means weak contrast.' },
        { id: 'b', label: 'Dark navy text on a light gray background', isCorrect: true, explanation: 'A very dark foreground on a very light background creates strong lightness contrast — the most reliable source of readability.' },
        { id: 'c', label: 'Bright red text on a bright orange background', isCorrect: false, explanation: 'Both colors are bright and light — lightness difference is too small for reliable readability.' },
        { id: 'd', label: 'Saturated purple text on a saturated green background', isCorrect: false, explanation: 'High saturation on both sides does not guarantee strong contrast if lightness levels are similar.' },
      ],
    },
    {
      id: 'q3',
      prompt: 'A designer says the interface looks great because the palette is vibrant and colorful. But users struggle to read it. What is the most likely cause?',
      choices: [
        { id: 'a', label: 'Too many warm colors', isCorrect: false, explanation: 'Color temperature does not directly determine readability.' },
        { id: 'b', label: 'Insufficient lightness contrast between text and background', isCorrect: true, explanation: 'Vibrant palettes often use similar lightness levels for multiple colors, which can make text hard to distinguish from its background.' },
        { id: 'c', label: 'Too much hue variety', isCorrect: false, explanation: 'Using many hues does not automatically cause readability problems.' },
        { id: 'd', label: 'The font is too small', isCorrect: false, explanation: 'Font size affects legibility, but the question points to a color issue, not a size issue.' },
      ],
    },
  ],
  keyPoints: [
    'Contrast is the perceptible difference between foreground and background — primarily driven by lightness difference.',
    'Low contrast degrades readability, especially for users with low vision or in bright ambient light.',
    'Contrast is a property of a color pair, not a single color — a color can be high-contrast on one background and invisible on another.',
    'Both light-on-dark and dark-on-light can achieve good readability when lightness difference is sufficient.',
    'Foreground includes text, icons, and any meaningful graphic that must be distinguishable from its background.',
  ],
};
