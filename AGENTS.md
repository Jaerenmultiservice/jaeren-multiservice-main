# Agents

## Cursor Cloud specific instructions

### Project overview

Jæren Multiservice is a static React SPA (Vite + TypeScript + Tailwind CSS) for a Norwegian multi-service company. No backend or database — the only external integration is Formspree for the contact form.

### Development commands

See `README.md` for the standard commands. Key scripts from `package.json`:
- `npm run dev` — Vite dev server at http://localhost:5173
- `npm run build` — TypeScript check + Vite production build
- `npm run lint` — ESLint (see note below)

### Known issues

- **ESLint config missing**: The `npm run lint` command fails because no `eslint.config.js` exists (required by ESLint 9 flat config). The lint script in `package.json` is defined but not usable until a config file is created.
- **Node version mismatch for wrangler**: `.node-version` specifies Node 20, but `wrangler@4.92` requires Node >= 22. This only affects deployment (`npm run deploy`), not local development. The Vite dev server works fine on Node 20.

### Running the dev server

```bash
source ~/.nvm/nvm.sh && nvm use 20
npm run dev
```

The dev server starts at http://localhost:5173 with HMR. No additional services, environment variables, or database setup required.

### Deployment (optional)

Deployment to Cloudflare Pages requires `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` environment variables. Not needed for local development.
