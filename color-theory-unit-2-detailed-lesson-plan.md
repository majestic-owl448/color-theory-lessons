# Unit 2 Detailed Lesson Plan: Additive and Subtractive Color

## Implementation decisions (agreed before build)

| Lesson | Challenge tool | interactionType |
|--------|---------------|-----------------|
| L1 | Toggle comparison + classify-examples drag-to-column sort | `additive-sort` |
| L2 | RGB target matcher — recreate 5 target swatches with R/G/B sliders + check button | `rgb-mixer` |
| L3 | Pick-the-correct-rewrite — wrong statement shown, learner picks which of 4 rewrites uses screen/additive logic | `logic-fixer` |
| L4 | Pick-reasons multi-select — given a screen-vs-print mismatch scenario, learner selects correct explanations | `mismatch-explainer` |
| L5 | Background-shift challenge — same accent shown on dark and light UI, learner picks which feels stronger and why (multiple choice) | `background-shift` |
| L6 | Interface tuning lab — minimal UI mockup (nav + card + button) with R/G/B sliders per role; learner tunes until balance thresholds pass | `interface-tuner` |

**L5 steps also include:** a simplified pixel zoom explorer (CSS grid, zoom-in/zoom-out button) — purely visual, no challenge completion logic.
**Milestone:** folded into L6 (no separate route). Consistent with Unit 1.
**L4 lighting simulation:** simplified — static screen swatch vs CSS-filter-approximated print swatch side by side.

---

## Unit summary
This unit teaches the learner the practical difference between color made from light and color made from pigment. The goal is not to turn beginner designers into scientists. The goal is to help them stop carrying paint logic into screen design.

For digital designers, the most important outcome is understanding that screens use additive RGB color, while subtractive color is useful mainly as a contrast model that explains why paint, ink, and physical materials behave differently. Learners should leave this unit able to reason about screen color with more confidence and less intuition borrowed from physical media.

## Unit goal
Teach the learner to distinguish additive and subtractive color in practical terms and apply RGB thinking to digital design tasks.

## Unit outcomes
By the end of Unit 2, the learner should be able to:
- explain the difference between additive and subtractive color in plain language
- describe why screens use RGB light
- explain why paint and print do not behave like screens
- predict the general result of mixing red, green, and blue light
- identify when a learner is using paint logic for a screen problem
- use an RGB mixer to recreate simple target colors for interface design
- explain why subtractive color still matters conceptually for digital designers even when they mostly design for screens

## Unit structure
- **Target lesson count:** 6 lessons
- **Estimated lesson length:** 10 to 15 minutes each
- **Estimated unit duration:** 90 to 120 minutes including milestone
- **Unit milestone:** Mix for Screen
- **Milestone badge/title:** Screen Mixer

## Pedagogical approach
This unit should teach through contrast and correction:
1. start with the learner's existing intuition
2. show where that intuition works and where it breaks
3. demonstrate the visible difference between mixing light and mixing pigment
4. let the learner manipulate RGB directly
5. apply the concept to practical screen design decisions

Every lesson should anchor back to one practical point: if you are designing for a display, you need a screen-first mental model.

---

# Lesson 1: Two Ways Color Mixes

## Lesson purpose
Introduce additive and subtractive color as two different systems with different rules.

## Duration
10 to 12 minutes

## Learning objectives
By the end of this lesson, the learner should be able to:
- define additive color in simple terms
- define subtractive color in simple terms
- identify which model belongs to screens and which belongs to physical media
- explain why the two models should not be treated as interchangeable

## Key concepts
- additive color uses light
- subtractive color uses pigments or inks that absorb light
- screens and physical materials are not doing the same thing
- digital designers need to think in RGB first

## Key terms
- additive color
- subtractive color
- light
- pigment
- absorb
- emit
- RGB

## Lesson explanation outline
- Additive color starts from darkness and adds light.
- When more colored light is added, the result gets brighter.
- Subtractive color starts with light hitting a material, and the material absorbs some wavelengths and reflects others.
- When more pigments are mixed, more light is absorbed, so the result often gets duller or darker.
- For digital design, additive color is the main working model.

## Primary interaction
**Side-by-side mixing demo**
- Left side shows colored light beams combining.
- Right side shows simplified pigment swatches combining.
- Learner toggles between the two and compares the outcomes.

## Guided activity
**Pick the model**
Show examples such as phone screen, projector, watercolor paint, printed poster, LED sign, and magazine page. The learner sorts them into additive or subtractive.

## Practice task
Give the learner a set of statements and ask which one fits each model:
- adding more color can make the result brighter
- mixing usually absorbs more light
- this is how screens work
- this is how paint or ink works

## Quiz/check for understanding
- Multiple choice: Which model describes a laptop display?
- Multiple choice: Which model describes mixed paint?
- True or false: Additive and subtractive color follow the same visual rules.

## Success criteria
The learner can correctly classify common examples and explain the difference in one or two plain sentences.

## Common mistakes to anticipate
- thinking both models are just different names for the same thing
- assuming "mixing colors" always means the same visual result
- using CMYK language too early before the core distinction is understood

## Suggested feedback lines
- "Good. The key difference is whether color is being emitted as light or filtered by material."
- "This example belongs to the screen world, so think in RGB light."
- "Try asking: is this object glowing, or is it reflecting light?"

---

# Lesson 2: How RGB Light Works

## Lesson purpose
Give the learner a practical mental model for red, green, and blue light on screens.

## Duration
12 to 15 minutes

## Learning objectives
By the end of this lesson, the learner should be able to:
- explain why RGB is the core color model for screens
- predict the result of combining common RGB light pairs
- understand that additive mixing gets closer to white as more light is combined
- use an RGB mixer to create target colors

## Key concepts
- screens create color from light
- red, green, and blue are the main additive primaries used in displays
- pair combinations create familiar results
- full RGB combination moves toward white
- channel intensity controls the result

## Key terms
- red channel
- green channel
- blue channel
- channel intensity
- additive primary
- white light
- black background

## Lesson explanation outline
- On a screen, color is built by controlling the intensity of red, green, and blue light.
- No light gives black.
- More light produces brighter results.
- Common pairings:
  - red + green tends toward yellow
  - green + blue tends toward cyan
  - red + blue tends toward magenta
- All three at high intensity move toward white.

## Primary interaction
**RGB light mixer**
- Three sliders for red, green, and blue.
- Swatch updates in real time.
- Optional channel bars show which light is strongest.
- Preset buttons demonstrate key combinations.

## Guided activity
**Predict before reveal**
The learner sees slider positions and predicts the resulting color before the swatch appears.

## Practice task
**Target matching**
The learner is given 5 target colors and must recreate them using RGB sliders.
Examples:
- a strong pink accent
- a pale blue background
- a soft gray surface
- a bright warning yellow
- a dark navy panel

## Quiz/check for understanding
- Which channel mix is most likely to produce cyan?
- What happens when all three channels increase together?
- Which color would likely have low red and high blue values?

## Success criteria
The learner can use RGB sliders intentionally and identify broad outcomes from common channel combinations.

## Common mistakes to anticipate
- treating RGB as a memorization task instead of a visible system
- forgetting that gray values can come from equal RGB channels
- assuming every bright color needs all channels high

## Suggested feedback lines
- "Notice how equal channel values can create neutral grays."
- "Good. You are thinking in channels now, not just color names."
- "Try adjusting one channel at a time to see which one is causing the visible shift."

---

# Lesson 3: Why Paint Logic Fails on Screens

## Lesson purpose
Help the learner unlearn the most common mistaken intuitions borrowed from paint, markers, and print.

## Duration
10 to 12 minutes

## Learning objectives
By the end of this lesson, the learner should be able to:
- identify examples of paint logic being applied incorrectly to screen design
- explain why adding light is not the same as mixing pigment
- recognize when a visual prediction is based on the wrong model

## Key concepts
- physical intuition can be useful, but it is often misleading for screen color
- mixing paint often reduces brightness and clarity
- screen color channels do not behave like jars of paint
- digital design should be tested on actual displays, not only imagined from pigment rules

## Key terms
- mental model
- paint logic
- screen logic
- brightness
- reflected color
- emitted color

## Lesson explanation outline
- Many beginners think screen color should behave like paint because paint is familiar.
- This leads to wrong guesses about mixing, contrast, and brightness.
- A screen is not layering wet pigment. It is controlling emitted light.
- When learners switch from paint logic to screen logic, color decisions become more predictable.

## Primary interaction
**Wrong intuition detector**
Show statements such as:
- "If I mix more colors on screen, it should get muddier."
- "If I want a brighter color, I can raise the light channels."
- "A display is basically like digital paint."
The learner marks each statement as useful or misleading.

## Guided activity
**What went wrong?**
Present a beginner designer's mistaken explanation of a screen color result. The learner identifies which part is based on pigment thinking.

## Practice task
**Fix the reasoning**
Give three short scenarios where a learner predicts the wrong result. Ask the learner to rewrite the explanation using additive logic.

## Quiz/check for understanding
- Which statement best explains why screens use RGB?
- True or false: Screen color becomes duller because more pigment is mixed.
- Which of these is a sign of paint logic being used in the wrong context?

## Success criteria
The learner can spot at least two common examples of pigment-based reasoning being misapplied to digital work.

## Common mistakes to anticipate
- over-correcting and thinking subtractive color no longer matters at all
- confusing dark screen colors with "more ink-like" colors
- assuming every physical analogy is useless instead of just limited

## Suggested feedback lines
- "Exactly. The problem is not mixing itself. The problem is using the wrong kind of mixing."
- "This explanation still sounds like pigment language. Try describing light channels instead."
- "Subtractive color still matters, but it is not the main operating model for screens."

---

# Lesson 4: Subtractive Color for Digital Designers

## Lesson purpose
Teach subtractive color as useful background knowledge without letting it take over the digital design workflow.

## Duration
10 to 12 minutes

## Learning objectives
By the end of this lesson, the learner should be able to:
- explain subtractive color in practical terms
- describe why physical materials can look different from on-screen previews
- understand why digital designers still benefit from knowing the subtractive model
- distinguish conceptual understanding from daily workflow priority

## Key concepts
- subtractive color works by absorbing parts of incoming light
- physical materials are affected by lighting, ink, surface, and medium
- printed or painted results may differ from screen previews
- designers mainly working on interfaces still need to know why the difference exists

## Key terms
- subtractive primary
- absorption
- reflection
- surface
- medium
- print preview
- material color

## Lesson explanation outline
- Pigments and inks do not shine light out at the viewer.
- They reflect some wavelengths and absorb others.
- Because of this, physical color depends on both the material and the light hitting it.
- Digital designers may notice this when comparing a screen mockup to packaging, posters, or branded merchandise.
- Understanding subtractive color prevents unrealistic expectations about perfect visual matching.

## Primary interaction
**Screen versus material comparison**
- Show a color on a screen swatch.
- Show a simplified printed or painted version under different lighting conditions.
- Let the learner compare how stable or unstable the appearance feels.

## Guided activity
**Why does it look different?**
The learner chooses likely reasons a physical sample differs from the screen:
- lighting conditions
- surface finish
- pigment behavior
- screen brightness or gamut

## Practice task
**Explain the mismatch**
Give examples of a brand color on a phone, a laptop, and a printed card. Ask the learner to explain why exact matching is harder than it seems.

## Quiz/check for understanding
- Which model best explains a printed brochure?
- Why might a physical sample differ from a screen color?
- True or false: Knowing subtractive color is useless if you only design apps.

## Success criteria
The learner can explain why subtractive color still matters conceptually even when most daily work is screen-based.

## Common mistakes to anticipate
- diving too deep into print workflows that are outside scope
- thinking subtractive color is only for professional print designers
- assuming mismatches are always errors rather than model differences

## Suggested feedback lines
- "Right. Even screen-first designers benefit from knowing why physical color behaves differently."
- "This difference does not always mean someone made a mistake. The medium itself matters."
- "Keep the takeaway practical: understand the difference, but stay focused on digital design."

---

# Lesson 5: Seeing Pixels as Light, Not Paint

## Lesson purpose
Connect additive color to the actual behavior of displays and practical design choices.

## Duration
12 to 15 minutes

## Learning objectives
By the end of this lesson, the learner should be able to:
- describe a screen as a grid of light-based color output
- understand at a simple level that displays build visible color from tiny RGB-driven elements
- connect additive thinking to interface choices such as glow, brightness, and dark backgrounds
- explain why digital colors can feel vivid in ways paint does not

## Key concepts
- screens are composed of many tiny light-emitting or light-controlled units
- visible color on a display is built at small scale but perceived as a unified whole
- screen color can appear luminous because it is literally light reaching the eye
- dark interfaces can make accent colors feel stronger because of surrounding light contrast

## Key terms
- pixel
- subpixel
- display
- emitted light
- luminous color
- dark interface
- accent color

## Lesson explanation outline
- A display does not paint a flat surface. It controls many tiny color-producing elements.
- From normal viewing distance, the eye blends these into a single visible color.
- This helps explain why digital colors can feel bright, glowing, or intense.
- It also explains why color decisions on dark and light backgrounds can feel very different.

## Primary interaction
**Pixel zoom explorer**
- Let the learner zoom into a simplified pixel grid.
- Show how combined red, green, and blue elements create the larger perceived color.
- Then zoom back out to the full interface.

## Guided activity
**Glow or pigment?**
The learner compares a vivid screen accent to a similar physical swatch and explains why the screen version feels more luminous.

## Practice task
**Background shift challenge**
Show the same accent color on a light UI and a dark UI. Ask the learner to explain why it feels different and which context makes it seem stronger.

## Quiz/check for understanding
- What is the practical reason a screen color can appear to glow?
- Why can the same accent feel stronger on a dark background?
- True or false: A screen creates color by behaving like a painted surface.

## Success criteria
The learner can connect additive color to actual display behavior and to at least one practical interface decision.

## Common mistakes to anticipate
- getting too technical about hardware details
- assuming learners need engineering precision to benefit from the concept
- treating the pixel explanation as trivia rather than useful intuition

## Suggested feedback lines
- "Good. You do not need hardware-level detail, only the right practical picture in your mind."
- "Exactly. The color feels luminous because the display is sending light to your eyes."
- "Try linking the explanation back to a UI decision such as accent strength or background choice."

---

# Lesson 6: Applying Additive Thinking to UI Design

## Lesson purpose
Turn the conceptual distinction into practical design judgment.

## Duration
12 to 15 minutes

## Learning objectives
By the end of this lesson, the learner should be able to:
- use additive thinking to make better screen color decisions
- explain why some interface colors feel too harsh, too dim, or well-balanced
- reason about vivid accents, soft surfaces, and neutral backgrounds using RGB logic
- prepare for the next unit on digital color formats

## Key concepts
- additive thinking helps with color creation and adjustment on screens
- interface colors often work as systems, not isolated swatches
- vivid accents, neutral surfaces, and readable text all depend on intentional screen-first choices
- practical color design means balancing brightness, clarity, and emphasis

## Key terms
- accent color
- surface color
- neutral
- vivid
- muted
- screen-first decision
- palette balance

## Lesson explanation outline
- Designers rarely work with single colors in isolation.
- A screen-based palette often includes bright accents, quieter surfaces, and readable text colors.
- Additive thinking helps learners understand how those colors are created and adjusted.
- This mental model sets up the next unit, where learners work directly with HEX, RGB, HSL, alpha, and code-based color systems.

## Primary interaction
**Interface tuning lab**
- Give the learner a simple UI with a few editable color roles.
- Ask them to improve the screen palette by adjusting accent strength, panel depth, and visual balance.
- Encourage explanation in plain language, not just slider movement.

## Guided activity
**Too loud, too dull, or just right**
For several sample UIs, the learner classifies the color treatment and explains why.

## Practice task
**Build a mini screen palette**
The learner chooses:
- one main accent
- one dark or light surface
- one supporting neutral
- one highlight color
Then they explain how the palette behaves as a screen palette rather than a physical palette.

## Quiz/check for understanding
- Which explanation sounds most screen-aware?
- Which interface change best uses additive color thinking?
- Short response: Why is RGB the right mental model for digital UI work?

## Success criteria
The learner can make simple screen-oriented color decisions and explain the reasoning in practical terms.

## Common mistakes to anticipate
- falling back into vague aesthetic language only
- focusing on favorite colors instead of functional palette roles
- forgetting that this unit is a bridge to the technical formats in the next unit

## Suggested feedback lines
- "Nice. You are describing how the colors behave on screen, not just whether you like them."
- "That accent is vivid, but it now overpowers the interface. Try rebalancing it."
- "You are ready for the next step when you can explain the screen result in terms of channels and visible behavior."

---

# Unit Milestone: Mix for Screen

## Milestone purpose
Confirm that the learner can apply additive thinking to practical digital color tasks and explain the difference from subtractive thinking.

## Duration
15 to 20 minutes

## Milestone format
A guided challenge with three parts.

### Part 1: Sort the examples
The learner classifies 8 to 10 examples as additive or subtractive.
Examples can include:
- phone display
- projector beam
- printed flyer
- watercolor set
- LED billboard
- painted wall

### Part 2: Recreate target colors
Using an RGB mixer, the learner recreates several interface colors:
- bright CTA accent
- soft background blue
- muted neutral gray
- pale green success surface
- dark navigation bar

### Part 3: Explain the reasoning
The learner answers short prompts such as:
- Why is RGB the right model for screens?
- Why does paint intuition sometimes lead to bad screen predictions?
- Why is subtractive color still useful to understand?

## Milestone success criteria
The learner can:
- correctly classify most examples
- recreate most target colors with reasonable accuracy
- explain the core distinction in plain language
- use screen-first reasoning instead of paint-first reasoning

## Badge/title unlocked
**Screen Mixer**

## Suggested mastery statement
"You can now think about screen color as light, not as paint."

---

# Unit review recommendations
After this unit, the app should offer:
- a quick RGB remix challenge
- a 1-minute refresher on additive versus subtractive color
- a short bridge lesson introducing digital color notation for the next unit

## Suggested spaced review prompts
- Which model describes a laptop screen?
- What happens when more RGB light is added?
- Why can paint intuition be misleading for screen design?
- Why might a printed sample differ from a screen preview?

## Suggested bridge into Unit 3
End the unit by telling the learner:
- You now understand how screen color behaves.
- Next, you will learn how that color is written, adjusted, and stored in digital tools using HEX, RGB, HSL, alpha, gradients, and design tokens.

---

# Content authoring notes
- Keep all scientific explanations intuitive and visual.
- Do not let CMYK or print workflow take over the unit.
- Use the subtractive model to clarify contrast, not to redirect the course away from digital design.
- Always bring the learner back to the main question: what mental model helps you make better choices on screens?
- Avoid turning the unit into trivia about hardware or optical physics.
