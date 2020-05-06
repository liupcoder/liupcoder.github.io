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
    "revision": "618ebdc6380079e5c1c9fe271ff581b4"
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
    "url": "assets/js/11.93ea6c53.js",
    "revision": "2958c890196d5786bafeb249bc896b75"
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
    "url": "assets/js/21.dac882eb.js",
    "revision": "0f40d2436974ca44f1100e79a617785f"
  },
  {
    "url": "assets/js/22.166fa987.js",
    "revision": "7969648c84264776e8772f65a76b8e23"
  },
  {
    "url": "assets/js/23.0311132e.js",
    "revision": "6f8e36db5583794db136ad282be1a3d7"
  },
  {
    "url": "assets/js/24.8615fdff.js",
    "revision": "c8cde200cd23a7f488a0bf6f8ab4d511"
  },
  {
    "url": "assets/js/25.94e7ca00.js",
    "revision": "f5dc7b6c21b91cf41976af01394307f6"
  },
  {
    "url": "assets/js/26.7e1e126d.js",
    "revision": "b291a5573ce61eef649a560bd4e32fe1"
  },
  {
    "url": "assets/js/27.02d5ca69.js",
    "revision": "f80928253d008ae381442c3422e0c323"
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
    "url": "assets/js/app.848d1005.js",
    "revision": "ca8a1fb1d33b88ab175f335b367ba276"
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
    "revision": "d9ca74f038e99eb414bc6855fdfa660f"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "4f777e54efc5cd2f084b5d122e720d55"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "23bd62f19ee8e1ffab981ee1b1dc7a9d"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "219ad727fbb58b34a1f9a09f06b8857a"
  },
  {
    "url": "index.html",
    "revision": "0135e0db90a419d521d61985eb7a670b"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "0d21ab130ca1895b6bf0858fd4e3a803"
  },
  {
    "url": "tag/index.html",
    "revision": "c745450a7cc71128ec0bf47d9a14ea91"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "581aa453cd582f6b2eb97e9b431d4d01"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "4e37d5ba873502c81d722436ddf0f551"
  },
  {
    "url": "timeline/index.html",
    "revision": "549c5e368d9c96b688a7a2ae362c3955"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "154449a633eaa351e011340dc0beb3d1"
  },
  {
    "url": "views/interview/ES6中this指向.html",
    "revision": "5c29eae2c7bc44bacbc652c8867cc655"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "ec017aab8044877e3bbf279a40dcc06f"
  },
  {
    "url": "views/interview/index.html",
    "revision": "76e181acc8bf1c31a235a9716664d978"
  },
  {
    "url": "views/interview/Object.assign().html",
    "revision": "2470345df31fe9b459e464998d3a8edf"
  },
  {
    "url": "views/interview/webpack构建后this指向.html",
    "revision": "572c5fb56f1abe1640b38f2cadd96263"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "102f19ae5261a6854873f78009824a5c"
  },
  {
    "url": "views/interview/变量声明.html",
    "revision": "7d2df65ff818db3c67694a89314f3707"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "dbddca084ed2efe26e2eca371a9644ad"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "507ff9b5511abb8ca2112fd484132193"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "1516de4452403345c0a73b7c4ce9bca2"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "291dd0ebb62a53137e6edef95fe4ae04"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "7e80d237d8669fd234e1e3db522c2c71"
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
