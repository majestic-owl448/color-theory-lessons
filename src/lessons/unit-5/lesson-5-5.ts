import type { LessonConfig } from '../../types/lesson.ts';

export const lesson5_5: LessonConfig = {
  id: 'u5-l5', unitId: 'unit-5',
  title: 'A Practical Accessibility Checking Workflow',
  description: 'Build a repeatable workflow for auditing color accessibility in real interfaces — using contrast tools, simulation, and task-based checking together.',
  learningGoal: 'Apply a structured accessibility audit workflow to a real interface and identify the most important failures to fix.',
  estimatedMinutes: 15,
  prerequisites: ['u5-l4'],
  conceptsIntroduced: ['audit', 'checker', 'context', 'priority element', 'verification'],
  interactionType: 'audit-flow',
  glossaryTerms: ['audit', 'checker', 'context', 'priority element', 'verification'],
  reviewTags: ['audit', 'workflow', 'process'],
  steps: [
    { id: 's1', text: 'A contrast checker tool calculates ratio — it does not decide whether a design is accessible. Judgment still requires testing in context: at real sizes, with real content, in a realistic UI mockup.', highlights: ['checker', 'context'] },
    { id: 's2', text: 'A practical audit workflow has four stages: (1) identify priority elements — text, controls, states, and graphics that carry meaning; (2) check contrast ratios for text and components; (3) simulate CVD conditions; (4) verify tasks, not just swatches.', highlights: ['audit', 'priority element'] },
    { id: 's3', text: 'Priority elements are the ones users depend on to complete tasks: headlines, body text, buttons, input fields, links, form feedback, alerts, and chart marks. Secondary or decorative elements are lower priority.' },
    { id: 's4', text: 'After contrast checks, ask: does any element rely on color alone? If yes, add a backup cue. Then simulate — does the interface still communicate through simulation?', highlights: ['verification'] },
    { id: 's5', text: 'The audit flow tool walks you through each stage on a mock interface. Work through every step. Your goal is not to fix everything perfectly — it is to apply the full workflow at least once.' },
  ],
  challenges: [{ id: 'c1', prompt: 'Work through the full audit checklist on the mock interface — check contrast, flag color-only issues, and simulate CVD.', type: 'audit', hints: ['Start with text elements before checking controls and graphics.', 'A passing ratio does not fix a color-only problem — check both separately.', 'Simulate at least two CVD modes before marking the simulation step complete.'], successCriteria: 'All audit stages completed.' }],
  quizItems: [
    { id: 'q1', prompt: 'What does a contrast checker tool do?', choices: [{ id: 'a', label: 'It automatically repairs contrast failures', isCorrect: false, explanation: 'A checker tells you the ratio and pass/fail status — you still need to decide how to fix it.' }, { id: 'b', label: 'It calculates the contrast ratio between two colors and reports pass/fail status', isCorrect: true, explanation: 'Correct. A checker is a calculation tool, not a repair tool.' }, { id: 'c', label: 'It converts colors to accessible versions automatically', isCorrect: false, explanation: 'No standard checker auto-converts colors.' }, { id: 'd', label: 'It checks animation and motion accessibility', isCorrect: false, explanation: 'Motion accessibility is a separate concern from color contrast.' }] },
    { id: 'q2', prompt: "What does 'testing in context' mean in an accessibility audit?", choices: [{ id: 'a', label: 'Checking color chips in a palette view', isCorrect: false, explanation: 'Palette chips are a starting point, but real text at real sizes on real backgrounds is the actual test.' }, { id: 'b', label: 'Testing colors at their actual size, weight, and position in a realistic UI layout', isCorrect: true, explanation: 'A body text color that barely passes on a chip may fail in context on a colored card.' }, { id: 'c', label: 'Running automated tools only', isCorrect: false, explanation: 'Automated tools complement human judgment — they do not replace it.' }, { id: 'd', label: 'Asking other designers for their opinion', isCorrect: false, explanation: 'Peer review is useful but not a substitute for systematic in-context testing.' }] },
    { id: 'q3', prompt: 'After contrast passes, what should you check next in the workflow?', choices: [{ id: 'a', label: 'Animation and transition speed', isCorrect: false, explanation: 'Motion is a separate accessibility concern from color.' }, { id: 'b', label: 'Whether any element still relies on color alone to communicate meaning', isCorrect: true, explanation: 'Contrast and color-alone are separate concerns. A passing ratio does not fix a color-only problem.' }, { id: 'c', label: 'Typography scale', isCorrect: false, explanation: 'Typography scale affects which contrast threshold applies, but is not the next audit step.' }, { id: 'd', label: "Whether the brand palette is on-trend", isCorrect: false, explanation: 'Trend alignment is not an accessibility concern.' }] },
  ],
  keyPoints: [
    'A contrast tool calculates ratios — it does not replace judgment. Always test in realistic context.',
    'A practical audit: identify priority elements → check contrast → simulate CVD → verify tasks can be completed.',
    'Priority elements are those users depend on to complete tasks: text, buttons, inputs, feedback, alerts, chart marks.',
    'Contrast passing does not mean color-alone passing — both checks must be done separately.',
  ],
};
