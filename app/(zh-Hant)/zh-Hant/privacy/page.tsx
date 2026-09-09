import PrivacyPage, { privacyMetadata } from '../../../privacy-page';

export const metadata = privacyMetadata('zh-Hant');
export default function LocalizedPrivacyPage() {
  return <PrivacyPage locale="zh-Hant" />;
}
