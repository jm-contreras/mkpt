# Morgan Kelley — Virtual Trainer & Nutrition Coach (starter site)

This repository contains a minimal Astro + Tailwind starter site for a virtual personal trainer and nutrition coach. It's designed to be easy to edit for non-technical users.

Quick start

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

Editing content

Site content is centralized under `src/content` as simple JS modules for easy editing on GitHub. Files to edit:

- `src/content/site.js` — site title, tagline, contact keys
- `src/content/pages/home.js` — homepage hero and blurb
- `src/content/pages/about.js` — about bio, certifications, philosophy
- `src/content/pages/book.js` — book page intro and Calendly embed placeholder
- `src/content/services.js` — canonical services list

Edit the files above on GitHub to update text and image paths without touching page/component code.

Deploy

Connect this repository to Netlify and point the build command to `npm run build` and publish directory to `dist`.
