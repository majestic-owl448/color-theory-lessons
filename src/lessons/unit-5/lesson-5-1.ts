import type { LessonConfig } from '../../types/lesson.ts';

export const lesson5_1: LessonConfig = {
  id: 'u5-l1', unitId: 'unit-5',
  title: 'Why Accessible Color Matters',
  description: 'Discover why color accessibility is a practical usability requirement — not just a compliance checkbox — by seeing how poor color choices block real tasks.',
  learningGoal: 'Explain that accessible color is about task usability and identify several common color-related accessibility failures.',
  estimatedMinutes: 13,
  prerequisites: ['u4-l6'],
  conceptsIntroduced: ['accessibility', 'color-only meaning', 'state indicator', 'usability', 'visual affordance'],
  interactionType: 'broken-usable-cards',
  glossaryTerms: ['accessibility', 'color-only meaning', 'state indicator', 'usability', 'visual affordance'],
  reviewTags: ['accessibility', 'usability', 'color-only'],
  steps: [
    { id: 's1', text: 'Accessible color design is a usability practice, not just a legal requirement. Poor color choices — low contrast text, invisible control boundaries, or meaning carried only by hue — can prevent users from completing real tasks.', highlights: ['accessibility', 'usability'] },
    { id: 's2', text: 'Many users encounter color challenges: low vision, color vision deficiency, tired eyes, dim screens, and bright sunlight. Accessible color choices work for all of them — not only the users you picture first.', highlights: ['low vision', 'color vision deficiency'] },
    { id: 's3', text: 'Low contrast text is one of the most common failures. If the difference in lightness between text and background is too small, reading becomes a strain or impossibility at normal sizes.' },
    { id: 's4', text: 'Color-only state signals are another common failure. A red error message, a green success badge, or a blue selected state — when color is the only cue, users who cannot distinguish those colors are blocked.', highlights: ['color-only meaning', 'state indicator'] },
    { id: 's5', text: 'The cards in this tool show real-world interface patterns. Your job is to classify each as Usable (clear and reliable), Risky (works in ideal conditions but fragile), or Broken (likely fails a task). Focus on what a user can and cannot do — not on aesthetics.', highlights: ['visual affordance'] },
  ],
  challenges: [{ id: 'c1', prompt: 'Classify each interface card as Usable, Risky, or Broken based on its color choices.', type: 'sort', hints: ['Ask: can a user read this, find the control, and act on it?', 'A Broken card fails one essential task. A Risky card might work in ideal conditions. A Usable card is reliable.', 'Focus on the task — not on whether it looks attractive.'], successCriteria: 'All cards correctly classified.' }],
  quizItems: [
    { id: 'q1', prompt: 'Is accessible color mainly about legal compliance or task usability?', choices: [{ id: 'a', label: 'Legal compliance only', isCorrect: false, explanation: 'Accessibility law exists, but the real reason to care is usability — whether users can actually complete tasks.' }, { id: 'b', label: 'Task usability — whether users can read, find, and act on interface elements', isCorrect: true, explanation: 'Correct. Accessibility failures block task completion, not just checkbox status.' }, { id: 'c', label: 'Visual style preference', isCorrect: false, explanation: 'Style preference has nothing to do with accessibility requirements.' }, { id: 'd', label: 'Developer preference', isCorrect: false, explanation: 'Developer preference is not an accessibility criterion.' }] },
    { id: 'q2', prompt: 'Which users benefit from accessible color choices?', choices: [{ id: 'a', label: 'Only users with color blindness', isCorrect: false, explanation: 'Accessible color also helps users with low vision, in bright sunlight, on dim screens, and with visual fatigue.' }, { id: 'b', label: 'Any user experiencing low vision, CVD, glare, dim screens, or visual fatigue — a wide range', isCorrect: true, explanation: 'Correct. Accessible color design benefits a wide range of users in many conditions.' }, { id: 'c', label: 'Only users who request accessibility accommodations', isCorrect: false, explanation: 'Most users with accessibility needs do not formally request accommodations.' }, { id: 'd', label: 'Users with complete vision loss only', isCorrect: false, explanation: 'Users with complete vision loss rely on screen readers, not color. Accessible color helps many other users.' }] },
    { id: 'q3', prompt: 'A designer uses only a green border to indicate a valid form field. Why is this a problem?', choices: [{ id: 'a', label: 'Green is too bright and hurts the eyes', isCorrect: false, explanation: 'Color brightness is not the issue here.' }, { id: 'b', label: 'Color alone carries the meaning — users who cannot distinguish the green will not know the field is valid', isCorrect: true, explanation: 'Without a checkmark, label, or other cue, the meaning depends entirely on hue.' }, { id: 'c', label: 'The border color does not match the brand palette', isCorrect: false, explanation: 'Brand palette alignment is not an accessibility concern.' }, { id: 'd', label: 'Green text is always inaccessible', isCorrect: false, explanation: 'Green text can be accessible with sufficient contrast — that is not the issue here.' }] },
  ],
  keyPoints: [
    'Accessible color is a usability practice: poor choices block reading, interaction, and task completion.',
    'Many users encounter color challenges — low vision, CVD, glare, fatigue, dim screens — accessible color helps all of them.',
    'Low contrast text is one of the most common and easiest-to-fix failures in digital interfaces.',
    'Color-only signals (error states, selected states, chart series) leave users who cannot distinguish colors without the information they need.',
  ],
};
