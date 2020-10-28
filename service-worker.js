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
    "revision": "38a2a5d477ad91d045f3abd6cc111cad"
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
    "url": "assets/js/19.c87fbb96.js",
    "revision": "da3f4d0f7e0c80b846dbff46e7eb76d7"
  },
  {
    "url": "assets/js/20.786c72af.js",
    "revision": "e7b3d30d9d23c00888a9f4f933ff2e31"
  },
  {
    "url": "assets/js/21.59ef63e8.js",
    "revision": "651f8f39464d5565a71c299193835976"
  },
  {
    "url": "assets/js/22.f3b2abc2.js",
    "revision": "b6fb81596bb6b8c11036cea0be45cca0"
  },
  {
    "url": "assets/js/23.a017e36c.js",
    "revision": "0ecc64be8d85e5f9fe0e545ab25cdaee"
  },
  {
    "url": "assets/js/24.95a4f8ae.js",
    "revision": "fe35d2f39eed57ae34fb73b0b0960e3c"
  },
  {
    "url": "assets/js/25.155cc0e8.js",
    "revision": "334f6c5ddb9af83b360b5c449beb5969"
  },
  {
    "url": "assets/js/26.5984c17f.js",
    "revision": "a07cff9f2b24ee9cd093d7e5c5bc981e"
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
    "url": "assets/js/app.3a40fa4b.js",
    "revision": "232b344c25246456c9adf8921d870edc"
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
    "revision": "305c8069aed75a7ec4e88cce601f44e6"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "75f843cf36dd2e8506a943a585b5ce12"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c18a470c34d6d8fb18e6ba00c48e325d"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "7b5b515cbf3c0d9a2eb675ff640b7ac6"
  },
  {
    "url": "categories/前端/page/3/index.html",
    "revision": "f56f68a676a22da49c9b5154af2f1b83"
  },
  {
    "url": "categories/理财/index.html",
    "revision": "8afb83b61c64103ab8ac319b46927681"
  },
  {
    "url": "index.html",
    "revision": "e56b2b553b77b0d0cd45e5b55bd61eca"
  },
  {
    "url": "tag/Cocos Creator/index.html",
    "revision": "0964b3ada8f1376cc566ec14925a4ae4"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "58dd21ab233df40379560bd84907968e"
  },
  {
    "url": "tag/index.html",
    "revision": "3f3d51240554ccfaf99a16a852a602a7"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "e38c05153a85bd6ac3348e79622ed378"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "455b416c57d46e699a362584f473fcb5"
  },
  {
    "url": "tag/VSCode/index.html",
    "revision": "94fc24b236573ec7ef78ba93d597cf5f"
  },
  {
    "url": "tag/基金/index.html",
    "revision": "fb245a27bc8a10adc64e7466c0fbc2b8"
  },
  {
    "url": "tag/学习笔记/index.html",
    "revision": "0b3a15e8025a7059ca0a593af16ff945"
  },
  {
    "url": "tag/学习笔记/page/2/index.html",
    "revision": "cde153a0468d3858cc72ecc9f6270e90"
  },
  {
    "url": "tag/正则表达式/index.html",
    "revision": "8f180e433206debaab9a53d680a46224"
  },
  {
    "url": "tag/珠峰高级/index.html",
    "revision": "f75216d9b18a015164c94b4d047bc6eb"
  },
  {
    "url": "tag/珠峰高级/page/2/index.html",
    "revision": "f70021a5c8068a3204b6218f0e97bb17"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "b87adb945f911592ab95360e4ca678ef"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "3dc7bc99a38c608b2dede5852a5a701c"
  },
  {
    "url": "timeline/index.html",
    "revision": "03b60de7a8bbf1bb48dcb1b8655a62d7"
  },
  {
    "url": "views/designPattern/UML类图.html",
    "revision": "71a6b51c7d6df919f4542ae7b3c0a222"
  },
  {
    "url": "views/designPattern/设计原则.html",
    "revision": "5101abfdc053b17d97a56972c9f73fd0"
  },
  {
    "url": "views/designPattern/面向对象.html",
    "revision": "4ef8117da3bb6827ce0b95bdf88b039d"
  },
  {
    "url": "views/financial/19061601.html",
    "revision": "7f892d585b5f92afe766fa473dab7383"
  },
  {
    "url": "views/interview/ES6中this指向.html",
    "revision": "27048938f839641c9e6fcda350bcba77"
  },
  {
    "url": "views/interview/ES6模板字符串.html",
    "revision": "60ca4a208516a0a62730e54c9be932c8"
  },
  {
    "url": "views/interview/ES6类的理解.html",
    "revision": "779f19b4f160feeda7e45242da7d653a"
  },
  {
    "url": "views/interview/index.html",
    "revision": "860f814a37aea41dac8990bee7699457"
  },
  {
    "url": "views/interview/Object.assign().html",
    "revision": "5ed72ef0ccb89042e18669643bc2884c"
  },
  {
    "url": "views/interview/webpack构建后this指向.html",
    "revision": "f43015aa451e114163324431ba61ab3a"
  },
  {
    "url": "views/interview/伪数组转数组.html",
    "revision": "a38d5f26e772094e61f459ad88daedb4"
  },
  {
    "url": "views/interview/变量声明.html",
    "revision": "c2901f24f4e1c91d1a5bcaf3b92917d1"
  },
  {
    "url": "views/iOS/2016/iOS字面量的简单使用.html",
    "revision": "304d4626e9a93e11804dd93a3ace9ff7"
  },
  {
    "url": "views/Web/2019/IDEA前端配置.html",
    "revision": "3d4404abd739eb263e6d1ce87f3da74d"
  },
  {
    "url": "views/Web/2020/CocosCreator01.html",
    "revision": "574a1e6d706579d0de4964c9d914a0d3"
  },
  {
    "url": "views/Web/2020/SettingsSync.html",
    "revision": "4d4918e11eac83e54a078a325ba0e97c"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/TypeScript 基础语法.html",
    "revision": "cfe2e375927a2f5cd011b6529a13256c"
  },
  {
    "url": "views/Web/2020/TypeScript系统入门到项目实战/使用 TypeScript 编写爬虫工具.html",
    "revision": "ebb20759244b0dfcd59e308a13a2be5f"
  },
  {
    "url": "views/Web/2020/前端JavaScript高级面试/ES6.html",
    "revision": "5d0dcefd6606d92c4ba1463d9469af16"
  },
  {
    "url": "views/Web/2020/前端知识体系汇总.html",
    "revision": "26565fbd876dbcb2917cccb42829ac80"
  },
  {
    "url": "views/Web/2020/常用工具.html",
    "revision": "f6f347af2881938c128feb07bf0942a4"
  },
  {
    "url": "views/Web/2020/支付分享.html",
    "revision": "3396c768046f6287846072232e5fbea0"
  },
  {
    "url": "views/Web/2020/正则表达式.html",
    "revision": "4f779c1f92301a752ed1d17b81d72882"
  },
  {
    "url": "views/Web/2020/珠峰高级/0603.html",
    "revision": "4cd8e1df982cc6762379219b8f38beab"
  },
  {
    "url": "views/Web/2020/珠峰高级/0605.html",
    "revision": "d957dc9d469319417f89d0e5257652b6"
  },
  {
    "url": "views/Web/2020/珠峰高级/0607-1.html",
    "revision": "a88a0406da0198145b1a11f162db2cfc"
  },
  {
    "url": "views/Web/2020/珠峰高级/0607-2.html",
    "revision": "1001a522d2b55ddcd171fd8cf9a724a9"
  },
  {
    "url": "views/Web/2020/珠峰高级/0610.html",
    "revision": "180d120475677c539c38028137fa9b44"
  },
  {
    "url": "views/Web/2020/珠峰高级/0612.html",
    "revision": "2688564c35dfd4fe64012bd198b00c63"
  },
  {
    "url": "views/Web/2020/珠峰高级/0614.html",
    "revision": "c4cafcc74e7c855278ed549ab27cd83a"
  },
  {
    "url": "views/Web/2020/珠峰高级/0621-1.html",
    "revision": "50a48994a4cc0d2aeaafdc073824cd57"
  },
  {
    "url": "views/Web/2020/珠峰高级/0621-2.html",
    "revision": "62050e997783b91ad515d603f09a90b6"
  },
  {
    "url": "views/Web/2020/珠峰高级/This处理及Call-Apply-Bind.html",
    "revision": "740c4134f066511c98d92996d3b6e40f"
  },
  {
    "url": "views/Web/2020/珠峰高级/webpack/JS中的模块化编程思想.html",
    "revision": "f03b3222e246a68e3dcb384147187645"
  },
  {
    "url": "views/Web/2020/珠峰高级/webpack/webpack.html",
    "revision": "7f563f4f8a644ac543401ba83c4d9836"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第一周.html",
    "revision": "2c760b76c9fa6bab9905056c879623b7"
  },
  {
    "url": "views/Web/2020/珠峰高级/作业/第二周.html",
    "revision": "4f140acb55588acf6fbd03645e5b285e"
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
