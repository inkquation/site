import type { Locale } from './copy';
import { localePath } from './locale-paths';

export const aiGuideLocales = ['ja', 'en'] as const;
export type AIGuideLocale = (typeof aiGuideLocales)[number];

export function aiGuidePath(locale: Locale) {
  return `${localePath(locale === 'ja' ? 'ja' : 'en')}ai/`;
}
