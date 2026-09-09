import AIGuide, { aiGuideMetadata } from '../../../ai-guide';

export const metadata = aiGuideMetadata('en');

export default function EnglishAIGuide() {
  return <AIGuide locale="en" />;
}
