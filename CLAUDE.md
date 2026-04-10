# CLAUDE.md

This document defines the mandatory standards, workflow, and architectural rules that any AI assistant (e.g., Claude) must follow when generating or modifying code in this Nuxt project.

This file is the single source of truth.

---

# 🧱 TECH STACK

- Nuxt 4 (Vue 3 + Composition API)
- TypeScript (strict mode enabled)
- Nuxt UI v4
- Tailwind CSS v4
- @nuxt/image
- @nuxt/fonts
- @vueuse/core
- pnpm

No additional libraries should be introduced without strong justification.

---

# 📁 PROJECT STRUCTURE

Follow standard Nuxt 4 conventions:

- app/ → app.vue, global providers
- layouts/ → application layouts (default.vue, auth.vue, etc.)
- pages/ → file-based routing
- components/ → reusable UI components
- composables/ → reusable business logic (prefixed with `use`)
- server/ → API routes & server utilities
- assets/ → styles and raw assets
- public/ → static files
- types/ → shared TypeScript types

Do not create custom architecture patterns unless clearly justified.

---

# 🧠 VUE / NUXT STANDARDS

## Single File Components (SFC)

Always respect this order:

```vue
<script setup lang="ts">
  // logic
</script>

<template>
  <!-- markup -->
</template>

<style scoped>
  /* only if absolutely necessary */
</style>
```

### Mandatory Rules

- Always use `<script setup lang="ts">`
- Always use Composition API
- Never use Options API
- Script section MUST be before template
- Avoid `<style>` blocks (prefer Tailwind)
- Keep components small and focused

---

# 🟦 TYPESCRIPT RULES

- Strict mode is mandatory
- Never use `any`
- Always type:
  - props
  - emits
  - composables
  - API responses
  - function returns

- Extract complex types into `/types`

Example:

```ts
interface Props {
  title: string;
  description?: string;
}

const props = defineProps<Props>();
```

---

# 🧩 COMPOSABLES

- Must be prefixed with `use`
- Must return typed objects
- Must encapsulate business logic
- Prefer `@vueuse/core` over custom reimplementation
- No UI logic inside composables

---

# 🎨 UI & STYLING

## Nuxt UI v4

- Always prefer Nuxt UI components
- Do not recreate existing components
- Use slots properly
- Use the `ui` prop for styling overrides
- Never break the Nuxt UI design system

## Component Mapping (Mandatory)

- Buttons → UButton
- Cards → UCard
- Containers → centered max-width wrapper

## Tailwind CSS v4

- Utility-first only
- No inline styles
- No custom CSS unless absolutely required
- Keep spacing and color usage consistent

---

# 🖼 IMAGES

- Always use `NuxtImg`
- Never use `<img>` directly
- Always define `alt`
- Define explicit dimensions when possible
- Use lazy loading when appropriate

---

# 🔤 FONTS

- Must use `@nuxt/fonts`
- No manual CDN imports
- Centralize configuration in `nuxt.config.ts`

---

# 🌐 DATA FETCHING

- Use `useFetch` or `useAsyncData`
- Always type API responses
- Handle `pending` and `error`
- Never fetch directly inside templates

Example with useAsyncData:

```ts
const { data, pending, error } = await useAsyncData<User>('user', () => $fetch('/api/user'));
```

Example with useFetch:

```ts
const { data, pending, error } = await useFetch<User>('/api/user', {
  key: 'user',
});
```

---

# 📦 PACKAGE MANAGER

pnpm only. Never suggest npm or yarn.

Available commands:

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
pnpm lint
pnpm fmt
pnpm typecheck
```

---

# 🧰 COMMANDS (MANDATORY USAGE)

## Development

pnpm dev # Start dev server (localhost:3000)

## Build & Preview

pnpm build # Production build
pnpm preview # Preview production build locally

## Code Quality (REQUIRED BEFORE COMMIT)

pnpm lint # Lint with oxlint (auto-fix)
pnpm fmt # Format with oxfmt
pnpm typecheck # Type check with vue-tsc

---

# 🚨 PRE-COMMIT RULES (MANDATORY)

Before ANY commit:

1. Run `pnpm lint`
2. Run `pnpm typecheck`

If errors are found:
→ Fix them BEFORE committing

Formatting:
→ Run `pnpm fmt` if needed before final commit

Never accumulate errors across steps.

---

# ⚙️ DEVELOPMENT WORKFLOW (MANDATORY)

For every task:

1. Analyze
2. Create Execution Plan
3. Implement
4. Verify (dev + typecheck)
5. Refactor if needed
6. Update this file if necessary
7. Commit

❌ Never skip commit
❌ Never leave partial work

---

# 🧠 EXECUTION PLAN (MANDATORY BEFORE IMPLEMENTATION)

Before implementing ANY page or major feature, Claude MUST create an execution plan.

## PLAN STRUCTURE

### 1. Page Analysis

- URL
- Purpose
- Key sections

### 2. Sections Breakdown

Ordered list of sections

### 3. Component Mapping

- Reuse existing
- Create new if necessary

### 4. UI Mapping

- Nuxt UI components used

### 5. Data & Content

- Static or dynamic
- Props / slots

### 6. Risks

- Layout complexity
- Responsive issues

### 7. Reusability

- Can this be reused?

## Rules

- No coding before plan
- Prefer reuse over creation
- Follow consistency

---

# 🧠 DESIGN REVERSE ENGINEERING (MANDATORY)

Before implementing UI, extract:

## Colors

- Primary
- Secondary
- Neutral

## Typography

- Font sizes
- Font weights
- Line heights

## Spacing

- Section spacing
- Padding patterns

## Components

- Buttons
- Cards
- Layout patterns

Rules:

- Reuse extracted values
- Do not guess
- Maintain consistency

---

# 📉 TECHNICAL DEBT RULES

Forbidden:

- Duplicate components
- Inline styles
- Unused code
- Inconsistent naming

If detected:
→ Refactor immediately

---

# ⚡ PERFORMANCE RULES

- Use NuxtImg
- Lazy load heavy components
- Avoid unnecessary watchers
- Prefer computed over watch

---

# 🧠 GLOBAL RULE (CRITICAL)

The project must feel like it was built by ONE senior developer.

- Consistency over speed
- Reuse over duplication
- Clarity over cleverness

---

# 🧪 PRE-COMMIT THINKING

Before committing, ask:

- Is it reusable?
- Is it consistent?
- Is it optimal?

---

# 🧠 DECISION RULES

When unsure:

1. Reuse existing components
2. Follow established patterns
3. Stay consistent
4. Stay pixel-perfect

---

# 🚫 EXCLUSIONS

Do NOT implement:

- Cookie system
- Accessibility overlay

---

# 🧾 GIT CONVENTIONS

Use conventional prefixes:

- init:
- feat:
- layout:
- refactor:
- fix:

---

# ✅ DEFINITION OF DONE (MANDATORY)

A task is DONE only if ALL conditions are met:

## Code Quality

- pnpm lint passes
- pnpm typecheck passes

## Architecture

- No duplication
- Follows established structure

## Design

- Pixel-perfect match

## Functionality

- Works in dev
- No console errors

## Consistency

- Matches patterns

## Documentation

- CLAUDE.md updated if needed

## Git

- Proper commit created

---

# 🔄 CONTINUOUS IMPROVEMENT

Claude must:

- Refactor when necessary
- Improve architecture when relevant
- Keep this file updated

---

# 🏁 FINAL RULE

If something is:

- Inconsistent
- Duplicated
- Unclear

👉 FIX IT before continuing.
