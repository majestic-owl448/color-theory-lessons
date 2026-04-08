import type { LessonConfig } from '../../types/lesson.ts';

export const lesson3_7: LessonConfig = {
  id: 'u3-l7',
  unitId: 'unit-3',
  title: 'Color Spaces and Practical Implementation Awareness',
  description:
    'Understand sRGB, Display P3, and why code-defined color still needs accessibility checking — plus see how color appears in CSS, SVG, and Canvas contexts.',
  learningGoal:
    'Describe sRGB as a baseline, explain why Display P3 requires caution, and recognize that all digital color contexts still need accessibility review.',
  estimatedMinutes: 14,
  prerequisites: ['u3-l6'],
  conceptsIntroduced: [
    'sRGB',
    'Display P3',
    'color space',
    'color gamut',
    'Canvas',
    'SVG',
    'WebGL',
    'contrast checker',
  ],
  interactionType: 'color-space-lab',
  glossaryTerms: [
    'sRGB',
    'Display P3',
    'color space',
    'Canvas',
    'SVG',
    'WebGL',
    'contrast checker',
  ],
  reviewTags: ['formats', 'color-spaces', 'sRGB', 'Display-P3', 'implementation'],
  steps: [
    {
      id: 's1',
      text: 'sRGB is the standard color space for most web work. It defines the range of colors that virtually every screen can display. When you write a HEX, RGB, or HSL value in CSS, you are working in sRGB by default.',
      highlights: ['sRGB', 'color space'],
    },
    {
      id: 's2',
      text: 'Display P3 is a wider color space available on many modern screens — especially Apple devices. It can represent more vivid colors than sRGB. But if a user\'s screen does not support P3, those extra-vivid colors may be clipped back to the nearest sRGB equivalent.',
      highlights: ['Display P3', 'color gamut'],
    },
    {
      id: 's3',
      text: 'Colors appear not only in CSS but in SVG graphics, HTML Canvas elements, and even WebGL scenes. Each rendering context uses explicit color values — a chart bar in Canvas, an icon fill in SVG, a 3D surface in WebGL. The context changes, but the need for careful color decisions does not.',
      highlights: ['Canvas', 'SVG', 'WebGL'],
    },
    {
      id: 's4',
      text: 'A valid color in code is not automatically accessible. A vivid P3 green on a dark surface might look stunning but still fail contrast checks. Color tools and contrast checkers remain necessary even when every value compiles cleanly.',
      highlights: ['contrast checker'],
    },
    {
      id: 's5',
      text: 'The lab on the right shows a color in sRGB and simulated Display P3 side by side, plus the same color applied in CSS, SVG, and Canvas contexts. Explore, then sort items into raw value, semantic role, or rendering context.',
    },
  ],
  challenges: [
    {
      id: 'c1',
      prompt:
        'Sort items into three categories: raw value, semantic role, or rendering/device context. Then identify which colors might be risky in a sRGB-only environment.',
      type: 'sort',
      hints: [
        'A raw value is a specific number like #0B57D0 or rgb(34, 34, 34).',
        'A semantic role is a token name like --color-text-primary or --color-success-bg.',
        'A rendering context is where the color appears: Display P3, Canvas chart fill, SVG icon fill.',
      ],
      successCriteria: 'All items correctly sorted.',
    },
  ],
  quizItems: [
    {
      id: 'q1',
      prompt: 'Which is the safer baseline for most web design work?',
      choices: [
        {
          id: 'a',
          label: 'Display P3 — because it has more vivid colors',
          isCorrect: false,
          explanation:
            'P3 offers wider gamut, but not all screens support it. sRGB is the safe baseline that works everywhere.',
        },
        {
          id: 'b',
          label: 'sRGB — because it is supported by virtually all screens',
          isCorrect: true,
          explanation:
            'sRGB is the universal default. Designing in sRGB first ensures your colors render consistently, then you can enhance with P3 where supported.',
        },
        {
          id: 'c',
          label: 'Neither — CSS automatically picks the right one',
          isCorrect: false,
          explanation:
            'CSS uses sRGB by default for standard color functions. The designer still needs to be aware of the color space.',
        },
        {
          id: 'd',
          label: 'It depends on which browser the user prefers',
          isCorrect: false,
          explanation:
            'Browser support matters, but sRGB is the safe universal baseline regardless of browser. P3 is the enhancement.',
        },
      ],
    },
    {
      id: 'q2',
      prompt: 'If a color compiles correctly in code, is it automatically accessible?',
      choices: [
        {
          id: 'a',
          label: 'Yes — valid code means the color meets accessibility requirements',
          isCorrect: false,
          explanation:
            'A valid CSS value only means the syntax is correct. It says nothing about contrast, readability, or whether meaning depends on color alone.',
        },
        {
          id: 'b',
          label: 'No — accessibility still requires checking contrast, readability, and meaning beyond color',
          isCorrect: true,
          explanation:
            'Code validity and design quality are separate concerns. A perfectly valid bright yellow text on white background would be nearly unreadable.',
        },
        {
          id: 'c',
          label: 'Only if the color is within the sRGB range',
          isCorrect: false,
          explanation:
            'Being in sRGB ensures display consistency but not accessibility. Contrast and meaning still need checking.',
        },
        {
          id: 'd',
          label: 'Yes — browsers automatically adjust colors for accessibility',
          isCorrect: false,
          explanation:
            'Browsers render what you specify. They do not automatically fix poor contrast or color-only meaning.',
        },
      ],
    },
    {
      id: 'q3',
      prompt: 'Does the rendering context (Canvas, SVG, HTML) change whether color choices need testing?',
      choices: [
        {
          id: 'a',
          label: 'Yes — Canvas and SVG handle accessibility automatically',
          isCorrect: false,
          explanation:
            'Neither Canvas nor SVG provides automatic accessibility. The designer must ensure contrast and meaning in every context.',
        },
        {
          id: 'b',
          label: 'No — color choices in any rendering context still need contrast and accessibility review',
          isCorrect: true,
          explanation:
            'Whether a color appears in a CSS button, an SVG icon, or a Canvas chart bar, the same design judgment applies: is it readable, distinguishable, and accessible?',
        },
        {
          id: 'c',
          label: 'Only Canvas needs testing because it does not use CSS',
          isCorrect: false,
          explanation: 'All rendering contexts need color review. SVG and HTML are not exempt just because they are part of the DOM.',
        },
        {
          id: 'd',
          label: 'Only if you are using Display P3 colors',
          isCorrect: false,
          explanation:
            'Accessibility checking applies to all colors in all color spaces and all rendering contexts — not just wide-gamut colors.',
        },
      ],
    },
  ],
  keyPoints: [
    'sRGB is the default color space for web work — supported by virtually all screens and the safe baseline for consistent rendering.',
    'Display P3 can represent more vivid colors on supported screens, but unsupported devices will clip those colors back to sRGB.',
    'Colors appear in CSS, SVG, Canvas, and WebGL contexts. The rendering context changes, but the need for thoughtful color decisions does not.',
    'A valid color in code is not automatically accessible — contrast, readability, and meaning must still be checked.',
    'Design for sRGB first, then enhance with wider gamut where supported. Always verify with contrast tools and visual testing.',
  ],
};
