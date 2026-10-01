import SidecarGuide, { sidecarGuideMetadata } from '../../sidecar-guide';

export const metadata = sidecarGuideMetadata('ja');

export default function SidecarSetupPage() {
  return <SidecarGuide locale="ja" />;
}
