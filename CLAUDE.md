# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

AMS Patrimoine — a Nuxt 4 (Vue 3) web application built on the Nuxt UI starter template. Uses pnpm as package manager.

## Commands

```bash
pnpm dev          # Start dev server (localhost:3000)
pnpm build        # Production build
pnpm preview      # Preview production build locally
pnpm lint         # Lint with oxlint (auto-fix)
pnpm fmt          # Format with oxfmt
pnpm typecheck    # Type check with vue-tsc
```

After installing dependencies, `nuxt prepare` runs automatically via postinstall to generate `.nuxt/` types.

## Tech Stack

- **Framework**: Nuxt 4.4 / Vue 3 with TypeScript 5.9
- **UI**: Nuxt UI v4 components + Tailwind CSS v4
- **Icons**: Lucide (`i-lucide-*`) and Simple Icons (`i-simple-icons-*`)
- **Font**: Public Sans (via @nuxt/fonts)
- **Linting**: oxlint (Rust-based, not ESLint)
- **Formatting**: oxfmt (Rust-based, not Prettier) — 120 char width, single quotes, semicolons, trailing commas (ES5)
- **Images**: @nuxt/image for optimized image handling

## Architecture

```
app/
  app.vue              # Root layout: UApp > UHeader / UMain / UFooter
  app.config.ts        # Theme config (primary: green, neutral: slate)
  pages/               # File-based routing
  components/          # Auto-imported Vue components
  assets/css/main.css  # Tailwind imports + custom green color palette
nuxt.config.ts         # Modules: @nuxt/ui, @nuxt/image, @nuxt/fonts
public/                # Static assets (favicon)
```

Nuxt auto-imports components from `app/components/` and composables from `app/composables/` — no explicit imports needed.

The homepage (`/`) is pre-rendered via `routeRules` in nuxt.config.ts.

No server/, composables/, utils/, middleware/, or plugins/ directories exist yet — create as needed following Nuxt conventions.

## CI

GitHub Actions runs on every push (Ubuntu, Node 22): install → lint → typecheck.

## Code Style

- oxfmt handles formatting: 2-space indent, single quotes, semicolons, 120 char lines
- oxlint enforces correctness errors and suspicious warnings; console.log triggers a warning (console.warn/error are allowed)
- Vue SFC script and style blocks use indentation (configured in oxfmt)
