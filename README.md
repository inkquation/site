# Inkquation website concept

A single-page website proposal for Inkquation. This is a local design proposal; the existing production website has not been changed and no Sites deployment has been created.

## Run locally

Requires Node.js 22.13 or later and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by the server (normally http://localhost:3000).

```sh
npm run build
npm start
```

The production build uses the generated Vinext / Cloudflare project structure. The page needs no database, accounts, uploads, analytics, or remote fonts.

## Product assets

The icon comes from the current Inkquation app. The editor image is an unaltered capture of the real app using a synthetic demo notebook. Its reproducible notebook is stored in `reference/site-demo.inkqbackup`, outside the public directory.
