import SidecarGuide, { sidecarGuideMetadata } from '../../../sidecar-guide';

export const metadata = sidecarGuideMetadata('en');

export default function SidecarSetupPage() {
  return <SidecarGuide locale="en" />;
}
