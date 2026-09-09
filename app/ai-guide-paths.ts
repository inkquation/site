import type { Locale } from './copy';
import { localeEntries, localePath } from './locale-paths';

export const aiGuideLocales = localeEntries.map(([locale]) => locale);
export type AIGuideLocale = (typeof aiGuideLocales)[number];

export function aiGuidePath(locale: Locale) {
  return localePath(locale, 'ai/');
}
