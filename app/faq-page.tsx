/* oxlint-disable next/no-html-link-for-pages -- Full document navigation works on GitHub Pages without JavaScript. */
import type { Metadata } from 'next';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { siteOrigin } from '../site.config';
import type { Locale } from './copy';
import { siteCopy } from './copy';
import BrandWordmark from './brand-wordmark';
import LanguageSwitch from './language-switch';
import { languageAlternates, localePath } from './locale-paths';
import questions from './faq.json';

export function faqMetadata(locale: Locale): Metadata {
  const copy = questions[locale];
  return {
    title: `${copy.title} | Inkquation`,
    description: copy.intro,
    metadataBase: siteOrigin ? new URL(siteOrigin) : undefined,
    alternates: {
      canonical: localePath(locale, 'faq/'),
      languages: languageAlternates('faq/'),
    },
  };
}

export default function FAQPage({ locale }: { locale: Locale }) {
  const copy = questions[locale];
  const nav = siteCopy[locale].nav;
  return (
    <>
      <a className="skip-link" href="#main">
        {nav.skip}
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href={localePath(locale)} aria-label={nav.home}>
            <BrandWordmark />
          </a>
          <LanguageSwitch locale={locale} label={nav.language} page="faq/" />
        </div>
      </header>
      <main
        className="faq-page container"
        id="main"
        aria-labelledby="faq-title"
      >
        <a className="faq-home-link" href={localePath(locale)}>
          <ArrowLeft size={16} aria-hidden="true" /> {nav.home}
        </a>
        <h1 id="faq-title">{copy.title}</h1>
        <details id="faq-startup" open>
          <summary>
            {copy.startupQuestion}
            <ChevronDown size={20} aria-hidden="true" />
          </summary>
          <div className="faq-answer">
            <p>{copy.intro}</p>
            <ol className="faq-steps">
              {copy.steps.map((step) => (
                <li key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
            <div className="faq-recovery">
              <h3>{copy.limitsTitle}</h3>
              <p>{copy.limits}</p>
              <p>{copy.backup}</p>
            </div>
          </div>
        </details>
        <details id="faq-reset">
          <summary>
            {copy.resetQuestion}
            <ChevronDown size={20} aria-hidden="true" />
          </summary>
          <div className="faq-answer">
            <p>{copy.reset}</p>
            <ol className="faq-steps">
              {copy.resetSteps.map((step, index) => (
                <li key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  {index === 1 && (
                    <code className="faq-file-path">
                      ~/Library/Containers/app.inkquation/Data/Library/Application
                      Support/
                    </code>
                  )}
                  {index === 2 && (
                    <div className="faq-rename">
                      <code>Inkqation.app</code>
                      <span>→</span>
                      <code>Inkqation.app.before-reset</code>
                    </div>
                  )}
                  {index === 3 && (
                    <div className="faq-rename">
                      <code>InkquationStorage</code>
                      <span>→</span>
                      <code>InkquationStorage.before-reset</code>
                    </div>
                  )}
                </li>
              ))}
            </ol>
            <p>{copy.resetUndo}</p>
          </div>
        </details>
      </main>
    </>
  );
}
