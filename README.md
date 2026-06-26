# Xinix Website

Developer-maintained marketing site for Xinix Chemicals Manufacturing PLC.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 with Xinix design tokens from the brief
- Bilingual content: English (`/en`) and Amharic (`/am`) in `src/content/`
- No CMS — edit JSON files and redeploy

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000 (redirects to `/en`).

## Content updates

Edit `src/content/en.json` and `src/content/am.json`, then deploy.

## Forms

Quote and distributor enquiries POST to `/api/enquiry` and are saved as JSON files in `data/enquiries/` (gitignored). Wire this to email or a CRM when ready.

## Build phases

1. **Done:** Home, product categories, contact, quote form
2. **Done:** Individual product pages, sustainability, about, quality, distributors
3. **Done:** Full EN/AM routing, sitemap, robots, structured data
4. **Later:** Analytics events, real PDF datasheets, photography, performance tuning
