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
    "revision": "7eb949e3322e919aa6634caf5aefc714"
  },
  {
    "url": "assets/css/0.styles.94b50677.css",
    "revision": "bbf109fc5be1e972cfaefccc12c61a2d"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.b3469939.js",
    "revision": "f71b178d5f5c384beb98574e9695fe30"
  },
  {
    "url": "assets/js/10.af82a5fb.js",
    "revision": "cf806721b0fc994e572104971b8f2675"
  },
  {
    "url": "assets/js/11.bb5b2292.js",
    "revision": "a607d7fbfc29a7841b4bd7132721fecc"
  },
  {
    "url": "assets/js/12.ecf4f9e4.js",
    "revision": "785223abf30e8dfd639adbb18e1bedbe"
  },
  {
    "url": "assets/js/13.32a595f7.js",
    "revision": "bdd6a52c288913f05b520bb5b5982846"
  },
  {
    "url": "assets/js/14.b45a2388.js",
    "revision": "577f9eb675fc2a278084992bbf2650d3"
  },
  {
    "url": "assets/js/15.22c26e6f.js",
    "revision": "47ae8d0a5ea1ae56891caa1475f02787"
  },
  {
    "url": "assets/js/16.f910e3c0.js",
    "revision": "14b7262ad7b21f778b4a6d0ee1b12b84"
  },
  {
    "url": "assets/js/17.f35ca403.js",
    "revision": "4e4c74e17cf475b20767f7c5e700a8fc"
  },
  {
    "url": "assets/js/18.2e9489d3.js",
    "revision": "eff9a656622a0634ba21169cbd8352ce"
  },
  {
    "url": "assets/js/19.331228df.js",
    "revision": "6ed629107515c5e17ec82cc73e830f49"
  },
  {
    "url": "assets/js/20.4d74efa6.js",
    "revision": "095be8ecb8d77df7d3cf9ebd4bb4ee6e"
  },
  {
    "url": "assets/js/21.00872871.js",
    "revision": "f65fd579ac92914b26dc427ac1bd0d49"
  },
  {
    "url": "assets/js/22.c6855348.js",
    "revision": "6d0c98c7668ead6a656d7edba4fceabd"
  },
  {
    "url": "assets/js/23.cafcf910.js",
    "revision": "a74ea1464b84f883409279f27ce24db2"
  },
  {
    "url": "assets/js/24.7280f570.js",
    "revision": "b3322f58b8a2dda45582945f2869cd43"
  },
  {
    "url": "assets/js/25.e2b53a8d.js",
    "revision": "a8aa592370cc4968b377637d30cf2c5f"
  },
  {
    "url": "assets/js/26.9e43dc29.js",
    "revision": "aa2218abe5543b2ec7abcb4170b405e2"
  },
  {
    "url": "assets/js/27.3c8bb5b2.js",
    "revision": "d89be48b62090a6d746b77c41a56bda8"
  },
  {
    "url": "assets/js/28.761d7130.js",
    "revision": "7509a7fc052e39370cb192e58d7db16d"
  },
  {
    "url": "assets/js/29.2d6d576b.js",
    "revision": "dfd1f7bf6ed474ce1f8a84d9e7d974b4"
  },
  {
    "url": "assets/js/30.48b41eea.js",
    "revision": "420ddf3ca106709485be3bca16acde55"
  },
  {
    "url": "assets/js/31.8ceac68d.js",
    "revision": "97b15c0d531c80c4481e6cddbc804214"
  },
  {
    "url": "assets/js/32.f0b923a3.js",
    "revision": "902e200d2b35eeee504fb408c06fc207"
  },
  {
    "url": "assets/js/33.c06f6231.js",
    "revision": "3f5f25e0c801a6035795e4f4bbf35dca"
  },
  {
    "url": "assets/js/34.7c325e17.js",
    "revision": "2c6124854ba29502db3bc08dfba9ed1c"
  },
  {
    "url": "assets/js/35.162a8412.js",
    "revision": "8a91b78ce726379fe4985fc3f7b576d2"
  },
  {
    "url": "assets/js/36.6251251c.js",
    "revision": "dd5b545330a37625642746bbdd56ddea"
  },
  {
    "url": "assets/js/37.5ec1f62e.js",
    "revision": "7c33138ae17354dd631f7d5b65617b95"
  },
  {
    "url": "assets/js/38.d63ef575.js",
    "revision": "d6074bcfe8f509bd47e1482dc9ba0a17"
  },
  {
    "url": "assets/js/39.5c792d29.js",
    "revision": "1ec9a2512b0297d56bae5f6dd3176a53"
  },
  {
    "url": "assets/js/4.927c67dd.js",
    "revision": "4aca05c9aad925fb55fae134402f9e67"
  },
  {
    "url": "assets/js/40.945d9eab.js",
    "revision": "0833a42f118b52c7e175069b9d5bb0f1"
  },
  {
    "url": "assets/js/41.43003298.js",
    "revision": "c60e1257262e8444de785958e9936939"
  },
  {
    "url": "assets/js/42.60f6c716.js",
    "revision": "3920c4026d48b2b25a6cebe5edce685e"
  },
  {
    "url": "assets/js/43.1fcc47f2.js",
    "revision": "c4b74641dae4062944e72e034fd4102d"
  },
  {
    "url": "assets/js/44.c23d6c26.js",
    "revision": "a87378bdca868706835ff5029c776c0f"
  },
  {
    "url": "assets/js/45.40d8e092.js",
    "revision": "545cab94195d641241bbd16d44e1ba68"
  },
  {
    "url": "assets/js/46.71b5b130.js",
    "revision": "1647ee5cdbc9e68cb804c476e55c5b9a"
  },
  {
    "url": "assets/js/47.ca97f954.js",
    "revision": "0a1b6f4002f227225abb69f3c51fc3cf"
  },
  {
    "url": "assets/js/48.c14c07c5.js",
    "revision": "1c461cfb5fa0983b84d1e9462ab610e0"
  },
  {
    "url": "assets/js/49.13fc1dde.js",
    "revision": "69824026595523876180f582b9b96e76"
  },
  {
    "url": "assets/js/5.6a510cf5.js",
    "revision": "6c6177407644eb0b21ceb31ae86350d3"
  },
  {
    "url": "assets/js/50.c9e13686.js",
    "revision": "2de034ea8779b2f6043649c9cf2e1854"
  },
  {
    "url": "assets/js/6.6b1e452a.js",
    "revision": "0bf7441a59e609a824c59d1fa3305e3b"
  },
  {
    "url": "assets/js/7.a2375aeb.js",
    "revision": "f03646b996468deeb635b2f3efec5de0"
  },
  {
    "url": "assets/js/8.4bb88da5.js",
    "revision": "33c1c5c0bf85b8cb153a34fe4f934308"
  },
  {
    "url": "assets/js/9.7c101c0f.js",
    "revision": "953b537b705653765b2fce874d1935f8"
  },
  {
    "url": "assets/js/app.8156f8a5.js",
    "revision": "e37c3a9519bc4b15b693ee34800716ae"
  },
  {
    "url": "assets/js/vendors~flowchart.053a0673.js",
    "revision": "3603594fca99146517f08704b7522483"
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
    "revision": "99a8e544653191ed4a53b4514fd24ac5"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "d0f1e8b59d904f65fdb01995804c1a6b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "2703f6bbc2901b838a771b9903f858d2"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "a6515158b72ce18efa5a25f8b1ecd23d"
  },
  {
    "url": "categories/前端/page/3/index.html",
    "revision": "f8fa959eeb6e284c5d62c77b0992186a"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "eef7fbada76a4ccc80cbf1b3147d33c6"
  },
  {
    "url": "index.html",
    "revision": "a99ed6e07bf2c7e197854df009eabaae"
  },
  {
    "url": "tag/Cocos Creator/index.html",
    "revision": "b2d8d974a932ca845397d25cb9881484"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "4636b4e6d1cf6ed61b893b91c69f3662"
  },
  {
    "url": "tag/index.html",
    "revision": "b61c9192c8c37f4ee066c31884a60855"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "c042749650b1ed555b740c0bc63a541b"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "93afad3f7933668ed5858ff3f4be2396"
  },
  {
    "url": "tag/VSCode/index.html",
    "revision": "8f49a07492bbbe824e3296ed5377b329"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "d79162c65cd1922f014a864294106d80"
  },
  {
    "url": "tag/学习笔记/index.html",
    "revision": "f61e44e13525fc4ad688c5d813c764f0"
  },
  {
    "url": "tag/学习笔记/page/2/index.html",
    "revision": "46a3ae28852c2820f6f20901378bf6ee"
  },
  {
    "url": "tag/正则表达式/index.html",
    "revision": "456b3aea4303fbb45248d7e64265db54"
  },
  {
    "url": "tag/珠峰高级/index.html",
    "revision": "cc1a289ecf5cedcaff7e6648f080184f"
  },
  {
    "url": "tag/珠峰高级/page/2/index.html",
    "revision": "9ea6d832e6b0ee403c38304bcc5818a4"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "4fea460a5f407310cd7416a819938f00"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "95f3c6206f79cd6d88cf0917ea2c94a9"
  },
  {
    "url": "timeline/index.html",
    "revision": "ef2a3ca32517fc5fe82f53d0ad4b9190"
  },
  {
    "url": "views/designPattern/UML类图.html",
    "revision": "762668eced6767ef627daa8f588fc360"
  },
  {
    "url": "views/designPattern/设计原则.html",
    "revision": "41ff6366b1999bb6520a15880f756161"
  },
  {
    "url": "views/designPattern/面向对象.html",
    "revision": "452aed43ef58163f3932c3606c5cc2ce"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "5e250d1a195a338dc72cc25cbd163f01"
  },
  {
    "url": "views/interview/ES6中this指向.html",
    "revision": "a1b323d2d633a20f9e14baa4ffb7c54a"
  },
  {
    "url": "views/interview/ES6模板字符串.html",
    "revision": "57bdf7c0c0ae973a0a9d3cfdbb2cd149"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "03803846797bae09c6031a07be3715c5"
  },
  {
    "url": "views/interview/index.html",
    "revision": "5d1f19c6e88b2b3021a44e34130520c2"
  },
  {
    "url": "views/interview/Object.assign().html",
    "revision": "93b2f136a6218937c5bd324882e70c3b"
  },
  {
    "url": "views/interview/webpack构建后this指向.html",
    "revision": "09fabcfaa3bee730480a771cb06938ca"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "68c0001e7ca790cfc5e56064265fa309"
  },
  {
    "url": "views/interview/变量声明.html",
    "revision": "5f90b70debec29d2afa6158efa9ab835"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "19dcd0791f459dbba37c8585ef1a1c44"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "adbb11d131e52eb2122ba8119a1776e5"
  },
  {
    "url": "views/Web/2020/CocosCreator01.html",
    "revision": "78c8623186706e4fa20ddbf9791e3759"
  },
  {
    "url": "views/Web/2020/SettingsSync.html",
    "revision": "6653f7af53f63b6df104b39b6066d3fa"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/TypeScript 基础语法.html",
    "revision": "6ee77bda0383e2562e05f3e00557f1f7"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/使用 TypeScript 编写爬虫工具.html",
    "revision": "25bf21fb2482a67a3f17dfbb2e7d63ff"
  },
  {
    "url": "views/Web/2020/前端JavaScript高级面试/ES6.html",
    "revision": "3a8ee036ce670847c8d6dc7a0f6aa166"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "67bf60af9b608d1d51008a0b74621464"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "20149a70eb0e13e55282790b375d1863"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "207c17378a10b128c3a3b86c3602374a"
  },
  {
    "url": "views/Web/2020/正则表达式.html",
    "revision": "01b950f1d8a82a7cc1ee451501eef3ab"
  },
  {
    "url": "views/Web/2020/珠峰高级/0603.html",
    "revision": "51a5fa17249e478ea6f99525e36970ab"
  },
  {
    "url": "views/Web/2020/珠峰高级/0605.html",
    "revision": "52cfc6238be6b66554805b47498924a5"
  },
  {
    "url": "views/Web/2020/珠峰高级/0607-1.html",
    "revision": "670b08b88319cbf2980769d87e90af41"
  },
  {
    "url": "views/Web/2020/珠峰高级/0607-2.html",
    "revision": "1feb0f3329445bbe40c720054c45e707"
  },
  {
    "url": "views/Web/2020/珠峰高级/0610.html",
    "revision": "c318d1f1a72b4fe45ecae9347ad85f4e"
  },
  {
    "url": "views/Web/2020/珠峰高级/0612.html",
    "revision": "ec3b1b4b71d14e6b580c5664de5209d7"
  },
  {
    "url": "views/Web/2020/珠峰高级/0614.html",
    "revision": "ffe8ef77506c25701459043bc75eaf63"
  },
  {
    "url": "views/Web/2020/珠峰高级/0621-1.html",
    "revision": "bd469454391e31fd992b437cf2d51978"
  },
  {
    "url": "views/Web/2020/珠峰高级/0621-2.html",
    "revision": "563be9c440b29ad4a099bb0febc916f5"
  },
  {
    "url": "views/Web/2020/珠峰高级/This处理及Call-Apply-Bind.html",
    "revision": "5d8790d6e1e884d8c8b1059cd7fc4153"
  },
  {
    "url": "views/Web/2020/珠峰高级/webpack/JS中的模块化编程思想.html",
    "revision": "be7424dd8d4fb18786f71a93ff83c4ba"
  },
  {
    "url": "views/Web/2020/珠峰高级/webpack/webpack.html",
    "revision": "afc9944878b3a525e2f079eacf286482"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第一周.html",
    "revision": "d88f3d6c2b29dc0e6aa2537e6aef9a39"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第二周.html",
    "revision": "95525030a305fc8ea4bd53d3dd3e859f"
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
