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
    "revision": "e806c029d24cb67b0361618068b99291"
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
    "url": "assets/js/10.372225af.js",
    "revision": "e931c7ffb1d1de83c3d74d768cd9fe40"
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
    "url": "assets/js/13.3c7e4f6a.js",
    "revision": "9e1c73999a5e9fcb718b173786500f51"
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
    "url": "assets/js/18.d0c9b460.js",
    "revision": "c049afc7583dcced0d2c27f81734b9c9"
  },
  {
    "url": "assets/js/19.afd2f550.js",
    "revision": "11442078e68c1a8251bcf120d5fb6170"
  },
  {
    "url": "assets/js/20.187cf91b.js",
    "revision": "c1deee0909140a3a9affad070fe9c7c4"
  },
  {
    "url": "assets/js/21.223a2364.js",
    "revision": "f2a7d84410c58b45f4bf2fa64332a7e2"
  },
  {
    "url": "assets/js/22.8b6c8641.js",
    "revision": "7cff17ddccacc45c72c49e225137e0c6"
  },
  {
    "url": "assets/js/23.0788c991.js",
    "revision": "de1cb7635c580ebc26fa8f9188857ead"
  },
  {
    "url": "assets/js/24.85fb57c0.js",
    "revision": "573304485122973cc85e12ac4dd2be0e"
  },
  {
    "url": "assets/js/25.81ff8995.js",
    "revision": "2d92475d6243a4fcf0f19d4008e4d684"
  },
  {
    "url": "assets/js/26.aa5291a0.js",
    "revision": "b92a40bbdf9a17ed52e9cefaf187a26e"
  },
  {
    "url": "assets/js/27.03fec0d6.js",
    "revision": "2b773f2926b4508b19e691604227f9e4"
  },
  {
    "url": "assets/js/28.cd1d96dd.js",
    "revision": "7b0b4b48100b9a736b48fefee6949065"
  },
  {
    "url": "assets/js/29.0bceac98.js",
    "revision": "63a9b07911be21aaba55d2ec57b9af24"
  },
  {
    "url": "assets/js/30.8323af3d.js",
    "revision": "11d7a45bc542de1bcde26d1ba71fda35"
  },
  {
    "url": "assets/js/31.45e4aea2.js",
    "revision": "a4fc1f8e83ba06f069bfe247b158e828"
  },
  {
    "url": "assets/js/32.d5b858e2.js",
    "revision": "f4f96eeda166d79600e5738e48a464c8"
  },
  {
    "url": "assets/js/33.ef88acec.js",
    "revision": "2333c6989001adf884e3475e7c2fd2a0"
  },
  {
    "url": "assets/js/34.a8a830cd.js",
    "revision": "c7dee90fedf6212ba15ad39762969228"
  },
  {
    "url": "assets/js/35.64e60546.js",
    "revision": "71633e60109addbc8a71f9bd00fae8d1"
  },
  {
    "url": "assets/js/36.b73d33cf.js",
    "revision": "602093a6e0d4434c11096548fa02d89f"
  },
  {
    "url": "assets/js/37.818dd9fa.js",
    "revision": "715542705696b6a616400fda8a7f4f29"
  },
  {
    "url": "assets/js/38.0dc4fb7d.js",
    "revision": "c746ba4107e211c670f4e4292aba3309"
  },
  {
    "url": "assets/js/39.d2b2481a.js",
    "revision": "c1ecb6185fab98e8e239902fb06f13b5"
  },
  {
    "url": "assets/js/4.927c67dd.js",
    "revision": "4aca05c9aad925fb55fae134402f9e67"
  },
  {
    "url": "assets/js/40.a9db2535.js",
    "revision": "d1509ecc7eb8e4f8cb3a20228cf332ba"
  },
  {
    "url": "assets/js/41.903a8b39.js",
    "revision": "7e0fd4e6fc5455fd5accd266ef3da545"
  },
  {
    "url": "assets/js/42.895ceadd.js",
    "revision": "8dba3a0912288fc9b861c25e90d358df"
  },
  {
    "url": "assets/js/43.73aa9555.js",
    "revision": "b269412fc40b4093925b56c53944fdd6"
  },
  {
    "url": "assets/js/44.e84be76f.js",
    "revision": "60f044a58dd13c145db3d4af8b364d88"
  },
  {
    "url": "assets/js/45.e8611f54.js",
    "revision": "c9506087157136980ca53427755ec9fc"
  },
  {
    "url": "assets/js/46.e0cdf872.js",
    "revision": "995dbbcb9f19461f52b7dd84745b64f7"
  },
  {
    "url": "assets/js/47.61d55dd6.js",
    "revision": "cfee63c64a98fbda2696c3029c228446"
  },
  {
    "url": "assets/js/48.f93d45ee.js",
    "revision": "5f948b3f7eb3140156e7e07b2851abaf"
  },
  {
    "url": "assets/js/49.a6061104.js",
    "revision": "2189deca05aa1f58465191822d046d98"
  },
  {
    "url": "assets/js/5.6a510cf5.js",
    "revision": "6c6177407644eb0b21ceb31ae86350d3"
  },
  {
    "url": "assets/js/50.b5b24976.js",
    "revision": "13556432d024c7f51a1d2ae169639c14"
  },
  {
    "url": "assets/js/51.4e1377c9.js",
    "revision": "92ba6b60e94aaa84f345367328b7812a"
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
    "url": "assets/js/app.1747b058.js",
    "revision": "1175a30f6d780499484a4021c67e1a7d"
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
    "revision": "4e1c1b7144c9187934c287dec98b6e3c"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "bf108fe23d950acd53a6be78efb88a55"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "fe8a7cbced03ab912e1f3d3bb3485688"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "fda6733f5e1ff8be4d01118bfa1e4a58"
  },
  {
    "url": "categories/前端/page/3/index.html",
    "revision": "01d346a65dd2370c5d7dec4f41182e9f"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "8482f10dcd5989ae7bf86cc1d602a266"
  },
  {
    "url": "index.html",
    "revision": "8c7e41a1636869d4b063d8549d0e0e45"
  },
  {
    "url": "tag/Cocos Creator/index.html",
    "revision": "375b6a57a9dd61e337b2ff27a1ab20d3"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "493acd862f1759d19b1ce0afbd57bbe5"
  },
  {
    "url": "tag/index.html",
    "revision": "99a0c4e49e16719190f298bbdf044eb7"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "d1e7124453c9cf5e2fd6cc8ca49fcdd1"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "0c9f8bd24fc5928e359dc2d24198e0e5"
  },
  {
    "url": "tag/VSCode/index.html",
    "revision": "0f3b1a5d787cc2dc4075a2e9866ec0a3"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "d142684f72c3b82a0d55565258a6384d"
  },
  {
    "url": "tag/学习笔记/index.html",
    "revision": "0c59bc954b7fc4d2e5840f9ed2bcb725"
  },
  {
    "url": "tag/学习笔记/page/2/index.html",
    "revision": "bb6bebdf4de171855d91a193524b1875"
  },
  {
    "url": "tag/正则表达式/index.html",
    "revision": "59dfdb1131ffa115503adf570db8a5c1"
  },
  {
    "url": "tag/珠峰高级/index.html",
    "revision": "a5a581b109f4604414899f27e72d4377"
  },
  {
    "url": "tag/珠峰高级/page/2/index.html",
    "revision": "698f848fa38052a8e30094c4444a88c8"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "65afc582aa2893d9893b5ad6be914d99"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "a8ef4d26a8ab778815560dd075014ce7"
  },
  {
    "url": "timeline/index.html",
    "revision": "52d1b9b79ea6e2a9112f307c8d832116"
  },
  {
    "url": "views/designPattern/UML类图.html",
    "revision": "ae39750064ec76cab62e5b9a1b2eaf85"
  },
  {
    "url": "views/designPattern/设计原则.html",
    "revision": "e7843d4f9bfddbca1af3f1c3ac005a17"
  },
  {
    "url": "views/designPattern/面向对象.html",
    "revision": "5e70268c4bee18ef268e341db7e8fd96"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "4ce7a3be31e1691d06ac0dbf7f182385"
  },
  {
    "url": "views/interview/ES6中this指向.html",
    "revision": "a72563c621f4801b1ef0ca103fae4886"
  },
  {
    "url": "views/interview/ES6模板字符串.html",
    "revision": "24b7ece1b158e2eb298ca84466381642"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "e0f9a9315f4eed8c719e5aac32687d52"
  },
  {
    "url": "views/interview/index.html",
    "revision": "98e26a9073cc42463c121771e8739b25"
  },
  {
    "url": "views/interview/Object.assign().html",
    "revision": "d745ffb6b98bb7343eb2bee6af747748"
  },
  {
    "url": "views/interview/webpack构建后this指向.html",
    "revision": "d00cfa0b84a59a326d9313f152e0f587"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "6b7dbffe75aa127947011a18245adc20"
  },
  {
    "url": "views/interview/变量声明.html",
    "revision": "f11d5d31c449595469264ec2f10564d8"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "527b95ac7b216fe9c44139fdb39bbe00"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "d2a0097f0c5263cbd0caa5083f0fdecd"
  },
  {
    "url": "views/Web/2020/CocosCreator01.html",
    "revision": "4193d6cd434a0e1d8ec62e6ed2cf6573"
  },
  {
    "url": "views/Web/2020/SettingsSync.html",
    "revision": "adf2f84591b4b28afe4070fda9d6c184"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/TypeScript 基础语法.html",
    "revision": "469011fdd3f3e2e9f7d36323298c48a7"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/使用 TypeScript 编写爬虫工具.html",
    "revision": "c26386f325f82b60387812ba9f0fb12a"
  },
  {
    "url": "views/Web/2020/前后端分离下的微信授权.html",
    "revision": "3e8c8e523a92ebe6e5b8169ab9be8e75"
  },
  {
    "url": "views/Web/2020/前端JavaScript高级面试/ES6.html",
    "revision": "a8ac9eefdbbafb2a98b9539372784033"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "84de754dcec5bfee996d6772f37fa15e"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "6af28ac68230b91bdc97d7949afc4e0b"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "53bf8fbde1a43ba39fe9fc05d66e63ff"
  },
  {
    "url": "views/Web/2020/正则表达式.html",
    "revision": "df9794d2f9ffd56269faa799fc242bbd"
  },
  {
    "url": "views/Web/2020/珠峰高级/0603.html",
    "revision": "bc5111d7c39f9287991d81548ba6f784"
  },
  {
    "url": "views/Web/2020/珠峰高级/0605.html",
    "revision": "d22497b51d8e49c59145096e7d03afd4"
  },
  {
    "url": "views/Web/2020/珠峰高级/0607-1.html",
    "revision": "ccc388d889e0860e3c4c0b06491b2020"
  },
  {
    "url": "views/Web/2020/珠峰高级/0607-2.html",
    "revision": "5ea84e72f3143e4761823ad32a27a0ee"
  },
  {
    "url": "views/Web/2020/珠峰高级/0610.html",
    "revision": "8c8be7592f93a75cf29e1c543b841872"
  },
  {
    "url": "views/Web/2020/珠峰高级/0612.html",
    "revision": "cfb12c5b1adb193c2909cf6268f8809b"
  },
  {
    "url": "views/Web/2020/珠峰高级/0614.html",
    "revision": "a00a95f571aa0bdbd5c62658f626fd0e"
  },
  {
    "url": "views/Web/2020/珠峰高级/0621-1.html",
    "revision": "bf5873ee846bf4f52c1972c3ea9ffacb"
  },
  {
    "url": "views/Web/2020/珠峰高级/0621-2.html",
    "revision": "0a3db62fcdd3aa7a59324216c211d4d3"
  },
  {
    "url": "views/Web/2020/珠峰高级/This处理及Call-Apply-Bind.html",
    "revision": "547d64dd0fe9862730409cb2296ae729"
  },
  {
    "url": "views/Web/2020/珠峰高级/webpack/JS中的模块化编程思想.html",
    "revision": "90d1a22e593bbf266cc0f17344052f6a"
  },
  {
    "url": "views/Web/2020/珠峰高级/webpack/webpack.html",
    "revision": "585ed9f004e3eb08be177118d7305fb9"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第一周.html",
    "revision": "b28270ac8ece589bb76a09ae1d215ce9"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第二周.html",
    "revision": "18c2aec94418fd744d3f1d90270727a6"
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
