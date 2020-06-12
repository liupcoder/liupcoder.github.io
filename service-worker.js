/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4e8d72d9da1b4983a387c555beab6aa9"
  },
  {
    "url": "assets/css/0.styles.132fd356.css",
    "revision": "e6cef19af8ffe5938493f09d30cfdfcf"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.6a87662b.js",
    "revision": "990034e06b9480b59c74c8234cd2740c"
  },
  {
    "url": "assets/js/10.02b17500.js",
    "revision": "af9db4f5588e135f9da4a2f8fc3eb2ef"
  },
  {
    "url": "assets/js/11.63d887df.js",
    "revision": "109c717bbd6c1192db782b51ef5f99b5"
  },
  {
    "url": "assets/js/12.95d529ef.js",
    "revision": "e8f546fbaaac0a2a05b5361557a2f750"
  },
  {
    "url": "assets/js/13.88f9c30a.js",
    "revision": "c9d9ffcf470a3053dfe27e412e3a46a4"
  },
  {
    "url": "assets/js/14.00d7b5b7.js",
    "revision": "3b4e1be893e03af9c9be4e36b7598eee"
  },
  {
    "url": "assets/js/15.3b676f61.js",
    "revision": "bfe90672e31e19e435ca7fa6ba3177d5"
  },
  {
    "url": "assets/js/16.6b427b7d.js",
    "revision": "18d0328d4c2a8fca7dacf40da6729f18"
  },
  {
    "url": "assets/js/17.bf8a0397.js",
    "revision": "9166fdc32be744598470bcd8219fee84"
  },
  {
    "url": "assets/js/18.c67f2275.js",
    "revision": "bbacd83da1283169aace900a2148efb0"
  },
  {
    "url": "assets/js/19.32768cf5.js",
    "revision": "31854313aebb5db742eb13a86ffd568c"
  },
  {
    "url": "assets/js/20.a14a098e.js",
    "revision": "ad192dd715a16231dc67b51b54a17f4a"
  },
  {
    "url": "assets/js/21.b2ba990b.js",
    "revision": "418f00ac301968e521b0fd1cf9980077"
  },
  {
    "url": "assets/js/22.24ff3bb8.js",
    "revision": "1b764f1a1be2a435a95fb0d05ad223d3"
  },
  {
    "url": "assets/js/23.9f1c1b89.js",
    "revision": "a5ffafbaae725cbc55cc717e89e3f6f5"
  },
  {
    "url": "assets/js/24.896813ff.js",
    "revision": "f6f2db92ba8987ddcb4a3a044606a2e1"
  },
  {
    "url": "assets/js/25.7a3947ce.js",
    "revision": "1890da55e375fc3471d925731067d838"
  },
  {
    "url": "assets/js/26.bd84521f.js",
    "revision": "e1317a2fcaa91fc3dc0d978e861ad566"
  },
  {
    "url": "assets/js/27.0ed2f243.js",
    "revision": "5023d80192f81d8d4a6f6ea0ffb97522"
  },
  {
    "url": "assets/js/28.5b97d9cd.js",
    "revision": "d8f2f2dd9f55efb9de2bd77ea57507bf"
  },
  {
    "url": "assets/js/29.45aeaecd.js",
    "revision": "fbfce3cb80031c913f1561c0d983f977"
  },
  {
    "url": "assets/js/30.a9b8c374.js",
    "revision": "bf956f827ef7c1070a3c81e2d75b7492"
  },
  {
    "url": "assets/js/31.94a5971a.js",
    "revision": "2b5ab27a08bd8e42ac4bd73248a9f2ee"
  },
  {
    "url": "assets/js/32.55c0e329.js",
    "revision": "f2f31afbb87358cf8419cde7aaba8ba5"
  },
  {
    "url": "assets/js/33.460d943b.js",
    "revision": "a65dafb6a025eeaea6bd6c16fcb05bdf"
  },
  {
    "url": "assets/js/34.cf207e9e.js",
    "revision": "dc869b2bb55618e66ba3aba266d0b832"
  },
  {
    "url": "assets/js/35.944d7b14.js",
    "revision": "66d7f6c5dbf728390d30e457576e8095"
  },
  {
    "url": "assets/js/36.f49047d6.js",
    "revision": "32bd8775dce166e1d3797b4630e68efa"
  },
  {
    "url": "assets/js/37.9471ecee.js",
    "revision": "e09017cea6ee6d1938a6921e527a9d90"
  },
  {
    "url": "assets/js/38.19c7575f.js",
    "revision": "2912d43ca1b11559391c72a96f296e84"
  },
  {
    "url": "assets/js/39.4cac337c.js",
    "revision": "c58586276260c5c2b8a1ab50e00bddfd"
  },
  {
    "url": "assets/js/4.0947438e.js",
    "revision": "7a975c313e149a2ed32df5181d03a1f6"
  },
  {
    "url": "assets/js/40.cda54579.js",
    "revision": "16faf8e82ef574658945b8092beb7564"
  },
  {
    "url": "assets/js/5.593a7055.js",
    "revision": "ae80f70013f8fe36f8f9b5176295f116"
  },
  {
    "url": "assets/js/6.abb14bed.js",
    "revision": "0a4d3f5ebc725e259fcfd848ca797b41"
  },
  {
    "url": "assets/js/7.c1e95d6e.js",
    "revision": "b378703ab08139b388754aba242596b2"
  },
  {
    "url": "assets/js/8.98bf32ae.js",
    "revision": "175a5501b8db5cf0c4e3a736060e49a5"
  },
  {
    "url": "assets/js/9.9582f296.js",
    "revision": "59094ae81e76d06deeb03ca9de583961"
  },
  {
    "url": "assets/js/app.4dbfe264.js",
    "revision": "9ec5ad7bf931d0cda541b75018630166"
  },
  {
    "url": "assets/js/vendors~flowchart.7b8e9f18.js",
    "revision": "a269b54028221ba95b6f4d92d77df9e8"
  },
  {
    "url": "avatar.jpg",
    "revision": "3a02680c114a0e8df7b2b383e5b50b0f"
  },
  {
    "url": "bg.jpg",
    "revision": "1f73edc7e8ad6de9d43aa32c90cc5907"
  },
  {
    "url": "bg.png",
    "revision": "4246ec5db9f8f8475536e3bd9297668c"
  },
  {
    "url": "categories/index.html",
    "revision": "f85bb031b7b548097ae5b474375a0a3b"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "91b4301f0be6df76a9d8d1060e4fed19"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1c62407a8079cc0cb330a7279c7c99a3"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "d4d70c765d4440bed2d6f17a331c01e4"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "f2f95a5e1c8825709f10796ec9544208"
  },
  {
    "url": "index.html",
    "revision": "414332cc3438d624c54d89275dc76508"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "6d77b70b78f450b00f943537c4659922"
  },
  {
    "url": "tag/index.html",
    "revision": "1ca9ce812ef4b244b631e3de331027f5"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "9d329b417133bb0d9798f9317ccc2e57"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "5809174c99449701ff95efa2cad98f90"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "87bca8683f3feef07e688092782844ac"
  },
  {
    "url": "tag/学习笔记/index.html",
    "revision": "e645394aae3410f9049e9fa151af1cae"
  },
  {
    "url": "tag/正则表达式/index.html",
    "revision": "f0da54b381786bd00ce16bb05cf53c10"
  },
  {
    "url": "tag/珠峰高级/index.html",
    "revision": "143795d1b7b8ee09deaba04541cbc681"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "9f16a7bb4dadf9aaac93f9f985d7ab3c"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "013fcf1958b83df9ff5143e70eba2d87"
  },
  {
    "url": "timeline/index.html",
    "revision": "7157147fc9d392e290e7be8c6713914e"
  },
  {
    "url": "views/designPattern/UML类图.html",
    "revision": "2382dc75cc33c77ea0b824262aff3eb8"
  },
  {
    "url": "views/designPattern/设计原则.html",
    "revision": "cd473cc03d972a1a5a089cf47b5e2ebf"
  },
  {
    "url": "views/designPattern/面向对象.html",
    "revision": "84a62f59697be1cb9c8903b359b08141"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "fc94853ad15a1b19703978987e2a0a46"
  },
  {
    "url": "views/interview/ES6中this指向.html",
    "revision": "37ca5fba40e7667d6fe876a9153b4e88"
  },
  {
    "url": "views/interview/ES6模板字符串.html",
    "revision": "33111f18e46c12d34b4583b57f8860aa"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "d9fdae2607cc98fdbad62151bdc4da5f"
  },
  {
    "url": "views/interview/index.html",
    "revision": "ad0cceec13ad7abea1da4585a6a548bc"
  },
  {
    "url": "views/interview/Object.assign().html",
    "revision": "6eb086ad7e34f79ac9e460162d205e68"
  },
  {
    "url": "views/interview/webpack构建后this指向.html",
    "revision": "87ad5834c6d1fa9cd180bb4b3a993d6f"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "760de3b3411d365330de2aa77b275f65"
  },
  {
    "url": "views/interview/变量声明.html",
    "revision": "2df9787b40ffb1e3356c93c992f902b0"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "43b7d641f8cb0d15f58e077beee29813"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "c8f4ef8151772dfea538196b73fa8a1a"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/TypeScript 基础语法.html",
    "revision": "72a429e15caa7e994ae8d2a7d5f6cf9a"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/使用 TypeScript 编写爬虫工具.html",
    "revision": "f60e186d1554baa06af597e7e22af676"
  },
  {
    "url": "views/Web/2020/前端JavaScript高级面试/ES6.html",
    "revision": "edfa6834dcb39a57c665d4056a5006a1"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "f32cd7004ff14116d425bb010b3f51ca"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "094a6dad31045ee62cc74965fab896d9"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "5f31f0e80eb961783ccf8a0e20e1901e"
  },
  {
    "url": "views/Web/2020/正则表达式.html",
    "revision": "e526ab3573da386e6db5a10c8067f3b8"
  },
  {
    "url": "views/Web/2020/珠峰高级/0603.html",
    "revision": "88041c748b0e279a6f1b60a5bfd64efb"
  },
  {
    "url": "views/Web/2020/珠峰高级/0605.html",
    "revision": "ceeb9f512674ec2887052dfd652a4052"
  },
  {
    "url": "views/Web/2020/珠峰高级/060701.html",
    "revision": "74f85567fb7314b22fd9de8c93e33f06"
  },
  {
    "url": "views/Web/2020/珠峰高级/060702.html",
    "revision": "2614ad3403325d845f61acc9ce1a98a5"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第一周.html",
    "revision": "c6808a70a3c3cc82d6d664e3e628d40c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
