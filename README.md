# Inkquation website concept

A Japanese single-page website proposal for Inkquation. This is a local design proposal; the existing production website has not been changed and no Sites deployment has been created.

## Run locally

Requires Node.js 22.13 or later and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by the server (normally http://localhost:3000). Japanese is available at `/`.

```sh
npm run build
npm start
```

The production build uses the generated Vinext / Cloudflare project structure. The page needs no database, accounts, uploads, analytics, or remote fonts.

## Edit

- `app/landing-page.tsx`: page structure, navigation, and actual editor screenshot.
- `app/copy.ts`: Japanese copy with a shared TypeScript shape.
- `app/(ja)/page.tsx`: Japanese `/` route.
- `app/shortcut-guide.tsx`: shortcut feature section and standard/direct preset comparison.
- `app/paper-demo.tsx`: accessible paper-style tabs (grid, ruled, plain).
- `app/globals.css`: visual tokens, desktop and mobile layouts, reduced-motion handling.
- `app/site-layout.tsx` and the route-group layouts: HTML language, page title/description, and favicon metadata.
- `app/text-lines.tsx`: shared line breaks with word separation when responsive styles hide breaks.
- `public/assets/inkquation-icon.png`: copied from the current app's icon asset.
- `public/assets/inkquation-editor.jpg`: a direct capture of the actual app using a synthetic demo notebook.
- `reference/site-demo.inkqbackup`: the synthetic notebook used for the screenshot, outside the public directory.

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

The hero now uses an unaltered screenshot of the actual editor, replacing the initial HTML imitation after user feedback. It was captured from an isolated, in-memory app session with a synthetic notebook. No production notes were used. The notebook was assembled as ordinary vector stroke data; the app is not being advertised as offering handwriting recognition, typesetting, or graph generation.

The website uses a light palette. The app screenshot keeps its actual navy chrome: `EditorVisualTheme.swift` currently fixes those colors, even with the OS set to light appearance. No app theme implementation or screenshot recoloring was introduced. The interactive paper sample lower on the page is clearly labelled as a paper illustration, not an app screenshot.

Before publication, replace the distribution contact section with a verified download URL and confirmed release/system information when available. Check that the public contact mailbox is operational. Neither release availability nor a working mailbox has been assumed.

## Shortcut presentation

The main message is “ペンで書く。キーで操る。” The keyboard section follows the hero, before the general feature list. Its tabs compare four real tool bindings in the standard and direct presets. They only change the website's reference display; they do not configure the app or capture browser keyboard shortcuts. Arrow-key color changes, size controls, and hold-to-use Space laser behavior are common to both presets. Context restrictions appear next to the examples.

Japanese product copy was edited using the `japanese-technical-writing` skill. Command bindings, applicable tools, and the one-second hint delay were checked against the source. This website change does not constitute a new runtime test of those app features.
