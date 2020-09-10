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
    "revision": "52b0c93fb92988a3e1b97d77b68890d5"
  },
  {
    "url": "assets/css/0.styles.94b50677.css",
    "revision": "bbf109fc5be1e972cfaefccc12c61a2d"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.b3469939.js",
    "revision": "f71b178d5f5c384beb98574e9695fe30"
  },
  {
    "url": "assets/js/10.af82a5fb.js",
    "revision": "cf806721b0fc994e572104971b8f2675"
  },
  {
    "url": "assets/js/11.bb5b2292.js",
    "revision": "a607d7fbfc29a7841b4bd7132721fecc"
  },
  {
    "url": "assets/js/12.ecf4f9e4.js",
    "revision": "785223abf30e8dfd639adbb18e1bedbe"
  },
  {
    "url": "assets/js/13.32a595f7.js",
    "revision": "bdd6a52c288913f05b520bb5b5982846"
  },
  {
    "url": "assets/js/14.b45a2388.js",
    "revision": "577f9eb675fc2a278084992bbf2650d3"
  },
  {
    "url": "assets/js/15.22c26e6f.js",
    "revision": "47ae8d0a5ea1ae56891caa1475f02787"
  },
  {
    "url": "assets/js/16.f910e3c0.js",
    "revision": "14b7262ad7b21f778b4a6d0ee1b12b84"
  },
  {
    "url": "assets/js/17.f35ca403.js",
    "revision": "4e4c74e17cf475b20767f7c5e700a8fc"
  },
  {
    "url": "assets/js/18.2e9489d3.js",
    "revision": "eff9a656622a0634ba21169cbd8352ce"
  },
  {
    "url": "assets/js/19.c87fbb96.js",
    "revision": "da3f4d0f7e0c80b846dbff46e7eb76d7"
  },
  {
    "url": "assets/js/20.786c72af.js",
    "revision": "e7b3d30d9d23c00888a9f4f933ff2e31"
  },
  {
    "url": "assets/js/21.79cecf99.js",
    "revision": "e6177db4aac266240bb14bf5e82f6be0"
  },
  {
    "url": "assets/js/22.f3b2abc2.js",
    "revision": "b6fb81596bb6b8c11036cea0be45cca0"
  },
  {
    "url": "assets/js/23.a017e36c.js",
    "revision": "0ecc64be8d85e5f9fe0e545ab25cdaee"
  },
  {
    "url": "assets/js/24.95a4f8ae.js",
    "revision": "fe35d2f39eed57ae34fb73b0b0960e3c"
  },
  {
    "url": "assets/js/25.155cc0e8.js",
    "revision": "334f6c5ddb9af83b360b5c449beb5969"
  },
  {
    "url": "assets/js/26.5984c17f.js",
    "revision": "a07cff9f2b24ee9cd093d7e5c5bc981e"
  },
  {
    "url": "assets/js/27.3c8bb5b2.js",
    "revision": "d89be48b62090a6d746b77c41a56bda8"
  },
  {
    "url": "assets/js/28.761d7130.js",
    "revision": "7509a7fc052e39370cb192e58d7db16d"
  },
  {
    "url": "assets/js/29.2d6d576b.js",
    "revision": "dfd1f7bf6ed474ce1f8a84d9e7d974b4"
  },
  {
    "url": "assets/js/30.48b41eea.js",
    "revision": "420ddf3ca106709485be3bca16acde55"
  },
  {
    "url": "assets/js/31.8ceac68d.js",
    "revision": "97b15c0d531c80c4481e6cddbc804214"
  },
  {
    "url": "assets/js/32.f0b923a3.js",
    "revision": "902e200d2b35eeee504fb408c06fc207"
  },
  {
    "url": "assets/js/33.c06f6231.js",
    "revision": "3f5f25e0c801a6035795e4f4bbf35dca"
  },
  {
    "url": "assets/js/34.7c325e17.js",
    "revision": "2c6124854ba29502db3bc08dfba9ed1c"
  },
  {
    "url": "assets/js/35.162a8412.js",
    "revision": "8a91b78ce726379fe4985fc3f7b576d2"
  },
  {
    "url": "assets/js/36.6251251c.js",
    "revision": "dd5b545330a37625642746bbdd56ddea"
  },
  {
    "url": "assets/js/37.5ec1f62e.js",
    "revision": "7c33138ae17354dd631f7d5b65617b95"
  },
  {
    "url": "assets/js/38.d63ef575.js",
    "revision": "d6074bcfe8f509bd47e1482dc9ba0a17"
  },
  {
    "url": "assets/js/39.5c792d29.js",
    "revision": "1ec9a2512b0297d56bae5f6dd3176a53"
  },
  {
    "url": "assets/js/4.927c67dd.js",
    "revision": "4aca05c9aad925fb55fae134402f9e67"
  },
  {
    "url": "assets/js/40.945d9eab.js",
    "revision": "0833a42f118b52c7e175069b9d5bb0f1"
  },
  {
    "url": "assets/js/41.43003298.js",
    "revision": "c60e1257262e8444de785958e9936939"
  },
  {
    "url": "assets/js/42.60f6c716.js",
    "revision": "3920c4026d48b2b25a6cebe5edce685e"
  },
  {
    "url": "assets/js/43.1fcc47f2.js",
    "revision": "c4b74641dae4062944e72e034fd4102d"
  },
  {
    "url": "assets/js/44.c23d6c26.js",
    "revision": "a87378bdca868706835ff5029c776c0f"
  },
  {
    "url": "assets/js/45.40d8e092.js",
    "revision": "545cab94195d641241bbd16d44e1ba68"
  },
  {
    "url": "assets/js/46.71b5b130.js",
    "revision": "1647ee5cdbc9e68cb804c476e55c5b9a"
  },
  {
    "url": "assets/js/47.ca97f954.js",
    "revision": "0a1b6f4002f227225abb69f3c51fc3cf"
  },
  {
    "url": "assets/js/48.c14c07c5.js",
    "revision": "1c461cfb5fa0983b84d1e9462ab610e0"
  },
  {
    "url": "assets/js/49.13fc1dde.js",
    "revision": "69824026595523876180f582b9b96e76"
  },
  {
    "url": "assets/js/5.6a510cf5.js",
    "revision": "6c6177407644eb0b21ceb31ae86350d3"
  },
  {
    "url": "assets/js/50.c9e13686.js",
    "revision": "2de034ea8779b2f6043649c9cf2e1854"
  },
  {
    "url": "assets/js/6.6b1e452a.js",
    "revision": "0bf7441a59e609a824c59d1fa3305e3b"
  },
  {
    "url": "assets/js/7.a2375aeb.js",
    "revision": "f03646b996468deeb635b2f3efec5de0"
  },
  {
    "url": "assets/js/8.4bb88da5.js",
    "revision": "33c1c5c0bf85b8cb153a34fe4f934308"
  },
  {
    "url": "assets/js/9.7c101c0f.js",
    "revision": "953b537b705653765b2fce874d1935f8"
  },
  {
    "url": "assets/js/app.3b6273b0.js",
    "revision": "4a5fbb89d40681fdffd47059f469f87f"
  },
  {
    "url": "assets/js/vendors~flowchart.053a0673.js",
    "revision": "3603594fca99146517f08704b7522483"
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
    "revision": "cf9905e03370bc6ddbab6decb900924c"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "fe84fd4714e4c7db4d2603a2168d5c0e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "03a9c8f2dc0932223f8af994ab8c832e"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "d1f34cbaeea0c7abc07a4f5140feaf7c"
  },
  {
    "url": "categories/前端/page/3/index.html",
    "revision": "e695f0653a4fd847b17a88d8b50f1c91"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "b15a8813904750f681da7a8f168f36e6"
  },
  {
    "url": "index.html",
    "revision": "11a889085e9e5ecd13642c6f7b5396ff"
  },
  {
    "url": "tag/Cocos Creator/index.html",
    "revision": "0e46ec06c1b0c01f844141c86b1e6d90"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "49c4e5bc393f6dfaea07440ae6095312"
  },
  {
    "url": "tag/index.html",
    "revision": "d46c09478a81c100d263dd128b50a511"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "2fb8bc44f25b0749d930f8545d3639bb"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "b24c7a492e0e85e30d9ccf88278e53c2"
  },
  {
    "url": "tag/VSCode/index.html",
    "revision": "5d6a821155fad60cc7a2cd63c04772fb"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "286db0974b9fe714025ef94c592b39dd"
  },
  {
    "url": "tag/学习笔记/index.html",
    "revision": "e29711c7eada2a4079ac63396e4c3233"
  },
  {
    "url": "tag/学习笔记/page/2/index.html",
    "revision": "533b84121c07fc1ff4239b57d19bc258"
  },
  {
    "url": "tag/正则表达式/index.html",
    "revision": "c243852ed90e91f0c4c578559ed9884e"
  },
  {
    "url": "tag/珠峰高级/index.html",
    "revision": "2a7299ccbdb0fc7b2ea9afc2206a0ba8"
  },
  {
    "url": "tag/珠峰高级/page/2/index.html",
    "revision": "bf8a03e2f240ffadbdbdf42a5ec34529"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "2a1a4aff140e7395b2c116e2fef187da"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "6d3a01727378c25b444dd69cfa047bb8"
  },
  {
    "url": "timeline/index.html",
    "revision": "02e77d5dcfa81dbcddba2ade1d7330b1"
  },
  {
    "url": "views/designPattern/UML类图.html",
    "revision": "9e4966a05460cc4b2c64cc4e2d130de7"
  },
  {
    "url": "views/designPattern/设计原则.html",
    "revision": "4a425fdad9b45ebc063733d7e1103c13"
  },
  {
    "url": "views/designPattern/面向对象.html",
    "revision": "76dd7a0c03bc4ea2619c557617068d6b"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "d332dc17c3065a481a7b2a7259d959e4"
  },
  {
    "url": "views/interview/ES6中this指向.html",
    "revision": "fafcd665c4aefe7df6eeee682cc01201"
  },
  {
    "url": "views/interview/ES6模板字符串.html",
    "revision": "33f890d87dec1f2cf32ffa097324d1fe"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "d08909ba54be6b2ca6af69025354b1af"
  },
  {
    "url": "views/interview/index.html",
    "revision": "9dfba0e00a64768b231caa250257644b"
  },
  {
    "url": "views/interview/Object.assign().html",
    "revision": "26ee4933fba69baacfbcfdf73dd38d0b"
  },
  {
    "url": "views/interview/webpack构建后this指向.html",
    "revision": "316367726ca4fb8dd2180ec38484ca99"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "83c9df4a7b5c759387094234e9fd514a"
  },
  {
    "url": "views/interview/变量声明.html",
    "revision": "cc94f1ce411b5d2a05a458b254ff7629"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "9d89fde86ca90b971b5eee7b93bf82cf"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "367e8be8cfbac32844fa28d72f1d74d8"
  },
  {
    "url": "views/Web/2020/CocosCreator01.html",
    "revision": "62ba33239a7fb2add695cfe92e752976"
  },
  {
    "url": "views/Web/2020/SettingsSync.html",
    "revision": "eefae56ccf47eadbcb129f75c8f82d4c"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/TypeScript 基础语法.html",
    "revision": "495789b960ec7eb88646c2b35ff771a0"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/使用 TypeScript 编写爬虫工具.html",
    "revision": "bb92c0ac11168ab9f8e6872057e11740"
  },
  {
    "url": "views/Web/2020/前端JavaScript高级面试/ES6.html",
    "revision": "588dfd6b7d3ff6aeecf6fda63150b271"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "442b29ea2a99801c1528eb4de45a3864"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "adb98a43fab1ebcc8c364ed1a721790e"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "31f4cb2535b09faa11b13c79a6dd7bd1"
  },
  {
    "url": "views/Web/2020/正则表达式.html",
    "revision": "79a33fb650c28cb3a58e827a3ea328ae"
  },
  {
    "url": "views/Web/2020/珠峰高级/0603.html",
    "revision": "9bfb52b1156eb28bde183ab541ba9a4f"
  },
  {
    "url": "views/Web/2020/珠峰高级/0605.html",
    "revision": "b57e8fc384d0600ee7d50cbbc7099dfd"
  },
  {
    "url": "views/Web/2020/珠峰高级/0607-1.html",
    "revision": "f536e84f9378a7a367f7eeadac9be4c6"
  },
  {
    "url": "views/Web/2020/珠峰高级/0607-2.html",
    "revision": "44d31a502872938d5320d2436fc17388"
  },
  {
    "url": "views/Web/2020/珠峰高级/0610.html",
    "revision": "e334c5f0bdee516702c40a7e609d6bae"
  },
  {
    "url": "views/Web/2020/珠峰高级/0612.html",
    "revision": "c18e63985de9d0da949dc8b698259805"
  },
  {
    "url": "views/Web/2020/珠峰高级/0614.html",
    "revision": "8136eb0eadedbaeb5ca8c31a9bf272d2"
  },
  {
    "url": "views/Web/2020/珠峰高级/0621-1.html",
    "revision": "c22a50d459007675669b559592bcea91"
  },
  {
    "url": "views/Web/2020/珠峰高级/0621-2.html",
    "revision": "af6b3f614c37be30b0b49ccd14b5e5f7"
  },
  {
    "url": "views/Web/2020/珠峰高级/This处理及Call-Apply-Bind.html",
    "revision": "93cf479bb5c51c8f9e191ffa99f82654"
  },
  {
    "url": "views/Web/2020/珠峰高级/webpack/JS中的模块化编程思想.html",
    "revision": "3e2c90a438afb564786f27af8ce70a55"
  },
  {
    "url": "views/Web/2020/珠峰高级/webpack/webpack.html",
    "revision": "2d1168a1785a32dc994feac1668f8fae"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第一周.html",
    "revision": "e072f533348ff4328f367a0686d64ea7"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第二周.html",
    "revision": "35df41d8bbfc636f11cccfd64cce66d4"
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
