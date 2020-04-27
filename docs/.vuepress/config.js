const sidebar = {
  '/views/interview/': [
    {
      title: '每日一题',
      collapsable: true,
      children: [
        '',
        '200427',
      ]
    }
  ]
}

const nav = [
  { text: "时间线", link: "/timeline/", icon: "reco-date" },
  {
    text: '每日一题',
    icon: 'reco-other',
    link: '/views/interview/index.html'
  },
  {
    text: '知识体系',
    icon: 'reco-document',
    link: '/views/web/2020/前端知识体系汇总.md',
  },
  {
    text: '常用工具',
    icon: 'reco-blog',
    link: '/views/web/2020/常用工具.md'
  },
  // 
  { text: 'GitHub', link: 'https://github.com/liupcoder/', icon: 'reco-github' }
]

module.exports = {
  title: "LP's Blog",
  description: "一只iOS&前端程序猿",
  dest: "public",
  base: '/',
  head: [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  theme: "reco",
  mode: 'light',
  themeConfig: {
    type: "blog", //选择类型博客
    author: "LP",
    authorAvatar: '/avatar.jpg',
    // record: '鲁ICP备19062075号-1',
    blogConfig: {
      category: {
        location: 1, // 在导航栏菜单中所占的位置，默认2
        text: "分类" // 默认 “分类”
      },
      tag: {
        location: 2, // 在导航栏菜单中所占的位置，默认3
        text: "标签" // 默认 “标签”
      }
    },
    nav,
    sidebar
  },
  markdown: {
    "lineNumbers": true,
    // markdown 插件
    extendMarkdown: md => {
      md.set({ html: true });
      md.use(require("@iktakahiro/markdown-it-katex"));
      md.use(require("markdown-it-mark"));
      md.use(require("markdown-it-task-lists"));
      md.use(require("markdown-it-vuepress-code-snippet-enhanced"));
    }
  },
  plugins: [
    '@vuepress-reco/extract-code',
    ['@vuepress/medium-zoom', true],
    // 开启 PWA
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    // 彩带背景
    //  [
    //   "ribbon",
    //   {
    //     size: 90,
    //     opacity: 0.8,
    //     zIndex: -1
    //   }
    // ],
    ['nest', {
      color: '139,56,240', // color of lines, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
      pointColor: '0,0,0', // color of points, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
      opacity: 0.5, // the opacity of line (0~1), default: 0.5.
      count: 99, // the number of lines, default: 99.
      zIndex: -1, // z-index property of the background, default: -1.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    ["flowchart"], // 支持流程图
    ["vuepress-plugin-smooth-scroll"], // 平滑滚动
    ["@vuepress/nprogress"], // 加载进度条
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
          content: "复制成功!"
      }
  }],
  // "vuepress-plugin-boxx",
    ["reading-progress"] // 阅读进度条
  ],
}