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
    "revision": "3d736830f3e8a7afc7c6dc9573f6b719"
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
    "url": "assets/js/11.8a26b863.js",
    "revision": "152606ab3fc028dfda511108daab1a7f"
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
    "url": "assets/js/15.97df4be5.js",
    "revision": "e8b591fd94d7df28e2af1863ed1c6032"
  },
  {
    "url": "assets/js/16.d88112b3.js",
    "revision": "658c440c4fe3350728edc9cf69960dc9"
  },
  {
    "url": "assets/js/17.1e3547e0.js",
    "revision": "3b996c68cc9461ee1cc93d522b37b33b"
  },
  {
    "url": "assets/js/18.9bcab559.js",
    "revision": "237f19cf52e88c69969a235a577d0f72"
  },
  {
    "url": "assets/js/19.93dc7cf8.js",
    "revision": "5bf117e13141c62b90440f023efb233e"
  },
  {
    "url": "assets/js/20.6bd85b5b.js",
    "revision": "9d59620908eb6d25a66f9e41fbe19271"
  },
  {
    "url": "assets/js/21.2b076dcf.js",
    "revision": "ad2f365034150c0b03e8c9a23e8e8532"
  },
  {
    "url": "assets/js/22.0033d27d.js",
    "revision": "4699874a69e48a1775a19dbcc7c528ea"
  },
  {
    "url": "assets/js/23.58647e40.js",
    "revision": "1084a8c9ab661b9948a6b88032a4f0b4"
  },
  {
    "url": "assets/js/24.6e1ff572.js",
    "revision": "5e5c3dacc68b24fb4c9aaf2f6048160e"
  },
  {
    "url": "assets/js/25.0d029767.js",
    "revision": "87ae753bf779792b5d114022f5c78773"
  },
  {
    "url": "assets/js/26.d380b9ad.js",
    "revision": "a640f999e2ee2ac66800a517fda49940"
  },
  {
    "url": "assets/js/27.4a85c859.js",
    "revision": "f35663d9d82d94ca47fbecb69f189389"
  },
  {
    "url": "assets/js/28.3085e41b.js",
    "revision": "f989dcc6e3de2abfd8beabeb9ecd16cc"
  },
  {
    "url": "assets/js/29.7125c2a6.js",
    "revision": "9523d784c98a4577e1a3eaedf17e5ee0"
  },
  {
    "url": "assets/js/30.6a33a516.js",
    "revision": "6eb692a7761dc89963a701c7d983fe1d"
  },
  {
    "url": "assets/js/31.3b633115.js",
    "revision": "17012d3231f28ec4ce4e5453d4dcd3c2"
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
    "url": "assets/js/app.9d9a50db.js",
    "revision": "07041e880b1d81c503374c0924f86f8b"
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
    "revision": "aae3c98ac39ef7b551d3fb0cd6c5f752"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "def79b1a8f325bb0c1fe5bd1bd23ad1d"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "53010d4c018f5b093ec76e167cc3994f"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "d287a6147290bf3745185b4dc4e5e8e1"
  },
  {
    "url": "index.html",
    "revision": "b22a70cd87a0b84cbeab411a4f31ad51"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "dc4179fa53742976bf6a3e8517cea59c"
  },
  {
    "url": "tag/index.html",
    "revision": "c394e42b7aac67c6ecfbf8a97a347860"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "8124d1a212cacd517e5ecdce96edbe47"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "e2439bc09d3a0ddf27be544b4bed0099"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "af3103413560d1e9817d98800c289164"
  },
  {
    "url": "timeline/index.html",
    "revision": "1adda03e84cdaa971d14c05e4dd433c1"
  },
  {
    "url": "views/designPattern/UML类图.html",
    "revision": "263117e0146d0460eb3c3455cb0384f1"
  },
  {
    "url": "views/designPattern/设计原则.html",
    "revision": "a597b3e04b0b5e8dabc9a5a3409510d2"
  },
  {
    "url": "views/designPattern/面向对象.html",
    "revision": "1c748d28ca5fd9cf932f8806619920f8"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "bf8eab4c0b8e84e439aa59158cdad3cc"
  },
  {
    "url": "views/interview/ES6中this指向.html",
    "revision": "f323a9a1ad674f7a51b04a6dc33a5ec8"
  },
  {
    "url": "views/interview/ES6模板字符串.html",
    "revision": "648f9afc67cba810130d9ccc34441726"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "ff1cae1de3b538d161722a5349aa2434"
  },
  {
    "url": "views/interview/index.html",
    "revision": "c06572a5501322fc4eb8959eb24d4e20"
  },
  {
    "url": "views/interview/Object.assign().html",
    "revision": "c5168a8ba7be2696af4bb84456a9e4f8"
  },
  {
    "url": "views/interview/webpack构建后this指向.html",
    "revision": "1ae93abea0f15c9d191615ca80e0aa4b"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "3b9fa78a9c9c3707658f96c06051fe6d"
  },
  {
    "url": "views/interview/变量声明.html",
    "revision": "aa5f99f64887531a8c8c17a510294ba8"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "a1bd0e70a23a5594ba94d6582620d1c4"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "877ae16173b44cb0a7b290daf85fd370"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "1316a2c27750e97d3c986f9fb9882295"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "2c7a18ee098a1781628980daf6f6db1d"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "d810f7847ff648ef9e6baa6ad9337697"
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
