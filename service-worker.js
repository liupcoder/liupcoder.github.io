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
    "revision": "0a978154a1d3e5bcb2b8e58fb0896490"
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
    "url": "assets/js/10.18dfb3fb.js",
    "revision": "8d3d848ab5db2a1553ebf1d12940fb49"
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
    "url": "assets/js/16.6ef14ca2.js",
    "revision": "30c69437d57cf42f368a5a19f0775a78"
  },
  {
    "url": "assets/js/17.5354dfc2.js",
    "revision": "8a0d182a359e2e025fb9ff948ead5758"
  },
  {
    "url": "assets/js/18.82341d20.js",
    "revision": "7765c2b7f1f76ef975b1216715cfa3a5"
  },
  {
    "url": "assets/js/19.f81b4962.js",
    "revision": "d3ce66f781fc4460d058d6716dfbcc8e"
  },
  {
    "url": "assets/js/20.dd967dfa.js",
    "revision": "a5d3e34202dc415fbd9a35fb7ccfb95d"
  },
  {
    "url": "assets/js/21.30f8ad68.js",
    "revision": "51a86f4da737a5fb5bf8f877ea53883f"
  },
  {
    "url": "assets/js/22.683a6f2c.js",
    "revision": "a958169456f534134677d9f13eb2bc2c"
  },
  {
    "url": "assets/js/23.e04595f4.js",
    "revision": "59e80638f7b9358c27d515ed1406007a"
  },
  {
    "url": "assets/js/24.1d63b2d3.js",
    "revision": "0d07fd24b22db2cecfad34c38c23780f"
  },
  {
    "url": "assets/js/25.1ac5d955.js",
    "revision": "3ab8d2dc6e150d36e279ae5f2402c280"
  },
  {
    "url": "assets/js/26.12dea1a0.js",
    "revision": "7a4daf93a7a3d6beb89756c4f25c219e"
  },
  {
    "url": "assets/js/27.c7957a9f.js",
    "revision": "15dc0c87f0b1dff7da6ea68ecf2693c8"
  },
  {
    "url": "assets/js/28.06006370.js",
    "revision": "643908e4623e0b3a79e8835261b80c42"
  },
  {
    "url": "assets/js/29.1b0f53a2.js",
    "revision": "4a99f3821566757e7c0d344a5d232f29"
  },
  {
    "url": "assets/js/30.32cbe14f.js",
    "revision": "d9c4a1d3804d1b9778ed4535f234a98b"
  },
  {
    "url": "assets/js/31.099dcb8f.js",
    "revision": "f8edb3c4514c11a267730722515fc439"
  },
  {
    "url": "assets/js/32.143715c3.js",
    "revision": "56e18e6abea92c977ec1a0bbebf7d55e"
  },
  {
    "url": "assets/js/33.39ee27a6.js",
    "revision": "2d418766eb37047b6a9cfee5edb6092a"
  },
  {
    "url": "assets/js/34.39c49565.js",
    "revision": "be5881a8feb4d16f759b26fd6436da02"
  },
  {
    "url": "assets/js/35.f7150fcc.js",
    "revision": "8779bc643eabf81f06131e3e97964706"
  },
  {
    "url": "assets/js/36.c0aaf990.js",
    "revision": "e9161fd206e41d01dbf9a1aaad43c69d"
  },
  {
    "url": "assets/js/37.eebac54d.js",
    "revision": "9f67d75ca408b3ef09ad76dbb0ab7554"
  },
  {
    "url": "assets/js/38.44de9652.js",
    "revision": "e0451aff88ab9071209ffd68a42c3ec0"
  },
  {
    "url": "assets/js/39.812e20db.js",
    "revision": "8f81e4a9cbc428491d7329a655b8eeb1"
  },
  {
    "url": "assets/js/4.927c67dd.js",
    "revision": "4aca05c9aad925fb55fae134402f9e67"
  },
  {
    "url": "assets/js/40.af580d5d.js",
    "revision": "24bbea85e97c3510e595fc6cc29b7ccb"
  },
  {
    "url": "assets/js/41.2288bc4b.js",
    "revision": "be641f6ceb58be7c7d7e973375390e48"
  },
  {
    "url": "assets/js/42.ca18ac2d.js",
    "revision": "07217163b7c763b5a92241c83507155d"
  },
  {
    "url": "assets/js/43.738adb7c.js",
    "revision": "4b67e7afa98569928080a6c160334dad"
  },
  {
    "url": "assets/js/44.3bd7a639.js",
    "revision": "5412119afb215ab902420e10cd62766d"
  },
  {
    "url": "assets/js/45.2da25d41.js",
    "revision": "d888ec721642a3363d9c8c47eefc54fc"
  },
  {
    "url": "assets/js/46.782e5f07.js",
    "revision": "784ddd4b7a74538fab10743a0ad763c6"
  },
  {
    "url": "assets/js/47.62a5df5e.js",
    "revision": "d8e58cc55518776d74f3e55fab71350a"
  },
  {
    "url": "assets/js/48.db6bbfec.js",
    "revision": "e7d7a15c9e1ab2ed488dd4e35d0f40f6"
  },
  {
    "url": "assets/js/49.01d6ee9c.js",
    "revision": "df82ffee9021e9c92edcb528fc6425be"
  },
  {
    "url": "assets/js/5.6a510cf5.js",
    "revision": "6c6177407644eb0b21ceb31ae86350d3"
  },
  {
    "url": "assets/js/50.14a09b2a.js",
    "revision": "42f83cdcad5f08471c65d3bde4ebf577"
  },
  {
    "url": "assets/js/51.779b3275.js",
    "revision": "a740024d019417ab9ae763066cb4dc4e"
  },
  {
    "url": "assets/js/52.36856cb2.js",
    "revision": "8526d9306dc0d6a8034b82b947210864"
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
    "url": "assets/js/app.4409dd82.js",
    "revision": "1363cd1ae12f62bbb0c6679c20f1ddf6"
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
    "revision": "74ffcc86e14811ef3e5b6ae6881588bb"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "3b9afeed76780ea827b9fa709efa0a9b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d577ceec65ec831ead4ef28baf534091"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "459bf332bfb370df86f21ace1c0c798c"
  },
  {
    "url": "categories/前端/page/3/index.html",
    "revision": "2d67a4ddba7c0f5ed54a8f947c9e63e6"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "f22b507d247fc4e4015a918acc9a6d8f"
  },
  {
    "url": "index.html",
    "revision": "1e92b147a2f2dde5964227cb619153ac"
  },
  {
    "url": "tag/Cocos Creator/index.html",
    "revision": "aeeaf870c507f0ef3210d723cb85d419"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "185ffaaf9ad9ad4151cddc3fe8cd4f0b"
  },
  {
    "url": "tag/index.html",
    "revision": "84f2ce492fdcd5084f21ac59b69829fe"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "1d108b728dbd8315447ecd57f3cc4297"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "f085069b3d39970fc827b3d913d7e9ad"
  },
  {
    "url": "tag/VSCode/index.html",
    "revision": "95d777ea03983af325d41222dbf60193"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "f65aa71eddaf826a6cccb2e49f35afcb"
  },
  {
    "url": "tag/学习笔记/index.html",
    "revision": "8c4bf7c5a7a74b14bbdf42f72bee8ea9"
  },
  {
    "url": "tag/学习笔记/page/2/index.html",
    "revision": "d2496c8aa409e205fd3bb6dde6019e42"
  },
  {
    "url": "tag/正则表达式/index.html",
    "revision": "aa129375763fac95200182df0ded29ba"
  },
  {
    "url": "tag/珠峰高级/index.html",
    "revision": "dc495e1ee2b6b6b423bb2d02d64d0ed3"
  },
  {
    "url": "tag/珠峰高级/page/2/index.html",
    "revision": "46ef1b5c65d8a452692efe09d916b3df"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "b68fcbe763051c3f54f6ea6797c14cb7"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "96adfe48f3ff51b2c10389574d8b54ec"
  },
  {
    "url": "timeline/index.html",
    "revision": "2147d19f1199e86f268c67390e5692b9"
  },
  {
    "url": "views/designPattern/UML类图.html",
    "revision": "9157df56f762883f2d7c8eee11cfbe7a"
  },
  {
    "url": "views/designPattern/设计原则.html",
    "revision": "daa15753791a0a3aee929f52eff895ff"
  },
  {
    "url": "views/designPattern/面向对象.html",
    "revision": "17b0637665306f902d019387c4dfff1e"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "0110f5ddd6fcee343a2bf9ca7e312cbc"
  },
  {
    "url": "views/interview/ES6中this指向.html",
    "revision": "f9b86ade7d27ef23d2006f62a39039e0"
  },
  {
    "url": "views/interview/ES6模板字符串.html",
    "revision": "34975666d673b1cad73b44f661b4516e"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "075126a8f436ea31242a5f0ee6b4282a"
  },
  {
    "url": "views/interview/index.html",
    "revision": "bca472090f0452a8087dec908734fec3"
  },
  {
    "url": "views/interview/Object.assign().html",
    "revision": "1c4675a821b7e4b24f2fe385d0293b52"
  },
  {
    "url": "views/interview/webpack构建后this指向.html",
    "revision": "354eeb39b8f4633ccc83e8b6641255ff"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "ddde1449d32c0ad1f27151ea4fdc4ad1"
  },
  {
    "url": "views/interview/变量声明.html",
    "revision": "fcc73074765f5103e6627a67534c6f98"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "69041f778a11f0563acca0cbac6e23b3"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "035c78c39101409767ec598c7f0c87f8"
  },
  {
    "url": "views/Web/2020/CocosCreator01.html",
    "revision": "cf5464e04c38f1b65f64e95fb64e2395"
  },
  {
    "url": "views/Web/2020/SettingsSync.html",
    "revision": "9980bb4cab56b3a4dd1192552bc296fa"
  },
  {
    "url": "views/Web/2020/前后端分离下的微信授权.html",
    "revision": "ac392a84544fca1f4872b0aabf08dcc4"
  },
  {
    "url": "views/Web/2020/前端JavaScript高级面试/ES6.html",
    "revision": "09132f8ef67110d605aa10946f4d3b40"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "dad0e057b79f6f4a1a60f9903e52e012"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "6dccdff6372ddf98fa1b78ea02a3f41b"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "1803cad4f549ef54849362241b44b76a"
  },
  {
    "url": "views/Web/2020/正则表达式.html",
    "revision": "afc79051c3bd7d888e29693d1858bc7a"
  },
  {
    "url": "views/Web/2020/珠峰高级/0603.html",
    "revision": "d351e196c98c0aedf0f72b44f424f6a5"
  },
  {
    "url": "views/Web/2020/珠峰高级/0605.html",
    "revision": "781b1d3cd5d1f5a06980e6367eb3f8a4"
  },
  {
    "url": "views/Web/2020/珠峰高级/0607-1.html",
    "revision": "90517b93b9a3d89379d465bc623dd2f2"
  },
  {
    "url": "views/Web/2020/珠峰高级/0607-2.html",
    "revision": "afbce3865278830c14998c17e6785357"
  },
  {
    "url": "views/Web/2020/珠峰高级/0610.html",
    "revision": "55acd45dba769d84006ca7ce712a0fd5"
  },
  {
    "url": "views/Web/2020/珠峰高级/0612.html",
    "revision": "f9f56d9a2cd175b0aa93aad1d057a95c"
  },
  {
    "url": "views/Web/2020/珠峰高级/0614.html",
    "revision": "e9687e959d99f64d36aaef788d6a7e6b"
  },
  {
    "url": "views/Web/2020/珠峰高级/0621-1.html",
    "revision": "d75d05d0ccb97abe0d1e9ed18b1149c0"
  },
  {
    "url": "views/Web/2020/珠峰高级/0621-2.html",
    "revision": "784e25f0fd366e04efbaf1bab3536a29"
  },
  {
    "url": "views/Web/2020/珠峰高级/This处理及Call-Apply-Bind.html",
    "revision": "f1a98463f4d9436e572d16e872ab9f76"
  },
  {
    "url": "views/Web/2020/珠峰高级/webpack/JS中的模块化编程思想.html",
    "revision": "58238f5882bd52bbc00d82a1b6082756"
  },
  {
    "url": "views/Web/2020/珠峰高级/webpack/webpack.html",
    "revision": "5bd8dbff945c0544a134185c76f082f6"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第一周.html",
    "revision": "6ffb6a53688a7b443d30cb29a91b8c50"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第二周.html",
    "revision": "0ee7501d53e71a601f39b5f5ccaa1056"
  },
  {
    "url": "views/Web/2021/TypeScript系统入门到项目实战/TypeScript 基础语法.html",
    "revision": "6ef5a430f90f27d535500a443a4d0203"
  },
  {
    "url": "views/Web/2021/TypeScript系统入门到项目实战/TypeScript 简介及安装.html",
    "revision": "f2005fb32409801865a9b119541da5ce"
  },
  {
    "url": "views/Web/2021/TypeScript系统入门到项目实战/使用 TypeScript 编写爬虫工具.html",
    "revision": "906562c7fecff0c99f7e97cc258e7ce3"
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
