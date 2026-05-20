# Jæren Multiservice – hjemmeside

Flersidig bedriftsside for **Jæren Multiservice AS**, hostet på **Cloudflare Pages**.

## Kjør lokalt

```bash
npm install
npm run dev
```

Åpne http://localhost:5173

## Bygg

```bash
npm run build
```

Output ligger i `dist/`.

## Deploy til Cloudflare Pages

### Alternativ A: Dashboard (anbefalt første gang)

1. Logg inn på [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create**
2. Velg **Pages** → **Connect to Git** (eller **Upload assets** for manuell `dist/`)
3. Build-innstillinger:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (prosjektmappen)
4. Etter deploy: **Custom domains** → legg til `jaerenmultiservice.no` og `www`

### Alternativ B: Wrangler CLI

```bash
npm install
npm run build
npx wrangler pages deploy dist --project-name=jaeren-multiservice
```

## Domene (jaerenmultiservice.no)

I Cloudflare under **Domains** (din konto):

1. Sørg for at domenet ligger i Cloudflare (nameservere peker til Cloudflare)
2. Gå til **Workers & Pages** → prosjektet → **Custom domains**
3. Legg til `jaerenmultiservice.no` – Cloudflare oppretter DNS automatisk
4. Valgfritt: redirect `www` → apex

## Kontaktskjema (Pages Function)

Skjemaet poster til `/api/contact` (fil: `functions/api/contact.ts`).

**Uten oppsett:** innsending logges i Cloudflare (Functions → Logs).

**Med e-post (anbefalt):** legg til miljøvariabler i Pages → **Settings** → **Environment variables**:

| Variabel | Beskrivelse |
|----------|-------------|
| `CONTACT_EMAIL` | Din e-post (f.eks. `post@jaerenmultiservice.no`) |
| `RESEND_API_KEY` | API-nøkkel fra [resend.com](https://resend.com) |

Verifiser avsenderdomene i Resend for `jaerenmultiservice.no`.

## Oppdater kontaktinfo

Rediger [`src/config/site.ts`](src/config/site.ts) – telefon, e-post, org.nr. og adresse.

## Sider

| Side | URL |
|------|-----|
| Forside | `/` |
| Takvask | `/tjenester/takvask` |
| Høytrykkspyling | `/tjenester/hoytrykkspyling` |
| Hekkeklipp | `/tjenester/hekkeklipp` |
| Gravearbeid | `/tjenester/gravearbeid` |
| Om oss | `/om-oss` |
| Kontakt | `/kontakt` |
