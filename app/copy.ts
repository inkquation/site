import locales from './locales.json';
import { zhHans, zhHant, zhHK, ko } from './translations';

export type Locale = keyof typeof locales;

const ja = {
  meta: {
    title: 'Inkquation — ペンで書く。キーで操る。',
    description:
      'Inkquation は、手書きとキーボードショートカットを組み合わせるMac専用ノートアプリ。ツールの切り替え、色や線幅の調整をキーで操作。キーのカスタマイズと、外部AIアプリとのMCP連携にも対応しています。',
  },
  nav: {
    skip: '本文へ移動',
    home: 'Inkquation ホーム',
    main: 'メインナビゲーション',
    shortcuts: 'ショートカット',
    features: 'できること',
    distribution: '配布について',
    language: '表示言語',
    ai: 'AI連携',
  },
  hero: {
    lead: 'ペンで書く。',
    prefix: 'キーで',
    accent: '操る。',
    description: [
      '片手で書いて、もう片手でツールを切り替える。',
      '色や線幅の調整も、キーボードから。',
      'ノートからポインターを動かさずに。',
    ],
    primary: 'ショートカットを見る',
    secondary: '使い方を見る',
    platform: 'macOS のための手書きノートアプリ',
    aiLink: 'AI連携に対応しました',
  },
  screenshot: {
    open: 'Inkquation の実際の編集画面を拡大して開く',
    alt: 'Inkquation の実際の編集画面。左にページサムネイルと色・線幅のパレット、上に描画ツールバー、中央に方眼の数式ノート。',
    caption: '実際の編集画面 · デモノート',
    expand: '拡大して見る',
  },
  shortcuts: {
    title: ['ペンは右手に。', '操作は左手で。'],
    description:
      '右手で書きながら、左手でツールの切り替え、色・線幅の調整、ページ移動や拡大縮小を操作できます。',
    setupTitle: '設定で「左手操作」を適用。',
    setupDescription:
      'Inkquationの「設定」→「ショートカット」で「左手操作」を選び、確認画面で適用します。',
    layoutNote: 'US・JIS配列に共通する左側の英数字キーを使います。',
    navigationTitle: '「左手操作」なら、ページ移動も。',
    pageLabel: '前のページ／次のページ',
    zoomLabel: '縮小／拡大',
    customizeTitle: '自分の手になじむ割り当てに。',
    customizeDescription:
      'プリセットを選んで、よく使う操作だけ自分好みに。設定画面でキーの組み合わせを変更できます。',
    referenceTitle: 'ツールの切り替え',
    presetsLabel: 'ショートカットのプリセット例を切り替える',
    presets: {
      leftHanded: {
        label: '左手操作',
        description:
          '左側のキーだけで操作。Q・W・E・Rでペン、消しゴム、ハイライト、投げ縄を切り替えます。',
      },
      standard: {
        label: '標準',
        description: 'Commandキーと組み合わせて、ツールを切り替えます。',
      },
      direct: {
        label: '1キーでツール切り替え',
        description: '文字キーひとつで、ツールを切り替えます。',
      },
    },
    tools: {
      shape: '図形に切り替える',
      selection: '選択ツールに切り替える',
      laser: 'レーザーに切り替える',

      pen: 'ペンに切り替える',
      eraser: '消しゴムに切り替える',
      highlighter: 'ハイライトに切り替える',
      lasso: '投げ縄に切り替える',
    },
    note: 'アプリのプリセット例です。ノートの編集画面で、テキスト入力欄に入力していないときに使えます。',
    optionsLabel: '選択したプリセットの操作',
    keys: {
      left: '左矢印',
      right: '右矢印',
      minus: 'マイナス',
      plus: 'プラス',
      space: 'スペース',
    },
    colorTitle: '色を切り替える',
    colorDescription: 'ペン・ハイライト・図形の色を、前後に切り替えます。',
    widthTitle: '線幅を調整する',
    widthDescription:
      'ペン・ハイライト・図形の線幅や、消しゴムの大きさを調整します。',
    laserTitle: '押している間だけ、レーザーに',
    laserDescription:
      'Spaceキーを離すと元のツールへ。ノートを見せながら説明するときにも。',
    hintTitle: 'キーを確認したいときは、Commandを長押し。',
    hintDescription:
      'ノートの編集画面でCommandキーを1秒間押し続けると、ツールやオプションのショートカットが表示されます。',
  },
  features: {
    title: ['手で考えるための、', 'ちょうどいい道具。'],
    description: [
      'すぐに書きはじめて、必要なときに整える。',
      'ひらめきとノートの間を、シンプルに。',
    ],
    write: {
      title: '一筆から、考えが動き出す。',
      description:
        'ペンで書き、ハイライトで目印を。消しゴムや投げ縄選択で、考えの変化に合わせて書き直せます。',
      details: ['ペン', 'ハイライター', '投げ縄'],
    },
    shape: {
      title: '図も、線も、思いどおりに。',
      description:
        '直線・四角形・楕円をすばやく描画。実線から破線、波線、二重線まで、図に合った線を選べます。',
      samples: '実線、破線、波線、二重線のサンプル',
    },
    organize: {
      title: 'あのページに、すぐ戻れる。',
      description:
        'サムネイルでノート全体を見渡して。ブックマークしたページだけを表示し、大切なところへすぐに戻れます。',
      details: ['サムネイル', 'ブックマーク'],
    },
  },
  ai: {
    eyebrow: '03 / AI連携',
    title: ['手書きのノートを、', 'AIと一緒に。'],
    description:
      'MCP（AIアプリとつなぐための仕組み）に対応。外部AIアプリから、開いているページや投げ縄で選んだ範囲を画像として読み取り、用意したPNG画像をノートに追加できます。',
    capabilities: [
      'ページ・選択範囲の読み取り',
      'PNG画像の追加',
      '追加結果の確認・取り消し',
    ],
    setupTitle: '設定から、AIアプリにつなぐ。',
    steps: [
      {
        title: 'AI接続を有効にする',
        description:
          'Inkquationの「設定」→「AI接続」で許可します。初期状態では無効です。',
      },
      {
        title: '接続設定をコピーする',
        description:
          '設定画面の接続設定を、Mac上のMCP対応AIアプリに登録します。',
      },
      {
        title: 'ノートを開いて、AIに依頼する',
        description:
          'Inkquationを開いたまま、接続先のAIアプリから読み取りや画像の追加を依頼します。',
      },
    ],
    privacy:
      'AIの利用には外部AIアプリの設定と、そのサービスのアカウント等が必要です。クラウド型のAIを使う場合、読み取ったノートの内容が接続先のサービスに送信されることがあります。',
    privacyLink: 'AI接続とプライバシーについて',
  },
  workflow: {
    title: ['自由に書いて、', 'あとから整える。'],
    description: [
      '真っ白な一枚から、誰かに見せるノートへ。',
      '自分のペースで、思考を育てていこう。',
    ],
    steps: [
      {
        title: '書きたいことに合う用紙を。',
        description: '無地・方眼・横罫と、A判・B判の用紙サイズ。',
      },
      {
        title: '増えたノートも、見つけやすく。',
        description: 'フォルダで整理して、ページは一覧から移動。',
      },
      {
        title: 'まとまったら、PDFに。',
        description: '書き出して共有。バックアップで保存・復元も。',
      },
    ],
  },
  paper: {
    title: '思考に合う、一枚を。',
    tabsLabel: '用紙の見た目を切り替える',
    styles: {
      grid: {
        label: '方眼',
        description: '図や数式の位置を、気持ちよくそろえる。',
      },
      ruled: {
        label: '横罫',
        description: '言葉を一行ずつ、考えの流れに沿って。',
      },
      plain: {
        label: '無地',
        description: '線にとらわれず、アイデアを自由に広げる。',
      },
    },
    intro: 'ひとつの気づきから、次のアイデアへ。',
    diagramLabel: '気づく、試す、つながるの3段階を結ぶアイデアの図',
    stages: ['気づく', '試す', 'つながる'],
    note: '書きながら、考えをつないでいく。',
    caption: '用紙のイメージ',
  },
  mac: {
    title: 'いつものMacで、いつものように。',
    description: [
      'ノートを別々のウインドウで開き、資料を見ながら書く。',
      '書き上げたノートはPDFにして、ほかのアプリでも使えます。',
    ],
    facts: ['macOS 専用', 'ノートはローカルに保存', 'PDFに書き出し'],
  },
  contact: {
    title: ['次のひらめきは、', 'この一筆から。'],
    description: [
      'Inkquation の配布方法や対応環境については、',
      'メールでお問い合わせください。',
    ],
    action: '配布について問い合わせる',
    subject: 'Inkquation の配布について',
    hint: 'メールアプリが開きます。',
    noScriptMessage: 'お問い合わせにはJavaScriptを有効にしてください。',
  },
  footer: {
    tagline: 'あなたの思考に、余白とインクを。',
    contact: 'お問い合わせ',
  },
};

export type SiteCopy = typeof ja;

const en: SiteCopy = {
  meta: {
    title: 'Inkquation — Write with a pen. Switch with a key.',
    description:
      'Handwritten notes meet keyboard shortcuts on Mac. Switch tools, change colors, and adjust stroke width from your keyboard. Customize shortcuts and connect an external AI app through MCP to work with your notes.',
  },
  nav: {
    skip: 'Skip to content',
    home: 'Inkquation home',
    main: 'Main navigation',
    shortcuts: 'Shortcuts',
    features: 'Features',
    distribution: 'Get Inkquation',
    language: 'Language',
    ai: 'AI integration',
  },
  hero: {
    lead: 'Write with a pen.',
    prefix: 'Switch with a ',
    accent: 'key.',
    description: [
      'Write with one hand. Switch tools with the other.',
      'Change colors and stroke width from your keyboard,',
      'without moving the pointer away from your notes.',
    ],
    primary: 'Explore the shortcuts',
    secondary: 'See how it works',
    platform: 'A handwriting notebook, made for macOS',
    aiLink: 'Now with AI integration',
  },
  screenshot: {
    open: 'Open the full-size Inkquation editor screenshot',
    alt: 'The actual Inkquation editor with its Japanese interface: page thumbnails and a color and width palette on the left, drawing tools above, and equations on grid paper in the center.',
    caption: 'Actual editor · Demo note · Japanese UI',
    expand: 'View full size',
  },
  shortcuts: {
    title: ['Draw with your right.', 'Control with your left.'],
    description:
      'Keep drawing with your right hand while your left switches tools, changes colors and stroke width, turns pages, and zooms.',
    setupTitle: 'Apply Left-Hand Operation in Settings.',
    setupDescription:
      'In Inkquation, open Settings → Shortcuts, choose Left-Hand Operation, then confirm to apply it.',
    layoutNote:
      'Uses letter and number keys on the left side shared by US and Japanese (JIS) keyboard layouts.',
    navigationTitle: 'Left-Hand Operation: pages and zoom, too.',
    pageLabel: 'Previous / next page',
    zoomLabel: 'Zoom out / in',
    customizeTitle: 'Make the keys feel like yours.',
    customizeDescription:
      'Start with a preset, then change the shortcuts you use most. Edit individual key combinations in the app’s settings.',
    referenceTitle: 'Switching tools',
    presetsLabel: 'Compare shortcut preset examples',
    presets: {
      leftHanded: {
        label: 'Left-Hand Operation',
        description:
          'Keep controls on the left. Q, W, E, and R switch to the pen, eraser, highlighter, and lasso.',
      },
      standard: {
        label: 'Standard',
        description: 'Combine letter keys with Command to switch tools.',
      },
      direct: {
        label: 'Single-key tool switching',
        description: 'Press a single letter key to switch tools.',
      },
    },
    tools: {
      shape: 'Switch to shapes',
      selection: 'Switch to selection tool',
      laser: 'Switch to laser pointer',

      pen: 'Switch to pen',
      eraser: 'Switch to eraser',
      highlighter: 'Switch to highlighter',
      lasso: 'Switch to lasso',
    },
    note: 'Examples from the app’s presets. Use these shortcuts in the note editor when you are not typing in a text field.',
    optionsLabel: 'Actions for the selected preset',
    keys: {
      left: 'Left arrow',
      right: 'Right arrow',
      minus: 'Minus',
      plus: 'Plus',
      space: 'Space',
    },
    colorTitle: 'Cycle through colors',
    colorDescription:
      'Move to the previous or next color for the pen, highlighter, or shape tool.',
    widthTitle: 'Adjust stroke width',
    widthDescription:
      'Change the width of the pen, highlighter, or shapes, or adjust the eraser size.',
    laserTitle: 'Hold for a laser pointer',
    laserDescription:
      'Release Space to return to your previous tool. Useful when walking someone through your notes.',
    hintTitle: 'Need a reminder? Hold Command.',
    hintDescription:
      'Hold the Command key for one second in the note editor to reveal shortcuts for tools and their options.',
  },
  features: {
    title: ['The right tools', 'for thinking by hand.'],
    description: [
      'Start writing. Make changes as you go.',
      'Keep the path from idea to page simple.',
    ],
    write: {
      title: 'Give an idea its first stroke.',
      description:
        'Write with the pen and mark what matters with the highlighter. Use the eraser and lasso selection to revise your notes as your thinking changes.',
      details: ['Pen', 'Highlighter', 'Lasso'],
    },
    shape: {
      title: 'Bring structure to your sketches.',
      description:
        'Draw lines, rectangles, and ellipses. Choose solid, dashed, wavy, or double lines to suit your diagrams.',
      samples: 'Examples of solid, dashed, wavy, and double lines',
    },
    organize: {
      title: 'Find your way back.',
      description:
        'See your notebook at a glance with page thumbnails. Filter to bookmarked pages to get straight to the parts you want to revisit.',
      details: ['Page thumbnails', 'Bookmarks'],
    },
  },
  ai: {
    eyebrow: '03 / AI INTEGRATION',
    title: ['Bring your handwritten', 'notes into the conversation.'],
    description:
      'Connect an external AI app through MCP, a protocol for connecting AI apps to tools. It can read an open page or lasso selection as an image and add a prepared PNG image to your notes.',
    capabilities: [
      'Read pages and selections',
      'Insert PNG images',
      'Inspect and undo insertions',
    ],
    setupTitle: 'Connect your AI app in Settings.',
    steps: [
      {
        title: 'Enable AI connections',
        description:
          'In Inkquation, open Settings → AI Connection and allow connections. This is off by default.',
      },
      {
        title: 'Copy the connection configuration',
        description:
          'Add the configuration from Settings to an MCP-compatible AI app running on your Mac.',
      },
      {
        title: 'Open a note and ask your AI app',
        description:
          'Keep Inkquation open, then ask the connected AI app to read a page or insert an image.',
      },
    ],
    privacy:
      'Set up an external AI app and any account required by its service. If you use a cloud-based AI, the note content it reads may be sent to that service.',
    privacyLink: 'About AI connections and privacy',
  },
  workflow: {
    title: ['Write freely.', 'Organize as you go.'],
    description: [
      'From a blank page to notes you can share.',
      'Let your ideas take shape at your own pace.',
    ],
    steps: [
      {
        title: 'Choose a page that fits.',
        description: 'Plain, grid, or ruled paper, in A- and B-series sizes.',
      },
      {
        title: 'Keep growing notebooks organized.',
        description:
          'Use folders for your notes and thumbnails to navigate pages.',
      },
      {
        title: 'Share your work as a PDF.',
        description:
          'Export your notes to share them. Save and restore backups, too.',
      },
    ],
  },
  paper: {
    title: 'A page for your way of thinking.',
    tabsLabel: 'Change the paper illustration',
    styles: {
      grid: {
        label: 'Grid',
        description: 'Line up your diagrams and equations.',
      },
      ruled: {
        label: 'Ruled',
        description: 'Follow your thoughts, one line at a time.',
      },
      plain: {
        label: 'Plain',
        description: 'Give your ideas room to spread out.',
      },
    },
    intro: 'One observation leads to the next idea.',
    diagramLabel:
      'An idea diagram connecting Notice, Try, and Connect, with a loop back to try again',
    stages: ['Notice', 'Try', 'Connect'],
    note: 'Connect your ideas as you write.',
    caption: 'Paper illustration',
  },
  mac: {
    title: 'Right at home on your Mac.',
    description: [
      'Open notes in separate windows and write alongside your references.',
      'Export finished notes as PDFs to use in other apps.',
    ],
    facts: ['Made for macOS', 'Notes stored locally', 'PDF export'],
  },
  contact: {
    title: ['Your next idea', 'starts with a stroke.'],
    description: [
      'For information about getting Inkquation',
      'and its system requirements, get in touch.',
    ],
    action: 'Ask about Inkquation',
    subject: 'Getting Inkquation',
    hint: 'Opens your email app.',
    noScriptMessage: 'Enable JavaScript to contact us.',
  },
  footer: {
    tagline: 'A little room. A little ink. Your ideas.',
    contact: 'Contact',
  },
};

export const siteCopy: Record<Locale, SiteCopy> = {
  ja,
  en,
  'zh-Hans': zhHans,
  'zh-Hant': zhHant,
  'zh-HK': zhHK,
  ko,
};
