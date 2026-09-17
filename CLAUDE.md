# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — production build (outputs to `dist/`)
- `npm run preview` — serve the production build locally
- `npm run lint` — run oxlint (no separate type-check step; this is a JavaScript, not TypeScript, project)

There is no test runner configured in this project yet.

## Architecture

This is a Vite + React 19 (JavaScript, not TypeScript) single-page portfolio site, freshly scaffolded from `create-vite`'s `react` template.

- `src/main.jsx` — entry point, mounts `<App />` into `#root`
- `src/App.jsx` — root/only component currently; the whole UI lives here until pages/sections are broken out
- `src/index.css` — just `@import 'tailwindcss';`; Tailwind v4 is wired in via the `@tailwindcss/vite` plugin in `vite.config.js` (no `tailwind.config.js` — v4 is CSS-first/config-less by default)
- `public/` — static assets served as-is (`icons.svg`, `favicon.svg`)

Linting is via **oxlint** (`.oxlintrc.json`), not ESLint.

## Design source

The site is being built out from a Figma design. When the user provides a `figma.com` URL, use the Figma MCP tools (`get_design_context`, `get_screenshot`, `get_metadata`, `get_variable_defs`) to pull real layout/spacing/color/typography data rather than guessing from a screenshot, and prefer mapping Figma variables/styles to Tailwind utility classes to keep styling consistent with the design system.
