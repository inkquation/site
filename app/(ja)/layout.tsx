import SiteLayout, { localeMetadata } from '../site-layout';

export const metadata = localeMetadata('ja');

export default function JapaneseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteLayout locale="ja">{children}</SiteLayout>;
}
