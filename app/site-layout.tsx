import type { Metadata } from 'next';
import { siteCopy, type Locale } from './copy';
import './globals.css';

export function localeMetadata(locale: Locale): Metadata {
  return {
    ...siteCopy[locale].meta,
    alternates: {
      languages: { ja: '/', en: '/en', 'x-default': '/' },
    },
    icons: {
      icon: '/assets/inkquation-icon.png',
      apple: '/assets/inkquation-icon.png',
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
