/* oxlint-disable next/no-html-link-for-pages -- Full document links keep each language available without JavaScript. */
import { ChevronDown, Globe } from 'lucide-react';
import type { Locale } from './copy';
import locales from './locales.json';
import { localeEntries, localePath } from './locale-paths';

export default function LanguageSwitch({
  locale,
  label,
  page = '',
}: {
  locale: Locale;
  label: string;
  page?: '' | 'privacy/' | 'ai/';
}) {
  return (
    <details className="language-picker">
      <summary aria-label={`${label}: ${locales[locale].label}`}>
        <Globe size={16} aria-hidden="true" />
        <span lang={locale}>{locales[locale].label}</span>
        <ChevronDown size={14} aria-hidden="true" />
      </summary>
      <nav className="language-switch" aria-label={label}>
        {localeEntries
          .filter(
            ([language]) =>
              page !== 'ai/' || language === 'ja' || language === 'en',
          )
          .map(([language, { label: name }]) => (
            <a
              key={language}
              href={localePath(language, page)}
              lang={language}
              hrefLang={language}
              aria-current={locale === language ? 'page' : undefined}
            >
              {name}
            </a>
          ))}
      </nav>
    </details>
  );
}
