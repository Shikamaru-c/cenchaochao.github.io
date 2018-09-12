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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0113bd962c89f1c15ed7fce58f020832"
  },
  {
    "url": "About/index.html",
    "revision": "26154a9fe4107ec9b828274d56f3fa1f"
  },
  {
    "url": "assets/css/0.styles.8d7fa9b6.css",
    "revision": "d977ba128412613ec8ce54009f57620b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b7faeec9.js",
    "revision": "a479198365e19f759811935fb278c726"
  },
  {
    "url": "assets/js/11.24ef26d8.js",
    "revision": "7034f088101e90c381b4dc07f7295ddf"
  },
  {
    "url": "assets/js/12.e9ea90c9.js",
    "revision": "1efde9adf0f7266eb17f461164a1cf8d"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/3.bb6d3488.js",
    "revision": "94a2eb5a6d5a81baaa6b0258571afb22"
  },
  {
    "url": "assets/js/4.3e67af48.js",
    "revision": "87434655be630e1667f5e62d964bb26a"
  },
  {
    "url": "assets/js/5.edbfdd83.js",
    "revision": "4b323ce376d0c483429ca569f345a3bd"
  },
  {
    "url": "assets/js/6.9deca24b.js",
    "revision": "a3838887f0083d4c1b066f34475a5bd2"
  },
  {
    "url": "assets/js/7.12ba6919.js",
    "revision": "df3ea60e4ddd9de966d45df60b50f163"
  },
  {
    "url": "assets/js/8.0993aff4.js",
    "revision": "00815afe7565406bc57e15db844563b6"
  },
  {
    "url": "assets/js/9.a6c408f6.js",
    "revision": "6ca8d66edaf8e49c417138751a4088ef"
  },
  {
    "url": "assets/js/app.11c24f28.js",
    "revision": "a3565edb78d7a4dfd69ce4d65edd2b8c"
  },
  {
    "url": "heroImage.png",
    "revision": "261b61774904fbcf4d399b1244053110"
  },
  {
    "url": "index.html",
    "revision": "92e3ca9e8457b46ae34dbd8a191051ca"
  },
  {
    "url": "Note/CSSNote/index.html",
    "revision": "b8e5c1d9c49ef14a999ab304e3a8063b"
  },
  {
    "url": "Note/JavaScriptNote/index.html",
    "revision": "ce97a4da34dbfa2447ac7d825d007b33"
  },
  {
    "url": "Note/VueNote/index.html",
    "revision": "c360d91fba63906872ba2c31866d3de4"
  },
  {
    "url": "Note/VueNote/test1.html",
    "revision": "e740fd77701909f6eff2d77232cae6be"
  },
  {
    "url": "Note/VueNote/test2.html",
    "revision": "c514d1493868c299f04f319fdefa52f6"
  },
  {
    "url": "Note/VueNote/test3.html",
    "revision": "b10898eb96b6d61b68b8e401d673fabe"
  },
  {
    "url": "Note/VueNote/test4.html",
    "revision": "83568657fe00c298d7ff33ede85b84e4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
