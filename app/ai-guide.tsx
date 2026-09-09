/* oxlint-disable jsx-a11y/no-noninteractive-tabindex -- Overflowing code and tables must be focusable for keyboard scrolling. */
/* oxlint-disable next/no-html-link-for-pages -- Full document navigation works on GitHub Pages without JavaScript. */
import type { Metadata } from 'next';
import { siteOrigin, sitePath } from '../site.config';
import {
  aiGuideLocales,
  aiGuidePath,
  type AIGuideLocale,
} from './ai-guide-paths';
import { localePath } from './locale-paths';
import { siteCopy } from './copy';
import LanguageSwitch from './language-switch';
import guides from './ai-guide.json';
import './ai-guide.css';

export function aiGuideMetadata(locale: AIGuideLocale): Metadata {
  return {
    title: `${guides[locale].title} | Inkquation`,
    description: guides[locale].description,
    metadataBase: siteOrigin ? new URL(siteOrigin) : undefined,
    alternates: {
      canonical: aiGuidePath(locale),
      languages: Object.fromEntries([
        ...aiGuideLocales.map((language) => [language, aiGuidePath(language)]),
        ['x-default', aiGuidePath('ja')],
      ]),
      types: { 'text/markdown': `${aiGuidePath(locale)}index.md` },
    },
  };
}

// The source uses only inline code, not arbitrary HTML or Markdown markup.
function InlineText({ text }: { text: string }) {
  return text
    .split(/(`[^`]+`)/g)
    .map((part, index) =>
      part.startsWith('`') ? (
        <code key={index}>{part.slice(1, -1)}</code>
      ) : (
        part
      ),
    );
}

export default function AIGuide({ locale }: { locale: AIGuideLocale }) {
  const copy = guides[locale];
  return (
    <>
      <a className="skip-link" href="#main">
        {siteCopy[locale].nav.skip}
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a
            className="brand"
            href={localePath(locale)}
            aria-label={copy.homeLabel}
          >
            inkquation<span className="brand-period">.</span>
          </a>
          <LanguageSwitch
            locale={locale}
            label={siteCopy[locale].nav.language}
            page="ai/"
          />
        </div>
      </header>
      <main id="main" className="ai-guide container">
        <div className="ai-guide-heading">
          <p className="eyebrow">INKQUATION / MCP</p>
          <h1>{copy.title}</h1>
          <p>{copy.description}</p>
          <div className="ai-guide-meta">
            <span>
              {copy.updatedLabel}:{' '}
              <time dateTime={guides.updated}>{guides.updated}</time>
            </span>
            <a href={`${aiGuidePath(locale)}index.md`} type="text/markdown">
              {copy.markdownLabel}
            </a>
            <a href={sitePath('/llms.txt')} type="text/plain" lang="en">
              llms.txt (English)
            </a>
          </div>
        </div>
        <div className="ai-guide-layout">
          <nav className="ai-guide-toc" aria-label={copy.contentsLabel}>
            <p>{copy.contentsLabel}</p>
            <ol>
              {copy.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ol>
          </nav>
          <article className="ai-guide-body" aria-label={copy.title}>
            {copy.sections.map((section) => (
              <section key={section.id} aria-labelledby={section.id}>
                <h2 id={section.id}>{section.title}</h2>
                {section.blocks.map((block, index) => {
                  if (
                    block.type === 'paragraph' &&
                    'text' in block &&
                    block.text !== undefined
                  )
                    return (
                      <p key={index}>
                        <InlineText text={block.text} />
                      </p>
                    );
                  if (
                    block.type === 'code' &&
                    'text' in block &&
                    block.text !== undefined
                  )
                    return (
                      <pre key={index} tabIndex={0}>
                        <code>{block.text}</code>
                      </pre>
                    );
                  if (
                    block.type === 'list' &&
                    'ordered' in block &&
                    block.items !== undefined
                  ) {
                    const List = block.ordered ? 'ol' : 'ul';
                    return (
                      <List key={index}>
                        {block.items.map((item) => (
                          <li key={item}>
                            <InlineText text={item} />
                          </li>
                        ))}
                      </List>
                    );
                  }
                  if (
                    block.type === 'table' &&
                    'headers' in block &&
                    block.headers !== undefined &&
                    block.rows !== undefined
                  )
                    return (
                      <section
                        key={index}
                        className="ai-guide-table"
                        aria-labelledby={section.id}
                        tabIndex={0}
                      >
                        <table>
                          <thead>
                            <tr>
                              {block.headers.map((heading) => (
                                <th key={heading} scope="col">
                                  {heading}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {block.rows.map((row, rowIndex) => (
                              <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                  <td key={cellIndex}>
                                    <InlineText text={cell} />
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </section>
                    );
                  if (
                    block.type === 'links' &&
                    'items' in block &&
                    !('ordered' in block) &&
                    block.items !== undefined
                  )
                    return (
                      <ul className="ai-guide-links" key={index}>
                        {block.items.map((link) => (
                          <li key={link.href}>
                            <a
                              href={
                                link.href.startsWith('/')
                                  ? sitePath(link.href as `/${string}`)
                                  : link.href
                              }
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    );
                  return null;
                })}
              </section>
            ))}
            <a href={localePath(locale)}>{copy.homeLabel}</a>
          </article>
        </div>
      </main>
    </>
  );
}
