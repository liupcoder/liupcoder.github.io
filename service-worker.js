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
    "revision": "47d026212094658edbfabc12e45ca7cb"
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
    "url": "assets/js/15.c8685d24.js",
    "revision": "71f28c87ff93a98f58de4ac5237e2e6c"
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
    "url": "assets/js/app.3d3a2c7b.js",
    "revision": "2bd2d39ea02150921ce0487b8f8def06"
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
    "revision": "a1349627e576004225c890b77c4e95cc"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "93addacdd0b18d6cb6680d026766d44a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "bddfd6a911786b83da9fb783fa37e4cf"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "a9e684edf455268e4bdb9fd05181a355"
  },
  {
    "url": "categories/前端/page/3/index.html",
    "revision": "f8d6cfd8fc6db90c7752ff04f4a95190"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "c7fa23683e5674fa3f8a247a92527dbc"
  },
  {
    "url": "index.html",
    "revision": "b699792865fb4910813d228dd5e5e217"
  },
  {
    "url": "tag/Cocos Creator/index.html",
    "revision": "b60f2fbc217aceeccd906c94f709dc4a"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "8cb15d52ee19a4e942178315d8476b0e"
  },
  {
    "url": "tag/index.html",
    "revision": "13675e169f12d9be26e0417b5d1cd23d"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "1271def7ba5a9b2399a029f2b015befc"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "0b78c835dad08b64adf641108ccb313c"
  },
  {
    "url": "tag/VSCode/index.html",
    "revision": "a7a33767e712e254886fd863377c5226"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "13b49d6576c47f1cd3ee243e3f99a7c7"
  },
  {
    "url": "tag/学习笔记/index.html",
    "revision": "939f5d4528fb81849ba014c772b81fa2"
  },
  {
    "url": "tag/学习笔记/page/2/index.html",
    "revision": "1b3923a9c9f39f2b16e5a0eff8bb994e"
  },
  {
    "url": "tag/正则表达式/index.html",
    "revision": "473dbcfe05037fe7d0c285b6fb08fcd8"
  },
  {
    "url": "tag/珠峰高级/index.html",
    "revision": "73037679a5adae0fd99b7382ab885dc0"
  },
  {
    "url": "tag/珠峰高级/page/2/index.html",
    "revision": "1d1be4f3967ad305021dc64150d10f8b"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "c37f411a8f3e29d030bcfe135c3592ae"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "7bd0c11a277ca72694f187f25b3dd9c8"
  },
  {
    "url": "timeline/index.html",
    "revision": "4855f8073a7b72f7acce43a1099ea7ca"
  },
  {
    "url": "views/designPattern/UML类图.html",
    "revision": "80200c2670776cadc0a81e71fa3bedbf"
  },
  {
    "url": "views/designPattern/设计原则.html",
    "revision": "f51fdefe794c0f0a0c7a717236a9c74c"
  },
  {
    "url": "views/designPattern/面向对象.html",
    "revision": "45398249c803a2616c7d16dd1ad26da5"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "454ab4c620ef7e6203cc1cc2e8b9b021"
  },
  {
    "url": "views/interview/ES6中this指向.html",
    "revision": "6f8d5a54d900dae638b716586fcb0198"
  },
  {
    "url": "views/interview/ES6模板字符串.html",
    "revision": "95cf0e9bb61ba303250e0ea3d19bcd06"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "46dd75b8fdc664a4b306e48a3b21db40"
  },
  {
    "url": "views/interview/index.html",
    "revision": "efa9eeeafeeabf585e0d4d5a6119e42c"
  },
  {
    "url": "views/interview/Object.assign().html",
    "revision": "a4f8b0dc316715b728ba3add59bf2960"
  },
  {
    "url": "views/interview/webpack构建后this指向.html",
    "revision": "42df5eb5259a00bc63ba5c7d60f43c62"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "f9afc7402599f3bd0a082dee6d6e830c"
  },
  {
    "url": "views/interview/变量声明.html",
    "revision": "a8486d0c02da4e13493f67c35f7259d5"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "e5175c91c4b4646352d1405db11dff57"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "96eb9d31e2c19753e676383b58684d5b"
  },
  {
    "url": "views/Web/2020/CocosCreator01.html",
    "revision": "3a91fdcf8398fa50d0771c663b114fb3"
  },
  {
    "url": "views/Web/2020/SettingsSync.html",
    "revision": "55d2aab2ad6651c7694f1107a170808e"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/TypeScript 基础语法.html",
    "revision": "b55a5246f7ec902bdf064144135c99c1"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/使用 TypeScript 编写爬虫工具.html",
    "revision": "b93720da553e91dbdcbc3605ce77be13"
  },
  {
    "url": "views/Web/2020/前端JavaScript高级面试/ES6.html",
    "revision": "1d87939cc3dd9fcaa4143f067d686431"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "0e72ad7ebd00279fdf2bc5372ac4830d"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "85d78f39afdfeb7b478bb9c842eb6e58"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "f5cc70368db9fada4a87ba3f8669fd6b"
  },
  {
    "url": "views/Web/2020/正则表达式.html",
    "revision": "a7d26869aeb083e5dd9d605f7d8f9b28"
  },
  {
    "url": "views/Web/2020/珠峰高级/0603.html",
    "revision": "d093bbdbdce9faa248a68b9c820f05e7"
  },
  {
    "url": "views/Web/2020/珠峰高级/0605.html",
    "revision": "a9b44288f67b8a2034de8311b2811f89"
  },
  {
    "url": "views/Web/2020/珠峰高级/0607-1.html",
    "revision": "5faf11601ab01dc4fd250edf75479348"
  },
  {
    "url": "views/Web/2020/珠峰高级/0607-2.html",
    "revision": "eaa4e7ebf88b152b87dce505306a0b8d"
  },
  {
    "url": "views/Web/2020/珠峰高级/0610.html",
    "revision": "df13082c4efcc4e78a52652e28f7b179"
  },
  {
    "url": "views/Web/2020/珠峰高级/0612.html",
    "revision": "b815a4777b23c3cd98e77ee3ea4e612c"
  },
  {
    "url": "views/Web/2020/珠峰高级/0614.html",
    "revision": "10b9abd6641b06cb5edd1192230353d7"
  },
  {
    "url": "views/Web/2020/珠峰高级/0621-1.html",
    "revision": "6c0faef0cad16e1e209541968bfd151c"
  },
  {
    "url": "views/Web/2020/珠峰高级/0621-2.html",
    "revision": "0c31f3df0a4492ff1a77785a4770e810"
  },
  {
    "url": "views/Web/2020/珠峰高级/This处理及Call-Apply-Bind.html",
    "revision": "800ea7afaf0822604ce2e37b8d42bcea"
  },
  {
    "url": "views/Web/2020/珠峰高级/webpack/JS中的模块化编程思想.html",
    "revision": "d324a0982bade05f6e3ae292a62172a9"
  },
  {
    "url": "views/Web/2020/珠峰高级/webpack/webpack.html",
    "revision": "372155bfccca87afd92eb1bbaf0ec3e4"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第一周.html",
    "revision": "c907a488ffa2f53af231f500009dda2c"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第二周.html",
    "revision": "c726f8a70ff133cff11513930c8092de"
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
