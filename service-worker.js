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
    "revision": "0fb7d1f8de1f30f1a4fd565dce67061e"
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
    "url": "assets/js/11.d82b1212.js",
    "revision": "68d57b12eebf5d95299801c3aa6568d2"
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
    "url": "assets/js/21.1b19b292.js",
    "revision": "a981474b2c12aa71da352498698617ba"
  },
  {
    "url": "assets/js/22.ab5da2d9.js",
    "revision": "125355290980f2c23d35a8f456ba212c"
  },
  {
    "url": "assets/js/23.27f306b2.js",
    "revision": "ffba625ca7f6c2c1564bead54f1a31f9"
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
    "url": "assets/js/app.273ce70f.js",
    "revision": "a726e49613b5cb49f3afbf1beeb26c2b"
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
    "revision": "c02c5ec4c8f72047eb58d5cb50e40da3"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "555f009f12b2ef60ece9207c21ac1e3a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "ea026b8f38c8c4cf1afe757cfa19ca46"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "895b1c4a4711f4a11031654ee3502337"
  },
  {
    "url": "index.html",
    "revision": "85a59e4a15b9af8d7e251f3c8e14dc2a"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "00f61e913836e4effc3020cb9e89f54b"
  },
  {
    "url": "tag/index.html",
    "revision": "c090f7717ca0705b240ec46b0e345dff"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "43cdb12375011206c8e8d9f6aeb29e85"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "6a672aa143c4f85bcccf4a8e57b530f6"
  },
  {
    "url": "timeline/index.html",
    "revision": "16d95e0dd9e8ed8136891d2f01f88c9b"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "963ff0b99b9fabb33e67597fcb0ef108"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "e8a6981604f6b50c56ff320f3df494e1"
  },
  {
    "url": "views/interview/index.html",
    "revision": "4aa1488ea53086961cbc7f851796fc8d"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "23376b81e50b84d1f3c50824f76c3141"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "460e3adc71ba33d326e34661d752432a"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "6d45c2945306a6356a0760f3dbb59bc5"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "680c136c4ccdcdd5e56fb641d7969a34"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "868790d56445dc99bcd24486267cddc6"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "565cebf597aa732d6c8a32ad208a6116"
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
