# Color Quest

Browser-based color theory course for developers and designers. Six units of interactive lessons covering color perception, digital color models, accessibility, and design systems.

## Stack

- React 19 + TypeScript 5.9 + Vite 8
- react-router-dom v7 with `HashRouter` (GitHub Pages SPA compatibility)
- CSS Modules + CSS custom properties (freeCodeCamp Command-line Chic design system)
- React Context + `useReducer` for state, `localStorage` for persistence

## Dev

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

Deploys to GitHub Pages at `/color-theory-lessons/` via GitHub Actions on push to `main`.

## Structure

```
src/
  components/   # layout, nav, shared UI
  data/         # static data (units, badges, glossary)
  pages/        # route-level page components
  state/        # app-context.tsx, persistence.ts
  types/        # TypeScript interfaces
  lessons/      # lesson configs (not yet populated)
```
