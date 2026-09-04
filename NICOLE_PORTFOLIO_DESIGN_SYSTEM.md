# Nicole Phan — Portfolio Design System

**Version:** 1.0  
**Status:** Working foundation  
**Primary concept:** **Structured Curiosity**  
**Art direction:** **Editorial System Notebook**

---

## 1. Purpose

This design system supports a personal portfolio for roles across **Business Analysis, Product, Product Operations and Digital Transformation**.

The portfolio should not behave like a CV with screenshots. Its job is to make one thing visible:

> **How Nicole makes sense of messy problems, connects people, business, operations, data and technology, and turns ambiguity into practical systems.**

The visual system should therefore prioritise **reasoning, decisions, trade-offs and evidence** over decoration.

---

## 2. Core Idea

### Structured Curiosity

The portfolio lives in the tension between:

- **Messy × Structured**
- **Human × Systematic**
- **Editorial × Analytical**
- **Exploration × Delivery**

The underlying layout is disciplined. The thinking layered on top is allowed to be curious.

### Visual metaphor

Use the idea of a **reasoning trace**:

```text
signal → pattern → insight → decision → system → outcome
```

The site should feel like a clear working notebook: polished enough to feel professional, but alive enough to reveal how decisions were made.

---

## 3. Brand Traits

The portfolio should feel:

- Clear
- Curious
- Structured
- Sharp
- Human
- Practical
- Slightly unconventional

It should **not** feel:

- Corporate-blue BA template
- Generic SaaS landing page
- AI-tech-bro / neon cyberpunk
- Overly playful scrapbook
- Designer portfolio focused on aesthetics alone
- Over-engineered or process-heavy

---

## 4. Design Principles

### 4.1 Show reasoning, not decoration
Every visual element should help explain a problem, decision, relationship or outcome.

### 4.2 Decision > feature
A case study should highlight **why a decision was made**, not just what was built.

### 4.3 Evidence earns attention
Screenshots, metrics and artefacts should appear only when they support a claim.

### 4.4 Reveal complexity progressively
Start with the simple story, then let users inspect detail where useful.

### 4.5 Keep ambiguity visible
Trade-offs, unknowns and constraints should not be hidden behind polished outcomes.

### 4.6 Maintain human accountability
Especially in AI-related work, show where systems assist and where humans retain judgement.

---

# 5. Visual Language

## 5.1 Foundation

The design system combines three cues:

1. **Editorial composition** — bold hierarchy, asymmetry, generous space
2. **Systems thinking** — grids, rules, labels, traces, structured cards
3. **Working notes** — compact annotations and questions layered onto the system

The result should feel like:

> **A disciplined system with traces of thought left visible.**

---

## 5.2 Colour System

### Primary palette

| Token | Value | Use |
|---|---:|---|
| `--canvas` | `#F5F1E8` | Main warm background |
| `--surface` | `#FBF8F2` | Cards / elevated blocks |
| `--ink` | `#171717` | Primary text |
| `--ink-soft` | `#5C5A56` | Secondary text |
| `--line` | `#D8D1C7` | Borders / dividers |
| `--muted` | `#E9E3D9` | Quiet backgrounds |
| `--signal` | `#D92D3A` | Primary accent / decisions / selected states |
| `--signal-soft` | `#F7DADD` | Accent background |

### Semantic colours

Use sparingly.

| Token | Value | Use |
|---|---:|---|
| `--success` | `#2F7D5A` | Shipped / confirmed / validated |
| `--warning` | `#A46800` | Unknown / needs review / check |
| `--info` | `#315A8A` | Informational state only |

### Colour rule

**Signal Red is semantic, not decorative.** Use it for:

- selected paths
- important decisions
- active states
- key links
- outcome emphasis
- trace highlights

Avoid large red backgrounds unless a section needs deliberate emphasis.

---

## 5.3 Typography

### Primary typeface

**Instrument Sans**  
Fallback: `Inter, Helvetica Neue, Arial, sans-serif`

Use for:

- hero statements
- headings
- body copy
- navigation
- project titles

### Utility typeface

**IBM Plex Mono**  
Fallback: `SFMono-Regular, Consolas, monospace`

Use for:

- labels
- status tags
- evidence markers
- timestamps
- section indexes
- small system annotations

### Type scale

| Token | Desktop | Mobile | Use |
|---|---:|---:|---|
| `display-xl` | 88–112px | 52–64px | Homepage hero |
| `display-lg` | 64–80px | 42–52px | Case-study hero |
| `h1` | 48–56px | 36–42px | Major section title |
| `h2` | 36–44px | 30–34px | Section heading |
| `h3` | 24–30px | 22–26px | Subsection heading |
| `body-lg` | 20–22px | 18–20px | Lead paragraph |
| `body` | 16–18px | 16px | Standard copy |
| `small` | 13–14px | 13px | Metadata |
| `label` | 11–12px | 11px | Mono tags |

### Typography rules

- Prefer **tight, confident headings**.
- Keep body copy comfortable and readable.
- Use mono for taxonomy, not large paragraphs.
- Avoid decorative serif as a default in V1.
- Do not use all caps for long text.

---

# 6. Layout System

## 6.1 Grid

Desktop: **12-column grid**  
Tablet: **8-column grid**  
Mobile: **4-column grid**

Suggested max-width:

```css
--page-max: 1440px;
--content-max: 1240px;
```

Suggested page padding:

```css
Desktop: 40–64px
Tablet: 28–40px
Mobile: 20px
```

### Composition rule

Do not centre every section.

Alternate between:

- full-width statements
- 4/8 text + evidence splits
- 8/4 decision + annotation splits
- full-width diagrams
- asymmetric project compositions

The portfolio should feel composed, not templated.

---

## 6.2 Spacing Scale

Use an 8px base system.

```text
4  / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
```

Guideline:

- 16–24px within compact components
- 32–48px between related blocks
- 64–96px between subsections
- 96–128px between major sections

---

## 6.3 Radius

Avoid SaaS-style excessive rounding.

```css
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;
--radius-pill: 999px;
```

Use:

- functional cards: 6–10px
- major media / section containers: 12–16px
- pills only for tags / state filters

---

## 6.4 Borders & Rules

Prefer **1px structural lines** over shadows.

```css
border: 1px solid var(--line);
```

Shadows should be rare and subtle.

Use lines to:

- connect ideas
- divide systems
- frame evidence
- establish hierarchy

---

# 7. Signature Components

## 7.1 Reasoning Trace

The primary portfolio device.

Purpose: show how an observation became a decision and then a working system.

Example:

```text
● SIGNAL
High traffic, few meaningful enquiries
│
├─ EVIDENCE
│  GA + leasing feedback
│
● INSIGHT
Prospects did not know which room suited them
│
● DECISION
Build a guided enquiry flow
│
● NEW SIGNAL
Better enquiries created a processing bottleneck
│
● SYSTEM
Rumi AI-assisted workflow
```

### Rules

- Vertical or horizontal depending on space
- Use `--signal` only for important nodes
- Keep labels mono
- Do not turn every section into a trace

---

## 7.2 Thinking Tags

Reusable taxonomy:

```text
OBSERVATION
EVIDENCE
ASSUMPTION
ROOT PROBLEM
CONSTRAINT
DECISION
TRADE-OFF
UNKNOWN
OUTCOME
REFLECTION
```

Style:

- IBM Plex Mono
- 11–12px
- uppercase
- slight letter spacing
- quiet border or muted background

Use tags to structure thought, not decorate cards.

---

## 7.3 Surface → Root Problem

A two-part diagnostic component.

Example:

```text
WHAT IT LOOKED LIKE
We needed more enquiries.

→

WHAT WAS ACTUALLY HAPPENING
Prospects did not understand which accommodation option suited them.
```

Visual treatment:

- left side muted
- connector line or arrow
- right side higher contrast / signal accent

Use once per case study where it genuinely reflects the work.

---

## 7.4 Decision Card

Decisions should be more prominent than features.

Structure:

```text
DECISION 02

Use rules to eliminate impossible options before AI reasons about preferences.

WHY
Known business constraints should not depend on probabilistic interpretation.

TRADE-OFF
More logic to define and maintain, but greater consistency and explainability.
```

Optional evidence can appear beside or below the decision.

---

## 7.5 Margin Question

A restrained annotation inspired by working notes.

Examples:

```text
WHY NOT AUTO-SEND?
WHO OWNS THE NEXT ACTION?
WHAT IF THE DATA IS UNKNOWN?
IS THIS A MISMATCH OR JUST A TRADE-OFF?
```

Style:

- small mono text
- rotate only if used sparingly
- never use handwriting fonts
- keep visually secondary

---

## 7.6 Evidence Frame

Used for screenshots, diagrams, metrics or artefacts.

Every evidence frame should answer:

> **Why am I looking at this?**

Structure:

```text
[EVIDENCE LABEL]
[focused crop / diagram]
[one-sentence annotation]
```

Avoid raw screenshot galleries.

---

## 7.7 Status Badge

Suggested statuses:

- `SHIPPED`
- `LIVE`
- `PRODUCT DISCOVERY`
- `IN PLANNING`
- `EXPERIMENT`

Use semantic colour carefully. Status should clarify delivery state, not gamify work.

---

# 8. Project Card System

Project cards should not all look identical.

Each card should include:

- project number
- project title
- one-line problem or transformation
- capability tags
- status
- one strong visual cue

Example:

```text
01 / SHIPPED

RUMI
AI-assisted enquiry handling

Turning a manual room-matching process into a structured, human-supervised decision workflow.

AI · PRODUCT · WORKFLOW AUTOMATION
```

### Project hierarchy

Recommended homepage order:

1. **Rumi — AI Engine Enquiry Handling Platform**
2. **RoomingKos Website Redesign**
3. **Tenant Portal Redesign — StarRez PortalX**
4. **Operational Hub Platform — Product Discovery / In Planning**

---

# 9. Case Study Structure

Each case study should broadly follow:

```text
Snapshot
↓
Situation
↓
What it looked like / What was actually happening
↓
Discovery
↓
Key insights
↓
Decisions & trade-offs
↓
Solution
↓
Making it real
↓
Outcome
↓
Reflection
```

Do not force every case study into identical visible headings. The skeleton should stay consistent, while emphasis changes by project.

### Project emphasis

**Rumi**  
Decision logic · AI · workflow · human-in-the-loop

**Website Redesign**  
Customer journey · information architecture · digital delivery

**Tenant Portal**  
Service design · platform constraints · self-service optimisation

**Operational Hub**  
Product discovery · systems thinking · operating model · roadmap

---

# 10. Rumi-Specific Visual Language

Rumi is the flagship case study and should demonstrate the system most fully.

### Key visual sequence

```text
High traffic / weak enquiry quality
↓
Guided Enquiry
↓
Structured data
↓
New processing bottleneck
↓
41 room candidates
↓
Eligibility rules
↓
Flexible ranking
↓
LLM reasoning
↓
Human review
↓
Customer-ready response
```

### Important system distinctions

Use visually distinct states for:

- **Impossible** — cannot work
- **Trade-off** — can work with compromise
- **Unknown** — needs human confirmation

Suggested treatment:

```text
Impossible → muted / struck / removed
Trade-off  → signal-soft / amber note
Unknown    → warning marker / “to check”
Selected   → signal red
```

### Rumi pull quotes

Use sparingly as large editorial statements:

> **Use rules where the business already knows the answer. Use AI where judgement and explanation add value.**

> **Automate the analysis, not the accountability.**

> **A good recommendation still fails if nobody knows who should act on it.**

---

# 11. Homepage Pattern

## Hero

Suggested direction:

```text
BUSINESS ANALYSIS / PRODUCT / DIGITAL SYSTEMS

I make sense of
messy problems.

I connect customer needs, business realities and technology to turn ambiguity into practical digital products and systems.

↓ see how
```

Optional system graphic:

```text
CUSTOMER ───────┐
BUSINESS ───────┼──── DECISION ──── WORKING SYSTEM
OPERATIONS ─────┤
DATA ───────────┤
TECHNOLOGY ─────┘
```

---

# 12. Motion Language

Motion should reinforce reasoning.

Use only a few repeatable behaviours:

### Scatter → Align
Messy inputs organise into a structure.

### Branch → Converge
Multiple possibilities narrow into a decision.

### Trace → Reveal
A line reveals the reasoning path as the user scrolls.

### Rules

- keep transitions 180–350ms
- avoid parallax-heavy effects
- avoid motion that blocks reading
- support `prefers-reduced-motion`

---

# 13. Interaction States

### Links

Default: ink  
Hover: signal red  
Underline or directional arrow encouraged.

### Buttons

Primary:

```text
background: var(--ink)
text: var(--canvas)
hover: var(--signal)
```

Secondary:

```text
transparent
1px border
```

Avoid large pill-shaped CTA buttons.

---

# 14. Accessibility

Minimum requirements:

- WCAG AA contrast for body text
- visible keyboard focus states
- semantic headings
- alt text for meaningful images
- captions for evidence screenshots
- no information communicated by colour alone
- motion reduced when requested
- body text minimum 16px
- interactive target minimum ~44px where practical

---

# 15. Content Rules

### Write like this

- “I found…”
- “The constraint was…”
- “We chose…”
- “This created a new bottleneck…”
- “The trade-off was…”
- “The system could not verify…”
- “I would change…”

### Avoid

- “Leveraged cutting-edge AI…”
- “Revolutionised…”
- “Seamlessly transformed…”
- “End-to-end” repeated everywhere
- generic BA activity lists
- unexplained artefact dumps

### Core narrative rule

Every important section should answer at least one of these:

1. What was happening?
2. Why was it actually a problem?
3. What did I investigate?
4. What did I learn?
5. What decision did I make?
6. What trade-off did that create?
7. How did it become buildable?
8. What changed after shipping?

---

# 16. CSS Token Starter

```css
:root {
  --canvas: #F5F1E8;
  --surface: #FBF8F2;
  --ink: #171717;
  --ink-soft: #5C5A56;
  --line: #D8D1C7;
  --muted: #E9E3D9;
  --signal: #D92D3A;
  --signal-soft: #F7DADD;

  --success: #2F7D5A;
  --warning: #A46800;
  --info: #315A8A;

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-pill: 999px;

  --page-max: 1440px;
  --content-max: 1240px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;
}
```

---

# 17. Definition of Done

Before a page is considered finished, check:

- Does the page show thinking, not just deliverables?
- Is the root problem clear?
- Are decisions and trade-offs visible?
- Does every screenshot have a reason to exist?
- Is delivery status accurate?
- Are confidential details sanitised?
- Is the page still understandable in 30–60 seconds?
- Is there enough depth for someone who chooses to keep reading?
- Does the visual system feel structured without becoming sterile?
- Does the page look like Nicole, rather than a generic portfolio template?

---

# 18. System Summary

```text
CONCEPT
Structured Curiosity

ART DIRECTION
Editorial System Notebook

PRIMARY TENSION
Messy × Structured

TYPE
Instrument Sans + IBM Plex Mono

COLOUR
Warm Ivory + Soft Black + Signal Red

SIGNATURE DEVICES
Reasoning Trace
Thinking Tags
Surface → Root Problem
Decision Cards
Margin Questions
Annotated Evidence

MOTION
Scatter → Align
Branch → Converge
Trace → Reveal

CORE RULE
The portfolio should visualise reasoning, not decorate outcomes.
```

---

## Next version

V1.1 should be updated after the first full Rumi case study is designed. Any component that does not help explain reasoning should be removed rather than expanded.
