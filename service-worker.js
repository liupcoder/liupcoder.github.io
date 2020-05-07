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
    "revision": "3a78826d4819b3075285ff485cddddaf"
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
    "url": "assets/js/11.bc825c4e.js",
    "revision": "054a9af8dd8215fa4919294e5fadd555"
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
    "url": "assets/js/20.15c8dbbb.js",
    "revision": "67ce385e457d9c0bc9d966e2a0a806cc"
  },
  {
    "url": "assets/js/21.53fc72fb.js",
    "revision": "a2047bb42ab312d30033ab30e6d1a46b"
  },
  {
    "url": "assets/js/22.1aea5996.js",
    "revision": "ce3af06f02854f5decf172dd403aa5a4"
  },
  {
    "url": "assets/js/23.124dcb3d.js",
    "revision": "180dcd5f6232aac1740392d8cfffcc0d"
  },
  {
    "url": "assets/js/24.84d73300.js",
    "revision": "da7328c81d6ff5d9b1d13b5386b4f85b"
  },
  {
    "url": "assets/js/25.740ec960.js",
    "revision": "0c305786ab7600ab805a9e262dd06860"
  },
  {
    "url": "assets/js/26.d09ccf19.js",
    "revision": "01cba5412ef85430494d0e6de7bba55d"
  },
  {
    "url": "assets/js/27.e19dcc39.js",
    "revision": "ad0ac97d3c7f8c41b8febcdb1b552820"
  },
  {
    "url": "assets/js/28.22b44994.js",
    "revision": "eae036bb4de6a9e3e0064b1743e6ef55"
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
    "url": "assets/js/app.2971d89b.js",
    "revision": "de860d048aef42ee06c9ea3122744b5c"
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
    "revision": "9687fab50659fce33b8c76a4ef431116"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "a1e044441bb348196391a8b7425ee695"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d0d2d41de0df1eb58bd03f6b45c007cb"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "c44feb2f94a94fecbaf63f10e8f9e098"
  },
  {
    "url": "index.html",
    "revision": "2e863ca084acba7194558163b04e6996"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "8b99d9b1fef37e4ad2288fec75bbb871"
  },
  {
    "url": "tag/index.html",
    "revision": "2d157594be1cd2ffc507d6fe4ee0fcfd"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "fb08b60f193e6f14eab80f3707bfaa84"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "9213a94ca1d2516d3e4b6cd7d635567e"
  },
  {
    "url": "timeline/index.html",
    "revision": "49e6fc8dee34c437613dba87a2b657b2"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "214489ab3c7beaff0679d8c76c39fa65"
  },
  {
    "url": "views/interview/ES6中this指向.html",
    "revision": "4abd9790f57d756c4393d7e4fb71a65e"
  },
  {
    "url": "views/interview/ES6模板字符串.html",
    "revision": "0943d7743e4468d1a8eb92de990a774a"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "9d17f6d992fc4bef62e05242638b0728"
  },
  {
    "url": "views/interview/index.html",
    "revision": "f6352141610fc4dd767bdaf71e3ff260"
  },
  {
    "url": "views/interview/Object.assign().html",
    "revision": "ba04064d15f3ddbac424e163cedc5325"
  },
  {
    "url": "views/interview/webpack构建后this指向.html",
    "revision": "b1e5fd0add1022817f25c8f35c172f89"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "cd7c6b215c21534e4e3d2c8ed5f631d1"
  },
  {
    "url": "views/interview/变量声明.html",
    "revision": "e0b9a7643dc6e5455d0da024a6f6f5ea"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "798dbc4c184e81fbb2fa31f4a9d7ca21"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "1db918a1b92b9a79a1c7b6ca3a06e1c1"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "dbc1b881006892ef54be444f9d610052"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "827df37f29041caa33ccd3a0c3969429"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "961157b9169248aeb573714b90460876"
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
