'use client';

/* oxlint-disable jsx-a11y/prefer-tag-over-role -- The inline SVG contains localized text and needs an accessible diagram name. */
import type { SiteCopy } from './copy';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const papers = ['grid', 'ruled', 'plain'] as const;

export default function PaperDemo({ copy }: { copy: SiteCopy['paper'] }) {
  return (
    <Tabs defaultValue="grid" className="paper-demo">
      <div className="paper-demo-controls">
        <span>{copy.title}</span>
        <TabsList className="paper-tabs" aria-label={copy.tabsLabel}>
          {papers.map((paper) => (
            <TabsTrigger key={paper} value={paper} className="paper-tab">
              {copy.styles[paper].label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {papers.map((paper) => (
        <TabsContent value={paper} key={paper} className="paper-demo-panel">
          <div className={`sample-paper sample-${paper}`}>
            <div className="sample-paper-meta">
              <span>IDEA NOTEBOOK</span>
              <span>No. 024</span>
            </div>
            <p className="sample-title handwritten">A little room to think.</p>
            <p className="sample-intro">{copy.intro}</p>
            <svg
              viewBox="0 0 420 165"
              className="idea-diagram"
              role="img"
              aria-label={copy.diagramLabel}
            >
              <g fill="none" stroke="#4463a3" strokeWidth="1.5">
                <ellipse cx="67" cy="72" rx="49" ry="32" />
                <rect x="161" y="40" width="98" height="64" rx="3" />
                <ellipse cx="353" cy="72" rx="53" ry="33" />
                <path d="M120 72h32m-7-5 7 5-7 5M268 72h24m-7-5 7 5-7 5" />
              </g>
              <g
                fill="#34548c"
                textAnchor="middle"
                fontSize="18"
                fontFamily="'Hiragino Mincho ProN',serif"
              >
                <text x="67" y="80">
                  {copy.stages[0]}
                </text>
                <text x="210" y="80">
                  {copy.stages[1]}
                </text>
                <text x="353" y="80">
                  {copy.stages[2]}
                </text>
              </g>
              <path
                d="M209 116q-55 65-126 9m0 0 3 13m-3-13 13-1"
                fill="none"
                stroke="#a1753e"
                strokeWidth="1.4"
                strokeDasharray="4 5"
              />
              <text
                x="243"
                y="140"
                fill="#a1753e"
                fontSize="18"
                fontFamily="'Bradley Hand',Georgia,serif"
              >
                and try again.
              </text>
            </svg>
            <p className="sample-note">
              <span className="note-bullet" /> {copy.note}
            </p>
            <div className="sample-lines" aria-hidden="true">
              <span />
              <span />
            </div>
            <span className="sample-page-number">24</span>
          </div>
          <p className="paper-demo-caption">
            {copy.styles[paper].description}
            <span>{copy.caption}</span>
          </p>
        </TabsContent>
      ))}
    </Tabs>
  );
}
