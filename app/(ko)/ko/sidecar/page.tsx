import SidecarGuide, { sidecarGuideMetadata } from '../../../sidecar-guide';

export const metadata = sidecarGuideMetadata('ko');

export default function SidecarSetupPage() {
  return <SidecarGuide locale="ko" />;
}
