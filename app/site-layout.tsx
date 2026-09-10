import type { Metadata } from 'next';
import { siteCopy, type Locale } from './copy';
import { siteOrigin, sitePath } from '../site.config';
import { localePath, languageAlternates } from './locale-paths';
import './globals.css';

export function localeMetadata(locale: Locale): Metadata {
  return {
    ...siteCopy[locale].meta,
    metadataBase: siteOrigin ? new URL(siteOrigin) : undefined,
    alternates: {
      canonical: localePath(locale),
      languages: languageAlternates(),
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
      <head>
        {process.env.NODE_ENV === 'production' && (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-BJTQ23PPZN"
            />
            <script
              id="google-analytics"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-BJTQ23PPZN');`,
              }}
            />
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
