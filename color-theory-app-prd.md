# PRD: Interactive Color Theory Learning App

## Working title
**Color Quest**  
A self-paced, game-like web app for beginner designers to learn practical color theory for modern digital design.

## 1. Product summary
Build a browser-based learning app that teaches beginner designers how color works in digital products. The app should feel playful and interactive, but still deliver serious learning outcomes. Learners progress through short lessons, simulations, challenges, quizzes, and mini-projects that teach practical color decisions for UI, branding, accessibility, and design systems.

The experience is optimized for static hosting on GitHub Pages, which means the app should be built as a client-side HTML/CSS/JavaScript application with no required backend. GitHub Pages is a static hosting service for HTML, CSS, and JavaScript, and published sites have practical limits such as a 1 GB site size soft limit and a 100 GB/month bandwidth soft limit.

## 2. Audience
**Primary audience:** beginner designers  
**Secondary audience:** design-adjacent learners who touch UI, accessibility, or front-end workflows  
**Age range:** adults  
**Learning mode:** self-paced solo learning

## 3. Core product goal
Teach practical color literacy through play.

By the end of the app, a learner should be able to:
- explain the difference between additive and subtractive color
- build and adjust usable color palettes for digital interfaces
- understand RGB, HEX, HSL, HSV, alpha, and basic color spaces used in programming
- identify common color accessibility mistakes
- design with awareness of color blindness and low-contrast issues
- use WCAG color guidance in practical design decisions
- make stronger UI color choices for hierarchy, emphasis, readability, and feedback states

## 4. Product vision
A learner should feel like they are mastering a visual system, not memorizing a textbook.

The app should make color feel:
- visual
- interactive
- immediately useful
- tied to real design tasks
- grounded in accessibility, not just aesthetics

## 5. Non-goals
The MVP should **not** focus on:
- print production workflows
- deep art history
- advanced physics of light
- professional photo-editing workflows
- enterprise certification
- social/community features
- teacher dashboards
- backend-dependent features

## 6. Design principles
1. **Teach by manipulation**  
   Every major concept should have an interactive tool or simulation.

2. **Stay practical**  
   Focus on tasks designers actually do: choosing colors, checking contrast, building states, designing themes, and avoiding accessibility problems.

3. **Game loop over lecture dump**  
   Concepts should unlock through short cycles of learn, try, test, apply, win.

4. **Color is not enough**  
   The app itself must model accessible design by not relying on color alone.

5. **Beginner-friendly, not shallow**  
   Keep the explanations intuitive while still introducing professional vocabulary.

## 7. Learning pillars
The curriculum should cover six major pillars:

### A. Foundations of color
- hue, saturation, lightness/value
- warm vs cool
- contrast
- harmony
- visual hierarchy
- color meaning in interface design

### B. Additive vs subtractive color
- light vs pigment
- RGB as the core digital model
- why screens behave differently from paint/ink
- practical distinction without over-emphasizing CMYK

### C. Color in programming
- HEX
- RGB / RGBA
- HSL / HSLA
- HSV conceptually
- alpha/transparency
- CSS named colors and modern CSS color usage
- gradients
- design tokens and theming
- contrast calculation in code
- basic Canvas, SVG, and WebGL relevance
- sRGB vs Display P3 at a practical level

### D. Color blindness and human perception
- basic eye structure relevant to color vision
- cones and color perception
- major forms of color blindness:
  - protanopia / protanomaly
  - deuteranopia / deuteranomaly
  - tritanopia / tritanomaly
  - achromatopsia
- simulation and design implications
- why “looks fine to me” is not enough

### E. Accessibility and WCAG
At a practical level, the app should teach that WCAG 2.2 recommends:
- text contrast of at least **4.5:1** for normal text
- **3:1** for large text
- **3:1** for many UI components and meaningful non-text graphics
- information should not be conveyed by color alone

### F. Applied design principles
- hierarchy
- emphasis
- semantic colors
- state colors
- error/success/warning/info systems
- dark mode choices
- palette balance
- brand color constraints
- data visualization color choices
- inclusive color decisions across users and displays

## 8. Core user experience
### Primary loop
1. Learn a concept in a short lesson
2. Interact with a visual tool
3. Complete a challenge
4. Take a quick quiz
5. Apply the concept in a design task
6. Earn progress toward a milestone

### Session length target
- 5 to 15 minute sessions
- modular lessons
- frequent progress saves in local storage

### Progression model
Organize the app into **worlds** or **chapters**, each ending in a milestone challenge:
1. Seeing Color
2. Mixing Color
3. Digital Color
4. Accessible Color
5. Designing with Color
6. Advanced UI Color Systems

## 9. Core feature set

### A. Lesson system
Each lesson contains:
- short explanation
- visual examples
- interactive demo
- 1 quick check
- 1 applied challenge

### B. Quizzes
Question types:
- multiple choice
- drag and drop
- identify the problem
- choose the better palette
- predict the contrast result
- map code value to visible color

### C. Interactive tools and simulations
Required tools:
- color wheel explorer
- RGB additive light mixer
- simple subtractive mixing explainer
- palette builder
- contrast checker
- WCAG pass/fail tester
- color blindness simulator
- semantic UI state builder
- theme editor
- “fix this interface” critique exercise
- code-to-color playground for HEX/RGB/HSL/alpha

### D. Mini-games
Examples:
- **Palette Match**: recreate a target palette
- **Contrast Rescue**: fix inaccessible screens
- **Hue Shift**: adjust colors to improve hierarchy
- **Blindness Challenge**: redesign a screen for simulated color vision deficiencies
- **Code Painter**: convert between HEX, RGB, and HSL to achieve a target visual result

### E. Milestone projects
Examples:
- build a simple accessible button system
- redesign a poor signup form
- create a light/dark theme pair
- build a small design-token color set
- create a dashboard palette for charts and statuses

### F. Completion milestones
No certification. Instead:
- chapter completion badges
- mastery markers for each skill area
- final capstone completion screen
- optional “review mode” for spaced practice

## 10. Content structure
Each lesson object should support:
- title
- learning goal
- estimated time
- prerequisite lessons
- concept explanation
- interaction type
- challenge prompt
- quiz items
- success criteria
- common mistakes
- review tags

This should be stored in static JSON or markdown-derived structured data so the app remains GitHub Pages-friendly.

## 11. Accessibility requirements for the app itself
The product must model the principles it teaches.

Requirements:
- keyboard navigable
- screen-reader-aware labels and announcements
- no meaning conveyed by color alone
- accessible charts and diagrams where possible
- persistent text labels for status colors
- contrast-compliant UI
- simulation modes should include text explanation, not just visual change

## 12. Technical constraints
Because the target platform is GitHub Pages:
- no required backend
- all progress stored locally by default
- static assets should stay lightweight
- lessons should load fast
- interactive tools should run entirely client-side
- optional export/import for learner progress via JSON file
- avoid architecture that depends on server auth, databases, or cloud functions by default

## 13. Suggested information architecture
- Home
- World map / progression map
- Lesson view
- Sandbox / color lab
- Quiz mode
- Project mode
- Review mode
- Glossary
- Settings
- Accessibility tools

## 14. UX requirements
- visually rich but not cluttered
- short blocks of text
- every abstract concept paired with visible feedback
- immediate correction on wrong answers
- replayable exercises
- friendly, non-patronizing tone
- clear progress bars and milestone tracking
- optional hints before full solutions
- mobile-responsive enough to function, but optimized for desktop/laptop

## 15. Success metrics
Product success can be defined by:
- lesson completion rate
- milestone completion rate
- quiz retry improvement
- capstone completion rate
- learner ability to fix inaccessible color examples
- return usage in review mode
- time-to-first-success in the first session

## 16. MVP scope
The MVP should include:
- foundational color theory
- additive vs subtractive distinction
- digital color formats
- practical color blindness education
- WCAG-focused contrast education
- palette and hierarchy exercises
- 3 to 5 interactive tools
- 2 milestone projects
- local progress saving

## 17. Post-MVP expansion
Potential later additions:
- richer design-token workflows
- data visualization color module
- wider-gamut and display-awareness module
- dark mode deep dive
- challenge generator
- downloadable worksheet mode
- educator mode
- shareable capstone gallery

## 18. Risks and mitigations
### Risk: too much theory, not enough play
Mitigation: every concept needs a manipulation or challenge.

### Risk: accessibility becomes dry or compliance-only
Mitigation: teach through broken-vs-fixed UI examples.

### Risk: color blindness is oversimplified
Mitigation: include eye-structure basics, multiple deficiency types, and design consequences.

### Risk: programming content becomes too developer-heavy
Mitigation: frame code formats as designer-relevant tools.

### Risk: GitHub Pages limits richer ambitions
Mitigation: design all core features as static-client experiences first.

## 19. Acceptance criteria
The PRD is satisfied when the app can:
- teach color fundamentals through interactive lessons
- clearly distinguish additive and subtractive models
- teach beginner-friendly digital color formats
- help learners use practical accessibility checks
- teach color blindness awareness beyond red/green shorthand
- let learners complete milestone-based progress
- run fully as a static GitHub Pages site
- support self-paced solo learning without instructor involvement
