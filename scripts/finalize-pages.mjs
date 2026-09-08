import { mkdir, rename, rmdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '/site').replace(
  /\/+$/,
  '',
);

// Vinext places prefixed bundles in a matching directory. Pages itself mounts
// this artifact at basePath, so remove that extra directory level on disk.
if (basePath) {
  const prefixedDirectory = path.join('dist/client', basePath.slice(1));
  await rename(path.join(prefixedDirectory, '_next'), 'dist/client/_next');
  await rmdir(prefixedDirectory);
}

// GitHub Pages resolves directory URLs to index.html. Keep the RSC payload at
// en.rsc; language links use full document navigation, not client-side routing.
for (const route of ['en', 'privacy', 'en/privacy']) {
  await mkdir(`dist/client/${route}`, { recursive: true });
  await rename(`dist/client/${route}.html`, `dist/client/${route}/index.html`);
}
await writeFile('dist/client/.nojekyll', '');
