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
    "revision": "d77925077a7b07d4697e23aaf564429f"
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
    "url": "assets/js/11.691ef866.js",
    "revision": "326d105eb8c61b87307d7557bfd17977"
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
    "url": "assets/js/14.aba7075d.js",
    "revision": "f7e99089976287f3e961dc4ee3881761"
  },
  {
    "url": "assets/js/15.7a7a6483.js",
    "revision": "1f884160c211a1dcdcf854f443817393"
  },
  {
    "url": "assets/js/16.77cc4c17.js",
    "revision": "77f3d55569a421fc5aaec513dbdb1c54"
  },
  {
    "url": "assets/js/17.118c4a1a.js",
    "revision": "579ea9490d4145e466de743774792399"
  },
  {
    "url": "assets/js/18.6dd3a7df.js",
    "revision": "6e1e2ddb9be07c76df839dd7280f3ec8"
  },
  {
    "url": "assets/js/19.311d3570.js",
    "revision": "70696e2ee616e952eba76be752944d17"
  },
  {
    "url": "assets/js/20.c14b2b61.js",
    "revision": "966cdb446711d85389c18cc7fd8f239e"
  },
  {
    "url": "assets/js/21.599b9ec4.js",
    "revision": "cad7ec23abd415dfd0fd1c79c95b34d7"
  },
  {
    "url": "assets/js/22.42094165.js",
    "revision": "9cf6213831161c271854055fd49a0cd4"
  },
  {
    "url": "assets/js/23.8c34f0b4.js",
    "revision": "42734e2978718a7473d28617a585e9a8"
  },
  {
    "url": "assets/js/24.82cb658a.js",
    "revision": "8be64dc23fc36c2be8c48d911416d15f"
  },
  {
    "url": "assets/js/25.7c88148a.js",
    "revision": "d6a7bb1b0e0635c6343ad0f7505ee3d7"
  },
  {
    "url": "assets/js/26.deb380ca.js",
    "revision": "0e9c545c1b4272878cf0e05e62ad7a85"
  },
  {
    "url": "assets/js/27.db555a55.js",
    "revision": "9fd6781c6c4b89ecefd2ab14b3d03888"
  },
  {
    "url": "assets/js/28.2c2ce5db.js",
    "revision": "4db7d4bdeb677b5c77cd27ace55c5924"
  },
  {
    "url": "assets/js/29.dc04db51.js",
    "revision": "6518b21ecb51f47375bd16120d4300c0"
  },
  {
    "url": "assets/js/30.d3a4a9a7.js",
    "revision": "a4ff384de84027960651dede55458511"
  },
  {
    "url": "assets/js/31.cbb47c93.js",
    "revision": "f8860b4b17d65709e7a05ec7884b77e6"
  },
  {
    "url": "assets/js/32.5c769b57.js",
    "revision": "c3c6eb028334ce0a9b8d431a6f110dd4"
  },
  {
    "url": "assets/js/33.213bd753.js",
    "revision": "4fa0d8c8ea5a03a4bf91df0371574ca2"
  },
  {
    "url": "assets/js/34.6818b7f1.js",
    "revision": "f13da116014c4274d17eff0f840167de"
  },
  {
    "url": "assets/js/35.53916e61.js",
    "revision": "8962caeda9982b0564b1bae944018ec1"
  },
  {
    "url": "assets/js/36.8352550d.js",
    "revision": "b358fd09a5d5674608f9046f7571752c"
  },
  {
    "url": "assets/js/37.01aacf65.js",
    "revision": "d2c1d9c2bc332ed588e961d41c06f56b"
  },
  {
    "url": "assets/js/38.29d50fc9.js",
    "revision": "3e32d3610ef8c382a6f1b4b6f7c2cce9"
  },
  {
    "url": "assets/js/39.78b0b4f8.js",
    "revision": "267467672e6787a9d3abadf165d6a06a"
  },
  {
    "url": "assets/js/4.0947438e.js",
    "revision": "7a975c313e149a2ed32df5181d03a1f6"
  },
  {
    "url": "assets/js/40.c85b277b.js",
    "revision": "53dfafb39d5ed90e49f13230e6cd6d6c"
  },
  {
    "url": "assets/js/41.254a8b9c.js",
    "revision": "f12ae956fd767b57ee9bb2a94df605e8"
  },
  {
    "url": "assets/js/42.2d9f04e7.js",
    "revision": "88deb37e1d19a9e1795e045371d7f836"
  },
  {
    "url": "assets/js/43.4074b5ee.js",
    "revision": "e573aad30bee282d014ea1c12716fa33"
  },
  {
    "url": "assets/js/44.0d259c15.js",
    "revision": "a2db6817ebeb5a89409bfbdebc78cda2"
  },
  {
    "url": "assets/js/45.77e787bc.js",
    "revision": "44590700a3be1fb58411237b729ec266"
  },
  {
    "url": "assets/js/46.bf0b3246.js",
    "revision": "3e4cabe5ea721e2c43ba76f62f16fc6c"
  },
  {
    "url": "assets/js/47.5b7feea2.js",
    "revision": "85f1d56e5273a46025ecdef8c9b06ab0"
  },
  {
    "url": "assets/js/48.94964072.js",
    "revision": "e3ef5ca7b2aa1314840c39bc6f6d6b91"
  },
  {
    "url": "assets/js/49.3467bdc8.js",
    "revision": "e48c137bfb0614de77508ebc05a36b39"
  },
  {
    "url": "assets/js/5.593a7055.js",
    "revision": "ae80f70013f8fe36f8f9b5176295f116"
  },
  {
    "url": "assets/js/50.dc6ac80c.js",
    "revision": "5cae28be2ae7e631e46923b98fd0347e"
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
    "url": "assets/js/app.b9e58131.js",
    "revision": "bde0aef60964af5f8eb6505b6509eaa2"
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
    "revision": "172756e4381755f95ba552acf945b0ad"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "fdab917064b48d434bf70eb673a53602"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "3ed35fd5f4af019c6a946b85a8c7bedf"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "1bb466e3e1094494fe88e21c868ee2ea"
  },
  {
    "url": "categories/前端/page/3/index.html",
    "revision": "0e9ee734d5f375137b0fb0d18cb83c29"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "0f9e724e5019fcf66d2b90ce69fccb75"
  },
  {
    "url": "index.html",
    "revision": "96007c7cd2c859cda4bd8233d12d8722"
  },
  {
    "url": "tag/Cocos Creator/index.html",
    "revision": "bf0eff65bb398b057be7812411e52983"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "58b58de0bf5c3e0b05ff3db312b8a497"
  },
  {
    "url": "tag/index.html",
    "revision": "e09e8b7073cc39a75454defac661b4d0"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "d02b3af412b3c8425311b1463f1a4b2c"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "8fabe0f444fb142ead16952c5fb09023"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "02237aa4db355f97ee1d11a70e1b7a77"
  },
  {
    "url": "tag/学习笔记/index.html",
    "revision": "aa9c1f2b053f8e61693033ee49ad5fa2"
  },
  {
    "url": "tag/学习笔记/page/2/index.html",
    "revision": "2a842beeb4a7ece0c55cc591009e7a34"
  },
  {
    "url": "tag/正则表达式/index.html",
    "revision": "102d11378f4248aef07481e3545124e9"
  },
  {
    "url": "tag/珠峰高级/index.html",
    "revision": "0a0973852f4671fa0b4d97ceb0d2c839"
  },
  {
    "url": "tag/珠峰高级/page/2/index.html",
    "revision": "dd4dfc414ddc8a6e00bb6f7efa345fe6"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "ec4dfe7591ec4fa32f7b72f88910ea52"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "842ae5b765d493f90008fc7e8f42168a"
  },
  {
    "url": "timeline/index.html",
    "revision": "8833c433e4d7cb7e15f273a846b6d034"
  },
  {
    "url": "views/designPattern/UML类图.html",
    "revision": "6fd275f36c4f1ebd99d2d4478c2a6485"
  },
  {
    "url": "views/designPattern/设计原则.html",
    "revision": "7d61400ce7802ae651737830a8d942eb"
  },
  {
    "url": "views/designPattern/面向对象.html",
    "revision": "a87808a048f589cffa2b41e35b345275"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "acb3b8ddadee2553edb94e524e9d5d1d"
  },
  {
    "url": "views/interview/ES6中this指向.html",
    "revision": "d5f6336a8dc19cc28d30e34d5128abb4"
  },
  {
    "url": "views/interview/ES6模板字符串.html",
    "revision": "c5c7f3d1dc0f9d456f571b5f817eec14"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "ece4437954abc9184807171ec28a6be6"
  },
  {
    "url": "views/interview/index.html",
    "revision": "31318bb067eb84ed1c58f1927a04d594"
  },
  {
    "url": "views/interview/Object.assign().html",
    "revision": "37e598848fac0ea71377014ab9e8bbf0"
  },
  {
    "url": "views/interview/webpack构建后this指向.html",
    "revision": "c40cacf93dfcfef051aa41e8f85b5716"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "bf243bf21b7d77f759b10a48f022ee4e"
  },
  {
    "url": "views/interview/变量声明.html",
    "revision": "06f691edfbb19ffb432eb8b20825a85a"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "20c0c380b5909bc4ab0a9ddc6deb2f34"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "66c50983d4582fe2929369d92d94b568"
  },
  {
    "url": "views/Web/2020/CocosCreator01.html",
    "revision": "29d186ad11e19329dd12865aa8fb686e"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/TypeScript 基础语法.html",
    "revision": "b40c14738f170165f90e53ff5f6b2f25"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/使用 TypeScript 编写爬虫工具.html",
    "revision": "231116bce8b931ae81d39659d510234d"
  },
  {
    "url": "views/Web/2020/前端JavaScript高级面试/ES6.html",
    "revision": "214067ac124d01d25a6261886e7f6091"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "fef350a5780615443f3334e18a2fc557"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "fe98d4c610b39bdaae3a6c2e9b6ff7f9"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "3fa9f750f62e8499749d81bc5b711822"
  },
  {
    "url": "views/Web/2020/正则表达式.html",
    "revision": "e96a70d1d3b89efa4d68f2d74fd88bb0"
  },
  {
    "url": "views/Web/2020/珠峰高级/0603.html",
    "revision": "4cc59982a3483c902d1a823620fd55a6"
  },
  {
    "url": "views/Web/2020/珠峰高级/0605.html",
    "revision": "850f69f848c36e970cf954d6ecc637da"
  },
  {
    "url": "views/Web/2020/珠峰高级/0607-1.html",
    "revision": "017b7e53f51eee9a85803ed0f3db2fec"
  },
  {
    "url": "views/Web/2020/珠峰高级/0607-2.html",
    "revision": "65bcec1a6d7be82c2e4c713aeef9e61b"
  },
  {
    "url": "views/Web/2020/珠峰高级/0610.html",
    "revision": "e871638ec0d8287ddacd2b1aa637dc3d"
  },
  {
    "url": "views/Web/2020/珠峰高级/0612.html",
    "revision": "9f206bb8d000f344b45ad3453e1a612f"
  },
  {
    "url": "views/Web/2020/珠峰高级/0614.html",
    "revision": "8fac41ec60ef3ae0900f8a82ea0f1055"
  },
  {
    "url": "views/Web/2020/珠峰高级/0621-1.html",
    "revision": "c37d97bcb17b071e49784ca95f752898"
  },
  {
    "url": "views/Web/2020/珠峰高级/0621-2.html",
    "revision": "b76694cb7119028822d9039bda76d184"
  },
  {
    "url": "views/Web/2020/珠峰高级/This处理及Call-Apply-Bind.html",
    "revision": "508afc5f2d99983241d4df775e6f6ccb"
  },
  {
    "url": "views/Web/2020/珠峰高级/webpack/JS中的模块化编程思想.html",
    "revision": "7c3dfce3e68408c4dc0aea9773c55fc1"
  },
  {
    "url": "views/Web/2020/珠峰高级/webpack/webpack.html",
    "revision": "e20c5d055623173d8b9a4326f33e8072"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第一周.html",
    "revision": "691481e1bc4f7a8ae0e9974aba09ef81"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第二周.html",
    "revision": "3f8be9c5931f3ed2827b3df5e163fc27"
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
