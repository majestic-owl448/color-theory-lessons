import type { LessonConfig } from '../../types/lesson.ts';

export const lesson1_4: LessonConfig = {
  id: 'u1-l4',
  unitId: 'unit-1',
  title: 'Warm and Cool Colors in Practice',
  description: 'Understand warm and cool color tendencies as a useful design lens — not a rigid rule.',
  learningGoal: 'Use warm/cool language appropriately and make a basic mood-based palette adjustment.',
  estimatedMinutes: 11,
  prerequisites: ['u1-l2'],
  conceptsIntroduced: ['warm', 'cool', 'neutral', 'energetic', 'calm', 'palette mood'],
  interactionType: 'palette-builder',
  glossaryTerms: ['warm', 'cool', 'neutral', 'palette mood'],
  reviewTags: ['temperature', 'foundations', 'visual-vocabulary'],
  steps: [
    {
      id: 's1',
      text: 'Colors tend to feel warm (reds, oranges, yellows) or cool (blues, greens, blue-purples). Neutrals like grays and beiges sit in between.',
      highlights: ['warm', 'cool'],
    },
    {
      id: 's2',
      text: 'Warm colors often feel more active, urgent, or close. Cool colors often feel calmer, more distant, or more professional. These are tendencies, not universal truths.',
    },
    {
      id: 's3',
      text: 'Neutrals are essential to most good interfaces. They provide breathing room and keep stronger colors from overpowering the layout.',
      highlights: ['neutral'],
    },
    {
      id: 's4',
      text: 'Context changes everything. A red button in a mostly cool interface creates energy and urgency. The same red in a palette of equally loud warm colors might not stand out at all.',
    },
    {
      id: 's5',
      text: 'Sort the swatches below into warm, cool, or neutral. Then see how your choices affect the overall tone of a simple interface.',
    },
  ],
  challenges: [
    {
      id: 'c1',
      prompt: 'Sort each swatch into the warm, cool, or neutral category. Then choose the palette direction that best fits each of the three interface goals shown.',
      type: 'identify-problem',
      hints: [
        'Focus on the overall hue family — orange-to-red is warm, blue-to-green is cool.',
        'When in doubt about a color\'s temperature, compare it to a clearly warm or cool reference.',
        'For interface goals, think about mood and tone before visual appeal.',
      ],
      successCriteria: 'Sorts all swatches correctly and matches palette directions to interface goals.',
    },
  ],
  quizItems: [
    {
      id: 'q1',
      prompt: 'Which palette feels cooler overall?',
      choices: [
        { id: 'a', label: 'Navy, slate, dusty teal, off-white', isCorrect: true, explanation: 'Navy and teal are cool hues. Slate and off-white are neutral. The overall tendency is cool.' },
        { id: 'b', label: 'Terracotta, peach, sand, warm brown', isCorrect: false, explanation: 'Terracotta, peach, and warm brown are all in the warm range.' },
        { id: 'c', label: 'Forest green, gold, cream, tan', isCorrect: false, explanation: 'Gold, cream, and tan are warm. Forest green is cool but it is outnumbered by warm tones here.' },
        { id: 'd', label: 'Coral, rust, ivory, stone', isCorrect: false, explanation: 'Coral and rust push the palette toward warm.' },
      ],
    },
    {
      id: 'q2',
      prompt: 'A fintech dashboard uses mostly cool grays and blues. The designer wants to create urgency around an expiring offer. Which addition makes the most sense?',
      choices: [
        { id: 'a', label: 'A slightly warmer blue', isCorrect: false, explanation: 'A variation within the existing cool palette will not create contrast or urgency.' },
        { id: 'b', label: 'A brighter, lighter gray', isCorrect: false, explanation: 'Lightness contrast can create emphasis, but without a temperature shift, urgency is harder to signal.' },
        { id: 'c', label: 'A warm orange or amber accent', isCorrect: true, explanation: 'A warm accent in a cool palette stands out immediately and reads as a signal, not just a visual choice.' },
        { id: 'd', label: 'A softer teal', isCorrect: false, explanation: 'Staying within the same cool temperature family reduces contrast, not increases it.' },
      ],
    },
    {
      id: 'q3',
      prompt: 'Which statement is most accurate about warm and cool colors in UI design?',
      choices: [
        { id: 'a', label: 'Warm colors always mean danger or error.', isCorrect: false, explanation: 'Red is often used for errors by convention, but orange and yellow are common for CTAs and warnings — context determines meaning.' },
        { id: 'b', label: 'Cool colors always feel more professional.', isCorrect: false, explanation: 'This is a tendency in some industries, not a design law. Many serious brands use warm palettes.' },
        { id: 'c', label: 'Warm and cool tendencies are useful starting points that depend on context.', isCorrect: true, explanation: 'Temperature is a tool, not a rule. The effect of warm vs cool always depends on the surrounding palette and the product\'s goals.' },
        { id: 'd', label: 'Neutral colors do not affect palette temperature.', isCorrect: false, explanation: 'Neutrals can lean warm (beige, sand, warm gray) or cool (blue-gray, cool white). Their temperature contributes to the overall palette mood.' },
      ],
    },
  ],
  keyPoints: [
    'Warm colors (reds, oranges, yellows) tend to feel energetic, active, or urgent.',
    'Cool colors (blues, greens, purples) tend to feel calm, reassuring, or receding.',
    'Temperature affects perceived emotional tone and can influence brand personality.',
    'Neutrals can lean warm (beige, warm gray) or cool (blue-gray) — they are not temperature-neutral by default.',
    'Temperature tendencies are starting points, not fixed rules; context and pairing always shape the final effect.',
  ],
};
