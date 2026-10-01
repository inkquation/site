import { ChevronDown } from 'lucide-react';
import type { Locale } from './copy';
import guides from './sidecar-guide.json';
import TextLines from './text-lines';

export default function SidecarGuide({ locale }: { locale: Locale }) {
  const copy = guides[locale];
  return (
    <section
      className="sidecar-section"
      id="sidecar"
      aria-labelledby="sidecar-title"
    >
      <div className="container">
        <div className="sidecar-intro">
          <div>
            <p className="eyebrow section-eyebrow">MAC + IPAD / SIDECAR</p>
            <h2 id="sidecar-title">
              <TextLines lines={copy.title} />
            </h2>
            <p className="sidecar-description">{copy.description}</p>
          </div>
          <aside
            className="sidecar-requirements"
            aria-labelledby="sidecar-requirements-title"
          >
            <h3 id="sidecar-requirements-title">{copy.requirementsTitle}</h3>
            <ul>
              {copy.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{copy.requirementsNote}</p>
            <div className="sidecar-source-links">
              <a href={copy.appleURL}>{copy.appleLink}</a>
              <a href={copy.pencilURL}>{copy.pencilLink}</a>
            </div>
          </aside>
        </div>
        <ol className="sidecar-steps">
          {copy.steps.map((step, index) => (
            <li key={step.title}>
              <span className="sidecar-step-number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
        <a className="text-link sidecar-tutorial-link" href="#tutorial">
          {copy.tutorialLink}
        </a>
        <div className="sidecar-settings">
          <h3>{copy.settingsTitle}</h3>
          <p className="sidecar-settings-intro">{copy.settingsIntro}</p>
          <div className="sidecar-settings-grid">
            {copy.settings.map((setting) => (
              <div key={setting.title}>
                <h4>{setting.title}</h4>
                <p>{setting.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="sidecar-help">
          <h3>{copy.troubleshootingTitle}</h3>
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
          <a className="text-link" href="#get-app">
            {copy.supportLink}
          </a>
        </div>
      </div>
    </section>
  );
}
