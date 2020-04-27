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
    "revision": "91c629fb4f9bef80573a561b282df172"
  },
  {
    "url": "assets/css/0.styles.56f007c7.css",
    "revision": "e325dfb659fa7e6d2c1c4fc9e9c5b758"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.3a260870.js",
    "revision": "990034e06b9480b59c74c8234cd2740c"
  },
  {
    "url": "assets/js/10.3474f611.js",
    "revision": "c8ea4b76c2899c8111b410d9dcb66d1e"
  },
  {
    "url": "assets/js/11.7f33dabf.js",
    "revision": "0097e154caab5e761f6c70127d0d0ab2"
  },
  {
    "url": "assets/js/12.5b4d3a82.js",
    "revision": "e8f546fbaaac0a2a05b5361557a2f750"
  },
  {
    "url": "assets/js/13.1c0913eb.js",
    "revision": "293822b1806f01c302e88ff47f758558"
  },
  {
    "url": "assets/js/14.4b42c384.js",
    "revision": "fb0948e6407e72b7507b1a662eff6c56"
  },
  {
    "url": "assets/js/15.65ef1ab1.js",
    "revision": "79762653c49552c5333adb60f4a30ecf"
  },
  {
    "url": "assets/js/16.c1b4b61b.js",
    "revision": "604a5a00ca3ae63d3c649883c7f803fe"
  },
  {
    "url": "assets/js/17.43d6ed9f.js",
    "revision": "519897a683db79e65f966dad2ccb6cd5"
  },
  {
    "url": "assets/js/18.3edfec1c.js",
    "revision": "9a64f551a926652a23d39c304fca6455"
  },
  {
    "url": "assets/js/19.21ab7e5e.js",
    "revision": "ba616a507120252bea693956ee3c1646"
  },
  {
    "url": "assets/js/20.ff64372c.js",
    "revision": "0fb90858a8bce4accb4b1fb7b7a02a9e"
  },
  {
    "url": "assets/js/21.c4f486a4.js",
    "revision": "9f7a6df295090fd408bdc1b4157230f8"
  },
  {
    "url": "assets/js/22.45ebfc0d.js",
    "revision": "f4028b05db74d35f4b194f536f038238"
  },
  {
    "url": "assets/js/4.6aa17f27.js",
    "revision": "7a975c313e149a2ed32df5181d03a1f6"
  },
  {
    "url": "assets/js/5.45548d41.js",
    "revision": "ae80f70013f8fe36f8f9b5176295f116"
  },
  {
    "url": "assets/js/6.b35ed1c8.js",
    "revision": "0a4d3f5ebc725e259fcfd848ca797b41"
  },
  {
    "url": "assets/js/7.40eddb2f.js",
    "revision": "b378703ab08139b388754aba242596b2"
  },
  {
    "url": "assets/js/8.30c5c8a9.js",
    "revision": "175a5501b8db5cf0c4e3a736060e49a5"
  },
  {
    "url": "assets/js/9.98b55181.js",
    "revision": "59094ae81e76d06deeb03ca9de583961"
  },
  {
    "url": "assets/js/app.4be411e4.js",
    "revision": "5215ba1dd219dee09c8373242714a15a"
  },
  {
    "url": "assets/js/vendors~flowchart.f2f98d1d.js",
    "revision": "3c73c750284b3d57b3b7cc95b35f3fad"
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
    "revision": "02ce4bb1d8ba48aa540ac42a337b03d2"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "f0201ab67835f50eac1c85caa54ec99f"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "493320343a3cefc0e2bdfb467fbcd07d"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "dba13c7537deea65f4bceb4859c2f57f"
  },
  {
    "url": "index.html",
    "revision": "bda826c4f70ba68bc04f7a950f814a58"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "7914e170abeb29fc545f3bed4ddb12f2"
  },
  {
    "url": "tag/index.html",
    "revision": "94e8f34fb946cfc8ba483b36c0cd5bfc"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "ba2d608f21186d36ccf289470a0d6bc1"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "6aa3ea100d340bd918566c269f7d38b6"
  },
  {
    "url": "timeline/index.html",
    "revision": "872b62f4b891793364b158f1faf28260"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "ebaa4c0692b34acc26bccad8a7449b36"
  },
  {
    "url": "views/interview/200427.html",
    "revision": "8052f797bf661d8107a6e78018adb8ab"
  },
  {
    "url": "views/interview/index.html",
    "revision": "da3a7fd6728b18a105951336fbd4d712"
  },
  {
    "url": "views/Web/2016/16072701.html",
    "revision": "f7a827baa978ea5d082340b8d3f170a9"
  },
  {
    "url": "views/Web/2019/19111201.html",
    "revision": "7aa6c0690183b76f9ca6404388a6b3f0"
  },
  {
    "url": "views/Web/2020/200416.html",
    "revision": "579650c35bd4fae8a474ee91981e094a"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "631bac18fcf49113ad754f1c027d87db"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "dafd90e40065324835ad7f1e0148438f"
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
