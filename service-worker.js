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
    "revision": "3ff9a3645d83747ca8da2c001431d1f2"
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
    "url": "assets/js/11.691ef866.js",
    "revision": "326d105eb8c61b87307d7557bfd17977"
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
    "url": "assets/js/15.7a7a6483.js",
    "revision": "1f884160c211a1dcdcf854f443817393"
  },
  {
    "url": "assets/js/16.77cc4c17.js",
    "revision": "77f3d55569a421fc5aaec513dbdb1c54"
  },
  {
    "url": "assets/js/17.118c4a1a.js",
    "revision": "579ea9490d4145e466de743774792399"
  },
  {
    "url": "assets/js/18.6dd3a7df.js",
    "revision": "6e1e2ddb9be07c76df839dd7280f3ec8"
  },
  {
    "url": "assets/js/19.311d3570.js",
    "revision": "70696e2ee616e952eba76be752944d17"
  },
  {
    "url": "assets/js/20.c14b2b61.js",
    "revision": "966cdb446711d85389c18cc7fd8f239e"
  },
  {
    "url": "assets/js/21.599b9ec4.js",
    "revision": "cad7ec23abd415dfd0fd1c79c95b34d7"
  },
  {
    "url": "assets/js/22.42094165.js",
    "revision": "9cf6213831161c271854055fd49a0cd4"
  },
  {
    "url": "assets/js/23.8c34f0b4.js",
    "revision": "42734e2978718a7473d28617a585e9a8"
  },
  {
    "url": "assets/js/24.82cb658a.js",
    "revision": "8be64dc23fc36c2be8c48d911416d15f"
  },
  {
    "url": "assets/js/25.7c88148a.js",
    "revision": "d6a7bb1b0e0635c6343ad0f7505ee3d7"
  },
  {
    "url": "assets/js/26.deb380ca.js",
    "revision": "0e9c545c1b4272878cf0e05e62ad7a85"
  },
  {
    "url": "assets/js/27.db555a55.js",
    "revision": "9fd6781c6c4b89ecefd2ab14b3d03888"
  },
  {
    "url": "assets/js/28.2c2ce5db.js",
    "revision": "4db7d4bdeb677b5c77cd27ace55c5924"
  },
  {
    "url": "assets/js/29.dc04db51.js",
    "revision": "6518b21ecb51f47375bd16120d4300c0"
  },
  {
    "url": "assets/js/30.d3a4a9a7.js",
    "revision": "a4ff384de84027960651dede55458511"
  },
  {
    "url": "assets/js/31.cbb47c93.js",
    "revision": "f8860b4b17d65709e7a05ec7884b77e6"
  },
  {
    "url": "assets/js/32.5c769b57.js",
    "revision": "c3c6eb028334ce0a9b8d431a6f110dd4"
  },
  {
    "url": "assets/js/33.445b4e14.js",
    "revision": "75923bf862d1ba97d0dc866e6d41e75c"
  },
  {
    "url": "assets/js/34.6818b7f1.js",
    "revision": "f13da116014c4274d17eff0f840167de"
  },
  {
    "url": "assets/js/35.53916e61.js",
    "revision": "8962caeda9982b0564b1bae944018ec1"
  },
  {
    "url": "assets/js/36.8352550d.js",
    "revision": "b358fd09a5d5674608f9046f7571752c"
  },
  {
    "url": "assets/js/37.01aacf65.js",
    "revision": "d2c1d9c2bc332ed588e961d41c06f56b"
  },
  {
    "url": "assets/js/38.29d50fc9.js",
    "revision": "3e32d3610ef8c382a6f1b4b6f7c2cce9"
  },
  {
    "url": "assets/js/39.78b0b4f8.js",
    "revision": "267467672e6787a9d3abadf165d6a06a"
  },
  {
    "url": "assets/js/4.0947438e.js",
    "revision": "7a975c313e149a2ed32df5181d03a1f6"
  },
  {
    "url": "assets/js/40.c85b277b.js",
    "revision": "53dfafb39d5ed90e49f13230e6cd6d6c"
  },
  {
    "url": "assets/js/41.254a8b9c.js",
    "revision": "f12ae956fd767b57ee9bb2a94df605e8"
  },
  {
    "url": "assets/js/42.2d9f04e7.js",
    "revision": "88deb37e1d19a9e1795e045371d7f836"
  },
  {
    "url": "assets/js/43.4074b5ee.js",
    "revision": "e573aad30bee282d014ea1c12716fa33"
  },
  {
    "url": "assets/js/44.0d259c15.js",
    "revision": "a2db6817ebeb5a89409bfbdebc78cda2"
  },
  {
    "url": "assets/js/45.77e787bc.js",
    "revision": "44590700a3be1fb58411237b729ec266"
  },
  {
    "url": "assets/js/46.bf0b3246.js",
    "revision": "3e4cabe5ea721e2c43ba76f62f16fc6c"
  },
  {
    "url": "assets/js/47.5b7feea2.js",
    "revision": "85f1d56e5273a46025ecdef8c9b06ab0"
  },
  {
    "url": "assets/js/48.94964072.js",
    "revision": "e3ef5ca7b2aa1314840c39bc6f6d6b91"
  },
  {
    "url": "assets/js/49.3467bdc8.js",
    "revision": "e48c137bfb0614de77508ebc05a36b39"
  },
  {
    "url": "assets/js/5.593a7055.js",
    "revision": "ae80f70013f8fe36f8f9b5176295f116"
  },
  {
    "url": "assets/js/50.dc6ac80c.js",
    "revision": "5cae28be2ae7e631e46923b98fd0347e"
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
    "url": "assets/js/app.d1ebfc44.js",
    "revision": "c40f35712b9a543768b4fde68fc9c150"
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
    "revision": "8866e704f3db3b3a1d3aa1d8386267ee"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "43392f05beea4b5553df4d918ffceb47"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "49a2845ce4874384d3017e5680110432"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "ab695e152db3b125253b6612e05244d7"
  },
  {
    "url": "categories/前端/page/3/index.html",
    "revision": "058edec9811f83bbe271202a4e744a60"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "35b21bc0951e5babe27badee68b5a4d5"
  },
  {
    "url": "index.html",
    "revision": "7ab851b06ceb7c270b6b66ea471e145f"
  },
  {
    "url": "tag/Cocos Creator/index.html",
    "revision": "e2b6f38b055f9225d8493573ddc6ef4b"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "ebf1c3f1fc9bc835ab545310d09c5f19"
  },
  {
    "url": "tag/index.html",
    "revision": "e7e35dafd678585dc83d8961674d4e64"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "55de53ba132ea3087daf84b4e4e2b215"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "a0eb54a8721e2b107ad6d0d4ef83f6d7"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "e0e061a74110ead75d459aca1e723723"
  },
  {
    "url": "tag/学习笔记/index.html",
    "revision": "1e461ad542509d0b2c4774e588f03afe"
  },
  {
    "url": "tag/学习笔记/page/2/index.html",
    "revision": "b08e208b1a63085207b0a3fb9658e425"
  },
  {
    "url": "tag/正则表达式/index.html",
    "revision": "f52ee2e8db8647e0e07200dc88a1b675"
  },
  {
    "url": "tag/珠峰高级/index.html",
    "revision": "336df60688b0987b2762b560b831e7cd"
  },
  {
    "url": "tag/珠峰高级/page/2/index.html",
    "revision": "7651737294dd4aa9ade4ac21d1e1efbd"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "a52e678f33a22372075798ef4c721958"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "c60d7414f1a0ad9adf8eaedfcf3b3ce3"
  },
  {
    "url": "timeline/index.html",
    "revision": "b68f098d03a13b3b3b627ea39e3d610f"
  },
  {
    "url": "views/designPattern/UML类图.html",
    "revision": "aabe479f3dfbff36d8ae646f7e2193a1"
  },
  {
    "url": "views/designPattern/设计原则.html",
    "revision": "ac345eb9cb85a6f2bb6c38acb501c811"
  },
  {
    "url": "views/designPattern/面向对象.html",
    "revision": "d2677adbc663020c9d6b74e25f34370e"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "d8b2354c0958d429bdfe72c3751d624a"
  },
  {
    "url": "views/interview/ES6中this指向.html",
    "revision": "57c030396ed26efa6a59af846568ac61"
  },
  {
    "url": "views/interview/ES6模板字符串.html",
    "revision": "599236605c5915ed812c2dd40282e9ba"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "29c7801f468ab06ffa0078700ddd514b"
  },
  {
    "url": "views/interview/index.html",
    "revision": "c627713c4d3bca04c34a239e358d98e2"
  },
  {
    "url": "views/interview/Object.assign().html",
    "revision": "282ab970554f0b2370d1d70968dc59b4"
  },
  {
    "url": "views/interview/webpack构建后this指向.html",
    "revision": "cd983a95bd530f25312daed1ced3c8b3"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "b5035fdc045bb2f7c3fc95f879a8533f"
  },
  {
    "url": "views/interview/变量声明.html",
    "revision": "f176b04ccbef0c77b4a7f7d45a4fe7b0"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "611323c8edd7cd570093c58073863a99"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "2b5f5295aeae1835eeb0b654174c1b6b"
  },
  {
    "url": "views/Web/2020/CocosCreator01.html",
    "revision": "f90b8b00fa35707f2b8afc2aa791780a"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/TypeScript 基础语法.html",
    "revision": "a009a7e1736994fbaf203e384d773f22"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/使用 TypeScript 编写爬虫工具.html",
    "revision": "ae9edc9f216b972cc78fac879b412f9a"
  },
  {
    "url": "views/Web/2020/前端JavaScript高级面试/ES6.html",
    "revision": "3881793d53b9cd57c8b25fd3142efc36"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "0f752ec446ff5fd5965dce70e99f082e"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "9e3269219403e71eb5be831d34ec72ab"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "a5ab26552fbe8b0f18f274ff3dfdd4ab"
  },
  {
    "url": "views/Web/2020/正则表达式.html",
    "revision": "38758d5a1d2742758419479a6adb1c35"
  },
  {
    "url": "views/Web/2020/珠峰高级/0603.html",
    "revision": "61b689c0cadad5a2ccb6a038bf819440"
  },
  {
    "url": "views/Web/2020/珠峰高级/0605.html",
    "revision": "4a785809e899d51474c77461a641a9c3"
  },
  {
    "url": "views/Web/2020/珠峰高级/0607-1.html",
    "revision": "ec46a258ab790af1fe8b90a361bc330e"
  },
  {
    "url": "views/Web/2020/珠峰高级/0607-2.html",
    "revision": "1cfcc15284dfa58514071e6d73fbae21"
  },
  {
    "url": "views/Web/2020/珠峰高级/0610.html",
    "revision": "03a5a34921e96433fb2a207083a67757"
  },
  {
    "url": "views/Web/2020/珠峰高级/0612.html",
    "revision": "16e210b32739bf046ac4e308997210df"
  },
  {
    "url": "views/Web/2020/珠峰高级/0614.html",
    "revision": "520c8d0ef47a6f0de0758431e65e7a81"
  },
  {
    "url": "views/Web/2020/珠峰高级/0621-1.html",
    "revision": "2e8493cb3975e4e2064c9c1f4dec56b1"
  },
  {
    "url": "views/Web/2020/珠峰高级/0621-2.html",
    "revision": "2f3d49f934b7ea4447c27cf04d69e3ab"
  },
  {
    "url": "views/Web/2020/珠峰高级/This处理及Call-Apply-Bind.html",
    "revision": "77dc12c5ed8ae469cce0fd47ec939b7e"
  },
  {
    "url": "views/Web/2020/珠峰高级/webpack/JS中的模块化编程思想.html",
    "revision": "3bb4e971208c8b4794fc0a46b837a01e"
  },
  {
    "url": "views/Web/2020/珠峰高级/webpack/webpack.html",
    "revision": "b8522cb4c3ad9d0e1cc11ba534067065"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第一周.html",
    "revision": "f2f043669fbdbb583a131aa02b9cfca5"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第二周.html",
    "revision": "a126558a519b8b72f80ab3bf185e57f2"
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
