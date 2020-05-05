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
    "revision": "162aac2bd437e55c5f4d60f953cdb4a2"
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
    "url": "assets/js/11.207f9ac4.js",
    "revision": "3cc7f82196393f34c58c2b72b42f59a1"
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
    "url": "assets/js/19.672cca25.js",
    "revision": "dde6d3d6218477c076ca5e8eac879dc2"
  },
  {
    "url": "assets/js/20.fb8cde9d.js",
    "revision": "bbc1279066dfa3d6a52397bd285d13f1"
  },
  {
    "url": "assets/js/21.badadbb3.js",
    "revision": "7e9e21dcc12d0c5e5b57571426123fc9"
  },
  {
    "url": "assets/js/22.14de023f.js",
    "revision": "149678f0362420636df9bcd019585da9"
  },
  {
    "url": "assets/js/23.f2b7c708.js",
    "revision": "feefeeb06d32f5288d8c5e9b403bbd11"
  },
  {
    "url": "assets/js/24.29029ab3.js",
    "revision": "e71c355e31067e1389144fb0acbc8d86"
  },
  {
    "url": "assets/js/25.ad438309.js",
    "revision": "62ab854716c893805466da6c643caaf3"
  },
  {
    "url": "assets/js/26.c40cced2.js",
    "revision": "34a86d041bc460ec3109dd700c58ef20"
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
    "url": "assets/js/app.a60dcc79.js",
    "revision": "89c8a43da760cd2c63d984c1f00f00da"
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
    "revision": "d89d153c616ecb26b1323d0688ddf53b"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "6769a2db1750b12d92c8321d284c015a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "dcbc0bd9e75df32288f23818f7aa4cd5"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "4d2d41db12034bcdb3d231c47b593331"
  },
  {
    "url": "index.html",
    "revision": "7455a5cb387d113e0d37dd305cf2f53c"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "cfba0fd2f6b2882a654b3100334b28ac"
  },
  {
    "url": "tag/index.html",
    "revision": "3a558d18e21b12e64f12ac46cca0eb81"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "5b0890a969e73309eec6cbdc7c38f92a"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "c487f240002beefc440c057017c3bcf0"
  },
  {
    "url": "timeline/index.html",
    "revision": "a6ce5c9a483412e1088043508725022e"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "7c322ac15dcf351d40e6807f12e18144"
  },
  {
    "url": "views/interview/ES6中this指向.html",
    "revision": "95557f586a24d4dd77f76f6ebda0d7b2"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "13a7cb3c26ac173f37fa803e4ad34cae"
  },
  {
    "url": "views/interview/index.html",
    "revision": "a018d71af7ca9e03d2c1d3bc9a969f76"
  },
  {
    "url": "views/interview/webpack构建后this指向.html",
    "revision": "f1e2b033e32063beac2fcc64d13b2ae8"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "c2205c8e99b4af52b805ba2087263325"
  },
  {
    "url": "views/interview/变量声明.html",
    "revision": "ae5b79485546e574f980f4f80214df7a"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "5ff159902b31143eb3146cfc50a0c554"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "5cecfdeb72eedf1357c490a9348cccc2"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "9aebbf9b7235ad367fbe20fd85269773"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "c22295e61e5dc043f9ccd804000ec153"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "28375dc885fb5ad8e06d27d9b22acacc"
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
