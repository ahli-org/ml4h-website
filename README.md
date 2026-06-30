# AHLI Health AI Summer Camp — website

Starter website for the **AHLI Health AI Summer Camp 2026**, built with
[Astro](https://astro.build). It is a **static site**: the build produces plain
HTML, CSS, and JavaScript that any static host — including **GitHub Pages** —
serves directly. No server or database required.

The design uses a clean, sidebar-driven editorial layout in the official
**AHLI** palette and typography, with the AHLI logo.

---

## Quick start — run the site locally

**The only prerequisite is [Node.js](https://nodejs.org)** (version 18.20.8+,
20.3+, or 22+ — Node 20 LTS or 22 recommended). Everything the site displays is
committed to the repo, so a fresh clone runs the full site as-is — you do **not**
need Python, ImageMagick, the slide-deck repo, or any of the data-generation
scripts to view or develop it (those are only for *regenerating* content — see
[Regenerating generated content](#regenerating-generated-content-maintainers)).

```bash
git clone git@github.com:ahli-org/ahli-summer-camp-website.git
cd ahli-summer-camp-website
npm install      # install dependencies (~30s)
npm run dev      # local dev server — open the URL it prints (usually http://localhost:4321)
```

That's it — open the printed URL and you'll see the complete site: home, about,
curriculum with all seven day pages, instructors, the 45-person cohort, the
Project Workbook, workshop notebooks, sponsors, resources, and FAQ.

Other commands:

```bash
npm run build    # production build into ./dist (what would be deployed)
npm run preview  # serve the built ./dist locally to check the production build
```

**Two things you'll notice when you run it:**

- A bright amber **"Internal review"** banner on the home page. That's expected —
  it's a pre-launch checklist for the committee, toggled by `REVIEW_MODE` in
  `src/lib/site.ts` (set it to `false` to hide).
- If you add or rename files under `src/content/days/`, **restart the dev
  server** — Astro only picks up content-collection changes at startup.

---

## Deploying

There is **no deploy workflow** right now — the site is built and reviewed
locally (`npm run dev` / `npm run build` + `npm run preview`) and is not
published anywhere yet. When you're ready to publish (e.g. to GitHub Pages):

1. **Set the site URL** in `astro.config.mjs`:
   - **Project page** (repo is e.g. `ahli-summer-camp`):
     ```js
     site: 'https://your-org.github.io',
     base: '/ahli-summer-camp',   // uncomment this line
     ```
   - **Org/user page** (repo named `your-org.github.io`):
     ```js
     site: 'https://your-org.github.io',
     // leave `base` commented out
     ```
   - **Custom domain** (e.g. `camp.ahli.org`): set `site` to that URL, leave
     `base` commented out, and add a `CNAME` file in `public/`.
2. **Re-add a deploy workflow** (the standard `withastro/action` GitHub Pages
   workflow), and in the repo set **Settings → Pages → Source → GitHub Actions**.
3. **Turn off the review banner** — set `REVIEW_MODE = false` in `src/lib/site.ts`.

All internal links use the `url()` helper in `src/lib/site.ts`, so they adjust
automatically once `base` is set correctly — no per-page edits needed.

---

## Editing content

| To change… | Edit… |
|---|---|
| Camp name, dates, email, funder | `src/lib/site.ts` (the `SITE` object) |
| Navigation menu | `src/lib/site.ts` (the `NAV` array) |
| Page text | the matching file in `src/pages/` |
| Curriculum / schedule | `src/lib/curriculum.ts` (the `days` array + `dailyRhythm`) |
| **Instructors & students** | generated — see "People (instructors & cohort)" below |
| **Resource links** | `src/lib/resources.ts` |
| Per-day curriculum outlines | `src/content/days/day-N.md` |
| Instructor guide / Project Workbook | `src/md/*.md` |
| Workshop notebooks | `scripts/build-notebooks.py` → `public/notebooks/*.ipynb` |
| Lecture slide decks | built in the companion `ahli-summer-camp-slides` repo; `npm run sync:slides` → `public/slides/` |
| Internal review banner | `REVIEW_MODE` in `src/lib/site.ts` (set `false` to hide) |
| Colors, fonts, layout | `src/styles/global.css` (CSS variables in `:root`) |
| Logo assets | `public/logos/` (see "Branding" below) |

### People (instructors & cohort)

Both the instructor pages (`/instructors/`, `/instructors/<slug>/`) and the
student pages (`/students/`, `/students/<slug>/`) are built from **generated
data**, not hand-edited, and share the same components (`ProfileCard` for the
grids, `ProfileDetail` for profiles, `ProfileLinks`/`Icon` for the link icons).
The flow:

```
.student_source/<Name>/{links.json, bio.md, headshot.png}     ← local source (gitignored)
.instructor_source/<Name>/{links.json, bio.md, headshot.png}  ← local source (gitignored)
        │  npm run build:people        (or build:students / build:instructors)
        ├─ resized headshots → public/people/<slug>.jpg
        └─ profile data      → src/data/students.json + src/data/instructors.json
                                                          ← committed; the site reads these
```

- Put each source folder (one subfolder per person, each with `links.json`,
  `bio.md`, and `headshot.png`) at `./.student_source/` and
  `./.instructor_source/`. Both are **gitignored** — raw bios/resumes are never
  committed.
- Run `npm run build:people` (needs ImageMagick `convert` on PATH). It
  slugifies names, resizes headshots, parses bios/links/awards/press, and writes
  the two JSON files. Typed access is via `src/lib/students.ts` and
  `src/lib/instructors.ts`.
- Commit `src/data/*.json` and `public/people/*.jpg`.
- **Order** is a stable, non-alphabetical shuffle: the generator sorts by a hash
  of each person's slug, so the order is fixed across regenerations and a newly
  added person slots in without reshuffling everyone else.

Each profile surfaces the person's headshot, role/position, affiliation, links
(website, Scholar, GitHub, LinkedIn, X, Bluesky, ORCID, email) shown as
icon buttons, full bio, awards, and a "Featured in" press section — designed to
showcase them and support their visibility.

> The generated JSON and headshots are **committed**, so you don't need the
> source folders or the generator to run the site — only to *regenerate* the
> data. See [Regenerating generated content](#regenerating-generated-content-maintainers).

### Branding

The site uses the official **AHLI** palette and logo:

- **Logos** live in `public/logos/` (cropped from the AHLI logo kit):
  `ahli-horizontal-white.svg` (sidebar / dark backgrounds),
  `ahli-horizontal-color.svg` and `ahli-vertical-color.svg` (light backgrounds),
  `ahli-mark-color.svg` (the cross mark, also used as the favicon).
- **Colours** are AHLI brand hexes, defined as CSS variables in `:root` in
  `src/styles/global.css` (indigo `#404C98`, blue `#107BBC`, teal `#048A81`,
  cyan `#00B0C8`, mint `#5BC7B2`, magenta `#CF206D`, lime `#A1CD59`).
- **Fonts** are Montserrat (headings) and Open Sans (body), per the AHLI
  guidelines, loaded from Google Fonts in `BaseLayout.astro`.

Each file in `src/pages/` becomes a page: `about.astro` → `/about/`.
Add a new page by creating a new `.astro` file there and adding it to `NAV`.

### Placeholders to fill in

This is a starter template. Items still marked as placeholders:

- **Instructors & students** — generated from `./.instructor_source/` and
  `./.student_source/` via `npm run build:people` (see "People" above). The 2026
  cohort and instructors are already populated in `src/data/*.json`.
- **Resource links** — `src/lib/resources.ts` (all public).
- **Contact email** — `SITE.email` in `src/lib/site.ts`.
- **Site URL** — `astro.config.mjs`.

---

## Regenerating generated content (maintainers)

You only need this section if you're **updating** the generated content. To just
run or develop the site, skip it — the outputs below are committed.

These extra tools are required *only* for the commands here:

- **ImageMagick** (`convert` on PATH) — for resizing headshots.
- **Python 3 + [uv](https://docs.astral.sh/uv/)** — for building the notebooks.
- **The companion [`ahli-summer-camp-slides`](https://github.com/ahli-org/ahli-summer-camp-slides) repo**, cloned next to this one — for the slide decks.

| To regenerate… | Run | Inputs → outputs (commit the outputs) |
|---|---|---|
| Instructors & cohort | `npm run build:people` | `./.student_source/`, `./.instructor_source/` (gitignored) → `src/data/*.json` + `public/people/*.jpg` |
| Workshop notebooks | `npm run build:notebooks` | `scripts/build-notebooks.py` → `public/notebooks/*.ipynb` |
| Lecture slide decks | `npm run sync:slides` | built decks in the slides repo → `public/slides/*` |

For slides, first build the decks in the slides repo (`npm run build` there),
then `npm run sync:slides` here; it finds the repo as a sibling directory or via
`$AHLI_SLIDES_DIR`.

The **source folders** for people data (`.student_source/`, `.instructor_source/`)
are intentionally gitignored — they hold raw bios/resumes/headshots and are not
committed. Ask the program committee for them if you need to regenerate.

## Troubleshooting

- **A day page (`/curriculum/day-1/`) 404s in dev.** Restart the dev server —
  Astro initializes content collections (`src/content/`) at startup, so newly
  added day files aren't picked up until you restart.
- **Port already in use.** `npm run dev` falls back to the next free port; use
  the URL it prints (not a hard-coded 4321).
- **`http://localhost:<port>/` shows a 404.** The site is configured with
  `base: '/ahli-summer-camp-website/'` (for GitHub Pages), so the dev server
  serves everything under that subpath. Use the full URL Astro prints on
  startup, e.g. `http://localhost:4321/ahli-summer-camp-website/`. All in-site
  links point to `/ahli-summer-camp-website/…` and work end-to-end from there.
- **"Open in Colab" on a notebook page doesn't open.** The repo is private, so
  Colab's GitHub opener needs access until the site is public — download the
  `.ipynb` and upload it to Colab, or run it locally (`pip install -r
  public/notebooks/requirements.txt`). The path is set in `src/lib/notebooks.ts`.
- **`npm run build:people` fails with "convert: not found".** Install ImageMagick.

---

## Project structure

```
ahli-summer-camp/
├── astro.config.mjs            # site URL + base path config
├── scripts/
│   ├── build-people.mjs        # generates students.json + instructors.json from sources
│   ├── build-notebooks.py      # generates the Day 3 & 4 workshop notebooks
│   └── sync-slides.mjs         # vendors Marp decks from the companion slides repo
├── public/
│   ├── favicon.svg             # AHLI cross mark
│   ├── logos/                  # AHLI logo lockups (white / colour / mark) + sponsor
│   ├── people/                 # generated headshots (<slug>.jpg)
│   ├── notebooks/              # generated workshop notebooks (.ipynb)
│   └── slides/                 # synced lecture decks (Marp HTML + PDF)
├── src/
│   ├── content.config.ts       # content collection: per-day curriculum outlines
│   ├── content/
│   │   └── days/               # day-1.md … day-7.md (detailed day outlines)
│   ├── md/                     # instructor-guide, project-workbook (+ example),
│   │                           #   before-you-arrive — markdown rendered as pages
│   ├── components/
│   │   ├── Hero.astro          # reusable page banner
│   │   ├── Icon.astro          # inline SVG icon set (brand + utility)
│   │   ├── ProfileCard.astro   # grid card (links to a profile)
│   │   ├── ProfileDetail.astro # full profile layout (bio, awards, press)
│   │   ├── ProfileLinks.astro  # icon link buttons
│   │   ├── ReviewNotice.astro  # internal pre-launch review banner (REVIEW_MODE)
│   │   └── Sidebar.astro       # fixed navigation sidebar
│   ├── data/
│   │   ├── students.json       # generated cohort data (committed)
│   │   └── instructors.json    # generated instructor data (committed)
│   ├── layouts/
│   │   └── BaseLayout.astro    # HTML shell, fonts, mobile drawer, footer
│   ├── lib/
│   │   ├── site.ts             # site constants, nav, url() helper
│   │   ├── curriculum.ts       # day-by-day schedule content
│   │   ├── students.ts         # typed access to students.json
│   │   ├── instructors.ts      # typed access to instructors.json
│   │   ├── notebooks.ts        # workshop notebook metadata + Colab URLs
│   │   └── resources.ts        # student + instructor resource links
│   ├── pages/                  # one file per route
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── curriculum.astro             # /curriculum/  (overview + daily rhythm)
│   │   ├── curriculum/[day].astro       # /curriculum/day-N/  (detailed outline)
│   │   ├── instructors.astro            # /instructors/  (grid)
│   │   ├── instructors/[slug].astro     # /instructors/<slug>/  (one per instructor)
│   │   ├── students.astro               # /students/  (cohort grid)
│   │   ├── students/[slug].astro        # /students/<slug>/  (one per student)
│   │   ├── notebooks/[notebook].astro   # /notebooks/<slug>/  (rendered + Colab + download)
│   │   ├── resources.astro
│   │   ├── sponsors.astro
│   │   ├── instructor-guide.astro       # /instructor-guide/  (renders src/md)
│   │   ├── project-workbook.astro       # /project-workbook/  (renders src/md)
│   │   ├── project-workbook/example.astro  # /project-workbook/example/ (worked example)
│   │   ├── before-you-arrive.astro      # /before-you-arrive/  (pre-camp checklist)
│   │   └── faq.astro
│   └── styles/
│       └── global.css
└── (no deploy workflow yet — see "Deploying")
```
