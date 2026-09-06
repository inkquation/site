'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactEmail } from '@/lib/contact-email.mjs';

type ContactButtonProps = {
  label: string;
  subject?: string;
} & (
  | { variant: 'primary'; hint: string; noScriptMessage: string }
  | { variant: 'footer' }
);

export default function ContactButton(props: ContactButtonProps) {
  const [address, setAddress] = useState('');
  const primary = props.variant === 'primary';

  function openEmail() {
    const contact = contactEmail(props.subject);
    setAddress(contact.address);
    window.location.assign(contact.href);
  }

  return (
    <>
      <Button
        type="button"
        variant={primary ? 'default' : 'link'}
        className={
          primary
            ? 'email-contact button button-light'
            : 'email-contact footer-contact'
        }
        onClick={openEmail}
      >
        {props.label}
        <ArrowUpRight size={primary ? 18 : 12} aria-hidden="true" />
      </Button>
      {props.variant === 'primary' && (
        <>
          <span className="contact-address" aria-live="polite">
            {address || props.hint}
          </span>
          <noscript>
            <p className="contact-noscript">{props.noScriptMessage}</p>
          </noscript>
        </>
      )}
    </>
  );
}
