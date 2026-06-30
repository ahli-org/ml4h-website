# ML4H 2026 Symposium — website

Website for the **6th ML4H Symposium (Machine Learning for Health)**, built with
[Astro](https://astro.build). It is a **static site**: the build produces plain
HTML, CSS, and JavaScript that any static host — including **GitHub Pages** —
serves directly. No server or database required.

The site is configured for GitHub Pages under the `ml4h-org` organization
(`https://ml4h-org.github.io/ml4h-website/`) with a sidebar-driven editorial
layout using the AHLI palette and the AHLI horizontal logo.

---

## Quick start — run the site locally

**The only prerequisite is [Node.js](https://nodejs.org)** (version 18.20.8+,
20.3+, or 22+ — Node 20 LTS or 22 recommended).

```bash
git clone git@github.com:ml4h-org/ml4h-website.git
cd ml4h-website
npm install      # install dependencies (~30s)
npm run dev      # local dev server — open the URL it prints
```

Open the printed URL (e.g. `http://localhost:4321/ml4h-website/`) to see the
complete site: home, about, sponsors, submit, attend, and resources sections.

Other commands:

```bash
npm run build    # production build into ./dist
npm run preview  # serve the built ./dist locally
```

> **Note:** The dev server serves everything under `/ml4h-website/` (matching
> the GitHub Pages base path). Use the full URL Astro prints — not a hard-coded
> `http://localhost:4321/`.

---

## Deploying

The site targets **GitHub Pages** at `https://ml4h-org.github.io/ml4h-website/`.
The base path is already configured in `astro.config.mjs`:

```js
site: 'https://ml4h-org.github.io',
base: '/ml4h-website/',
```

To publish:

1. Push to the `main` branch (or configure a GitHub Actions workflow using
   `withastro/action`).
2. In the repo set **Settings → Pages → Source → GitHub Actions**.
3. Ensure `REVIEW_MODE` is `false` in `src/lib/site.ts` (it already is).

All internal links use the `url()` helper in `src/lib/site.ts` and adjust
automatically based on the configured `base` — no per-page edits needed.

To switch to a custom domain, set `site` to that URL, remove the `base` line,
and add a `CNAME` file in `public/`.

---

## Editing content

| To change… | Edit… |
|---|---|
| Symposium name, dates, location, email | `src/lib/site.ts` (the `SITE` object) |
| Navigation menu | `src/lib/site.ts` (the `NAV` array) |
| Home page | `src/pages/index.astro` |
| About, Sponsors, Submit, Attend, Resources overview pages | `src/pages/<section>.astro` |
| Sub-pages (call for papers, schedule, FAQs, etc.) | `src/pages/<section>/<page>.md` |
| Organizing committee | `src/pages/about/organizing-committee.astro` |
| Governing board | `src/pages/about/governing-board.astro` |
| Committee member photos | `public/people/<slug>.jpg` |
| Logo | `public/logos/` |
| Banner image | `public/banner.png` |
| Colors, fonts, layout | `src/styles/global.css` (CSS variables in `:root`) |
| Internal review banner | `REVIEW_MODE` in `src/lib/site.ts` (set `true` to show) |

### Site constants

`src/lib/site.ts` is the single source of truth for site-wide data:

- `SITE` — name, shortName, year, tagline, dates, location, email
- `NAV` — the sidebar navigation tree (top-level items with optional children)
- `url(path)` — helper that prepends the configured `base` path; use this for
  all internal `href` values so links survive base-path changes
- `REVIEW_MODE` — set to `true` to show the internal pre-launch review banner

### Pages

Each file in `src/pages/` becomes a route. Most sub-pages under `about/`,
`submit/`, `attend/`, and `resources/` are plain Markdown files rendered via
`src/layouts/MarkdownLayout.astro`. Add a new sub-page by creating a `.md` file
and adding it to the parent section's `NAV` children.

### Organizing committee & people photos

The organizing committee is hand-edited in
`src/pages/about/organizing-committee.astro`. Photos live in `public/people/`
and are referenced by filename. To add a person:

1. Add their photo to `public/people/<slug>.jpg`.
2. Add an entry to the `committee` array in `organizing-committee.astro`.

### Branding

- **Logo** — `public/logos/ahli-horizontal-white.svg` (sidebar / dark
  backgrounds). Additional lockups can be added to `public/logos/`.
- **Favicon** — `public/favicon.svg`
- **Banner** — `public/banner.png` (displayed on the home page)
- **Colours** — AHLI brand hexes defined as CSS variables in `:root` in
  `src/styles/global.css` (indigo `#404C98`, blue `#107BBC`, teal `#048A81`,
  cyan `#00B0C8`, mint `#5BC7B2`, magenta `#CF206D`, lime `#A1CD59`).
- **Fonts** — Montserrat (headings) and Open Sans (body), loaded from Google
  Fonts in `BaseLayout.astro`.

---

## Project structure

```
ml4h-website/
├── astro.config.mjs            # site URL, base path, markdown plugin
├── public/
│   ├── favicon.svg
│   ├── banner.png              # home page banner image
│   ├── logos/
│   │   └── ahli-horizontal-white.svg
│   └── people/                 # committee & board headshots (<slug>.jpg)
├── src/
│   ├── content.config.ts       # (placeholder for future content collections)
│   ├── components/
│   │   ├── Hero.astro          # reusable page banner
│   │   ├── ReviewNotice.astro  # internal pre-launch review banner
│   │   └── Sidebar.astro       # fixed navigation sidebar with dropdown support
│   ├── layouts/
│   │   ├── BaseLayout.astro    # HTML shell, fonts, sidebar, mobile drawer, footer
│   │   └── MarkdownLayout.astro # wrapper for .md sub-pages
│   ├── lib/
│   │   └── site.ts             # SITE constants, NAV tree, url() helper, REVIEW_MODE
│   ├── pages/
│   │   ├── index.astro                        # /  (home)
│   │   ├── about.astro                        # /about/
│   │   ├── about/
│   │   │   ├── history.md                     # /about/history/
│   │   │   ├── past-events.astro              # /about/past-events/
│   │   │   ├── proceedings.astro              # /about/proceedings/
│   │   │   ├── organizing-committee.astro     # /about/organizing-committee/
│   │   │   └── governing-board.astro          # /about/governing-board/
│   │   ├── sponsors.astro                     # /sponsors/
│   │   ├── submit.astro                       # /submit/
│   │   ├── submit/
│   │   │   ├── call-for-papers.md             # /submit/call-for-papers/
│   │   │   ├── call-for-demonstrations.md     # /submit/call-for-demonstrations/
│   │   │   └── mentorship-programs.md         # /submit/mentorship-programs/
│   │   ├── attend.astro                       # /attend/
│   │   ├── attend/
│   │   │   ├── schedule.md                    # /attend/schedule/
│   │   │   ├── speakers.md                    # /attend/speakers/
│   │   │   ├── research-roundtables.md        # /attend/research-roundtables/
│   │   │   └── plan-your-visit.md             # /attend/plan-your-visit/
│   │   ├── resources.astro                    # /resources/
│   │   └── resources/
│   │       ├── writing-guidelines.md          # /resources/writing-guidelines/
│   │       ├── reviewing-guidelines.md        # /resources/reviewing-guidelines/
│   │       ├── community-guidelines.md        # /resources/community-guidelines/
│   │       ├── code-of-conduct.md             # /resources/code-of-conduct/
│   │       ├── review-policy.md               # /resources/review-policy/
│   │       ├── publication-ethics.md          # /resources/publication-ethics/
│   │       └── faqs.md                        # /resources/faqs/
│   └── styles/
│       └── global.css
```

---

## Troubleshooting

- **`http://localhost:<port>/` shows a 404.** The site is served under
  `/ml4h-website/`. Use the full URL Astro prints on startup, e.g.
  `http://localhost:4321/ml4h-website/`.
- **Port already in use.** `npm run dev` falls back to the next free port; use
  the URL it prints.
- **A new `.md` page 404s in dev.** Restart the dev server — Astro picks up
  new files at startup.
