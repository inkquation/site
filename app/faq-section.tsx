import { ChevronDown } from 'lucide-react';
import type { Locale } from './copy';
import { siteCopy } from './copy';
import ContactButton from './contact-button';
import questions from './faq.json';

export default function FAQSection({ locale }: { locale: Locale }) {
  const copy = questions[locale];
  const contact = siteCopy[locale].contact;
  return (
    <section
      className="faq-section container"
      id="faq"
      aria-labelledby="faq-title"
    >
      <h2 id="faq-title">{copy.title}</h2>
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
          <p>{copy.support}</p>
          <div className="faq-contact">
            <ContactButton
              variant="primary"
              label={copy.contact}
              subject={copy.subject}
              hint={contact.hint}
              noScriptMessage={contact.noScriptMessage}
            />
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
        </div>
      </details>
    </section>
  );
}
