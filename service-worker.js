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
    "revision": "a5c941e7751d91cb7194ed0a9ebbe570"
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
    "url": "assets/js/11.3c6b8fa4.js",
    "revision": "24d7ee572485cbbbbf6065b95138d7cf"
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
    "url": "assets/js/14.5f420380.js",
    "revision": "3b4e1be893e03af9c9be4e36b7598eee"
  },
  {
    "url": "assets/js/15.7c24e4f6.js",
    "revision": "93665cc011b82d560c3bb2f19972bbb7"
  },
  {
    "url": "assets/js/16.84e533b8.js",
    "revision": "d78bc9723de3fe39ca9924a19fb98df4"
  },
  {
    "url": "assets/js/17.db70cb6f.js",
    "revision": "a4b227a4a8a4c2bbf59e0780e563d378"
  },
  {
    "url": "assets/js/18.610c79ad.js",
    "revision": "a92fce02b3e4d7780b689153dc4e7385"
  },
  {
    "url": "assets/js/19.7b6d02b1.js",
    "revision": "a0c6989ff697a85ee8bf01fb4c1c5dc4"
  },
  {
    "url": "assets/js/20.ea79aa6c.js",
    "revision": "ca46dbaccf4978dddf6f495e6bafcb81"
  },
  {
    "url": "assets/js/21.313f261e.js",
    "revision": "d9a6d2aa1777f35fffa0f814dace2484"
  },
  {
    "url": "assets/js/22.75024a55.js",
    "revision": "3c91a9a8299da60aee84acfc03b72941"
  },
  {
    "url": "assets/js/23.13313dff.js",
    "revision": "5dc8b3552567aa4a02c9ed46360ca1cb"
  },
  {
    "url": "assets/js/24.a8a6207d.js",
    "revision": "11031603ece0acf9faa07dc9178efad2"
  },
  {
    "url": "assets/js/25.3d9e7194.js",
    "revision": "648112ac53526a7fa497961c6c1a1137"
  },
  {
    "url": "assets/js/26.9998ea70.js",
    "revision": "945e6ae682d2233a9dfbabc01d4c2512"
  },
  {
    "url": "assets/js/27.077aa524.js",
    "revision": "82a743a1a78bf2fe51bc055ae40aa34a"
  },
  {
    "url": "assets/js/28.c9f3ae09.js",
    "revision": "1f51c78aa330fa1e39fc6f24418b3041"
  },
  {
    "url": "assets/js/29.f09dc2fc.js",
    "revision": "3c4eb2187488c99350d5a6db0ca58c23"
  },
  {
    "url": "assets/js/30.32e2b51b.js",
    "revision": "9625113538db700697fcdd465493357b"
  },
  {
    "url": "assets/js/31.94289f03.js",
    "revision": "c6d800f7afbef03c7d68448e71a4b320"
  },
  {
    "url": "assets/js/32.ab936aa2.js",
    "revision": "0743984154136c007674224c427ac7dc"
  },
  {
    "url": "assets/js/33.bc4558de.js",
    "revision": "f0f7bf1d1e9f0996750801505c69880f"
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
    "url": "assets/js/app.abb69521.js",
    "revision": "d1104e754a52ee24c203647bc7758797"
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
    "revision": "3193b357d3d019387a75fb68baa22d68"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "c4b7b3820bcfe1c30b37b10fbedbb0e0"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "0d53fc8341ab67c73c902d819cbdf540"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "3871dbd2d9a33412d648d0587c98cedb"
  },
  {
    "url": "index.html",
    "revision": "8f1eb7b9977ed2bad9fb0d9be1d2c4f9"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "68c6785fabe88e7a285039e60a0c86b6"
  },
  {
    "url": "tag/index.html",
    "revision": "f82d150f0a92d3f7822414ba49edfb08"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "129846e343637b318609ec1e3ad2c50e"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "803f4124c7494232b9cb85aaa6be4573"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "2372d5165f2c9b7cc1af9666555a88c3"
  },
  {
    "url": "tag/学习笔记/index.html",
    "revision": "a21d3394e01707182ee8ddab31a29b58"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "bd305d774b3af9c3fd92cb6c34e2356a"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "7f116136e12b400bd6ebbcceafbd7237"
  },
  {
    "url": "timeline/index.html",
    "revision": "a863b5b3bd30b304b2a780a45ea1bace"
  },
  {
    "url": "views/designPattern/UML类图.html",
    "revision": "c196288249207abbbf7b4bcc16916700"
  },
  {
    "url": "views/designPattern/设计原则.html",
    "revision": "f22f90b53600b05a6efc2c0a518f4160"
  },
  {
    "url": "views/designPattern/面向对象.html",
    "revision": "bf766fa886606d932316560f7ccd1a96"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "cd5be35e7fe9a83266f612ee2fc6c073"
  },
  {
    "url": "views/interview/ES6中this指向.html",
    "revision": "1c9f80101b4d4b077e40b9774e5346f5"
  },
  {
    "url": "views/interview/ES6模板字符串.html",
    "revision": "7ef4047cff10e09809c5f8ea3965879f"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "d1d7f2fc6d415c5f13c5623f90c6b5df"
  },
  {
    "url": "views/interview/index.html",
    "revision": "621c3f7c47befa8a23a5e9f7fdaf73d4"
  },
  {
    "url": "views/interview/Object.assign().html",
    "revision": "911b2f8be842748f442c27973eb6ff94"
  },
  {
    "url": "views/interview/webpack构建后this指向.html",
    "revision": "65d69957e7218af9573bd064ed4bf802"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "d0d0fc506f393c859a99e32367a01f51"
  },
  {
    "url": "views/interview/变量声明.html",
    "revision": "3a92968b6843677da13fab7355107b13"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "2d25641127d03052764192cc4c7d4baa"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "bc1fdb66884b34f4ecd3147c2586c038"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/TypeScript 基础语法.html",
    "revision": "214b838baed1449f2c8bea1d2c33f7f1"
  },
  {
    "url": "views/Web/2020/前端JavaScript高级面试/ES6.html",
    "revision": "49ac2a4234fd711402e544d54d184e2b"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "34291ddf541a576e266709efac91dd74"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "c88733071489c8947776e34d6cb592a0"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "027d05416d78f5f6e248bb54c1e46d23"
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
