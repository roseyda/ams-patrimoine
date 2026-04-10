# Design System Document

## 1. Overview & Creative North Star: "The Architectural Ledger"

This design system is not a template; it is a bespoke digital environment designed for **AMS Patrimoine**. Our Creative North Star is **"The Architectural Ledger."**

Just as the architecture of Toulouse balances the weight of historic stone with the grace of modern restoration, this system balances authoritative, serif-led editorial layouts with precise, modernist functionalism. We are moving away from the "SaaS-blue" corporate world into a space that feels like a private vault or a high-end gallery.

We break the "standard" web feel through:

- **Intentional Asymmetry:** Allowing imagery of Occitanie architecture to bleed off-grid or overlap containers.
- **High-Contrast Typography:** Utilizing dramatic scale shifts between Noto Serif headlines and Inter body copy.
- **Textural Depth:** Replacing 1px borders with tonal shifts and semi-transparent layers that mimic fine stationery and frosted glass.

---

## 2. Colors & Surface Logic

Our palette is rooted in the heritage of the AMS logo: Deep Navy, Gold, and an expansive use of "Garonne Stone" off-whites.

### The "No-Line" Rule

**Explicit Instruction:** You are prohibited from using 1px solid borders to define sections. Layout boundaries must be achieved through background color shifts. For example, a `surface-container-low` (#f4f4ef) section should sit directly against a `surface` (#fafaf4) background. The transition should be felt, not seen.

### Surface Hierarchy & Nesting

Treat the UI as a series of physical layers. Use the surface-container tiers to create depth:

- **Base Layer:** `surface` (#fafaf4) — The primary canvas.
- **Section Layer:** `surface-container-low` (#f4f4ef) — Use for secondary content areas.
- **Card/Component Layer:** `surface-container-lowest` (#ffffff) — Reserved for the highest priority interactive elements to make them "lift" off the page naturally.

### Signature Textures & Glass

To provide a "High-End Editorial" feel:

- **The Glass Rule:** For floating headers or navigation overlays, use a semi-transparent `surface` color with a `backdrop-blur` of 12px–20px.
- **CTA Soul:** Main buttons or hero elements should utilize a subtle linear gradient from `primary_container` (#081a3e) to `on_primary_container` (#7483ad) to provide a rich, silk-like finish.

---

## 3. Typography

The typography hierarchy is designed to convey the dual nature of wealth management: **Authority (Noto Serif)** and **Precision (Inter).**

- **Display & Headlines (Noto Serif):** Use `display-lg` (3.5rem) for hero statements. The serif represents the "Patrimoine"—the legacy and history. Headlines should have a tighter `letter-spacing` (-0.02em) to feel cohesive and prestigious.
- **Body & Labels (Inter):** Use `body-lg` (1rem) for general reading. Inter provides a technical, modern contrast to the serif headings.
- **Tonal Depth in Type:** Never use 100% black for body text. Use `on_surface_variant` (#45464e) for long-form reading to reduce eye strain and increase the "premium" feel. Reserved `primary` (#000000) solely for high-contrast headlines.

---

## 4. Elevation & Depth

We reject the "drop shadow" of common UI kits. Instead, we use **Tonal Layering** and **Ambient Light.**

- **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` background. This creates a soft, natural lift that mimics heavy-stock paper.
- **Ambient Shadows:** If a floating effect is required (e.g., a dropdown or a modal), use a shadow with a blur of 40px and an opacity of 4%–6%, using a tint of `primary` rather than grey.
- **The "Ghost Border" Fallback:** If accessibility requires a container boundary, use the `outline_variant` token at **15% opacity**. A solid, high-contrast border is a failure of the design intent.
- **Glassmorphism:** Use it for high-impact architecture imagery overlays. A `surface` fill at 70% opacity with a blur allows the warm tones of Toulouse brickwork to bleed through the UI, grounding the app in its local context.

---

## 5. Components (Nuxt UI Translation)

### UButton

- **Primary:** Background of `primary_container` (#081a3e), Text `on_primary` (#ffffff). Use a `rounded-sm` (0.125rem) to maintain an architectural, sharp-edged look.
- **Secondary:** Ghost style using `secondary` (#6d5d33) for text. No background, no border. Hover state uses a subtle `surface-container-high` background.

### UCard

- **Style:** Remove all default borders.
- **Separation:** Forbid the use of horizontal divider lines (`<hr>`). Use the Spacing Scale (e.g., `8` or `10` units / 2.75rem or 3.5rem) to separate content sections within a card.

### UInput & UTextarea

- **Style:** Use a "Minimalist Ledger" style. Only a bottom border using `outline_variant` at 20% opacity.
- **Focus State:** Transition the bottom border to `secondary` (#6d5d33). Labels should be `label-sm` in Inter, all-caps with 0.05em letter spacing.

### Additional Signature Component: "The Architectural Blade"

- **Context:** Used for image-heavy sections (Toulouse architecture).
- **Design:** A full-bleed image container with a `surface-container-lowest` card overlapping the bottom-left corner by `spacing-10` (3.5rem). This intentional asymmetry breaks the "box" feel of standard Nuxt UI layouts.

---

## 6. Do's and Don'ts

### Do:

- **Do** use expansive white space. If you think there is enough space, add 20% more. High-end banking is about "breathing room."
- **Do** use the `secondary` gold (#6d5d33) sparingly as a "highlighter" for key numbers or icons.
- **Do** treat images of Toulouse as part of the interface, not just decorations. Overlap text and shapes onto them using the Glassmorphism rules.

### Don't:

- **Don't** use 1px solid borders to separate list items. Use a background shift to `surface-container-high` on hover instead.
- **Don't** use standard "Success Green" or "Warning Orange" at full saturation. Use the `error` (#ba1a1a) token sparingly and tinted to match the sophisticated palette.
- **Don't** use default `rounded-md` or `rounded-lg` for everything. Stick to `rounded-sm` (0.125rem) or `none` to maintain the "Architectural Ledger" precision.
