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
    "revision": "4273b69b3142212bcab91a532b0f76e1"
  },
  {
    "url": "assets/css/0.styles.768f9c81.css",
    "revision": "320925d56ee9aaabbf11276fd818a431"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.c7b82b56.js",
    "revision": "680b29301c0e8a71bc2a1c962b50f5e4"
  },
  {
    "url": "assets/js/10.6dce6cc5.js",
    "revision": "ffc3d2919714077f988b637c362f0843"
  },
  {
    "url": "assets/js/11.3ab389d9.js",
    "revision": "0261c4c0af76c88ba77eb63ad0c60520"
  },
  {
    "url": "assets/js/12.c929d3c0.js",
    "revision": "e797ba0b2e55c43899581e9ef00294bc"
  },
  {
    "url": "assets/js/13.a5b424f6.js",
    "revision": "c2e34fd48f5f1ec1e632631b1f57f3dd"
  },
  {
    "url": "assets/js/14.33621416.js",
    "revision": "3b0bcb915bfe9de09128a7b1ec21fbef"
  },
  {
    "url": "assets/js/15.af78b4be.js",
    "revision": "5eb13fdb744ed56d752c07d45308ccb7"
  },
  {
    "url": "assets/js/16.8b9502b5.js",
    "revision": "389c600cd228862a77e61282f70f1d2d"
  },
  {
    "url": "assets/js/17.b3d98615.js",
    "revision": "71f92c04da0c0e369b36cd5765d0eba8"
  },
  {
    "url": "assets/js/18.2874477d.js",
    "revision": "ae9630255e11068edeb2f33f16cf4097"
  },
  {
    "url": "assets/js/19.b3823b96.js",
    "revision": "5ea43309f238bb661b9861721de658e3"
  },
  {
    "url": "assets/js/20.7ee9cd83.js",
    "revision": "dee7cc3ad546d31b36ad912fca3d2f79"
  },
  {
    "url": "assets/js/21.25fe2aa1.js",
    "revision": "34335f8244c65cf912159be3acf323f2"
  },
  {
    "url": "assets/js/22.c001b566.js",
    "revision": "c8d0178078a4592bad45fa590dd63cff"
  },
  {
    "url": "assets/js/23.817db81f.js",
    "revision": "7e261b5026e3a573187b4bf8b76c17e4"
  },
  {
    "url": "assets/js/24.900aa0a2.js",
    "revision": "d4de6dd5280eee7f8f16d10ea514976b"
  },
  {
    "url": "assets/js/25.77223a3a.js",
    "revision": "008f61716ee606b5c7e271549889d580"
  },
  {
    "url": "assets/js/26.3df0ab48.js",
    "revision": "f7eca5eebabc85817d7fb5f29fcbf64e"
  },
  {
    "url": "assets/js/27.b3a27bba.js",
    "revision": "45fd19e194a99dc6bdc2cb4501b874c4"
  },
  {
    "url": "assets/js/28.7f5ed609.js",
    "revision": "c1a00496197963f4a9835692d5d6d7bd"
  },
  {
    "url": "assets/js/29.b90075a3.js",
    "revision": "7ccd86ad1d91393f3429c7ced98c9029"
  },
  {
    "url": "assets/js/3.7ed2ed51.js",
    "revision": "decbf1637197a95334990e2658279b38"
  },
  {
    "url": "assets/js/30.f7558b72.js",
    "revision": "7a56f19fd8db312adbc5c5d91441e6fa"
  },
  {
    "url": "assets/js/31.dcc37dda.js",
    "revision": "843cbe029b7cafe817cb1a2fd10611c1"
  },
  {
    "url": "assets/js/32.142e55b9.js",
    "revision": "dc9eb96ca1ab69f7069f2a333171647c"
  },
  {
    "url": "assets/js/33.53948f1c.js",
    "revision": "d46c3fe23722d7ad5a79b9f68a507d25"
  },
  {
    "url": "assets/js/34.28b3a5ef.js",
    "revision": "5ea1113c01a5affb2f9e2cd6db81c371"
  },
  {
    "url": "assets/js/35.10ab50d3.js",
    "revision": "fc81053fd712638732b5fe2b479cacc6"
  },
  {
    "url": "assets/js/36.b9d5331f.js",
    "revision": "894a6e959193dd7695a223f1932159f3"
  },
  {
    "url": "assets/js/37.aaef814d.js",
    "revision": "6e8eb4c11940718f9d07106e77b47c62"
  },
  {
    "url": "assets/js/38.45cfac18.js",
    "revision": "4ead53fcf00991b5c94826f99198ea91"
  },
  {
    "url": "assets/js/39.ca827918.js",
    "revision": "0f051e0c32908879213a98b0dfc78043"
  },
  {
    "url": "assets/js/4.f0bd85e4.js",
    "revision": "48476ec5733af87b81a5866147095e48"
  },
  {
    "url": "assets/js/40.2690a580.js",
    "revision": "347fc81d24430455e520253431938e7f"
  },
  {
    "url": "assets/js/41.f54144c6.js",
    "revision": "c3e0e1cf5a3535b1f5240e9a002031d2"
  },
  {
    "url": "assets/js/42.b898a77c.js",
    "revision": "fdd4e0160787f36409e94fa0565c24b3"
  },
  {
    "url": "assets/js/43.154a1cd9.js",
    "revision": "51fe6abbe05e423f8cc4afd98e3660e3"
  },
  {
    "url": "assets/js/44.28f4aba3.js",
    "revision": "92112cd0e7067852e3b24454d2b95ed1"
  },
  {
    "url": "assets/js/45.82748bc7.js",
    "revision": "8fb4f54160d040a6c8e0316584ebe988"
  },
  {
    "url": "assets/js/46.bf500f8c.js",
    "revision": "f1a4f41dcebe8e9def038482211cb1ab"
  },
  {
    "url": "assets/js/47.893bfcda.js",
    "revision": "8791b3a11ec3008ee7df71244af2e056"
  },
  {
    "url": "assets/js/48.c3f5a070.js",
    "revision": "02b9643843705f9c7bd2bfe4b4b7b9a7"
  },
  {
    "url": "assets/js/49.a292dd3d.js",
    "revision": "aa8e7f9f206aa5e40d34ee0ba020da57"
  },
  {
    "url": "assets/js/5.04f0edc8.js",
    "revision": "217cfc6334a1823d1a73b2a874848020"
  },
  {
    "url": "assets/js/50.70b272e4.js",
    "revision": "e0c6050729c79e44225bb76dbbe82c00"
  },
  {
    "url": "assets/js/51.d110b268.js",
    "revision": "91fda1726baa3aca4b338b54d90ea64b"
  },
  {
    "url": "assets/js/52.576d8411.js",
    "revision": "1309416fd2a7aa7433746b2c85e4dbf2"
  },
  {
    "url": "assets/js/53.b4f63be1.js",
    "revision": "ebe701ba127aef58bde6662bc13e2693"
  },
  {
    "url": "assets/js/54.7200cdc4.js",
    "revision": "9bce07fc4160569b6c68e1771134f8b5"
  },
  {
    "url": "assets/js/55.47e5beec.js",
    "revision": "8e0d325ffb8d2e077c6f7d473e4c63f4"
  },
  {
    "url": "assets/js/56.784dfa5a.js",
    "revision": "d891b1299b7644c5b812fa2fbaab312b"
  },
  {
    "url": "assets/js/57.25bb1eab.js",
    "revision": "a068808677a0af3eac62a898404aa51c"
  },
  {
    "url": "assets/js/58.b8a4eea5.js",
    "revision": "227a0b28f3f62f3212c7d962142a5476"
  },
  {
    "url": "assets/js/59.6dc4be26.js",
    "revision": "910f175b1eae02ff85a2c8b29da676e0"
  },
  {
    "url": "assets/js/6.66a45e75.js",
    "revision": "5454badcb5e33c2a154e3095c870ea23"
  },
  {
    "url": "assets/js/60.4795da9f.js",
    "revision": "a70560591b17a7d5f2fb1efbe60be406"
  },
  {
    "url": "assets/js/61.5968599d.js",
    "revision": "2a357b2c2c726deed5ef926ed8c70a3c"
  },
  {
    "url": "assets/js/62.33713f07.js",
    "revision": "a3f7431c3910effc269cfa6534a5a654"
  },
  {
    "url": "assets/js/63.0ed619fc.js",
    "revision": "7b77e49381bf30374ba9bdd2a3277bda"
  },
  {
    "url": "assets/js/64.559a0cc9.js",
    "revision": "b2071d52eaaaa09eb8eb35c98aa26462"
  },
  {
    "url": "assets/js/65.f5768bff.js",
    "revision": "7c9f2d54450a4fe7c155c72401848500"
  },
  {
    "url": "assets/js/66.592373d3.js",
    "revision": "dc6baa79225f2a9c12fecd7c39e4205c"
  },
  {
    "url": "assets/js/67.ac67403a.js",
    "revision": "5ac70634d5a9a31f5771c335937a35d9"
  },
  {
    "url": "assets/js/68.216905b9.js",
    "revision": "993ef77633253f49beb6994a2ab38e9c"
  },
  {
    "url": "assets/js/69.82ea0dc6.js",
    "revision": "2d00ac32833e91135fc657cf4450b180"
  },
  {
    "url": "assets/js/7.84fe5fb0.js",
    "revision": "fdc8cd854dc53f38457b5a3ce497160d"
  },
  {
    "url": "assets/js/70.dac22cbb.js",
    "revision": "a424f83bfbf62c87b91a865e8bd7926c"
  },
  {
    "url": "assets/js/8.310c0010.js",
    "revision": "de2d134b25ebccff569a3a1b73b1b73e"
  },
  {
    "url": "assets/js/9.1fd3dfa3.js",
    "revision": "d7f53ccdc757c5e5cc84cd40175c338b"
  },
  {
    "url": "assets/js/app.1d5f53d5.js",
    "revision": "2cad50129282d133a0e7fbd4b48e2d48"
  },
  {
    "url": "categories/index.html",
    "revision": "44b7ba697040ab2b3cc5056d41c9eeaa"
  },
  {
    "url": "Csharpand2d/CsharpStudyGuide.html",
    "revision": "7c5fe27af57154ed43a828126f64220e"
  },
  {
    "url": "Csharpand2d/day1-7/Day1.html",
    "revision": "8d4438c1b9bbe1e6945b3c08b1b9df2c"
  },
  {
    "url": "Csharpand2d/day1-7/Day2.html",
    "revision": "5d9175f40daded3f7361bcd7b47349a9"
  },
  {
    "url": "Csharpand2d/day1-7/Day3.html",
    "revision": "ed4b8f73f20ecbef4f0587619529df53"
  },
  {
    "url": "Csharpand2d/day1-7/Day4.html",
    "revision": "7049faa831eef6b6c431d5ad1b4b6633"
  },
  {
    "url": "Csharpand2d/day1-7/Day5.html",
    "revision": "506bde1dc97b06b1afa15814d2ef2afd"
  },
  {
    "url": "index.html",
    "revision": "eb9a6499a4942bef6ec2603d328fdbb1"
  },
  {
    "url": "logo-nav.png",
    "revision": "51dbea5b097a20a8f506dcd09e402ac2"
  },
  {
    "url": "logo-search.jpg",
    "revision": "f6bd26e711e58de0e48d7edbe1af95b1"
  },
  {
    "url": "tag/index.html",
    "revision": "5ae0d6fa191b6ab893c6688ca4a1d994"
  },
  {
    "url": "timeline/index.html",
    "revision": "85193dc7ef1fb5b85b6c5958e75a5153"
  },
  {
    "url": "wcnmd/Data Structures/A.html",
    "revision": "52835ce45cc3a946cf4f15a69aaf16e3"
  },
  {
    "url": "wcnmd/Data Structures/B.html",
    "revision": "f4762c23fbb7b8b569d26e5515d50d58"
  },
  {
    "url": "wcnmd/Data Structures/D.html",
    "revision": "4f5b929e2cf1c0c149f8742265c4808e"
  },
  {
    "url": "wcnmd/Data Structures/E.html",
    "revision": "b505c974c632611c96324761846a81d0"
  },
  {
    "url": "wcnmd/Data Structures/I.html",
    "revision": "ae67debdafd33062c3caede5b93c8346"
  },
  {
    "url": "wcnmd/Data Structures/J.html",
    "revision": "9429c3acf53edcebe5981328b439fe7f"
  },
  {
    "url": "wcnmd/Data Structures/K.html",
    "revision": "121eeaa0b2f9e394cb3b84c577057cb0"
  },
  {
    "url": "wcnmd/Data Structures/L.html",
    "revision": "f6790faeb26f2e659dbaebec0f82234d"
  },
  {
    "url": "wcnmd/Data Structures/Z.html",
    "revision": "67427e51214541e23903eb8409df9e0f"
  },
  {
    "url": "wcnmd/DP/A.html",
    "revision": "0f1bca5245149bbfb47a50b0ae775064"
  },
  {
    "url": "wcnmd/DP/B.html",
    "revision": "ad4d02ba5f317d2c7e8bb6ceb21c7df5"
  },
  {
    "url": "wcnmd/DP/D.html",
    "revision": "581a3684bf71e334bca6d2d16d22e189"
  },
  {
    "url": "wcnmd/DP/G.html",
    "revision": "5d0d2f1a11c9222321e6054586249a30"
  },
  {
    "url": "wcnmd/DP/H.html",
    "revision": "06883d19514181d088c5b6fd01c0448c"
  },
  {
    "url": "wcnmd/DP/I.html",
    "revision": "f1da392c646f1a77b31598b4d9a07407"
  },
  {
    "url": "wcnmd/DP/L.html",
    "revision": "268ff1dc09d2c518af31a48d12104250"
  },
  {
    "url": "wcnmd/DP/M.html",
    "revision": "d2ceeb03b86559f7518c733199d1c7f1"
  },
  {
    "url": "wcnmd/DP/O.html",
    "revision": "1e04edf8cd51aad01d5027e5c8ae2e6b"
  },
  {
    "url": "wcnmd/DP/R.html",
    "revision": "0cf745a402179c432076160b7936a91a"
  },
  {
    "url": "wcnmd/DP/X.html",
    "revision": "ccbdf4fddf7f7a29f65838536fd2b361"
  },
  {
    "url": "wcnmd/DP/Z.html",
    "revision": "f89099d9b27697ea4e8cff6a2d3e8ed7"
  },
  {
    "url": "wcnmd/Graph/A.html",
    "revision": "952073e5505599d4e97838ca2fc1a971"
  },
  {
    "url": "wcnmd/Graph/C.html",
    "revision": "b124c088e9c2fe8c4888cd1c1d99bc1e"
  },
  {
    "url": "wcnmd/Graph/EX1.html",
    "revision": "b09f9df6d06c7302c44080801e4feefe"
  },
  {
    "url": "wcnmd/Graph/EX2.html",
    "revision": "a5afb771c11bc085cd09daaa4c823e7d"
  },
  {
    "url": "wcnmd/Graph/F.html",
    "revision": "fe668a84e50d75acd2f916a9184944a0"
  },
  {
    "url": "wcnmd/Graph/I.html",
    "revision": "4029a1b18a845538087179fe5414a877"
  },
  {
    "url": "wcnmd/Graph/J.html",
    "revision": "7b01d2a920651ce93346cd1038d4bc3d"
  },
  {
    "url": "wcnmd/Graph/K.html",
    "revision": "aafc83521796000d9e4c0dead2187c37"
  },
  {
    "url": "wcnmd/Graph/L.html",
    "revision": "743042270d80a2a164cfb162f7e22a94"
  },
  {
    "url": "wcnmd/Graph/O.html",
    "revision": "5b5738397079dd84380d52ec4ff618cf"
  },
  {
    "url": "wcnmd/Graph/Q.html",
    "revision": "9d75887db9718ce01d28f2f31b8f71af"
  },
  {
    "url": "wcnmd/Graph/R.html",
    "revision": "8bd8f468317c82f2b6cf4c81a63face7"
  },
  {
    "url": "wcnmd/Graph/T.html",
    "revision": "0b35868f918ac9445340bfe18068d01d"
  },
  {
    "url": "wcnmd/index.html",
    "revision": "63af822224d13985c59841262a2f97fe"
  },
  {
    "url": "wcnmd/Math and Geometry/C.html",
    "revision": "656c99ebf93820735b595b16019780a2"
  },
  {
    "url": "wcnmd/Math and Geometry/E.html",
    "revision": "106c02a7a489e1c54858f08e9bcb660a"
  },
  {
    "url": "wcnmd/Math and Geometry/F.html",
    "revision": "74bc20d37c4bb99b1860b153ce901fca"
  },
  {
    "url": "wcnmd/Math and Geometry/H.html",
    "revision": "33d904859ea76a0dcfddc0d944bf6bd5"
  },
  {
    "url": "wcnmd/Math and Geometry/N.html",
    "revision": "3c263fb994dacba922457abb4a0eb930"
  },
  {
    "url": "wcnmd/Math and Geometry/W.html",
    "revision": "000520f25d4f9bf2d218ca0bda48f578"
  },
  {
    "url": "wcnmd/Math and Geometry/Z.html",
    "revision": "b8a51d6972e72f4fd99c1b4442e8b318"
  },
  {
    "url": "wcnmd/String and Search Algorithm/C.html",
    "revision": "7fde3b3a04375554bfcb0d7515496baa"
  },
  {
    "url": "wcnmd/String and Search Algorithm/G.html",
    "revision": "0d9bc0df3e803e66ea968c50e19653a8"
  },
  {
    "url": "wcnmd/String and Search Algorithm/H.html",
    "revision": "e292085b15ee85cc666c216923fd36e2"
  },
  {
    "url": "wcnmd/String and Search Algorithm/Q.html",
    "revision": "81657203db8f12c128786661a6ae95d3"
  },
  {
    "url": "wcnmd/String and Search Algorithm/R.html",
    "revision": "181a174be1f87787f3779c4cceae4806"
  },
  {
    "url": "wcnmd/String and Search Algorithm/S.html",
    "revision": "502d9c995a4ee1b394d34128e525c511"
  },
  {
    "url": "wcnmd/String and Search Algorithm/V.html",
    "revision": "cd7496b9714a7173212795d3f95b38c2"
  },
  {
    "url": "wcnmd/String and Search Algorithm/W.html",
    "revision": "d2ecb8cd9bac69be414116d3be39553e"
  },
  {
    "url": "wcnmd/String and Search Algorithm/X.html",
    "revision": "7eeb7c66596e4ee9a65bd28e90c8c4ff"
  },
  {
    "url": "wcnmd/tijie.html",
    "revision": "7746ba8e9139742b22458d44cc232c0a"
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
