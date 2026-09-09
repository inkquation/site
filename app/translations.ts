import type { SiteCopy } from './copy';

export const zhHans: SiteCopy = {
  meta: {
    title: 'Inkquation — 用笔书写，用键盘操作。',
    description:
      'Inkquation 是一款专为 Mac 设计的手写笔记应用。用快捷键切换工具、调整颜色和线宽，自定义按键，并通过 MCP 连接外部 AI 应用，让 AI 协助处理笔记。',
  },
  nav: {
    skip: '跳转到正文',
    home: 'Inkquation 首页',
    main: '主导航',
    shortcuts: '快捷键',
    features: '功能',
    distribution: '获取应用',
    language: '显示语言',
    ai: 'AI 连接',
  },
  hero: {
    lead: '用笔书写。',
    prefix: '用键盘',
    accent: '操作。',
    description: [
      '一只手书写，另一只手切换工具。',
      '颜色和线宽，也能用键盘调整。',
      '无需将指针移出笔记。',
    ],
    primary: '查看快捷键',
    secondary: '了解使用方式',
    platform: '专为 macOS 设计的手写笔记应用',
    aiLink: '现已支持 AI 连接',
  },
  screenshot: {
    open: '查看 Inkquation 编辑界面的原尺寸截图',
    alt: 'Inkquation 的实际编辑界面（日语）：左侧是页面缩略图及颜色、线宽面板，上方是绘图工具栏，中央是写有公式的方格笔记。',
    caption: '实际编辑界面 · 示例笔记 · 日语界面',
    expand: '查看大图',
  },
  shortcuts: {
    title: ['右手写画，', '左手操作。'],
    description:
      '右手继续书写，左手即可切换工具、调整颜色和线宽、翻页及缩放。',
    setupTitle: '在设置中应用“左手操作”。',
    setupDescription:
      '在 Inkquation 的“设置”→“快捷键”中选择“左手操作”，然后在确认窗口中应用。',
    layoutNote: '使用美式（US）和日文（JIS）键盘左侧共有的字母与数字键。',
    navigationTitle: '“左手操作”也能翻页和缩放。',
    pageLabel: '上一页／下一页',
    zoomLabel: '缩小／放大',
    customizeTitle: '让按键符合你的习惯。',
    customizeDescription:
      '先选择预设，再按自己的习惯调整常用操作。你可以在应用设置中修改各项组合键。',
    referenceTitle: '切换工具',
    presetsLabel: '切换快捷键预设示例',
    presets: {
      leftHanded: {
        label: '左手操作',
        description:
          '操作集中在左侧。用 Q、W、E、R 切换笔、橡皮擦、荧光笔和套索。',
      },
      standard: { label: '标准', description: '配合 Command 键切换工具。' },
      direct: {
        label: '单键切换工具',
        description: '按一个字母键即可切换工具。',
      },
    },
    tools: {
      shape: '切换到形状',
      selection: '切换到选择工具',
      laser: '切换到激光笔',

      pen: '切换到笔',
      eraser: '切换到橡皮擦',
      highlighter: '切换到荧光笔',
      lasso: '切换到套索',
    },
    note: '以上为应用内的预设示例。在笔记编辑界面中，未在文本输入框内输入时可使用这些快捷键。',
    optionsLabel: '所选预设的操作',
    keys: {
      left: '左箭头',
      right: '右箭头',
      minus: '减号',
      plus: '加号',
      space: '空格',
    },
    colorTitle: '切换颜色',
    colorDescription: '切换笔、荧光笔或形状工具的上一个或下一个颜色。',
    widthTitle: '调整线宽',
    widthDescription: '调整笔、荧光笔和形状的线宽，或更改橡皮擦大小。',
    laserTitle: '按住即可使用激光笔',
    laserDescription:
      '松开空格键即可回到原来的工具，适合一边展示笔记，一边讲解。',
    hintTitle: '忘了按键？长按 Command。',
    hintDescription:
      '在笔记编辑界面长按 Command 键一秒，即可查看工具及其选项的快捷键。',
  },
  features: {
    title: ['用手思考，', '工具恰到好处。'],
    description: ['随时开始书写，需要时再调整。', '让灵感轻松落在纸上。'],
    write: {
      title: '落下第一笔，让想法展开。',
      description:
        '用笔书写，用荧光笔标记重点。随着思路变化，用橡皮擦和套索选择修改笔记。',
      details: ['笔', '荧光笔', '套索'],
    },
    shape: {
      title: '图形和线条，随心绘制。',
      description:
        '快速绘制直线、矩形和椭圆。实线、虚线、波浪线或双线，总有适合图示的线条。',
      samples: '实线、虚线、波浪线和双线示例',
    },
    organize: {
      title: '迅速回到那一页。',
      description:
        '通过缩略图浏览整本笔记，也可以只显示已加书签的页面，快速回到重点内容。',
      details: ['页面缩略图', '书签'],
    },
  },
  ai: {
    eyebrow: '03 / AI 连接',
    title: ['手写笔记，', '也能与 AI 一起处理。'],
    description:
      '通过 MCP（连接 AI 应用与工具的协议），外部 AI 应用可以将打开的页面或套索选区读取为图像，并将 PNG 图像、图形和笔画添加到笔记中。',
    capabilities: ['读取页面与选区', '插入 PNG 图像、图形和笔画', '查看并撤销插入结果'],
    setupTitle: '在设置中连接 AI 应用。',
    steps: [
      {
        title: '启用 AI 连接',
        description:
          '在 Inkquation 的“设置”→“AI 连接”中允许连接。此功能默认关闭。',
      },
      {
        title: '拷贝连接配置',
        description: '将设置页面中的配置添加到 Mac 上支持 MCP 的 AI 应用。',
      },
      {
        title: '打开笔记，向 AI 提出请求',
        description:
          '保持 Inkquation 打开，然后通过已连接的 AI 应用请求读取页面或添加图像、图形。',
      },
    ],
    privacy:
      '使用前需设置外部 AI 应用，并准备其服务所需的账户等。如果使用云端 AI，读取的笔记内容可能会发送至该服务。',
    guideLink: '阅读 AI 连接指南',
    privacyLink: '了解 AI 连接与隐私',
  },
  workflow: {
    title: ['自由书写，', '随后整理。'],
    description: [
      '从一张白纸，到可以分享的笔记。',
      '按自己的节奏，让想法逐渐成形。',
    ],
    steps: [
      {
        title: '选择适合内容的纸张。',
        description: '空白、方格或横线，支持 A 系列和 B 系列纸张尺寸。',
      },
      {
        title: '笔记再多，也好找。',
        description: '用文件夹整理笔记，通过缩略图切换页面。',
      },
      {
        title: '完成后，导出为 PDF。',
        description: '导出并分享笔记，也可以保存和恢复备份。',
      },
    ],
  },
  paper: {
    title: '选一张适合思考的纸。',
    tabsLabel: '切换纸张示意图',
    styles: {
      grid: { label: '方格', description: '让图形和公式整齐排列。' },
      ruled: { label: '横线', description: '一行一行，跟随思绪。' },
      plain: { label: '空白', description: '不受线条限制，自由展开想法。' },
    },
    intro: '从一个发现，走向下一个想法。',
    diagramLabel: '连接发现、尝试、关联三个阶段，并返回再次尝试的思维示意图',
    stages: ['发现', '尝试', '关联'],
    note: '一边书写，一边串联想法。',
    caption: '纸张示意图',
  },
  mac: {
    title: '在熟悉的 Mac 上，自如书写。',
    description: [
      '在不同窗口打开笔记，边看资料边书写。',
      '完成后导出为 PDF，也能在其他应用中使用。',
    ],
    facts: ['专为 macOS 设计', '笔记保存在本机', '导出 PDF'],
  },
  contact: {
    title: ['下一个灵感，', '从这一笔开始。'],
    description: [
      '如需了解 Inkquation 的获取方式',
      '和系统要求，请通过电子邮件联系我们。',
    ],
    action: '咨询如何获取 Inkquation',
    subject: '关于获取 Inkquation',
    hint: '将打开你的邮件应用。',
    noScriptMessage: '请启用 JavaScript 以联系我们。',
  },
  footer: { tagline: '为思考留白，让灵感落笔。', contact: '联系我们' },
};

export const zhHant: SiteCopy = {
  meta: {
    title: 'Inkquation — 用筆書寫，用鍵盤操作。',
    description:
      'Inkquation 是專為 Mac 設計的手寫筆記 App。使用快速鍵切換工具、調整顏色與線寬，自訂按鍵，並透過 MCP 連接外部 AI App，讓 AI 協助處理筆記。',
  },
  nav: {
    skip: '跳至正文',
    home: 'Inkquation 首頁',
    main: '主要導覽',
    shortcuts: '快速鍵',
    features: '功能',
    distribution: '取得 App',
    language: '顯示語言',
    ai: 'AI 連線',
  },
  hero: {
    lead: '用筆書寫。',
    prefix: '用鍵盤',
    accent: '操作。',
    description: [
      '一隻手書寫，另一隻手切換工具。',
      '顏色與線寬，也能透過鍵盤調整。',
      '無須將指標移出筆記。',
    ],
    primary: '查看快速鍵',
    secondary: '了解使用方式',
    platform: '專為 macOS 設計的手寫筆記 App',
    aiLink: '現已支援 AI 連線',
  },
  screenshot: {
    open: '開啟 Inkquation 編輯畫面的原尺寸截圖',
    alt: 'Inkquation 的實際編輯畫面（日文）：左側為頁面縮圖及顏色、線寬面板，上方為繪圖工具列，中央是寫有公式的方格筆記。',
    caption: '實際編輯畫面 · 示範筆記 · 日文介面',
    expand: '查看大圖',
  },
  shortcuts: {
    title: ['右手書寫，', '左手操作。'],
    description:
      '右手持續書寫，左手即可切換工具、調整顏色與線寬、翻頁及縮放。',
    setupTitle: '在設定中套用「左手操作」。',
    setupDescription:
      '在 Inkquation 的「設定」→「快速鍵」中選擇「左手操作」，再於確認視窗中套用。',
    layoutNote: '使用美式（US）與日文（JIS）鍵盤左側共有的字母及數字鍵。',
    navigationTitle: '「左手操作」也能翻頁與縮放。',
    pageLabel: '上一頁／下一頁',
    zoomLabel: '縮小／放大',
    customizeTitle: '讓按鍵配合你的習慣。',
    customizeDescription:
      '先選擇預設組合，再依照習慣調整常用操作。你可以在 App 設定中修改各項按鍵組合。',
    referenceTitle: '切換工具',
    presetsLabel: '切換快速鍵預設範例',
    presets: {
      leftHanded: {
        label: '左手操作',
        description:
          '操作集中在左側。用 Q、W、E、R 切換筆、橡皮擦、螢光筆與套索。',
      },
      standard: { label: '標準', description: '搭配 Command 鍵切換工具。' },
      direct: {
        label: '單鍵切換工具',
        description: '按一個字母鍵即可切換工具。',
      },
    },
    tools: {
      shape: '切換至形狀',
      selection: '切換至選取工具',
      laser: '切換至雷射筆',

      pen: '切換至筆',
      eraser: '切換至橡皮擦',
      highlighter: '切換至螢光筆',
      lasso: '切換至套索',
    },
    note: '以上為 App 內的預設範例。在筆記編輯畫面中，未於文字輸入欄位輸入時可使用這些快速鍵。',
    optionsLabel: '所選預設的操作',
    keys: {
      left: '向左鍵',
      right: '向右鍵',
      minus: '減號',
      plus: '加號',
      space: '空白鍵',
    },
    colorTitle: '切換顏色',
    colorDescription: '切換筆、螢光筆或形狀工具的上一個或下一個顏色。',
    widthTitle: '調整線寬',
    widthDescription: '調整筆、螢光筆和形狀的線寬，或更改橡皮擦大小。',
    laserTitle: '按住即可使用雷射筆',
    laserDescription:
      '放開空白鍵即可回到原本的工具，適合一邊展示筆記，一邊說明。',
    hintTitle: '忘了按鍵？按住 Command。',
    hintDescription:
      '在筆記編輯畫面按住 Command 鍵一秒，即可查看工具及其選項的快速鍵。',
  },
  features: {
    title: ['用手思考，', '工具恰到好處。'],
    description: ['隨時開始書寫，需要時再調整。', '讓靈感輕鬆落在紙上。'],
    write: {
      title: '落下第一筆，讓想法展開。',
      description:
        '用筆書寫，用螢光筆標記重點。隨著思路改變，使用橡皮擦與套索選取修改筆記。',
      details: ['筆', '螢光筆', '套索'],
    },
    shape: {
      title: '圖形與線條，隨心繪製。',
      description:
        '快速繪製直線、矩形與橢圓。實線、虛線、波浪線或雙線，選擇適合圖示的線條。',
      samples: '實線、虛線、波浪線與雙線範例',
    },
    organize: {
      title: '迅速回到那一頁。',
      description:
        '透過縮圖瀏覽整本筆記，也可以只顯示已加入書籤的頁面，快速回到重點內容。',
      details: ['頁面縮圖', '書籤'],
    },
  },
  ai: {
    eyebrow: '03 / AI 連線',
    title: ['手寫筆記，', '也能與 AI 一起處理。'],
    description:
      '透過 MCP（連接 AI App 與工具的通訊協定），外部 AI App 可以將開啟的頁面或套索選取範圍讀取為影像，並將 PNG 影像、圖形和筆畫加入筆記。',
    capabilities: ['讀取頁面與選取範圍', '插入 PNG 影像、圖形和筆畫', '查看並復原插入結果'],
    setupTitle: '在設定中連接 AI App。',
    steps: [
      {
        title: '啟用 AI 連線',
        description:
          '在 Inkquation 的「設定」→「AI 連線」中允許連線。此功能預設為關閉。',
      },
      {
        title: '拷貝連線設定',
        description: '將設定畫面中的組態加入 Mac 上支援 MCP 的 AI App。',
      },
      {
        title: '開啟筆記，向 AI 提出要求',
        description:
          '保持 Inkquation 開啟，再透過已連接的 AI App 要求讀取頁面或加入影像、圖形。',
      },
    ],
    privacy:
      '使用前需設定外部 AI App，並準備其服務所需的帳號等。若使用雲端 AI，讀取的筆記內容可能會傳送至該服務。',
    guideLink: '閱讀 AI 連線指南',
    privacyLink: '了解 AI 連線與隱私權',
  },
  workflow: {
    title: ['自由書寫，', '隨後整理。'],
    description: [
      '從一張白紙，到可以分享的筆記。',
      '依照自己的步調，讓想法逐漸成形。',
    ],
    steps: [
      {
        title: '選擇適合內容的紙張。',
        description: '空白、方格或橫線，支援 A 系列與 B 系列紙張尺寸。',
      },
      {
        title: '筆記再多，也好找。',
        description: '用檔案夾整理筆記，透過縮圖切換頁面。',
      },
      {
        title: '完成後，輸出為 PDF。',
        description: '輸出並分享筆記，也可以儲存與回復備份。',
      },
    ],
  },
  paper: {
    title: '選一張適合思考的紙。',
    tabsLabel: '切換紙張示意圖',
    styles: {
      grid: { label: '方格', description: '讓圖形與公式整齊排列。' },
      ruled: { label: '橫線', description: '一行一行，跟隨思緒。' },
      plain: { label: '空白', description: '不受線條限制，自由展開想法。' },
    },
    intro: '從一個發現，走向下一個想法。',
    diagramLabel: '連接發現、嘗試、連結三個階段，並返回再次嘗試的思考示意圖',
    stages: ['發現', '嘗試', '連結'],
    note: '一邊書寫，一邊串連想法。',
    caption: '紙張示意圖',
  },
  mac: {
    title: '在熟悉的 Mac 上，自在書寫。',
    description: [
      '在不同視窗開啟筆記，一邊參考資料，一邊書寫。',
      '完成後輸出為 PDF，也能在其他 App 中使用。',
    ],
    facts: ['專為 macOS 設計', '筆記儲存在本機', '輸出 PDF'],
  },
  contact: {
    title: ['下一個靈感，', '從這一筆開始。'],
    description: [
      '如需了解 Inkquation 的取得方式',
      '與系統需求，請透過電子郵件聯絡我們。',
    ],
    action: '詢問如何取得 Inkquation',
    subject: '關於取得 Inkquation',
    hint: '將開啟你的郵件 App。',
    noScriptMessage: '請啟用 JavaScript 以聯絡我們。',
  },
  footer: { tagline: '為思考留白，讓靈感落筆。', contact: '聯絡我們' },
};

export const zhHK: SiteCopy = {
  meta: {
    title: 'Inkquation — 用筆書寫，用鍵盤操作。',
    description:
      'Inkquation 是專為 Mac 設計的手寫筆記 App。使用快捷鍵切換工具、調整顏色和線寬，自訂按鍵，並透過 MCP 連接外部 AI App，讓 AI 協助處理筆記。',
  },
  nav: {
    skip: '跳至正文',
    home: 'Inkquation 主頁',
    main: '主要導覽',
    shortcuts: '快捷鍵',
    features: '功能',
    distribution: '取得 App',
    language: '顯示語言',
    ai: 'AI 連線',
  },
  hero: {
    lead: '用筆書寫。',
    prefix: '用鍵盤',
    accent: '操作。',
    description: [
      '一隻手書寫，另一隻手切換工具。',
      '顏色和線寬，也能透過鍵盤調整。',
      '毋須將指標移出筆記。',
    ],
    primary: '查看快捷鍵',
    secondary: '了解使用方式',
    platform: '專為 macOS 設計的手寫筆記 App',
    aiLink: '現已支援 AI 連線',
  },
  screenshot: {
    open: '開啟 Inkquation 編輯畫面的原尺寸截圖',
    alt: 'Inkquation 的實際編輯畫面（日文）：左側是頁面縮圖及顏色、線寬面板，上方是繪圖工具列，中央是寫有公式的方格筆記。',
    caption: '實際編輯畫面 · 示範筆記 · 日文介面',
    expand: '查看大圖',
  },
  shortcuts: {
    title: ['右手書寫，', '左手操作。'],
    description:
      '右手繼續書寫，左手即可切換工具、調整顏色和線寬、翻頁及縮放。',
    setupTitle: '在設定中套用「左手操作」。',
    setupDescription:
      '在 Inkquation 的「設定」→「快捷鍵」中選擇「左手操作」，再於確認視窗中套用。',
    layoutNote: '使用美式（US）和日文（JIS）鍵盤左側共有的字母及數字鍵。',
    navigationTitle: '「左手操作」也能翻頁和縮放。',
    pageLabel: '上一頁／下一頁',
    zoomLabel: '縮小／放大',
    customizeTitle: '讓按鍵配合你的習慣。',
    customizeDescription:
      '先選擇預設組合，再按自己的習慣調整常用操作。你可以在 App 設定中修改各項按鍵組合。',
    referenceTitle: '切換工具',
    presetsLabel: '切換快捷鍵預設範例',
    presets: {
      leftHanded: {
        label: '左手操作',
        description:
          '操作集中在左側。用 Q、W、E、R 切換筆、擦膠、螢光筆和套索。',
      },
      standard: { label: '標準', description: '配合 Command 鍵切換工具。' },
      direct: {
        label: '單鍵切換工具',
        description: '按一個字母鍵即可切換工具。',
      },
    },
    tools: {
      shape: '切換至形狀',
      selection: '切換至選取工具',
      laser: '切換至鐳射筆',

      pen: '切換至筆',
      eraser: '切換至擦膠',
      highlighter: '切換至螢光筆',
      lasso: '切換至套索',
    },
    note: '以上是 App 內的預設範例。在筆記編輯畫面中，未於文字輸入欄位輸入時可使用這些快捷鍵。',
    optionsLabel: '所選預設的操作',
    keys: {
      left: '向左鍵',
      right: '向右鍵',
      minus: '減號',
      plus: '加號',
      space: '空格鍵',
    },
    colorTitle: '切換顏色',
    colorDescription: '切換筆、螢光筆或形狀工具的上一個或下一個顏色。',
    widthTitle: '調整線寬',
    widthDescription: '調整筆、螢光筆和形狀的線寬，或更改擦膠大小。',
    laserTitle: '按住即可使用鐳射筆',
    laserDescription:
      '放開空格鍵即可返回原本的工具，適合一邊展示筆記，一邊講解。',
    hintTitle: '忘了按鍵？按住 Command。',
    hintDescription:
      '在筆記編輯畫面按住 Command 鍵一秒，即可查看工具及其選項的快捷鍵。',
  },
  features: {
    title: ['用手思考，', '工具恰到好處。'],
    description: ['隨時開始書寫，需要時再調整。', '讓靈感輕鬆落在紙上。'],
    write: {
      title: '落下第一筆，讓想法展開。',
      description:
        '用筆書寫，用螢光筆標記重點。隨着思路改變，使用擦膠和套索選取修改筆記。',
      details: ['筆', '螢光筆', '套索'],
    },
    shape: {
      title: '圖形和線條，隨心繪製。',
      description:
        '快速繪製直線、矩形和橢圓。實線、虛線、波浪線或雙線，選擇適合圖示的線條。',
      samples: '實線、虛線、波浪線和雙線範例',
    },
    organize: {
      title: '迅速返回那一頁。',
      description:
        '透過縮圖瀏覽整本筆記，也可以只顯示已加入書籤的頁面，快速返回重點內容。',
      details: ['頁面縮圖', '書籤'],
    },
  },
  ai: {
    eyebrow: '03 / AI 連線',
    title: ['手寫筆記，', '也能與 AI 一起處理。'],
    description:
      '透過 MCP（連接 AI App 與工具的通訊協定），外部 AI App 可以將開啟的頁面或套索選取範圍讀取為圖像，並將 PNG 圖像、圖形和筆畫加入筆記。',
    capabilities: ['讀取頁面與選取範圍', '插入 PNG 圖像、圖形和筆畫', '查看並還原插入結果'],
    setupTitle: '在設定中連接 AI App。',
    steps: [
      {
        title: '啟用 AI 連線',
        description:
          '在 Inkquation 的「設定」→「AI 連線」中允許連線。此功能預設為關閉。',
      },
      {
        title: '複製連線設定',
        description: '將設定畫面中的配置加入 Mac 上支援 MCP 的 AI App。',
      },
      {
        title: '開啟筆記，向 AI 提出要求',
        description:
          '保持 Inkquation 開啟，再透過已連接的 AI App 要求讀取頁面或加入圖像、圖形。',
      },
    ],
    privacy:
      '使用前需設定外部 AI App，並準備其服務所需的帳戶等。如使用雲端 AI，讀取的筆記內容可能會傳送至該服務。',
    guideLink: '閱讀 AI 連線指南',
    privacyLink: '了解 AI 連線與私隱',
  },
  workflow: {
    title: ['自由書寫，', '隨後整理。'],
    description: [
      '從一張白紙，到可以分享的筆記。',
      '按自己的步伐，讓想法逐漸成形。',
    ],
    steps: [
      {
        title: '選擇適合內容的紙張。',
        description: '空白、方格或橫線，支援 A 系列和 B 系列紙張尺寸。',
      },
      {
        title: '筆記再多，也容易找。',
        description: '用資料夾整理筆記，透過縮圖切換頁面。',
      },
      {
        title: '完成後，輸出為 PDF。',
        description: '輸出並分享筆記，也可以儲存和還原備份。',
      },
    ],
  },
  paper: {
    title: '選一張適合思考的紙。',
    tabsLabel: '切換紙張示意圖',
    styles: {
      grid: { label: '方格', description: '讓圖形和公式整齊排列。' },
      ruled: { label: '橫線', description: '一行一行，跟隨思緒。' },
      plain: { label: '空白', description: '不受線條限制，自由展開想法。' },
    },
    intro: '從一個發現，走向下一個想法。',
    diagramLabel: '連接發現、嘗試、連繫三個階段，並返回再次嘗試的思考示意圖',
    stages: ['發現', '嘗試', '連繫'],
    note: '一邊書寫，一邊串連想法。',
    caption: '紙張示意圖',
  },
  mac: {
    title: '在熟悉的 Mac 上，自在書寫。',
    description: [
      '在不同視窗開啟筆記，一邊參考資料，一邊書寫。',
      '完成後輸出為 PDF，也能在其他 App 中使用。',
    ],
    facts: ['專為 macOS 設計', '筆記儲存在本機', '輸出 PDF'],
  },
  contact: {
    title: ['下一個靈感，', '從這一筆開始。'],
    description: [
      '如需了解 Inkquation 的取得方式',
      '和系統要求，請透過電郵聯絡我們。',
    ],
    action: '查詢如何取得 Inkquation',
    subject: '關於取得 Inkquation',
    hint: '將開啟你的郵件 App。',
    noScriptMessage: '請啟用 JavaScript 以聯絡我們。',
  },
  footer: { tagline: '為思考留白，讓靈感落筆。', contact: '聯絡我們' },
};

export const ko: SiteCopy = {
  meta: {
    title: 'Inkquation — 펜으로 쓰고, 키보드로 조작하세요.',
    description:
      'Inkquation은 Mac용 손글씨 노트 앱입니다. 단축키로 도구, 색상, 선 굵기를 바꾸고 키 조합을 원하는 대로 설정하세요. MCP로 외부 AI 앱을 연결해 노트를 함께 활용할 수도 있습니다.',
  },
  nav: {
    skip: '본문으로 이동',
    home: 'Inkquation 홈',
    main: '주요 탐색',
    shortcuts: '단축키',
    features: '기능',
    distribution: '앱 이용 안내',
    language: '표시 언어',
    ai: 'AI 연결',
  },
  hero: {
    lead: '펜으로 쓰고,',
    prefix: '키보드로 ',
    accent: '조작하세요.',
    description: [
      '한 손으로 쓰고, 다른 손으로 도구를 바꾸세요.',
      '색상과 선 굵기도 키보드에서 조절할 수 있어요.',
      '포인터를 노트 밖으로 옮길 필요 없이요.',
    ],
    primary: '단축키 살펴보기',
    secondary: '사용 방법 보기',
    platform: 'macOS를 위한 손글씨 노트 앱',
    aiLink: '이제 AI 연결도 지원합니다',
  },
  screenshot: {
    open: 'Inkquation 편집 화면을 원본 크기로 보기',
    alt: 'Inkquation의 실제 일본어 편집 화면. 왼쪽에는 페이지 축소판과 색상 및 선 굵기 팔레트, 위에는 그리기 도구 막대, 가운데에는 모눈종이에 쓴 수식 노트가 있습니다.',
    caption: '실제 편집 화면 · 예시 노트 · 일본어 UI',
    expand: '크게 보기',
  },
  shortcuts: {
    title: ['오른손으로 그리고,', '왼손으로 조작하세요.'],
    description:
      '오른손으로 계속 그리면서 왼손으로 도구, 색상, 선 굵기를 바꾸고 페이지 이동과 확대·축소도 할 수 있습니다.',
    setupTitle: '설정에서 왼손 조작을 적용하세요.',
    setupDescription:
      'Inkquation의 설정 → 키보드 단축키에서 왼손 조작을 선택한 뒤, 확인 창에서 적용하세요.',
    layoutNote:
      'US 및 일본어(JIS) 키보드에 공통으로 있는 왼쪽 문자·숫자 키를 사용합니다.',
    navigationTitle: '왼손 조작으로 페이지 이동과 확대·축소도.',
    pageLabel: '이전 / 다음 페이지',
    zoomLabel: '축소 / 확대',
    customizeTitle: '내 손에 맞는 키 조합으로.',
    customizeDescription:
      '프리셋을 고른 뒤, 자주 쓰는 기능을 취향에 맞게 바꾸세요. 앱 설정에서 각 키 조합을 변경할 수 있습니다.',
    referenceTitle: '도구 전환',
    presetsLabel: '단축키 프리셋 예시 전환',
    presets: {
      leftHanded: {
        label: '왼손 조작',
        description:
          '왼쪽 키로 조작하세요. Q, W, E, R로 펜, 지우개, 형광펜, 올가미를 전환합니다.',
      },
      standard: {
        label: '표준',
        description: 'Command 키와 함께 눌러 도구를 바꿉니다.',
      },
      direct: {
        label: '단일 키로 도구 전환',
        description: '문자 키 하나만 눌러 도구를 바꿉니다.',
      },
    },
    tools: {
      shape: '도형으로 전환',
      selection: '선택 도구로 전환',
      laser: '레이저 포인터로 전환',

      pen: '펜으로 전환',
      eraser: '지우개로 전환',
      highlighter: '형광펜으로 전환',
      lasso: '올가미로 전환',
    },
    note: '앱에 제공되는 프리셋 예시입니다. 노트 편집 화면에서 텍스트 입력란에 입력 중이 아닐 때 사용할 수 있습니다.',
    optionsLabel: '선택한 프리셋의 기능',
    keys: {
      left: '왼쪽 화살표',
      right: '오른쪽 화살표',
      minus: '빼기',
      plus: '더하기',
      space: '스페이스',
    },
    colorTitle: '색상 바꾸기',
    colorDescription:
      '펜, 형광펜, 도형 도구의 이전 또는 다음 색상으로 전환합니다.',
    widthTitle: '선 굵기 조절',
    widthDescription: '펜, 형광펜, 도형의 선 굵기나 지우개 크기를 조절합니다.',
    laserTitle: '누르는 동안 레이저 포인터로',
    laserDescription:
      '스페이스 키를 놓으면 이전 도구로 돌아갑니다. 노트를 보여 주며 설명할 때도 유용합니다.',
    hintTitle: '키가 기억나지 않으면 Command를 길게.',
    hintDescription:
      '노트 편집 화면에서 Command 키를 1초 동안 누르면 도구와 옵션의 단축키가 표시됩니다.',
  },
  features: {
    title: ['손으로 생각하는 데', '꼭 맞는 도구.'],
    description: [
      '바로 쓰기 시작하고, 필요할 때 다듬으세요.',
      '아이디어가 노트로 이어지는 과정을 간단하게.',
    ],
    write: {
      title: '첫 획에서 시작되는 생각.',
      description:
        '펜으로 쓰고 형광펜으로 중요한 부분을 표시하세요. 생각이 바뀌면 지우개와 올가미 선택으로 노트를 고칠 수 있습니다.',
      details: ['펜', '형광펜', '올가미'],
    },
    shape: {
      title: '도형도 선도 원하는 대로.',
      description:
        '직선, 사각형, 타원을 빠르게 그리세요. 실선, 파선, 물결선, 이중선 중 그림에 어울리는 선을 고를 수 있습니다.',
      samples: '실선, 파선, 물결선, 이중선 예시',
    },
    organize: {
      title: '그 페이지로 빠르게 돌아가세요.',
      description:
        '페이지 축소판으로 노트 전체를 살펴보세요. 책갈피가 있는 페이지만 모아 보고 중요한 내용으로 바로 돌아갈 수 있습니다.',
      details: ['페이지 축소판', '책갈피'],
    },
  },
  ai: {
    eyebrow: '03 / AI 연결',
    title: ['손으로 쓴 노트를', 'AI와 함께 활용하세요.'],
    description:
      'AI 앱과 도구를 연결하는 프로토콜인 MCP를 지원합니다. 외부 AI 앱에서 열린 페이지나 올가미 선택 영역을 이미지로 읽고, PNG 이미지, 도형, 펜 획을 노트에 추가할 수 있습니다.',
    capabilities: [
      '페이지와 선택 영역 읽기',
      'PNG 이미지, 도형, 펜 획 삽입',
      '삽입 결과 확인 및 실행 취소',
    ],
    setupTitle: '설정에서 AI 앱을 연결하세요.',
    steps: [
      {
        title: 'AI 연결 허용하기',
        description:
          'Inkquation의 설정 → AI 연결에서 연결을 허용하세요. 기본적으로 꺼져 있습니다.',
      },
      {
        title: '연결 설정 복사하기',
        description:
          '설정 화면의 구성을 Mac에서 실행되는 MCP 지원 AI 앱에 추가하세요.',
      },
      {
        title: '노트를 열고 AI에 요청하기',
        description:
          'Inkquation을 열어 둔 상태에서 연결된 AI 앱에 페이지 읽기나 이미지·도형 추가를 요청하세요.',
      },
    ],
    privacy:
      '외부 AI 앱 설정과 해당 서비스에서 요구하는 계정 등이 필요합니다. 클라우드 기반 AI를 사용하면 읽은 노트 내용이 해당 서비스로 전송될 수 있습니다.',
    guideLink: 'AI 연결 가이드 읽기',
    privacyLink: 'AI 연결과 개인정보 보호 알아보기',
  },
  workflow: {
    title: ['자유롭게 쓰고,', '차근차근 정리하세요.'],
    description: [
      '빈 페이지에서 다른 사람과 나눌 노트까지.',
      '자신의 속도로 생각을 발전시켜 보세요.',
    ],
    steps: [
      {
        title: '내용에 맞는 종이를 고르세요.',
        description: '무지, 모눈, 줄노트와 A·B 시리즈 용지 크기를 지원합니다.',
      },
      {
        title: '노트가 늘어나도 찾기 쉽게.',
        description: '폴더로 정리하고 축소판으로 페이지를 이동하세요.',
      },
      {
        title: '완성한 노트는 PDF로.',
        description:
          '내보내서 공유하세요. 백업을 저장하고 복원할 수도 있습니다.',
      },
    ],
  },
  paper: {
    title: '내 생각에 맞는 한 장.',
    tabsLabel: '용지 예시 전환',
    styles: {
      grid: {
        label: '모눈',
        description: '도형과 수식을 가지런히 배치하세요.',
      },
      ruled: {
        label: '줄노트',
        description: '생각의 흐름을 따라 한 줄씩 써 보세요.',
      },
      plain: {
        label: '무지',
        description: '선에 얽매이지 않고 아이디어를 펼치세요.',
      },
    },
    intro: '하나의 발견에서 다음 아이디어로.',
    diagramLabel:
      '발견, 시도, 연결의 세 단계를 잇고 다시 시도로 돌아가는 아이디어 도식',
    stages: ['발견', '시도', '연결'],
    note: '쓰면서 생각을 이어 가세요.',
    caption: '용지 예시',
  },
  mac: {
    title: '익숙한 Mac에서 편안하게.',
    description: [
      '노트를 각각의 윈도우로 열어 자료를 보며 쓰세요.',
      '완성한 노트는 PDF로 내보내 다른 앱에서도 사용할 수 있습니다.',
    ],
    facts: ['macOS 전용', '노트를 기기에 저장', 'PDF 내보내기'],
  },
  contact: {
    title: ['다음 아이디어는', '이 한 획에서 시작됩니다.'],
    description: [
      'Inkquation의 이용 방법과',
      '시스템 요구 사항은 이메일로 문의해 주세요.',
    ],
    action: 'Inkquation 이용 문의',
    subject: 'Inkquation 이용 방법 문의',
    hint: '메일 앱이 열립니다.',
    noScriptMessage: '문의하려면 JavaScript를 활성화해 주세요.',
  },
  footer: { tagline: '당신의 생각에 여백과 잉크를.', contact: '문의하기' },
};
