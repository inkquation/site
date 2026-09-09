import locales from './locales.json';
import type { Locale } from './copy';
import { sitePath } from '../site.config';

export const localeEntries = Object.entries(locales) as [
  Locale,
  { label: string; path: `/${string}` },
][];

export function localePath(locale: Locale, page: '' | 'privacy/' = '') {
  return sitePath(`${locales[locale].path}${page}` as `/${string}`);
}

export function languageAlternates(page: '' | 'privacy/' = '') {
  return Object.fromEntries([
    ...localeEntries.map(([locale]) => [locale, localePath(locale, page)]),
    ['x-default', localePath('ja', page)],
  ]);
}
