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
    "revision": "553ac6a3ccb3ae575b1accf3b50c6a97"
  },
  {
    "url": "assets/css/0.styles.132fd356.css",
    "revision": "e6cef19af8ffe5938493f09d30cfdfcf"
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
    "url": "assets/js/10.067851d0.js",
    "revision": "ecdf0975f30559abab8cb5925215eaaf"
  },
  {
    "url": "assets/js/11.41c6234c.js",
    "revision": "7eded915b399ffed80fe68c6e758bcfc"
  },
  {
    "url": "assets/js/12.5b4d3a82.js",
    "revision": "e8f546fbaaac0a2a05b5361557a2f750"
  },
  {
    "url": "assets/js/13.8a38d86e.js",
    "revision": "c9d9ffcf470a3053dfe27e412e3a46a4"
  },
  {
    "url": "assets/js/14.f87337c2.js",
    "revision": "ceb22cffcc9b56c6c516bf25ecf19860"
  },
  {
    "url": "assets/js/15.e711cce1.js",
    "revision": "fc35ce0fcaa5268c69b73be50b12369e"
  },
  {
    "url": "assets/js/16.cd5ce740.js",
    "revision": "139b2e13fcd5804fc09b1b03b589e1fc"
  },
  {
    "url": "assets/js/17.0f805cb5.js",
    "revision": "b8a10f3c2ecbbaf6a568c3174b90283b"
  },
  {
    "url": "assets/js/18.ce76e908.js",
    "revision": "7120e44343be300f55eac301f52cc246"
  },
  {
    "url": "assets/js/19.4d89a038.js",
    "revision": "9ff4c407e167901834f9e5585031d8d2"
  },
  {
    "url": "assets/js/20.1da829d7.js",
    "revision": "ab4901099dd74435b814313ca3ba722c"
  },
  {
    "url": "assets/js/21.000050e0.js",
    "revision": "f8c873150f77cc7011bfad9f41aa4b8a"
  },
  {
    "url": "assets/js/22.4455dc7f.js",
    "revision": "6050b72c199fbf5de1bda0428e86ac4c"
  },
  {
    "url": "assets/js/23.ff67ba67.js",
    "revision": "8a45040c43f98fc373accbc1fbe1dd6d"
  },
  {
    "url": "assets/js/24.53c4ed5e.js",
    "revision": "0ddea388a4c02e7493d51482598457d8"
  },
  {
    "url": "assets/js/25.a5165803.js",
    "revision": "bd57227a9136ada3be5e331207a96bb3"
  },
  {
    "url": "assets/js/26.cefdd6a2.js",
    "revision": "ea2dacf22f5483d9ee4daa4a3c3080f1"
  },
  {
    "url": "assets/js/27.29779c70.js",
    "revision": "dcf33afe950550e6306a6e9ad33cc852"
  },
  {
    "url": "assets/js/28.2edec265.js",
    "revision": "bd40fba303e2378025928a9f50e761fe"
  },
  {
    "url": "assets/js/29.bd8fc02d.js",
    "revision": "77564d6b81aaa530a0ebf116a9ffe569"
  },
  {
    "url": "assets/js/30.798ced51.js",
    "revision": "4ec9a958b47873a928f156cc7bb739b2"
  },
  {
    "url": "assets/js/31.1df568f1.js",
    "revision": "e0b7fe311c20b4fabaf808671ee66c23"
  },
  {
    "url": "assets/js/32.bbe1ba90.js",
    "revision": "84ffe5d431ebfa0eb4bcd698067bd279"
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
    "url": "assets/js/app.b4c5bd45.js",
    "revision": "0971fe236aff3d06ca23ac992a084e08"
  },
  {
    "url": "assets/js/vendors~flowchart.7b8e9f18.js",
    "revision": "a269b54028221ba95b6f4d92d77df9e8"
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
    "revision": "65c22bcfff508a00828f506dac2cc8fc"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "36295a9bd1e61365f4849d0651b7caa0"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "11c4d53b55df3dd0947ebaaea1df94fd"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "812cf9b1ca74fb77772d1eb5a3fa164d"
  },
  {
    "url": "index.html",
    "revision": "b296f19c53bd5bbd6eeba01c927b3300"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "1368a71bbc746ed80563196f736fd4af"
  },
  {
    "url": "tag/index.html",
    "revision": "85942f0e8548e6c2ba7ea11dd1a39bea"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "2bac16a6954372467a0c2cf8078b724f"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "d83dd7e8ad5a1439789bca37909b92b2"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "0d45ceb911f0be9a001f8a6f1361a805"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "7f90cc79fd7c5ed17bfb3013077fa66c"
  },
  {
    "url": "timeline/index.html",
    "revision": "38007baedd87145c027bb5d2f2533f09"
  },
  {
    "url": "views/designPattern/UML类图.html",
    "revision": "595f3dcf2d530202a263b40ce6bcfed2"
  },
  {
    "url": "views/designPattern/设计原则.html",
    "revision": "7e017a95fd96d1aa0fa659eb81dc2b5f"
  },
  {
    "url": "views/designPattern/面向对象.html",
    "revision": "ee0467b02b54f93d290716bdf1da6ed7"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "d19194a1f7d23e2ff77310ca60351491"
  },
  {
    "url": "views/interview/ES6中this指向.html",
    "revision": "c0c7a4c1cfbf1bafa6b099e8bcfc6dc3"
  },
  {
    "url": "views/interview/ES6模板字符串.html",
    "revision": "efb707b5c25ebb141b693dcdee2e9512"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "50146e1cc477dbf60178ad36a329e416"
  },
  {
    "url": "views/interview/index.html",
    "revision": "fd5d6deb2d64789c400a16a040ec9836"
  },
  {
    "url": "views/interview/Object.assign().html",
    "revision": "8b719968be1514dff7dbb5a6d5ea7361"
  },
  {
    "url": "views/interview/webpack构建后this指向.html",
    "revision": "578fa62375f2202aa0bcf2688f7ca6d0"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "89db8d6bea2804266c996045eeab9c75"
  },
  {
    "url": "views/interview/变量声明.html",
    "revision": "18cf1fe4cb7d6cbcca428e7c37a85e21"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "306094cd6bf440965b5c9e50382acad8"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "4ddb83b33afdd143f5c1aa7cbed61a25"
  },
  {
    "url": "views/Web/2020/前端JavaScript高级面试/ES6.html",
    "revision": "00468c4f5f5ed523d4760c43ff6e9c42"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "73053a103055df72d6c067c0f22198d7"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "7208c2d144dfcdbd9a5facab5c4110c8"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "481b8e5b96cf0f3f241441689e34f609"
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
