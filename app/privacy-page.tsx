/* oxlint-disable next/no-html-link-for-pages -- These links load the matching language document on static hosting. */
import type { Metadata } from 'next';
import { localePath } from './locale-paths';
import { pageMetadata } from './page-metadata';
import LanguageSwitch from './language-switch';
import BrandWordmark from './brand-wordmark';
import { siteCopy, type Locale } from './copy';
import ContactButton from './contact-button';
import policy from './privacy-policy.json';

export function privacyMetadata(locale: Locale): Metadata {
  return pageMetadata(
    locale,
    'privacy/',
    `${policy[locale].title} | Inkquation`,
    policy[locale].intro,
  );
}

export default function PrivacyPage({ locale }: { locale: Locale }) {
  const copy = policy[locale];
  const navigation = siteCopy[locale].nav;
  return (
    <>
      <a className="skip-link" href="#main">
        {navigation.skip}
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a
            className="brand"
            href={localePath(locale)}
            aria-label={copy.homeLabel}
          >
            <BrandWordmark />
          </a>
          <LanguageSwitch
            locale={locale}
            label={navigation.language}
            page="privacy/"
          />
        </div>
      </header>
      <main id="main" className="privacy-document container">
        <h1>{copy.title}</h1>
        <p className="privacy-date">
          {copy.updatedLabel}:{' '}
          <time dateTime={policy.updated}>{policy.updated}</time>
        </p>
        <p>{copy.intro}</p>
        {copy.sections.map((section) => (
          <section key={section.id} aria-labelledby={section.id}>
            <h2 id={section.id}>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.id === 'support' && (
              <ContactButton
                variant="primary"
                label={copy.contactLabel}
                subject="Inkquation privacy"
                hint={siteCopy[locale].contact.hint}
                noScriptMessage={siteCopy[locale].contact.noScriptMessage}
              />
            )}
            {section.id === 'website' && (
              <>
                <a
                  className="privacy-text-link"
                  href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                >
                  GitHub General Privacy Statement
                </a>
                {' · '}
                <a
                  className="privacy-text-link"
                  href="https://policies.google.com/technologies/partner-sites"
                >
                  Google Privacy &amp; Terms
                </a>
                {' · '}
                <a
                  className="privacy-text-link"
                  href="https://tools.google.com/dlpage/gaoptout"
                >
                  Google Analytics Opt-out
                </a>
              </>
            )}
          </section>
        ))}
        <a className="privacy-text-link" href={localePath(locale)}>
          {copy.homeLabel}
        </a>
      </main>
    </>
  );
}
