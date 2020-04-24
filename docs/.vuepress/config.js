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
  "themeConfig": {
    type: 'blog',
    "themePicker": false,
    "nav": [
      {
        "text": "时间",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "笔记",
        "link": "/categories/note/",
        "icon": "reco-home"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "Vue",
            "link": "https://cn.vuejs.org/v2/guide/",
            // "icon": "reco-github"
          }
        ]
      },
      {
        "text": "工具",
        "icon": "reco-message",
        "items": [
          {
            "text": "Vue",
            "link": "https://cn.vuejs.org/v2/guide/",
            // "icon": "reco-github"
          }
        ]
      },
      {
        "text": "链接",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      },
      "note": {
        "location": 4,
        "text": "笔记"
      },
    },
    "friendLink": [
      // {
      //   "title": "午后南杂",
      //   "desc": "Enjoy when you can, and endure when you must.",
      //   "email": "1156743527@qq.com",
      //   "link": "https://www.recoluan.com"
      // }
    ],
    "logo": "",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "LP",
    "authorAvatar": "/avatar.jpg",
    "record": "",
    "mode": "light",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    ["flowchart"], // 支持流程图
    ["vuepress-plugin-smooth-scroll"], // 平滑滚动
    ["@vuepress/nprogress"], // 加载进度条
    ["reading-progress"] // 阅读进度条
  ]
}