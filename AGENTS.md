# Jæren Multiservice

## Cursor Cloud specific instructions

This is a static React SPA (no backend, no database). The only required service is the Vite dev server.

### Quick reference

| Action | Command |
|--------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` → http://localhost:5173 |
| Build | `npm run build` (runs `tsc -b && vite build`) |
| Lint | `npm run lint` |
| Preview prod build | `npm run preview` |
| Deploy (needs CF token) | `npm run deploy` |

### Known issues

- **ESLint config missing:** The repository has ESLint 9 as a devDependency but no `eslint.config.js` file was ever committed. `npm run lint` will fail with a "couldn't find config" error until one is added.

### Notes

- No tests are configured (no test framework in devDependencies).
- The contact form submits to Formspree (`https://formspree.io/f/mgonpjya`) — no local mock needed for development.
- Cloudflare deployment requires `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` environment variables (not needed for local dev).
- Font (Saira Condensed) is loaded from Google Fonts CDN; will fallback to system-ui without network.
