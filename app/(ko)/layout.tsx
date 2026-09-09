import SiteLayout, { localeMetadata } from '../site-layout';

export const metadata = localeMetadata('ko');

export default function LocalizedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteLayout locale="ko">{children}</SiteLayout>;
}
