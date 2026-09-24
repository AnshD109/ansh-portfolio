# Ansh Dankhara — Portfolio (React + Vite)

All content lives in **`src/data/portfolio.js`**. Edit that file and every section updates.
Colours and fonts are tokens at the top of **`src/index.css`**.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
```

## Before you publish

1. Put `Ansh-Dankhara-CV.pdf` in `public/` (the Download CV button links to it).
2. Put `profile-picture.jpg` in `public/`. If it's missing, the hero shows your initials.
3. To add a live demo to a project, fill in its `links.demo` URL and an "Open demo" link appears.

## Deploy on Render

New → Static Site → connect the repo, then:

- Build command: `npm install && npm run build`
- Publish directory: `dist`

Netlify and Vercel use the same values.

## What's in here

- Intro hero with typing roles, photo card and gradient buttons
- Certificates section with verify links; Coursera links go to the verification page
- Featured project with an animated forecast chart that plays when scrolled into view
- Sticky nav that highlights the current section, with a mobile menu
- Light/dark theme, follows the system setting and remembers your choice
- Featured project with key metrics, then a filterable project list
- Contact form that opens the visitor's mail app, pre-filled
- Respects `prefers-reduced-motion`; keyboard focus is visible throughout
