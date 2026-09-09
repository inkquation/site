'use client';

import { useState } from 'react';
import type { SiteCopy } from './copy';
import TextLines from './text-lines';
import {
  Eraser,
  Highlighter,
  Lasso,
  PenLine,
  Shapes,
  MousePointer2,
  Pointer,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const tools = [
  {
    id: 'pen',
    icon: PenLine,
    standard: ['⌘', 'B'],
    direct: ['B'],
    leftHanded: ['Q'],
    spoken: 'Command + B',
  },
  {
    id: 'eraser',
    icon: Eraser,
    standard: ['⌘', 'E'],
    direct: ['E'],
    leftHanded: ['W'],
    spoken: 'Command + E',
  },
  {
    id: 'highlighter',
    icon: Highlighter,
    standard: ['⇧', '⌘', 'H'],
    direct: ['H'],
    leftHanded: ['E'],
    spoken: 'Shift + Command + H',
  },
  {
    id: 'lasso',
    icon: Lasso,
    standard: ['⌘', 'L'],
    direct: ['A'],
    leftHanded: ['R'],
    spoken: 'Command + L',
  },
  {
    id: 'shape',
    icon: Shapes,
    standard: ['⇧', '⌘', 'U'],
    direct: ['U'],
    leftHanded: ['A'],
    spoken: 'Shift + Command + U',
  },
  {
    id: 'selection',
    icon: MousePointer2,
    standard: ['⇧', '⌘', 'M'],
    direct: ['V'],
    leftHanded: ['S'],
    spoken: 'Shift + Command + M',
  },
  {
    id: 'laser',
    icon: Pointer,
    standard: ['⇧', '⌘', 'L'],
    direct: ['P'],
    leftHanded: ['D'],
    spoken: 'Shift + Command + L',
  },
] as const;
const presets = ['leftHanded', 'standard', 'direct'] as const;
type Preset = (typeof presets)[number];

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
  const [selectedPreset, setSelectedPreset] = useState<Preset>('leftHanded');
  const isLeftHanded = selectedPreset === 'leftHanded';
  return (
    <section
      className="shortcuts-section"
      id="shortcuts"
      aria-labelledby="shortcuts-title"
    >
      <Tabs
        className="container shortcut-tabs"
        value={selectedPreset}
        onValueChange={(value) => {
          if (presets.includes(value as Preset))
            setSelectedPreset(value as Preset);
        }}
      >
        <div className="shortcut-main">
          <div className="shortcut-copy">
            <p className="eyebrow section-eyebrow">01 / KEYBOARD SHORTCUTS</p>
            <h2 id="shortcuts-title">
              <TextLines lines={copy.title} />
            </h2>
            <p className="shortcut-description">{copy.description}</p>
            <div className="shortcut-setup">
              <h3>{copy.setupTitle}</h3>
              <p>{copy.setupDescription}</p>
              <p>{copy.layoutNote}</p>
            </div>
            <div className="shortcut-customization">
              <span className="shortcut-small-label">MAKE IT YOURS</span>
              <h3>{copy.customizeTitle}</h3>
              <p>{copy.customizeDescription}</p>
            </div>
            <div className="shortcut-navigation">
              <h3>{copy.navigationTitle}</h3>
              <dl>
                <div>
                  <dt>{copy.pageLabel}</dt>
                  <dd>
                    <Keys keys={['⌘', '1']} label="Command + 1" />
                    <span> / </span>
                    <Keys keys={['⌘', '2']} label="Command + 2" />
                  </dd>
                </div>
                <div>
                  <dt>{copy.zoomLabel}</dt>
                  <dd>
                    <Keys keys={['⌘', '3']} label="Command + 3" />
                    <span> / </span>
                    <Keys keys={['⌘', '4']} label="Command + 4" />
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="shortcut-reference">
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
                            preset === 'standard'
                              ? tool.spoken
                              : tool[preset][0]
                          }
                        />
                      </dd>
                    </div>
                  ))}
                </dl>
              </TabsContent>
            ))}
            <p className="shortcut-reference-note">{copy.note}</p>
          </div>
        </div>
        <p className="shortcut-active-preset" aria-live="polite">
          {copy.optionsLabel} · {copy.presets[selectedPreset].label}
        </p>
        <div
          className="shortcut-more"
          aria-label={`${copy.optionsLabel}: ${copy.presets[selectedPreset].label}`}
        >
          <article>
            <div className="shortcut-more-keys">
              <Keys
                keys={[isLeftHanded ? 'C' : '←']}
                label={isLeftHanded ? 'C' : copy.keys.left}
              />
              <span> / </span>
              <Keys
                keys={[isLeftHanded ? 'V' : '→']}
                label={isLeftHanded ? 'V' : copy.keys.right}
              />
            </div>
            <h3>{copy.colorTitle}</h3>
            <p>{copy.colorDescription}</p>
          </article>
          <article>
            <div className="shortcut-more-keys">
              <Keys
                keys={[isLeftHanded ? 'Z' : '−']}
                label={isLeftHanded ? 'Z' : copy.keys.minus}
              />
              <span> / </span>
              <Keys
                keys={[isLeftHanded ? 'X' : '+']}
                label={isLeftHanded ? 'X' : copy.keys.plus}
              />
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
      </Tabs>
    </section>
  );
}
