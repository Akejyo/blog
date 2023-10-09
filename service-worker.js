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
    "url": "2d_1-7/d10_1.png",
    "revision": "13241eab554a0772a2499f024a2a29a9"
  },
  {
    "url": "2d_1-7/d10_2.png",
    "revision": "ce9eb2ed742cd7f39f44301645326714"
  },
  {
    "url": "2d_1-7/d14-1.png",
    "revision": "081a55a4fba0768dedd6f8870ee09151"
  },
  {
    "url": "2d_1-7/d14-2.png",
    "revision": "6ada714f5fe4af46fa8bcfcb040d4755"
  },
  {
    "url": "2d_1-7/d14-3.png",
    "revision": "344b3ebcb991b4fb4c5d3bc2298cae88"
  },
  {
    "url": "2d_1-7/d15_1.png",
    "revision": "02f319f13f17ff64b51856af6241c430"
  },
  {
    "url": "2d_1-7/d2_1.png",
    "revision": "8b86717d9de9aa06fc2db1cf513697ee"
  },
  {
    "url": "2d_1-7/d2_2.png",
    "revision": "d24d45b2860be37feb50c57da7620b49"
  },
  {
    "url": "2d_1-7/d2_3.png",
    "revision": "1f11832bc7e3105dad79abef17a95da0"
  },
  {
    "url": "2d_1-7/d2_4.png",
    "revision": "c396c4e4efbafe64d8760eab5d0ad8d7"
  },
  {
    "url": "2d_1-7/d2_5.png",
    "revision": "a92ead72d5786e361bd2581e86a6a44b"
  },
  {
    "url": "2d_1-7/d2_6.png",
    "revision": "68800505af639708c5eb853b8525d339"
  },
  {
    "url": "2d_1-7/d2_7.png",
    "revision": "8df761a25d5306a6ff051bc1b8635b08"
  },
  {
    "url": "2d_1-7/d3_1.png",
    "revision": "2cc5ded088c89a454af036c83f4b4f40"
  },
  {
    "url": "2d_1-7/d3_2.png",
    "revision": "eabb4785c1892e0d71e9c097d41e5461"
  },
  {
    "url": "2d_1-7/d4_1.png",
    "revision": "089ab7b402d261cc06aa60127dee5e2e"
  },
  {
    "url": "2d_1-7/d4_2.png",
    "revision": "b80170a286b1376f5895a5af9d32ca0b"
  },
  {
    "url": "2d_1-7/d4_3.png",
    "revision": "2200dd32186dfc3c237dd147624ff872"
  },
  {
    "url": "2d_1-7/d4_4.png",
    "revision": "533ea7ee783d9f6e6158f4c45ffd2575"
  },
  {
    "url": "2d_1-7/d4_5.png",
    "revision": "ba1c99bca7cc646dd32283a9483efe18"
  },
  {
    "url": "2d_1-7/d5_1.png",
    "revision": "1b38717c56ad5eb789e82112b83328dc"
  },
  {
    "url": "2d_1-7/d5_2.png",
    "revision": "3cab3169281e23495a2c102d9575b6f7"
  },
  {
    "url": "2d_1-7/d5_3.png",
    "revision": "17fb29b03a7ba8bf9986930c67e41f8e"
  },
  {
    "url": "2d_1-7/d5_4.png",
    "revision": "7facb6ae708dc2e58705e474c5fb32d7"
  },
  {
    "url": "2d_1-7/d5_5.png",
    "revision": "ff432e59c5040146c56afd4c60b1e2f8"
  },
  {
    "url": "2d_1-7/d5_6.png",
    "revision": "518a039be6199882b8ac5db4a2cfc6a1"
  },
  {
    "url": "2d_1-7/d5_7.png",
    "revision": "d435b8a207f4208aed1346a8de28237c"
  },
  {
    "url": "2d_1-7/d5_8.png",
    "revision": "e7e3b6af695d08758a1462173c17faf4"
  },
  {
    "url": "2d_1-7/d6_1.png",
    "revision": "0142a8426ba6837440d874f1733e98d6"
  },
  {
    "url": "2d_1-7/d6_2.png",
    "revision": "fa480a45dcb33d69fe1be063ae10af2e"
  },
  {
    "url": "2d_1-7/d6_3.png",
    "revision": "fa0773c173b634bf7945305858f5bf09"
  },
  {
    "url": "2d_1-7/d7_1.jpg",
    "revision": "6881130427b7a37445f95783b902c7c5"
  },
  {
    "url": "2d_1-7/d7_2.jpg",
    "revision": "c9168f3bcb568da13d1cf8d2713ebe9f"
  },
  {
    "url": "2d_1-7/d7_3.jpg",
    "revision": "f57639cb6605c9413423ff1a101d47b1"
  },
  {
    "url": "2d_1-7/d7_4.jpg",
    "revision": "4c4b1455a9b177dede03912ee5b22337"
  },
  {
    "url": "2d_1-7/d8_2.png",
    "revision": "2e4e3daaab8e6d926b6fc351d0f59d29"
  },
  {
    "url": "2d_1-7/d9_1.png",
    "revision": "cb1aacb1ff25a8464847e5de2816bca8"
  },
  {
    "url": "2d_1-7/wtf1.png",
    "revision": "1831f10ac3ea87022b179c6a1ff2cf5a"
  },
  {
    "url": "2d_1-7/wtf2.png",
    "revision": "08166e5df13b3e6ad50396022fceaa08"
  },
  {
    "url": "2d_1-7/wtf3.png",
    "revision": "c7a9b5eef4514a2f6454ddb052c9b22c"
  },
  {
    "url": "2d_1-7/wtf4.png",
    "revision": "858c0a3cadc866cdd19d8fa6ffad5604"
  },
  {
    "url": "2d_1-7/wtf5.png",
    "revision": "11b8af6c37b54c334376bd997296ae9e"
  },
  {
    "url": "404.html",
    "revision": "a95f4643d9ef209f0ccd93e84123f2d1"
  },
  {
    "url": "about/index.html",
    "revision": "3de9d6c8941a108373e771a7451e2886"
  },
  {
    "url": "assets/css/0.styles.7e6ff6a1.css",
    "revision": "8ea9bb62c0a14a785f00e6dcf11a795f"
  },
  {
    "url": "assets/js/10.e84896b2.js",
    "revision": "4316e6118f4cd0ff114fc07c95121764"
  },
  {
    "url": "assets/js/11.58cc8d34.js",
    "revision": "9b8834a951e0f93f9f58eaeaddec9e36"
  },
  {
    "url": "assets/js/12.f13297e1.js",
    "revision": "a1f53ab0a039b0303451083d87b89abd"
  },
  {
    "url": "assets/js/13.8814e4cf.js",
    "revision": "0d988a712994568378c254dd391108b5"
  },
  {
    "url": "assets/js/14.8db0c612.js",
    "revision": "4c120ca0d252a3ca420669f23e5af378"
  },
  {
    "url": "assets/js/15.a16117b8.js",
    "revision": "eeb283d5a2576ab3ca288048c2869d03"
  },
  {
    "url": "assets/js/16.2ce801eb.js",
    "revision": "a6c292830ab3eeee86b09abd59f269da"
  },
  {
    "url": "assets/js/17.92b6c2d6.js",
    "revision": "bb372e018c65f2ce027f65422abcbe60"
  },
  {
    "url": "assets/js/18.246f49ec.js",
    "revision": "4e57b1846b5fabb7b4c0202de0c399eb"
  },
  {
    "url": "assets/js/19.bf52017f.js",
    "revision": "33768a6e2cb1d0a37ce643f0502aef41"
  },
  {
    "url": "assets/js/2.23f5757f.js",
    "revision": "58057e7595fefe204c75d3ec96299482"
  },
  {
    "url": "assets/js/20.2c61a476.js",
    "revision": "a6adb683dcfe214bfc4945af2a6858d4"
  },
  {
    "url": "assets/js/21.95161752.js",
    "revision": "8bd3ddf3dfef16d97a0b79c4043f0a6e"
  },
  {
    "url": "assets/js/22.3d64a7d0.js",
    "revision": "41fedae07296adb29bc626ce4fc04fb0"
  },
  {
    "url": "assets/js/23.fd64066b.js",
    "revision": "17f13938cf1c5cecb0d1fb7a90e17ac0"
  },
  {
    "url": "assets/js/24.c221315b.js",
    "revision": "d211395acf8925a72491ab5312fb6de4"
  },
  {
    "url": "assets/js/25.a3c49f47.js",
    "revision": "9d7907e324425e1360e87ff8b1f218ed"
  },
  {
    "url": "assets/js/26.fa47475f.js",
    "revision": "980a5b299e160cf2044f38434fe18fa7"
  },
  {
    "url": "assets/js/27.cc46748a.js",
    "revision": "ed61870d5874db9d02aef6a5e24ca4f6"
  },
  {
    "url": "assets/js/28.6449a686.js",
    "revision": "c11e2349644dc1647d1cd51742da4b69"
  },
  {
    "url": "assets/js/29.6166c3d9.js",
    "revision": "0695ba3e47250360a67be61cababd8a7"
  },
  {
    "url": "assets/js/3.cb12477a.js",
    "revision": "a10ba3cf344508961883c43439806df9"
  },
  {
    "url": "assets/js/30.972d9d0e.js",
    "revision": "041d1d787c9b4eb75345ae36196b6222"
  },
  {
    "url": "assets/js/31.57e81435.js",
    "revision": "ca7de10a0be52a54ed41812e90bd5c7e"
  },
  {
    "url": "assets/js/32.e8e65424.js",
    "revision": "24aa9243af1e9acb0850436e1716a15b"
  },
  {
    "url": "assets/js/33.e3f83f53.js",
    "revision": "0a0bbae4b449ad57c921921e21ec0fe0"
  },
  {
    "url": "assets/js/34.6a4b71bf.js",
    "revision": "54f39d35b8c84db39800b9b7c17c58a7"
  },
  {
    "url": "assets/js/35.ceafe2cd.js",
    "revision": "008171ca7b2f1a38fed6cda8d606118d"
  },
  {
    "url": "assets/js/36.e8342154.js",
    "revision": "3e07f16286aa34c11b766722852a3d1e"
  },
  {
    "url": "assets/js/37.4cfe3598.js",
    "revision": "8a2e599b349d22f06744506ce9020ac4"
  },
  {
    "url": "assets/js/38.65fda662.js",
    "revision": "ad8653eb3834c6a6d2964574727bc8e3"
  },
  {
    "url": "assets/js/39.45d5da3c.js",
    "revision": "6c4119bf1ed01a73bc788cfbda8ad13c"
  },
  {
    "url": "assets/js/4.bcd292e7.js",
    "revision": "ccb4c8e420d023be757971d32fb6fb1f"
  },
  {
    "url": "assets/js/40.95a89642.js",
    "revision": "1439c3cfa59d585e2860fb00e3626851"
  },
  {
    "url": "assets/js/41.2c4a78ca.js",
    "revision": "97a4963dece444ed65534298736f874a"
  },
  {
    "url": "assets/js/42.3ecf1fdb.js",
    "revision": "69c42dff144fe4f6566e891182548353"
  },
  {
    "url": "assets/js/43.86b79842.js",
    "revision": "c30c1d8ab306de5e2804cb756909a0c1"
  },
  {
    "url": "assets/js/44.0b4f7ef4.js",
    "revision": "f39d94d5e4cb0752a92b16372300b4db"
  },
  {
    "url": "assets/js/45.0f0a5b88.js",
    "revision": "7ea39ed8f44f46608be6c1a58df6bb7a"
  },
  {
    "url": "assets/js/46.1a47a1a3.js",
    "revision": "ad8fe1ffca919b586483c29c0d3dc31b"
  },
  {
    "url": "assets/js/47.21c3b18b.js",
    "revision": "11c93365821db02ec766cf3dcc58e8f6"
  },
  {
    "url": "assets/js/48.04adba19.js",
    "revision": "63ead99ee522aecad5d23ea4073d0b5d"
  },
  {
    "url": "assets/js/49.3a9e669c.js",
    "revision": "7b3651cb310e2aa2a1233c4a48b036c0"
  },
  {
    "url": "assets/js/5.c472a316.js",
    "revision": "2adae99eed06e7a08967fa986ca9b09e"
  },
  {
    "url": "assets/js/50.b659aae6.js",
    "revision": "2b281277a891a754c28e159574331308"
  },
  {
    "url": "assets/js/51.6d144a5e.js",
    "revision": "45adef637fb4359cbc9182c55af42748"
  },
  {
    "url": "assets/js/52.c5cccc0a.js",
    "revision": "232e09b98d8833e76dc9ba0a1344b21c"
  },
  {
    "url": "assets/js/53.ceda580a.js",
    "revision": "9561d3b5b5a643c608dedb51e154d3d0"
  },
  {
    "url": "assets/js/54.ff5d303e.js",
    "revision": "f4f804d8a76028246d6db4c74a02af2b"
  },
  {
    "url": "assets/js/55.636c12ba.js",
    "revision": "2681d2fe23dac0cc09e4059bb01894fb"
  },
  {
    "url": "assets/js/56.6dfdc6a0.js",
    "revision": "fedcd15970b5c2acd904dd224e6e9f53"
  },
  {
    "url": "assets/js/57.4fe2dc90.js",
    "revision": "f3d384b6f6870124c00318af1de53347"
  },
  {
    "url": "assets/js/58.43e2f095.js",
    "revision": "073c543aa6b6cd4d775797247a406586"
  },
  {
    "url": "assets/js/59.20472e59.js",
    "revision": "532bfcc8d9723ce3777142badd3f9bba"
  },
  {
    "url": "assets/js/6.1454379f.js",
    "revision": "ffe240bf708e8f6da40ff824e225ce03"
  },
  {
    "url": "assets/js/60.bf130f9c.js",
    "revision": "02a014d7781f30b4fac17064bc6191ac"
  },
  {
    "url": "assets/js/61.0dbc324c.js",
    "revision": "e61106fac1a5b78aedd3582914a78c93"
  },
  {
    "url": "assets/js/62.3c327d75.js",
    "revision": "629742a126a006e3972318db873a5db5"
  },
  {
    "url": "assets/js/63.18307000.js",
    "revision": "ff651237890432effddfdf37cbfc4f2c"
  },
  {
    "url": "assets/js/64.202854be.js",
    "revision": "c71e95bc614ad2abdbe1a4cbffe1ea8b"
  },
  {
    "url": "assets/js/65.72b47f55.js",
    "revision": "3735066bf6acf68c843e19c645a20ebe"
  },
  {
    "url": "assets/js/66.2fbc53c6.js",
    "revision": "4135be27562be38b949277321d862ad4"
  },
  {
    "url": "assets/js/67.c7818724.js",
    "revision": "dd972afd22c1c2933c239d4795937667"
  },
  {
    "url": "assets/js/68.da91b0f0.js",
    "revision": "192814c2d32966e164cf54633f9156a6"
  },
  {
    "url": "assets/js/69.ec9f0a50.js",
    "revision": "e5ce3e4d0deaffd9c80c82b83c869665"
  },
  {
    "url": "assets/js/7.3944018b.js",
    "revision": "aa7650ef33eafa6f2ad98bca52c4b90a"
  },
  {
    "url": "assets/js/70.4ddb1360.js",
    "revision": "d3cd5acba7ac94db9e3f158e5c145ede"
  },
  {
    "url": "assets/js/71.2c3d7701.js",
    "revision": "d1f08a219996b1ef0d4f4b585bb2be52"
  },
  {
    "url": "assets/js/72.339854a5.js",
    "revision": "bd14f7354b38c596c3484c5b860d34d4"
  },
  {
    "url": "assets/js/73.9f71d845.js",
    "revision": "c99c77cf74c629798e0369cea8984385"
  },
  {
    "url": "assets/js/8.2d0a2e85.js",
    "revision": "51d6dd36f51c4904442829a5a55d65ff"
  },
  {
    "url": "assets/js/9.e72484c0.js",
    "revision": "030830eb22c36d9193b9683d78f3524c"
  },
  {
    "url": "assets/js/app.10530e5b.js",
    "revision": "5a5dd0b5a2f97ffd1995e0dba319a073"
  },
  {
    "url": "HP/logo-nav.png",
    "revision": "51dbea5b097a20a8f506dcd09e402ac2"
  },
  {
    "url": "index.html",
    "revision": "fa4bab39f8b36caa4887978411fb6ec5"
  },
  {
    "url": "Linux/1.png",
    "revision": "eb7e47924ee486b72d203be9ee2fbe4e"
  },
  {
    "url": "Linux/10.png",
    "revision": "cc6e42bcf88f970670b555adfa51f596"
  },
  {
    "url": "Linux/11.png",
    "revision": "90c3fe6dfe8ee0332dd121b7c5669ef8"
  },
  {
    "url": "Linux/12.png",
    "revision": "b3b9c30e39181204a0658289c712d4f1"
  },
  {
    "url": "Linux/2.png",
    "revision": "eb7e47924ee486b72d203be9ee2fbe4e"
  },
  {
    "url": "Linux/3.png",
    "revision": "a92676b3671d784994d8f07b12c07618"
  },
  {
    "url": "Linux/4.png",
    "revision": "85f8b380ad6bb26990ae18e6c436ba75"
  },
  {
    "url": "Linux/5.png",
    "revision": "dd58e4af70e86851f02cd110246a49d1"
  },
  {
    "url": "Linux/6.png",
    "revision": "5a70ec2064a4fe566b21d29c4febaef2"
  },
  {
    "url": "Linux/7.png",
    "revision": "877b3a7468b4eda1bebc6eec0719f66d"
  },
  {
    "url": "Linux/8.png",
    "revision": "73eb8bd36432186179eab1911b632a3f"
  },
  {
    "url": "Linux/9.png",
    "revision": "e8a605a5978ffd8475f93dd860fbfb01"
  },
  {
    "url": "Linux/ip1.png",
    "revision": "6dcd646363d0da8f3f7631aa7956244d"
  },
  {
    "url": "Linux/ip2.png",
    "revision": "fe214db1ad83b2ba5e53ea14495457fa"
  },
  {
    "url": "Linux/ip3.png",
    "revision": "142ff1f2095150070b58fee2bb2be94e"
  },
  {
    "url": "Linux/ip4.png",
    "revision": "c5f54a4ea3a2c47b7c3e87f27b8124d3"
  },
  {
    "url": "Linux/ip5.png",
    "revision": "a25c4d2ae28ae857fbf9dd90ec78e14e"
  },
  {
    "url": "Linux/ip6.png",
    "revision": "84839f24cc8619da6aef6638e2c436b7"
  },
  {
    "url": "Linux/ip7.png",
    "revision": "48b7b9e51956bbb3f45185dd510f665e"
  },
  {
    "url": "Linux/ip8.png",
    "revision": "48b7b9e51956bbb3f45185dd510f665e"
  },
  {
    "url": "Linux/ssh1.png",
    "revision": "13b93984a2e9af7cdc903007c2c2a9d3"
  },
  {
    "url": "Linux/ssh2.png",
    "revision": "75c8b511123e76056c5b1c584c5dd370"
  },
  {
    "url": "logo-search.jpg",
    "revision": "f6bd26e711e58de0e48d7edbe1af95b1"
  },
  {
    "url": "posts/2022/03/01/a-d.html",
    "revision": "49bf77ae9b9a8ec41958e5932cb83515"
  },
  {
    "url": "posts/2022/03/01/a-dp.html",
    "revision": "3600c67c62c130434e9cc9c5f8bd45a9"
  },
  {
    "url": "posts/2022/03/01/a-g.html",
    "revision": "a82e9f20485b390b0d7a740358d05d6b"
  },
  {
    "url": "posts/2022/03/01/b-d.html",
    "revision": "595025c639236faf3c30596a948dcfa7"
  },
  {
    "url": "posts/2022/03/01/b-dp.html",
    "revision": "b29b03b20ae29885d005f3834471b9fe"
  },
  {
    "url": "posts/2022/03/01/c-g.html",
    "revision": "8cd4c95f5719cc11679be8c3a70190f1"
  },
  {
    "url": "posts/2022/03/01/c-mg.html",
    "revision": "e58fe545c45bd7288152404c250d37cb"
  },
  {
    "url": "posts/2022/03/01/c-s.html",
    "revision": "fe287cd7a9976ddacb5d8498349b5926"
  },
  {
    "url": "posts/2022/03/01/d-d.html",
    "revision": "e70e1f0ddeb48f7d88f5d8bcbf201876"
  },
  {
    "url": "posts/2022/03/01/d-dp.html",
    "revision": "328e0c04f2f393b34cbb8ddc4e4841d0"
  },
  {
    "url": "posts/2022/03/01/e-d.html",
    "revision": "6d6f9bc3d62f80a7b11714df38f127e3"
  },
  {
    "url": "posts/2022/03/01/e-mg.html",
    "revision": "d8f8dc9a00ff2e98a3b9d9bdecf718e1"
  },
  {
    "url": "posts/2022/03/01/ex2-g.html",
    "revision": "24031449508cd051feec6df995af87e3"
  },
  {
    "url": "posts/2022/03/01/f-g.html",
    "revision": "f27bda5c972aaeb2cbe0a065ad5f78ad"
  },
  {
    "url": "posts/2022/03/01/f-mg.html",
    "revision": "4c4e13b60ca2498b11a996ff750c6a80"
  },
  {
    "url": "posts/2022/03/01/g-dp.html",
    "revision": "ad408dcdc1192401243b34432bdda4f3"
  },
  {
    "url": "posts/2022/03/01/g-s.html",
    "revision": "b9aee313211a9fe3f7f1496a29d1031f"
  },
  {
    "url": "posts/2022/03/01/h-dp.html",
    "revision": "3be77d29d640b0375019665ffc8749d6"
  },
  {
    "url": "posts/2022/03/01/h-mg.html",
    "revision": "cf5f72e9ca17b94b2cef9e680f13057a"
  },
  {
    "url": "posts/2022/03/01/h-s.html",
    "revision": "32d48ce952309ba655873ee359ea0775"
  },
  {
    "url": "posts/2022/03/01/i-d.html",
    "revision": "988100effef926886c05470804acadfa"
  },
  {
    "url": "posts/2022/03/01/i-dp.html",
    "revision": "b0f03e89c24c6b8a9ea351c360ea9daa"
  },
  {
    "url": "posts/2022/03/01/i-g.html",
    "revision": "866fbcc42737f89c1573f5c5ada926dc"
  },
  {
    "url": "posts/2022/03/01/j-d.html",
    "revision": "0036cf5d4e687d22e0a02b12a4ed0d53"
  },
  {
    "url": "posts/2022/03/01/j-g.html",
    "revision": "2bd0f95982f1cad4f79545dd6ae18261"
  },
  {
    "url": "posts/2022/03/01/k-d.html",
    "revision": "b6d772be19fb26b45a00f502ee32f88f"
  },
  {
    "url": "posts/2022/03/01/k-g.html",
    "revision": "085fedb3166ac5f84b5f8089a74f9754"
  },
  {
    "url": "posts/2022/03/01/l-d.html",
    "revision": "82a3bda8f28a15d400956b0adb720623"
  },
  {
    "url": "posts/2022/03/01/l-dp.html",
    "revision": "35a9c909889b76f34c3f1b1055d90161"
  },
  {
    "url": "posts/2022/03/01/l-g.html",
    "revision": "1b30c683e0b668132eb6fb4cc774fc70"
  },
  {
    "url": "posts/2022/03/01/m-dp.html",
    "revision": "b115864e9414c6b602e92a05dfc9cbce"
  },
  {
    "url": "posts/2022/03/01/n-mg.html",
    "revision": "53f2969cf4e7e94b462ad4eb2b698912"
  },
  {
    "url": "posts/2022/03/01/o-dp.html",
    "revision": "be80ac1a8cc3e635212a30d3217be0bf"
  },
  {
    "url": "posts/2022/03/01/o-g.html",
    "revision": "a475c7f75659dda97c85770d55099e91"
  },
  {
    "url": "posts/2022/03/01/q-g.html",
    "revision": "82e689009d8ff57409b55ed580ea22f3"
  },
  {
    "url": "posts/2022/03/01/q-s.html",
    "revision": "02ddec006c40afaacd81150a21471503"
  },
  {
    "url": "posts/2022/03/01/r-dp.html",
    "revision": "15d3fcc9d4e7c6482eb6fd99838be986"
  },
  {
    "url": "posts/2022/03/01/r-g.html",
    "revision": "7f8f609e842efa78b90b74f8793ce664"
  },
  {
    "url": "posts/2022/03/01/r-s.html",
    "revision": "73e3dfa39e1cc2d81cbed7b374da46ac"
  },
  {
    "url": "posts/2022/03/01/s-s.html",
    "revision": "39edd9bbe9dd069c78e4c3fe19b0cdb8"
  },
  {
    "url": "posts/2022/03/01/t-g.html",
    "revision": "9bbd7565b0f0b07ee48f34cae5cd532a"
  },
  {
    "url": "posts/2022/03/01/v-s.html",
    "revision": "18fd8c04d774fbb521556433266b68cc"
  },
  {
    "url": "posts/2022/03/01/w-mg.html",
    "revision": "9c89147854f40e968695e023f1fa6061"
  },
  {
    "url": "posts/2022/03/01/w-s.html",
    "revision": "4d5f644532ec724f352f51d6e17c5f33"
  },
  {
    "url": "posts/2022/03/01/x-dp.html",
    "revision": "ebc3484d41b673925ccf7f1a50c8864c"
  },
  {
    "url": "posts/2022/03/01/x-s.html",
    "revision": "82355ca6344d1f07ed79fabac505dd09"
  },
  {
    "url": "posts/2022/03/01/z-d.html",
    "revision": "d107379221fb65d8ed26a8c094f513ad"
  },
  {
    "url": "posts/2022/03/01/z-dp.html",
    "revision": "cdb1e7040311c1123e87ed99bfae3aa2"
  },
  {
    "url": "posts/2022/03/01/z-mg.html",
    "revision": "269270d63c8000b4cec8d6d08a1cc1a7"
  },
  {
    "url": "posts/2022/03/02/ex1-g.html",
    "revision": "a2dd7438a37f1b0c367646f430d5598f"
  },
  {
    "url": "posts/2022/06/02/make-your-qqbot.html",
    "revision": "bf6e45cac4279b80693e5214dce0ca0e"
  },
  {
    "url": "posts/2022/07/01/littlevampire.html",
    "revision": "b21f0c82506144c6c17c4e47dee19dc0"
  },
  {
    "url": "posts/2022/12/12/_6-1-dynamic-programming-over-subsets.html",
    "revision": "d6c564dc390d4b9fd42ba4dd8af64914"
  },
  {
    "url": "posts/2022/12/18/_7-1-treewidth.html",
    "revision": "936d6b4ef4dad2c706610bf3eec429f9"
  },
  {
    "url": "posts/2022/12/21/_7-2-treewidth.html",
    "revision": "ecf42e943395a461ff16286508be17c7"
  },
  {
    "url": "posts/2022/12/24/_7-3-1-weightedindependentset.html",
    "revision": "3f3a2a593877e45cdca56ede91004f87"
  },
  {
    "url": "posts/2022/12/27/_7-3-2-dominating-set.html",
    "revision": "edb4f6ad76876f2d3a5526efb1f41d64"
  },
  {
    "url": "posts/2023/01/02/_7-3-3-steiner-tree.html",
    "revision": "6ec53fe3590ae01880b8514076837120"
  },
  {
    "url": "posts/2023/03/15/linux安装.html",
    "revision": "c6003088f0f8b9fc15b4d3dd51768a00"
  },
  {
    "url": "posts/2023/03/16/linux固定ip.html",
    "revision": "19241aad8c9b5896aac47ef2d84376c1"
  },
  {
    "url": "posts/2023/03/17/linux远程登录-ssh.html",
    "revision": "e51cc0ce79567e6d4bd9334e43843274"
  },
  {
    "url": "posts/2023/05/07/udp.html",
    "revision": "bb9afda59ce0a7d4b95e464532bc10e0"
  },
  {
    "url": "posts/2023/10/09/河畔重构日志.html",
    "revision": "e70e45c471e3ac17223a19dea31bb2ed"
  },
  {
    "url": "qqBot/1.png",
    "revision": "fb6cf9e2ebf02643208209cb78634f8f"
  },
  {
    "url": "qqBot/2.png",
    "revision": "ca35e89e3d033b442346883d78e16073"
  },
  {
    "url": "qqBot/3.png",
    "revision": "c73cc1aec57693762e5d37fa6b4202f1"
  },
  {
    "url": "steinerTree1.png",
    "revision": "4ef745d1c3a962d3c570548f4347d891"
  },
  {
    "url": "steinerTree2.png",
    "revision": "1bdcfdfe2aa1babcb8ca641c11de1fa6"
  },
  {
    "url": "steinerTree3.png",
    "revision": "df57937d480eae59bede841cb02d3793"
  },
  {
    "url": "tags/index.html",
    "revision": "f7a0bf5bac059de054ab7e5c2ad95d85"
  },
  {
    "url": "treewidth.png",
    "revision": "1819b61e977fab3033e7880f87388ab6"
  },
  {
    "url": "udp/1.png",
    "revision": "393fd5742110d3eea8231f344f769c39"
  },
  {
    "url": "udp/10.png",
    "revision": "1318551146a14668cabd5cebf8a67fdd"
  },
  {
    "url": "udp/11.png",
    "revision": "9e638e00666a62d24c6a279757576736"
  },
  {
    "url": "udp/12.png",
    "revision": "f779fb0c7f3ce9e10593e569a525194e"
  },
  {
    "url": "udp/13.png",
    "revision": "ee147b66c50c2660abe5a259f07f189a"
  },
  {
    "url": "udp/14.png",
    "revision": "8dec17e3b8d9096a93123d9f33e3ae6a"
  },
  {
    "url": "udp/15.png",
    "revision": "3244e6d7a82f21c39770ed85fbe991ae"
  },
  {
    "url": "udp/16.png",
    "revision": "b223ac3355af54ecafb00b79d39cfaf4"
  },
  {
    "url": "udp/17.png",
    "revision": "a7c67c9333cfdfd8de9c7c107ec21650"
  },
  {
    "url": "udp/2.png",
    "revision": "ead5ba4d13e08c6d951a1c383766a3b3"
  },
  {
    "url": "udp/3.png",
    "revision": "32a94d5886f63959248599362d885d96"
  },
  {
    "url": "udp/4.png",
    "revision": "0a5ba22727344d43351980eeb0daf4f0"
  },
  {
    "url": "udp/5.png",
    "revision": "1ffa8b4109016d5864c6b8fb104711dc"
  },
  {
    "url": "udp/6.png",
    "revision": "ef191cf36a9ddced8fac214697adfbae"
  },
  {
    "url": "udp/7.png",
    "revision": "02aee24d9fc9cabc5200415982387906"
  },
  {
    "url": "udp/8.png",
    "revision": "2b43bdf0c68c869685971a9acfb8c679"
  },
  {
    "url": "udp/9.png",
    "revision": "b5a66b25d12a54d665c62b55b260082e"
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
