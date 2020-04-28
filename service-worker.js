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
    "revision": "b325895ba371b4a59a01f16b7f73708d"
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
    "url": "assets/js/13.74e5bf6d.js",
    "revision": "93b941acf979416d98c8a535aa7d1677"
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
    "url": "assets/js/18.4d53ef35.js",
    "revision": "a18a6bc295d718090ef7c594ccf10532"
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
    "url": "assets/js/app.4fe7b96e.js",
    "revision": "f5fffd38608d93275ccfb6cd082390c5"
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
    "revision": "7e42615b9ccb3a512cb4e070b7efb1db"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "5085dfc8868abc153d271b7a64893388"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "770c636844c3daad9f1a5636a7f63965"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "f1c5bf09e81bbde7a30b4fe051726b72"
  },
  {
    "url": "index.html",
    "revision": "1d1e2b78820c8f3a5c188cb0b2341593"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "911df5a892fa68b29e8f09ea7341180f"
  },
  {
    "url": "tag/index.html",
    "revision": "dc2f2c03913d33ee024e944431cacc13"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "c37af78899143c067ebb1ed4b54205c3"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "0fd24c35a7dd0f2734bda7e54ebafa04"
  },
  {
    "url": "timeline/index.html",
    "revision": "8403936c319c4d1d5dcc469a274545d8"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "28c049b49720e1c10e28e7e9fc1c70e4"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "4414159ea1af7135f5570ad8c3fc1c4a"
  },
  {
    "url": "views/interview/index.html",
    "revision": "e97020f620f3ae65c5c6cfb7ed615068"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "18de6f3e68bda386322f6f899c18b55b"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "a7a2c587e9072ed76b2411f0d07d9b7c"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "440527facd5dd8a977c5bc35cafc837b"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "0c8102beeca17d367e2d191c06f75dbd"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "adf2e59ab7c0a4df2e858a53e9b3b20f"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "5bf127555d804b57d16ed2f94ad5edcf"
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
