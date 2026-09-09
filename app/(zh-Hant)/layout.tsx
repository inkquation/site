import SiteLayout, { localeMetadata } from '../site-layout';

export const metadata = localeMetadata('zh-Hant');

export default function LocalizedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteLayout locale="zh-Hant">{children}</SiteLayout>;
}
