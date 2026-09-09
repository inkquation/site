import PrivacyPage, { privacyMetadata } from '../../../privacy-page';

export const metadata = privacyMetadata('ko');
export default function LocalizedPrivacyPage() {
  return <PrivacyPage locale="ko" />;
}
