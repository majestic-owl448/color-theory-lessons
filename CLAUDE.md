# Color Theory Lessons (Color Theory Course)

Interactive color theory learning app. React 19 + TypeScript + Vite, deployed to GitHub Pages at `/color-theory-lessons/`.

## Project Vision

Browser-based learning app teaching practical color theory for digital design. Self-paced, game-like, targeting beginner designers. Optimized for static hosting on GitHub Pages.

## Implementation Status

### Completed Units
- **Unit 1** — Seeing and Describing Color (6 lessons, milestone, tools: before-after, slider-explore, contrast-checker, palette-builder, color-wheel, additive-sort)
- **Unit 2** — How Screens Make Color (5 lessons, milestone, tools: additive-sort, rgb-mixer, mismatch-explainer, background-shift, interface-tuner)
- **Unit 3** — Digital Color in Code (6 lessons, milestone, tools: format-reveal, hex-rgb-editor, hsl-playground, alpha-layer, theme-sandbox, token-map)
- **Unit 4** — Human Vision and Color Perception (4 lessons, milestone, tools: eye-diagram, vision-cards, interface-gallery, color-only-detector)
- **Unit 5** — Accessible Color in Practice (6 lessons, milestone, tools: text-contrast-lab, component-checker, state-workshop, pattern-repair, audit-flow, inclusive-review)
- **Unit 6** — Color Systems and Advanced Topics (7 lessons, milestone-6 capstone, tools: system-comparison, role-builder, brand-pressure, dark-translator, chart-tuner, color-space-lab, system-stress)

### Standalone Pages
- **Palette Builder** (`/palette-builder`) — generate harmony-based palettes from a primary color (analogous, complementary, triadic), with tonal variants (lighter/darker/muted), WCAG AAA contrast matrix, and dark/light mode theme arranger. Located at `src/pages/PaletteBuilderPage.tsx`.

### App Completeness
All 6 units fully built and wired. 34 total lessons, 33 tool components, 6 milestones. The `/capstone` route redirects to `milestone-6`. `npm run build` passes with zero TypeScript errors.

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
| Pages | `src/pages/` |
| State management | `src/state/` |

## Documentation

- **[Architecture Overview](docs/ARCHITECTURE.md)** — technical flow and state management
- **[Content Creation Guide](docs/CONTENT_GUIDE.md)** — adding lessons, milestones, and glossary terms
- **[Tool Development Guide](docs/TOOL_GUIDE.md)** — building and registering interactive tools
- **[Development Standards](docs/DEVELOPMENT.md)** — tech stack, conventions, and CI/CD

## Tech Stack

React 19 + TypeScript + Vite. No backend. GitHub Pages deployment via GitHub Actions on push to `main`. Design system: freeCodeCamp "Command-line Chic." CSS variables for theming: `var(--fg)`, `var(--bg)`, `var(--muted)`, `var(--border)`, `var(--accent)`, `var(--success)`, `var(--warning)`, `var(--error)`, `var(--font-mono)`, `var(--radius-md)`, `var(--radius-sm)`.

## Build

```
npm run build   # tsc + vite build
```

## Learning Outcomes

By completion, learners should be able to: explain additive vs subtractive color, build usable palettes for digital interfaces, understand RGB/HEX/HSL/HSV/alpha, identify accessibility mistakes, design with awareness of color blindness and low contrast, apply WCAG guidance, and make strong UI color choices for hierarchy, emphasis, readability, and feedback states.
