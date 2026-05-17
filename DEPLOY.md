# Deploy til Cloudflare Pages

Nettsiden bygges med Vite (`npm run build` → `dist/`) og publiseres på **Cloudflare Pages**.

## Flyt: endring → live

```text
Endringer → git push origin main → GitHub → Cloudflare Pages → jaerenmultiservice.no
```

## Engangsoppsett (velg én metode)

### Metode A: Cloudflare koblet til GitHub (anbefalt i dashboard)

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Repo: `Jaerenmultiservice/jaeren-multiservice-main`
3. Build-innstillinger:

| Felt | Verdi |
|------|--------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Production branch | `main` |
| Node version (Environment variables) | `NODE_VERSION` = `20` |

4. Første deploy kjører automatisk ved lagring.

### Metode B: GitHub Actions (repoet er klargjort)

Workflow: [.github/workflows/cloudflare-pages.yml](.github/workflows/cloudflare-pages.yml)

Legg til **Repository secrets** i GitHub (`Settings` → `Secrets and variables` → `Actions`):

| Secret | Hvor du finner den |
|--------|---------------------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare → My Profile → API Tokens → «Edit Cloudflare Workers» (Pages deploy) |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare → Workers & Pages → høyre side under Account ID |

Opprett Pages-prosjektet én gang (navn: `jaeren-multiservice`) via dashboard eller første `wrangler pages deploy`.

Ved push til `main`: bygg + deploy.

### Manuell deploy (CLI)

```bash
npm install
npm run build
npx wrangler login
npx wrangler pages deploy dist --project-name=jaeren-multiservice
```

## Eget domene (DNS)

Domenet `jaerenmultiservice.no` ligger ofte allerede i Cloudflare. Hvis du ser **Error 522**, peker DNS til Cloudflare men **origin** (gammel host) svarer ikke — koble **Custom domain** til Pages-prosjektet og fjern pekere til Netlify/gammel origin.

Når Pages-deploy fungerer på `*.pages.dev`:

1. Pages-prosjekt → **Custom domains** → legg til:
   - `www.jaerenmultiservice.no`
   - `jaerenmultiservice.no` (apex)
2. Følg Cloudflares DNS-anbefalinger (CNAME eller automatisk hvis domenet allerede er i Cloudflare).
3. **Flytt fra Netlify:** fjern/koble om Netlify custom domain og gamle DNS-pekere, så kun Cloudflare serverer trafikk.
4. Vent på DNS (ofte minutter, kan ta lenger ved registrar-cache).

## Etter deploy – sjekkliste

- [ ] Deployment status **Success** i Cloudflare Pages
- [ ] Forside og undersider laster (HashRouter: `/#/takvask` osv.)
- [ ] Kontaktskjema (Formspree) – se [test-befaring-manuelt.md](test-befaring-manuelt.md)
- [ ] Formspree tillater domenet `jaerenmultiservice.no` i deres dashboard

## Skjema

Kontaktskjema bruker **Formspree**, ikke Netlify Forms. Hosting-bytte påvirker ikke skjemaet, så lenge domenet er godkjent hos Formspree.
