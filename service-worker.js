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
    "revision": "72fa85ce9a905da65d3614ec20c044f2"
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
    "url": "assets/js/11.bed814ba.js",
    "revision": "847d891fc85567e1f990e8f2a2b63971"
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
    "url": "assets/js/22.3e891c6c.js",
    "revision": "a54861916761f78200c8ce214454409b"
  },
  {
    "url": "assets/js/23.9fbde19f.js",
    "revision": "30212aaaf9a5503665f296a6362346db"
  },
  {
    "url": "assets/js/24.3c3a9ac0.js",
    "revision": "ebc1deca53b4191ffe416927754f31ae"
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
    "url": "assets/js/app.7fcb8336.js",
    "revision": "d38cef9903a6b05bd7ceb925bb0b005a"
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
    "revision": "26aef4b8abfac08b972e8f9d6b1ea07f"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "27c1bc0b26d7cbcab97cbe7c52e54730"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "0450b755f409abd0b34ccb3e98873acc"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "8165f93d21adc523734bc037d1d73fdc"
  },
  {
    "url": "index.html",
    "revision": "639c6af8fe9dbe1f633c3b2be0ec7d0c"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "789732518ab25611d0610b3da0f9d297"
  },
  {
    "url": "tag/index.html",
    "revision": "f1f17e9452bc4ccaabab4a172d89ffb9"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "2e00c76e6f3df35ed8b2c7c3da8abc27"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "d4596246bf70f542a4843905a0c75530"
  },
  {
    "url": "timeline/index.html",
    "revision": "957692c1c879582efde47855c5ef7807"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "34986251385bc8975a7223d2969a0653"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "e1c6391219f70e69896e15aaf69d2206"
  },
  {
    "url": "views/interview/index.html",
    "revision": "743c06e659a17e5886aa74501e3dbf55"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "8474b0485b83815be26cb6b5b9fa4982"
  },
  {
    "url": "views/interview/变量声明.html",
    "revision": "3ebb462f49ac912a0f2dbf99b9311f0f"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "c3bf962eddd3489b3de0dc9e2b040e82"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "01e45519482b9948b6844df165905e57"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "9fd8784a64c790ed1420f1f9b3ef9806"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "681f8184a8890af3aae77797cc600b72"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "917699efee1bdee823fb0fd387614993"
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
