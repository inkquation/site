import PrivacyPage, { privacyMetadata } from '../../../privacy-page';

export const metadata = privacyMetadata('en');
export default function EnglishPrivacyPage() {
  return <PrivacyPage locale="en" />;
}
