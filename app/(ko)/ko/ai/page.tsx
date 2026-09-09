import AIGuide, { aiGuideMetadata } from '../../../ai-guide';

export const metadata = aiGuideMetadata('ko');

export default function KoreanAIGuide() {
  return <AIGuide locale="ko" />;
}
