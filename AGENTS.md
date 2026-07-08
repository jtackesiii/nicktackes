# nicktackes.com — Hugo academic personal site / CV

## Build & serve

```powershell
hugo              # build to public/
hugo server       # dev server with live reload
```

All content is data-driven from `data/*.yaml`. No theme — entirely custom `layouts/`.

## Architecture

- **Single-page site** — `layouts/index.html` renders all sections via partials.
- **Data access** — templates use `hugo.Data.<key>` (e.g., `hugo.Data.cv.Employment`), NOT `.Site.Data`.
- **Nav** — sections listed in `config.yaml` `Params.sidebar.menu` determine the sidebar links.
- **CV is the main document** — `data/cv.yaml` drives employment, education, publications, conferences, talks, teaching, service, etc.

## Data files

| File | Status |
|---|---|
| `data/cv.yaml` | Primary source for CV content |
| `data/about.yaml` | Bio + contact info |
| `data/research.yaml` | Research projects |
| `data/teaching.yaml` | **Unused** — referenced only in commented-out template code |
| `data/test.yaml` | **Stale** — abandoned old-contact test data, ignore |

## Layout

```
layouts/
  index.html          ← single entrypoint
  partials/
    about.html        ← from data/about.yaml
    research.html     ← from data/research.yaml + cv.yaml (news feed)
    teaching.html     ← from data/cv.yaml (Teaching field)
    sidebar.html      ← nav + social links from config.yaml
    cv/               ← ~17 sub-partials rendering data/cv.yaml sections
      _cv.html        ← orchestrator, includes header, contact, employment, education, etc.
```

## Conventions

- `public/` is committed — rebuild before commit.
- No `theme:` in `config.yaml` (custom layout only).
- Hugo extended v0.161.1 in use.
- Dark mode via `prefers-color-scheme: dark` CSS.
- CSS in `static/css/` — `main.css` (layout + design) + `cv.css`.
- Print layout from browser's native print (see `cv/print.html`).
