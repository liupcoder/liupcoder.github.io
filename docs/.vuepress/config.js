const sidebar = require('./config/sidebar/index')
const nav = require('./config/nav/index')

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
  markdown: {
    "lineNumbers": true
  },
  plugins: [
    ["flowchart"], // 支持流程图
    ["vuepress-plugin-smooth-scroll"], // 平滑滚动
    ["@vuepress/nprogress"], // 加载进度条
    ["reading-progress"] // 阅读进度条
  ],
}