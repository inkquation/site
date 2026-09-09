import AIGuide, { aiGuideMetadata } from '../../ai-guide';

export const metadata = aiGuideMetadata('ja');

export default function JapaneseAIGuide() {
  return <AIGuide locale="ja" />;
}
