# Lesson Plan: High-Level Curriculum Map

## Curriculum structure
6 units, ordered by topic progression.  
Each unit includes lessons, interactions, quizzes, and a milestone.

---

## Unit 1: Seeing and Describing Color
### Goal
Build the learner’s visual vocabulary.

### Topics
- what color does in interface design
- hue, saturation, lightness/value
- contrast
- warm vs cool colors
- visual hierarchy
- color relationships and harmony basics

### Key interactions
- interactive color wheel
- saturation/lightness sliders
- before/after hierarchy comparisons

### Assessments
- identify which color change affects hierarchy
- choose the clearer interface
- match terms to visible examples

### Milestone
**Milestone 1: Read the Interface**  
Learner analyzes a simple UI and explains how color guides attention.

---

## Unit 2: Additive and Subtractive Color
### Goal
Teach the practical difference between light-based and pigment-based models.

### Topics
- additive color with RGB light
- subtractive color as a conceptual contrast
- why screens use RGB
- why paint and print behave differently
- practical relevance for digital designers

### Key interactions
- RGB light mixer
- subtractive mixing explainer
- compare “screen result” vs “pigment expectation”

### Assessments
- identify whether an example is additive or subtractive
- explain why a screen cannot be reasoned about like paint
- manipulate RGB values to create target colors

### Milestone
**Milestone 2: Mix for Screen**  
Learner recreates target interface colors using additive controls.

---

## Unit 3: Digital Color in Programming
### Goal
Make learners comfortable with the color formats used in digital products.

### Topics
- HEX
- RGB / RGBA
- HSL / HSLA
- alpha/transparency
- HSV conceptually
- gradients
- CSS color usage
- design tokens
- theming
- sRGB vs Display P3
- basic contrast math in tools and code
- Canvas, SVG, and WebGL relevance at a practical level

### Key interactions
- code-to-color playground
- live preview of HEX/RGB/HSL changes
- alpha overlay simulator
- token-based theme sandbox

### Assessments
- convert between common color formats
- choose the right format for a task
- inspect a theme and identify color tokens
- spot mistakes in a coded palette

### Milestone
**Milestone 3: Build a UI Palette in Code**  
Learner creates a small color system with tokens for primary, surface, text, and feedback states.

---

## Unit 4: Human Vision and Color Blindness
### Goal
Teach how real users may perceive colors differently.

### Topics
- basic eye structure relevant to color
- cones and color perception
- common types of color blindness
- full-color deficiency awareness
- how interface meaning can break under simulation
- practical design habits for robustness

### Key interactions
- color blindness simulator
- compare original vs simulated interface
- redesign challenge under different vision modes

### Assessments
- identify which interfaces fail under simulation
- explain why color-only signals are risky
- redesign a UI state system to survive simulation

### Milestone
**Milestone 4: Design Beyond Your Own Eyes**  
Learner repairs a screen so it works across several simulated color vision conditions.

---

## Unit 5: Accessible Color and WCAG in Practice
### Goal
Teach designers how to use color accessibly in real products.

### Topics
- use of color as a design risk
- practical WCAG contrast rules
- text contrast
- large text contrast
- non-text contrast for controls and graphics
- semantic states with text/icons/patterns
- pass/fail checking workflows
- accessible links, buttons, charts, alerts, and form states

### Key interactions
- contrast checker
- WCAG pass/fail tester
- fix-the-broken-form challenge
- accessible status-system builder

### Assessments
- calculate or interpret contrast results through tools
- choose compliant text/background pairs
- detect where meaning relies only on color
- repair inaccessible UI patterns

### Milestone
**Milestone 5: Accessibility Rescue**  
Learner refactors a flawed interface to meet practical accessibility expectations.

---

## Unit 6: Applied Design Systems and Advanced Color Decisions
### Goal
Help learners apply color strategically in modern digital design.

### Topics
- semantic color systems
- hierarchy across pages and components
- brand constraints
- dark mode
- color in dashboards and data visualization
- palette scaling
- consistency across components
- wide-gamut awareness at a practical level
- building a durable theme for product design

### Key interactions
- full theme builder
- dark/light mode comparison lab
- chart palette tuner
- “design critique” challenge set

### Assessments
- create a coherent multi-state UI palette
- improve a dashboard color set
- adjust a theme for dark mode without losing meaning
- critique and revise a brand-driven UI

### Milestone
**Final Capstone: Ship a Practical Color System**  
Learner builds a small but complete product color system including:
- text colors
- surfaces
- primary/secondary accents
- semantic states
- light/dark mode variants
- accessible pairings
- a short rationale

---

## Cross-unit exercise types
These should appear throughout the curriculum:
- quick recognition drills
- palette reconstruction
- broken-vs-fixed design comparison
- contrast rescue missions
- code-to-visual matching
- visual debugging tasks
- mini design critiques
- short applied projects
- spaced review challenges

## Progress milestones
Suggested milestone labels:
- Color Observer
- Screen Mixer
- UI Color Coder
- Inclusive Vision Designer
- Accessibility Fixer
- System Builder

## Suggested pacing
This is self-paced, but a reasonable structure is:
- 6 units
- 4 to 6 lessons per unit
- 10 to 15 minutes per lesson
- 1 milestone per unit
- 1 final capstone

Estimated total: **20 to 35 hours**, depending on exercise depth and replayability.

## Suggested content sequencing rules
- introduce visual concepts before technical notation
- introduce RGB before subtractive nuance
- introduce accessibility before advanced aesthetics
- reinforce that good color choices are about function, not just taste
- revisit the same palette problems from multiple angles: theory, code, accessibility, and system design

## Deliverable summary
This app should function as:
- a beginner-friendly color theory game
- a practical accessibility trainer
- a digital color systems primer
- a bridge between design intuition and implementation reality
