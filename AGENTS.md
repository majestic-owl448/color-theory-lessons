The file `/color-theory-lessons/AGENTS.md` must be updated as the app status changes so that the infos in it are based on the current status of the app.

# Color Theory Lessons (Color Quest)

Interactive color theory learning app. React 19 + TypeScript + Vite, deployed to GitHub Pages at `/color-theory-lessons/`.

## Project Vision

Browser-based learning app teaching practical color theory for digital design. Self-paced, game-like, targeting beginner designers. Optimized for static hosting on GitHub Pages.

## Implementation Status

### Completed Units
- **Unit 1** — Seeing and Describing Color (6 lessons, milestone, 32 glossary terms, tools: before-after, slider-explore, contrast-checker, palette-builder, color-wheel, additive-sort)
- **Unit 2** — Additive and Subtractive Color (6 lessons, milestone, 26 glossary terms, tools: rgb-mixer, logic-fixer, mismatch-explainer, background-shift, interface-tuner, format-reveal, hex-rgb-editor)
- **Unit 3** — Digital Color in Programming (7 lessons, milestone, 38 glossary terms, tools: hsl-playground, alpha-layer, theme-sandbox, token-map, color-space-lab)
- **Unit 4** — Human Vision and Color Blindness (6 lessons, milestone, 45 glossary terms, tools: eye-diagram, vision-cards, interface-gallery, color-only-detector, state-workshop, inclusive-review)
- **Unit 5** — Accessible Color and WCAG in Practice (6 lessons, milestone, 35 glossary terms, tools: broken-usable-cards, text-contrast-lab, component-checker, color-alone-rebuild, audit-flow, pattern-repair)
- **Unit 6** — Applied Design Systems and Advanced Color (6 lessons, milestone-6 capstone, 32 glossary terms, tools: system-comparison, role-builder, brand-pressure, dark-translator, chart-tuner, system-stress)

### Standalone Pages
- **Palette Builder** (`/palette-builder`) — generate harmony-based palettes from a primary color (analogous, complementary, triadic), with tonal variants (lighter/darker/muted), WCAG AAA contrast matrix, and dark/light mode theme arranger. Located at `src/pages/PaletteBuilderPage.tsx`.

### App Completeness
All 6 units fully built and wired. 37 total lessons, 36 tool components, 6 milestones. The `/capstone` route redirects to `milestone-6`. `npm run build` passes with zero TypeScript errors.

## Key Source Locations

| Area | Path |
|---|---|
| Lesson data | `src/lessons/unit-{N}/lesson-{N}-{M}.ts` |
| Lesson registry | `src/lessons/lesson-registry.ts` |
| Tool components | `src/components/tools/` |
| Tool renderer | `src/components/tools/ToolRenderer.tsx` |
| Units config | `src/data/units.ts` |
| Milestones | `src/data/milestones.ts` |
| Glossary | `src/data/glossary.ts` |
| Color utilities | `src/utils/color.ts` |
| Types | `src/types/lesson.ts`, `src/types/milestone.ts` |
| Palette Builder | `src/pages/PaletteBuilderPage.tsx` |

## Tech Stack

React 19 + TypeScript + Vite. No backend. GitHub Pages deployment. Design system: freeCodeCamp "Command-line Chic." CSS variables for theming: `var(--fg)`, `var(--bg)`, `var(--muted)`, `var(--border)`, `var(--accent)`, `var(--success)`, `var(--warning)`, `var(--error)`, `var(--font-mono)`, `var(--radius-md)`, `var(--radius-sm)`.

## Build

```
npm run build   # tsc + vite build
```

## Documents

- `color-theory-app-prd.md` — Full product requirements document
- `color-theory-app-lesson-plan.md` — High-level lesson plan overview across all units
- `color-theory-unit-1-detailed-lesson-plan.md` — Unit 1: What Is Color?
- `color-theory-unit-2-detailed-lesson-plan.md` — Unit 2: Color Models and Notation
- `color-theory-unit-3-detailed-lesson-plan.md` — Unit 3: Digital Color in Programming
- `color-theory-unit-4-detailed-lesson-plan.md` — Unit 4: Human Vision and Color Blindness
- `color-theory-unit-5-detailed-lesson-plan.md` — Unit 5: Accessible Color and WCAG in Practice
- `color-theory-unit-6-detailed-lesson-plan.md` — Unit 6: Applied Design Systems and Advanced Color
- `palette-builder-plan.md` — Palette Builder page design plan

## Learning Outcomes

By completion, learners should be able to: explain additive vs subtractive color, build usable palettes for digital interfaces, understand RGB/HEX/HSL/HSV/alpha, identify accessibility mistakes, design with awareness of color blindness and low contrast, apply WCAG guidance, and make strong UI color choices for hierarchy, emphasis, readability, and feedback states.