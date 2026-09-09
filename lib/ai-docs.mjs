import guides from '../app/ai-guide.json' with { type: 'json' };
import locales from '../app/locales.json' with { type: 'json' };

export const guideLocales = Object.keys(locales);
export const guideRoute = (locale) => `${locales[locale].path}ai/`;

const linkURL = (href, origin, basePath) =>
  href.startsWith('/') ? new URL(`${basePath}${href}`, origin).href : href;

export function guideMarkdown(locale, origin, basePath) {
  const guide = guides[locale];
  const lines = [
    `# ${guide.title}`,
    '',
    `> ${guide.description}`,
    '',
    `${guide.updatedLabel}: ${guides.updated}`,
    '',
    `[HTML](${linkURL(guideRoute(locale), origin, basePath)})`,
  ];
  for (const section of guide.sections) {
    lines.push('', `## ${section.title}`);
    for (const block of section.blocks) {
      lines.push('');
      switch (block.type) {
        case 'paragraph':
          lines.push(block.text);
          break;
        case 'list':
          lines.push(
            ...block.items.map(
              (item, index) =>
                `${block.ordered ? `${index + 1}.` : '-'} ${item}`,
            ),
          );
          break;
        case 'code':
          lines.push(`\`\`\`${block.language}`, block.text, '```');
          break;
        case 'table': {
          const row = (cells) =>
            `| ${cells.map((cell) => cell.replaceAll('|', '\\|')).join(' | ')} |`;
          lines.push(
            row(block.headers),
            row(block.headers.map(() => '---')),
            ...block.rows.map(row),
          );
          break;
        }
        case 'links':
          lines.push(
            ...block.items.map(
              ({ label, href }) =>
                `- [${label}](${linkURL(href, origin, basePath)})`,
            ),
          );
          break;
        default:
          throw new Error(`Unsupported guide block: ${block.type}`);
      }
    }
  }
  lines.push(
    '',
    `[${guide.homeLabel}](${linkURL(locales[locale].path, origin, basePath)})`,
  );
  return `${lines.join('\n')}\n`;
}

export function llmsText(origin, basePath) {
  const url = (route) => linkURL(route, origin, basePath);
  const languageNames = {
    ja: 'Japanese',
    en: 'English',
    'zh-Hans': 'Simplified Chinese',
    'zh-Hant': 'Traditional Chinese (Taiwan)',
    'zh-HK': 'Traditional Chinese (Hong Kong)',
    ko: 'Korean',
  };
  const guideLinks = ['en', ...guideLocales.filter((locale) => locale !== 'en')]
    .map(
      (locale) =>
        `- [AI integration guide — ${languageNames[locale]}, Markdown](${url(`${guideRoute(locale)}index.md`)}): [HTML version](${url(guideRoute(locale))}).`,
    )
    .join('\n');
  return `# Inkquation

> Inkquation is a handwriting notebook for macOS. A local MCP connection lets an external AI app read open pages or lasso selections as PNG images, insert PNG images or native pen strokes and shapes, inspect the result, and undo eligible insertions.

This website is documentation, not a public MCP endpoint. The user must run Inkquation and a compatible local MCP client on the same Mac and enable AI Connection in Inkquation Settings. Use the machine-specific configuration copied from Settings. Inkquation does not require a model API key; model access and accounts are managed by the AI client. Cloud-backed clients may send note images to their provider.

Check the connected server's tools/list for available tools and input schemas. Read the target page before editing. Use page logical coordinates with a bottom-left origin, the read revision as expected_revision, and a fresh UUID operation_id. Retry an uncertain insertion only with the same tool, operation_id and identical arguments. Inspect the resulting page. Editable text and LaTeX insertion or compilation are not supported.

## Guides

Each guide covers setup, all seven tools, coordinates, limits, JSON examples, retries and Undo. Content checked on ${guides.updated}.

${guideLinks}

## Product and privacy

- [Inkquation — English](${url('/en/')}): Product features and app availability.
- [Inkquation — Japanese](${url('/')}): Product features and app availability in Japanese.
- [Privacy policy — English](${url('/en/privacy/')}): Local storage, external AI connections and website hosting.
- [Privacy policy — Japanese](${url('/privacy/')}): The privacy policy in Japanese.
`;
}
