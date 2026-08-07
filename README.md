# nishadanielr.github.io

Personal academic portfolio for **Nisha Daniel** — Dentist &amp; Data Scientist.

Live once published: `https://nishadanielr.github.io`

## What's here

A single static page (no build step, no dependencies) with:

- **About** — bio, photo, contact links
- **Global Career Map** — Chennai → Edinburgh → Berlin
- **Dissertation** — 13 figures from the PsyVoiD MSc dissertation (University of Edinburgh, 2023–2026)
- **ICMR Work** — 3 figures from the ABDM digital health ecosystem studentship (ICMR–NIE, 2025)
- **Publications** — journal articles and book chapters

## File structure

```
.
├── index.html      # all page content
├── style.css       # all styling
└── images/         # avatar, map, and 16 chart images
    ├── diss_01…13   # dissertation figures
    ├── icmr_01…03   # ICMR / ABDM figures
    ├── avatar.png
    ├── world_map.png
    └── world_map.svg
```

## Publishing this on GitHub Pages

1. Create a repo named exactly `nishadanielr.github.io` (must match your GitHub username).
2. Upload `index.html`, `style.css`, and the `images/` folder to the repo root — either via `git push` or the "Add file → Upload files" button on github.com.
3. Go to **Settings → Pages**, set Source to "Deploy from a branch," branch `main`, folder `/ (root)`, then Save.
4. Wait about a minute — the site goes live at `https://nishadanielr.github.io`.

## Editing later

Both `index.html` and `style.css` are plain, commented, hand-written files — no framework, no build tools. To add a new figure to a gallery, copy one `<figure class="g-item">…</figure>` block in `index.html` and point it at a new image in `images/`.

## To verify before going live

- [ ] Confirm the LinkedIn and GitHub URLs in the footer/header actually resolve to your profiles (placeholders were used based on your CV handles)
- [ ] Confirm which email you want listed first (`nisha.daniel@bayer.com` vs. `nishadaniel_bds@hotmail.com`)
- [ ] Swap in real captions/credit lines if any chart needs a co-author or dataset citation
