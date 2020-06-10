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
    "revision": "d90db7655645f7441fa9d5490643b803"
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
    "url": "assets/js/11.ed72e6ee.js",
    "revision": "bd2199721b4125e593cd862a9403f3df"
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
    "url": "assets/js/20.ef2c2900.js",
    "revision": "c836c421fc57119798b1bf39ca99948b"
  },
  {
    "url": "assets/js/21.ce695428.js",
    "revision": "c8febc88c69e2bf1fe896b4810e70952"
  },
  {
    "url": "assets/js/22.27229834.js",
    "revision": "92daa1dd47af36ff8b89669008a3401a"
  },
  {
    "url": "assets/js/23.2564d8e1.js",
    "revision": "ef5a44d636a71bbf00d004e9067e5fa3"
  },
  {
    "url": "assets/js/24.bc64863b.js",
    "revision": "3f0d55901bec3848b86ade6daf212e6e"
  },
  {
    "url": "assets/js/25.66b9fd7f.js",
    "revision": "ce8a0b8b54ec81d58d81b6cf2d6f82cc"
  },
  {
    "url": "assets/js/26.71d52a5f.js",
    "revision": "06237a886029818ee65823945b6cf4b7"
  },
  {
    "url": "assets/js/27.d5a12925.js",
    "revision": "75f63e726fc6d11d83121a8f126c65bc"
  },
  {
    "url": "assets/js/28.095ca9e7.js",
    "revision": "c6dba1b303e41e3c0b549aaa6762c392"
  },
  {
    "url": "assets/js/29.45b19dda.js",
    "revision": "b2e4c31d4f88ceb3d1ac9a495dd42377"
  },
  {
    "url": "assets/js/30.11ebaa21.js",
    "revision": "44fca77c87ade79df6c7502533c01ede"
  },
  {
    "url": "assets/js/31.61586658.js",
    "revision": "42415f7f35d51f213fbed9e711d8148e"
  },
  {
    "url": "assets/js/32.bbbe4008.js",
    "revision": "59d779d47ff462ba6061443daad2f251"
  },
  {
    "url": "assets/js/33.64c7dd9f.js",
    "revision": "e39d11a2ac1fbed9896be9f89fdac811"
  },
  {
    "url": "assets/js/34.5ccd8736.js",
    "revision": "9d17f8a3a5b7aec3b706e8d03b7c4512"
  },
  {
    "url": "assets/js/35.11ba2fb3.js",
    "revision": "a604e1c8872e21a87afe6e08d8d321e1"
  },
  {
    "url": "assets/js/36.6864b4bd.js",
    "revision": "d61d0af4ff9b7bb0ce07150e02137eb1"
  },
  {
    "url": "assets/js/37.df305d2d.js",
    "revision": "762d6f7483bf16deafe6aacc663b700c"
  },
  {
    "url": "assets/js/38.858f2b07.js",
    "revision": "1d4dceaf00703563bb93f37603ff3b4f"
  },
  {
    "url": "assets/js/39.eb0fb528.js",
    "revision": "f2b5a7ed9fbcb7511c9bd00e0cf1fc55"
  },
  {
    "url": "assets/js/4.0947438e.js",
    "revision": "7a975c313e149a2ed32df5181d03a1f6"
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
    "url": "assets/js/app.11044b6b.js",
    "revision": "01a97fbc8a6fbbe32299d3936d46c01c"
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
    "revision": "8ce7b0d0981ebae012025c9f244778ee"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "f205fa7659f78fa084f2dd0c6eff16d1"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e7b46bcc4993a2c939396bc8e2048667"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "c5004bc6efe45b5be6cefb8a1943542e"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "8eaa6edf3ef26ceaa1e74654b71d08d8"
  },
  {
    "url": "index.html",
    "revision": "8355b190cb629e2dbf295cec2e85b57c"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "6f3b50daa6f6a6105f7db409ce4b6917"
  },
  {
    "url": "tag/index.html",
    "revision": "16f67023ca71a63ad1d9b24575234345"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "b8f46b1d7c45685d8a9216f76c822dc2"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "1b838f79d37312066c177afbfa61fcd4"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "660f62ef9d5297d019b7e81ad28478bd"
  },
  {
    "url": "tag/学习笔记/index.html",
    "revision": "0583fbbf603b5d2dc18cbcc4f010d333"
  },
  {
    "url": "tag/珠峰高级/index.html",
    "revision": "ce854008e5243288b6730203ad121cb7"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "6db4cb1cb2813e44cd929106a3fe3bc4"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "30b2d362b1131e17261e0b812dd6a420"
  },
  {
    "url": "timeline/index.html",
    "revision": "06231c3455dce648db053394baaf26c9"
  },
  {
    "url": "views/designPattern/UML类图.html",
    "revision": "9ada56750e71fe3b747897590573eacd"
  },
  {
    "url": "views/designPattern/设计原则.html",
    "revision": "d1df96e65b4887c758e365bc6a06b3b1"
  },
  {
    "url": "views/designPattern/面向对象.html",
    "revision": "de15c12b81751178772a91dc87145c89"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "0b2a8223dd957daec4088e0479ffec2c"
  },
  {
    "url": "views/interview/ES6中this指向.html",
    "revision": "f81ff37cb2dc10dc99624358e2213368"
  },
  {
    "url": "views/interview/ES6模板字符串.html",
    "revision": "e2465f6018088fb17fd168b7b372719a"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "6f3f52f6a809bd276dfe957793a8983d"
  },
  {
    "url": "views/interview/index.html",
    "revision": "4b2da674f1467ab0812cd8a98f996ca3"
  },
  {
    "url": "views/interview/Object.assign().html",
    "revision": "e3be2a155c8bae7edb00a1a6f96d7933"
  },
  {
    "url": "views/interview/webpack构建后this指向.html",
    "revision": "404fa3bda64e2fee35b3f763289f6a0f"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "925cf17c561784f7d475507eadcd4f6d"
  },
  {
    "url": "views/interview/变量声明.html",
    "revision": "8e80a4d982b352cf2b40a723a0f4c90c"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "72d814cd9da22488f620c9ca94a24031"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "8489f92814e3ba605965bf6987fe888d"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/TypeScript 基础语法.html",
    "revision": "fb9bb4c6fc7cd8006c07171eb44c219e"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/使用 TypeScript 编写爬虫工具.html",
    "revision": "90f467358d487a54a8fc51e654084aa6"
  },
  {
    "url": "views/Web/2020/前端JavaScript高级面试/ES6.html",
    "revision": "bbecbaf4ab22199b6a952b93eb239e4e"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "fdac9e9a8c0a69d4e4da312dfa5beb9a"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "9461770a656abf09c42590c092a4e47c"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "366010f0a53ff8c46f44cd256a27c4b2"
  },
  {
    "url": "views/Web/2020/珠峰高级/0603.html",
    "revision": "4a0f6527666b5c3cb13ddbad43975727"
  },
  {
    "url": "views/Web/2020/珠峰高级/0605.html",
    "revision": "9b16ac7ec1e4b8b3ef1b087fa613c0d4"
  },
  {
    "url": "views/Web/2020/珠峰高级/060701.html",
    "revision": "89bd5cee30bb36d3d5a280bea33dddbd"
  },
  {
    "url": "views/Web/2020/珠峰高级/060702.html",
    "revision": "bd2ae91e20ca57006b83f11e3ef13893"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第一周.html",
    "revision": "d972fc93da7cbb0bcb36d44ba66b093d"
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
