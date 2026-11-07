import type { Metadata } from 'next';
import { siteOrigin } from '../site.config';
import { siteCopy, type Locale } from './copy';
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
  const { lead, prefix, accent } = siteCopy[locale].hero;
  const image = {
    url: new URL(`${localePath(locale)}og.png`, metadataBase).href,
    width: 1200,
    height: 630,
    alt: `Inkquation — ${lead} ${prefix}${accent}`,
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
