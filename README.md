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
