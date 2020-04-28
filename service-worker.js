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
    "revision": "ca4dff1cf05ef4c831184754a62f0c06"
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
    "url": "assets/js/app.c3c98c92.js",
    "revision": "d48864bb0ff2d5c9f1a19bbd21f2baf9"
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
    "revision": "79d712423db4096ac2f004f2ce5579c9"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "4e0c2a8e4228a54902d6db9809cdd394"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "523646f1c3c1f8aaebe1eead03f83c92"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "08a43a57f513e0e15a0bc2f85dec2458"
  },
  {
    "url": "index.html",
    "revision": "2c26662bc52feac4ff209faecf3db36f"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "66683eb0b5374500cea11251c1ec1a9e"
  },
  {
    "url": "tag/index.html",
    "revision": "6e2e3f008be74a554aef1ec241affe7f"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "6d9380fe4220242b1c80c7155ac2f680"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "0c4df56511fbf99350f1a3531ddc674a"
  },
  {
    "url": "timeline/index.html",
    "revision": "90479b25e2a87ff5040b7bf76e5b86b8"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "2a847c70cb79d66a437c871658fcb973"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "8a3eadea5c13cf5df72a11c0312fb530"
  },
  {
    "url": "views/interview/index.html",
    "revision": "03b1245c11af1c594d2e47dc46511d6c"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "ca47114ecccbab81227654a90c29fd52"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "ffefd4a63724e7c8288c09d862afff39"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "95cc37c0c3420f718cf42edf29ac4adc"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "7434b70976220332a12c1c5cfee0bf5f"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "ac4ccca23f1eef74e52f043dec687bcf"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "8f2e186553d7bfd517a633718aa45d01"
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
