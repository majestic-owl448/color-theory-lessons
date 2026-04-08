import type { LessonConfig } from '../../types/lesson.ts';

export const lesson4_5: LessonConfig = {
  id: 'u4-l5',
  unitId: 'unit-4',
  title: 'Designing Better States, Charts, and Feedback',
  description:
    'Practice adding non-color cues to semantic states, chart series, and form feedback so they remain clear regardless of color perception.',
  learningGoal:
    'Strengthen a basic state system and a chart by adding icons, labels, and patterns as backup cues.',
  estimatedMinutes: 16,
  prerequisites: ['u4-l4'],
  conceptsIntroduced: [
    'annotation',
    'chart series',
    'direct label',
    'error state',
    'info state',
    'pattern fill',
    'success state',
    'validation feedback',
    'warning state',
  ],
  interactionType: 'state-workshop',
  glossaryTerms: [
    'annotation',
    'chart series',
    'direct label',
    'error state',
    'info state',
    'pattern fill',
    'success state',
    'validation feedback',
    'warning state',
  ],
  reviewTags: ['states', 'charts', 'forms', 'backup-cues'],
  steps: [
    {
      id: 's1',
      text: 'Semantic states — success, warning, error, info — are a fundamental UI pattern. Every design system includes them. The problem is that most implementations start with color alone: a green badge, a yellow badge, a red badge. Color is a great reinforcement, but not a sufficient sole signal.',
      highlights: ['success state', 'warning state', 'error state', 'info state'],
    },
    {
      id: 's2',
      text: 'Each state should communicate through at least two channels. A success state can use green color + a checkmark icon + the label "Success". Even if color is not perceived, the icon and label still communicate the outcome.',
      highlights: ['success state', 'icon'],
    },
    {
      id: 's3',
      text: 'Form validation feedback is a specific case. A red border alone is weak. The strongest form error combines: a colored border or outline, an error icon, and a clear text message beneath the field. Validation feedback should answer "what went wrong and how to fix it."',
      highlights: ['validation feedback', 'error state'],
    },
    {
      id: 's4',
      text: 'For charts with multiple series, two strong approaches are: direct labels placed adjacent to each line or bar, eliminating the need for a separate legend; and pattern fills — hatching or textures — that make series distinguishable without relying on hue.',
      highlights: ['direct label', 'pattern fill', 'chart series', 'annotation'],
    },
    {
      id: 's5',
      text: 'A good rule: if you removed all color from your design and the meaning of every element was still clear, your design is robust. Color enhances and speeds up perception — but it should not be the only load-bearing visual signal.',
    },
  ],
  challenges: [
    {
      id: 'c1',
      prompt:
        'Add at least one non-color cue to each of the four semantic states. Toggle icon, label, and border style to build a more robust state system.',
      type: 'add-cues',
      hints: [
        'Toggle at least one of the three cues (icon, label, border) for each state card.',
        'All four states need at least one cue enabled before the challenge is complete.',
      ],
      successCriteria: 'All four states have at least one non-color cue enabled.',
    },
  ],
  quizItems: [
    {
      id: 'q1',
      prompt: 'Why is a green border alone a weak success message?',
      choices: [
        {
          id: 'a',
          label: 'Because green is not a good success color',
          isCorrect: false,
          explanation:
            'Green is conventionally associated with success. The weakness is not the color choice — it is relying on color alone.',
        },
        {
          id: 'b',
          label:
            'Because it conveys meaning only through hue, which may not be distinguishable under CVD or high-contrast settings',
          isCorrect: true,
          explanation:
            'A green border is invisible as a "success" signal to someone who cannot perceive that hue. Adding an icon and text makes the success state robust.',
        },
        {
          id: 'c',
          label: 'Because borders are not allowed in accessible designs',
          isCorrect: false,
          explanation:
            'Borders are a perfectly valid UI element. The issue is using color as the only channel.',
        },
        {
          id: 'd',
          label: 'Because success messages must always use a modal dialog',
          isCorrect: false,
          explanation:
            'Inline success feedback is a common and appropriate pattern. The form of feedback is not the issue — the lack of backup cues is.',
        },
      ],
    },
    {
      id: 'q2',
      prompt:
        'Name two ways to make chart series distinguishable beyond color.',
      choices: [
        {
          id: 'a',
          label: 'Add a legend and increase chart size',
          isCorrect: false,
          explanation:
            'A color-only legend still relies on hue. Increasing size does not solve the color-alone problem.',
        },
        {
          id: 'b',
          label: 'Use direct labels adjacent to each series; use pattern fills or different line styles',
          isCorrect: true,
          explanation:
            'Direct labels eliminate the need for a legend entirely. Pattern fills make bars or areas distinguishable without relying on hue.',
        },
        {
          id: 'c',
          label: 'Use brighter colors and add more series',
          isCorrect: false,
          explanation:
            'Brighter colors still rely on hue. More series increases the problem. Neither approach adds a non-color channel.',
        },
        {
          id: 'd',
          label: 'Convert the chart to a table and remove all colors',
          isCorrect: false,
          explanation:
            'A table can be appropriate in some contexts, but the question asks about improving charts — direct labels and patterns are chart-appropriate solutions.',
        },
      ],
    },
    {
      id: 'q3',
      prompt:
        'Which is stronger for communicating an error state?',
      choices: [
        {
          id: 'a',
          label: 'Red border only',
          isCorrect: false,
          explanation:
            'A red border alone relies entirely on hue. It is invisible as an error signal to many users under CVD or non-color contexts.',
        },
        {
          id: 'b',
          label: 'Red border + icon + error text',
          isCorrect: true,
          explanation:
            'Three channels — color, shape (icon), and text — ensure the error state is communicated even if any one channel is lost.',
        },
        {
          id: 'c',
          label: 'Error icon only, no color',
          isCorrect: false,
          explanation:
            'An icon alone is better than color alone, but combining color + icon + text is the most robust solution.',
        },
        {
          id: 'd',
          label: 'A blinking animation on the field',
          isCorrect: false,
          explanation:
            'Animation can attract attention but does not communicate the nature of the error. Multiple stable cues are more informative.',
        },
      ],
    },
  ],
  keyPoints: [
    'Semantic states (success, warning, error, info) should use at least two channels: color plus icon, label, or border style.',
    'A red border alone is a weak error signal — the strongest form feedback combines a colored border, an error icon, and a text message.',
    'Direct labels placed next to chart series eliminate the need for a color-coded legend and work for all users.',
    'Pattern fills — hatching or textures — make chart bars or areas distinguishable without relying on hue.',
    'A robust design remains clear even if color is removed — color enhances but should not be the only load-bearing signal.',
  ],
};
