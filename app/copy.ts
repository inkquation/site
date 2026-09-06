export type Locale = 'ja';

const ja = {
  meta: {
    title: 'Inkquation — ペンで書く。キーで操る。',
    description:
      'Inkquation は、手書きとキーボードショートカットを組み合わせるMac専用ノートアプリ。ツールの切り替え、色や線幅の調整をキーで操作。1キーでのツール切り替えや、割り当てのカスタマイズにも対応しています。',
  },
  nav: {
    skip: '本文へ移動',
    home: 'Inkquation ホーム',
    main: 'メインナビゲーション',
    features: 'できること',
    distribution: '配布について',
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
    primary: 'できることを見る',
    secondary: '使い方を見る',
    platform: 'macOS のための手書きノートアプリ',
  },
  screenshot: {
    open: 'Inkquation の実際の編集画面を拡大して開く',
    alt: 'Inkquation の実際の編集画面。左にページサムネイルと色・線幅のパレット、上に描画ツールバー、中央に方眼の数式ノート。',
    caption: '実際の編集画面 · デモノート',
    expand: '拡大して見る',
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
  },
  footer: {
    tagline: 'あなたの思考に、余白とインクを。',
    contact: 'お問い合わせ',
  },
};

export type SiteCopy = typeof ja;

export const siteCopy: Record<Locale, SiteCopy> = { ja };
