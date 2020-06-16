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
    "revision": "2b94d4517c6a7c93f9d79462b896e469"
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
    "url": "assets/js/11.c1997a10.js",
    "revision": "cae0cfe5d6ba22a28b26bf4d02e76122"
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
    "url": "assets/js/24.2fca0a02.js",
    "revision": "8be64dc23fc36c2be8c48d911416d15f"
  },
  {
    "url": "assets/js/25.dd5bd45b.js",
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
    "url": "assets/js/28.d9312878.js",
    "revision": "40f9482f0b692cd9b745e2e56b3f7334"
  },
  {
    "url": "assets/js/29.5b47854f.js",
    "revision": "22becac4f0ba653080268e94b1a406f3"
  },
  {
    "url": "assets/js/30.0a259cc3.js",
    "revision": "050485b6f6060d3c5fa30d71ab8a5e43"
  },
  {
    "url": "assets/js/31.0bf7d8cc.js",
    "revision": "15a73d1e2f83e0f19364319704ce42bd"
  },
  {
    "url": "assets/js/32.c6ae7267.js",
    "revision": "480391d7687f932e7e5aef04578006e9"
  },
  {
    "url": "assets/js/33.fdfe94e9.js",
    "revision": "cee7a9eb4bfd27172835f649261430bc"
  },
  {
    "url": "assets/js/34.b0e43da5.js",
    "revision": "19e12d940198c6304ebb6abb65d19b1a"
  },
  {
    "url": "assets/js/35.b4c7dcb9.js",
    "revision": "fc390b27f411dc704ec8f24c867d3421"
  },
  {
    "url": "assets/js/36.aca06bd0.js",
    "revision": "3350a54b90aad14adb07b31d6ea76441"
  },
  {
    "url": "assets/js/37.16d4dc39.js",
    "revision": "256d0d7b7e90908393afaff57fd731fc"
  },
  {
    "url": "assets/js/38.e13504f1.js",
    "revision": "55d1da8c4f384b4aa1dac65b18754b00"
  },
  {
    "url": "assets/js/39.cb473c6d.js",
    "revision": "288be0dc97a51c01f96e76530c19c9f7"
  },
  {
    "url": "assets/js/4.0947438e.js",
    "revision": "7a975c313e149a2ed32df5181d03a1f6"
  },
  {
    "url": "assets/js/40.d53eb30f.js",
    "revision": "811fa72c69aa7b31a02a0bc6326bcac7"
  },
  {
    "url": "assets/js/41.8baa041e.js",
    "revision": "4d9fd36ade365859d110bc94cfaccb66"
  },
  {
    "url": "assets/js/42.62c5ba8d.js",
    "revision": "f7ac59fb0f3cd08609a49a76a00c1d9c"
  },
  {
    "url": "assets/js/43.ab62b3ee.js",
    "revision": "2078a71f8d9fd2299eb17140095939ff"
  },
  {
    "url": "assets/js/44.3984ce6e.js",
    "revision": "1c3e1edc12eeea73a5b302ba18e9acba"
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
    "url": "assets/js/app.e7ba880f.js",
    "revision": "8d05bd2621e98177129f71c87b0fc870"
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
    "revision": "049b84060e86e685bd82bfe23fadd2f8"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "a251daf667a72c00c91fa0fbe0412fed"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "27ac97da59c2d5844110a7441df2931d"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "93385747da314091941d131bad60e454"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "93686312b346ecc1caf0ba084195ae44"
  },
  {
    "url": "index.html",
    "revision": "2a153eaced7b7fa253708f57b80acf96"
  },
  {
    "url": "tag/Cocos Creator/index.html",
    "revision": "c02178066333a7d320ac7dbb497d6a2d"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "357814fe4a27032a9304b6b8362615d6"
  },
  {
    "url": "tag/index.html",
    "revision": "1d7f2833f9c3e39cb8ac1dc832d9861b"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "97e96d21af245e683be0b70a6c5cece3"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "99dd1fe2998f92fc602e49a1271e4697"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "a5a5f2d66fc7223845ea6e795d24f970"
  },
  {
    "url": "tag/学习笔记/index.html",
    "revision": "a41b20f38060bf01157076e0d4bfea9b"
  },
  {
    "url": "tag/学习笔记/page/2/index.html",
    "revision": "a4cb6d4c4b0416eef87aee36fe8e5135"
  },
  {
    "url": "tag/正则表达式/index.html",
    "revision": "8239f241d160fea6c07ad918dc6524d5"
  },
  {
    "url": "tag/珠峰高级/index.html",
    "revision": "93c0544313388bc6689ab6ead8b4dab8"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "4100c47fc34e13fa29ec49082ca0e0a3"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "70d17b774299fbb09529568fc4b30dcf"
  },
  {
    "url": "timeline/index.html",
    "revision": "7d1c3f7c09aac81e54042aa95d2bc160"
  },
  {
    "url": "views/designPattern/UML类图.html",
    "revision": "74dfed7af50962cafee6f4fccd5c8220"
  },
  {
    "url": "views/designPattern/设计原则.html",
    "revision": "08743ad61dba833ffa3be7e6163f1b8c"
  },
  {
    "url": "views/designPattern/面向对象.html",
    "revision": "264ae7bbdd69d63c08f66703665726c6"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "f2a4a143528b1ba9048ffa476a7c9ef4"
  },
  {
    "url": "views/interview/ES6中this指向.html",
    "revision": "3a8bda604920c9424fb8d9c5dd1967f1"
  },
  {
    "url": "views/interview/ES6模板字符串.html",
    "revision": "632354cbe21eb81f0ec771b91c07b3dc"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "ea1422d0646690a45605fa84804ef899"
  },
  {
    "url": "views/interview/index.html",
    "revision": "8ec79ea7967b46d4af5735b07d3f0b1a"
  },
  {
    "url": "views/interview/Object.assign().html",
    "revision": "6a3407fa3ade36e140e4bc17fd63a3a7"
  },
  {
    "url": "views/interview/webpack构建后this指向.html",
    "revision": "223d4898ef65b029c1a0d3179935cec1"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "c5091552841a1a057f1927dd8ed02df2"
  },
  {
    "url": "views/interview/变量声明.html",
    "revision": "188f51f49b5ba124c195cca2d1107989"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "6531fabca365aaf1585dc1bc5d820d60"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "733321482fded31d96a3d395be9a4425"
  },
  {
    "url": "views/Web/2020/CocosCreator01.html",
    "revision": "398adebc1f2b8d10f371b14d807be265"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/TypeScript 基础语法.html",
    "revision": "662e3ca7167340dddf21b22072a05cd5"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/使用 TypeScript 编写爬虫工具.html",
    "revision": "88a4fb8dea0055028e67928200648ab9"
  },
  {
    "url": "views/Web/2020/前端JavaScript高级面试/ES6.html",
    "revision": "9f450cdfbf7c31356880e22526c768d0"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "c045c99e44788456f6b8b45dc68c5fc3"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "69fd7b41c05498bbe8966f8fbac9fa22"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "472fbce089505fe3dcf2ba2841c6f026"
  },
  {
    "url": "views/Web/2020/正则表达式.html",
    "revision": "48c00cf047127d8e7433c4c89a771ae8"
  },
  {
    "url": "views/Web/2020/珠峰高级/0603.html",
    "revision": "6dcb1e900b898ead4c0ff3837f6c139c"
  },
  {
    "url": "views/Web/2020/珠峰高级/0605.html",
    "revision": "bf852b95015323a8c7f3d1e3ecf467fc"
  },
  {
    "url": "views/Web/2020/珠峰高级/060701.html",
    "revision": "befa85fabf6f90e47bf7e272d856cf37"
  },
  {
    "url": "views/Web/2020/珠峰高级/060702.html",
    "revision": "c0805501c76d0d376c6bf31880fe751a"
  },
  {
    "url": "views/Web/2020/珠峰高级/0610.html",
    "revision": "63c994b3f3ed438625542b302e7a1b05"
  },
  {
    "url": "views/Web/2020/珠峰高级/0612.html",
    "revision": "7d2888eb1d5a13dff69592929b8f13e2"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第一周.html",
    "revision": "2621bf017dc0eee85648f7b370f66a42"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第二周.html",
    "revision": "5d39fac3d5eb07d68990db3a24b8b206"
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
