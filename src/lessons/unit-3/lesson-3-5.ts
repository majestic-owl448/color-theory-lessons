import type { LessonConfig } from '../../types/lesson.ts';

export const lesson3_5: LessonConfig = {
  id: 'u3-l5',
  unitId: 'unit-3',
  title: 'Gradients, CSS Color Usage, and Theme Building',
  description:
    'Connect color formats to real product work by learning gradients, semantic color roles, and how to build a coherent theme in a live sandbox.',
  learningGoal:
    'Explain role-based color usage and build a simple, coherent interface theme with a functional gradient.',
  estimatedMinutes: 16,
  prerequisites: ['u3-l4'],
  conceptsIntroduced: [
    'gradient',
    'linear gradient',
    'radial gradient',
    'surface color',
    'text color',
    'border color',
    'semantic color',
    'theme',
  ],
  interactionType: 'theme-sandbox',
  glossaryTerms: [
    'gradient',
    'linear gradient',
    'radial gradient',
    'border color',
    'text color',
    'semantic color',
    'theme',
  ],
  reviewTags: ['formats', 'gradients', 'themes', 'semantic-color'],
  steps: [
    {
      id: 's1',
      text: 'In a real product, colors serve specific roles: background, surface, primary text, secondary text, border, accent, success, warning, and error. Thinking in roles — not isolated swatches — helps a product stay consistent across many screens.',
      highlights: ['semantic color', 'theme'],
    },
    {
      id: 's2',
      text: 'A gradient is a controlled transition between two or more colors. CSS supports linear-gradient (a direction-based blend) and radial-gradient (a center-outward blend). Gradients can add hierarchy, depth, or energy — but they should serve a purpose, not just decorate.',
      highlights: ['gradient', 'linear gradient', 'radial gradient'],
    },
    {
      id: 's3',
      text: 'CSS and design systems often organize color by role, not by swatch name. Instead of storing "#2563EB" everywhere, a system might define --color-action-primary and reference that name across buttons, links, and focus rings. The name describes the job, not the appearance.',
    },
    {
      id: 's4',
      text: 'A theme is a coordinated set of color role assignments. Changing the theme — say, from light to dark — means reassigning the values behind the roles, not rewriting every component. This is why role-based thinking scales better than one-off color choices.',
    },
    {
      id: 's5',
      text: 'The theme sandbox on the right lets you assign colors to common roles and apply a gradient to a hero panel. Build a coherent theme where text is readable, accents are purposeful, and the gradient supports — not fights — the rest of the interface.',
    },
  ],
  challenges: [
    {
      id: 'c1',
      prompt:
        'Build a coherent interface theme by assigning colors to all roles and creating a functional gradient. The theme must pass basic readability checks.',
      type: 'build-palette',
      hints: [
        'Start with the background and surface — these set the overall tone.',
        'Make sure primary text has strong contrast against the surface.',
        'Use the gradient to add visual interest to the hero area without hurting text readability.',
        'Status colors (success, warning, error) should be distinct from each other and from the accent.',
      ],
      successCriteria: 'All roles assigned, gradient applied, readability checks pass.',
    },
  ],
  quizItems: [
    {
      id: 'q1',
      prompt: 'What is the difference between a color value and a color role?',
      choices: [
        {
          id: 'a',
          label: 'A value is a specific code like #2563EB; a role describes what that color does in the interface, like "primary action"',
          isCorrect: true,
          explanation:
            'Values are raw numbers. Roles describe purpose. A system uses role names so the same logic can apply even when values change — for example, in a dark theme.',
        },
        {
          id: 'b',
          label: 'They are the same thing — just different terms used by designers and developers',
          isCorrect: false,
          explanation:
            'They are genuinely different concepts. A value is a specific color code. A role is the function that code serves in the design system.',
        },
        {
          id: 'c',
          label: 'A value is the color in HEX; a role is the same color in HSL',
          isCorrect: false,
          explanation: 'HEX and HSL are both formats for the same value. A role is about meaning and usage, not format.',
        },
        {
          id: 'd',
          label: 'Roles are only relevant in large enterprise design systems',
          isCorrect: false,
          explanation:
            'Even a small product benefits from role-based thinking. Roles help maintain consistency whether the team is one person or one hundred.',
        },
      ],
    },
    {
      id: 'q2',
      prompt: 'Are gradients always decorative?',
      choices: [
        {
          id: 'a',
          label: 'Yes — gradients are purely visual style and never affect usability',
          isCorrect: false,
          explanation:
            'Gradients can serve functional purposes: adding depth to card surfaces, creating visual hierarchy in hero sections, or encoding data in heatmaps.',
        },
        {
          id: 'b',
          label: 'No — gradients can support hierarchy, emphasis, or data encoding when used deliberately',
          isCorrect: true,
          explanation:
            'A gradient can add intentional emphasis to a hero section, create surface depth, or represent data ranges. The key is deliberate usage, not decoration for its own sake.',
        },
        {
          id: 'c',
          label: 'No — gradients are required for accessible contrast',
          isCorrect: false,
          explanation:
            'Gradients are not required for accessibility. In fact, they can make contrast harder to verify because the background color varies.',
        },
        {
          id: 'd',
          label: 'Only radial gradients can be functional; linear gradients are decorative',
          isCorrect: false,
          explanation: 'Both types can be either functional or decorative. The distinction is about intent and usage, not gradient shape.',
        },
      ],
    },
    {
      id: 'q3',
      prompt: 'Which approach is more scalable for a growing product?',
      choices: [
        {
          id: 'a',
          label: 'Storing one-off button colors on every screen individually',
          isCorrect: false,
          explanation:
            'One-off values become inconsistent and unmaintainable as the product grows. Changing the brand accent would require finding and updating every instance.',
        },
        {
          id: 'b',
          label: 'Defining shared theme roles that all components reference',
          isCorrect: true,
          explanation:
            'Shared roles mean one change — like updating the primary action color — propagates automatically to every button, link, and focus ring in the system.',
        },
        {
          id: 'c',
          label: 'Using only CSS named colors like "blue" and "red"',
          isCorrect: false,
          explanation:
            'CSS named colors are limited and imprecise. They do not support the semantic role-based approach that real products need.',
        },
        {
          id: 'd',
          label: 'Using gradients instead of flat colors everywhere',
          isCorrect: false,
          explanation: 'Gradients add visual complexity and have nothing to do with the scalability of a color system.',
        },
      ],
    },
  ],
  keyPoints: [
    'Products use colors in roles: background, surface, text, border, accent, success, warning, error. Thinking in roles is stronger than scattering random values.',
    'Gradients are controlled transitions between colors — useful for hierarchy, depth, or energy, but they should serve a function.',
    'CSS and design systems organize color by role, not by swatch name. Names like --color-action-primary describe the job, not the appearance.',
    'A theme is a coordinated set of role assignments. Changing themes means reassigning values behind roles, not rewriting every component.',
    'Role-based color systems scale better than one-off choices because a single change propagates to every component that references the role.',
  ],
};
