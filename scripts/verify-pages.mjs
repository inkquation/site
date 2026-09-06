import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const output = path.resolve('dist/client');
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '/site').replace(
  /\/+$/,
  '',
);
const origin =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ?? 'https://inkquation.github.io';
const prefix = `${basePath}/`;
const manifest = JSON.parse(
  await readFile('dist/server/vinext-prerender.json', 'utf8'),
);
const routes = [
  { locale: 'ja', route: '/', file: 'index.html' },
  { locale: 'en', route: '/en', file: 'en/index.html' },
];

for (const { locale, route, file } of routes) {
  assert(
    manifest.routes.some(
      (entry) => entry.route === route && entry.status === 'rendered',
    ),
    `${route} was not prerendered`,
  );
  const html = await readFile(path.join(output, file), 'utf8');
  assert(
    html.includes(`<html lang="${locale}"`),
    `${file}: wrong document language`,
  );
  const pageUrl = new URL(
    `${prefix}${file.replace(/index\.html$/, '')}`,
    origin,
  );
  const languageLinks = new Map();
  let checked = 0;

  for (const match of html.matchAll(/<(a|link|img|script)\b[^>]*>/g)) {
    const tag = match[1];
    const attrs = Object.fromEntries(
      [...match[0].matchAll(/([\w:-]+)="([^"]*)"/g)].map((attr) => [
        attr[1].toLowerCase(),
        attr[2].replaceAll('&amp;', '&'),
      ]),
    );
    const reference = attrs.href ?? attrs.src;
    if (tag === 'a' && attrs.hreflang) {
      languageLinks.set(attrs.hreflang, attrs.href);
      assert.equal(
        attrs['aria-current'],
        attrs.hreflang === locale ? 'page' : undefined,
      );
    }
    if (!reference || reference.startsWith('#')) continue;
    const url = new URL(reference, pageUrl);
    if (url.origin !== pageUrl.origin) continue;
    assert(
      url.pathname.startsWith(prefix),
      `${file}: URL escapes the Pages prefix: ${reference}`,
    );
    let relative = decodeURIComponent(url.pathname.slice(prefix.length));
    if (!relative || relative.endsWith('/')) relative += 'index.html';
    const target = path.resolve(output, relative);
    assert(
      target.startsWith(`${output}${path.sep}`),
      `URL escapes the export: ${reference}`,
    );
    assert(
      (await stat(target)).isFile(),
      `${file}: missing export file: ${relative}`,
    );
    checked++;
  }

  assert.deepEqual(
    languageLinks,
    new Map([
      ['ja', prefix],
      ['en', `${prefix}en/`],
    ]),
  );
  assert(checked > 0, `${file}: no local assets found`);
  console.log(
    `${file}: ${locale}, language links, and ${checked} local references OK`,
  );
}

await stat(path.join(output, '.nojekyll'));
console.log('GitHub Pages export verified.');
