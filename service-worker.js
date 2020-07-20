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
    "revision": "8e7537b2567579a8c263ec3dcd4ebdff"
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
    "url": "assets/js/11.c9c25248.js",
    "revision": "4e09dd03d5b6c02d727ff4dec7a82569"
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
    "url": "assets/js/32.d71ab7cc.js",
    "revision": "f1a6671045c61cede01b805a0eb24d21"
  },
  {
    "url": "assets/js/33.dcfb260f.js",
    "revision": "52e4d569c53a093d099d7d80569f9ab5"
  },
  {
    "url": "assets/js/34.6ddc230b.js",
    "revision": "cdc62864536f8ef4775a53f178a11bdd"
  },
  {
    "url": "assets/js/35.cc520d4a.js",
    "revision": "6c647cd7faa682070abfa79a40731fd2"
  },
  {
    "url": "assets/js/36.21d7170f.js",
    "revision": "8a0ee01c24973258b1bd8cf48efc9b07"
  },
  {
    "url": "assets/js/37.75975b08.js",
    "revision": "0afb6428188ff505fa9738006d56aad8"
  },
  {
    "url": "assets/js/38.5c364892.js",
    "revision": "86082788aa5720940e2153b33d15528c"
  },
  {
    "url": "assets/js/39.59b6930c.js",
    "revision": "b606b7f6324d3585a7b628ef08bca7e5"
  },
  {
    "url": "assets/js/4.0947438e.js",
    "revision": "7a975c313e149a2ed32df5181d03a1f6"
  },
  {
    "url": "assets/js/40.076a50cc.js",
    "revision": "01e5e295305707c93223e595e3f72a45"
  },
  {
    "url": "assets/js/41.0a7b118b.js",
    "revision": "30723d871476a841802ad307803742be"
  },
  {
    "url": "assets/js/42.80b962b0.js",
    "revision": "0490f8b06df0195ca96ae3274b5f161f"
  },
  {
    "url": "assets/js/43.bd1ca73a.js",
    "revision": "e7207d2161433de2b2a10e5783423554"
  },
  {
    "url": "assets/js/44.5f63b56c.js",
    "revision": "93e5371c82bad0b1b6cdeccabea27071"
  },
  {
    "url": "assets/js/45.85082c67.js",
    "revision": "bddea01fd09339c8853f7f6ef81df6a4"
  },
  {
    "url": "assets/js/46.989ad3e3.js",
    "revision": "09eaa4a7ac4c72ab225d27da91c95401"
  },
  {
    "url": "assets/js/47.15a88d52.js",
    "revision": "395f6a364af90d5cf053658d9fa59334"
  },
  {
    "url": "assets/js/48.d255d178.js",
    "revision": "153a10eef563018b52c0cb064f117936"
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
    "url": "assets/js/app.4102baa7.js",
    "revision": "e047c583d2240bfd840b84c8e38050bf"
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
    "revision": "2600aae71aede42dad94ffd364f4ced2"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "a257350a4e9a489a83d245237a93f74b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "bda6d366b3624ea8347bd0ba11a2c1e4"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "388f0bb632abdb2d01ccab1fab5047b7"
  },
  {
    "url": "categories/前端/page/3/index.html",
    "revision": "346c5ea48dbb55996543433d641fc58d"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "74e71f2b1b150581488c38b42c11cb16"
  },
  {
    "url": "index.html",
    "revision": "22605caf8e86780bbb393b6413b41a79"
  },
  {
    "url": "tag/Cocos Creator/index.html",
    "revision": "e5ce8e1ed67d95400c23bcd897da91bb"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "d84d1e8dbcaa379a1b263dcce531daa9"
  },
  {
    "url": "tag/index.html",
    "revision": "069bdb746b38ff2c8c0fbbff1b302382"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "a22183139cdbef5317587a48c6bfd4f4"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "ff08760b0632e3ab0719214512668a02"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "47ceb63f5a39da39ae5aa4483b4eb5aa"
  },
  {
    "url": "tag/学习笔记/index.html",
    "revision": "a423b951b7cbb0c2f7bacf78d4f0219f"
  },
  {
    "url": "tag/学习笔记/page/2/index.html",
    "revision": "95f2c15a3b5f17d28470d9484ca5fd5f"
  },
  {
    "url": "tag/正则表达式/index.html",
    "revision": "5290df5f65d9eac24229802f14e39787"
  },
  {
    "url": "tag/珠峰高级/index.html",
    "revision": "bef56c1c458e35ecb0f5204fbd4f4878"
  },
  {
    "url": "tag/珠峰高级/page/2/index.html",
    "revision": "c2e114b1198ad6d9082c74cf2729487d"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "a93ee25a51299edc91a45628cb2571d2"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "8e78202c93ee6485263a4d016cfa88b8"
  },
  {
    "url": "timeline/index.html",
    "revision": "07106564f2ef696ada0b580ab8f431ae"
  },
  {
    "url": "views/designPattern/UML类图.html",
    "revision": "1858adc2503b592abe35c6749c9465e7"
  },
  {
    "url": "views/designPattern/设计原则.html",
    "revision": "715ec6e41a98097c4208997f7c204d02"
  },
  {
    "url": "views/designPattern/面向对象.html",
    "revision": "1c617c1edf34d92e7b527db57f9d4bf1"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "5cf9fdc49a7e277cec6d1f118753aca0"
  },
  {
    "url": "views/interview/ES6中this指向.html",
    "revision": "361172e3fe1b7d7ca628b1a279383292"
  },
  {
    "url": "views/interview/ES6模板字符串.html",
    "revision": "bd7f0d8829b1db16ece5f66900718385"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "5946d67eb7a816728661cb87e04644e3"
  },
  {
    "url": "views/interview/index.html",
    "revision": "4e3d3d9e48a8eeaf0e0f26b7ddf17e58"
  },
  {
    "url": "views/interview/Object.assign().html",
    "revision": "37f6c910a902600dda949c25d49e2b35"
  },
  {
    "url": "views/interview/webpack构建后this指向.html",
    "revision": "1b1434afb0cad338087b08de0d2adbd7"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "c22e32c06a918099b692a6c92e8ce8c0"
  },
  {
    "url": "views/interview/变量声明.html",
    "revision": "8c4f4245748dc46e2e6ddbb3860863dd"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "3ab48138182a182de9d71df3e7c73274"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "77d0041f561541b11ed419ebdfc06db2"
  },
  {
    "url": "views/Web/2020/CocosCreator01.html",
    "revision": "7c069b913946ced3b31ff3683950008f"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/TypeScript 基础语法.html",
    "revision": "51779a431bd509c1975fe8f4fa2b4e2d"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/使用 TypeScript 编写爬虫工具.html",
    "revision": "c9bcae1d7f05412d11a9c58d4bd85957"
  },
  {
    "url": "views/Web/2020/前端JavaScript高级面试/ES6.html",
    "revision": "e335dcffc3dc6e2ad4fde7ef9b6d6de1"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "e8e774bb579a9abd204657614b2a105c"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "0696dfb332c0682a716365ee8a1d5a48"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "2daea187580ce53cc75181e15787d084"
  },
  {
    "url": "views/Web/2020/正则表达式.html",
    "revision": "136fb23fae1c27639d112736ea097876"
  },
  {
    "url": "views/Web/2020/珠峰高级/0603.html",
    "revision": "28a8cf39f760c34a3447fc264cc8cec0"
  },
  {
    "url": "views/Web/2020/珠峰高级/0605.html",
    "revision": "cf8db9dc7522f0b2069f925d8a7c5639"
  },
  {
    "url": "views/Web/2020/珠峰高级/0607-1.html",
    "revision": "82e9eef14684dd9b2e801cfce796b603"
  },
  {
    "url": "views/Web/2020/珠峰高级/0607-2.html",
    "revision": "835cb3c45b5569fec6ce64230e66d2ff"
  },
  {
    "url": "views/Web/2020/珠峰高级/0610.html",
    "revision": "0b5e5de8e2a3aead8b8cfc7b106eb376"
  },
  {
    "url": "views/Web/2020/珠峰高级/0612.html",
    "revision": "08a58f0bf1d9e9cc86d491a6eb90e79f"
  },
  {
    "url": "views/Web/2020/珠峰高级/0614.html",
    "revision": "04da6b745972e21365538e5499e39c32"
  },
  {
    "url": "views/Web/2020/珠峰高级/0621-1.html",
    "revision": "209da42f71483bd95908bd145534726d"
  },
  {
    "url": "views/Web/2020/珠峰高级/0621-2.html",
    "revision": "b4b78eb6301dadb25459282486bb2fc7"
  },
  {
    "url": "views/Web/2020/珠峰高级/This处理及Call-Apply-Bind.html",
    "revision": "4d8f17e98ea6939ad08a63f057027a1a"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第一周.html",
    "revision": "71898d4fe9d48c45a757591d4eadca85"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第二周.html",
    "revision": "36ef44ab8e4525520cf688118fa0bf6e"
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
