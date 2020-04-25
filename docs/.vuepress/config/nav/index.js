module.exports =  [
    { text: "时间线", link: "/timeline/", icon: "reco-date" },
    { text: '工具', 
    icon: 'reco-api',
    items: [
      { 
        text: '主题', items: [
          { text: '1.x', link: '/views/1.x/' },
          { text: '0.x', link: '/views/0.x/' }
        ],
      },
      {
        text: '插件', items: [
          { text: '官方插件', link: '/views/plugins/index.html' },
          { text: '插件广场', link: '/views/other/recommend.html' }
        ]
      }
    ]
  },
    { text: 'GitHub', link: 'https://github.com/vuepress-reco/vuepress-theme-reco', icon: 'reco-github'}
  ]
