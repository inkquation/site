import AIGuide, { aiGuideMetadata } from '../../../ai-guide';

export const metadata = aiGuideMetadata('zh-Hant');

export default function TraditionalChineseAIGuide() {
  return <AIGuide locale="zh-Hant" />;
}
