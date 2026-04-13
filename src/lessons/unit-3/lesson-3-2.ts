import type { LessonConfig } from '../../types/lesson.ts';

export const lesson3_2: LessonConfig = {
  id: 'u3-l2',
  unitId: 'unit-3',
  title: 'HEX and RGB',
  description:
    'Explore the two most common digital color formats by editing RGB sliders and HEX values in a live dual editor — then match three target UI colors.',
  learningGoal:
    'Read and adjust HEX and RGB values to produce a target color, and explain what changes when a single channel value changes.',
  estimatedMinutes: 16,
  prerequisites: ['u3-l1'],
  conceptsIntroduced: [
    'RGB notation',
    'RGBA',
    'HEX notation',
    'shorthand HEX',
  ],
  interactionType: 'hex-rgb-editor',
  glossaryTerms: ['HEX', 'RGBA', 'shorthand HEX'],
  reviewTags: ['formats', 'HEX', 'RGB'],
  steps: [
    {
      id: 's1',
      text: 'Unit 2 covered how red, green, and blue light channels combine on screen. RGB notation writes those same channels as a code value: rgb(red, green, blue), each from 0 to 255. So rgb(0, 0, 0) is black and rgb(255, 255, 255) is white — the same additive logic, now expressed as a typed format.',
      highlights: ['red', 'green', 'blue', 'channel'],
    },
    {
      id: 's2',
      text: 'HEX is a compact way to encode the same three channels. A six-character HEX value like #1E40AF splits into three pairs: the first two are red, the next two are green, the last two are blue — each pair in base-16 notation.',
      highlights: ['HEX'],
    },
    {
      id: 's3',
      text: 'You already know that equal channel values produce neutral grays. In notation, that means rgb(120, 120, 120) writes as a mid-gray and #787878 does the same in HEX. Recognizing neutrals in both formats is a practical reading skill — when you see identical channel pairs in HEX, you can immediately tell the color is a neutral.',
      highlights: ['neutral'],
    },
    {
      id: 's4',
      text: 'Shorthand HEX compresses a value where each pair repeats: #AABBCC can be written as #ABC. This only works when each pair has two identical digits. #1E40AF cannot be shortened because none of its pairs repeat.',
      highlights: ['shorthand HEX'],
    },
    {
      id: 's5',
      text: 'RGBA adds a fourth value — the alpha channel — to RGB. In this lesson, treat it as a format preview: 0 is fully transparent and 1 is fully opaque. The next lesson focuses on how that same value behaves in layered interfaces.',
      highlights: ['RGBA', 'alpha channel'],
    },
  ],
  challenges: [
    {
      id: 'c1',
      prompt:
        'Match three target UI colors by typing HEX values. Use what you know about channel pairs to build the right hex code — the sliders are locked for this challenge.',
      type: 'identify-problem',
      hints: [
        'Start with the preset closest to the target, then fine-tune.',
        'Watch which channel dominates in the target — that tells you which slider to push higher.',
        'Equal channel values always produce a neutral. If the target has a clear hue, at least one channel must be different.',
      ],
      successCriteria: 'All three targets matched.',
    },
  ],
  quizItems: [
    {
      id: 'q1',
      prompt: 'A designer sees #4A4A4A in a stylesheet. Without converting to decimal, what can they immediately tell about this color?',
      choices: [
        {
          id: 'a',
          label: 'It is a neutral — all three channel pairs are the same',
          isCorrect: true,
          explanation:
            'When all three HEX pairs are identical (4A, 4A, 4A), no channel dominates. The result is a neutral gray. Recognizing matching pairs is a quick way to spot neutrals in HEX.',
        },
        {
          id: 'b',
          label: 'It is a dark blue — 4A is in the blue range',
          isCorrect: false,
          explanation:
            'HEX digits are not mapped to specific hues. 4A appears in all three channel positions equally, making this a neutral, not a blue.',
        },
        {
          id: 'c',
          label: 'It is invalid — HEX values must use digits 0-9 only',
          isCorrect: false,
          explanation:
            'HEX uses base-16, which includes digits 0-9 and letters A-F. 4A is a valid two-digit hex value.',
        },
        {
          id: 'd',
          label: 'Nothing — you must convert to RGB first to understand a HEX value',
          isCorrect: false,
          explanation:
            'You can read structural patterns directly in HEX. Matching pairs across all three channels immediately tells you the color is a neutral.',
        },
      ],
    },
    {
      id: 'q2',
      prompt: 'Which value is likely closer to white: #F4F4F4 or #1A1A1A?',
      choices: [
        {
          id: 'a',
          label: '#F4F4F4',
          isCorrect: true,
          explanation:
            'F4 in hex is 244 in decimal — close to the maximum of 255. High equal channel values produce a very light neutral. #1A1A1A has channels of only 26, producing a very dark neutral.',
        },
        {
          id: 'b',
          label: '#1A1A1A',
          isCorrect: false,
          explanation:
            '1A in hex is only 26 in decimal. All three channels near zero produce dark neutrals, not light ones.',
        },
        {
          id: 'c',
          label: 'They would appear identical',
          isCorrect: false,
          explanation:
            'F4 is 244 and 1A is 26. These are very different channel values producing very different brightness levels.',
        },
        {
          id: 'd',
          label: 'You cannot tell without knowing which channel is R, G, or B',
          isCorrect: false,
          explanation:
            'When all three pairs are the same, the channel order does not matter — the result is neutral and brightness is all that varies. #F4F4F4 is clearly the lighter one.',
        },
      ],
    },
    {
      id: 'q3',
      prompt: 'Which format is generally easier to reason about when you want to increase only the blue in a color?',
      choices: [
        {
          id: 'a',
          label: 'HEX, because the pair positions are fixed',
          isCorrect: false,
          explanation:
            'While HEX does have fixed positions, you would need to calculate base-16 values mentally. RGB sliders are more direct for intentional single-channel adjustments.',
        },
        {
          id: 'b',
          label: 'RGB, because each channel is a separate decimal number you can adjust directly',
          isCorrect: true,
          explanation:
            'RGB gives you three independent decimal values. Increasing the blue value directly raises blue light. HEX encodes the same data but requires converting from base-16 mentally.',
        },
        {
          id: 'c',
          label: 'Both are equally easy',
          isCorrect: false,
          explanation:
            'They encode the same information, but RGB is more readable for direct single-channel adjustments because you work in decimal, not base-16.',
        },
        {
          id: 'd',
          label: 'Neither — you should use HSL for any channel change',
          isCorrect: false,
          explanation:
            'HSL is useful for hue, saturation, and lightness adjustments, but when you specifically want to change one light channel, RGB is the more direct choice.',
        },
      ],
    },
    {
      id: 'q4',
      prompt: 'Can #ABC be a valid HEX color value?',
      choices: [
        {
          id: 'a',
          label: 'No — HEX values must always be six characters',
          isCorrect: false,
          explanation:
            'Shorthand HEX with three characters is perfectly valid in CSS. #ABC expands to #AABBCC, where each single digit is simply doubled.',
        },
        {
          id: 'b',
          label: 'Yes — it is shorthand for #AABBCC',
          isCorrect: true,
          explanation:
            'Shorthand HEX works when each channel digit in the six-character form is repeated. #ABC expands to #AABBCC — A→AA, B→BB, C→CC.',
        },
        {
          id: 'c',
          label: 'Only in older CSS versions',
          isCorrect: false,
          explanation:
            'Three-character HEX has been valid in CSS since CSS1 and remains fully supported today.',
        },
        {
          id: 'd',
          label: 'Yes — but only if A, B, and C are valid hex digits',
          isCorrect: false,
          explanation:
            'A, B, and C happen to be valid hex digits (10, 11, 12), but the answer misses the key rule: shorthand is valid for any three-character hex value, not just those using A, B, C specifically.',
        },
      ],
    },
  ],
  keyPoints: [
    'RGB notation writes the three channel values you learned in Unit 2 as rgb(red, green, blue) — a format browsers and design tools can use directly.',
    'HEX encodes the same three channels as base-16 pairs: the first two digits are red, next two green, last two blue.',
    'Matching HEX pairs (e.g. #4A4A4A) signal a neutral — a quick reading shortcut that applies the equal-channels principle from Unit 2.',
    'Shorthand HEX (#ABC) is valid only when each pair in the full six-character form is a repeated digit — #ABC expands to #AABBCC.',
    'RGBA adds a fourth value (0–1) for opacity; this lesson introduces the notation, and the next lesson covers layered behavior in depth.',
  ],
};
