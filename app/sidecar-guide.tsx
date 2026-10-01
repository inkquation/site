/* oxlint-disable next/no-html-link-for-pages -- Full document navigation works on GitHub Pages without JavaScript. */
import type { Metadata } from 'next';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { siteOrigin } from '../site.config';
import { siteCopy, type Locale } from './copy';
import { languageAlternates, localePath } from './locale-paths';
import BrandWordmark from './brand-wordmark';
import LanguageSwitch from './language-switch';
import guides from './sidecar-guide.json';
import './sidecar-guide.css';

export function sidecarGuideMetadata(locale: Locale): Metadata {
  const copy = guides[locale];
  return {
    title: `${copy.pageTitle} | Inkquation`,
    description: copy.description,
    metadataBase: siteOrigin ? new URL(siteOrigin) : undefined,
    alternates: {
      canonical: localePath(locale, 'sidecar/'),
      languages: languageAlternates('sidecar/'),
    },
  };
}

export default function SidecarGuide({ locale }: { locale: Locale }) {
  const copy = guides[locale];
  const nav = siteCopy[locale].nav;
  const sections = [
    ['requirements', copy.requirementsTitle],
    ['setup', copy.stepsTitle],
    ['apple-pencil', copy.settingsTitle],
    ['troubleshooting', copy.troubleshootingTitle],
  ];
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
          <LanguageSwitch
            locale={locale}
            label={nav.language}
            page="sidecar/"
          />
        </div>
      </header>
      <main id="main" className="sidecar-guide container">
        <a className="sidecar-home-link" href={localePath(locale)}>
          <ArrowLeft size={16} aria-hidden="true" /> {nav.home}
        </a>
        <div className="sidecar-guide-heading">
          <p className="eyebrow">MAC + IPAD / SIDECAR</p>
          <h1>{copy.pageTitle}</h1>
          <p>{copy.description}</p>
        </div>
        <nav className="sidecar-toc" aria-label={copy.contentsLabel}>
          <p>{copy.contentsLabel}</p>
          <ol>
            {sections.map(([id, title]) => (
              <li key={id}>
                <a href={`#${id}`}>{title}</a>
              </li>
            ))}
          </ol>
        </nav>
        <article className="sidecar-guide-body" aria-label={copy.pageTitle}>
          <section aria-labelledby="requirements">
            <h2 id="requirements">{copy.requirementsTitle}</h2>
            <ul className="sidecar-requirements">
              {copy.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{copy.requirementsNote}</p>
            <div className="sidecar-source-links">
              <a href={copy.appleURL}>{copy.appleLink}</a>
              <a href={copy.pencilURL}>{copy.pencilLink}</a>
            </div>
          </section>
          <section aria-labelledby="setup">
            <h2 id="setup">{copy.stepsTitle}</h2>
            <ol className="sidecar-steps">
              {copy.steps.map((step) => (
                <li key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
            <a className="text-link" href={`${localePath(locale)}#tutorial`}>
              {copy.tutorialLink}
            </a>
          </section>
          <section aria-labelledby="apple-pencil">
            <h2 id="apple-pencil">{copy.settingsTitle}</h2>
            <p>{copy.settingsIntro}</p>
            <div className="sidecar-settings">
              {copy.settings.map((setting) => (
                <div key={setting.title}>
                  <h3>{setting.title}</h3>
                  <p>{setting.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section aria-labelledby="troubleshooting">
            <h2 id="troubleshooting">{copy.troubleshootingTitle}</h2>
            <div className="sidecar-questions">
              {copy.questions.map((question) => (
                <details key={question.title}>
                  <summary>
                    {question.title}
                    <ChevronDown size={18} aria-hidden="true" />
                  </summary>
                  <p>{question.description}</p>
                </details>
              ))}
            </div>
            <p className="sidecar-support-note">{copy.supportNote}</p>
            <a className="text-link" href={`${localePath(locale)}#get-app`}>
              {copy.supportLink}
            </a>
          </section>
        </article>
      </main>
    </>
  );
}
