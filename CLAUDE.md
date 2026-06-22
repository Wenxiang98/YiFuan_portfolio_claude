# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (localhost:5173)
npm run build     # type-check + production build → dist/
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

There are no tests in this project.

## Stack

- **Vite 8** + **React 19** + **TypeScript 6** (strict mode)
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin — uses `@import "tailwindcss"` in `index.css`, no `tailwind.config.js`
- **Shadcn UI** pattern: components are hand-authored in `src/components/`, utility function is `src/lib/utils.ts` (`cn()` = `clsx` + `tailwind-merge`)
- **lucide-react v1** — `Github` and `Linkedin` icons don't exist in this version; brand icons are inlined as SVG components directly in each file

## Path alias

`@/` resolves to `src/`. Configured in both `vite.config.ts` and `tsconfig.app.json` (`ignoreDeprecations: "6.0"` is required for `baseUrl` in TS 6).

## Architecture

Single-page portfolio. `App.tsx` composes six section components in order: `Navbar → Hero → About → Skills → Projects → Contact → footer`. Each section is a standalone component with no shared state — content (projects list, skills categories, stats) is defined as plain arrays inside each component file.

Deployed on Vercel. No environment variables, no backend.

## Content edits

To update portfolio content, edit the data arrays directly inside each component:
- **Projects**: `src/components/Projects.tsx` — `projects[]`
- **Skills**: `src/components/Skills.tsx` — `categories[]`
- **About stats**: `src/components/About.tsx` — `stats[]`
- **Nav links**: `src/components/Navbar.tsx` — `links[]`
