const sidebar = {
  '/views/interview/': [
    {
      title: '每日一题',
      collapsable: true,
      children: [
        // 'IDEA前端配置',
      ]
    }
  ]
}

const nav = [
  { text: "时轴", link: "/timeline/", icon: "reco-date" },
  {
    text: '每日',
    icon: 'reco-other',
    link: '/views/interview/index.html'
  },
  {
    text: '文档',
    icon: 'reco-document',
    items: [
      { text: 'MDN', link: 'https://developer.mozilla.org/zh-CN/#' },
      { text: 'ES6', link: 'https://es6.ruanyifeng.com/' },
      { text: 'Vue', link: 'https://cn.vuejs.org/v2/guide/' },
      { text: 'Vuex', link: 'https://vuex.vuejs.org/zh/' },
      { text: 'AD Vue', link: 'https://www.antdv.com/docs/vue/introduce-cn/' },
      { text: 'Flutter', link: 'https://flutterchina.club/docs/' },
      { text: 'Cocos', link: 'https://docs.cocos.com/creator/manual/zh/' },
    ]
  },
  {
    text: '工具',
    icon: 'reco-blog',
    items: [
      {
        text: '在线快捷', items: [
          { text: '代码格式化', link: 'https://tool.oschina.net/codeformat/html' },
          { text: '编码转换', link: 'http://tool.chinaz.com/tools/unicode.aspx' },
          { text: 'PDF转换', link: 'https://smallpdf.com/cn/pdf-to-word' },
          { text: 'MD编辑器', link: 'https://www.zybuluo.com/mdeditor' },
          { text: 'MD表格生成', link: 'https://tableconvert.com/?output=text' },
          { text: 'HTML2MD', link: 'https://tool.lu/markdown/' },
          { text: '二维码生成', link: 'https://cli.im/' },
          { text: '图标库', link: ' https://www.iconfont.cn/' },
        ],
      },
      {
        text: '在线服务', items: [
          { text: 'BOOT CDN', link: 'https://www.bootcdn.cn/' },
          { text: '微信 CDN', link: 'https://qydev.weixin.qq.com/cdn/cdnjs.html' },
        ],
      },
    ]
  },
  // 
  { text: 'GitHub', link: 'https://github.com/liupcoder/', icon: 'reco-github' }
]




module.exports = {
  title: "LP's Blog",
  description: "一只iOS&前端程序猿",
  dest: "public",
  base: '/Blog/',
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
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类" // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签" // 默认 “标签”
      }
    },
    nav,
    sidebar
  },
  // markdown: {
  //   "lineNumbers": false
  // },
  plugins: [
    ["flowchart"], // 支持流程图
    ["vuepress-plugin-smooth-scroll"], // 平滑滚动
    ["@vuepress/nprogress"], // 加载进度条
    ["reading-progress"] // 阅读进度条
  ],
}