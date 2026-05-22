# plarotta.github.io

Personal website — a single static page. No build step, no framework.

- `index.html` — the page
- `styles.css` — styles
- `assets/img/` — images
- `.nojekyll` — disables Jekyll on GitHub Pages (served as-is)

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Pushing to `master` deploys via `.github/workflows/deploy.yml`.
Requires **Settings → Pages → Source → GitHub Actions** (one-time).
