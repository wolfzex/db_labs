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
    "revision": "1e7e9b43d5df67b6bd782596b4adfb8d"
  },
  {
    "url": "assets/css/0.styles.7199c42d.css",
    "revision": "65096e2a703ad22d7e398438944707cd"
  },
  {
    "url": "assets/img/dataMissingExceptionTag.6b0965c5.png",
    "revision": "6b0965c575ccdf150b0964f973897691"
  },
  {
    "url": "assets/img/deleteSource.c08cbd53.png",
    "revision": "c08cbd53fc51c0716778efc30d98471e"
  },
  {
    "url": "assets/img/deleteTag.d67da47b.png",
    "revision": "d67da47bc6801a20f5ea91491415cb83"
  },
  {
    "url": "assets/img/getSource.0eff4b7d.png",
    "revision": "0eff4b7d4cd07fd78a679cc6ad0f3e65"
  },
  {
    "url": "assets/img/getSourceById.b22a239b.png",
    "revision": "b22a239bcdf7194f5f06506ffd70af7a"
  },
  {
    "url": "assets/img/getTag.9a168292.png",
    "revision": "9a1682920945256a0605019c2b596cff"
  },
  {
    "url": "assets/img/getTagById.d25ddc13.png",
    "revision": "d25ddc13bf6528dcf2bd5d57b81cc76d"
  },
  {
    "url": "assets/img/patchSource.0709c37a.png",
    "revision": "0709c37a9e44cee6dc0e369a8f6fd7c5"
  },
  {
    "url": "assets/img/patchTag.ced86b0a.png",
    "revision": "ced86b0a9ac8c454a52c4ca400300233"
  },
  {
    "url": "assets/img/postSource.468acf88.png",
    "revision": "468acf88759297841718c0018db1f99c"
  },
  {
    "url": "assets/img/postTag.44adfce9.png",
    "revision": "44adfce9857d16febd1c15a2deb4abca"
  },
  {
    "url": "assets/img/relational_schema.8b4855d6.png",
    "revision": "8b4855d6df93b39fc4bc6348e9e3d2c9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sourceNotFoundException.b5ba33fb.png",
    "revision": "b5ba33fbbc0d80bde927399999cdf989"
  },
  {
    "url": "assets/img/sourceNotFoundExceptionDelete.1038fafc.png",
    "revision": "1038fafcc76db8140a4e9c2ca74e390b"
  },
  {
    "url": "assets/img/tagNotFoundException.326c7c6c.png",
    "revision": "326c7c6c99ff3d7b3d909facd71365ea"
  },
  {
    "url": "assets/img/tagNotFoundExceptionUpdate.12462c66.png",
    "revision": "12462c662d2404b58e71611c8af90e5b"
  },
  {
    "url": "assets/js/1.5325b7a9.js",
    "revision": "6ccf9540f521c7fdc9fa88e4872c5c14"
  },
  {
    "url": "assets/js/10.29ba8c6c.js",
    "revision": "90c4e1ba8a1b4f32b5bb3495735531cb"
  },
  {
    "url": "assets/js/13.be451755.js",
    "revision": "f67e61b0b43bc77c3fb4f7b2025d6f88"
  },
  {
    "url": "assets/js/14.54053bdf.js",
    "revision": "74211663260ea9e3cc455a03edeedde4"
  },
  {
    "url": "assets/js/15.bfd36f9d.js",
    "revision": "1610ed6a99d0afd0b185cbe27649f76a"
  },
  {
    "url": "assets/js/16.8925124d.js",
    "revision": "85cb30fb55b348361881df6172ca3682"
  },
  {
    "url": "assets/js/17.3a4a11d8.js",
    "revision": "f66466d364fb74c8655385f5022e2b1b"
  },
  {
    "url": "assets/js/18.4c96e510.js",
    "revision": "0ab70a8e8e7aec71f5e36c8c4278a492"
  },
  {
    "url": "assets/js/19.e0f43ac6.js",
    "revision": "73ead00136323667dcad2e96b031799b"
  },
  {
    "url": "assets/js/2.c3d79566.js",
    "revision": "4904e758584fa6e8ae79b319d567dc91"
  },
  {
    "url": "assets/js/20.6606f769.js",
    "revision": "c2e7211d31da49323bb07089c54affc5"
  },
  {
    "url": "assets/js/21.507b2c1c.js",
    "revision": "1bc4736ff37bafaa3cbb93e9e131cfad"
  },
  {
    "url": "assets/js/22.19c9bbc3.js",
    "revision": "21ed1d8f7986f1ea4566ef52ea1643bf"
  },
  {
    "url": "assets/js/23.44f1a406.js",
    "revision": "a108d55a65912849999137c318fcce36"
  },
  {
    "url": "assets/js/24.2ebab006.js",
    "revision": "a194d347284743a22186c3f6cfd8e4fc"
  },
  {
    "url": "assets/js/25.c9b20ad0.js",
    "revision": "be931d19aa71324bba6628a6d0d07906"
  },
  {
    "url": "assets/js/26.fe901d76.js",
    "revision": "18d52297b8354334933105ec337b4a36"
  },
  {
    "url": "assets/js/27.cbf95d99.js",
    "revision": "ea44cf172c1951c3d858c93da4c82a1d"
  },
  {
    "url": "assets/js/28.c90eecae.js",
    "revision": "48527cd5c3932573eb629404f01ffd9f"
  },
  {
    "url": "assets/js/29.0bd45465.js",
    "revision": "6a247b1846589174fad05f6a4bd58ff8"
  },
  {
    "url": "assets/js/3.9fa1bce9.js",
    "revision": "dbec1f6e90469dc2db88f488fa698fe0"
  },
  {
    "url": "assets/js/30.960f2a54.js",
    "revision": "6812ad0491a90e421e3f16280762b480"
  },
  {
    "url": "assets/js/31.6525b78e.js",
    "revision": "3343269e0d2dce2b59d7b0dae1189b61"
  },
  {
    "url": "assets/js/32.7f63a827.js",
    "revision": "89addc53f285fc57a2979f45e799bc7e"
  },
  {
    "url": "assets/js/33.51496dcb.js",
    "revision": "05db03a8745d2d74e521fd839f5973c5"
  },
  {
    "url": "assets/js/34.3bc67239.js",
    "revision": "633180f19a6dbf59459759c8f425a8f0"
  },
  {
    "url": "assets/js/35.96e2e941.js",
    "revision": "fb4232b6925a972e1ca8ae19865c5f3a"
  },
  {
    "url": "assets/js/36.0abe0106.js",
    "revision": "a5a30a195955d474429e3af371fa5c66"
  },
  {
    "url": "assets/js/37.7effd030.js",
    "revision": "a45f3f511761a106bc5d499a8e154b7d"
  },
  {
    "url": "assets/js/38.122e0096.js",
    "revision": "9357f3ebbb49c030ce72668a07b0e6ed"
  },
  {
    "url": "assets/js/39.b02788dd.js",
    "revision": "7b7b379e77a4e10f10de4df39aabd72d"
  },
  {
    "url": "assets/js/4.249f191d.js",
    "revision": "9e2b6d92364c342ae80e192f3b60002f"
  },
  {
    "url": "assets/js/41.b08b592a.js",
    "revision": "8693e857887f9684214a8c1068030c81"
  },
  {
    "url": "assets/js/5.959bf04e.js",
    "revision": "a7d1e1763272f0f8b9fe72898c41d28d"
  },
  {
    "url": "assets/js/6.28d0f695.js",
    "revision": "dd0ea34f68ffbe7901f13be1fe7e6d8c"
  },
  {
    "url": "assets/js/7.c77d876e.js",
    "revision": "d88bbebe75a9436ab98ea8893d77d75b"
  },
  {
    "url": "assets/js/8.a0533be5.js",
    "revision": "b0b0e69206cf2bf669fa7b4e660876ec"
  },
  {
    "url": "assets/js/9.a369c43a.js",
    "revision": "0f9f8e6e9aa967b6afb5dbfa586e3980"
  },
  {
    "url": "assets/js/app.8bba1233.js",
    "revision": "bd50e64cabd81aa9583e9d46a4567d72"
  },
  {
    "url": "assets/js/vendors~docsearch.24365159.js",
    "revision": "a6181fd0533a641fd1b9577619809486"
  },
  {
    "url": "conclusion/index.html",
    "revision": "b402c6f1b46968055b282bd8dc9154a6"
  },
  {
    "url": "design/index.html",
    "revision": "217a929813663ca555059fdfdfd324f1"
  },
  {
    "url": "index.html",
    "revision": "333c404831bd3b0e52abe533054b7823"
  },
  {
    "url": "intro/index.html",
    "revision": "3d98a46db1a26de77f4773d60b9b280f"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "af71d8567c2ad1375c79c679e31c1d8f"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "98fe6bfee09e10f8027bba6743d6b16d"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "011875654c9aa839944caf2eb191d20e"
  },
  {
    "url": "software/index.html",
    "revision": "82dcd43978ac1d883485f604302a86b5"
  },
  {
    "url": "test/index.html",
    "revision": "60f06cf4e802535a6acf84ac9da643ca"
  },
  {
    "url": "use cases/index.html",
    "revision": "d6df29452a1346ac80f6e1b0748b723f"
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
