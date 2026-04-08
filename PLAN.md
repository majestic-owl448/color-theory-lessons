  - Phase 0: Extract duplicated color utilities into src/utils/color.ts and update existing tools to import from it
  - Phase 1: Complete Unit 3 (5 remaining lessons + 5 tools + milestone 3)
  - Phase 2: Build Unit 4 — Human Vision and Color Blindness (6 lessons + 6 tools + milestone 4)
  - Phase 3: Build Unit 5 — Accessible Color and WCAG (6 lessons + 6 tools + milestone 5)
  - Phase 4: Build Unit 6 — Applied Design Systems (6 lessons + 6 tools + final capstone milestone)

  Total: 23 new lessons, 23 new tool components, 4 milestones, ~100+ glossary terms. Each phase is a self-contained unit deliverable that
  can be tested end-to-end before moving on.

     Plan: Implement Remaining Color Quest Content (Units 3-6)

     Context

     Color Quest is a React 19 + TypeScript + Vite app teaching interactive color theory. Units 1-2 are fully complete (12 lessons, 2
     milestones, 13 interactive tools). Unit 3 has 2 of 7 lessons built. Units 4-6 have no content. The goal is to complete all remaining
     lessons, tools, milestones, and glossary entries following the detailed lesson plans already written.

     What remains: 5 Unit 3 lessons + 18 Unit 4-6 lessons + 4 milestones + 23 interactive tools + glossary terms for all new lessons.

     ---
     Phase 0: Extract Shared Color Utilities

     Color conversion functions (hexToRgb, rgbToHex, hslToHex, hexToHsl, luminance, contrastRatio, etc.) are duplicated across multiple
     tool files. Extract them before building 23 new tools.

     Create:
     - src/utils/color.ts — consolidated color conversion and analysis functions

     Update (replace inline copies with imports):
     - src/components/tools/FormatRevealTool.tsx
     - src/components/tools/HexRgbEditorTool.tsx
     - src/components/tools/InterfaceTunerTool.tsx
     - src/components/tools/ContrastTool.tsx
     - src/components/tools/ColorWheelTool.tsx
     - src/components/tools/HSLSliderTool.tsx
     - src/components/tools/BackgroundShiftTool.tsx

     ---
     Phase 1: Complete Unit 3 — Digital Color in Programming

     Unit 3 has 7 lessons total. L1 (u3-l1, FormatRevealTool) and L2 (u3-l2, HexRgbEditorTool) exist. units.ts already lists all 7 lesson
     IDs. ToolRenderer has placeholder cases for the 5 remaining interactionTypes.

     Lesson data files (5 new)

     ┌──────────────────────────────────┬───────┬─────────────────┬─────────────────────────────────────────────────────┐
     │               File               │  ID   │ interactionType │                        Topic                        │
     ├──────────────────────────────────┼───────┼─────────────────┼─────────────────────────────────────────────────────┤
     │ src/lessons/unit-3/lesson-3-3.ts │ u3-l3 │ hsl-playground  │ HSL and HSLA — show HSL/HEX/RGB simultaneously      │
     ├──────────────────────────────────┼───────┼─────────────────┼─────────────────────────────────────────────────────┤
     │ src/lessons/unit-3/lesson-3-4.ts │ u3-l4 │ alpha-layer     │ Alpha, transparency, and layered color              │
     ├──────────────────────────────────┼───────┼─────────────────┼─────────────────────────────────────────────────────┤
     │ src/lessons/unit-3/lesson-3-5.ts │ u3-l5 │ theme-sandbox   │ Gradients, CSS color usage, and theme building      │
     ├──────────────────────────────────┼───────┼─────────────────┼─────────────────────────────────────────────────────┤
     │ src/lessons/unit-3/lesson-3-6.ts │ u3-l6 │ token-map       │ Design tokens and role-based color systems          │
     ├──────────────────────────────────┼───────┼─────────────────┼─────────────────────────────────────────────────────┤
     │ src/lessons/unit-3/lesson-3-7.ts │ u3-l7 │ color-space-lab │ Color spaces and practical implementation awareness │
     └──────────────────────────────────┴───────┴─────────────────┴─────────────────────────────────────────────────────┘

     Content source: color-theory-unit-3-detailed-lesson-plan.md (L3-L7 sections)

     Tool components (5 new)

     ┌───────────────────────┬─────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
     │       Component       │ Lines   │                                          Core mechanic                                          │
     │                       │  est.   │                                                                                                 │
     ├───────────────────────┼─────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
     │ HslPlaygroundTool.tsx │ ~200    │ H/S/L sliders with live HEX + RGB + HSL readouts. Challenge: match 3 targets using HSL          │
     │                       │         │ controls. New tool, distinct from U1 HSLSliderTool.                                             │
     ├───────────────────────┼─────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
     │ AlphaLayerTool.tsx    │ ~200    │ Foreground color with alpha slider over selectable backgrounds. Shows computed blend result.    │
     │                       │         │ Challenge: create useful overlays for specific contexts.                                        │
     ├───────────────────────┼─────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
     │ ThemeSandboxTool.tsx  │ ~350    │ Token-role mockup interface (surface, text, accent, border, states) + gradient editor for       │
     │                       │         │ hero/card. Challenge: build coherent theme that passes readability checks.                      │
     ├───────────────────────┼─────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
     │                       │         │ Token tree with base values and derived roles. Change base → all derived roles update. Includes │
     │ TokenMapTool.tsx      │ ~300    │  sort activity (raw value vs alias vs role token). Challenge: fix broken tokens by adjusting    │
     │                       │         │ base values.                                                                                    │
     ├───────────────────────┼─────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
     │ ColorSpaceLabTool.tsx │ ~200    │ sRGB vs Display P3 side-by-side preview + CSS/SVG/Canvas context panel. Challenge: sort items   │
     │                       │         │ into raw value / semantic role / rendering context buckets.                                     │
     └───────────────────────┴─────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘

     Milestone 3

     Add to src/data/milestones.ts: "Build a UI Palette in Code"
     - 2-3 parts, ~12 questions, passThreshold ~8
     - Topics: format conversion, token reasoning, alpha behavior, gradient usage, color space awareness

     Glossary additions

     Add to src/data/glossary.ts: alpha, opacity, transparency, overlay, scrim, blend perception, layered interface, HSL, HSLA, color
     family, tonal variation, gradient, linear gradient, radial gradient, border color, text color, semantic color, theme, design token,
     variable, alias token, role token, theme propagation, sRGB, Display P3, color space, Canvas, SVG, WebGL, contrast checker

     Registry wiring

     - src/lessons/lesson-registry.ts — import + add lesson3_3 through lesson3_7
     - src/components/tools/ToolRenderer.tsx — replace 5 "coming soon" cases with real components
     - src/data/milestones.ts — add milestone3 to registry array

     ---
     Phase 2: Unit 4 — Human Vision and Color Blindness

     Type updates

     Add to InteractionType in src/types/lesson.ts:
     'eye-diagram' | 'vision-cards' | 'interface-gallery' | 'color-only-detector' | 'state-workshop' | 'inclusive-review'

     Add to ChallengeType: 'explore-all' | 'add-cues'

     Unit metadata

     Update src/data/units.ts: populate unit-4 lessons array with ['u4-l1', 'u4-l2', 'u4-l3', 'u4-l4', 'u4-l5', 'u4-l6']

     Lesson data files (6 new)

     ┌──────────────────────────────────┬───────┬─────────────────────┬────────────────────────────────────────────┐
     │               File               │  ID   │   interactionType   │                   Topic                    │
     ├──────────────────────────────────┼───────┼─────────────────────┼────────────────────────────────────────────┤
     │ src/lessons/unit-4/lesson-4-1.ts │ u4-l1 │ eye-diagram         │ How humans perceive color                  │
     ├──────────────────────────────────┼───────┼─────────────────────┼────────────────────────────────────────────┤
     │ src/lessons/unit-4/lesson-4-2.ts │ u4-l2 │ vision-cards        │ What color vision deficiency is            │
     ├──────────────────────────────────┼───────┼─────────────────────┼────────────────────────────────────────────┤
     │ src/lessons/unit-4/lesson-4-3.ts │ u4-l3 │ interface-gallery   │ Major types and interface risks            │
     ├──────────────────────────────────┼───────┼─────────────────────┼────────────────────────────────────────────┤
     │ src/lessons/unit-4/lesson-4-4.ts │ u4-l4 │ color-only-detector │ Why color alone fails                      │
     ├──────────────────────────────────┼───────┼─────────────────────┼────────────────────────────────────────────┤
     │ src/lessons/unit-4/lesson-4-5.ts │ u4-l5 │ state-workshop      │ Designing better states, charts, feedback  │
     ├──────────────────────────────────┼───────┼─────────────────────┼────────────────────────────────────────────┤
     │ src/lessons/unit-4/lesson-4-6.ts │ u4-l6 │ inclusive-review    │ Simulation, testing, and everyday workflow │
     └──────────────────────────────────┴───────┴─────────────────────┴────────────────────────────────────────────┘

     Content source: color-theory-unit-4-detailed-lesson-plan.md

     Tool components (6 new)

     ┌───────────────────────────┬─────────┬─────────────────────────────────────────────────────────────────────────────────────────────┐
     │         Component         │ Lines   │                                        Core mechanic                                        │
     │                           │  est.   │                                                                                             │
     ├───────────────────────────┼─────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
     │ EyeDiagramTool.tsx        │ ~150    │ Click-through SVG eye diagram. Click retina/cones/rods/optic nerve to reveal labels and     │
     │                           │         │ design implications. Completion: all parts explored.                                        │
     ├───────────────────────────┼─────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
     │ VisionCardsTool.tsx       │ ~180    │ Expandable cards for each CVD type (protan, deutan, tritan, achromatopsia). Each shows      │
     │                           │         │ description, common risk, example UI pair. Completion: all cards expanded.                  │
     ├───────────────────────────┼─────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
     │ InterfaceGalleryTool.tsx  │ ~250    │ Interface shown under normal view + CVD simulations via CSS filter matrices. Dropdown to    │
     │                           │         │ select simulation type. Challenge: identify which elements become indistinguishable.        │
     ├───────────────────────────┼─────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
     │                           │         │ 6-8 small UI examples. Click elements where meaning depends only on color. After each,      │
     │ ColorOnlyDetectorTool.tsx │ ~200    │ shows what alternative cue would help. Completion: correctly identify all color-only        │
     │                           │         │ elements.                                                                                   │
     ├───────────────────────────┼─────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
     │ StateWorkshopTool.tsx     │ ~250    │ Status system (success/warning/error/info) with only color. User adds icons, labels, border │
     │                           │         │  changes to each. Challenge: all states must have at least one non-color cue.               │
     ├───────────────────────────┼─────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
     │ InclusiveReviewTool.tsx   │ ~200    │ Interface + checklist sidebar. Step through: simulation check, label backup, task-based     │
     │                           │         │ testing, chart distinction, form clarity. Completion: all checks correctly assessed.        │
     └───────────────────────────┴─────────┴─────────────────────────────────────────────────────────────────────────────────────────────┘

     Milestone 4, glossary, registry

     - Milestone 4: "Design Beyond Your Own Eyes" — questions about CVD types, color-only failures, repair strategies
     - Glossary: color perception, color vision, cone, rod, retina, optic nerve, visual system, color vision deficiency, protanopia,
     protanomaly, deuteranopia, deuteranomaly, tritanopia, tritanomaly, achromatopsia, simulation, protan, deutan, tritan, backup cue,
     redundancy, chart key, legend, icon, label, pattern, selected state, semantic state, use of color, annotation, chart series, direct
     label, error state, info state, pattern fill, success state, validation feedback, warning state, approximation, inclusive design,
     review pass, robustness, task check, user test, workflow
     - Update lesson-registry.ts, ToolRenderer.tsx

     ---
     Phase 3: Unit 5 — Accessible Color and WCAG in Practice

     Type updates

     Add to InteractionType:
     'broken-usable-cards' | 'text-contrast-lab' | 'component-checker' | 'color-alone-rebuild' | 'audit-flow' | 'pattern-repair'

     Add to ChallengeType: 'audit' | 'repair'

     Unit metadata

     Update src/data/units.ts: populate unit-5 lessons with ['u5-l1', 'u5-l2', 'u5-l3', 'u5-l4', 'u5-l5', 'u5-l6']

     Lesson data files (6 new)

     ┌──────────────────────────────────┬───────┬─────────────────────┬─────────────────────────────────────────┐
     │               File               │  ID   │   interactionType   │                  Topic                  │
     ├──────────────────────────────────┼───────┼─────────────────────┼─────────────────────────────────────────┤
     │ src/lessons/unit-5/lesson-5-1.ts │ u5-l1 │ broken-usable-cards │ Why accessible color matters            │
     ├──────────────────────────────────┼───────┼─────────────────────┼─────────────────────────────────────────┤
     │ src/lessons/unit-5/lesson-5-2.ts │ u5-l2 │ text-contrast-lab   │ Text contrast in practice               │
     ├──────────────────────────────────┼───────┼─────────────────────┼─────────────────────────────────────────┤
     │ src/lessons/unit-5/lesson-5-3.ts │ u5-l3 │ component-checker   │ Non-text contrast for controls          │
     ├──────────────────────────────────┼───────┼─────────────────────┼─────────────────────────────────────────┤
     │ src/lessons/unit-5/lesson-5-4.ts │ u5-l4 │ color-alone-rebuild │ Why color alone is not enough           │
     ├──────────────────────────────────┼───────┼─────────────────────┼─────────────────────────────────────────┤
     │ src/lessons/unit-5/lesson-5-5.ts │ u5-l5 │ audit-flow          │ Practical checking workflow             │
     ├──────────────────────────────────┼───────┼─────────────────────┼─────────────────────────────────────────┤
     │ src/lessons/unit-5/lesson-5-6.ts │ u5-l6 │ pattern-repair      │ Accessible patterns for real interfaces │
     └──────────────────────────────────┴───────┴─────────────────────┴─────────────────────────────────────────┘

     Content source: color-theory-unit-5-detailed-lesson-plan.md

     Tool components (6 new)

     ┌───────────────────────────┬─────────┬─────────────────────────────────────────────────────────────────────────────────────────────┐
     │         Component         │ Lines   │                                        Core mechanic                                        │
     │                           │  est.   │                                                                                             │
     ├───────────────────────────┼─────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
     │ BrokenUsableCardsTool.tsx │ ~150    │ Interface card pairs (broken vs usable). User identifies which is which and why.            │
     │                           │         │ Completion: all pairs correctly classified.                                                 │
     ├───────────────────────────┼─────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
     │ TextContrastLabTool.tsx   │ ~250    │ Text + background color pickers with live WCAG AA/AAA ratio display. Uses shared            │
     │                           │         │ contrastRatio. Challenge: fix 3 failing text pairs to pass AA (4.5:1 normal, 3:1 large).    │
     ├───────────────────────────┼─────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
     │ ComponentCheckerTool.tsx  │ ~250    │ UI components (button, input, toggle, focus ring) with adjustable colors. Non-text 3:1      │
     │                           │         │ contrast checks. Challenge: fix all components to pass.                                     │
     ├───────────────────────────┼─────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
     │ ColorAloneRebuildTool.tsx │ ~250    │ Form/chart using only color for meaning. User adds icons, labels, patterns. Builds on       │
     │                           │         │ StateWorkshopTool pattern. Challenge: all elements must have non-color cue.                 │
     ├───────────────────────────┼─────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
     │ AuditFlowTool.tsx         │ ~200    │ Step-by-step audit of mock interface. Each step checks one aspect. User marks pass/fail for │
     │                           │         │  each. Completion: all checks correctly assessed.                                           │
     ├───────────────────────────┼─────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
     │ PatternRepairTool.tsx     │ ~350    │ Full mock interface with multiple a11y failures (form, links, alerts, chart, tabs). User    │
     │                           │         │ selects each problem, applies fix from menu. Challenge: fix all issues.                     │
     └───────────────────────────┴─────────┴─────────────────────────────────────────────────────────────────────────────────────────────┘

     Milestone 5, glossary, registry

     - Milestone 5: "Accessibility Rescue" — questions about WCAG ratios, text vs non-text contrast, color-only failures, repair
     techniques
     - Glossary: accessibility, color-only meaning, state indicator, usability, visual affordance, contrast ratio, text contrast, normal
     text, large text, pass, fail, non-text contrast, user interface component, graphical object, focus indicator, boundary, outline, icon
      contrast, state visibility, redundant cue, status message, validation state, audit, checker, context, priority element,
     verification, alert, chart palette, dashboard, form validation, inline error, link distinction, notification, pattern library
     - Update lesson-registry.ts, ToolRenderer.tsx

     ---
     Phase 4: Unit 6 — Applied Design Systems and Advanced Color

     Type updates

     Add to InteractionType:
     'system-comparison' | 'role-builder' | 'brand-pressure' | 'dark-translator' | 'chart-tuner' | 'system-stress'

     Add to ChallengeType: 'system-build'

     Unit metadata

     Update src/data/units.ts: populate unit-6 lessons with ['u6-l1', 'u6-l2', 'u6-l3', 'u6-l4', 'u6-l5', 'u6-l6']

     Lesson data files (6 new)

     ┌──────────────────────────────────┬───────┬───────────────────┬─────────────────────────────────────────┐
     │               File               │  ID   │  interactionType  │                  Topic                  │
     ├──────────────────────────────────┼───────┼───────────────────┼─────────────────────────────────────────┤
     │ src/lessons/unit-6/lesson-6-1.ts │ u6-l1 │ system-comparison │ From individual colors to color systems │
     ├──────────────────────────────────┼───────┼───────────────────┼─────────────────────────────────────────┤
     │ src/lessons/unit-6/lesson-6-2.ts │ u6-l2 │ role-builder      │ Building semantic color roles for UI    │
     ├──────────────────────────────────┼───────┼───────────────────┼─────────────────────────────────────────┤
     │ src/lessons/unit-6/lesson-6-3.ts │ u6-l3 │ brand-pressure    │ Brand constraints and hierarchy         │
     ├──────────────────────────────────┼───────┼───────────────────┼─────────────────────────────────────────┤
     │ src/lessons/unit-6/lesson-6-4.ts │ u6-l4 │ dark-translator   │ Dark mode and theme pairing             │
     ├──────────────────────────────────┼───────┼───────────────────┼─────────────────────────────────────────┤
     │ src/lessons/unit-6/lesson-6-5.ts │ u6-l5 │ chart-tuner       │ Color for charts and data visualization │
     ├──────────────────────────────────┼───────┼───────────────────┼─────────────────────────────────────────┤
     │ src/lessons/unit-6/lesson-6-6.ts │ u6-l6 │ system-stress     │ Modern screen contexts and final review │
     └──────────────────────────────────┴───────┴───────────────────┴─────────────────────────────────────────┘

     Content source: color-theory-unit-6-detailed-lesson-plan.md

     Tool components (6 new)

     ┌──────────────────────────┬─────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
     │        Component         │ Lines   │                                        Core mechanic                                         │
     │                          │  est.   │                                                                                              │
     ├──────────────────────────┼─────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
     │ SystemComparisonTool.tsx │ ~150    │ Two mockups side by side (ad-hoc vs system). User identifies inconsistencies by clicking.    │
     │                          │         │ Completion: all inconsistencies found.                                                       │
     ├──────────────────────────┼─────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
     │ RoleBuilderTool.tsx      │ ~350    │ Define semantic roles (surface, text, border, accent, success/warning/error) by assigning    │
     │                          │         │ colors. Live interface preview updates. Challenge: all roles satisfy contrast checks.        │
     ├──────────────────────────┼─────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
     │ BrandPressureTool.tsx    │ ~250    │ Given a brand color, build supporting palette maintaining hierarchy and contrast. Balance    │
     │                          │         │ checks flag overuse. Challenge: brand visible but not dominating.                            │
     ├──────────────────────────┼─────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
     │ DarkTranslatorTool.tsx   │ ~350    │ Light mode palette on left, dark mode on right. Map each light role to a dark value.         │
     │                          │         │ Challenge: all contrast checks pass in both modes.                                           │
     ├──────────────────────────┼─────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
     │ ChartTunerTool.tsx       │ ~250    │ Bar/pie chart with adjustable series colors. Checks distinguishability, CVD simulation,      │
     │                          │         │ contrast. Challenge: pass all checks.                                                        │
     ├──────────────────────────┼─────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
     │ SystemStressTestTool.tsx │ ~350    │ Complete color system applied to cards, nav, forms, alerts, charts. Toggle stress tests      │
     │                          │         │ (dark mode, CVD sim). Challenge: system remains usable under all conditions.                 │
     └──────────────────────────┴─────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘

     Final Capstone (Milestone 6)

     The capstone at /capstone route currently uses PlaceholderPage. Replace it:
     - Update App.tsx to route /capstone to MilestonePage with milestoneId="milestone-6"
     - Add milestone6 to milestones.ts: "Ship a Practical Color System" — 3-4 parts, ~18 questions, passThreshold ~12
     - Covers: system-level decisions, semantic roles, dark mode, accessibility, chart colors, brand balance

     Glossary, registry

     - Glossary: color system, consistency, semantic role, component state, disabled, elevated surface, hover, primary text, secondary
     text, semantic status, accent overuse, brand color, supporting palette, tonal scale, dark mode, light mode, theme pairing, tonal
     separation, surface depth, inverse text, mode adaptation, categorical palette, sequential palette, chart contrast, data emphasis,
     encoding, visual grouping, consistency audit, context effect, simultaneous contrast, stress test, system review, wide-gamut display
     - Update lesson-registry.ts, ToolRenderer.tsx, units.ts

     ---
     Implementation Order Within Each Phase

     For each phase, work in this order:
     1. Add new InteractionType and ChallengeType values to src/types/lesson.ts
     2. Update src/data/units.ts with lesson IDs (if needed)
     3. Create lesson data files (all lessons for the unit)
     4. Build tool components (all tools for the unit)
     5. Create milestone data in src/data/milestones.ts
     6. Add glossary terms to src/data/glossary.ts
     7. Update src/lessons/lesson-registry.ts with imports
     8. Update src/components/tools/ToolRenderer.tsx with new cases
     9. Commit the unit

     ---
     Critical Files

     ┌───────────────────────────────────────┬───────────────────────────────────────────────────────────────────┐
     │                 File                  │                               Role                                │
     ├───────────────────────────────────────┼───────────────────────────────────────────────────────────────────┤
     │ src/types/lesson.ts                   │ InteractionType + ChallengeType unions — extend before each phase │
     ├───────────────────────────────────────┼───────────────────────────────────────────────────────────────────┤
     │ src/components/tools/ToolRenderer.tsx │ Central tool dispatch — add case for every new tool               │
     ├───────────────────────────────────────┼───────────────────────────────────────────────────────────────────┤
     │ src/lessons/lesson-registry.ts        │ Lesson index — import and register every new lesson               │
     ├───────────────────────────────────────┼───────────────────────────────────────────────────────────────────┤
     │ src/data/units.ts                     │ Unit metadata — populate lesson arrays for units 4-6              │
     ├───────────────────────────────────────┼───────────────────────────────────────────────────────────────────┤
     │ src/data/milestones.ts                │ Milestone data — add milestones 3-6                               │
     ├───────────────────────────────────────┼───────────────────────────────────────────────────────────────────┤
     │ src/data/glossary.ts                  │ Glossary — add terms for all new lessons                          │
     ├───────────────────────────────────────┼───────────────────────────────────────────────────────────────────┤
     │ src/App.tsx                           │ Routes — update /capstone route in Phase 4                        │
     └───────────────────────────────────────┴───────────────────────────────────────────────────────────────────┘

     ---
     Verification

     After each phase:
     1. npm run build — confirm no TypeScript errors
     2. npm run dev — test locally:
       - Navigate to the unit on HomePage, confirm lessons are listed and locked/unlocked correctly
       - Play through each lesson: steps → challenge → quiz → complete
       - Confirm challenge onComplete fires and advances to quiz phase
       - Confirm quiz answers show feedback and explanations
       - Confirm lesson completion saves to localStorage and unlocks next lesson
       - After all lessons, confirm milestone is accessible
       - Complete milestone and verify badge/completion state
       - Check glossary page shows new terms after lesson completion
       - Check review page shows key points grouped by tags
     3. After Phase 4: test full progression from Unit 1 through capstone
     4. After all phases: npm run build and verify the dist/ output is deployable to GitHub Pages