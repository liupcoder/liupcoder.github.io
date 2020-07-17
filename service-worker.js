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
    "revision": "71e2b484dfd4293c72a632727de89887"
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
    "url": "assets/js/11.35dc8b83.js",
    "revision": "900cf3f642a49cbc3b450f5d75e51d43"
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
    "url": "assets/js/31.76a44fb4.js",
    "revision": "e135ef7ef7aead1168b8417c68efa16c"
  },
  {
    "url": "assets/js/32.24d2df5a.js",
    "revision": "946dc203065443bd8c31c4ec350d1a52"
  },
  {
    "url": "assets/js/33.9b03d5bd.js",
    "revision": "4a623c3573a05301daa79a5ff6b7a7f6"
  },
  {
    "url": "assets/js/34.877bcdc8.js",
    "revision": "6a27f24d5be6ff55112e1acb92466c96"
  },
  {
    "url": "assets/js/35.1de8ae05.js",
    "revision": "af85ae037e56081dfad0ce4c827d3d7b"
  },
  {
    "url": "assets/js/36.a24168cb.js",
    "revision": "77141074efd810dbe264f5dd45fcd671"
  },
  {
    "url": "assets/js/37.41bb4805.js",
    "revision": "5d65fd22ba911e63d98afbdf54c3a467"
  },
  {
    "url": "assets/js/38.bbadc951.js",
    "revision": "72b1cc9d08e5df37a9fdbe8d1832587d"
  },
  {
    "url": "assets/js/39.931c84e1.js",
    "revision": "82b8d35a983ebdf2e5bd03f4219a52d9"
  },
  {
    "url": "assets/js/4.0947438e.js",
    "revision": "7a975c313e149a2ed32df5181d03a1f6"
  },
  {
    "url": "assets/js/40.d3577590.js",
    "revision": "3ebe0d5a17ab17a3f3e2e179492f9131"
  },
  {
    "url": "assets/js/41.58fbe3ba.js",
    "revision": "b2660f63fafb85a725ebb114cdb6005d"
  },
  {
    "url": "assets/js/42.e321f55d.js",
    "revision": "92ee3b302286bc6ed9522678b268d41f"
  },
  {
    "url": "assets/js/43.97f7125a.js",
    "revision": "ae219ee334a252e670d5faae732902a3"
  },
  {
    "url": "assets/js/44.ad5b1cb4.js",
    "revision": "3a0af44e74050f3f32a430483e1f136d"
  },
  {
    "url": "assets/js/45.53b8f3c5.js",
    "revision": "83153047e05e6d107965e5c9e7a92ff4"
  },
  {
    "url": "assets/js/46.745f9df3.js",
    "revision": "f7044d593f431f6d7d2ae4f9dd9520db"
  },
  {
    "url": "assets/js/47.aa044e87.js",
    "revision": "24397fea0f4925bb905bbea7049a04d3"
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
    "url": "assets/js/app.014e1898.js",
    "revision": "e66910ec0cb00a0471e239cc86e635cf"
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
    "revision": "02f3059b9575c4cebf6c51e30ae01e5c"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "7e250806bb49fbc07aa0c3930f75f15c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "b5e8a6aa26cd3ec9a88deba3ee23b4e8"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "b7c1fa237fdf703ccec4bdf218da9dba"
  },
  {
    "url": "categories/前端/page/3/index.html",
    "revision": "c96bc0dceafabbf741e96d0bda0146fc"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "fe2c8dfe996f512e82e4a5d5f93f2247"
  },
  {
    "url": "index.html",
    "revision": "cc5ace07f078e23e04d8f4ab2e613f1a"
  },
  {
    "url": "tag/Cocos Creator/index.html",
    "revision": "8f8b6626de00ec85ab2be6b66a206a61"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "2ac95f5ce83a7f9ffe8a82e9564ecbae"
  },
  {
    "url": "tag/index.html",
    "revision": "1e252330779e993e158afd561f4ecc1b"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "badf5732304d7aa6fd1074d7be145bdc"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "7bf4f9faf22bfb0d4c13c15ef2efc56b"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "c55a8993a5208aeb17397cf1887c4980"
  },
  {
    "url": "tag/学习笔记/index.html",
    "revision": "b2019094448bc984da80eef14fb35fd2"
  },
  {
    "url": "tag/学习笔记/page/2/index.html",
    "revision": "ff145d84d9e1d9e86741be46f3f8e713"
  },
  {
    "url": "tag/正则表达式/index.html",
    "revision": "ac5183326ab6730fe41439b1adf5937d"
  },
  {
    "url": "tag/珠峰高级/index.html",
    "revision": "5b720ff481384fa00b4e12c4a4c664af"
  },
  {
    "url": "tag/珠峰高级/page/2/index.html",
    "revision": "827d2a6093e33eaaba477720e34fb782"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "ae8203443e7efeba2441030818c8fc5e"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "5237c677bc77211ecbbfd46f67cb90b9"
  },
  {
    "url": "timeline/index.html",
    "revision": "6561fa095da199a209622ed4b6912cdc"
  },
  {
    "url": "views/designPattern/UML类图.html",
    "revision": "2dce0519bd7f5e6a3546febfa7fed9b5"
  },
  {
    "url": "views/designPattern/设计原则.html",
    "revision": "613c12d063619bd44564ab49efbd0bef"
  },
  {
    "url": "views/designPattern/面向对象.html",
    "revision": "45a2f1e1355e18c4cf5222faced8c1a8"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "84e882cc6d2a64270333b6be6d5119c8"
  },
  {
    "url": "views/interview/ES6中this指向.html",
    "revision": "9af1721ceb1114912fdca6c56a3dbccb"
  },
  {
    "url": "views/interview/ES6模板字符串.html",
    "revision": "7c41c666de550713654c65e7b6bcfcfa"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "ed4b15e9f26f2fc08f7baa975c1b3234"
  },
  {
    "url": "views/interview/index.html",
    "revision": "3c6d2956f3dbf5686baccbdaf8d1fa0f"
  },
  {
    "url": "views/interview/Object.assign().html",
    "revision": "f264664cece066c01fc6e041b65c11eb"
  },
  {
    "url": "views/interview/webpack构建后this指向.html",
    "revision": "2dd31fbea271692dd70aeee755714240"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "ebf61b3cca074599a0bff22973203a4b"
  },
  {
    "url": "views/interview/变量声明.html",
    "revision": "a0a504d9cb02e9d08c7a3e59ad82c257"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "ddfd4c704b43aa45feef782464cb39a8"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "8cb3f070c4f6c0ccbf09fad8e8a27fe1"
  },
  {
    "url": "views/Web/2020/CocosCreator01.html",
    "revision": "f8154de31d89d813fd96e51e4b5c6e38"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/TypeScript 基础语法.html",
    "revision": "054517371e0b8c68d2601cccef0752a2"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/使用 TypeScript 编写爬虫工具.html",
    "revision": "3144520e399058e311bc40414c86f513"
  },
  {
    "url": "views/Web/2020/前端JavaScript高级面试/ES6.html",
    "revision": "f8fbe48afa78bcc87e1e8d812e60f35d"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "d594e058dc5e57465f613c1301955668"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "ce067e55d34bfb174aa8c1ada6812f08"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "3893f6c28e65f88c779bfce75b77cce5"
  },
  {
    "url": "views/Web/2020/正则表达式.html",
    "revision": "748d49874d9a041c4023a36d1b909be4"
  },
  {
    "url": "views/Web/2020/珠峰高级/0603.html",
    "revision": "943fbbb10db46f7be44f5429ed00b1d4"
  },
  {
    "url": "views/Web/2020/珠峰高级/0605.html",
    "revision": "649c1dfe6a8f22eb8f09633f4b529eb5"
  },
  {
    "url": "views/Web/2020/珠峰高级/0607-1.html",
    "revision": "08c866e2956b10ed10e128be8dd6976f"
  },
  {
    "url": "views/Web/2020/珠峰高级/0607-2.html",
    "revision": "fe97e005af3f70e089a3070e53589d1f"
  },
  {
    "url": "views/Web/2020/珠峰高级/0610.html",
    "revision": "a12bc40a30bb35fe652baba06e212dae"
  },
  {
    "url": "views/Web/2020/珠峰高级/0612.html",
    "revision": "ef1ad7e906ae232d48d85580b473c276"
  },
  {
    "url": "views/Web/2020/珠峰高级/0614.html",
    "revision": "ecd66e6edad742d7c62e5aeb24910288"
  },
  {
    "url": "views/Web/2020/珠峰高级/0621-1.html",
    "revision": "e22e2f4c97e1680d9cb495c8efb155aa"
  },
  {
    "url": "views/Web/2020/珠峰高级/0621-2.html",
    "revision": "b618f53e6396c9b4643e5a468fe747fb"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第一周.html",
    "revision": "30d9912ea7d52076c594db1b2481733f"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第二周.html",
    "revision": "064c13b0a911d3d6ada1ba920ea3f788"
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
