# Unit 6 Detailed Lesson Plan: Applied Design Systems and Advanced Color Decisions

## Unit summary
This unit helps the learner move from isolated color choices to system-level thinking. Earlier units taught how to describe color, how digital color works, how users may perceive color differently, and how to make accessible decisions. This unit brings those ideas together in realistic product design work.

The learner should leave this unit understanding that good color work is not about picking a few attractive swatches. It is about creating a reliable, reusable system that supports hierarchy, meaning, accessibility, consistency, and adaptation across interface states and modes.

The tone should remain beginner-friendly and practical. The unit should avoid abstract design theory for its own sake. It should focus on digital product work: interface states, semantic roles, scalable palettes, dark mode decisions, brand constraints, chart colors, and display differences that matter in modern screen design.

## Unit goal
Teach the learner to create practical, consistent, accessible color systems for real digital interfaces.

## Unit outcomes
By the end of Unit 6, the learner should be able to:
- explain the difference between isolated color picking and system-level color design
- define semantic color roles such as surface, text, border, accent, success, warning, and error
- build a small reusable interface color system that supports multiple components and states
- preserve hierarchy and meaning while working within brand color constraints
- make practical color decisions for dark mode
- choose chart and data visualization colors that improve comprehension and reduce confusion
- recognize when a design depends too heavily on a single brand color or too few tonal steps
- explain why the same color can look different across contexts, surfaces, and displays
- make practical adjustments for wide-gamut and modern-screen concerns without going too deep into display engineering
- create a coherent final color system that combines aesthetics, usability, and accessibility

## Unit structure
- **Target lesson count:** 6 lessons
- **Estimated lesson length:** 14 to 20 minutes each
- **Estimated unit duration:** 2.5 to 3 hours including capstone
- **Unit milestone:** Ship a Practical Color System
- **Milestone badge/title:** System Builder

## Pedagogical approach
This unit should teach through construction, comparison, and revision:
1. shift the learner from picking single colors to assigning reusable roles
2. show how consistency improves interface quality and speed of decision-making
3. present realistic constraints such as branding, dark mode, and chart readability
4. require the learner to revise systems when they break under accessibility or context changes
5. reinforce that color systems are part of product thinking, not decorative afterthoughts
6. end with a capstone that feels like a small but realistic design systems task

The central idea of this unit is simple: color works best when it behaves like a system.

---

# Lesson 1: From Individual Colors to Color Systems

## Lesson purpose
Introduce system-level color thinking and show why interface design benefits from assigning colors to roles rather than choosing colors one screen at a time.

## Duration
14 to 18 minutes

## Learning objectives
By the end of this lesson, the learner should be able to:
- explain what makes a color choice part of a system rather than an isolated decision
- distinguish raw color values from semantic color roles
- identify the benefits of using reusable color roles across a product
- recognize when an interface feels inconsistent because colors were chosen ad hoc

## Key concepts
- isolated color choices do not scale well across products
- semantic roles help the same color decisions stay consistent across many screens
- a system improves clarity, speed, and maintainability
- color systems support hierarchy and state changes more reliably than one-off choices
- semantic naming is more useful in product work than storing decisions as disconnected hex values

## Key terms
- color system
- semantic role
- token
- accent
- surface
- hierarchy
- consistency

**Adds to glossary:** color system, consistency, semantic role *(accent color added by U1-L5; hierarchy added by U1-L5; surface color added by U2-L6; token added by U3-L1)*

## Lesson explanation outline
- Designers often begin by choosing colors visually, but products quickly become messy when every screen invents its own palette.
- A color system assigns jobs to colors. For example, one color may be used for primary actions, another for critical errors, another for subdued borders.
- This approach helps components stay predictable across a product.
- A semantic role describes what a color does, not only what value it is.
- Examples of roles include page background, card surface, primary text, muted text, divider, success, warning, error, and interactive accent.
- A useful system includes enough tonal range to support hierarchy without making everything shout for attention.

## Primary interaction
**Ad hoc or system?**
- Show two versions of the same small product interface.
- One version uses random but attractive colors in each area.
- The other uses a small set of semantic roles consistently.
- The learner clicks on examples of inconsistency and labels why they feel harder to scan or trust.

## Guided activity
**Assign the roles**
- Provide a set of raw colors and a sample UI.
- Ask the learner to map colors to roles such as:
  - app background
  - card surface
  - primary text
  - secondary text
  - action color
  - success
  - warning
  - error
- Reveal one possible good solution and explain tradeoffs.

## Practice task
**Name the tokens**
Present a mini palette and ask the learner to create beginner-friendly semantic names instead of storing them as only hex values.
Examples:
- `#111827` becomes `text-primary`
- `#F9FAFB` becomes `surface-page`
- `#2563EB` becomes `action-primary`

## Quiz/check for understanding
- What is the main advantage of semantic color roles?
- Why is a product harder to maintain when each screen uses unique one-off color decisions?
- Which name is more useful in a design system: `blue-500` or `button-primary-bg`?

## Success criteria
The learner can explain why color systems help products scale and can assign semantic roles to a simple interface.

## Common mistakes to anticipate
- assuming a palette alone is already a system
- confusing pretty swatches with reusable interface roles
- naming everything by hue without referencing function
- assigning too many equally strong accents

## Suggested feedback lines
- "Right. A system gives colors jobs, not just values."
- "Good. Semantic roles make interface decisions easier to reuse."
- "Try thinking about what the color needs to do across the whole product."

---

# Lesson 2: Building Semantic Color Roles for UI

## Lesson purpose
Teach learners how to define a small set of practical semantic roles for a digital interface and how those roles support components and states.

## Duration
16 to 20 minutes

## Learning objectives
By the end of this lesson, the learner should be able to:
- define a compact set of semantic roles for a beginner-level interface system
- distinguish content roles from status roles and interactive roles
- create enough tonal separation to support hierarchy across surfaces and text
- connect semantic roles to real UI components such as buttons, cards, alerts, tags, and inputs

## Key concepts
- semantic roles should cover structure, content, actions, and feedback
- text usually needs more than one level, such as primary and secondary
- surfaces often need multiple levels, such as page, card, and raised panel
- action colors need hover, focus, disabled, and pressed thinking even in a simplified system
- status colors should support labels and icons, not color alone

## Key terms
- primary text
- secondary text
- surface
- elevated surface
- accent
- semantic status
- component state
- hover
- focus
- disabled

**Adds to glossary:** component state, disabled, elevated surface, hover, primary text, secondary text, semantic status *(accent color added by U1-L5; focus indicator added by U5-L3; semantic role added by U6-L1; surface color added by U2-L6)*

## Lesson explanation outline
- A minimal UI system should usually account for at least these groups:
  - structural colors: backgrounds, surfaces, dividers
  - content colors: primary text, secondary text, inverse text
  - interactive colors: primary action, secondary action, links, focus indication
  - semantic colors: success, warning, error, info
- Roles should be reusable across many components.
- Strong systems rely on tonal hierarchy more than endless hue variety.
- Good systems make it easy to tell what is most important, what is interactive, and what state the user is in.
- Beginners should learn to keep the first system small and expandable.

## Primary interaction
**Role builder**
- The learner receives a blank set of semantic slots.
- They assign colors to each slot from a limited palette.
- A live preview updates a sample UI containing cards, text, buttons, alerts, and form fields.
- The tool flags obvious issues such as weak text hierarchy or overly similar statuses.

## Guided activity
**Missing role diagnosis**
Show a system where several components exist but the semantic roles are incomplete.
Examples:
- no secondary text color
- no elevated surface color
- no distinct focus treatment
- warning and error too similar
The learner identifies which roles are missing and what breaks because of that.

## Practice task
**Map roles to components**
Provide a simple component list:
- page background
- navigation
- card
- primary button
- secondary button
- text field
- success toast
- warning banner
Ask the learner to assign which semantic roles each component should use.

## Quiz/check for understanding
- Why should a system usually include more than one text role?
- What kinds of roles are needed for a useful interface color system?
- Why is a focus indication important even when the rest of the system looks polished?

## Success criteria
The learner can build a compact semantic role set and connect those roles to common UI components and states.

## Common mistakes to anticipate
- using one brand color for all interaction and all semantic meanings
- failing to create enough difference between primary and secondary text
- forgetting focus visibility
- building many roles without clear purpose

## Suggested feedback lines
- "Correct. A strong system separates structure, content, action, and status."
- "Good. Components become easier to design when roles are already defined."
- "Try reducing random variation and strengthening role clarity."

---

# Lesson 3: Brand Constraints and Hierarchy

## Lesson purpose
Show how to work with brand colors without letting branding damage readability, hierarchy, or usability.

## Duration
14 to 18 minutes

## Learning objectives
By the end of this lesson, the learner should be able to:
- explain why brand colors cannot solve every interface need by themselves
- identify hierarchy problems caused by overusing a strong brand color
- create supporting neutrals and tonal variants around a brand anchor
- preserve accessibility and task clarity while respecting a visual identity

## Key concepts
- brand color is usually an anchor, not the whole system
- interfaces need support colors and tonal steps beyond the main brand hue
- hierarchy breaks when too many elements compete with the same emphasis level
- some brand colors work better as accents than as large areas or text colors
- good systems translate a brand into usable interface roles rather than copying marketing materials directly

## Key terms
- brand color
- supporting palette
- tonal scale
- emphasis
- visual hierarchy
- neutral system
- accent overuse

**Adds to glossary:** accent overuse, brand color, supporting palette, tonal scale *(emphasis added by U1-L1; hierarchy added by U1-L5; neutral added by U1-L4)*

## Lesson explanation outline
- Many beginners want to build an interface entirely from a favorite brand hue.
- In practice, products need neutrals, tonal steps, and semantic roles that support reading and interaction.
- Brand colors can be intense, low-contrast, or hard to scale across states.
- A useful approach is to keep brand color for accents or primary actions while using a neutral structure for surfaces and content.
- Designers should test whether brand use helps users scan the product or makes everything look equally important.

## Primary interaction
**Brand pressure challenge**
- Present a fictional brand with one dominant signature color.
- The learner must build a small UI using that brand while keeping text readable and hierarchy clear.
- A live preview shows whether the brand color is being overused.

## Guided activity
**Too much brand**
Show three interfaces:
- one with almost no visible brand presence
- one with balanced brand use
- one with brand color on buttons, text, links, cards, highlights, and backgrounds
Ask the learner to identify which version best supports task clarity and why.

## Practice task
**Build the support palette**
- Starting from one brand color, the learner chooses:
  - a page background neutral
  - a card surface neutral
  - primary and secondary text colors
  - a less intense secondary accent or divider color
- The system previews a dashboard or marketing sign-up page.

## Quiz/check for understanding
- Why is one brand color not enough for a complete interface system?
- What problem occurs when every important element uses the same strong accent?
- What role do neutrals play in interface hierarchy?

## Success criteria
The learner can translate a brand color into a usable interface system without sacrificing clarity or accessibility.

## Common mistakes to anticipate
- putting saturated brand color on large backgrounds without checking readability
- treating brand consistency as more important than task clarity
- using the accent color on too many competing elements
- ignoring the need for strong neutrals

## Suggested feedback lines
- "Right. Brand color should guide attention, not flood the whole interface."
- "Good. Strong neutrals often do more interface work than the accent itself."
- "Try saving the loudest color for the moments that matter most."

---

# Lesson 4: Dark Mode and Theme Pairing

## Lesson purpose
Teach practical dark mode thinking and show learners how to adapt a system without simply inverting every color.

## Duration
16 to 20 minutes

## Learning objectives
By the end of this lesson, the learner should be able to:
- explain why dark mode design is more than flipping light colors to dark
- create paired light and dark theme roles for key UI elements
- preserve hierarchy, emphasis, and semantic meaning across themes
- avoid common dark mode mistakes such as low-separation surfaces and overly bright accents

## Key concepts
- dark mode needs intentional tonal structure
- pure black and pure white are not always the best default choices
- surfaces need distinct levels even in dark themes
- semantic meanings should stay recognizable across theme modes
- bright accents can feel much stronger on dark backgrounds
- contrast must still be checked in both modes

## Key terms
- dark mode
- light mode
- theme pairing
- tonal separation
- surface depth
- inverse text
- mode adaptation

**Adds to glossary:** dark mode, inverse text, light mode, mode adaptation, surface depth, theme pairing, tonal separation *(dark interface added by U2-L5)*

## Lesson explanation outline
- Dark mode is not a one-click inversion of a light theme.
- Surfaces still need hierarchy: page background, card surface, raised panel, overlay, and divider areas should remain distinguishable.
- Text often needs softer light values rather than harsh pure white everywhere.
- Accent colors can appear more intense in dark mode, so balance may need adjustment.
- Status colors must preserve meaning while remaining readable and not glowing excessively.
- Designers should compare the same interface across modes to verify hierarchy and emotional tone.

## Primary interaction
**Light-to-dark translator**
- The learner starts with a small light theme.
- They must assign dark theme equivalents for:
  - page background
  - card surface
  - primary text
  - secondary text
  - action color
  - error and success states
- The preview toggles live between modes.

## Guided activity
**What broke in dark mode?**
Show a flawed dark theme where:
- card and page surfaces blur together
- secondary text is too faint
- bright accent dominates everything
- warning and error are too luminous
The learner identifies the failures and chooses targeted fixes.

## Practice task
**Balanced theme pair**
The learner must refine a light and dark pair for a small settings page or dashboard.
The task requires:
- at least three surface levels
- readable text hierarchy
- clear button emphasis
- distinct semantic alerts

## Quiz/check for understanding
- Why is simple inversion usually not enough for dark mode?
- What happens when surfaces are too similar in a dark interface?
- Why might an accent color need adjustment between light and dark themes?

## Success criteria
The learner can create a basic paired light/dark theme that preserves structure, readability, and meaning.

## Common mistakes to anticipate
- using pure black and pure white without considering comfort or hierarchy
- failing to separate surfaces enough in dark mode
- carrying over the same accent intensity from light mode without review
- forgetting to retest accessibility in both modes

## Suggested feedback lines
- "Correct. Dark mode needs its own hierarchy, not just inversion."
- "Good. The same accent can feel much louder on a dark background."
- "Try checking whether your cards still feel distinct from the page."

---

# Lesson 5: Color for Charts and Data Visualization

## Lesson purpose
Teach practical color choices for simple charts and dashboard visuals, with emphasis on clarity, grouping, and accessibility rather than decorative complexity.

## Duration
15 to 18 minutes

## Learning objectives
By the end of this lesson, the learner should be able to:
- choose chart colors that support comparison and interpretation
- avoid palette choices that become confusing in categorical and sequential data views
- make chart color decisions that remain usable for color blind users
- use labels, ordering, and contrast to reduce reliance on hue alone
- distinguish interface accent use from data encoding use

## Key concepts
- chart colors should clarify the data, not compete with it
- categorical data and sequential data often need different color strategies
- too many similar hues reduce readability
- labels, legends, patterns, and ordering matter alongside color
- dashboard chart colors should fit the broader UI without becoming visually muddy or overstimulating

## Key terms
- categorical palette
- sequential palette
- legend
- encoding
- data emphasis
- visual grouping
- chart contrast

**Adds to glossary:** categorical palette, chart contrast, data emphasis, encoding, sequential palette, visual grouping *(contrast added by U1-L3; legend added by U4-L3)*

## Lesson explanation outline
- Interface colors and chart colors do related but different jobs.
- In charts, color often represents groups, ranges, or emphasis.
- Categorical data usually needs clearly distinct categories.
- Sequential data often benefits from ordered light-to-dark change.
- Red-green pairings can be risky, especially when not supported by labels or position.
- Designers should avoid assigning many equally saturated colors if the chart needs fast interpretation.
- The best chart colors usually work together with labels, icons, ordering, and spacing.

## Primary interaction
**Chart palette tuner**
- Show a simple dashboard with bar charts, line charts, or category chips.
- The learner adjusts chart colors and sees simulation modes for color vision differences.
- The tool warns when multiple categories become too similar.

## Guided activity
**Which chart reads faster?**
Present paired examples:
- overloaded rainbow chart vs restrained category palette
- red-green status chart vs labeled, shape-supported chart
- weak sequential heatmap vs strong value progression
The learner explains which is more usable and why.

## Practice task
**Repair the dashboard**
Provide a flawed dashboard with:
- too many saturated categories
- poor legend matching
- chart colors too close to background accents
- red/green-only distinctions
The learner revises the chart palette and adds supporting cues.

## Quiz/check for understanding
- When should a designer use a sequential palette instead of category colors?
- Why is color alone risky in chart interpretation?
- What is one way to improve a red/green-heavy chart besides changing the hues?

## Success criteria
The learner can choose and revise chart colors so the data is easier to interpret and less dependent on color alone.

## Common mistakes to anticipate
- using the full rainbow without a data reason
- making chart colors compete with UI action colors
- relying on color differences too small to interpret quickly
- forgetting labels and legends as part of comprehension

## Suggested feedback lines
- "Right. Data color should clarify differences, not create noise."
- "Good. Labels and ordering can support interpretation when color is not enough."
- "Try reducing the number of competing hues and strengthening the structure."

---

# Lesson 6: Modern Screen Contexts and Final System Review

## Lesson purpose
Prepare the learner for real-world variation in how colors appear across devices, backgrounds, and modern displays, then synthesize the whole course before the final capstone.

## Duration
14 to 18 minutes

## Learning objectives
By the end of this lesson, the learner should be able to:
- explain in simple terms why the same color can look different in different contexts
- recognize practical implications of modern display variation without needing deep engineering knowledge
- identify context problems such as simultaneous contrast, surrounding color effects, and wide-gamut intensity differences
- perform a final quality review of a small interface color system before shipping it

## Key concepts
- colors are perceived in context, not in isolation
- surrounding colors can change how a swatch feels
- modern screens may display some colors more vividly than others
- a usable system should survive different contexts, not only look good in one polished mockup
- final review should check hierarchy, accessibility, semantic clarity, and consistency together

## Key terms
- context effect
- simultaneous contrast
- gamut
- wide-gamut display
- system review
- stress test
- consistency audit

**Adds to glossary:** consistency audit, context effect, simultaneous contrast, stress test, system review, wide-gamut display *(color gamut added by U2-L4)*

## Lesson explanation outline
- A color swatch on a blank white page may look different on a dark card, near a strong accent, or on a vivid modern display.
- Designers do not need deep color science to work practically, but they should know that context changes perception.
- Some colors may feel oversaturated or overly intense on certain screens.
- The best response is not fear, but review: test important pairs in context, compare modes, and check whether the system still feels balanced.
- Before shipping a color system, designers should run a compact quality checklist.

## Primary interaction
**System stress test**
- Present a small color system in multiple contexts:
  - light mode
  - dark mode
  - chart view
  - alert state
  - vivid display simulation
- The learner marks where the system feels too weak, too loud, too similar, or inconsistent.

## Guided activity
**Context surprise**
Show the same accent color in different surrounding environments.
Ask the learner to identify:
- where it feels brighter
- where it loses contrast
- where it looks less trustworthy or more aggressive
- where it blends into surrounding surfaces

## Practice task
**Final review checklist**
The learner reviews a near-complete mini design system and answers:
- Are semantic roles clear?
- Are text pairs readable?
- Are surfaces sufficiently separated?
- Are statuses distinct?
- Does dark mode still work?
- Do charts remain interpretable?
- Does the brand color dominate too much?
- Does anything feel risky under simulation or different display conditions?

## Quiz/check for understanding
- Why can the same hex color feel different in different contexts?
- What is the practical lesson of wide-gamut displays for a beginner designer?
- What should a designer check before shipping a color system?

## Success criteria
The learner can explain why context matters, perform a system review, and identify likely weaknesses before the final capstone.

## Common mistakes to anticipate
- judging colors only from isolated swatches
- ignoring how surrounding colors change perception
- assuming a system that works in one screen state is finished
- overreacting to display variation instead of using review and balance

## Suggested feedback lines
- "Correct. Colors are experienced in context, not as isolated codes."
- "Good. The goal is not perfect control on every display, but a robust system."
- "Try reviewing the full interface, not just the palette strip."

---

# Unit milestone: Ship a Practical Color System

## Milestone purpose
Require the learner to synthesize everything from the full course into one coherent, reusable, beginner-level product color system.

## Milestone duration
25 to 40 minutes

## Milestone scenario
The learner is given a small fictional product and must design a practical color system for it. Example products might include:
- a habit tracker
- a note-taking app
- a learning dashboard
- a budgeting tool
- a task manager

The learner must create a color system that works across core interface surfaces, text roles, actions, semantic statuses, and theme modes.

## Required deliverables
The learner must define and apply:
- page background
- at least two surface levels
- primary and secondary text
- border or divider color
- primary action color
- secondary or quiet action color
- success, warning, and error roles
- one basic chart or data view palette
- a dark mode adaptation or paired theme variant

## Milestone tasks
1. choose a primary brand anchor or accent direction
2. build a supporting neutral structure
3. assign semantic roles
4. test readability and accessibility for key text pairs
5. verify states do not rely on color alone
6. create a light and dark application of the system
7. check a simple chart or dashboard panel
8. complete a short rationale explaining the choices

## Milestone interaction format
**System builder capstone**
- palette slots for all required roles
- live product preview across multiple components
- contrast and simulation checks
- light/dark toggle
- simple chart preview panel
- checklist completion before submission

## Milestone scoring rubric
### 1. Structural clarity
Can the learner create clear surface, text, and divider roles?

### 2. Hierarchy
Does the system direct attention appropriately?

### 3. Accessibility
Do the key text and interface pairs meet practical accessibility expectations?

### 4. Semantic clarity
Are success, warning, and error roles distinct and understandable?

### 5. Theme adaptation
Does the system remain coherent in both light and dark contexts?

### 6. Restraint and consistency
Does the system feel cohesive rather than random or overloaded?

### 7. Data readability
Does the chart or dashboard color use support interpretation?

### 8. Rationale quality
Can the learner explain the practical reasoning behind the system?

## Milestone success criteria
The learner succeeds when they produce a small color system that:
- feels coherent and deliberate
- supports hierarchy and readability
- includes semantic roles and core states
- works in both light and dark contexts at a practical level
- avoids relying on color alone for key meaning
- handles at least one simple data-view scenario
- reflects product thinking rather than isolated visual choices

## Common failure modes
- too many strong accents competing at once
- weak text hierarchy
- inadequate surface separation in dark mode
- semantic colors too similar to each other
- overuse of brand color
- chart colors that confuse rather than clarify
- missing rationale for key choices

## Suggested milestone feedback lines
- "Strong work. Your system feels reusable instead of screen-specific."
- "Good hierarchy. The accent color is focused where it matters most."
- "Your dark mode structure holds together well across surfaces."
- "Check your semantic states. Warning and error still feel too close."
- "Your chart palette needs more support from labels and contrast."
- "Try simplifying the system. Fewer, clearer roles will improve consistency."

---

# Unit-level assessment strategy
This unit should blend:
- recognition tasks
- construction tasks
- revision tasks
- comparison tasks
- one final capstone system build

Assessment should reward practical judgment, not just vocabulary recall.

## Evidence of mastery
A learner shows mastery in Unit 6 when they can:
- create a small semantic color system from scratch
- justify their hierarchy choices
- adapt the system to dark mode
- preserve accessibility under realistic constraints
- handle simple chart color choices sensibly
- review the full system for consistency before finalizing it

---

# Suggested implementation notes for the app
- keep previews realistic but visually simple
- let the learner switch quickly between screen contexts
- provide immediate feedback when a role is unclear or overused
- include before-and-after comparisons for brand, dark mode, and chart tasks
- use plain language for advanced topics like wide-gamut displays
- ensure the capstone feels like a satisfying culmination of the whole course

# Recommended review tags
- color systems
- semantic roles
- interface hierarchy
- brand constraints
- dark mode
- chart colors
- context effects
- final review
- capstone
