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
    "revision": "87bf8384b6bb531597e48e05740f269c"
  },
  {
    "url": "assets/css/0.styles.96a6a6a6.css",
    "revision": "b8034c2ea47d1d885d48b145b028fa2b"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.dd5a0fc2.js",
    "revision": "deaf8e4d154cdc1e0de2108c9589c7ba"
  },
  {
    "url": "assets/js/10.976577a0.js",
    "revision": "9539ef79d9615c98a05392b832a6bf85"
  },
  {
    "url": "assets/js/11.ebbfb48a.js",
    "revision": "3f5a18d7dbe61305a2b0a394154f9ce8"
  },
  {
    "url": "assets/js/12.fcda1ef3.js",
    "revision": "cecf674c8c60086382446054f7f470d2"
  },
  {
    "url": "assets/js/13.185b3f3e.js",
    "revision": "6cc2439e067aab424a45978f301103d3"
  },
  {
    "url": "assets/js/14.7a3c0297.js",
    "revision": "c87cdc214fbb11adfd518702b3ce96c7"
  },
  {
    "url": "assets/js/15.04c9dc8c.js",
    "revision": "4dae24e0c42adca9c0cfc480a91516b4"
  },
  {
    "url": "assets/js/16.9a44b7ea.js",
    "revision": "2b27efdf590fbaf3ef7d052c666fa1e3"
  },
  {
    "url": "assets/js/17.cda31e45.js",
    "revision": "5e246fe6fb621739ba9949ca3707e24d"
  },
  {
    "url": "assets/js/18.e2d48879.js",
    "revision": "b986a7e3f377b20c4d578e9fbf58659a"
  },
  {
    "url": "assets/js/19.170f956a.js",
    "revision": "944f0b3a7c544e7da46bcd61cc6be901"
  },
  {
    "url": "assets/js/20.cb5fa7d8.js",
    "revision": "d1b023d55550071a7516439793e5c701"
  },
  {
    "url": "assets/js/21.a92945b8.js",
    "revision": "7bd566edba831a1431ef8e56e47bc84c"
  },
  {
    "url": "assets/js/22.36e06df2.js",
    "revision": "df63b2d0cd021abd8af4fed0a582e1c5"
  },
  {
    "url": "assets/js/4.a6d87ab8.js",
    "revision": "26432f57b0ddab37b5f099b8f2536f8e"
  },
  {
    "url": "assets/js/5.f5bf176f.js",
    "revision": "83f1db87e233228740e5f43d84466a16"
  },
  {
    "url": "assets/js/6.7fd85765.js",
    "revision": "1685d1c82fe3b2ccf9bcc45471636b27"
  },
  {
    "url": "assets/js/7.9f23e2d6.js",
    "revision": "64df42b19de25ca8c673ccf633653d2e"
  },
  {
    "url": "assets/js/8.6e6d57d4.js",
    "revision": "03d5f79d421d440b2863bb20efbd1749"
  },
  {
    "url": "assets/js/9.2ea73b89.js",
    "revision": "c8b3a7f29fee8577899fa7dbf32edf80"
  },
  {
    "url": "assets/js/app.f69182e3.js",
    "revision": "b25bfd3a3fa724a273250a9de3fa8d54"
  },
  {
    "url": "assets/js/vendors~flowchart.43b4717a.js",
    "revision": "f064b316a37de29cc5645b73fa9e9c90"
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
    "revision": "88836294ef92716566d4c83ef3866920"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "b361c84f80b7afd7a816b728d08a2678"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "31ce795a351f80bd6c0e4292d97dcf25"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "a82ace5c7403c32d399476ac9496b0cf"
  },
  {
    "url": "index.html",
    "revision": "0874fbd6709778662f1ef6eb784ff146"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "312ed4cd9975a1d03b93a26450845a5b"
  },
  {
    "url": "tag/index.html",
    "revision": "dfc8794aaf172272cc0622e32dfafadd"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "f2a8de2d054257a0eb162b4796b6f875"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "175f52301bde22b4a0a60f85f99e1dc8"
  },
  {
    "url": "timeline/index.html",
    "revision": "58fa1fce80e438d5b98d910ae1eb3550"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "4e0f67ea435e6aaa76d4c48c2d44c223"
  },
  {
    "url": "views/interview/200427.html",
    "revision": "7ba6772aa439e0c687aa596df8bb63bb"
  },
  {
    "url": "views/interview/index.html",
    "revision": "1600217042ae9e2fc05a4eadbb253a28"
  },
  {
    "url": "views/Web/2016/16072701.html",
    "revision": "a7863f75d36a02e02d10b82282c19353"
  },
  {
    "url": "views/Web/2019/19111201.html",
    "revision": "0a588ef707bd1497aa3d3aeabd66b60c"
  },
  {
    "url": "views/Web/2020/200416.html",
    "revision": "a0be721b4a9dd24d6fd421b38866d77c"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "96621b5ce898ffe588297b4702123aec"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "41b74cbcfca12720df6259d6def1991b"
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
