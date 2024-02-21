'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "2d7846bd4edb71dc97b61960fe00f883",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "209f580fa4aa15ae27f6e4f69abf5e9c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9e390f68ec039bb531dadf8d6e98d6bb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cb18997f9044fe1c3de34a26bdd91689",
".git/logs/refs/heads/main": "cb18997f9044fe1c3de34a26bdd91689",
".git/logs/refs/remotes/origin/HEAD": "d15e4b452e6866b1f9a849226de333e9",
".git/logs/refs/remotes/origin/main": "76d72c3ef74e8a4cec1310efeadd151c",
".git/objects/00/f4d9b6633ee7afb85f7e82124be6f3664ed13b": "5482266034760972cb330054bef991bf",
".git/objects/01/4e00764d8fbf5eac94386df9afc82fbf045c6f": "e42df7da9766e3508db29d863c90fdc1",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/a6c4117e75987883fe527d9668dbb71540c443": "0437734cbdc92f1ec8c5a17c3807627d",
".git/objects/06/39c5bace3ae6d0a8cc00d9c98e4723170c0af4": "f1f039b81977fb73b73ebc226e13a67d",
".git/objects/06/665df401241808fb94c5980fd9ad0599ae1361": "a2c84c8fc99b7ea3a64405b2702aa62f",
".git/objects/08/274d0522569f9e5ae2719c523176948e7736db": "863314e93b88ba1e0b882744446c8460",
".git/objects/0b/10d75e1b09265698c93cd5f59898b31663b457": "b20012d9704a06f4e0c6121336311fb7",
".git/objects/0c/247b088bf7a61d467a39ed6bca8e945b78f69b": "68d56ec623d34e2bb6215eb570abe564",
".git/objects/0d/116e449dea8e78d0025e152a84c8640413e69d": "7fb9902d733669c6dd3c6a1676ecfda7",
".git/objects/0d/753bda97aaff4e41cc67e6ef077ea763cf7668": "12eb3cdb2c38f06f39919c332bc2163a",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0f/cdd1e1ff88a1323f797344d61b5b16f3ee8365": "5b3ecc2bc9b09f4b5eb4c9f0f6969bdd",
".git/objects/11/c8ed868d066d7668dac64b56429329e541ebe0": "0ddd4c3447b520fe4816de93569764df",
".git/objects/11/fad5dbe84d3a846f074e4efa2507a414522699": "dde4bc56765286690f7f8e157f8b3135",
".git/objects/12/37a610090892adc85123c1f11c89c5d8565d5c": "8d67f5168f1a6aaba0af743afe86147d",
".git/objects/17/603254d133ca499649e7868234c5d1947938f2": "cab72282612e6956eb749e0e462ef78b",
".git/objects/17/8646b4ff68030c60ee2671aae929c9916254d5": "d56bf236e4ff73706561b8f1d8f3b79a",
".git/objects/19/3807ec279b6f60a14566fdb658df4416a95a1a": "2a7bc54ef45c06e0d7919a9135d3890e",
".git/objects/1a/e0d547c27efd1ea750229f2306a955fa7cd715": "ca8dae8e55863f071f7484e55167122c",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/7338d6c416c09100bb7ffb97d732b6816626ee": "aa68474e0c052d6aee448d888453adc1",
".git/objects/22/24a585e4fea2de0190791903d4baa94be1c308": "5896195c315aed00d4a319dbc0d86b8c",
".git/objects/25/ebf813a465e5c93f2dbb1919b824a01c1321b3": "6317f3b020f665173eccd07768078af9",
".git/objects/29/18f0994c18890b53cdfa85e73a49ef8f050948": "a28c864f6cb5e7ba9f5f5c4a1c46d6a9",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2e/5c00146bbde9fbdca7f6e2f36aff7506a3b42f": "fb7984130eeae21d1126f7d43526fdae",
".git/objects/30/af74fef94d9aeccae4f0141c39cf4be36b02d8": "f6776d6f82a6562d6afc561b78c8b273",
".git/objects/31/60394fbc4c6fb3627e291eb0f970a9653cf7d9": "6261a9d99ce141c2789b464e362b33a4",
".git/objects/34/6dfa42d04cb189a692c96276cff32fd54a80bd": "3e8156de39b6057ef1929c81d5ebff87",
".git/objects/34/bf46983d7e6a88cd24d1dc10b4bcf412a10ed7": "34d4fdea3cdd0f45ac60f21a3f285de0",
".git/objects/38/349342634b8d89ca457e670d8d391e0aea8b23": "1fe73f2cc1387e59ffa9f5c782ab1886",
".git/objects/39/f1f5a7cdba571fcf21e67a7079c3d22e6cdc87": "2372b4322f2f24f28677c3fbc0cd58a5",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3a/9c6dca46ab43c643296774b5589026c7ba39d7": "ea0c5aaefe974681e39e2e6ebce3b5c9",
".git/objects/3a/e02405a73f00c001ef794d199b4463f8e3f03b": "526a3cf17008430be5691578f6fbaf73",
".git/objects/3c/d62149068a2177f42f54990089c5ec957989d0": "a31a7e49077e4d734aa3e9c5f72e5454",
".git/objects/3d/716e4ebd9de115447b5f8f4693a301468f8b71": "5bae224f1b5173903019c914769f505b",
".git/objects/3e/e46df62943ad3d9ddf09a2deaccc2100bcce6e": "86067696662eeec692419812aefa6195",
".git/objects/3f/678171983d5d9dd60b118a6b850a1aefc9d0cb": "fda882f45919fafc0c54ed4e4b25b637",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/0e74f799a14fbb79fbe56e0a6f9004418b9216": "7ff94f425852fedd2806f68d05eee8da",
".git/objects/45/e62f4682740df55a77b6c334c58032d4e39e4d": "4b25022c35aa54932e327ce52c5b3c9c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/bc64d040240d4d0415de2baae55b8d08c45daa": "219aa42e91a03ae742df953e7330de1d",
".git/objects/47/fe92d763388655a448180715e26f609b47a189": "1fd849abf04a049e39e0624eb0848f6e",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/f696a3e1514840e0a9de3bca59c34fb2b4b57d": "e542f034ce53d6ec27008d798ca418cb",
".git/objects/4c/2d6de4b2435ae786f6f25b9d81a40a517d64c4": "c522a413852785e3605aeb90852db15b",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/240a52024e80f46b2296f79ec88295d8250cda": "fb2df321badf9e4ecea2d5f844a8a1e3",
".git/objects/50/ba0a32d14660d32164c3e4b2b31b5a09c0772e": "f201a7a33777dd830dee11df0e02357d",
".git/objects/52/4ea0010b06d659187e65ce8065bd1cce7e4fd0": "621add2f7f1cf6261d7eab7606f222b7",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/06521b3d87ff710c65e9a77b7102b2f1609735": "e08b27b9f3e90ed88bacfff4a280cdfa",
".git/objects/54/ad992c1f98336f2d5e2a3d890af4335a416eb2": "4eacc735c05f19682011d2d1c1bb07c4",
".git/objects/57/add8d331cc1d684d863a4f912cf466beae7db3": "c25ee8c7b87a4273c95f98598d1f1a62",
".git/objects/58/3dfb8aa061521751c48ab16bcb309165afee30": "b33143b403ce710893e898d55f76d019",
".git/objects/58/4a517460b5303bc701d590945b091c2991e98c": "392539d8da9db82be011567b3a13ee8b",
".git/objects/5a/11a641b787e13940b6bd0693362e4eb713ff8b": "3f4c357b9304dbb18d416080346c127a",
".git/objects/5a/f58623052559c1e1a2d05b9845775161e8adb1": "b3f70fecc2e1b24e026929a2ed782633",
".git/objects/5c/ef07155f506c380d08fe4429a5e2c5e3c59c18": "b2343feb3437397102fe4bae008de3f7",
".git/objects/5e/742c6ccf15c93a48799e323f7edbe95dda97b1": "16473f2265ab31f16f236dbb59eb89e2",
".git/objects/62/222177d4fe57c11b364fdaf6eb9eff75eeb6d2": "4a0f96da4fdc8ac9f926dc0ec95cab11",
".git/objects/64/88dae85fb8d73adb4edf87ad7644ced45b3e68": "32c6f216c53cf82a61c4f719a5e5c5ba",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6c/a870efc0a49ce7095b31e94285f3a252d2c249": "bcef90f15fea86a98fedc95e4688f8e3",
".git/objects/6e/300d5a6957ebc25e57ba6edcfebe58257b039b": "ff8540a93cd82fb80704474a6540871a",
".git/objects/6e/5ff05a8473253d692d81cb2ab2f00811937c3f": "c5efa8fd235d1cac2d11768f8d2d908f",
".git/objects/6f/86f2384ec30191888e5d2f25ef1fdb1da49e5b": "2acf148479238dda8b2892de1f44ef97",
".git/objects/71/ccf63ebee5d21834d3027f32e0d2d9981b0cfb": "cc27935e65ce931f12aa7ecbb373f826",
".git/objects/72/027f7534d7284f2a2e131f2a4da1fafd24efad": "fd4432fb9d50bd18ecbac472923831ce",
".git/objects/72/91790a5efdbc0420f9e18959d9c8869d93e853": "3b197a067e2f319f764fa47500c3bae2",
".git/objects/72/e925f25b356c7325b23c324284808f741e2144": "afeb548aa4447a8376aac43dd7f409ac",
".git/objects/74/5ccd6fd9249b39f7d28a3c7ad33e466588b114": "f6ebf3cbf9fe52302f9c3e7dc31bce72",
".git/objects/77/c2871f63784e61734084d8ee7f11b44f8dc817": "404967da9fa634d2361bc736fa04e269",
".git/objects/77/c41a13568a006bff86d2bf677ba9402a154f4c": "8161112a0c134175d382c61b40168541",
".git/objects/7c/bad41383d46d209c7acf164402ca3566f68e11": "c9393c5800727d7fe76fccb9a14b09c5",
".git/objects/7e/113048bd19b28b7b3f318b9775223595ba05b1": "7cd1529e1c4e7791b651e33b8c6939b5",
".git/objects/7f/20cfdb8a56b4bf7e41a9c0a70439f8291a66d0": "b6516635ef54dadde2cb75b9c991d80a",
".git/objects/82/9eda8fdcf133ab2083dbc880b6362b11d0c8ea": "72fd972bf7f0020b924435fc702e5219",
".git/objects/83/6e6de76ab77652391728e4c90baa5f7f373b4e": "369871cf7659a07518e8dc1021ffd92c",
".git/objects/88/620af0579ac55ed59dbd55052f897ccf205c9e": "256888e889e020f3b766ec3a07af03b4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8b/80c5231b8cc0db4179d7e7d185e36c6d0b86c0": "c3aa4b1028d24d5d0838da9335423c33",
".git/objects/8c/ae3eed17fb25d29143ad14ec140ac8c8155ce6": "f22eaf8cf9723b2ec1faf435a2caa89b",
".git/objects/8d/9c316d93405769ba28482d5ead4e571db2d265": "f6e0b60389a57b0e98f38ee3e7a7485c",
".git/objects/8d/eeacd12a9a3ea561b8f8d22d643686e82ff51b": "1082e380a79c3e9b849aa148081af320",
".git/objects/8e/7efee86b23f484dc0242c82940a35ad949fcc5": "22f0966c8491bd37309d7da3d7f0ba22",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/92/2b6a98f9cefaa966588bb8d88fdcfa9b686e96": "0733d143e73c9900c60d02dc74fa95e2",
".git/objects/92/9fac2a5d7bad1f8a693532c11fb9403d6642f3": "bd922b30eaa9d4d5b04966b2cd56a2fb",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/95/622530c8e6db8aca294561de88872cfbf37a34": "84fa64475f063d2fc6cce7a71acfb09c",
".git/objects/96/c0e4a28b35447dfe998d72611e535c5cfe9046": "0567b8f0d4ebbe6134e0fdfb4a5ff551",
".git/objects/97/7ecbf4fac44a23115fb46dbe527daea95dd62a": "a99d31ca91f6b3260f4e7efa6b9088f3",
".git/objects/a1/2740adf1a1d7d8732613f631ef901379c610b2": "3a830afc2e7ac1566c951a7023e68097",
".git/objects/a1/4719133fc88137bcabf825ba466277b72f9dac": "c74c71fc20f675e9f9d2654b7c4da9e1",
".git/objects/a1/a5df632429f21a3f498eb50ac4ff86ba44f389": "8c5b2667c89d8b8b07bced699719f6fe",
".git/objects/a3/8edb4bb7d213c1c8576563719b5a74f3bd787c": "f5d43cf74d9e312ad385e0c636582b65",
".git/objects/a8/13ab40bc39e52f7d48210e424644b55fb3a693": "3a3879557ba1df90536bbaab221566f0",
".git/objects/a9/a594e83092f0e2b143b4add8d3f9699ec18f90": "44b349245f5756688c48b5ad6abf1799",
".git/objects/b3/581fc777e3ec35dbcd794d82d1599b720504f1": "b495259871756af5e05225f9ae1acf86",
".git/objects/b4/2bf1f995eb1c7496ff61c9aa29bf4bb2fe9aa9": "9f05e67f780b76bf170c93e1bdbd5d73",
".git/objects/b5/8b74b89fd1627dd4c385b71fb089b52b15420e": "cb5919e9c681ea9e9bf5144956f6484c",
".git/objects/b5/eca300c46ca0d5eb3ba66c2107ffd092f152b6": "f60744dd5f3897574c9d005bd6a98a02",
".git/objects/b6/270ac9bd00d0e65ba756c25f990d2373358fac": "aabe4ceea06b5904c17716efaa59f696",
".git/objects/b6/3d569e4aa904edb6e4e7e2bb46e993a20cd047": "50fadc2f30292d031dcc2eea1cc85231",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/754351a89b6a58ffedbb0390e11740c71d85dc": "123c61f2dfbc5426285b4b767395456c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/558a00516ef047232788dc3d5006eea4d8a3f8": "4d516b40b670f3adc2baf3bf7910c2d1",
".git/objects/ba/71e75c5ddd1a2d88db9e9c2eb210663d7ed920": "71a44064da76e67145bb39d8b8f4b026",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bf/2aadbc6ec3f14be1b6907185e0b5bee57a79db": "f0f24126e5f8dea9cc512dbf5df6e711",
".git/objects/bf/d63ff4cffa016ef29f7fc530b0b270b6548959": "2f6f3254e9ba55c59faf8c93f00fea5a",
".git/objects/c2/cec43e3bf815047b02b5479b4bf56803014689": "0ed2c069736a91e8a3d829e851c08198",
".git/objects/c3/21d1cdc1f74846407e1d4ce071ea763bc8929e": "ddc5ea1deed4003c013309607666b833",
".git/objects/c3/3834df2cdd0bb6854b9ef2782fdb405667b0a1": "44bcd652968f69a6a441293dd701ca62",
".git/objects/c3/e8f1b26c941e4af6f60654c34988fb1ed13a14": "c3993a1ab72f4a0085fddd8958470958",
".git/objects/c6/8568fad2178061577cf86e89f9983a3ef2d86e": "4f14ee2d44b6a1968a8d2ccbb26f08e0",
".git/objects/c8/53f46a3765f15a7cea08d6a4f4de35c86b26ec": "f7035b8792d0a9b4e62ce4950aa3cad0",
".git/objects/c9/0c2a77c68e688f004f3ff0ab5e0a8f0f4887b7": "da82e62fd4a98456dd43ad652053f76d",
".git/objects/c9/bd4946508ba24264733f73562da319a3dd999b": "96795faf2d43fc479f994b1ba5a0058c",
".git/objects/ca/743dc8d75b3d00f81fef6abdf876affb196d94": "de91cacedc53f3a2f7e81453455c6ecd",
".git/objects/cb/478b81a7097fb03106f1fa17f6cf2ad9afc438": "cdd8adf06cb45b4770d898358fcea60f",
".git/objects/cd/64d79b51d9d21bc6421bde87e89c01eba054c9": "3afabc93586a7227d39de3f100340cbb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/b58ffbfa3c0d813911938b50b946c8eac0c9e4": "b51b7dc588315ca3de6735899fdb79f3",
".git/objects/dc/a5d73bc6694e637ca7b773a4f010283ba9dd9e": "49a62afc0cc9ebd79f28fdc5e440ea25",
".git/objects/dd/3d206198426c9113d5d4fa0be1eecc886a6dfd": "b128745cbc73c8ddd1e927998ca28ab5",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/b118e63dc39176ce6e5d88c0c86d70b76da297": "c53e529fc3319c573d44165b7acc33ce",
".git/objects/e0/253b802f05bc6704aad70aac278ed22935f4f6": "b640200b494f8eeca15d44a29a87ca8a",
".git/objects/e0/2a72a3b464e4be9eb9c7e4de23cd615795b584": "cf283ba4fb10ee8a7252d90429359a14",
".git/objects/e2/d13dbceb4b0ae5ee5aa0917ff297a92690e474": "bc1e0ec3e7ffb61b5c636549fe596e68",
".git/objects/e3/1181402e8bd268ea61903205f5e37ca875f258": "b0957421acb1ccc1c92457c542fb345b",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/7c352f29c691ce181d93864db8fa56ee880044": "409bd5c905267db8406f68ca66b39fd9",
".git/objects/ee/78bc11c7d88322cb421769a3a93a15f9475fde": "018eb31aa92c817c1564a335684047e1",
".git/objects/ee/fc5f9e700c54c1da1869e97a1b53d53b78d280": "908e1800f9e1fbd23c13c079d06510b7",
".git/objects/f0/3c90f2c787818b6f5f53b2bad68734153e9938": "c1541b0b28866e9dce7e253de1a2c663",
".git/objects/f1/a8d09ac430d5006644b4f98b23f400f891622a": "93e0538996300d413130ad7cf2456d6b",
".git/objects/f2/1fad76f1529dc1a9c0700886246d770bf07e27": "7a867f8bc741ff2290af0ccc82e6720f",
".git/objects/f2/64dd415c4c5c1658c26635ec26c4f0c46cd3bb": "097282e50287a5a200c3c341ac392775",
".git/objects/f3/551d7cfa696c65e04dfd579b6efaee27b85697": "f73085b4e0e42a486dfdb5f21a8ca778",
".git/objects/f4/12124a5c6bfc69be48f44c1e2cc20cf4007614": "476f0eafa3470818fcff3380c96109f8",
".git/objects/f6/fa8609e9e519962abbd6ab3cd676f8a1cc2da3": "5d65782abcad8622a19768fe45ddc692",
".git/objects/f7/5e30a762b7b848701f17f925b7d3e5c70aae67": "f67caba434231dd96512b5d5b499bfb4",
".git/objects/f8/f191453039dacdf309be87b6f70e6236e4d88b": "2f5340eb69038dfff60021c7465088dc",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fb/be8bcd83b21180a65ab6ff19f417d167a24373": "5be18a229869c0707bff2aebfce32ee0",
".git/objects/fe/5c9a2b7a79a949d509b883b3bb7581a0f5cedd": "d3a17dc44fd5342d3811c1668e80a5a7",
".git/objects/fe/dcd09c210af464b393125ab9e0e1d1e1cdeb2c": "945f17acda332fd5d3d275e16bc96a23",
".git/objects/pack/pack-874a34fa9201ce21e52e51ff7a8904f3130889b2.idx": "3c4b1097da496d4044809f7562ce161f",
".git/objects/pack/pack-874a34fa9201ce21e52e51ff7a8904f3130889b2.pack": "d2aacda0ad57f4f6ea83eecc711417c0",
".git/ORIG_HEAD": "78ddb177c7a29b3ff2f5ff1727e0bd99",
".git/packed-refs": "800341a1feea33c927116185f0166f07",
".git/refs/heads/main": "ea622944ad39ad3a09100559a25743b2",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "ea622944ad39ad3a09100559a25743b2",
"assets/AssetManifest.bin": "463926dae0838a7e71e202258f440eb1",
"assets/AssetManifest.bin.json": "0561f153b4189efc6ce5d4ac01465f1e",
"assets/AssetManifest.json": "29d36b50e59fc018d5dcb0ea557de303",
"assets/assets/images/1.jpg": "1bd9604e75a391d30bc117fff7362c2e",
"assets/assets/images/2.jpg": "0481f91bcb03ea0560ad5e5245ad2b91",
"assets/assets/images/3.jpg": "107454abcd59a229d98264115d1709f7",
"assets/assets/images/4.jpg": "93b6c4d43b3bf388b2d3b64e4a208059",
"assets/assets/images/421161270_919717673154137_4040778173338882252_n.jpg": "481d59202717125d36fcd56b5292192f",
"assets/assets/images/5.jpg": "337bedd8a7c2fa36e08a16cdad82e352",
"assets/assets/images/6.jpg": "53199dc2f0f61951e2768e262b606662",
"assets/assets/images/icon.png": "dc7514e4bb823d88067c175b86c0021a",
"assets/assets/images/kid_reading.jpg": "2d3906b2151b9b981a066b63774cecfc",
"assets/assets/images/news_0.jpg": "8e9501ba7d670ade3c9c45ddf2b1080a",
"assets/assets/images/news_1.jpg": "059a9fb5d88543b2bdc37c529a18916b",
"assets/assets/images/news_2.jpg": "933ac860e4b05a20798b0f9e998bc22a",
"assets/assets/images/news_3.jpg": "5726d563715963b66c212e6621199d7f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "5ef47414eece3d98d8a6148dc108d2e1",
"assets/NOTICES": "dfda21a2e0c2288bd5c5d73b638cfb7f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "dc7514e4bb823d88067c175b86c0021a",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "dc7514e4bb823d88067c175b86c0021a",
"icons/Icon-512.png": "dc7514e4bb823d88067c175b86c0021a",
"icons/Icon-maskable-192.png": "dc7514e4bb823d88067c175b86c0021a",
"icons/Icon-maskable-512.png": "dc7514e4bb823d88067c175b86c0021a",
"index.html": "721965aa9a3b42397079399b6720d97c",
"/": "721965aa9a3b42397079399b6720d97c",
"main.dart.js": "ab13bebc891c19b3a0e1a1d05d61233d",
"manifest.json": "e333f05f28712588048cbfd5f7174eba",
"version.json": "dc489e9d9a5750f6808c4642a4446de5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
