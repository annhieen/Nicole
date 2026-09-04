# Nicole Phan — Portfolio Design System

**Version:** 2.0  
**Status:** Working source of truth  
**Primary use:** Personal portfolio website, case studies, and Claude implementation  
**Design direction:** **Silver Glass × Amber Signal**

---

## 1. Brand idea

### Core positioning

> **I make sense of messy problems.**

Nicole works across business analysis, product, digital delivery and systems thinking. The portfolio should communicate a person who can take ambiguous customer, business, operational, data and technology signals, understand how they relate, make decisions, and turn them into practical digital systems.

### Brand concept

**Structured Curiosity**

Visual transformation:

**complexity → structure → decision → working system**

The site should feel:
- analytical
- contemporary
- calm
- tech-savvy
- precise
- editorial
- slightly futuristic
- human

Avoid:
- generic corporate BA aesthetics
- playful scrapbook UX portfolios
- blue SaaS dashboards
- neon AI gradients
- cyberpunk visuals
- beige lifestyle minimalism

---

## 2. Art direction — Silver Glass × Amber Signal

The environment is bright, cool-neutral and silver-toned. Frosted glass represents information layers, evidence and system states. Warm amber is the only primary signal colour.

Conceptual tension:

> **Cool systems × warm judgement**

Amber means:
- decision
- active state
- selected path
- meaningful signal
- outcome
- attention point

Glass is functional visual language, not decoration.

---

## 3. Colour system

### Core palette

| Token | Value | Use |
|---|---|---|
| Silver Canvas | `#F3F3F1` | Main page background |
| Cool Mist | `#E8EBEB` | Atmospheric gradients |
| Frost | `#F7F7F4` | High-opacity surfaces |
| Ink | `#14191C` | Primary text/icons |
| Slate | `#687075` | Secondary text |
| Muted | `#92999C` | Metadata |
| Hairline | `rgba(20,25,28,0.10)` | Borders/dividers |

### Signal palette

| Token | Value | Use |
|---|---|---|
| Signal Amber | `#D99A24` | Primary accent |
| Deep Amber | `#B97912` | Higher-contrast accent |
| Pale Amber | `#F3E4C2` | Status chips |
| Amber Glow | `rgba(217,154,36,0.18)` | Active-node glow |

Approximate colour ratio:
- 70–75% silver/light neutral
- 18–22% translucent/white surfaces
- 5–7% ink
- 2–4% amber

**Amber must remain a signal, not become the overall colour of the page.**

---

## 4. Background treatment

The page should feel like a bright silver atmosphere, not a flat grey webpage.

```css
body {
  background:
    radial-gradient(
      circle at 78% 20%,
      rgba(225,230,229,.70),
      transparent 38%
    ),
    radial-gradient(
      circle at 15% 75%,
      rgba(235,234,229,.72),
      transparent 42%
    ),
    #F3F3F1;
  color: #14191C;
}
```

Optional: subtle grain/noise at 1–2% opacity.

---

## 5. Glass system

Glass is reserved for:
- reasoning cards
- evidence
- system diagrams
- system states
- interactive data blocks
- selected project metadata

Do not place the whole website inside glass containers.

```css
.glass {
  background: rgba(255,255,255,.46);
  border: 1px solid rgba(255,255,255,.68);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow:
    0 12px 36px rgba(25,35,40,.055),
    inset 0 1px 0 rgba(255,255,255,.72);
}
```

Rules:
- blur 16–22px
- surface opacity .38–.56
- subtle white border
- very soft shadow
- no neon outline
- no glassmorphism on every component
- maintain accessible contrast

---

## 6. Typography

### Primary typeface

**Inter Tight**

Fallback:

```css
font-family:
  "Inter Tight",
  "Inter",
  "Helvetica Neue",
  Arial,
  sans-serif;
```

Use for hero, headings, body, navigation and project titles.

### System typeface

**IBM Plex Mono**

Fallback:

```css
font-family:
  "IBM Plex Mono",
  "SFMono-Regular",
  Consolas,
  monospace;
```

Use only for:
- system labels
- metadata
- status
- project numbering
- trace labels
- technical annotations

Examples:

`OBSERVATION / 01`  
`RUMI / LIVE SYSTEM`  
`SHIPPED · 2026`  
`41 → 15 → 6 → 3`

Mono should have a semantic role, not be decorative.

---

## 7. Type scale

### Hero
```css
font-size: clamp(64px, 6.8vw, 112px);
font-weight: 600;
line-height: .92;
letter-spacing: -.055em;
```

### Case-study H1
56–72px, weight 600, line-height .96–1.02

### H2
36–48px, weight 550–600

### H3
24–30px, weight 550–600

### Body large
20–22px, line-height 1.45

### Body
16–18px, line-height 1.55

### Metadata
11–13px, mono, tracking .06–.10em

---

## 8. Grid and layout

Desktop:
- 12-column grid
- `max-width: 1480px`
- 40px page padding
- 24px column gap
- 120–160px between major sections

Tablet: 8 columns  
Mobile: 4 columns

Maintain hierarchy rather than shrinking desktop compositions literally.

---

## 9. Spacing tokens

Base unit: 4px

`4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 120 / 160`

Use generous whitespace. The site should feel editorial, not dashboard-dense.

---

## 10. Radius, borders and shadows

Radius:
- functional controls: `6px`
- standard cards: `12px`
- large glass surfaces: `16–20px`
- pills: `999px`

Default border:

```css
border: 1px solid rgba(20,25,28,.10);
```

Active border:

```css
border-color: rgba(217,154,36,.55);
```

Default shadow:

```css
box-shadow: 0 10px 30px rgba(15,25,30,.05);
```

Never use heavy drop shadows.

---

## 11. Core visual language

The portfolio should **visualise reasoning, not decorate outcomes**.

Signature components:
1. Reasoning Trace
2. Thinking Tags
3. Surface → Root Problem
4. Decision Cards
5. Trade-off States
6. Unknown / Human Check
7. Annotated Evidence
8. System Flow
9. Outcome Marker

---

## 12. Reasoning Trace

The signature component visualises how Nicole moves from signal to decision.

```text
OBSERVATION
      │
      ↓
INSIGHT
      │
      ↓
DECISION
      │
      ↓
SYSTEM
      │
      ↓
OUTCOME
```

For multi-input problems:

```text
SIGNAL A ─────┐
              │
SIGNAL B ─────┼──── DECISION ─── WORKING SYSTEM
              │
SIGNAL C ─────┘
```

Style:
- 1px trace lines
- mostly white/slate
- amber only for the active/meaningful node
- subtle amber glow allowed
- every visible connection must have meaning
- avoid decorative network spaghetti

---

## 13. Thinking Tags

Approved tags:

`OBSERVATION`  
`EVIDENCE`  
`ASSUMPTION`  
`CONSTRAINT`  
`INSIGHT`  
`ROOT PROBLEM`  
`DECISION`  
`TRADE-OFF`  
`UNKNOWN`  
`HUMAN CHECK`  
`OUTCOME`  
`SHIPPED`  
`IN DISCOVERY`

These labels explain why the user is seeing an artefact or piece of evidence.

---

## 14. Surface → Root Problem

Reusable problem-framing component.

```text
WHAT IT LOOKED LIKE
"We need more enquiries."

             →

WHAT WAS ACTUALLY HAPPENING
"Prospects did not understand which accommodation suited them."
```

Treatment:
- surface symptom = muted
- root problem = stronger
- small amber node/trace may connect them

---

## 15. Decision Card

Prioritise decisions over feature lists.

```text
DECISION / 02

Rules first.
AI where judgement adds value.

WHY
Known business constraints should not depend on probabilistic interpretation.

TRADE-OFF
More logic to define and maintain, but greater consistency and explainability.
```

Hierarchy:
1. decision
2. why
3. trade-off
4. evidence

---

## 16. Unknown / Human Check

Unknown is a valid state, not an error.

```text
UNKNOWN / 01

Female-only requirement
could not be confirmed.

[ NEEDS HUMAN CHECK ]
```

Use:
- glass card
- neutral text
- small amber indicator
- pale amber chip
- no red warning unless genuine risk/error

Principle:

> **Unknown data should become a visible decision point, not an AI assumption.**

---

## 17. Trade-off State

```text
TRADE-OFF / 02

$60 above weekly budget
but strongest room fit.

[ AI EXPLAINS THE COMPROMISE ]
```

Amber indicates active consideration or compromise. Do not treat every trade-off as failure.

---

## 18. Outcome State

```text
OUTCOME / 03

5–7 min → <1 min

manual analysis
with Rumi
```

Use a large metric, small context, and restrained amber emphasis.

Only use metrics that can be defended.

---

## 19. Hero system

Recommended content:

```text
BUSINESS ANALYSIS × PRODUCT × DIGITAL SYSTEMS

I make sense of
messy problems.

I connect customer needs, business realities
and technology to turn ambiguity into practical
digital products and systems.

LinkedIn · Email · Resume
```

The right side should present a simplified system composition using:
- Unknown
- Trade-off
- Outcome
- Rumi funnel / engine trace

Example:

```text
UNKNOWN
   │
TRADE-OFF
   │
OUTCOME ─────────────┐
                     │
                 41 candidates
                     ↓
                 15 after rules
                     ↓
                  6 viable
                     ↓
                  3 AI picks
```

The hero should signal systems thinking before the visitor reads a case study.

---

## 20. Selected Work

### 01 — Rumi
**AI-assisted Enquiry Handling**

Tags: `AI · Product · Workflow Automation`  
Status: `SHIPPED`

### 02 — Website Redesign
**Rebuilding the customer journey from discovery to enquiry**

Tags: `Customer Experience · Web Product · Digital Delivery`  
Status: `SHIPPED`

### 03 — Tenant Portal Redesign
**Improving tenant self-service within StarRez PortalX**

Tags: `Service Design · SaaS Platform · Customer Experience`  
Status: `SHIPPED`

### 04 — Operational Hub
**Designing a connected operating system for property operations**

Tags: `Product Discovery · Systems Thinking · Operations`  
Status: `IN DISCOVERY`

**Important:** Operational Hub is currently planning/discovery work. Never imply it has been built, launched or produced outcomes.

---

## 21. Project cards

Each project module may contain:
- project number
- title
- one-line transformation
- status
- year
- representative artefact
- open affordance

Use amber for numbering, active states and selected signals.

Rumi may use a dark visual panel to create contrast. Other cards may stay light.

Cards do not need identical internal compositions.

---

## 22. Case-study structure

High-level reasoning structure:

1. Snapshot
2. Situation
3. Problem
4. Discovery
5. Key Insights
6. Decisions & Trade-offs
7. Solution
8. Making It Real
9. Outcome
10. Reflection

Do not force every project into identical section layouts.

Emphasis by project:

- **Rumi:** AI logic, decision architecture, human-in-the-loop
- **Website Redesign:** customer journey, IA, prioritisation, digital delivery
- **Tenant Portal:** self-service, user pain points, SaaS constraints
- **Operational Hub:** current-state complexity, operating model, product discovery, roadmap

---

## 23. Rumi visual language

Rumi is the flagship case study.

### Product evolution

```text
High website traffic
      ↓
Low meaningful enquiry
      ↓
Guided Enquiry
      ↓
Better structured information
      ↓
New processing bottleneck
      ↓
Rumi
```

### Matching architecture

```text
41 ROOM CANDIDATES

↓

FEASIBILITY
Lease
Category
Occupancy
Availability

↓

FIT
Location
Price
Room fit
Special requirements

↓

RANK

↓

LLM REASONING

↓

HUMAN DECISION

↓

CUSTOMER-READY RESPONSE
```

### Principles to surface

> Structure the problem before automating it.

> Use rules where the business already knows the answer.

> Use AI where judgement, synthesis and explanation add value.

> Unknown data should become a visible decision point, not an AI assumption.

> Automate the analysis, not the accountability.

---

## 24. Artefact treatment

Do not dump screenshots.

Every artefact should answer a question.

Bad:

```text
Screenshot
Screenshot
Screenshot
```

Good:

```text
CLAIM

Location meant something different
for students and working professionals.

EVIDENCE

[cropped location ranking visual]

ANNOTATION

STUDENT
Campus commute

PROFESSIONAL
Suburb proximity
```

Prefer:
- cropped screenshots
- annotations
- recreated diagrams
- sanitised workflows
- synthetic customer examples

---

## 25. Motion

Motion should reinforce:

> **ambiguity → clarity**

Approved behaviours:
- Trace Reveal
- Fade + Resolve
- Layer Convergence
- Amber Hover Signal
- subtle project preview response

Avoid:
- decorative parallax everywhere
- floating blobs
- excessive spring physics
- flashy route transitions
- constant looping effects

Suggested duration: `180–450ms`

```css
cubic-bezier(.22,1,.36,1)
```

Respect `prefers-reduced-motion`.

---

## 26. Navigation

Desktop:

```text
NP                         WORK  ABOUT  RESUME ↗  CONTACT
```

Active state:
- thin amber underline or node
- no oversized tab

Contact may be a dark Ink pill with a small amber signal.

---

## 27. Buttons and icons

Primary button:
- Ink background
- white text
- optional tiny amber dot

Secondary:
- glass/outline

Text links:
- understated underline or arrow

Icons:
- simple outline
- 1.5–1.75px stroke
- monochrome
- amber only when active

---

## 28. Accessibility

Minimum:
- AA contrast for body text
- visible keyboard focus
- colour is never the only state cue
- motion respects reduced-motion preference
- meaningful visuals have alt text or supporting copy
- target size around 44×44px
- no essential text embedded only in raster images

---

## 29. Responsive behaviour

Mobile should be recomposed, not merely shrunk.

Hero order:

```text
Eyebrow
Headline
Support copy
Links
System evidence stack
```

Reasoning diagrams become vertical.  
Project cards stack.  
Avoid horizontal scrolling for essential reasoning flows.

---

## 30. Voice and copy

Voice:
- clear
- intelligent
- grounded
- reflective
- concise
- confident without overclaiming

Avoid:
- corporate jargon
- “passionate about”
- vague innovation claims
- “leveraging cutting-edge AI”
- excessive adjectives
- claiming planned work as delivered work

Preferred narrative pattern:

> **What happened → what it meant → what I decided → why → what changed.**

---

## 31. Design principles

### 01 — Reasoning before decoration
Every visual should communicate a relationship, decision or piece of evidence.

### 02 — Tech without cliché
Use systems, glass, traces and state language—not neon AI tropes.

### 03 — Calm complexity
Show complexity, but always preserve hierarchy.

### 04 — Amber means something
Amber is a signal, not a fill colour.

### 05 — Show judgement
Prioritise decisions and trade-offs over feature lists.

### 06 — Preserve human control
When AI appears, show where human judgement remains.

### 07 — Evidence over claims
Support major claims with artefacts, data, process or defensible outcomes.

---

## 32. CSS token starter

```css
:root {
  --canvas: #F3F3F1;
  --mist: #E8EBEB;
  --frost: #F7F7F4;

  --ink: #14191C;
  --slate: #687075;
  --muted: #92999C;

  --signal: #D99A24;
  --signal-deep: #B97912;
  --signal-pale: #F3E4C2;
  --signal-glow: rgba(217,154,36,.18);

  --hairline: rgba(20,25,28,.10);

  --glass-bg: rgba(255,255,255,.46);
  --glass-border: rgba(255,255,255,.68);

  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-pill: 999px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-30: 120px;
  --space-40: 160px;

  --ease-out: cubic-bezier(.22,1,.36,1);
  --page-max: 1480px;
}
```

---

## 33. Claude implementation rules

When this file is provided to Claude:

1. Treat it as the visual source of truth.
2. Preserve **Silver Glass × Amber Signal**.
3. Prefer **Inter Tight** + **IBM Plex Mono**.
4. Do not introduce additional accent colours without an explicit design-system change.
5. Do not turn every section into a rounded card.
6. Keep glass limited to evidence/system surfaces.
7. Preserve strong whitespace and editorial scale.
8. Build reusable components such as:
   - `GlassCard`
   - `ThinkingTag`
   - `ReasoningTrace`
   - `DecisionCard`
   - `OutcomeMetric`
   - `ProjectCard`
   - `StatusChip`
   - `CaseStudySection`
9. Always label Operational Hub as `IN DISCOVERY` unless project status changes.
10. Never invent project metrics, outcomes or responsibilities.
11. Treat screenshots as evidence; crop intentionally.
12. Keep animations subtle and functional.
13. Build responsive behaviour from the beginning.
14. If a generated design conflicts with this system, follow this system unless Nicole explicitly approves the deviation.

---

## 34. Suggested repo structure

```text
/
├── DESIGN_SYSTEM.md
├── README.md
├── public/
│   ├── images/
│   ├── projects/
│   │   ├── rumi/
│   │   ├── website-redesign/
│   │   ├── portalx/
│   │   └── operational-hub/
│   └── resume/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── data/
└── case-studies/
    ├── rumi.md
    ├── website-redesign.md
    ├── portalx.md
    └── operational-hub.md
```

---

## 35. Sitemap

```text
HOME
├── Hero
├── Selected Work
│   ├── Rumi
│   ├── Website Redesign
│   ├── Tenant Portal Redesign
│   └── Operational Hub
├── How I Work
├── About Preview
└── Contact

/work/rumi
/work/website-redesign
/work/tenant-portal
/work/operational-hub

/about

Resume ↗
```

---

## 36. Current approved visual direction

Closest current direction:

> **Bright cool-neutral background + frosted translucent system cards + near-black typography + restrained warm amber signals.**

The page should be brighter than the earlier blue/cool-grey exploration.

Amber replaces the earlier lime and lavender experiments.

Do not allow the implementation to become yellow overall.

---

## 37. North Star

When reviewing any design decision, ask:

> **Does this make Nicole look like someone who can understand complexity, make good decisions and build useful digital systems?**

If not, simplify or remove it.

---

**End of Design System v2.0**
