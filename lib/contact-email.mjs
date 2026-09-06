// This is address obfuscation, not encryption. Decode only after activation.
const encodedAddress = 'Y29udGFjdEBpbmtxdWF0aW9uLmFwcA==';

export function contactEmail(subject = '') {
  const address = atob(encodedAddress);
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return { address, href: `mailto:${address}${query}` };
}
