import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import locales from '../app/locales.json' with { type: 'json' };
import policy from '../app/privacy-policy.json' with { type: 'json' };
import guides from '../app/ai-guide.json' with { type: 'json' };
import {
  guideLocales,
  guideRoute,
  guideMarkdown,
  llmsText,
} from '../lib/ai-docs.mjs';
import { contactEmail } from '../lib/contact-email.mjs';

assert.deepEqual(
  Object.keys(guides)
    .filter((key) => key !== 'updated')
    .sort(),
  [...guideLocales].sort(),
  'Every site language must have an AI guide',
);
for (const locale of guideLocales) {
  const sections = guides[locale].sections;
  assert.deepEqual(
    sections.map(({ id }) => id),
    guides.en.sections.map(({ id }) => id),
    `${locale}: guide section coverage`,
  );
  for (const [index, section] of sections.entries()) {
    const reference = guides.en.sections[index];
    assert.deepEqual(
      section.blocks.map(({ type }) => type),
      reference.blocks.map(({ type }) => type),
      `${locale}/${section.id}: guide block coverage`,
    );
    for (const [blockIndex, block] of section.blocks.entries()) {
      const original = reference.blocks[blockIndex];
      if (block.type === 'code')
        assert.deepEqual(
          block,
          original,
          `${locale}: JSON examples must match`,
        );
      if (block.items)
        assert.equal(
          block.items.length,
          original.items.length,
          `${locale}: missing list or link item`,
        );
      if (block.rows)
        assert.equal(
          block.rows.length,
          original.rows.length,
          `${locale}: missing table row`,
        );
    }
  }
  const identifiers = (guide) =>
    [
      ...new Set(
        [...JSON.stringify(guide).matchAll(/`([^`]+)`/g)].map(
          (match) => match[1],
        ),
      ),
    ].sort();
  assert.deepEqual(
    identifiers(guides[locale]),
    identifiers(guides.en),
    `${locale}: technical identifiers differ`,
  );
}

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

routes.push(
  ...guideLocales.map((locale) => ({
    locale,
    route: guideRoute(locale).slice(0, -1),
    file: `${guideRoute(locale).slice(1)}index.html`,
  })),
);

for (const { locale, route, file } of routes) {
  const isPrivacy = route.endsWith('/privacy');
  const isGuide = route.endsWith('/ai');
  assert(
    manifest.routes.some(
      (entry) => entry.route === route && entry.status === 'rendered',
    ),
    `${route} was not prerendered`,
  );
  const html = await readFile(path.join(output, file), 'utf8');
  const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/)?.[1] ?? '';
  assert.equal(
    [
      ...head.matchAll(
        /<script\b[^>]*src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-BJTQ23PPZN"[^>]*>/g,
      ),
    ].length,
    1,
    `${file}: Google Analytics loader must appear once in the head`,
  );
  assert.equal(
    [...head.matchAll(/gtag\('config', 'G-BJTQ23PPZN'\)/g)].length,
    1,
    `${file}: Google Analytics must be configured once`,
  );
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
    isGuide ? 0 : isPrivacy ? 1 : 2,
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
    Object.entries(locales)
      .filter(([language]) => !isGuide || guideLocales.includes(language))
      .map(([language, { path: root }]) => [
        language,
        `${basePath}${root}${isPrivacy ? 'privacy/' : isGuide ? 'ai/' : ''}`,
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
  } else if (isGuide) {
    const article = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
    assert(article, `${file}: missing guide content`);
    const text = article
      .replace(/<[^>]*>/g, '')
      .replaceAll('&amp;', '&')
      .replaceAll('&quot;', '"')
      .replaceAll('&#x27;', "'")
      .replaceAll('&lt;', '<')
      .replaceAll('&gt;', '>');
    for (const section of guides[locale].sections) {
      assert(
        article.includes(`id="${section.id}"`),
        `${file}: missing guide section ${section.id}`,
      );
      for (const block of section.blocks) {
        const expectedText =
          block.type === 'table'
            ? [...block.headers, ...block.rows.flat()]
            : block.type === 'list'
              ? block.items
              : block.type === 'links'
                ? block.items.map((item) => item.label)
                : [block.text];
        for (const value of expectedText) {
          assert(
            text.includes(value.replaceAll('`', '')),
            `${file}: missing guide text ${value.slice(0, 80)}`,
          );
        }
        if (block.type === 'code') JSON.parse(block.text);
      }
    }
    assert(
      html.includes('type="text/markdown"'),
      `${file}: missing Markdown alternate`,
    );
    assert(
      html.includes(`${basePath}${guideRoute(locale)}index.md`),
      `${file}: missing Markdown link`,
    );
    assert(
      html.includes(`${basePath}/llms.txt`),
      `${file}: missing llms.txt link`,
    );
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
    assert(
      html.includes(`href="${basePath}${guideRoute(locale)}"`),
      `${file}: missing AI guide link`,
    );
  }
  assert(checked > 0, `${file}: no local assets found`);
  console.log(
    `${file}: ${locale}, language links, and ${checked} local references OK`,
  );
}

// Machine-readable documents are generated from the same source as HTML.
for (const [file, expected] of [
  ...guideLocales.map((locale) => [
    `${guideRoute(locale).slice(1)}index.md`,
    guideMarkdown(locale, origin, basePath),
  ]),
  ['llms.txt', llmsText(origin, basePath)],
]) {
  const content = await readFile(path.join(output, file), 'utf8');
  assert.equal(content, expected, `${file}: stale generated document`);
  for (const [, reference] of content.matchAll(/\]\((https?:[^)]+)\)/g)) {
    const url = new URL(reference);
    if (url.origin !== new URL(origin).origin) continue;
    assert(
      url.pathname.startsWith(prefix),
      `${file}: URL escapes Pages prefix`,
    );
    const relative = decodeURIComponent(url.pathname.slice(prefix.length));
    const target = path.join(
      output,
      !relative || relative.endsWith('/') ? `${relative}index.html` : relative,
    );
    assert(
      (await stat(target)).isFile(),
      `${file}: missing link target ${reference}`,
    );
    if (url.hash)
      assert(
        (await readFile(target, 'utf8')).includes(`id="${url.hash.slice(1)}"`),
        `${file}: missing anchor ${reference}`,
      );
  }
  console.log(`${file}: source content and local links OK`);
}
await stat(path.join(output, '.nojekyll'));

// Check all public text, including RSC payloads and client bundles, so a future
// refactor cannot accidentally reintroduce the literal address outside HTML.
const address = contactEmail().address.toLowerCase();
async function checkPublicText(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) await checkPublicText(filename);
    else if (/\.(html|rsc|js|json|css|map|md|txt)$/.test(entry.name)) {
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
