'use client';

import type { SiteCopy } from './copy';
import TextLines from './text-lines';
import { Eraser, Highlighter, Lasso, PenLine } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const tools = [
  {
    id: 'pen',
    icon: PenLine,
    standard: ['⌘', 'B'],
    direct: ['B'],
    spoken: 'Command + B',
  },
  {
    id: 'eraser',
    icon: Eraser,
    standard: ['⌘', 'E'],
    direct: ['E'],
    spoken: 'Command + E',
  },
  {
    id: 'highlighter',
    icon: Highlighter,
    standard: ['⇧', '⌘', 'H'],
    direct: ['H'],
    spoken: 'Shift + Command + H',
  },
  {
    id: 'lasso',
    icon: Lasso,
    standard: ['⌘', 'L'],
    direct: ['A'],
    spoken: 'Command + L',
  },
] as const;
const presets = ['standard', 'direct'] as const;

function Keys({ keys, label }: { keys: readonly string[]; label: string }) {
  return (
    <kbd className="shortcut-keys" aria-label={label}>
      {keys.map((key) => (
        <span key={key} aria-hidden="true">
          {key}
        </span>
      ))}
    </kbd>
  );
}

export default function ShortcutGuide({
  copy,
}: {
  copy: SiteCopy['shortcuts'];
}) {
  return (
    <section
      className="shortcuts-section"
      id="shortcuts"
      aria-labelledby="shortcuts-title"
    >
      <div className="container">
        <div className="shortcut-main">
          <div className="shortcut-copy">
            <p className="eyebrow section-eyebrow">01 / KEYBOARD SHORTCUTS</p>
            <h2 id="shortcuts-title">
              <TextLines lines={copy.title} />
            </h2>
            <p className="shortcut-description">{copy.description}</p>
            <div className="shortcut-customization">
              <span className="shortcut-small-label">MAKE IT YOURS</span>
              <h3>{copy.customizeTitle}</h3>
              <p>{copy.customizeDescription}</p>
            </div>
          </div>
          <Tabs defaultValue="standard" className="shortcut-reference">
            <div className="shortcut-reference-heading">
              <span>{copy.referenceTitle}</span>
              <span className="shortcut-reference-label">KEY GUIDE</span>
            </div>
            <TabsList
              className="shortcut-presets"
              aria-label={copy.presetsLabel}
            >
              {presets.map((preset) => (
                <TabsTrigger
                  key={preset}
                  value={preset}
                  className="shortcut-preset"
                >
                  {copy.presets[preset].label}
                </TabsTrigger>
              ))}
            </TabsList>
            {presets.map((preset) => (
              <TabsContent
                key={preset}
                value={preset}
                className="shortcut-panel"
              >
                <p className="shortcut-preset-description">
                  {copy.presets[preset].description}
                </p>
                <dl className="shortcut-list">
                  {tools.map((tool) => (
                    <div className="shortcut-row" key={tool.id}>
                      <dt>
                        <tool.icon
                          size={19}
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                        {copy.tools[tool.id]}
                      </dt>
                      <dd>
                        <Keys
                          keys={tool[preset]}
                          label={
                            preset === 'standard' ? tool.spoken : tool.direct[0]
                          }
                        />
                      </dd>
                    </div>
                  ))}
                </dl>
              </TabsContent>
            ))}
            <p className="shortcut-reference-note">{copy.note}</p>
          </Tabs>
        </div>
        <div className="shortcut-more" aria-label={copy.commonLabel}>
          <article>
            <div className="shortcut-more-keys">
              <Keys keys={['←']} label={copy.keys.left} />
              <span> / </span>
              <Keys keys={['→']} label={copy.keys.right} />
            </div>
            <h3>{copy.colorTitle}</h3>
            <p>{copy.colorDescription}</p>
          </article>
          <article>
            <div className="shortcut-more-keys">
              <Keys keys={['−']} label={copy.keys.minus} />
              <span> / </span>
              <Keys keys={['+']} label={copy.keys.plus} />
            </div>
            <h3>{copy.widthTitle}</h3>
            <p>{copy.widthDescription}</p>
          </article>
          <article>
            <div className="shortcut-more-keys">
              <Keys keys={['Space']} label={copy.keys.space} />
            </div>
            <h3>{copy.laserTitle}</h3>
            <p>{copy.laserDescription}</p>
          </article>
        </div>
        <aside className="shortcut-hint">
          <kbd aria-label="Command">⌘</kbd>
          <div>
            <h3>{copy.hintTitle}</h3>
            <p>{copy.hintDescription}</p>
          </div>
          <span className="hold-duration">HOLD FOR 1 SEC.</span>
        </aside>
      </div>
    </section>
  );
}
