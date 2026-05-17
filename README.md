# Jæren Multiservice

Nettside for Jæren Multiservice.

- **Produksjon:** [https://www.jaerenmultiservice.no/](https://www.jaerenmultiservice.no/)
- **Hosting:** [Cloudflare Pages](https://pages.cloudflare.com/)
- **Deploy:** Push til `main` → automatisk bygg og publisering (GitHub + Cloudflare)

## Utvikling

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # produksjonsbygg i dist/
npm run preview  # forhåndsvis dist/
```

## Publisere endringer

```bash
git add .
git commit -m "Beskriv endringen"
git push origin main
```

Cloudflare bygger og deployer typisk på 1–3 minutter. Se status under **Deployments** i Cloudflare Pages.

Full oppsett (første gang, DNS, secrets): [DEPLOY.md](DEPLOY.md)
