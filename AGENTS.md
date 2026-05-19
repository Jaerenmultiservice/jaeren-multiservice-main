# AGENTS.md

## Cursor Cloud specific instructions

This is a static React + Vite + TypeScript website (SPA) for Jæren Multiservice. No backend, no database.

### Running the dev server

```bash
npm run dev      # Starts Vite at http://localhost:5173
```

### Build

```bash
npm run build    # tsc -b && vite build → outputs to dist/
```

### Lint

The `npm run lint` script is configured in package.json but the ESLint config file (`eslint.config.js`) is missing from the repo. Running `npm run lint` will fail with "ESLint couldn't find an eslint.config" error. TypeScript type-checking via `tsc -b` (part of `npm run build`) still works.

### Deploy

Deployment to Cloudflare Pages requires `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` environment variables. Not needed for local development.

### Key notes

- No test framework is configured; there are no automated tests.
- The contact form uses Formspree (`https://formspree.io/f/mgonpjya`) — do not submit test data to it.
- Package manager is **npm** (uses `package-lock.json`).
