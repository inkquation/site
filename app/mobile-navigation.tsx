'use client';

/* oxlint-disable next/no-html-link-for-pages -- Full document navigation works on GitHub Pages without JavaScript. */
import { useRef } from 'react';
import { Menu } from 'lucide-react';

export default function MobileNavigation({
  label,
  links,
}: {
  label: string;
  links: { href: string; label: string }[];
}) {
  const menu = useRef<HTMLDetailsElement>(null);
  function closeMenu() {
    if (menu.current) menu.current.open = false;
  }
  return (
    <details className="mobile-navigation" name="header-menu" ref={menu}>
      <summary aria-label={label}>
        <Menu size={20} aria-hidden="true" />
      </summary>
      <nav aria-label={label}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </nav>
    </details>
  );
}
