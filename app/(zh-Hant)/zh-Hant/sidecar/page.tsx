import SidecarGuide, { sidecarGuideMetadata } from '../../../sidecar-guide';

export const metadata = sidecarGuideMetadata('zh-Hant');

export default function SidecarSetupPage() {
  return <SidecarGuide locale="zh-Hant" />;
}
