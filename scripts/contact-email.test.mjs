import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import test from 'node:test';
import { contactEmail } from '../lib/contact-email.mjs';

test('the contact action targets the configured mailbox without an empty subject', () => {
  const contact = contactEmail();
  const url = new URL(contact.href);
  assert.equal(url.protocol, 'mailto:');
  assert.equal(url.pathname, contact.address);
  assert.equal(url.search, '');
  assert.equal(
    createHash('sha256').update(contact.address).digest('hex'),
    'b803e02edd1738031ee79f9ae0ba4d30ce0683c4bc2073b8acdfca9c6a18ba4e',
  );
});

test('Japanese text and punctuation survive in the subject without adding parameters', () => {
  for (const subject of [
    'Inkquation の配布について',
    'Getting Inkquation & setup? #1',
  ]) {
    const url = new URL(contactEmail(subject).href);
    assert.equal(url.searchParams.get('subject'), subject);
    assert.deepEqual([...url.searchParams.keys()], ['subject']);
    assert.equal(url.hash, '');
  }
});
