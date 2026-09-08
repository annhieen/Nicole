# Nicole Phan — Portfolio Design System

**Silver Glass × Amber Signal.** A personal-portfolio design system for Nicole Phan — business analysis, product, and digital delivery. Its job is to make one thing legible: *this is someone who can take ambiguous customer, business, operational, data and technology signals, understand how they relate, decide, and turn them into working systems.*

Core positioning: **"I make sense of messy problems."**
Brand concept: **Structured Curiosity** — complexity → structure → decision → working system.

---

## Sources

Everything here is derived from one source document, read via GitHub:

- **Repo:** https://github.com/annhieen/Nicole
- **File:** [`NICOLE_PORTFOLIO_DESIGN_SYSTEM_V2.md`](https://github.com/annhieen/Nicole/blob/main/NICOLE_PORTFOLIO_DESIGN_SYSTEM_V2.md) — "Nicole Phan — Portfolio Design System v2.0", the stated working source of truth.
- Branch `main`, commit `dbad5c384a16` at time of import.

That repository contains **no application code, no font binaries, no image or logo assets** — it is a written specification. Everything in this project is a first implementation of that spec: tokens, components, specimen cards and a UI-kit recreation of the portfolio it describes. Readers with repo access should read the source document alongside this project; where the two disagree, the source document wins (it says so itself, §33).

See `github.md` for sync metadata.

### Products / surfaces

One product: the **portfolio website** (home, four case studies, about, contact, external resume). Recreated in `ui_kits/portfolio/`. Rumi — an AI-assisted enquiry-handling product Nicole worked on — appears only as case-study *content*, not as a second surface; no Rumi UI exists in the source.

---

## Index

| Path | What it is |
|---|---|
| `styles.css` | The one stylesheet consumers link. `@import` lines only. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius-shadow.css`, `motion.css`, `base.css` |
| `components/core/` | GlassCard, Button, StatusChip, ThinkingTag |
| `components/reasoning/` | ReasoningTrace, DecisionCard, TradeOffState, UnknownCheck, SurfaceRootProblem, OutcomeMetric, SystemFlow, AnnotatedEvidence |
| `components/layout/` | SiteNav, ProjectCard, CaseStudySection |
| `guidelines/` | 17 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `ui_kits/portfolio/` | Click-through recreation: home, Rumi case study, about |
| `templates/portfolio-page/` | "Portfolio page" template — hero, evidence stack, selected work |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent-Skills entry point |

### Components

Every component ships `<Name>.jsx`, `<Name>.d.ts` and `<Name>.prompt.md`. The inventory is exactly the set the source document names (§11 signature components, §33 build list, §26–27 nav and buttons) — nothing invented.

- **Core** — `GlassCard`, `Button`, `StatusChip`, `ThinkingTag`
- **Reasoning** — `ReasoningTrace`, `DecisionCard`, `TradeOffState`, `UnknownCheck`, `SurfaceRootProblem`, `OutcomeMetric`, `SystemFlow`, `AnnotatedEvidence`
- **Layout** — `SiteNav`, `ProjectCard`, `CaseStudySection`

**Intentional additions:** none. `SystemFlow` and `AnnotatedEvidence` are named in §11 as signature components ("System Flow", "Annotated Evidence") and §24; `SiteNav` implements §26. No Toast, Avatar, Tabs, Modal or form primitives were added — the source defines none, and the portfolio has no forms beyond mail links.

---

## Content fundamentals

**Voice:** clear, intelligent, grounded, reflective, concise. Confident without overclaiming. The reader should feel they are being shown reasoning, not sold a personality.

**Person.** First person singular, plain: *"I make sense of messy problems."* *"I connect customer needs, business realities and technology…"* Never "we". Never third person. The reader is addressed implicitly, not as "you".

**Casing.** Sentence case for headlines and body — *"Rebuilding the customer journey from discovery to enquiry."* UPPERCASE is reserved for mono system labels: `OBSERVATION / 01`, `SHIPPED · 2026`, `RUMI / LIVE SYSTEM`, `NEEDS HUMAN CHECK`. If a phrase is uppercase, it must also be in IBM Plex Mono, and it must be a *label* — never a headline shouted.

**Spelling.** Australian/British English: *organisation, prioritisation, sanitised, artefact, colour, behaviour.* (Token names stay US-spelled — `--color-*` conventions and `colors.css` — code, not copy.)

**Sentence shape.** Short declaratives, often two in a row where the second reframes the first. *"Traffic was healthy. Meaningful enquiry was not."* Fragments are allowed when they are labels or verdicts: *"Rules first. AI where judgement adds value."*

**The narrative pattern**, used for every project: **what happened → what it meant → what I decided → why → what changed.** Decisions and trade-offs come before feature lists, always.

**Quoted voices** carry the reframe: surface symptom in quotes and muted — *"We need more enquiries."* — root problem in quotes and full contrast — *"Prospects did not understand which accommodation suited them."*

**Numbers.** Only defensible ones, and always with their context: `41 → 15 → 6 → 3`, `5–7 min → <1 min`. En dashes for ranges, `→` for transformations. Never invent a metric to fill a card; describe the change in words instead.

**Status honesty.** Operational Hub is `IN DISCOVERY` and must never be written as built, launched or measured. Planned work is never described as delivered.

**Never write:** "passionate about", "leveraging cutting-edge AI", "innovative solutions", "seamless experience", vague innovation claims, stacks of adjectives, corporate jargon.

**Emoji: never.** Not in UI, not in copy, not in headings. The mono label set does the work emoji would do elsewhere.

**Vibe check:** analytical, contemporary, calm, precise, editorial, slightly futuristic, human. If a sentence sounds like a LinkedIn post, delete it.

---

## Visual foundations

### Colour
Bright cool-neutral silver environment; warm amber as the **only** accent. Ratio discipline is part of the brand: **70–75%** silver/light neutral, **18–22%** translucent white surfaces, **5–7%** ink, **2–4%** amber. Amber means *decision, active state, selected path, meaningful signal, outcome, attention* — never a fill, never a mood. The page must never read as yellow. No second accent may be introduced without a design-system change; no bluish-purple gradients, no neon, no lime or lavender (both were explicitly retired).

Core: Silver Canvas `#F3F3F1` · Cool Mist `#E8EBEB` · Frost `#F7F7F4` · Ink `#14191C` · Slate `#687075` · Muted `#92999C` · Hairline `rgba(20,25,28,.10)`.
Signal: Signal Amber `#D99A24` · Deep Amber `#B97912` · Pale Amber `#F3E4C2` · Amber Glow `rgba(217,154,36,.18)`.

### Background
Never flat grey. The page is a *bright silver atmosphere*: two soft radial gradients (78%/20% and 15%/75%) over `#F3F3F1` — shipped as `--page-background`. Optional grain/noise at 1–2% opacity. No full-bleed photography in the source, no illustration, no repeating pattern, no hero image.

### Type
**Inter Tight** for everything structural — hero, headings, body, nav, project titles — at weights 400/500/600 with tight negative tracking (`-.055em` at hero, easing to `-.005em` at body). **IBM Plex Mono** only for system labels, metadata, status, project numbering, trace labels and technical annotation, 11–13px with `.06–.10em` tracking. Mono has a semantic role; using it decoratively breaks the system. Hero is `clamp(64px, 6.8vw, 112px)/.92`; body is 16–18px/1.55; body-large 20–22px/1.45.

### Spacing & layout
4px base: 4 8 12 16 20 24 32 40 48 64 80 96 120 160. 12-column desktop grid, `max-width: 1480px`, 40px page padding, 24px column gap, 120–160px between major sections. 8 columns at tablet, 4 at mobile. Editorial whitespace, not dashboard density. Fixed elements are limited to the header, which is sticky, translucent and hairline-bottomed — no floating action buttons, no sticky sidebars, no overlay chrome.

### Glass & transparency
Glass is functional language for information layers, evidence and system state — **not** decoration and not a wrapper for the page. Recipe: `rgba(255,255,255,.46)` surface, `1px rgba(255,255,255,.68)` border, `blur(18px)` (range 16–22px), surface opacity .38–.56, and a very soft double shadow `0 12px 36px rgba(25,35,40,.055)` plus `inset 0 1px 0 rgba(255,255,255,.72)`. Blur appears only on glass surfaces and the sticky header. No neon outlines, no glass on every component, contrast always maintained.

### Borders, radii, shadows
Default border `1px solid rgba(20,25,28,.10)`; active border `rgba(217,154,36,.55)`. Radii: 6px functional controls, 12px standard cards, 18–20px large glass, 999px pills. Shadows stay soft and low-contrast — `0 10px 30px rgba(15,25,30,.05)` for cards, the glass recipe above for glass, never a heavy drop shadow, never an inner-shadow "well". Cards are: hairline or white-glass border, generous padding, soft shadow, 12–18px radius — and they do **not** all share the same internal composition. No coloured left-border accent cards.

### Protection & contrast
Contrast comes from **capsules, not protection gradients**: text sits on frost, glass or ink surfaces rather than over imagery. Rumi may use one dark ink panel per page for contrast; the rest stay light.

### Motion
Motion reinforces **ambiguity → clarity**. Approved: Trace Reveal (nodes resolving in sequence), Fade + Resolve, Layer Convergence, Amber Hover Signal, subtle project-preview response. Duration 180–450ms on `cubic-bezier(.22,1,.36,1)` — an ease-out that arrives and settles, no overshoot. Forbidden: parallax everywhere, floating blobs, spring physics, flashy route transitions, constant loops. `prefers-reduced-motion` collapses durations to ~0.

### Hover & press
Hover is a **signal**, not a colour wash: amber node or amber underline appears, border shifts toward `rgba(217,154,36,.55)`, glass surface opacity lifts a step (.46 → .56). Links move from ink to Deep Amber with the underline picking up the active border colour. Press states darken rather than shrink — no scale-down bounce. Focus is a visible 2px Deep Amber outline at 2px offset; colour is never the only state cue, and targets stay around 44×44px.

### Imagery
No brand photography exists in the source. Where artefacts appear they are **cropped screenshots, annotated diagrams, recreated flows or sanitised workflows** — cool and neutral in tone, never warm-filtered, never grainy-editorial, never decorative. Three uncommented screenshots in a row is the named anti-pattern; every artefact answers a question via `AnnotatedEvidence` (CLAIM → EVIDENCE → ANNOTATION). Placeholders in this project are neutral hatch fills, deliberately not fake screenshots.

---

## Iconography

The source document specifies iconography in one short section (§27) and ships **no icon assets, sprite, icon font or SVG set**:

> simple outline · 1.5–1.75px stroke · monochrome · amber only when active

**What this system actually uses, and it is deliberate:** almost no icons. The iconographic layer is **typographic** —

- **Mono labels** do the work icons usually do: `OBSERVATION / 01`, `NEEDS HUMAN CHECK`, `SHIPPED · 2026`.
- **Nodes and traces**: a 7px dot (amber + `0 0 0 5px` glow when active, Muted when not) joined by 1px lines. This is the system's most recognisable graphic device and it is drawn with borders and dots, not SVG.
- **Unicode glyphs**, used sparingly and always inline with text: `→` transformation, `↗` external link, `←` back, `·` separator, `—` em-dash lead-in.
- **Amber signal dot** (6px + glow) as the "primary/active" marker on buttons and chips.
- **Emoji: never.**

**Substitution, flagged:** if a build genuinely needs a glyph set (search, close, chevron, mail), use **Lucide** from CDN — `https://unpkg.com/lucide@latest` — at `stroke-width: 1.5`, `currentColor`, 20px or 24px. Lucide is the closest match to the stated outline/1.5px/monochrome rule. **This is a substitution, not Nicole's set.** If a real icon set exists, send it and this section should be replaced.

**Logo: none exists.** The source ships no logo, wordmark or favicon. Per the brand's own nav spec the mark is rendered as **type** — the `NP` monogram in IBM Plex Mono in `SiteNav`, and the full name in Inter Tight on the project thumbnail. Nothing has been drawn or reconstructed. `assets/` is intentionally empty of brand marks; if a logo exists, drop the SVG in and point `SiteNav`'s `mark` at it.

---

## Design principles (from the source, unchanged)

1. **Reasoning before decoration** — every visual communicates a relationship, decision or piece of evidence.
2. **Tech without cliché** — systems, glass, traces and state language; no neon AI tropes.
3. **Calm complexity** — show complexity, preserve hierarchy.
4. **Amber means something** — a signal, not a fill colour.
5. **Show judgement** — decisions and trade-offs over feature lists.
6. **Preserve human control** — where AI appears, show where human judgement remains.
7. **Evidence over claims** — support claims with artefacts, data, process or defensible outcomes.

**North star:** does this make Nicole look like someone who can understand complexity, make good decisions and build useful digital systems? If not, simplify or remove it.

---

## Known gaps

- **Fonts are loaded from Google Fonts**, not local binaries — the source names Inter Tight and IBM Plex Mono but ships no files. Both are genuinely available on Google Fonts, so this is a faithful load rather than a lookalike substitution. Send the licensed files if self-hosting matters.
- **No logo, no photography, no icon set, no real screenshots.** Artefact slots use neutral hatch placeholders.
- **Only Rumi has a full case-study screen.** Website Redesign, Tenant Portal and Operational Hub exist as project cards; the source describes their emphasis but provides no page content, so no pages were invented.
