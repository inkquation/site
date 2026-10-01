/* oxlint-disable next/no-html-link-for-pages -- Full document navigation works on GitHub Pages without JavaScript. */
import {
  ArrowRight,
  ArrowUpRight,
  Monitor,
  PenLine,
  Tablet,
} from 'lucide-react';
import type { Locale } from './copy';
import { localePath } from './locale-paths';
import guides from './sidecar-guide.json';
import TextLines from './text-lines';

export default function SidecarOverview({ locale }: { locale: Locale }) {
  const copy = guides[locale];
  return (
    <section
      className="sidecar-feature-section"
      id="sidecar"
      aria-labelledby="sidecar-title"
    >
      <div className="container sidecar-feature-inner">
        <div className="sidecar-feature-copy">
          <p className="eyebrow section-eyebrow">05 / MAC + IPAD</p>
          <h2 id="sidecar-title">
            <TextLines lines={copy.landing.title} />
          </h2>
          <p>{copy.description}</p>
          <a
            className="privacy-text-link sidecar-guide-link"
            href={localePath(locale, 'sidecar/')}
          >
            {copy.landing.guideLink}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="sidecar-start">
          <div className="sidecar-devices" aria-hidden="true">
            <div className="sidecar-device">
              <Monitor size={44} strokeWidth={1.25} />
              <span>Mac</span>
              <small>Inkquation</small>
            </div>
            <div className="sidecar-connection">
              <span>Sidecar</span>
              <ArrowRight size={24} strokeWidth={1.25} />
            </div>
            <div className="sidecar-device">
              <div className="sidecar-tablet">
                <Tablet size={44} strokeWidth={1.25} />
                <PenLine size={20} strokeWidth={1.25} />
              </div>
              <span>iPad</span>
              <small>Apple Pencil</small>
            </div>
          </div>
          <ol className="workflow-steps sidecar-start-steps">
            {copy.landing.steps.map((step, index) => (
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
      </div>
    </section>
  );
}
