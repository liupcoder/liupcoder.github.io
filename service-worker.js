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
    "revision": "bd00207c1ce6125de834a280b7b7aa4b"
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
    "url": "assets/js/1.6a87662b.js",
    "revision": "990034e06b9480b59c74c8234cd2740c"
  },
  {
    "url": "assets/js/10.02b17500.js",
    "revision": "af9db4f5588e135f9da4a2f8fc3eb2ef"
  },
  {
    "url": "assets/js/11.3c6cee6f.js",
    "revision": "9d2a19d5b1fe2c844a9d3c6c80f56068"
  },
  {
    "url": "assets/js/12.95d529ef.js",
    "revision": "e8f546fbaaac0a2a05b5361557a2f750"
  },
  {
    "url": "assets/js/13.88f9c30a.js",
    "revision": "c9d9ffcf470a3053dfe27e412e3a46a4"
  },
  {
    "url": "assets/js/14.aba7075d.js",
    "revision": "f7e99089976287f3e961dc4ee3881761"
  },
  {
    "url": "assets/js/15.37031935.js",
    "revision": "13df651f0b19d77a9cc25b9f45bfacfb"
  },
  {
    "url": "assets/js/16.188ca990.js",
    "revision": "e69b3425b1f1f55418a27ec946742c80"
  },
  {
    "url": "assets/js/17.056245bd.js",
    "revision": "cbf718647a48e0505ed97645b4473754"
  },
  {
    "url": "assets/js/18.7ada268b.js",
    "revision": "313a9f5c4f6afe098a7c98393e9d77eb"
  },
  {
    "url": "assets/js/19.fb70849b.js",
    "revision": "4f45ab8774a662dc2c1d205f3497d306"
  },
  {
    "url": "assets/js/20.ed1a5c24.js",
    "revision": "6a4e5a7d70d59898371d5f50e86bd173"
  },
  {
    "url": "assets/js/21.e810fe6e.js",
    "revision": "c9e9b9159212ddb9c466cb09e6aa8d38"
  },
  {
    "url": "assets/js/22.b0dcb9ee.js",
    "revision": "1f92c17a9fb99dc1f7da36adbea6914d"
  },
  {
    "url": "assets/js/23.e1697b64.js",
    "revision": "5977666ce086d4afba02dce4f2b19a77"
  },
  {
    "url": "assets/js/24.914f8d34.js",
    "revision": "99ea0833451471adc8b1a015af735c12"
  },
  {
    "url": "assets/js/25.1b3f7041.js",
    "revision": "79a493a377c3d95a8e11cd2d3faf9b56"
  },
  {
    "url": "assets/js/26.1808c610.js",
    "revision": "e7249dede30311b6b55f65d95c1cb660"
  },
  {
    "url": "assets/js/27.f9d452e6.js",
    "revision": "3f619b7f3b839af759288bb83e5cdf2f"
  },
  {
    "url": "assets/js/28.3537ed7a.js",
    "revision": "023a10ce8117639eddbfec9a0b08f3e6"
  },
  {
    "url": "assets/js/29.50a834e8.js",
    "revision": "d5a90ea87bf766e34f7168ee4e79568c"
  },
  {
    "url": "assets/js/30.5f0dae00.js",
    "revision": "3667d353b3bc32da5d3bbf2f7f7ab3d4"
  },
  {
    "url": "assets/js/31.027f5ec1.js",
    "revision": "6ec11210b2f3f2bc89c9adef82656304"
  },
  {
    "url": "assets/js/32.314580e3.js",
    "revision": "f111ff4ba4f694d70528e601d460d033"
  },
  {
    "url": "assets/js/33.a285caed.js",
    "revision": "b0f92a87689cbb2b1e76155a028a592b"
  },
  {
    "url": "assets/js/34.23cf0f65.js",
    "revision": "bd3cfad557529b0fd9898bcda77fc1b5"
  },
  {
    "url": "assets/js/35.2770dc6c.js",
    "revision": "de65785415dca75b84b52f2ff8dcb5b7"
  },
  {
    "url": "assets/js/36.f11af7b1.js",
    "revision": "79ef928f0c7f5b4ac6cd262293fb8c51"
  },
  {
    "url": "assets/js/37.2db00610.js",
    "revision": "32be92bd6f7666733d174fe6aeeffcc4"
  },
  {
    "url": "assets/js/38.65caf157.js",
    "revision": "0e002e2a8afe02a3d438236e297ab235"
  },
  {
    "url": "assets/js/39.3cbb4a89.js",
    "revision": "6995610c33af733d1558539de97caacc"
  },
  {
    "url": "assets/js/4.0947438e.js",
    "revision": "7a975c313e149a2ed32df5181d03a1f6"
  },
  {
    "url": "assets/js/40.e6eb977b.js",
    "revision": "76804b5b993973fdd5ea21c877211419"
  },
  {
    "url": "assets/js/41.5231d859.js",
    "revision": "5b1876eaf9fabc6418391dd56e353056"
  },
  {
    "url": "assets/js/42.dce567bd.js",
    "revision": "fbb3c9bff9b6b8e816ea57f93fffbe53"
  },
  {
    "url": "assets/js/43.c8a57912.js",
    "revision": "5cc8bcded80f0fce5c44fb2616dbf971"
  },
  {
    "url": "assets/js/44.353148b5.js",
    "revision": "42e01915d2ca97e33c02298182ef1379"
  },
  {
    "url": "assets/js/45.4549d3b8.js",
    "revision": "82047dad3d63c960b34541f9ddfb4587"
  },
  {
    "url": "assets/js/46.4cd9094b.js",
    "revision": "8275cdfdb7d495fa65ba7391ad797302"
  },
  {
    "url": "assets/js/47.5216155b.js",
    "revision": "ffd59d1205798b2ef40685971ba4818f"
  },
  {
    "url": "assets/js/48.7886e262.js",
    "revision": "738f41f56cae95e73a97dd3ac45cde8e"
  },
  {
    "url": "assets/js/49.685c92af.js",
    "revision": "80ef5b11a6a174f5e2488e9554867faf"
  },
  {
    "url": "assets/js/5.593a7055.js",
    "revision": "ae80f70013f8fe36f8f9b5176295f116"
  },
  {
    "url": "assets/js/50.45273492.js",
    "revision": "fbb6a3955c18cd66bb36f3b4245ed480"
  },
  {
    "url": "assets/js/51.48d9af13.js",
    "revision": "f20cc85353cb7ce061e23a2a73c2402b"
  },
  {
    "url": "assets/js/6.abb14bed.js",
    "revision": "0a4d3f5ebc725e259fcfd848ca797b41"
  },
  {
    "url": "assets/js/7.c1e95d6e.js",
    "revision": "b378703ab08139b388754aba242596b2"
  },
  {
    "url": "assets/js/8.98bf32ae.js",
    "revision": "175a5501b8db5cf0c4e3a736060e49a5"
  },
  {
    "url": "assets/js/9.9582f296.js",
    "revision": "59094ae81e76d06deeb03ca9de583961"
  },
  {
    "url": "assets/js/app.c3d5a7d4.js",
    "revision": "483d7805e26edee8511adfeaa0e858ce"
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
    "revision": "e0b68acae378de51505c1b56a199f42b"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "d2719aedc352aa86d4c9003f240e9be8"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c8e06235634107d19a2706db6a681d6d"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "858044217661a8e803d9398c11105976"
  },
  {
    "url": "categories/前端/page/3/index.html",
    "revision": "0fea8c33f9b3e1761714dfe67220d6c3"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "2fbfa067465e49a88047bf0a98b3657e"
  },
  {
    "url": "index.html",
    "revision": "e54120cf383c2483518f978dc67fe897"
  },
  {
    "url": "tag/Cocos Creator/index.html",
    "revision": "9a0fa3c576b083bd8053e7b4220ef2c7"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "2aca05492e74fcc35bec99dcd2f036fb"
  },
  {
    "url": "tag/index.html",
    "revision": "b0992eafa9ad633c421e0b205d9b9dac"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "f8d0d4074a4f7ed9eed5fe782a4ed33a"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "6ebcce112dc963b0db7b37972b3a8351"
  },
  {
    "url": "tag/VSCode/index.html",
    "revision": "41cc88bcbcb969b611c09e9aaa013009"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "51ca82e11e61d0827823b5ed488168e8"
  },
  {
    "url": "tag/学习笔记/index.html",
    "revision": "3e9be38aa20654bb8b5a27e5db99d350"
  },
  {
    "url": "tag/学习笔记/page/2/index.html",
    "revision": "48a42ef92fb5028e8a5ac5ae8e3c8637"
  },
  {
    "url": "tag/正则表达式/index.html",
    "revision": "f006959aad537d6eda00b507b6f0c5f0"
  },
  {
    "url": "tag/珠峰高级/index.html",
    "revision": "e6b39c90dd03719ab77dfcf2323daa44"
  },
  {
    "url": "tag/珠峰高级/page/2/index.html",
    "revision": "006cbb86283637fd9c7b41f30cd33856"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "3ff71fc02e56ee78fc9fa5e58290bb05"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "c88ae64580e9bf9c913a435e71d9046b"
  },
  {
    "url": "timeline/index.html",
    "revision": "30f3d4192c173f1ef71cfc2d9c403984"
  },
  {
    "url": "views/designPattern/UML类图.html",
    "revision": "b574e3a3b55dcd66a10a37c0181c14a8"
  },
  {
    "url": "views/designPattern/设计原则.html",
    "revision": "fbedcf8d7ca4ba79ffb499bfc65ffad4"
  },
  {
    "url": "views/designPattern/面向对象.html",
    "revision": "1bbcbc8b941175f2f96c40c0a0cd6809"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "3e382233174d476816f127b61169498e"
  },
  {
    "url": "views/interview/ES6中this指向.html",
    "revision": "848303b17fd07409c8038feccfe892b2"
  },
  {
    "url": "views/interview/ES6模板字符串.html",
    "revision": "72e0088770c2bd2a535b283d410c0b61"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "dc326a84bbac0b3cb13d9e8bda102779"
  },
  {
    "url": "views/interview/index.html",
    "revision": "c420fa1e47dbc221ef1205837d3a4219"
  },
  {
    "url": "views/interview/Object.assign().html",
    "revision": "ede0f539f21845502ff7a94c0e27e687"
  },
  {
    "url": "views/interview/webpack构建后this指向.html",
    "revision": "dc30adedd8a105dc1e2db81c51688914"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "8a1057086803aeef0c1ae9b1e6b9a95c"
  },
  {
    "url": "views/interview/变量声明.html",
    "revision": "2f5c064f77733cc4e8cf0829f97c71e9"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "4cd31302cb8312f5089cb136f1299080"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "fa6ae41dfb5f7b50e199df112e792f28"
  },
  {
    "url": "views/Web/2020/CocosCreator01.html",
    "revision": "1eabd5a285e3e240c1f15f689df81b47"
  },
  {
    "url": "views/Web/2020/SettingsSync.html",
    "revision": "2dc7358e6e5fb60cf4ccd434e724d92c"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/TypeScript 基础语法.html",
    "revision": "2e354040ff3b5bd43d6862957299e7b8"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/使用 TypeScript 编写爬虫工具.html",
    "revision": "807108c046f6dc5d9b24d5282c7fa7ab"
  },
  {
    "url": "views/Web/2020/前端JavaScript高级面试/ES6.html",
    "revision": "c3431e3a91d5ce3ff145125cfb4bbfae"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "4b901ed49f96f5e3247b7aa957ccca00"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "35177aed6f9362536bf82e6fec806668"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "c8896c6a0843510dc4235a672177e35a"
  },
  {
    "url": "views/Web/2020/正则表达式.html",
    "revision": "df1afeebf63a72d0755c1fd652ab6afa"
  },
  {
    "url": "views/Web/2020/珠峰高级/0603.html",
    "revision": "2bfed9a622b7433c5de62004cdf245bb"
  },
  {
    "url": "views/Web/2020/珠峰高级/0605.html",
    "revision": "3a94a48d15a251bfb429ec24395d6c0a"
  },
  {
    "url": "views/Web/2020/珠峰高级/0607-1.html",
    "revision": "81dfbd1ac707ac165805ea53ad5197c3"
  },
  {
    "url": "views/Web/2020/珠峰高级/0607-2.html",
    "revision": "4c17f9f336ac3eb6214ed6f5e5775422"
  },
  {
    "url": "views/Web/2020/珠峰高级/0610.html",
    "revision": "5bc317601d35fa1da0b1eb4f0b1a6713"
  },
  {
    "url": "views/Web/2020/珠峰高级/0612.html",
    "revision": "d3fd1aff1ae9a9333196ef2182b23333"
  },
  {
    "url": "views/Web/2020/珠峰高级/0614.html",
    "revision": "833784b4a392655ae646ec6bed8f7692"
  },
  {
    "url": "views/Web/2020/珠峰高级/0621-1.html",
    "revision": "71d4a585a5c0a3ca8314136b8e56b062"
  },
  {
    "url": "views/Web/2020/珠峰高级/0621-2.html",
    "revision": "a4a1301d4ae731c45410826732711729"
  },
  {
    "url": "views/Web/2020/珠峰高级/This处理及Call-Apply-Bind.html",
    "revision": "59876219c47c9c0f63519e2d9e31e1a1"
  },
  {
    "url": "views/Web/2020/珠峰高级/webpack/JS中的模块化编程思想.html",
    "revision": "a40169fcf0b440a8f39cc80ef410b059"
  },
  {
    "url": "views/Web/2020/珠峰高级/webpack/webpack.html",
    "revision": "7dbbf62636284e4c8075893c2cbe2b80"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第一周.html",
    "revision": "fa5fd51a23a22408681716c6df3fd2be"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第二周.html",
    "revision": "7060b4df5ffb5fd22b52bddc1a60e06d"
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
