import type { LessonConfig } from '../../types/lesson.ts';

export const lesson6_1: LessonConfig = {
  id: 'u6-l1', unitId: 'unit-6',
  title: 'From Individual Colors to Color Systems',
  description: 'Discover why semantic color roles are more useful than individual hex decisions, and learn to identify the difference between ad-hoc and system-level color thinking.',
  learningGoal: 'Explain the benefit of semantic color roles and assign roles to a simple interface palette.',
  estimatedMinutes: 15,
  prerequisites: ['u5-l6'],
  conceptsIntroduced: ['color system', 'consistency'],
  interactionType: 'system-comparison',
  glossaryTerms: ['color system', 'consistency', 'semantic role'],
  reviewTags: ['systems', 'roles', 'consistency'],
  steps: [
    { id: 's1', text: 'A designer picking a new color for every button, card, and state creates an interface that slowly becomes inconsistent. When the same blue means \'primary action\' on one screen and \'informational note\' on another, users lose confidence.', highlights: ['color system', 'consistency'] },
    { id: 's2', text: 'Unit 3 introduced semantic roles — naming colors by job rather than value. A color system takes that idea further: it enforces consistent role usage across every screen and component, so the same role always means the same thing product-wide.', highlights: ['semantic role'] },
    { id: 's3', text: 'Semantic roles describe what a color does, not just what value it is. \'button-primary-bg\' is more useful in a product than \'blue-500\' because it tells the team what that color is for.' },
    { id: 's4', text: 'A minimal system does not need to be large. Even a compact set of 8–12 roles can support a full product\'s components and states, if each role has a clear job and is used consistently.' },
    { id: 's5', text: 'In the comparison tool, you will see two versions of the same interface: one with ad-hoc color choices, and one with a consistent role-based system. Click the inconsistencies in the ad-hoc version to reveal what broke and why.' },
  ],
  challenges: [
    {
      id: 'c1',
      prompt: 'Identify every visual inconsistency in the ad-hoc interface version and explain which semantic role assignment would fix it.',
      type: 'identify-problem',
      hints: [
        'Look for: same element with different colors on different screens, accent used for both interactive and decorative purposes, success and info colors that are too similar.',
        'Each inconsistency can be traced back to a missing role or a role used for two different purposes.',
        'A good system has one clear answer for "what color should this button be?"',
      ],
      successCriteria: 'All inconsistencies identified.',
    },
  ],
  quizItems: [
    {
      id: 'q1',
      prompt: 'What is the main advantage of semantic color roles over storing decisions as hex values?',
      choices: [
        { id: 'a', label: 'Hex values are harder to type', isCorrect: false, explanation: 'Ease of typing is not the reason semantic roles are used.' },
        { id: 'b', label: 'Semantic roles describe what a color does, making decisions reusable and product-consistent', isCorrect: true, explanation: 'Correct. \'action-primary\' tells the whole team what that color is for, regardless of its current hex value.' },
        { id: 'c', label: 'Semantic roles use less memory', isCorrect: false, explanation: 'Memory usage is not affected by how color names are organized.' },
        { id: 'd', label: 'Hex values cannot be changed later', isCorrect: false, explanation: 'Hex values can always be changed — that is not the advantage of semantic roles.' },
      ],
    },
    {
      id: 'q2',
      prompt: 'A product uses the same bright blue for primary buttons, informational callouts, and decorative dividers. What is the risk?',
      choices: [
        { id: 'a', label: 'The blue may go out of fashion', isCorrect: false, explanation: 'Visual trends are not the primary risk here.' },
        { id: 'b', label: 'The blue carries too many different meanings — users cannot tell what is interactive and what is decorative', isCorrect: true, explanation: 'Correct. When one color does too many jobs, users cannot tell what is interactive and what is purely visual.' },
        { id: 'c', label: 'Blue is not accessible', isCorrect: false, explanation: 'Blue can be accessible — the issue here is overuse and mixed meaning, not the hue itself.' },
        { id: 'd', label: 'Decorative elements should always match buttons', isCorrect: false, explanation: 'Decorative elements should generally not match interactive elements — that is the source of the problem.' },
      ],
    },
    {
      id: 'q3',
      prompt: 'Which name is more useful in a design system?',
      choices: [
        { id: 'a', label: '#2563EB', isCorrect: false, explanation: 'A hex value tells you the color but not its purpose.' },
        { id: 'b', label: 'blue-500', isCorrect: false, explanation: 'A scale name describes position but not function.' },
        { id: 'c', label: 'action-primary-bg', isCorrect: true, explanation: 'This tells every designer and developer what the color is for, which prevents misuse and inconsistency.' },
        { id: 'd', label: 'accent', isCorrect: false, explanation: 'Too vague — every component might interpret \'accent\' differently.' },
      ],
    },
  ],
  keyPoints: [
    'Color systems assign jobs to colors — a semantic role defines what a color does, not just its value.',
    'Consistent role use is what makes a product feel coherent across many screens and components.',
    'A compact set of 8–12 roles can support a full product if each role is clearly defined and consistently applied.',
    'Semantic names like action-primary-bg are more useful than hex values or scale positions in collaborative product work.',
  ],
};
