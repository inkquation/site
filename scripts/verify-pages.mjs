import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import locales from '../app/locales.json' with { type: 'json' };
import policy from '../app/privacy-policy.json' with { type: 'json' };
import { contactEmail } from '../lib/contact-email.mjs';

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
const routes = Object.entries(locales).flatMap(([locale, { path: root }]) => [
  {
    locale,
    route: root === '/' ? '/' : root.slice(0, -1),
    file: `${root.slice(1)}index.html`,
  },
  {
    locale,
    route: `${root}privacy`,
    file: `${root.slice(1)}privacy/index.html`,
  },
]);

for (const { locale, route, file } of routes) {
  const isPrivacy = route.endsWith('/privacy');
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
  assert(!/href=["']mailto:/i.test(html), `${file}: exposed mailto link`);
  assert.equal(
    [
      ...html.matchAll(
        /<button\b[^>]*class="[^"]*\bemail-contact\b[^"]*"[^>]*>/g,
      ),
    ].length,
    isPrivacy ? 1 : 2,
    `${file}: contact actions must be buttons`,
  );
  const pageUrl = new URL(
    `${prefix}${file.replace(/index\.html$/, '')}`,
    origin,
  );
  const languageLinks = new Map();
  const alternates = new Map();
  let canonical;
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
    if (tag === 'link' && attrs.rel === 'alternate' && attrs.hreflang)
      alternates.set(attrs.hreflang, new URL(attrs.href, origin).href);
    if (tag === 'link' && attrs.rel === 'canonical')
      canonical = new URL(attrs.href, origin).href;
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

  const expectedLanguages = new Map(
    Object.entries(locales).map(([language, { path: root }]) => [
      language,
      `${basePath}${root}${isPrivacy ? 'privacy/' : ''}`,
    ]),
  );
  assert.deepEqual(
    languageLinks,
    expectedLanguages,
    `${file}: language navigation`,
  );
  const expectedAlternates = new Map(
    [...expectedLanguages, ['x-default', expectedLanguages.get('ja')]].map(
      ([language, url]) => [language, new URL(url, origin).href],
    ),
  );
  assert.deepEqual(
    alternates,
    expectedAlternates,
    `${file}: alternate metadata`,
  );
  assert.equal(canonical, pageUrl.href, `${file}: canonical URL`);
  if (isPrivacy) {
    for (const section of policy[locale].sections) {
      assert(
        html.includes(`id="${section.id}"`),
        `${file}: missing policy section ${section.id}`,
      );
      for (const paragraph of section.paragraphs)
        assert(
          html.includes(
            paragraph
              .replaceAll('&', '&amp;')
              .replaceAll('"', '&quot;')
              .replaceAll("'", '&#x27;')
              .replaceAll('<', '&lt;')
              .replaceAll('>', '&gt;'),
          ),
          `${file}: missing translated policy paragraph`,
        );
    }
  } else {
    const shortcuts = html.match(
      /<section\b[^>]*id="shortcuts"[^>]*>([\s\S]*?)<\/section>/,
    )?.[1];
    assert(shortcuts, `${file}: missing shortcut guide`);
    const selectedTab = shortcuts.match(
      /<button\b(?=[^>]*role="tab")(?=[^>]*aria-selected="true")[^>]*>([\s\S]*?)<\/button>/,
    )?.[1];
    const leftHandedLabel =
      locale === 'en'
        ? 'Left-Hand Operation'
        : locale === 'ko'
          ? '왼손 조작'
          : '左手操作';
    assert(
      selectedTab?.includes(leftHandedLabel),
      `${file}: left-hand preset should be selected initially`,
    );
    assert.equal(
      [...shortcuts.matchAll(/role="tab"/g)].length,
      3,
      `${file}: missing shortcut presets`,
    );
    // Expected keys are checked against the native app's leftHandedOverrides.
    for (const key of [
      'Q',
      'W',
      'E',
      'R',
      'A',
      'S',
      'D',
      'C',
      'V',
      'Z',
      'X',
      'Command + 1',
      'Command + 2',
      'Command + 3',
      'Command + 4',
    ]) {
      assert(
        shortcuts.includes(`aria-label="${key}"`),
        `${file}: missing left-hand shortcut ${key}`,
      );
    }
    assert(html.includes('id="ai"'), `${file}: missing AI section`);
    assert(
      html.includes(`${expectedLanguages.get(locale)}privacy/#ai`),
      `${file}: wrong AI privacy link`,
    );
    assert(html.includes('MCP'), `${file}: missing AI connection explanation`);
  }
  assert(checked > 0, `${file}: no local assets found`);
  console.log(
    `${file}: ${locale}, language links, and ${checked} local references OK`,
  );
}

await stat(path.join(output, '.nojekyll'));

// Check all public text, including RSC payloads and client bundles, so a future
// refactor cannot accidentally reintroduce the literal address outside HTML.
const address = contactEmail().address.toLowerCase();
async function checkPublicText(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) await checkPublicText(filename);
    else if (/\.(html|rsc|js|json|css|map)$/.test(entry.name)) {
      const content = (await readFile(filename, 'utf8')).toLowerCase();
      assert(
        !content.includes(address),
        `${filename}: exposed contact address`,
      );
      assert(
        !content.includes(encodeURIComponent(address)),
        `${filename}: exposed URI-encoded address`,
      );
    }
  }
}
await checkPublicText(output);
console.log(
  'Contact address is absent from public HTML, RSC payloads, and bundles.',
);
console.log('GitHub Pages export verified.');
