# AATech — Website

Single-page marketing site for **AATech**, an IT & software development company.
Built with **Next.js (App Router) + TypeScript**, static-exported so it can be
deployed to **aatech.pk** on any host.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build for production

```bash
npm run build        # outputs a static site to ./out
```

Upload the contents of `out/` to your web host (shared hosting / cPanel,
Netlify, Vercel, GitHub Pages, etc.). For Vercel, just import the repo —
no extra config needed.

## Automatic deploy to GitHub Pages

Every push to `main` builds the site and publishes it to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). One-time setup:

1. **Enable Pages**: GitHub repo → **Settings → Pages → Build and deployment →
   Source = "GitHub Actions"**.
2. **Push to `main`** (or run the workflow manually from the **Actions** tab).
   The site deploys automatically; the live URL appears in the Actions run.
3. **Custom domain (`aatech.pk`)** — already handled by [`public/CNAME`](public/CNAME).
   At your domain registrar add DNS records pointing to GitHub Pages:
   - Four `A` records for the apex `aatech.pk` →
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` record for `www` → `aatechAI.github.io`
   Then in **Settings → Pages** confirm the custom domain is `aatech.pk` and
   tick **Enforce HTTPS** (available once DNS propagates).

> If you ever deploy to a project path instead of a custom domain
> (e.g. `username.github.io/aatech`), set `basePath: "/aatech"` in
> `next.config.mjs`. With the `aatech.pk` custom domain you do **not** need it.

## Add your logo

1. Drop your logo file into `public/` named `logo.svg` (or `logo.png`).
2. Open [`app/components/Logo.tsx`](app/components/Logo.tsx) and set
   `USE_IMAGE = true` (change the filename in the `<img src>` if needed).

Until then a clean built-in wordmark is shown, so the site always looks complete.

## Edit content

- **Copy, services, stats, process, tech list** → [`app/page.tsx`](app/page.tsx)
  (all content lives in the arrays at the top of the file).
- **Contact details** → update `EMAIL`, `PHONE_DISPLAY`, `PHONE_RAW`,
  `WHATSAPP` near the top of `app/page.tsx`.
- **Colors & styling** → CSS variables at the top of
  [`app/globals.css`](app/globals.css).
- **SEO / page title** → [`app/layout.tsx`](app/layout.tsx).

> Placeholder contact info (`info@aatech.pk`, `+92 300 0000000`) is used —
> replace it with your real details before going live.
