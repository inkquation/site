/* oxlint-disable next/no-img-element -- These local assets are already sized; preserve the original app screenshot without image processing. */
import PaperDemo from './paper-demo';
import { siteCopy, type Locale, type SiteCopy } from './copy';
import TextLines from './text-lines';
import ShortcutGuide from './shortcut-guide';
import {
  ArrowDown,
  ArrowUpRight,
  Bookmark,
  Circle,
  Monitor,
  PenLine,
  Square,
} from 'lucide-react';

function NotebookPreview({ copy }: { copy: SiteCopy['screenshot'] }) {
  return (
    <figure className="preview-figure actual-preview">
      <a
        href="/assets/inkquation-editor.jpg"
        target="_blank"
        rel="noopener noreferrer"
        className="screenshot-link"
        aria-label={copy.open}
      >
        <img
          className="app-screenshot"
          src="/assets/inkquation-editor.jpg"
          width="768"
          height="837"
          fetchPriority="high"
          alt={copy.alt}
        />
      </a>
      <figcaption>
        <span className="caption-dot" />
        {copy.caption}
        <a
          href="/assets/inkquation-editor.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="screenshot-expand"
        >
          {copy.expand} <ArrowUpRight size={12} />
        </a>
      </figcaption>
    </figure>
  );
}

export default function LandingPage({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  return (
    <>
      <a href="#main" className="skip-link">
        {copy.nav.skip}
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label={copy.nav.home}>
            <img
              src="/assets/inkquation-icon.png"
              alt=""
              width="38"
              height="38"
            />
            <span>
              inkquation<span className="brand-period">.</span>
            </span>
          </a>
          <div className="header-controls">
            <nav className="main-navigation" aria-label={copy.nav.main}>
              <a href="#shortcuts">{copy.nav.shortcuts}</a>
              <a href="#features">{copy.nav.features}</a>
              <a className="nav-contact" href="#get-app">
                {copy.nav.distribution} <ArrowUpRight size={15} />
              </a>
            </nav>
          </div>
        </div>
      </header>
      <main id="main">
        <section className="hero" id="top">
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">
                <span /> A PEN. A KEYBOARD. YOUR IDEAS.
              </p>
              <h1>
                {copy.hero.lead}
                <br />
                {copy.hero.prefix}
                <span className="ink-underline">{copy.hero.accent}</span>
              </h1>
              <p className="hero-description">
                <TextLines lines={copy.hero.description} />
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#shortcuts">
                  {copy.hero.primary} <ArrowDown size={17} />
                </a>
                <a className="text-link" href="#workflow">
                  {copy.hero.secondary} <ArrowUpRight size={16} />
                </a>
              </div>
              <p className="platform-line">
                <Monitor size={15} /> {copy.hero.platform}
              </p>
            </div>
            <NotebookPreview copy={copy.screenshot} />
          </div>
          <div className="hero-bottom container">
            <span>HANDWRITING MEETS KEYBOARD SHORTCUTS.</span>
            <span className="scroll-cue">
              SCROLL TO EXPLORE <ArrowDown size={12} />
            </span>
          </div>
        </section>
        <ShortcutGuide copy={copy.shortcuts} />
        <section
          className="features-section container"
          id="features"
          aria-labelledby="features-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow section-eyebrow">02 / THE TOOLS</p>
              <h2 id="features-title">
                <TextLines lines={copy.features.title} />
              </h2>
            </div>
            <p className="section-description">
              <TextLines lines={copy.features.description} />
            </p>
          </div>
          <div className="feature-grid">
            <article className="feature-item">
              <div className="feature-icon">
                <PenLine size={24} strokeWidth={1.5} />
                <span>WRITE</span>
              </div>
              <h3>{copy.features.write.title}</h3>
              <p>{copy.features.write.description}</p>
              <div className="feature-detail">
                {copy.features.write.details.map((detail) => (
                  <span key={detail}>{detail}</span>
                ))}
              </div>
            </article>
            <article className="feature-item">
              <div className="feature-icon">
                <div className="shape-icon">
                  <Square size={20} strokeWidth={1.5} />
                  <Circle size={20} strokeWidth={1.5} />
                </div>
                <span>SHAPE</span>
              </div>
              <h3>{copy.features.shape.title}</h3>
              <p>{copy.features.shape.description}</p>
              <div
                className="line-samples"
                aria-label={copy.features.shape.samples}
              >
                <span />
                <span />
                <svg viewBox="0 0 62 10" aria-hidden="true">
                  <path
                    d="M0 5q5-8 10 0t10 0t10 0t10 0t10 0t10 0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                </svg>
                <span />
              </div>
            </article>
            <article className="feature-item">
              <div className="feature-icon">
                <Bookmark size={24} strokeWidth={1.5} />
                <span>ORGANIZE</span>
              </div>
              <h3>{copy.features.organize.title}</h3>
              <p>{copy.features.organize.description}</p>
              <div className="feature-detail">
                {copy.features.organize.details.map((detail) => (
                  <span key={detail}>{detail}</span>
                ))}
              </div>
            </article>
          </div>
        </section>
        <section
          className="workflow-section"
          id="workflow"
          aria-labelledby="workflow-title"
        >
          <div className="container workflow-inner">
            <div className="workflow-copy">
              <p className="eyebrow section-eyebrow">
                03 / YOUR WAY OF THINKING
              </p>
              <h2 id="workflow-title">
                <TextLines lines={copy.workflow.title} />
              </h2>
              <p className="workflow-description">
                <TextLines lines={copy.workflow.description} />
              </p>
              <ol className="workflow-steps">
                {copy.workflow.steps.map((step, index) => (
                  <li key={step.title}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <PaperDemo copy={copy.paper} />
          </div>
        </section>
        <section className="mac-section container" aria-labelledby="mac-title">
          <div className="mac-wordmark">
            <Monitor size={37} strokeWidth={1} />
            <span>
              Made for
              <br />
              <em>your Mac.</em>
            </span>
          </div>
          <div className="mac-description">
            <p className="eyebrow section-eyebrow">AT HOME ON MACOS</p>
            <h2 id="mac-title">{copy.mac.title}</h2>
            <p>
              <TextLines lines={copy.mac.description} />
            </p>
            <div className="mac-facts">
              {copy.mac.facts.map((fact) => (
                <span key={fact}>
                  <i />
                  {fact}
                </span>
              ))}
            </div>
          </div>
        </section>
        <section
          className="get-app-section"
          id="get-app"
          aria-labelledby="get-app-title"
        >
          <div className="container get-app-inner">
            <div>
              <p className="eyebrow">INK × EQUATION × IMAGINATION</p>
              <h2 id="get-app-title">
                <TextLines lines={copy.contact.title} />
              </h2>
            </div>
            <div className="get-app-action">
              <p>
                <TextLines lines={copy.contact.description} />
              </p>
              <a
                className="button button-light"
                href={`mailto:contact@inkquation.app?subject=${encodeURIComponent(copy.contact.subject)}`}
              >
                {copy.contact.action} <ArrowUpRight size={18} />
              </a>
              <span className="contact-address">contact@inkquation.app</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer container">
        <a className="brand footer-brand" href="#top">
          inkquation<span className="brand-period">.</span>
        </a>
        <p>{copy.footer.tagline}</p>
        <div>
          <a href="mailto:contact@inkquation.app">
            {copy.footer.contact} <ArrowUpRight size={12} />
          </a>
          <span>© 2026 Inkquation</span>
        </div>
      </footer>
    </>
  );
}
