import AIGuide, { aiGuideMetadata } from '../../../ai-guide';

export const metadata = aiGuideMetadata('zh-Hans');

export default function SimplifiedChineseAIGuide() {
  return <AIGuide locale="zh-Hans" />;
}
