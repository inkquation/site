import type { Metadata } from 'next';
import { siteCopy, type Locale } from './copy';
import { siteOrigin, sitePath } from '../site.config';
import './globals.css';

export function localeMetadata(locale: Locale): Metadata {
  return {
    ...siteCopy[locale].meta,
    metadataBase: siteOrigin ? new URL(siteOrigin) : undefined,
    alternates: {
      canonical: sitePath(locale === 'ja' ? '/' : '/en/'),
      languages: {
        ja: sitePath('/'),
        en: sitePath('/en/'),
        'x-default': sitePath('/'),
      },
    },
    icons: {
      icon: sitePath('/assets/inkquation-icon.png'),
      apple: sitePath('/assets/inkquation-icon.png'),
    },
  };
}

export default function SiteLayout({
  locale,
  children,
}: Readonly<{ locale: Locale; children: React.ReactNode }>) {
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
