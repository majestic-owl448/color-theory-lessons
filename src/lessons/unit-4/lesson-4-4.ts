import type { LessonConfig } from '../../types/lesson.ts';

export const lesson4_4: LessonConfig = {
  id: 'u4-l4',
  unitId: 'unit-4',
  title: 'When Color Alone Fails',
  description:
    'Identify the "color alone" design problem and learn to spot it in common UI patterns such as status indicators, form validation, and charts.',
  learningGoal:
    'Define "color alone" as a design problem and identify at least three common examples in real interfaces.',
  estimatedMinutes: 14,
  prerequisites: ['u4-l3'],
  conceptsIntroduced: [
    'chart key',
    'legend',
    'icon',
    'label',
    'pattern',
    'selected state',
    'semantic state',
    'use of color',
  ],
  interactionType: 'color-only-detector',
  glossaryTerms: [
    'chart key',
    'legend',
    'icon',
    'label',
    'pattern',
    'selected state',
    'semantic state',
    'use of color',
  ],
  reviewTags: ['color-alone', 'wcag', 'accessibility', 'ui-patterns'],
  steps: [
    {
      id: 's1',
      text: '"Color alone" means that the meaning of an element is conveyed only by a hue difference — no shape, icon, label, pattern, or other visual signal backs it up. WCAG 1.4.1 "Use of Color" requires that color is not the only visual means of conveying information.',
      highlights: ['use of color'],
    },
    {
      id: 's2',
      text: 'A common failure: status dots. A red dot means error; a green dot means success. If the only difference is the hue, a user with CVD — or someone viewing in a low-color context — has no other way to distinguish them.',
      highlights: ['semantic state'],
    },
    {
      id: 's3',
      text: 'Form validation is another common failure. A red border on an invalid field relies on color alone unless there is also an error icon and a text message. The colored border is a nice reinforcement, but it cannot be the only signal.',
      highlights: ['label', 'icon'],
    },
    {
      id: 's4',
      text: 'Charts and maps often encode data series using only hue differences in the legend. Under CVD simulation, those series may look identical. Direct data labels, pattern fills, or different line styles add backup cues that survive color loss.',
      highlights: ['chart key', 'legend', 'pattern'],
    },
    {
      id: 's5',
      text: 'Redundant cues benefit all users — not just those with CVD. In bright sunlight, on a grayscale printout, or when scanning quickly, multiple cues help everyone understand the interface more reliably.',
      highlights: ['selected state'],
    },
  ],
  challenges: [
    {
      id: 'c1',
      prompt:
        'Review the six UI examples and click all of the ones where meaning depends only on color with no other supporting cue.',
      type: 'add-cues',
      hints: [
        'Look for elements where removing the color difference would leave no other way to understand the meaning.',
        'Three of the six examples have the color-alone problem. The others have a backup cue.',
      ],
      successCriteria: 'All three color-only examples identified.',
    },
  ],
  quizItems: [
    {
      id: 'q1',
      prompt: 'What does "color alone" mean as a design problem?',
      choices: [
        {
          id: 'a',
          label: 'Using too many colors in the same interface',
          isCorrect: false,
          explanation:
            'Having many colors is a different issue. "Color alone" means a single element\'s meaning is carried only by hue, with no other cue.',
        },
        {
          id: 'b',
          label:
            'The meaning of an element is conveyed only by hue difference, with no other visual signal',
          isCorrect: true,
          explanation:
            'WCAG 1.4.1 requires that color is not the only means of conveying information. If removing the color difference removes all meaning, the design has a color-alone problem.',
        },
        {
          id: 'c',
          label: 'Using colors that fail contrast ratio thresholds',
          isCorrect: false,
          explanation:
            'Contrast ratio failures are a separate accessibility issue. Color-alone is about whether non-color signals also carry meaning.',
        },
        {
          id: 'd',
          label: 'Designing with a single-color palette',
          isCorrect: false,
          explanation:
            'A monochromatic palette is a design choice. Color-alone is about whether meaning can be understood without relying on hue distinctions.',
        },
      ],
    },
    {
      id: 'q2',
      prompt: 'Name two common examples of color-only design failures.',
      choices: [
        {
          id: 'a',
          label: 'Low-contrast text and oversaturated backgrounds',
          isCorrect: false,
          explanation:
            'These are contrast and saturation issues, not color-alone failures. Color-alone means meaning is conveyed by hue difference with no backup.',
        },
        {
          id: 'b',
          label:
            'Red/green status dots with no labels; chart series distinguished only by hue',
          isCorrect: true,
          explanation:
            'Both rely entirely on hue to carry meaning. Remove the color and nothing else communicates the status or series identity.',
        },
        {
          id: 'c',
          label: 'Using more than four colors in a chart; dark text on dark backgrounds',
          isCorrect: false,
          explanation:
            'Dark-on-dark is a contrast failure. Using many colors may cause clutter but is not the same as color-alone.',
        },
        {
          id: 'd',
          label: 'Using blue links and animated transitions',
          isCorrect: false,
          explanation:
            'Blue underlined links have a shape backup cue (underline) and are generally not a color-alone problem.',
        },
      ],
    },
    {
      id: 'q3',
      prompt: 'Why is a backup cue helpful even for users without CVD?',
      choices: [
        {
          id: 'a',
          label: 'It is not — backup cues are only necessary for CVD users',
          isCorrect: false,
          explanation:
            'Multiple cues benefit all users. Bright sunlight, grayscale printing, quick scanning, and fatigue all reduce effective color perception.',
        },
        {
          id: 'b',
          label:
            'Multiple cues reinforce clarity for all users, not just those with color differences',
          isCorrect: true,
          explanation:
            'Icons, labels, and patterns make meaning clearer and faster to process in any conditions — bright light, inattention, or fast scanning.',
        },
        {
          id: 'c',
          label: 'Backup cues make the interface more colorful and engaging',
          isCorrect: false,
          explanation:
            'Backup cues add clarity through non-color channels. Their benefit is robustness, not visual decoration.',
        },
        {
          id: 'd',
          label: 'Backup cues are required by law for all interfaces',
          isCorrect: false,
          explanation:
            'WCAG guidelines address this, but the practical benefit extends beyond compliance — multiple cues help all users regardless of legal requirements.',
        },
      ],
    },
  ],
  keyPoints: [
    '"Color alone" is a design problem where the meaning of an element depends entirely on hue difference, with no icon, label, shape, or pattern as backup.',
    'WCAG 1.4.1 "Use of Color" requires that color is not the only visual means of conveying information.',
    'Common failures: status dots with no labels, form validation with only a colored border, chart series distinguished only by hue.',
    'Backup cues — icons, labels, patterns, text — make meaning survive color loss.',
    'Redundant cues benefit all users: bright sunlight, grayscale contexts, and fast scanning all reduce effective color perception.',
  ],
};
