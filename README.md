# Inkquation website concept

A Japanese/English single-page website for Inkquation, with a local preview and a static GitHub Pages deployment.

## Run locally

Requires Node.js 22.13 or later and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by the server (normally http://localhost:3000). Japanese is available at `/`, and English at `/en/`. The header links switch languages; each URL can be opened or shared directly.

```sh
npm run build
npm start
```

The default production build retains the Vinext / Cloudflare project structure. GitHub Pages uses the separate static export described below. The page needs no database, accounts, uploads, analytics, or remote fonts.

## GitHub Pages

The [Pages workflow](.github/workflows/pages.yml) publishes `main` through GitHub Actions. It also supports manual runs. Pages must use **GitHub Actions** as its publishing source. The workflow obtains the site path and origin from `actions/configure-pages`, builds both languages, checks their links and assets, and deploys only `dist/client`.

For a local export matching the repository's default Pages URL:

```sh
NEXT_PUBLIC_BASE_PATH=/site NEXT_PUBLIC_SITE_ORIGIN=https://inkquation.github.io npm run build:pages
npm run verify:pages
```

The export contains `index.html` and `en/index.html`, so both language URLs work on a static file host. `site.config.ts` prefixes image URLs and language links. Vinext's `assetPrefix` prefixes JavaScript and CSS. The export keeps framework routes unprefixed because Vinext 1.0.0-beta.5 prerenders unprefixed URLs; `scripts/finalize-pages.mjs` removes the extra on-disk prefix from the bundles, places the English HTML at its directory URL, and adds `.nojekyll`. `scripts/verify-pages.mjs` rejects missing or skipped pages and broken local references before upload.

The workflow follows [GitHub's custom Pages workflow guidance](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages). It uses the built-in workflow token and pins official Actions to commit SHAs. The synthetic notebook in `reference/` and server build files are outside the deployed directory.

## Edit

- `app/landing-page.tsx`: shared page structure, navigation, language switch, and actual editor screenshot.
- `app/copy.ts`: Japanese and English copy with a shared TypeScript shape.
- `app/(ja)/page.tsx` and `app/(en)/en/page.tsx`: Japanese `/` and English `/en` routes.
- `app/shortcut-guide.tsx`: shortcut feature section and standard/direct preset comparison.
- `app/paper-demo.tsx`: accessible paper-style tabs (grid, ruled, plain).
- `app/globals.css`: visual tokens, desktop and mobile layouts, reduced-motion handling.
- `app/site-layout.tsx` and the route-group layouts: server-rendered HTML language, localized title/description, alternate-language links, and favicon metadata. Separate root layouts let each route render the correct language before JavaScript loads.
- `app/text-lines.tsx`: shared line breaks with word separation when responsive styles hide breaks.
- `public/assets/inkquation-icon.png`: copied from the current app's icon asset.
- `public/assets/inkquation-editor.jpg`: a direct capture of the actual app using a synthetic demo notebook.
- `reference/site-demo.inkqbackup`: the synthetic notebook used for the screenshot, outside the public directory.

## Follow-up work

[TODO.md](TODO.md) tracks the TourBox Elite preset, hardware verification, bilingual setup guide, and eventual website download section. No preset is published yet.

## Content and publication notes

The copy was checked against the local app source on 2026-09-07. The existing site at https://inkquation.app/ supplied the public contact address. It advertised cloud sync and had a download link targeting `#`; this proposal does not claim cloud sync or invent a download URL. The contact CTA opens a mail composer without sending a message.

Features described in the proposal are grounded in:

- `../inkquation/inkquation/KeyboardShortcutSettings.swift`: exact standard/direct preset bindings and per-tool command contexts.
- `../inkquation/inkquation/EditorKeyboardController.swift`: text-input exclusion, temporary laser restoration, and the one-second Command hint overlay.
- `../inkquation/inkquation/ShapeTool.swift`: line, rectangle, ellipse, six line patterns, single/double lines.
- `../inkquation/inkquation/PageStyle.swift`: plain, grid, ruled; A and B paper sizes.
- `../inkquation/inkquation/MiniMapView.swift`: page thumbnails and bookmarked-page filtering.
- `../inkquation/ARCHITECTURE.md`: pen/highlighter/eraser/lasso, folders, PDF export, backup and shortcut customization.
- `../inkquation/inkquation/AppPersistence.swift`: local document storage.

The English page translates the copy, tabs, image descriptions, accessibility labels, and contact subject. The screenshot itself retains the real Japanese app interface, identified in its English caption. Language selection is explicit through links; the site does not redirect based on browser language.

The hero now uses an unaltered screenshot of the actual editor, replacing the initial HTML imitation after user feedback. It was captured from an isolated, in-memory app session with a synthetic notebook. No production notes were used. The notebook was assembled as ordinary vector stroke data; the app is not being advertised as offering handwriting recognition, typesetting, or graph generation.

The website uses a light palette. The app screenshot keeps its actual navy chrome: `EditorVisualTheme.swift` currently fixes those colors, even with the OS set to light appearance. No app theme implementation or screenshot recoloring was introduced. The interactive paper sample lower on the page is clearly labelled as a paper illustration, not an app screenshot.

Before publication, replace the distribution contact section with a verified download URL and confirmed release/system information when available. Check that the public contact mailbox is operational. Neither release availability nor a working mailbox has been assumed.

## Shortcut presentation

The main message is “ペンで書く。キーで操る。” The keyboard section follows the hero, before the general feature list. Its tabs compare four real tool bindings in the standard and direct presets. They only change the website's reference display; they do not configure the app or capture browser keyboard shortcuts. Arrow-key color changes, size controls, and hold-to-use Space laser behavior are common to both presets. Context restrictions appear next to the examples.

Japanese product copy was edited using the `japanese-technical-writing` skill. Command bindings, applicable tools, and the one-second hint delay were checked against the source. This website change does not constitute a new runtime test of those app features.
