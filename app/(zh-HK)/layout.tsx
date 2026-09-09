import SiteLayout, { localeMetadata } from '../site-layout';

export const metadata = localeMetadata('zh-HK');

export default function LocalizedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteLayout locale="zh-HK">{children}</SiteLayout>;
}
