import PrivacyPage, { privacyMetadata } from '../../privacy-page';

export const metadata = privacyMetadata('ja');
export default function JapanesePrivacyPage() {
  return <PrivacyPage locale="ja" />;
}
