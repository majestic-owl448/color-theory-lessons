import type { LessonConfig } from '../../types/lesson.ts';

export const lesson5_4: LessonConfig = {
  id: 'u5-l4', unitId: 'unit-5',
  title: 'Rebuilding Color-Only Interfaces',
  description: 'Practice identifying color-only communication failures and strengthening interfaces by adding icons, labels, patterns, and structural cues.',
  learningGoal: 'Identify color-only communication problems and rebuild weak designs with supporting cues that do not rely solely on hue.',
  estimatedMinutes: 14,
  prerequisites: ['u5-l3'],
  conceptsIntroduced: ['redundant cue', 'status message', 'validation state'],
  interactionType: 'color-alone-rebuild',
  glossaryTerms: ['redundant cue', 'status message', 'validation state'],
  reviewTags: ['color-only', 'redundancy', 'states'],
  steps: [
    { id: 's1', text: "In Unit 4, you learned to spot color-alone problems — elements where hue is the only signal. Now you will fix them. The principle (WCAG 1.4.1) is clear: color must not be the only visual means of conveying information. The goal is not to remove color but to ensure it is not the sole carrier of meaning.", highlights: ['redundant cue', 'use of color'] },
    { id: 's2', text: 'You have already seen the common patterns: status dots, validation borders, chart legends. The question now shifts from \'can I spot the problem?\' to \'how do I fix it?\' The answer is always the same: add a second channel of meaning.' },
    { id: 's3', text: "Better systems add a second channel: an error icon + a message ('Please enter a valid email'); a required asterisk + a legend; direct chart labels or patterns + a structured legend.", highlights: ['validation state', 'status message'] },
    { id: 's4', text: 'The goal is redundancy — meaning carried by two or more signals. If color fades or shifts under CVD simulation, the icon or label still communicates. If the label is hidden, the color still contributes. Multiple channels make the design robust.' },
    { id: 's5', text: 'In the rebuild tool, take each color-only example and add at least one more cue from the toolbox. The challenge is to make every state understandable without hue as the only signal.' },
  ],
  challenges: [{ id: 'c1', prompt: 'Rebuild each color-only interface pattern by adding icons, labels, borders, or patterns so meaning does not depend on hue alone.', type: 'repair', hints: ['Start by asking: if I removed hue, what would still communicate meaning?', 'An error message that includes both a red border and a clear error text is already better.', 'Direct labels on chart series are more robust than a color-only legend.'], successCriteria: 'All patterns have at least one non-color cue added.' }],
  quizItems: [
    { id: 'q1', prompt: 'A chart has a legend that uses color only to identify three series. What is the practical risk?', choices: [{ id: 'a', label: 'The chart will crash in some browsers', isCorrect: false, explanation: 'Color-only legends cause user confusion, not browser errors.' }, { id: 'b', label: 'Users with CVD or in poor viewing conditions may not distinguish the series from each other', isCorrect: true, explanation: 'Correct. Color-only legends fail users who cannot distinguish hues.' }, { id: 'c', label: 'Color-only legends always look unattractive', isCorrect: false, explanation: 'Aesthetics are not the issue — usability is.' }, { id: 'd', label: 'Legends are never used by chart readers', isCorrect: false, explanation: 'Legends are widely used, but they fail when color is their only differentiator.' }] },
    { id: 'q2', prompt: 'What does redundancy mean in accessible design?', choices: [{ id: 'a', label: 'Repeating the same content multiple times unnecessarily', isCorrect: false, explanation: 'Redundancy here means providing meaning through more than one channel.' }, { id: 'b', label: 'Conveying meaning through more than one visual channel so that losing any one does not break the design', isCorrect: true, explanation: 'Correct. Redundant cues make designs robust against accessibility failures.' }, { id: 'c', label: 'Using the same color for all states to reduce confusion', isCorrect: false, explanation: 'Same color for all states would remove distinction entirely.' }, { id: 'd', label: 'Adding extra whitespace to improve readability', isCorrect: false, explanation: 'Whitespace is a layout concept, not a redundancy strategy.' }] },
    { id: 'q3', prompt: 'Which improvement most directly addresses color-only validation?', choices: [{ id: 'a', label: 'Making the error border brighter red', isCorrect: false, explanation: 'Brighter color is still color-alone.' }, { id: 'b', label: 'Adding an error icon and a descriptive error message below the field', isCorrect: true, explanation: 'This adds two non-color signals — icon and text — that work independently of hue.' }, { id: 'c', label: 'Increasing form field padding', isCorrect: false, explanation: 'Padding improves layout, not color-only failure.' }, { id: 'd', label: 'Switching to a different font family', isCorrect: false, explanation: 'Font family has no impact on color-only validation failure.' }] },
  ],
  keyPoints: [
    'WCAG 1.4.1 requires that color is not the only means of conveying information — color should support meaning, not carry it alone.',
    'Common color-only failures: required field indicators, validation states, chart series, and selected states marked by hue only.',
    'Redundancy means carrying meaning through two or more channels — color plus icon, label, pattern, or structure.',
    'The goal is not to remove color but to ensure meaning survives when hue alone cannot be distinguished.',
  ],
};
