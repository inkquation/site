import SidecarGuide, { sidecarGuideMetadata } from '../../../sidecar-guide';

export const metadata = sidecarGuideMetadata('zh-Hans');

export default function SidecarSetupPage() {
  return <SidecarGuide locale="zh-Hans" />;
}
