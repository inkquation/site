import SiteLayout, { localeMetadata } from '../site-layout';

export const metadata = localeMetadata('en');

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteLayout locale="en">{children}</SiteLayout>;
}
