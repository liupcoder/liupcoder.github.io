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
    "revision": "daa416a24e6ae061912caa3667bbf473"
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
    "url": "assets/js/app.9bd26c54.js",
    "revision": "a36fd7ccc3471133c9d6f3745ff1e200"
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
    "revision": "41e3825db0d6af6c238dc9b694c420bd"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "085805f5572d1cf8d8eda93c9f3d3153"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "96f60f36f9e9e46f2942406556a59cd0"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "fd8094b7d834f261dbb9b02ed9ca8823"
  },
  {
    "url": "index.html",
    "revision": "1bf4471b0842ad75f5ee51498366c8b2"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "c63ae0092d3a4af916e6cbd21373c1ba"
  },
  {
    "url": "tag/index.html",
    "revision": "a8e5d69d4fc45692ed7cba3773c330cd"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "c59fe976ee5ccbe40952c5f327df9538"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "ce348fc01edc1421e2cca50b6557d4a6"
  },
  {
    "url": "timeline/index.html",
    "revision": "2a01cbfe509403bcadae02cd8c5ffbab"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "f379c0b4d0c664bb143aa0d9d0d2b6df"
  },
  {
    "url": "views/interview/ES6中this指向.html",
    "revision": "1697b862eb750a11d235f271cdf909a6"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "14414132d77089d06a373455c7f84834"
  },
  {
    "url": "views/interview/index.html",
    "revision": "997935a5349393b8138e277911fec14f"
  },
  {
    "url": "views/interview/Object.assign().html",
    "revision": "e3cd4a79336e271485392a60b63ccf35"
  },
  {
    "url": "views/interview/webpack构建后this指向.html",
    "revision": "ee971b737d07e0afb19a7c0aabc60b8a"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "fb8208f45a6b98665e732dea3f68b954"
  },
  {
    "url": "views/interview/变量声明.html",
    "revision": "8478f807132c54e58a3af0fa5eeff398"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "721d442c6248183e29ea4fea10f4ea56"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "f36f4132c2174e2ad2bf81220354220e"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "2013c70736c3de9e35409fd013d67ca9"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "4e60097f22abb57161e44da4929e1261"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "712425b5562df175ac99ae639f868bee"
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
