# Design System: AMS Patrimoine — "The Architectural Ledger"

**Project ID:** `12192621620308713436`
**Device:** Desktop-first (1280px), with mobile variants (390px)
**Atmosphere:** High-end editorial wealth management — serene, authoritative, bespoke

---

## 1. Visual Theme & Atmosphere

The creative north star is **"The Architectural Ledger"** — a digital environment that balances the weight of historic Toulouse stone with modernist precision. The experience evokes a private vault or high-end gallery, not a SaaS dashboard.

**Core Principles:**

- **Intentional Asymmetry** — Imagery bleeds off-grid; overlapping containers break the "box" feel
- **High-Contrast Typography** — Dramatic scale shifts between serif headlines and sans-serif body
- **Textural Depth** — Tonal shifts and semi-transparent layers replace structural borders
- **Expansive Breathing Room** — Generous whitespace; if it feels enough, add 20% more

---

## 2. Color Palette & Roles

### Primary Tones

| Role                     | Name           | Hex       | Usage                                      |
| ------------------------ | -------------- | --------- | ------------------------------------------ |
| **Primary**              | Absolute Black | `#000000` | High-contrast headlines, primary CTAs      |
| **Primary Container**    | Deep Navy      | `#081a3e` | Hero buttons, dark sections, gradient base |
| **On Primary**           | Pure White     | `#ffffff` | Text on primary surfaces                   |
| **On Primary Container** | Muted Lavender | `#7483ad` | Gradient endpoint for CTA "silk finish"    |

### Secondary & Accent

| Role                    | Name                | Hex       | Usage                                             |
| ----------------------- | ------------------- | --------- | ------------------------------------------------- |
| **Secondary**           | Heritage Gold       | `#6d5d33` | Sparingly — key numbers, icons, ghost button text |
| **Secondary Container** | Soft Blue           | `#85a9ff` | Accent highlights                                 |
| **Tertiary Fixed**      | Champagne Parchment | `#e6e2d5` | Premium chips, subtle accent backgrounds          |

### Surface Hierarchy (The Layering Stack)

| Layer              | Name                     | Hex       | Purpose                                               |
| ------------------ | ------------------------ | --------- | ----------------------------------------------------- |
| **Base Canvas**    | Surface                  | `#fafaf4` | Primary background — warm off-white                   |
| **Section Layer**  | Surface Container Low    | `#f4f4ef` | Secondary content areas                               |
| **Elevated Layer** | Surface Container        | `#e5effa` | Mid-depth containers                                  |
| **Card Layer**     | Surface Container Lowest | `#ffffff` | Highest-priority interactive elements, "lifted" cards |
| **Hover State**    | Surface Container High   | `#dfe9f4` | List item hover, subtle interaction feedback          |

### Semantic

| Role                | Hex       | Note                                                                    |
| ------------------- | --------- | ----------------------------------------------------------------------- |
| **Error**           | `#ba1a1a` | Use sparingly, tinted to match palette; never full-saturation alert red |
| **Error Container** | `#ffdad6` | Subtle error backgrounds                                                |
| **Outline**         | `#75777f` | Structural outlines (rare)                                              |
| **Outline Variant** | `#c5c6cf` | Ghost borders at 15% opacity only                                       |

---

## 3. Typography Rules

### Font Pairing

- **Headlines & Display:** `Noto Serif` — the editorial "Patrimoine" voice of legacy and authority
- **Body, Labels & UI:** `Inter` — the functional, modern precision voice

### Hierarchy

| Token        | Size    | Font            | Usage                                                |
| ------------ | ------- | --------------- | ---------------------------------------------------- |
| `display-lg` | 3.5rem  | Noto Serif      | Hero statements, aspirational headlines              |
| `display-md` | 2.5rem  | Noto Serif      | Section titles                                       |
| `headline`   | 1.75rem | Noto Serif      | Sub-section headers                                  |
| `body-lg`    | 1rem    | Inter           | General reading, descriptions                        |
| `label-sm`   | 0.75rem | Inter, ALL-CAPS | Category tags, secondary nav (0.05em letter-spacing) |

### Type Rules

- Headlines: tight `letter-spacing` (-0.02em) for cohesion and prestige
- Body text: never use `#000000`; use `on_surface_variant` (`#45464e`) for premium softness
- Numbers in hero context: use `Noto Serif` to make figures feel like "wealth" not "data"
- Small caps labels: `label-sm` + ALL-CAPS + 0.1rem letter-spacing for "labeled folder" aesthetic

---

## 4. Component Stylings

### Buttons

- **Primary CTA:** Background gradient from `primary_container` (`#081a3e`) to `on_primary_container` (`#7483ad`) for a polished, silk-like depth. Text: `on_primary` (`#ffffff`). Shape: `rounded-sm` (0.125rem) — sharp, architectural. Often paired with `arrow_forward` icon.
- **Secondary / Ghost:** Text-only in `secondary` (`#6d5d33`). No background, no border. Hover: subtle `surface-container-high` background.
- **Tertiary:** Text in `primary` with underline that expands from center on hover.

### Cards

- **No borders.** Elevation achieved through tonal layering: `surface-container-lowest` (`#ffffff`) card on `surface-container-low` (`#f4f4ef`) background.
- **No `<hr>` dividers.** Use spacing (2.75rem–3.5rem) to separate content within cards.
- **Hover:** Ambient shadow intensifies; no border appears.
- **Ambient Shadow:** `0px 20px 40px rgba(8, 26, 62, 0.05)` — tinted with `primary_container`, not grey.

### Navigation / Glass Header

- Semi-transparent `surface` at 70–80% opacity with `backdrop-blur: 20px`
- Sticky positioning; links: Accueil, Expertise, L'Approche, Le Cabinet, Contact
- Glass effect allows architectural imagery to bleed through

### Input Fields (Minimalist Ledger)

- Bottom border only, using `outline_variant` at 20% opacity
- Focus: border transitions to `secondary` (`#6d5d33`)
- Labels: `label-sm`, Inter, ALL-CAPS, 0.05em letter-spacing

### Signature: "The Architectural Blade"

- Full-bleed image container (Toulouse architecture photography)
- `surface-container-lowest` card overlapping bottom-left corner by 3.5rem
- Creates intentional asymmetry — breaks the standard grid layout

---

## 5. Layout Principles

### The "No-Line" Rule

**Borders are prohibited for section separation.** Boundaries are defined through:

1. Background color shifts between surface tiers
2. Generous negative space (4rem–5.5rem between sections)
3. Tonal transitions (subtle gradients between surface levels)

### Geometry & Spacing

- **Border Radius:** `0.125rem` (default) — sharp, architectural precision. Never use `rounded-lg` or `rounded-full` casually.
- **Spacing Scale:** Factor of 3. Key tokens: `4` (1.4rem), `8` (2.75rem), `10` (3.5rem), `12` (4rem), `16` (5.5rem)
- **Grid:** 3-column for service/expertise cards; full-width hero sections
- **Asymmetric Margins:** More padding on left than right in editorial sections

### Ghost Border Fallback

If accessibility requires a visible boundary, use `outline_variant` (`#c5c6cf`) at **15% opacity maximum**. A solid high-contrast border is a design failure.

---

## 6. Photography & Imagery

- **Subject:** Toulouse architecture — brick facades, bridges, historic restoration
- **Treatment:** Desaturated, warm tones (sepia or muted). Never oversaturated stock photos.
- **Integration:** Images are part of the interface, not decoration. Overlap text and glass layers onto them.
- **Glassmorphism Overlays:** `surface` fill at 70% opacity + blur allows warm Toulouse brickwork to bleed through

---

## 7. Key Screens Reference

| Screen          | ID                                 | Description                                     |
| --------------- | ---------------------------------- | ----------------------------------------------- |
| Accueil (V7)    | `3cc011725c834b52ac46a85e4bf81097` | Homepage — hero, ADN du Cabinet, expertise grid |
| Expertise (V5)  | `0f8de3ba78e74783bb5ffa8f41a3ffdb` | Service overview with 3-column cards            |
| Le Cabinet (V5) | `32baeb48e8ad41c681ed358b4c2784f7` | Firm history, team, leadership philosophy       |

---

## 8. Do's and Don'ts

### Do

- Use expansive white space — "breathing room" signals high-end banking
- Use `secondary` gold (`#6d5d33`) sparingly as a highlighter for key numbers or icons
- Treat Toulouse imagery as interface elements, not decorations
- Use `Noto Serif` for financial figures in hero contexts
- Maintain the warm, off-white `surface` (`#fafaf4`) as the dominant canvas

### Don't

- Use 1px solid borders to separate anything — use tonal shifts instead
- Use full-saturation alert colors — tint errors to match the palette
- Use `rounded-md` or `rounded-lg` casually — stick to `rounded-sm` or `none`
- Use 100% black (`#000000`) for body text — reserve it for headlines only
- Use grey-tinted shadows — tint shadows with `primary_container` (`#081a3e`)
