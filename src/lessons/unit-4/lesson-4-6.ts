import type { LessonConfig } from '../../types/lesson.ts';

export const lesson4_6: LessonConfig = {
  id: 'u4-l6',
  unitId: 'unit-4',
  title: 'Simulation, Testing, and Everyday Workflow',
  description:
    'Build a repeatable inclusive design workflow: simulate, task-check, add cues, and review — integrating color robustness into regular practice.',
  learningGoal:
    'Describe a practical review workflow that integrates CVD simulation and task-based checking into the design process.',
  estimatedMinutes: 14,
  prerequisites: ['u4-l5'],
  conceptsIntroduced: [
    'approximation',
    'inclusive design',
    'review pass',
    'robustness',
    'task check',
    'user test',
    'workflow',
  ],
  interactionType: 'inclusive-review',
  glossaryTerms: [
    'approximation',
    'inclusive design',
    'review pass',
    'robustness',
    'task check',
    'user test',
    'workflow',
  ],
  reviewTags: ['workflow', 'inclusive-design', 'testing'],
  steps: [
    {
      id: 's1',
      text: 'Simulation is a useful approximation, but it is not a perfect substitute for user research. Different people with the same CVD type can still have different experiences. Simulation gives you a fast first pass — it does not give you a complete picture.',
      highlights: ['approximation', 'simulation'],
    },
    {
      id: 's2',
      text: 'The most valuable question during simulated review is not "do the colors look different?" but "can the user complete the task?" Run through the core user flows — fill a form, read a chart, understand a status indicator — while viewing the interface in simulation mode.',
      highlights: ['task check', 'review pass'],
    },
    {
      id: 's3',
      text: 'A repeatable inclusive design workflow: (1) View in normal mode and identify all elements that use color to carry meaning. (2) Switch to each simulation mode and identify which elements become ambiguous. (3) Add backup cues to all ambiguous elements. (4) Re-check in simulation mode.',
      highlights: ['workflow', 'inclusive design'],
    },
    {
      id: 's4',
      text: 'Inclusive checks should happen early in the design process, not only as a final compliance step. Structural changes — like adding a second column to a legend or switching from color-only dots to labeled badges — are much cheaper to make before designs are locked.',
      highlights: ['robustness'],
    },
    {
      id: 's5',
      text: 'User testing with people who have CVD adds value that simulation cannot provide: real reactions, task completion rates, and the nuances of individual experience. Even occasional user testing significantly improves your understanding beyond what any filter can show.',
      highlights: ['user test'],
    },
  ],
  challenges: [
    {
      id: 'c1',
      prompt:
        'Work through the inclusive review checklist for the sample interface. Mark each item as Pass or Needs Work based on what you observe.',
      type: 'explore-all',
      hints: [
        'Read each checklist item carefully. The sample interface has real problems — look for them.',
        'For each item, ask: can a user complete the task without relying on hue alone?',
      ],
      successCriteria: 'All checklist items assessed.',
    },
  ],
  quizItems: [
    {
      id: 'q1',
      prompt: 'Is simulation a perfect representation of a CVD user\'s experience?',
      choices: [
        {
          id: 'a',
          label: 'Yes — simulation shows exactly what every CVD user sees',
          isCorrect: false,
          explanation:
            'Simulation is a mathematical approximation. Real users with the same CVD type can still vary, and context affects perception in ways a filter cannot capture.',
        },
        {
          id: 'b',
          label:
            'No — it is a useful approximation, and real user testing still adds value',
          isCorrect: true,
          explanation:
            'Simulation gives a fast first-pass check. User testing provides real task completion data and individual nuance that simulation cannot replicate.',
        },
        {
          id: 'c',
          label: 'Yes — all protan users see the same filtered result',
          isCorrect: false,
          explanation:
            'Even within the same CVD category, individuals vary. Simulation is an average approximation, not a perfect individual model.',
        },
        {
          id: 'd',
          label: 'No — simulation is inaccurate and should not be used',
          isCorrect: false,
          explanation:
            'Simulation is a valuable tool despite being an approximation. The key is to use it as a first-pass check, not as the only check.',
        },
      ],
    },
    {
      id: 'q2',
      prompt: 'What should you look for during a simulated review?',
      choices: [
        {
          id: 'a',
          label: 'Whether the colors still look different from each other',
          isCorrect: false,
          explanation:
            'Colors may still be slightly different while being indistinguishable in practice. The relevant question is whether tasks can be completed, not whether colors differ.',
        },
        {
          id: 'b',
          label:
            'Whether the user can still complete the task, not just whether colors look different',
          isCorrect: true,
          explanation:
            'Task completion is the meaningful measure. Even if colors are subtly different, a status indicator that requires perfect hue discrimination to interpret is a design problem.',
        },
        {
          id: 'c',
          label: 'Whether the interface looks visually appealing in simulation mode',
          isCorrect: false,
          explanation:
            'Aesthetic appearance under simulation is not the goal. The goal is functional clarity — can the user accomplish their task?',
        },
        {
          id: 'd',
          label: 'Whether the page renders without JavaScript errors',
          isCorrect: false,
          explanation:
            'Technical errors are a separate concern. Simulated review is about functional and perceptual accessibility.',
        },
      ],
    },
    {
      id: 'q3',
      prompt:
        'Why should inclusive color checks happen early in the design process?',
      choices: [
        {
          id: 'a',
          label: 'Because tools only work on early-stage designs',
          isCorrect: false,
          explanation:
            'Tools work at any stage. The reason to check early is about the cost of changes.',
        },
        {
          id: 'b',
          label:
            'Because structural fixes are much harder after the design is locked — catching problems early is cheaper',
          isCorrect: true,
          explanation:
            'Switching from color-only dots to labeled badges, or redesigning a chart legend, is trivial in a design file and very costly in a shipped product.',
        },
        {
          id: 'c',
          label: 'Because accessibility problems disappear later in the process',
          isCorrect: false,
          explanation:
            'Accessibility problems do not self-resolve. They become harder and more expensive to fix as the design is finalized and implemented.',
        },
        {
          id: 'd',
          label: 'Because inclusive design only applies to wireframes',
          isCorrect: false,
          explanation:
            'Inclusive design applies throughout the entire design and development process.',
        },
      ],
    },
  ],
  keyPoints: [
    'CVD simulation is a useful approximation — a valuable first-pass check — but not a perfect substitute for real user testing.',
    'During simulated review, ask whether the user can complete the task, not just whether colors look different.',
    'A repeatable workflow: view normally → simulate each CVD type → identify ambiguous elements → add backup cues → re-check.',
    'Inclusive color checks should happen early: structural fixes are cheap in a design file and expensive in a shipped product.',
    'User testing with people who have CVD adds real-world validity that simulation alone cannot provide.',
  ],
};
