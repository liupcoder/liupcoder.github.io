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
    "revision": "6ce0dd8aaf37e8c2187aef9d26dcd8a6"
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
    "url": "assets/js/16.84e533b8.js",
    "revision": "d78bc9723de3fe39ca9924a19fb98df4"
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
    "url": "assets/js/app.effdd81b.js",
    "revision": "75296323528c0a33fea7495818b94f34"
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
    "revision": "18b79aa47a6699dc814e07479572ef7f"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "d2d55f31dad6c823822879d0e16d784d"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "b933ac05c5d050c75f2d5d624a3babeb"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "f292a4363f78c24cf531242949cbec63"
  },
  {
    "url": "index.html",
    "revision": "dd64ca5a6c6540accfc63e03da573a59"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "8a15d5368ce121172ef61dc28143667b"
  },
  {
    "url": "tag/index.html",
    "revision": "5d97448020c57dec80ba0d22fd613027"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "fdbe48b4c5f75a01fea2a4e8b29a1152"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "98cafa12bd9d22fd37b36b24b30ea4f0"
  },
  {
    "url": "timeline/index.html",
    "revision": "585ee65066ee2ec14b5adc06ed584c5f"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "2330738db63eeb79bec5dad53a34cd02"
  },
  {
    "url": "views/interview/200427.html",
    "revision": "4be9b9e2841b6f1a319e049a0cac4400"
  },
  {
    "url": "views/interview/index.html",
    "revision": "b7e9e7797de36d2476d28ad3022290c1"
  },
  {
    "url": "views/Web/2016/16072701.html",
    "revision": "a3c4753151497c6ec4584c6b2fc10b64"
  },
  {
    "url": "views/Web/2019/19111201.html",
    "revision": "b2698add22883a6ea4e97197119e2cf0"
  },
  {
    "url": "views/Web/2020/200416.html",
    "revision": "8a09db30a51110cb4dfeb466fa481ec6"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "c06446d8bc68284d76f629ea7673aa16"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "13a6695bd4144e0f89110b31bed599b8"
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
