# Inkquation website concept

A multilingual website for Inkquation, with a local preview and a static GitHub Pages deployment.

## Run locally

Requires Node.js 22.13 or later and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by the server (normally http://localhost:3000). Japanese is available at `/`, English at `/en/`, Simplified Chinese at `/zh-Hans/`, Traditional Chinese (Taiwan) at `/zh-Hant/`, Traditional Chinese (Hong Kong) at `/zh-HK/`, and Korean at `/ko/`. Each language includes its own `privacy/` page. The header links switch languages; each URL can be opened or shared directly.

```sh
npm run build
npm start
```

The default production build retains the Vinext / Cloudflare project structure. GitHub Pages uses the separate static export described below. The page needs no database, accounts, uploads, analytics, or remote fonts.

## GitHub Pages

The [Pages workflow](.github/workflows/pages.yml) publishes `main` through GitHub Actions. It also supports manual runs. Pages must use **GitHub Actions** as its publishing source. The workflow obtains the site path and origin from `actions/configure-pages`, builds all six languages and their privacy pages, checks their links and assets, and deploys only `dist/client`.

The production site uses the custom domain [inkquation.app](https://inkquation.app/), with the same six language paths listed above. Its base path is empty. For a matching local export and verification:

```sh
NEXT_PUBLIC_BASE_PATH='' NEXT_PUBLIC_SITE_ORIGIN=https://inkquation.app npm run build:pages
NEXT_PUBLIC_BASE_PATH='' NEXT_PUBLIC_SITE_ORIGIN=https://inkquation.app npm run verify:pages
```

Changing the Pages domain does not rewrite an existing export: CSS, JavaScript, image URLs, and language links are generated at build time. After a domain change, publish a new commit and verify all public language URLs. An export for the former `/site/` path will leave those references broken on the custom domain.

For an export matching the repository's default Pages URL instead:

```sh
NEXT_PUBLIC_BASE_PATH=/site NEXT_PUBLIC_SITE_ORIGIN=https://inkquation.github.io npm run build:pages
NEXT_PUBLIC_BASE_PATH=/site NEXT_PUBLIC_SITE_ORIGIN=https://inkquation.github.io npm run verify:pages
```

The export contains an `index.html` for every language home and privacy page, so all 12 URLs work on a static file host. `site.config.ts` prefixes image URLs and language links. Vinext's `assetPrefix` prefixes JavaScript and CSS. The export keeps framework routes unprefixed because Vinext 1.0.0-beta.5 prerenders unprefixed URLs; `scripts/finalize-pages.mjs` removes the extra on-disk prefix from the bundles, places each localized HTML file at its directory URL, and adds `.nojekyll`. `scripts/verify-pages.mjs` rejects missing or skipped pages and broken local references before upload.

The workflow follows [GitHub's custom Pages workflow guidance](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages). It uses the built-in workflow token and pins official Actions to commit SHAs. The synthetic notebook in `reference/` and server build files are outside the deployed directory.

## Edit

- `app/landing-page.tsx`: shared page structure, navigation, language switch, and actual editor screenshot.
- `app/copy.ts` and `app/translations.ts`: all six languages with a shared TypeScript shape.
- `app/locales.json` and `app/locale-paths.ts`: shared language names, routes, and metadata used by the pages and export checks.
- `app/language-switch.tsx`: native language menu with full document links; it works without JavaScript and preserves privacy and AI guide routes. The AI guide is available in Japanese and English.
- `app/(ja)`, `app/(en)`, `app/(zh-Hans)`, `app/(zh-Hant)`, `app/(zh-HK)`, and `app/(ko)`: language-specific home and privacy routes.
- `app/shortcut-guide.tsx`: shortcut feature section and left-hand/standard/direct preset comparison.
- `app/paper-demo.tsx`: accessible paper-style tabs (grid, ruled, plain).
- `app/globals.css`: visual tokens, desktop and mobile layouts, reduced-motion handling.
- `app/site-layout.tsx` and the route-group layouts: server-rendered HTML language, localized title/description, alternate-language links, and favicon metadata. Separate root layouts let each route render the correct language before JavaScript loads.
- `app/text-lines.tsx`: shared line breaks with word separation when responsive styles hide breaks.
- `public/assets/inkquation-icon.png`: copied from the current app's icon asset.
- `public/assets/inkquation-editor.jpg`: a direct capture of the actual app using a synthetic demo notebook.
- `reference/site-demo.inkqbackup`: the synthetic notebook used for the screenshot, outside the public directory.

## Contact address handling

Both contact buttons decode the Base64 address only inside their click handler. The initial HTML and RSC payloads have no plaintext address or `mailto:` link; the client bundle contains only the encoded address. After the main button is clicked, its caption shows the decoded address so the visitor can copy it if their email app does not open. A localized `noscript` message explains that contacting requires JavaScript.

This is obfuscation, not cryptographic protection. A bot that evaluates the JavaScript can recover the address. The address may also remain available from previously published pages or repository history. See [MDN's Base64 decoding reference](https://developer.mozilla.org/en-US/docs/Web/API/Window/atob).

`npm run test:contact` checks the mailbox and subject handling. `npm run verify:pages` also checks every public HTML, RSC, JavaScript, JSON, and CSS file for the literal address before deployment.

## Follow-up work

[TODO.md](TODO.md) tracks the TourBox Elite preset, hardware verification, bilingual setup guide, and eventual website download section. No preset is published yet.

## Content and publication notes

The copy was checked against the local app source on 2026-09-07. The existing site at https://inkquation.app/ supplied the public contact address. It advertised cloud sync and had a download link targeting `#`; this proposal does not claim cloud sync or invent a download URL. The contact buttons open a mail composer after a user clicks, without sending a message.

Features described in the proposal are grounded in:

- `../inkquation/inkquation/KeyboardShortcutSettings.swift`: exact left-hand/standard/direct preset bindings and per-tool command contexts.
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

The main message is “ペンで書く。キーで操る。” The keyboard section follows the hero, before the general feature list. Its tabs compare all seven tool bindings in Left-Hand Operation, Standard, and Single-key tool switching, with Left-Hand Operation selected initially. Selecting a tab also changes the color and size key examples: C/V and Z/X for Left-Hand Operation, arrow keys and −/+ for the other two. Holding Space for a temporary laser pointer is shared by all three. The selected preset is named above these examples. These tabs only change the website's reference display; they do not configure the app or capture keyboard shortcuts.

All six languages explain how to apply Left-Hand Operation in Settings → Shortcuts and note the shared left-side letters and numbers on US/JIS layouts. A separately labelled Left-Hand Operation guide shows previous/next page (⌘1/⌘2) and zoom out/in (⌘3/⌘4). Individual customization, text-field exclusions, and the one-second Command hint remain documented. Bindings and preset names were checked against `../inkquation/inkquation/KeyboardShortcutSettings.swift`, the app's string catalogs, and `../inkquation/LEFT_HAND_SHORTCUTS.md`.

Japanese product copy was edited using the `japanese-technical-writing` skill. Command bindings, applicable tools, and the one-second hint delay were checked against the source. This website change does not constitute a new runtime test of those app features.

## Chinese, Korean, and AI integration (2026-09-09)

The site follows the app's six language choices, including regional written Chinese terminology and Korean. Localized copy covers the feature explanations, shortcut and paper tabs, AI setup steps, contact actions, image descriptions, and accessibility labels. The editor screenshot remains an unaltered Japanese UI capture, identified in every other language's caption. Native system font stacks support each writing system; no remote fonts or translation services are added.

The policy translations are copied from `../inkquation/inkquation/PrivacyPolicy.json`; existing Japanese and English policy text is unchanged. The site uses these translations for each localized policy page and footer label. App-side links that currently open the English policy can be updated after these new public URLs are deployed.

The hero announcement and AI section describe the implemented local MCP connection: reading an open page or lasso selection as an image, inserting PNG images or native shapes and strokes, inspecting the result, and undoing an insertion. Setup requires enabling AI connections (off by default), copying the configuration to a compatible external AI app on the Mac, and keeping Inkquation open. The copy explains that a cloud-backed AI may send read content to its provider. Claims were checked against `../inkquation/mcp/README.md` and the bundled policy. The site does not run an AI client or configure the app itself.

`verify:pages` checks all 14 prerendered documents, language navigation, active language, canonical and alternate metadata, localized policy paragraphs, AI section links, local assets, and contact-address handling. Run the same custom-domain build and verification commands above before publishing.

## AI documentation

The detailed guide is available at `/ai/` (Japanese) and `/en/ai/` (English). All six landing pages link to it; Chinese and Korean links identify the English destination. The guide covers the local connection, seven MCP tools, native stroke and shape insertion, coordinates, JSON examples, replay and Undo limits, and external AI privacy. It describes the implementation checked on 2026-09-09, without assigning it an unverified public release version. The connected server’s `tools/list` is the source for available capabilities.

`app/ai-guide.json` is the shared content source for HTML and Markdown. Edit it, not the generated files. `scripts/export-ai-docs.mjs` runs before development and both builds, generating `/ai/index.md`, `/en/ai/index.md`, and an English `/llms.txt` in `public/`. These generated files are ignored by Git. Restart development or run the generator after editing guide content to refresh Markdown. HTML metadata also links to the corresponding Markdown alternative. `llms.txt` is a concise documentation index, not an MCP endpoint or a promise that AI services will discover the site.

The existing `build:pages` and `verify:pages` commands include these documents. Verification checks every guide section and text block, JSON syntax, matching Markdown output, language and canonical metadata, local links and Markdown link fragments, and the absence of the contact address in public Markdown and text files. Both the production empty base path and `/site` deployment prefix must pass.

Claims were checked against `../inkquation/inkquation/InkquationMCPService.swift`, `MCPStrokeInput.swift`, `MCPConnectionSettings.swift`, and `../inkquation/mcp/README.md`. Changes to those contracts require updating the guide. The standard bundled adapter accepts inline PNG data; the optional development Python adapter’s local-file extension is outside this public guide.
