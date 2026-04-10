import type { LessonConfig } from '../../types/lesson.ts';

export const lesson6_7: LessonConfig = {
  id: 'u6-l7', unitId: 'unit-6',
  title: 'Final System Review and Stress Test',
  description: 'Run a structured quality review of a color system across light mode, dark mode, charts, alerts, and CVD simulation to find weaknesses before shipping.',
  learningGoal: 'Perform a comprehensive stress test and consistency audit of a color system across multiple contexts.',
  estimatedMinutes: 16,
  prerequisites: ['u6-l6'],
  conceptsIntroduced: [
    'consistency audit',
    'stress test',
    'system review',
  ],
  interactionType: 'system-stress',
  glossaryTerms: [
    'consistency audit',
    'stress test',
    'system review',
  ],
  reviewTags: ['review', 'systems', 'capstone-prep', 'stress-test'],
  steps: [
    {
      id: 's1',
      text: 'A color system is only as good as its worst context. A palette that looks great in a marketing mockup may have weak hierarchy in dark mode, indistinguishable states in a chart, or invisible alerts under CVD simulation. A stress test exposes these hidden weaknesses.',
      highlights: ['stress test'],
    },
    {
      id: 's2',
      text: 'Apply your system to five contexts: light mode, dark mode, chart view, alert stack, and simulated CVD. Each context exercises different roles — surfaces, text hierarchy, semantic states, data encoding, and perceptual robustness.',
      highlights: ['system review'],
    },
    {
      id: 's3',
      text: 'A consistency audit checks whether roles are applied correctly across components. Common problems: the same interactive blue used for both action buttons and informational tags; error red used in decorative icons; secondary text darker than primary text.',
      highlights: ['consistency audit'],
    },
    {
      id: 's4',
      text: 'Before shipping, verify: hierarchy (is the primary action clearly dominant?), readability (does all text meet contrast thresholds?), semantic clarity (do success/warning/error feel distinct?), dark mode (do all roles still work?), chart readability (are series distinguishable?), and CVD robustness (do backup cues survive simulation?).',
    },
    {
      id: 's5',
      text: 'This is a synthesis exercise — everything from Units 1 through 6 comes together. Your visual vocabulary, additive-model understanding, format knowledge, perception awareness, accessibility skills, and systems thinking all contribute to evaluating a color system holistically.',
    },
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
      prompt: 'Why should you test a color system in multiple contexts rather than a single mockup?',
      choices: [
        { id: 'a', label: 'A single mockup is sufficient if the palette looks good', isCorrect: false, explanation: 'A palette can look great in one context and fail in others — dark mode, charts, and CVD simulation all exercise different roles.' },
        { id: 'b', label: 'Different contexts exercise different roles — weaknesses invisible in one view may appear in another', isCorrect: true, explanation: 'A stress test across modes, chart views, alerts, and CVD simulation reveals problems that no single mockup can expose.' },
        { id: 'c', label: 'Clients prefer seeing multiple mockups', isCorrect: false, explanation: 'Client preference is not the reason — functional quality is.' },
        { id: 'd', label: 'Each context requires a completely different palette', isCorrect: false, explanation: 'A well-built system uses one role set across all contexts — the test verifies that it holds up.' },
      ],
    },
    {
      id: 'q2',
      prompt: 'What does a consistency audit check?',
      choices: [
        { id: 'a', label: 'Whether all hex values are unique', isCorrect: false, explanation: 'Multiple roles can share a hex value — uniqueness is not the goal of a consistency audit.' },
        { id: 'b', label: 'Whether roles are applied correctly — the same button color across screens, the same error treatment everywhere', isCorrect: true, explanation: 'Consistency means each role has one clear meaning applied uniformly across the product.' },
        { id: 'c', label: 'Whether the palette uses fewer than ten colors', isCorrect: false, explanation: 'Color count is not what a consistency audit measures.' },
        { id: 'd', label: 'Whether the design matches a trend report', isCorrect: false, explanation: 'Trend alignment is not an aspect of consistency auditing.' },
      ],
    },
    {
      id: 'q3',
      prompt: 'What should a designer verify before calling a color system finished?',
      choices: [
        { id: 'a', label: 'Whether the hex values are memorable', isCorrect: false, explanation: 'Memorability of hex values is not a quality criterion.' },
        { id: 'b', label: 'Whether the colors look good in a brand presentation', isCorrect: false, explanation: 'Brand presentation is one context — a complete review covers many more.' },
        { id: 'c', label: 'Whether the design team likes the hues', isCorrect: false, explanation: 'Team preference is not the same as system robustness.' },
        { id: 'd', label: 'Hierarchy, readability, semantic clarity, dark mode, chart readability, and CVD robustness', isCorrect: true, explanation: 'A complete review covers all contexts, states, modes, and accessibility dimensions.' },
      ],
    },
  ],
  keyPoints: [
    'A stress test applies the system across multiple contexts — light mode, dark mode, charts, alerts, CVD simulation — to find hidden weaknesses.',
    'A consistency audit checks that roles are applied correctly: same button color across screens, same error treatment everywhere.',
    'Before shipping, verify: hierarchy, readability, semantic clarity, dark mode performance, chart readability, and CVD robustness.',
    'This is a synthesis exercise — visual vocabulary, additive model, format knowledge, perception, accessibility, and systems thinking all come together.',
  ],
};
