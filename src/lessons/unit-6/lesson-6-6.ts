import type { LessonConfig } from '../../types/lesson.ts';

export const lesson6_6: LessonConfig = {
  id: 'u6-l6', unitId: 'unit-6',
  title: 'Final System Review and Modern Screen Contexts',
  description: 'Prepare for the final capstone by running a structured quality review of a color system and understanding how context affects color perception across different displays and environments.',
  learningGoal: 'Explain why context changes color perception and perform a structured quality review of a color system.',
  estimatedMinutes: 16,
  prerequisites: ['u6-l5'],
  conceptsIntroduced: ['consistency audit', 'context effect', 'simultaneous contrast', 'stress test', 'system review', 'wide-gamut display'],
  interactionType: 'system-stress',
  glossaryTerms: ['consistency audit', 'context effect', 'simultaneous contrast', 'stress test', 'system review', 'wide-gamut display'],
  reviewTags: ['review', 'context', 'systems', 'capstone-prep'],
  steps: [
    { id: 's1', text: 'Color does not exist in isolation. The same hex value can look different depending on what surrounds it: a neutral gray on a white background looks warm; the same gray on a blue background looks cool. This is context effect.', highlights: ['context effect', 'simultaneous contrast'] },
    { id: 's2', text: 'Modern wide-gamut displays can reproduce more vivid colors than sRGB screens. A saturated cyan or vivid orange that looks fine on a standard screen may appear even more intense on an iPhone, Mac, or newer monitor. Plan for this with restrained saturation choices.', highlights: ['wide-gamut display'] },
    { id: 's3', text: 'A stress test applies your color system to multiple contexts: light mode, dark mode, chart view, alert stack, and simulated CVD. Each context may reveal a weakness invisible in a single polished mockup.', highlights: ['stress test', 'system review'] },
    { id: 's4', text: 'A consistency audit checks whether roles are applied correctly across components. Common problems: the same interactive blue used for both action buttons and informational tags; error red used in decorative icons; secondary text darker than primary text.', highlights: ['consistency audit'] },
    { id: 's5', text: 'Before the final capstone, run through the stress test tool. Mark where your color system feels too weak, too loud, inconsistent, or risky. The capstone will ask you to build a full system — use this lesson to know what to watch for.' },
  ],
  challenges: [
    {
      id: 'c1',
      prompt: 'Run the stress test on the sample color system. Mark every weakness you find across light, dark, chart, alert, and simulation contexts.',
      type: 'explore-all',
      hints: [
        'Toggle between all five contexts before marking anything — the same issue might appear in multiple views.',
        'Ask: does hierarchy still work? Are states distinct? Is anything too loud or too faint?',
        'Simulation failures often appear in the chart and alert views — check those carefully.',
      ],
      successCriteria: 'All five stress test contexts reviewed.',
    },
  ],
  quizItems: [
    {
      id: 'q1',
      prompt: 'Why can the same hex color look different in different interface contexts?',
      choices: [
        { id: 'a', label: 'Browsers apply different color profiles randomly', isCorrect: false, explanation: 'Browsers do not apply random color profiles — the effect is perceptual.' },
        { id: 'b', label: 'Surrounding colors influence perception — a neutral looks warmer or cooler depending on adjacent hues', isCorrect: true, explanation: 'Simultaneous contrast means every color is perceived relative to its neighbors.' },
        { id: 'c', label: 'Hex values shift when loaded in different files', isCorrect: false, explanation: 'Hex values are exact — they do not shift between files.' },
        { id: 'd', label: 'Color memory is inaccurate', isCorrect: false, explanation: 'Color memory can be inaccurate, but that is not the explanation for simultaneous contrast.' },
      ],
    },
    {
      id: 'q2',
      prompt: 'What is the practical design lesson of wide-gamut displays?',
      choices: [
        { id: 'a', label: 'Never use saturated colors', isCorrect: false, explanation: 'Saturated colors are not forbidden — they should be used with awareness of display variation.' },
        { id: 'b', label: 'Standard sRGB is always safer and should be used exclusively', isCorrect: false, explanation: 'Wide gamut is increasingly common and worth preparing for, not avoiding.' },
        { id: 'c', label: 'Colors may appear more vivid than expected — use restrained saturation choices and test on multiple display types', isCorrect: true, explanation: 'Correct. Wide-gamut displays can make carefully chosen colors appear overwhelming on newer hardware.' },
        { id: 'd', label: 'Wide-gamut displays are only for photographers', isCorrect: false, explanation: 'Wide-gamut displays are standard on many consumer devices including phones and laptops.' },
      ],
    },
    {
      id: 'q3',
      prompt: 'What should a designer check before calling a color system finished?',
      choices: [
        { id: 'a', label: 'Whether the hex values are memorable', isCorrect: false, explanation: 'Memorability of hex values is not a quality criterion for a color system.' },
        { id: 'b', label: 'Whether the colors look good in a brand presentation', isCorrect: false, explanation: 'Brand presentation is one context — a full system review requires many more.' },
        { id: 'c', label: 'Whether the design team likes the hues', isCorrect: false, explanation: 'Team preference is not the same as system robustness.' },
        { id: 'd', label: 'Hierarchy, readability, semantic clarity, consistency, dark mode performance, chart readability, and robustness under simulation — not just palette attractiveness', isCorrect: true, explanation: 'Correct. A complete review covers all contexts, states, modes, and accessibility dimensions.' },
      ],
    },
  ],
  keyPoints: [
    'Context effect: color is perceived relative to its surroundings — the same value can look different on different backgrounds.',
    'Wide-gamut displays show more vivid colors — use restrained saturation and test across display types.',
    'A stress test applies the system across multiple contexts (modes, chart, alerts, simulation) to find weaknesses invisible in one view.',
    'A consistency audit checks that roles are applied correctly — the same button color across screens, the same error treatment everywhere.',
    'Before shipping, verify: hierarchy, text readability, semantic clarity, dark mode, chart readability, and CVD robustness.',
  ],
};
