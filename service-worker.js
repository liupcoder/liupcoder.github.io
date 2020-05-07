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
    "revision": "3608cb1718c2859f2a287d3ea516b61a"
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
    "url": "assets/js/15.493ce143.js",
    "revision": "32cc301fca21c88cf66ca63fb4a99a21"
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
    "url": "assets/js/app.a88de1c5.js",
    "revision": "656626be3fffc67919c90e7688d49824"
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
    "revision": "5b257691d7eaaca46ae99149b3720fc6"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "9d730280bc6adcdea0723d97940758cb"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "5c35e6dca972a4d0cd72a81e3bfb5263"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "5e5deeb1a34d948f5731945d8a498a76"
  },
  {
    "url": "index.html",
    "revision": "ed0d18ee4e13066756101f4bc61cb932"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "3ecf2e1cfab377886759705bf2ddb3f1"
  },
  {
    "url": "tag/index.html",
    "revision": "1165fb7cac0ef090d040b7472b50e8c4"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "8924fb0427444aed240def9cd7bdc736"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "f4a7fca238b118a45ad92aa00b9975e4"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "90b36310b9cc6eabe2df4df515448ecf"
  },
  {
    "url": "timeline/index.html",
    "revision": "2a9a7d0a4df2705ca5efda152875491f"
  },
  {
    "url": "views/designPattern/UML类图.html",
    "revision": "b485fe8b99ca2e9bd70eef7c3de3e75e"
  },
  {
    "url": "views/designPattern/设计原则.html",
    "revision": "15b5df07821621883c9d58d243bced39"
  },
  {
    "url": "views/designPattern/面向对象.html",
    "revision": "9c4812a0cd4d222dab2fc0823f01775a"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "b2ce3a2c248ef6e2c77701400178b1e7"
  },
  {
    "url": "views/interview/ES6中this指向.html",
    "revision": "7e6de02806cf6974960db16b95b8e794"
  },
  {
    "url": "views/interview/ES6模板字符串.html",
    "revision": "0d7eaae822b9efb52dfaafbaf1813f47"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "c79116ba227c3461fde0908710c61d25"
  },
  {
    "url": "views/interview/index.html",
    "revision": "cc7985b69a4b799223158b24f4ee0d5d"
  },
  {
    "url": "views/interview/Object.assign().html",
    "revision": "0f157be731a8e8b048eca79bd6413139"
  },
  {
    "url": "views/interview/webpack构建后this指向.html",
    "revision": "dab3e5d60e0a58b102fb74f59688670c"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "ee813e4ce541bd86c1588656cc44d240"
  },
  {
    "url": "views/interview/变量声明.html",
    "revision": "fb298557d3b4903bceb9aeacf0bb442c"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "b31a73da058ef7507a4bcdc23b1a82f9"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "16e653f44b19f61e5955661100dfee62"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "edaa980ceb8fe0fd1ba79c25c8a754a4"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "845c6baaf7517543a6725e705523c0fa"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "b34ba29501ee14d129ba9f2d13c04c09"
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
