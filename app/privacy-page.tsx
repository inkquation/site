/* oxlint-disable next/no-html-link-for-pages -- These links load the matching language document on static hosting. */
import type { Metadata } from 'next';
import { siteOrigin, sitePath } from '../site.config';
import { siteCopy, type Locale } from './copy';
import ContactButton from './contact-button';
import policy from './privacy-policy.json';

export function privacyMetadata(locale: Locale): Metadata {
  return {
    title: `${policy[locale].title} | Inkquation`,
    description: policy[locale].intro,
    metadataBase: siteOrigin ? new URL(siteOrigin) : undefined,
    alternates: {
      canonical: sitePath(locale === 'ja' ? '/privacy/' : '/en/privacy/'),
      languages: { ja: sitePath('/privacy/'), en: sitePath('/en/privacy/'), 'x-default': sitePath('/privacy/') },
    },
  };
}

export default function PrivacyPage({ locale }: { locale: Locale }) {
  const copy = policy[locale];
  const navigation = siteCopy[locale].nav;
  return (
    <>
      <a className="skip-link" href="#main">{navigation.skip}</a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href={sitePath(locale === 'ja' ? '/' : '/en/')} aria-label={copy.homeLabel}>
            inkquation<span className="brand-period">.</span>
          </a>
          <nav className="language-switch" aria-label={navigation.language}>
            <a href={sitePath('/privacy/')} lang="ja" hrefLang="ja" aria-current={locale === 'ja' ? 'page' : undefined}>日本語</a>
            <span aria-hidden="true">/</span>
            <a href={sitePath('/en/privacy/')} lang="en" hrefLang="en" aria-current={locale === 'en' ? 'page' : undefined}>English</a>
          </nav>
        </div>
      </header>
      <main id="main" className="privacy-document container">
        <h1>{copy.title}</h1>
        <p className="privacy-date">{copy.updatedLabel}: <time dateTime={policy.updated}>{policy.updated}</time></p>
        <p>{copy.intro}</p>
        {copy.sections.map((section) => (
          <section key={section.id} aria-labelledby={section.id}>
            <h2 id={section.id}>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.id === 'support' && <ContactButton variant="primary" label={copy.contactLabel} subject="Inkquation privacy" hint={siteCopy[locale].contact.hint} noScriptMessage={siteCopy[locale].contact.noScriptMessage} />}
            {section.id === 'website' && <a className="privacy-text-link" href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub General Privacy Statement</a>}
          </section>
        ))}
        <a className="privacy-text-link" href={sitePath(locale === 'ja' ? '/' : '/en/')}>{copy.homeLabel}</a>
      </main>
    </>
  );
}
