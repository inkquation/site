import { mkdir, writeFile } from 'node:fs/promises';
import {
  guideLocales,
  guideRoute,
  guideMarkdown,
  llmsText,
} from '../lib/ai-docs.mjs';

const basePath = (
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.argv.includes('--pages') ? '/site' : '')
).replace(/\/+$/, '');
const origin =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ??
  (process.argv.includes('--pages')
    ? 'https://inkquation.github.io'
    : 'https://inkquation.app');

for (const locale of guideLocales) {
  const directory = `public${guideRoute(locale)}`;
  await mkdir(directory, { recursive: true });
  await writeFile(
    `${directory}index.md`,
    guideMarkdown(locale, origin, basePath),
  );
}
await writeFile('public/llms.txt', llmsText(origin, basePath));
console.log(
  `Generated English llms.txt and Markdown guides in ${guideLocales.length} languages.`,
);
