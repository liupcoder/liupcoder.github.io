const sidebar = {
  '/views/interview/': [
    {
      title: '每日一题',
      collapsable: true,
      children: [
        '',
        'ES6模板字符串',
        'Object.assign()',
        'ES6中this指向',
        'webpack构建后this指向',
        '变量声明',
        '伪数组转数组',
        'ES6类的理解',
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
  themeConfig: {
    type: "blog", //选择类型博客
    author: "Mr.L",
    authorAvatar: '/avatar.jpg',
    mode: 'light',
    modePicker: false,
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
    valineConfig: {
      appId: 'k3eGSbXaV6KFc8i6qe4ugLXo-MdYXbMMI', // your appId
      appKey: 'IzrQqHM5YEhiNGOCEuAmEitd', // your appKey
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
    ["flowchart"], // 支持流程图
    '@vuepress-reco/extract-code',
    ["vuepress-plugin-smooth-scroll"], // 平滑滚动
    ["@vuepress/nprogress"], // 加载进度条
    ["reading-progress"], // 阅读进度条
    ['@vuepress/medium-zoom',
      {
        selector: '.theme-reco-content img',
      }],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      }],
    ['nest', {
      color: '139,56,240', // color of lines, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
      pointColor: '0,0,0', // color of points, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
      opacity: 0.5, // the opacity of line (0~1), default: 0.5.
      count: 99, // the number of lines, default: 99.
      zIndex: -1, // z-index property of the background, default: -1.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
        content: "复制成功!"
      }
    }]
  ],
}