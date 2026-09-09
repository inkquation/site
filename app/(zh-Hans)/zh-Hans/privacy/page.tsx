import PrivacyPage, { privacyMetadata } from '../../../privacy-page';

export const metadata = privacyMetadata('zh-Hans');
export default function LocalizedPrivacyPage() {
  return <PrivacyPage locale="zh-Hans" />;
}
