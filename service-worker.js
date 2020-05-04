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
    "revision": "76bff2396285f6866130ea807f9e86f6"
  },
  {
    "url": "assets/css/0.styles.cb7afac4.css",
    "revision": "bef7c6ec2880c83481c5c88d9379da11"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.0859eb11.js",
    "revision": "ae2ad7188585ea8f1fbb3ec38dca6933"
  },
  {
    "url": "assets/js/10.29c1e2e6.js",
    "revision": "51b62b14024c8e845da9cbf1eb4cd2d8"
  },
  {
    "url": "assets/js/11.96d9eabd.js",
    "revision": "75ae2cacae589a270050e3e74f805dd2"
  },
  {
    "url": "assets/js/12.04f3c2b2.js",
    "revision": "4ba2948587f770e90fa87cf9d6063ad8"
  },
  {
    "url": "assets/js/13.208414e0.js",
    "revision": "1b8bbed6aee3619e1d0649ce9bcce65c"
  },
  {
    "url": "assets/js/14.e44bc059.js",
    "revision": "43d7418c3e8f48e63da12ff60528f320"
  },
  {
    "url": "assets/js/15.493ce143.js",
    "revision": "32cc301fca21c88cf66ca63fb4a99a21"
  },
  {
    "url": "assets/js/16.d88112b3.js",
    "revision": "658c440c4fe3350728edc9cf69960dc9"
  },
  {
    "url": "assets/js/17.3434b8d5.js",
    "revision": "554843cb8f9907b18594d9d8eeeef734"
  },
  {
    "url": "assets/js/18.e98c2b32.js",
    "revision": "113c73823e8093e0d4d1386b190f49b3"
  },
  {
    "url": "assets/js/19.13295867.js",
    "revision": "41a8f7f8a9d28ca6a0a2c43ae6b26af1"
  },
  {
    "url": "assets/js/20.91bfd496.js",
    "revision": "5eb138b30a0c73c30b83010cb6f362b6"
  },
  {
    "url": "assets/js/21.f8c9ac39.js",
    "revision": "3989eab5ad3769f285f48fce508db812"
  },
  {
    "url": "assets/js/22.2b9f126a.js",
    "revision": "3b7cbcf2c86340024386c159612735fb"
  },
  {
    "url": "assets/js/23.a2fbf9b7.js",
    "revision": "759b6270a0567b89599ae2b1b2790c3b"
  },
  {
    "url": "assets/js/24.6580b242.js",
    "revision": "72ce26e9d110938a73c67ec62446ee86"
  },
  {
    "url": "assets/js/25.34b4027c.js",
    "revision": "4bfed8da9bcdc9b69447f2f3bf6ff0bc"
  },
  {
    "url": "assets/js/4.16f01978.js",
    "revision": "746cf66f9240b7d1d83c54aaaf0bcf1f"
  },
  {
    "url": "assets/js/5.4a52e49b.js",
    "revision": "482e6ae3cc18aa15e238075ae0f849a6"
  },
  {
    "url": "assets/js/6.8d9a3ca4.js",
    "revision": "fac08ae1b19955b0f880b4dff7614811"
  },
  {
    "url": "assets/js/7.a7b99178.js",
    "revision": "98e58815ebbf5deed0bd15c92a0edaf7"
  },
  {
    "url": "assets/js/8.0ab33c15.js",
    "revision": "dbe25ce1efbfec337364c6476ea287b4"
  },
  {
    "url": "assets/js/9.b26f8c17.js",
    "revision": "76393824282440aadbfb49958599cad4"
  },
  {
    "url": "assets/js/app.24ce56f9.js",
    "revision": "aa200ec0c1285b06eafa15619160577f"
  },
  {
    "url": "assets/js/vendors~flowchart.b17edc10.js",
    "revision": "a2220a5d19f9c8b18b104f31a86f4467"
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
    "revision": "93b26b86fafa8033155f00407a8c2293"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "72020105f778bc4d71be10d00e2ebf84"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "8ae8417258e3fbe1ef162455cf05b9bd"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "1cc55a67b4b544daf9bc168293b664bd"
  },
  {
    "url": "index.html",
    "revision": "0cc11338715d49593a924ed1c694c8d9"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "939641b78bc9d59961a91b4a138398ed"
  },
  {
    "url": "tag/index.html",
    "revision": "7304316734658f1c7917e3b79e81cccc"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "4d3f1b5c1fc40ed47e919f720ee143c5"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "5e588ee59141e8a9716309c966522928"
  },
  {
    "url": "timeline/index.html",
    "revision": "9a7cd3bab92460adc5ce439980ab8609"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "e3d04fdd82551abcde52bcde3ed23e9a"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "f0bee6d7234cf833d7b053addb6fc0f1"
  },
  {
    "url": "views/interview/index.html",
    "revision": "79d80c478b1dc0ca48d36df918e3aa1d"
  },
  {
    "url": "views/interview/webpack构建后this指向.html",
    "revision": "420feb8b0e78b46cc7cf02a856600aa9"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "1c33dfdf3381fd093ee912e2b406c1ff"
  },
  {
    "url": "views/interview/变量声明.html",
    "revision": "d71b9b3eda0402ab5bee13c2c104f338"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "3a6040be22b7a129acbab10205aa5ff2"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "1259dc943b0ede4ff5df3e02bd4db693"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "d389c43edfd21de546b1c13e98b69d58"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "80ce8c227c823e742e1022be2cbefef5"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "82a0f4258562b2bf24bfb6e9f9a98b26"
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
