const path = require('path')
const themeConfig = require('./config/theme/')
module.exports = {
  "title": "LP's Blog",
  "description": "一只iOS&前端程序猿",
  "dest": "public",
  "base": '/Blog/',
  "head": [
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
  "theme": "reco",
  themeConfig,
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    ["flowchart"], // 支持流程图
    ["vuepress-plugin-smooth-scroll"], // 平滑滚动
    ["@vuepress/nprogress"], // 加载进度条
    ["reading-progress"] // 阅读进度条
  ],
  
}