import SiteLayout, { localeMetadata } from '../site-layout';

export const metadata = localeMetadata('zh-Hans');

export default function LocalizedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteLayout locale="zh-Hans">{children}</SiteLayout>;
}
