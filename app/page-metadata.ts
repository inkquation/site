import type { Metadata } from 'next';
import { siteOrigin, sitePath } from '../site.config';
import type { Locale } from './copy';
import {
  languageAlternates,
  localePath,
  type LocalizedPage,
} from './locale-paths';

const socialLocales: Record<Locale, string> = {
  ja: 'ja_JP',
  en: 'en_US',
  'zh-Hans': 'zh_CN',
  'zh-Hant': 'zh_TW',
  'zh-HK': 'zh_HK',
  ko: 'ko_KR',
};

export function pageMetadata(
  locale: Locale,
  page: LocalizedPage,
  title: string,
  description: string,
): Metadata {
  const metadataBase = new URL(siteOrigin ?? 'https://inkquation.app');
  const image = {
    url: new URL(sitePath('/og.png'), metadataBase).href,
    width: 1200,
    height: 630,
    alt: 'Inkquation — Write by pen. Switch by key.',
  };
  return {
    title,
    description,
    metadataBase,
    alternates: {
      canonical: localePath(locale, page),
      languages: languageAlternates(page),
    },
    openGraph: {
      type: 'website',
      siteName: 'Inkquation',
      title,
      description,
      url: new URL(localePath(locale, page), metadataBase).href,
      locale: socialLocales[locale],
      alternateLocale: Object.entries(socialLocales)
        .filter(([language]) => language !== locale)
        .map(([, language]) => language),
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
