# Harvey — Marketing Site

Author : Eric Sakala
## Overview

This repository contains the frontend for the Harvey marketing site. It is a component-driven, TypeScript-based React application optimized for performance and accessibility.

## Key features

- Clean, responsive UI components under `src/components` and `src/components/ui`
- TypeScript for type-safety
- Tailwind CSS for utility-first styling
- Vite for fast development and optimized builds

## Tech stack

- Vite
- React + TypeScript
- Tailwind CSS
- Vitest for unit tests

## Quick start

Prerequisites: Node.js 16+ and npm (or pnpm/yarn).

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

Run tests:

```bash
npm run test
```

## Project structure

- `src/` — application source
  - `components/` — reusable UI and page components
  - `pages/` — route components
  - `assets/` — static images and media
  - `hooks/` — custom React hooks
  - `lib/` — utilities and helpers

## Development notes

- Follow existing component patterns in `src/components/ui` when adding new UI primitives.
- Keep components small, testable, and accessible.
- Run tests and linters before submitting PRs.

## Deployment

This is a static frontend. Deploy the contents of the `dist/` folder (created by `npm run build`) to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## Contributing

1. Fork the repository and create a descriptive branch.
2. Open a PR with a clear summary of changes and testing steps.
3. Ensure CI/tests pass and address review comments.

## License

This project is licensed under the MIT License — see the `LICENSE` file for details.

