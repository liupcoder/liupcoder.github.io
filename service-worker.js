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
    "revision": "ab24587c000fc1ad96a45b0bebd0625f"
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
    "url": "assets/js/11.510b7f1e.js",
    "revision": "81f30d9078bb0825453123a4cae8fef6"
  },
  {
    "url": "assets/js/12.95d529ef.js",
    "revision": "e8f546fbaaac0a2a05b5361557a2f750"
  },
  {
    "url": "assets/js/13.1ca582df.js",
    "revision": "610c4a8a64e70608910ab80ecb0dd564"
  },
  {
    "url": "assets/js/14.64c6c1b0.js",
    "revision": "570cd7966976ea61bd174880dfee52e4"
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
    "url": "assets/js/25.90457a4d.js",
    "revision": "30d2048e8a38c2bfefca7dc2e715def5"
  },
  {
    "url": "assets/js/26.842f2dc1.js",
    "revision": "32e8a16e9024a0616eb969cf0ca3f77d"
  },
  {
    "url": "assets/js/27.c33373c5.js",
    "revision": "f18989adbb57379e7101ae0dfcba0f94"
  },
  {
    "url": "assets/js/28.b953c475.js",
    "revision": "97c2aeb7fd90d6c270de17c2c988ed07"
  },
  {
    "url": "assets/js/29.f541222c.js",
    "revision": "25877a02b7b37c50a60007e09771d2c2"
  },
  {
    "url": "assets/js/30.d2e191f1.js",
    "revision": "bbeb99fbbb1e4119a90594c3cc6f85bf"
  },
  {
    "url": "assets/js/31.ec7974bc.js",
    "revision": "e9d5191b109b6ed25fb0ad8b9a5fc209"
  },
  {
    "url": "assets/js/32.51b025f5.js",
    "revision": "109cda339f4fda024c87a649e5970470"
  },
  {
    "url": "assets/js/33.b2f7e68c.js",
    "revision": "bcad6d005bff37d717ea7862f8cfd1c2"
  },
  {
    "url": "assets/js/34.e99d1751.js",
    "revision": "c14929d5ab814cd5b23f1e1ce9acb007"
  },
  {
    "url": "assets/js/35.0a9b2002.js",
    "revision": "d8e493bb1027188f007a4c672b194ae9"
  },
  {
    "url": "assets/js/36.a1d6e3c9.js",
    "revision": "043be5beacda4d37e047f855d48d585b"
  },
  {
    "url": "assets/js/37.f487ac5c.js",
    "revision": "f964a8ca74e18f573cbd0ba583d591b8"
  },
  {
    "url": "assets/js/38.c7de8220.js",
    "revision": "6f462f364367fa3b830ad7dea402220b"
  },
  {
    "url": "assets/js/39.d2089020.js",
    "revision": "84d7d7eed8a3f2ad5f79a8055bfa4b67"
  },
  {
    "url": "assets/js/4.0947438e.js",
    "revision": "7a975c313e149a2ed32df5181d03a1f6"
  },
  {
    "url": "assets/js/40.e370ae99.js",
    "revision": "f40e589fbb7be411b417342eca8ec5d6"
  },
  {
    "url": "assets/js/41.9c8690e6.js",
    "revision": "db70a2b230e910b71a728a72480cfda7"
  },
  {
    "url": "assets/js/42.6e2c5498.js",
    "revision": "55d4e483c22ddd6a18e6567ecaef897a"
  },
  {
    "url": "assets/js/43.047ceb5b.js",
    "revision": "e4e4102cb8568abe854408041fde9307"
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
    "url": "assets/js/app.0e727c94.js",
    "revision": "c111f997e87920b1ffb2e08966f6efd0"
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
    "revision": "f5e5083f25b689933cfc0fac010b7fe5"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "92e8b2431bbd264ddb9e3d6eb16a68ad"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "5c35f1be3fe27d835172ee516bf8de9f"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "b743e3197310f967001f494cee41d494"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "f8b5c11a3e783a5e28ed50764e0b66cc"
  },
  {
    "url": "index.html",
    "revision": "ce0bc910674c39534e410d78157efc2e"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "d4b35dc7096e0d98af3aa26b855d41e5"
  },
  {
    "url": "tag/index.html",
    "revision": "ce9231b1d123c084e6ef23c14b4e5acf"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "620083aa69922e8b5824d41681df2642"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "a84dd4fbc4ed5de948377bff7bb3eb63"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "52d670a986695c843748b40926c6419d"
  },
  {
    "url": "tag/学习笔记/index.html",
    "revision": "e5f96760503135f1dca05b870584baa0"
  },
  {
    "url": "tag/学习笔记/page/2/index.html",
    "revision": "057dc51474da633d1af2e5f35aea6ca4"
  },
  {
    "url": "tag/正则表达式/index.html",
    "revision": "f42d8722abf21222219cf3cbd6c36a8d"
  },
  {
    "url": "tag/珠峰高级/index.html",
    "revision": "e6f38ad2c8aeb29d17c71821e6ae4c6a"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "fc1849a3272fdf65cf51a732e8591661"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "434d2943abc9f18c4ecf3c0c004a395f"
  },
  {
    "url": "timeline/index.html",
    "revision": "71af2ae41c1515d2686c1d832a097b71"
  },
  {
    "url": "views/designPattern/UML类图.html",
    "revision": "cf7a266f8965b3bb9ccde8dce2fa732e"
  },
  {
    "url": "views/designPattern/设计原则.html",
    "revision": "8a49da63b7e77fd39cc73f0be57efa16"
  },
  {
    "url": "views/designPattern/面向对象.html",
    "revision": "fa76e956cb5506b36e2724fbd55b5614"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "9f43782b15149c54285bc2a2bbe61057"
  },
  {
    "url": "views/interview/ES6中this指向.html",
    "revision": "a5e3b97961c78518b27145e7b795677f"
  },
  {
    "url": "views/interview/ES6模板字符串.html",
    "revision": "9c70b8994fda223da646325b75694078"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "d511adf77cc2708edad65e330fa8968d"
  },
  {
    "url": "views/interview/index.html",
    "revision": "0ab7e6117c337403e9306336e728be9a"
  },
  {
    "url": "views/interview/Object.assign().html",
    "revision": "9aded22064fe2c7ac9cde48b94ec2e38"
  },
  {
    "url": "views/interview/webpack构建后this指向.html",
    "revision": "16bc4e013b46d3215b4477b553848fd5"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "49eae0151010f6ae9df1f1527bece5ac"
  },
  {
    "url": "views/interview/变量声明.html",
    "revision": "d099101c1bb366e9213d9d6ffc44ba26"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "de183dd68817edb97826bcfdcf6201ee"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "f72866faa078078078b99604c5b955f1"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/TypeScript 基础语法.html",
    "revision": "e9df3773192321b260a87f0a6ade5673"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/使用 TypeScript 编写爬虫工具.html",
    "revision": "91c76722bfa4cdae25405c275041ddf4"
  },
  {
    "url": "views/Web/2020/前端JavaScript高级面试/ES6.html",
    "revision": "776b2dac703e54f7f3d5de2cdf611ace"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "6885b6d6a59d2b284c3f04fb317e17a5"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "e0cbb1cb54f5c7a8fdf5386f4b2dd092"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "b895bbb0944d8561ba9b08089a3c81ed"
  },
  {
    "url": "views/Web/2020/正则表达式.html",
    "revision": "857682642349b75f388063271fbd6fd8"
  },
  {
    "url": "views/Web/2020/珠峰高级/0603.html",
    "revision": "fa702903b61e20da0a74cd535532600d"
  },
  {
    "url": "views/Web/2020/珠峰高级/0605.html",
    "revision": "3dee40f52283d53c07746f8207680c32"
  },
  {
    "url": "views/Web/2020/珠峰高级/060701.html",
    "revision": "d74617db389a32ed29c5124a509cde8d"
  },
  {
    "url": "views/Web/2020/珠峰高级/060702.html",
    "revision": "6362e36a5eac2e6097743525999b9937"
  },
  {
    "url": "views/Web/2020/珠峰高级/0610.html",
    "revision": "8942fcc46005d4c5ce227ff538473ae3"
  },
  {
    "url": "views/Web/2020/珠峰高级/0612.html",
    "revision": "3129fa482023718ff0ccbc60e484f9cc"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第一周.html",
    "revision": "3e3ff08856a6e8cdd7e9b28aad8dc4f0"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第二周.html",
    "revision": "a5d1aaced8e16fd012fd189a92613189"
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
