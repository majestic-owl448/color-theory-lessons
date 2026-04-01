# Unit 3 Detailed Lesson Plan: Digital Color in Programming

## Unit summary
This unit teaches beginner designers how digital colors are represented and manipulated in code. The goal is not to turn them into front-end engineers. The goal is to make them comfortable reading, choosing, and adjusting the color formats they will encounter in design tools, handoff docs, CSS, component libraries, and browser-based interfaces.

The learner should leave this unit able to move between visible color decisions and the code-like representations behind those decisions. They should understand the practical role of HEX, RGB, HSL, alpha, gradients, tokens, and basic color spaces used in modern digital products.

## Unit goal
Teach the learner to understand and use the most important color representations and systems used in digital product design.

## Unit outcomes
By the end of Unit 3, the learner should be able to:
- explain why digital products need explicit color formats
- read and recognize HEX, RGB, RGBA, HSL, and HSLA values at a practical level
- predict how common edits to digital color values will change the visible result
- explain when RGB is a good mental model and when HSL is easier for adjustment tasks
- use alpha and transparency deliberately in overlays, states, and layered interfaces
- understand gradients as controlled color transitions rather than decoration alone
- explain the practical role of design tokens and theme variables
- recognize the difference between color value, color meaning, and color usage
- describe sRGB and Display P3 at a practical awareness level
- understand why color in code still needs accessibility checking and visual testing
- build a small UI palette using token-style thinking

## Implementation decisions (agreed before build)

| Lesson | Challenge tool | interactionType |
|--------|---------------|-----------------|
| L1 | Clickable UI card: click an element to reveal its HEX, RGB, and HSL in a side panel | `format-reveal` |
| L2 | HEX + RGB dual editor — edit RGB sliders and see HEX update, or type HEX and see channels update | `hex-rgb-editor` |
| L3 | HSL playground — sliders for hue, saturation, lightness; shows HEX, RGB, and HSL simultaneously | `hsl-playground` |
| L4 | Layer stack simulator — foreground color with alpha over selectable backgrounds | `alpha-layer` |
| L5 | Theme sandbox with token-like roles including gradient editor (required, not optional) | `theme-sandbox` |
| L6 | Token map — change a base value and see all roles update; includes sort activity | `token-map` |
| L7 | Color space and context awareness lab — sRGB vs P3 preview, CSS/SVG/Canvas panel, sort activity | `color-space-lab` |

**L3 HSL tool:** renders all three formats (HSL, HEX, RGB) simultaneously. New tool — does not reuse the Unit 1 `HSLSliderTool`.
**L5 gradient editor:** required, not optional. Applies to a hero or chart card role in the theme sandbox.
**Original L6 is split into L6 (tokens) and L7 (color spaces + implementation contexts).** Unit 3 therefore has 7 lessons.
**Milestone:** has its own route (`/milestone/milestone-3`). Not folded into L7.

---

## Unit structure
- **Target lesson count:** 7 lessons
- **Estimated lesson length:** 12 to 18 minutes each
- **Estimated unit duration:** 2.5 to 3 hours including milestone
- **Unit milestone:** Build a UI Palette in Code
- **Milestone badge/title:** UI Color Coder
- **Milestone route:** `/milestone/milestone-3` (own route, not folded into last lesson)

## Pedagogical approach
This unit should teach through translation and manipulation:
1. start from visible color choices the learner already understands
2. reveal the coded representation behind those choices
3. let the learner adjust values and see instant visual feedback
4. compare formats based on real design tasks
5. move from isolated values to small system thinking

The unit should repeatedly reinforce one central idea: color values are tools for expressing design decisions. The learner is not memorizing syntax for its own sake. They are learning how to control digital interfaces more precisely.

---

# Lesson 1: Why Digital Design Needs Color Formats

## Lesson purpose
Introduce coded color formats as practical tools that help designers specify, repeat, and adjust digital colors consistently.

## Duration
12 to 15 minutes

## Learning objectives
By the end of this lesson, the learner should be able to:
- explain why digital products cannot rely on vague color descriptions alone
- describe the difference between a visible color and its coded representation
- identify common contexts where designers encounter color values
- explain why consistency matters across components and screens

## Key concepts
- digital interfaces need precise color instructions
- a named feeling such as "soft blue" is not enough for implementation
- coded formats let the same color be reproduced across a product
- color values support collaboration between design and implementation
- one visual color may be represented in multiple valid ways

## Key terms
- color value
- color format
- implementation
- theme
- variable
- token
- color picker

## Lesson explanation outline
- In digital products, the computer needs explicit instructions.
- A design tool might show a swatch, but the product needs a value such as HEX, RGB, or HSL.
- Designers encounter color values in style guides, CSS, design systems, browser tools, and component libraries.
- Exact values help keep buttons, surfaces, text, and status colors consistent.
- Without precise color definitions, the same product can drift visually across pages and contributors.

## Primary interaction
**Visible color versus code panel**
- Show a simple UI card with a few colored elements.
- Clicking an element reveals several representations of the same color: HEX, RGB, HSL.
- The learner sees that the visible swatch stays the same while the representation changes.

## Guided activity
**Where do these values appear?**
The learner matches common contexts to color format usage:
- CSS file
- design tool inspector
- browser dev tools
- design token file
- component documentation

## Practice task
**Fix the vague handoff**
Present a mock handoff note such as:
- "make the button a nice deep blue"
- "use a lighter gray here"
Ask the learner to improve each note using explicit, implementation-ready color information.

## Quiz/check for understanding
- Why is a precise color value useful in digital products?
- Can one visible color be represented in more than one format?
- Which is more implementation-ready: "warm coral" or `#FF6B5E`?

## Success criteria
The learner can explain in plain language why coded color formats matter and where they are used.

## Common mistakes to anticipate
- thinking coded color formats are only for developers
- assuming one format is "the real one" and others are fake
- treating color values as detached from actual visual design decisions

## Suggested feedback lines
- "Good. The format is not the design itself. It is the exact instruction for reproducing the design."
- "Right. Designers benefit from precision too, especially when colors must stay consistent."
- "Try thinking of the value as the product's shared reference for that color."

---

# Lesson 2: HEX and RGB

## Lesson purpose
Teach the two most common beginner-facing digital color formats and how they connect to screen behavior.

## Duration
15 to 18 minutes

## Learning objectives
By the end of this lesson, the learner should be able to:
- recognize HEX and RGB as common representations of digital color
- explain that RGB maps well to how screens emit light
- identify what changes when red, green, or blue channel values change
- read a HEX value as a compact representation of RGB information
- use either format to adjust a color toward a visible goal

## Key concepts
- RGB values describe the intensity of red, green, and blue channels
- HEX is a compact coded form commonly used in CSS and design tools
- equal RGB channels create grays
- changing a channel changes the visible result in predictable ways
- HEX is efficient, while RGB is often easier to reason about visually

## Key terms
- RGB
- RGBA
- HEX
- channel
- red channel
- green channel
- blue channel
- shorthand HEX
- neutral

## Lesson explanation outline
- RGB expresses color through red, green, and blue channel values.
- This aligns closely with additive screen color from Unit 2.
- HEX is another way to encode similar channel information.
- Designers do not need deep number theory here. They need pattern familiarity.
- Some patterns matter immediately:
  - equal channel values create neutral grays
  - higher values usually mean more light in that channel
  - extreme low values produce darker results
- Both HEX and RGB are useful in digital workflows.

## Primary interaction
**HEX and RGB dual editor**
- A single swatch updates live.
- The learner can edit RGB sliders and see the HEX value change.
- The learner can type a HEX value and see RGB channels update.
- Presets show common UI colors such as white, black, grays, brand blue, error red.

## Guided activity
**Spot the pattern**
Ask the learner to identify what is likely true from a value set:
- `rgb(240, 240, 240)`
- `rgb(20, 20, 20)`
- `rgb(0, 120, 255)`
- `#FFFFFF`
- `#000000`
- `#808080`
The learner answers questions such as:
- Is this light or dark?
- Is this likely neutral or colorful?
- Which channel is dominating?

## Practice task
**Reach the target in two formats**
The learner is shown three target UI swatches and must match each one twice:
1. once by dragging RGB sliders
2. once by selecting from partial HEX building blocks

## Quiz/check for understanding
- Which format maps most directly to screen color channels?
- What do equal RGB channels tend to produce?
- Which value is likely closer to white: `#F8F8F8` or `#181818`?
- Which is easier to reason about when adjusting one channel at a time: HEX or RGB?

## Success criteria
The learner can interpret common RGB and HEX patterns and use either format to produce a target result.

## Common mistakes to anticipate
- thinking HEX and RGB represent different kinds of colors
- assuming RGB is only for technical users
- confusing a dark saturated color with a low-saturation neutral
- reading HEX as random text instead of a structured value

## Suggested feedback lines
- "Correct. These formats describe the same visible world in different ways."
- "Nice. Equal channels usually signal a neutral gray path."
- "Try changing one channel at a time and watching only that effect."

---

# Lesson 3: HSL and HSLA

## Lesson purpose
Show why HSL is often easier for design-oriented adjustments such as shifting hue, muting a color, or making it lighter.

## Duration
15 to 18 minutes

## Learning objectives
By the end of this lesson, the learner should be able to:
- recognize HSL as a useful color format for design adjustments
- explain how hue, saturation, and lightness relate to visible changes
- choose HSL over RGB for tasks involving intuitive color tuning
- use HSLA when opacity is also part of the task
- explain that different formats can be more or less useful depending on the job

## Key concepts
- HSL maps cleanly to the visual dimensions introduced in Unit 1
- hue changes the color family
- saturation changes intensity or muting
- lightness changes the relative darkness or lightness
- HSL is often easier for palette variation and theme tuning
- HSLA adds alpha for transparency-aware control

## Key terms
- HSL
- HSLA
- hue
- saturation
- lightness
- alpha
- tonal variation
- color family

## Lesson explanation outline
- Unit 1 already introduced hue, saturation, and lightness as visible properties.
- HSL turns those same properties into a practical editing model.
- This often feels natural for designers because it matches how they talk about color changes.
- RGB is strong for channel thinking and screen logic.
- HSL is strong for controlled visual adjustments such as:
  - make this accent more muted
  - make this surface lighter
  - shift this green toward teal
- No format is universally best. Different tasks favor different formats.

## Primary interaction
**HSL playground**
- The learner manipulates hue, saturation, and lightness sliders.
- The app shows the same color in HSL, HEX, and RGB simultaneously — all three always visible, not toggled.
- A comparison panel lets the learner observe the same change in RGB and HSL side by side to see which is more direct for each task.
- This is a new tool (`hsl-playground`); it does not reuse the Unit 1 `HSLSliderTool`.

## Guided activity
**Pick the better tool**
For each design task, the learner chooses which format would be easier to work in:
- make the accent more muted
- warm this blue slightly
- darken the surface color a little
- nudge only the red channel
- create three lighter steps from a base color

## Practice task
**Build a scale**
Give the learner a base accent color and ask them to create:
- one darker version
- one lighter version
- one more muted version
- one more vivid version
- one nearby hue variant
The learner should do this using HSL controls and explain what they changed.

## Quiz/check for understanding
- Which HSL dimension changes the color family?
- Which format is often easier for making a color more muted?
- True or false: HSL is better than RGB for every possible task.
- What does the A in HSLA represent?

## Success criteria
The learner can intentionally change hue, saturation, and lightness and explain when HSL is a practical editing tool.

## Common mistakes to anticipate
- confusing lightness with saturation again when values change dramatically
- thinking HSL replaces RGB conceptually instead of complementing it
- assuming a more vivid color is always a better interface choice

## Suggested feedback lines
- "Good. HSL is often easier when the task matches how designers describe color changes."
- "That change made the color lighter, not more saturated."
- "Try asking which part of the color you really want to control first."

---

# Lesson 4: Alpha, Transparency, and Layered Color

## Lesson purpose
Teach the learner how opacity and layering affect perceived color in real interfaces.

## Duration
12 to 16 minutes

## Learning objectives
By the end of this lesson, the learner should be able to:
- explain what alpha or opacity does in digital interfaces
- predict how a semi-transparent layer changes over different backgrounds
- understand why the same overlay can feel different depending on what is underneath
- use transparency deliberately for overlays, states, and visual depth
- recognize when transparency harms contrast or clarity

## Key concepts
- alpha controls how opaque or transparent a color layer is
- transparency is relational because the background matters
- overlays, shadows, highlights, and states often depend on alpha
- semi-transparent color can look different on light and dark surfaces
- relying on transparency without testing can break readability and consistency

## Key terms
- alpha
- opacity
- transparency
- overlay
- blend perception
- layered interface
- scrim

## Lesson explanation outline
- A fully opaque color blocks what is underneath.
- A semi-transparent color mixes visually with the background beneath it.
- This is why the same overlay can look stronger or weaker in different contexts.
- Designers use alpha for hover states, modals, disabled states, image overlays, and subtle layers.
- But transparency can create accessibility problems when text or controls become hard to distinguish.

## Primary interaction
**Layer stack simulator**
- The learner chooses a foreground color with alpha and places it over different backgrounds.
- Backgrounds include white, dark gray, image textures, brand colors, and gradients.
- A live panel shows how the perceived result changes.

## Guided activity
**Same value, different result**
Show one translucent overlay on four different backgrounds. The learner identifies:
- where it reads clearly
- where it gets muddy
- where text on top becomes risky

## Practice task
**Build useful overlays**
The learner creates:
- a modal backdrop scrim
- a hover state overlay for a card
- a tinted image overlay for text readability
- a disabled button state that still remains understandable

## Quiz/check for understanding
- What does alpha control?
- Why can the same transparent color look different across screens?
- Which is riskier for readability: opaque black text on white, or semi-transparent text over an image?
- True or false: a transparent overlay can be judged correctly without considering the background.

## Success criteria
The learner can use alpha intentionally and explain why transparency must be evaluated in context.

## Common mistakes to anticipate
- thinking alpha changes the color in isolation rather than in relation to the background
- overusing transparency for style without checking legibility
- assuming a value that looks fine on white will also work on dark mode or imagery

## Suggested feedback lines
- "Exactly. Transparency is never a one-layer decision. The background changes the result."
- "Good catch. This overlay looks subtle on white but becomes heavy on a dark surface."
- "Try testing the same overlay on more than one background before deciding it works."

---

# Lesson 5: Gradients, CSS Color Usage, and Theme Building

## Lesson purpose
Connect color formats to real digital product usage by teaching gradients, semantic usage, and theme-level thinking.

## Duration
15 to 18 minutes

## Learning objectives
By the end of this lesson, the learner should be able to:
- explain that gradients are controlled transitions between colors
- recognize when gradients support hierarchy or mood and when they add noise
- identify common categories of product color usage such as text, surface, border, accent, and state
- understand the practical idea of a theme as a reusable set of color decisions
- explain why a product should not be built from isolated one-off values

## Key concepts
- gradients are transitions, not just decoration
- color usage categories matter as much as the raw values
- a theme is a coordinated set of color roles
- system thinking improves consistency and scalability
- CSS and design systems often organize color by role, not just by swatch name

## Key terms
- gradient
- linear gradient
- radial gradient
- surface color
- text color
- border color
- accent color
- semantic color
- theme

## Lesson explanation outline
- A product uses colors in roles: text, surfaces, borders, interactive accents, success states, warning states, and more.
- Thinking in roles is stronger than scattering random values across screens.
- Gradients can add hierarchy, energy, or depth, but they should still serve a function.
- Themes help designers maintain consistency across pages and modes.
- This lesson should move the learner from single-color editing toward small system thinking.

## Primary interaction
**Theme sandbox**
- The learner edits a small mock interface with token-like roles:
  - background
  - surface
  - primary text
  - secondary text
  - border
  - primary action
  - success
  - warning
  - error
- A gradient editor applies to a hero panel or chart card. This is required, not optional.

## Guided activity
**Value versus role**
Present several colors and ask the learner whether each label refers to:
- a raw value
- a usage role
- a visual style decision
Examples:
- `#1E88E5`
- primary button background
- muted surface
- error text
- hero gradient start

## Practice task
**Clean up the messy UI**
Show a UI that uses many unrelated color values. The learner must simplify it into a smaller, more coherent theme with clear roles.

## Quiz/check for understanding
- What is the difference between a color value and a color role?
- Why might a design system define `--color-text-primary` instead of hard-coding a value everywhere?
- Are gradients always decorative?
- Which is more scalable: storing one-off button colors on every screen, or defining shared theme roles?

## Success criteria
The learner can explain role-based color usage and build a simple, coherent theme instead of isolated swatches.

## Common mistakes to anticipate
- treating gradients as inherently modern or inherently bad
- confusing a token name with a visible color outcome
- thinking a theme is just a palette board rather than a usage system
- overusing accent colors because they feel exciting in isolation

## Suggested feedback lines
- "Nice. You are thinking in color roles now, not just individual swatches."
- "That gradient works because it supports emphasis, not because it is flashy."
- "Try reducing repeated one-off values and assigning clearer roles."

---

# Lesson 6: Design Tokens and Role-Based Color Systems

## Lesson purpose
Introduce learners to token-style color systems and the idea that color roles are separate from raw values.

## Duration
14 to 16 minutes

## Learning objectives
By the end of this lesson, the learner should be able to:
- explain what a design token does at a practical level
- distinguish a token name from its current assigned value
- explain why role-based naming makes themes and updates easier to manage
- demonstrate how changing one base value propagates through multiple interface roles

## Key concepts
- tokens separate meaning from raw values
- a token can change value while keeping the same product role
- role names describe usage, not appearance
- token systems make dark mode, brand changes, and scaling easier
- alias tokens and role tokens serve different levels of abstraction

## Key terms
- design token
- variable
- alias token
- role token
- theme propagation

## Lesson explanation outline
- Tokens help teams manage color at scale.
- Instead of writing the same raw value everywhere, the system can define roles such as primary text or interactive accent.
- This makes updates easier, especially for dark mode and theme changes.
- A token name describes the role; the value can be swapped without breaking the naming system.
- Alias tokens point to a base value; role tokens assign meaning to an alias.

## Primary interaction
**Token map**
- A simple token file appears on one side with a small interface preview on the other.
- The learner changes a base value and sees all roles that reference it update across the interface.
- A sort activity asks the learner to classify items as raw value, alias token, or role token.

## Guided activity
**Meaning versus value**
The learner sorts items into two buckets: raw value or semantic role:
- `#0B57D0`
- `--color-text-primary`
- `rgb(34, 34, 34)`
- `--color-success-bg`
- `--color-border`
- `#1a1a1a`

## Practice task
**Make the system flexible**
The learner starts with hard-coded values and converts them into a small token structure for:
- text
- surface
- border
- primary accent
- success state
- error state
Then they swap to a dark theme and observe how token changes propagate.

## Quiz/check for understanding
- What problem do design tokens help solve?
- What stays the same when a token value changes but the token's role does not?
- Which is more scalable: storing one-off button colors on every screen, or defining shared theme roles?
- True or false: A token role name describes how a color is used, not what it looks like.

## Success criteria
The learner can explain tokens, use role-based naming correctly, and demonstrate how token propagation works.

## Common mistakes to anticipate
- thinking tokens are only for large engineering teams
- confusing the role name with the actual visible value
- creating tokens without clear usage roles (token for every shade rather than every purpose)

## Suggested feedback lines
- "Correct. A token stores meaning in a reusable way, even when the underlying value changes."
- "Try naming the token by what it does, not what it looks like."
- "Good. One value change updated the whole system because your roles point to the same base."

---

# Lesson 7: Color Spaces and Practical Implementation Awareness

## Lesson purpose
Give learners lightweight awareness of sRGB, Display P3, Canvas, SVG, WebGL, and why code-defined color still needs accessibility checking and visual testing.

## Duration
13 to 16 minutes

## Learning objectives
By the end of this lesson, the learner should be able to:
- describe sRGB and Display P3 in simple product-oriented terms
- explain why colors may appear differently across devices or contexts
- recognize that browser graphics contexts such as Canvas, SVG, and WebGL still rely on explicit digital color values
- understand that code-defined color still needs accessibility checking and visual testing

## Key concepts
- sRGB is the common baseline color space for most web work
- Display P3 can represent a wider range of colors on supported displays
- not every screen shows color the same way
- coded graphics still need the same design judgment as normal UI colors
- contrast tools and visual testing remain necessary even with precise values

## Key terms
- sRGB
- Display P3
- color space
- color gamut
- Canvas
- SVG
- WebGL
- contrast checker

## Lesson explanation outline
- sRGB is the practical default for most web interfaces and the safe baseline.
- Display P3 can show more vivid colors on supported devices, but support and consistency still matter.
- Canvas, SVG, and WebGL each use explicit color values; the rendering context changes but the need for careful color decisions does not.
- Accessibility does not happen automatically just because a value is valid code.
- Wide-gamut colors that look vivid on one screen may clip or look different on another.

## Primary interaction
**Color space and context awareness lab**
- A swatch shows a vivid accent in sRGB and simulated Display P3 side by side.
- A panel shows the same color applied in a CSS UI element, an SVG icon, and a Canvas chart bar.
- The learner can adjust the accent and observe where clipping or inconsistency might occur.

## Guided activity
**Meaning versus value versus context**
The learner sorts items into three buckets:
- raw value
- semantic role
- rendering or device context
Examples:
- `#0B57D0`
- `--color-text-primary`
- Display P3
- chart bar fill
- `rgb(34, 34, 34)`
- `--color-success-bg`
- SVG icon fill

## Practice task
**Where does this color go?**
For each of three scenarios (CSS UI, SVG icon, Canvas chart), the learner identifies:
- which format is appropriate
- whether the color needs an accessibility check
- whether a wide-gamut value is safe or risky in that context

## Quiz/check for understanding
- Which is the safer default baseline for most web design work: sRGB or Display P3?
- True or false: If a color compiles in code, it is automatically accessible.
- Why might a vivid Display P3 color look different on a device that only supports sRGB?
- Does the rendering context (Canvas, SVG, HTML) change whether color choices need testing?

## Success criteria
The learner can describe the practical role of sRGB as a baseline, explain why Display P3 requires caution, and recognize that all digital color contexts still need accessibility review.

## Common mistakes to anticipate
- treating Display P3 as always better rather than context-dependent
- assuming graphics contexts handle accessibility for the designer
- thinking color choices are final once they render correctly in code

## Suggested feedback lines
- "Good. Wider color capability is useful, but consistency across real devices still matters."
- "A valid color value is not the same thing as a usable design decision."
- "The format compiles correctly — but has it been checked for contrast and meaning?"

---

# Unit review and synthesis

## Review purpose
Help the learner connect individual color formats and implementation concepts into one practical mental model.

## Review prompts
The learner should now be able to answer questions such as:
- Why do digital products need explicit color formats?
- When would RGB be easier than HSL?
- When would HSL be easier than RGB?
- Why can a transparent overlay behave differently on two backgrounds?
- What is the difference between a raw color value and a token role?
- Why might a color look different across screens or display contexts?
- Why is testing still necessary even when a color is valid code?

## Suggested review activity
**Format relay**
Show a small interface and ask the learner to:
1. identify the visible color roles
2. pick appropriate formats for adjusting them
3. fix one issue using RGB or HSL
4. convert the result into token-style names
5. check whether the final color choices still support readability

---

# Milestone: Build a UI Palette in Code

## Milestone purpose
Require the learner to apply Unit 3 knowledge by building a small but coherent digital color system using implementation-style thinking.

## Estimated time
20 to 30 minutes

**Route:** `/milestone/milestone-3` — own dedicated route, not folded into the last lesson.

## Milestone scenario
The learner is given a simple app screen, such as a task manager, onboarding page, or dashboard card layout. The current interface uses scattered hard-coded colors and inconsistent emphasis. The learner must rebuild it into a small, role-based color system suitable for implementation.

## Required outputs
The learner must define and apply colors for:
- app background
- surface or card background
- primary text
- secondary text
- border or divider
- primary action
- hover or active variation
- success state
- error state
- optional hero or chart gradient

## Required skills demonstrated
The learner must:
- choose colors intentionally instead of randomly
- use at least one implementation-friendly format consistently
- explain at least one adjustment using RGB or HSL logic
- use alpha correctly if overlays are included
- name colors by role, not just by value
- keep the system coherent across the full screen

## Milestone flow
### Step 1: Inspect
The learner reviews the broken starting UI and identifies problems such as:
- too many unrelated colors
- unclear emphasis
- weak text-to-background distinction
- missing role consistency
- unnecessary gradient noise

### Step 2: Define
The learner creates a small set of color roles and assigns initial values.

### Step 3: Apply
The learner maps those roles to the UI and observes the full-screen result.

### Step 4: Refine
The learner adjusts hue, saturation, lightness, alpha, or channel values to improve clarity.

### Step 5: Explain
The learner answers short prompts explaining why they chose certain roles and values.

## Example reflection prompts
- Why did you choose this primary accent?
- Which format was easiest for your adjustments and why?
- Where did you use alpha, if anywhere?
- How did token-style naming help organize your palette?
- Which part of the interface became clearer after the redesign?

## Success criteria
The milestone is complete when the learner produces a palette system that:
- has clear role-based naming
- supports a coherent screen design
- avoids obvious one-off color clutter
- demonstrates at least basic implementation awareness
- can be explained in plain design language

## Common failure patterns
- assigning values without clear roles
- choosing exciting accent colors but neglecting text and surface clarity
- using transparency decoratively without checking the result
- adding gradients that distract from the product goal
- creating a palette board that looks attractive but is not mapped clearly to interface roles

## Suggested milestone feedback lines
- "Good system thinking. Your colors now have jobs, not just appearances."
- "This palette is more coherent, but your text roles still need stronger separation."
- "Your token names are clear. Now check whether every role is actually used consistently."
- "The accent is strong, but the surrounding surface colors need more structure."

---

# Instructor and content design notes

## Tone and framing
- keep the language practical and non-technical when possible
- introduce code syntax gently, always tied to visible outcomes
- avoid turning this unit into a programming class
- reinforce that designers benefit from understanding implementation constraints

## Interaction design notes
- always show live visual output next to the code representation
- let learners switch between formats for the same swatch
- include copyable example values for familiarity
- keep all exercises browser-friendly and static-site compatible

## Assessment design notes
- prioritize interpretation and controlled adjustment over memorization
- reward reasoning such as "I lowered saturation to make the accent less loud"
- include at least a few tasks where multiple answers can be acceptable if the reasoning is sound

## Accessibility notes for this unit
- do not teach color through color alone
- label all swatches and controls with text
- when demonstrating gradients and alpha, include text descriptions of the change
- ensure all lesson interfaces used in this unit remain navigable by keyboard and understandable by screen readers

## Completion signal
At the end of Unit 3, the learner should feel that digital color values are no longer mysterious. They should be able to look at a color in a browser, design tool, or component system and say:
- what format it is in
- what kind of change they want to make
- which tool or format would help them make that change
- how that color should fit into a broader interface system
