'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "cf00a0acd99115da2244b08e40ac55e0",
".git/config": "cb946bb4afe378d4de9dff4179ae9a50",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "520d7ab8970235d6de6862f6a2ad1f35",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "a48736e21df05a5e03835430fb640a0a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ebd87820a8303e82498d9aef1e0c623b",
".git/logs/refs/heads/main": "f0028667e3276f5cd0427cc1fe7caebb",
".git/logs/refs/remotes/origin/main": "0207d6a8d530cc4192eec53c1a6fd655",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/02/555dd66ab58af0de31f14717fcfe128231effe": "dcbbcdfe02cb4ea3e54e6ef850059d67",
".git/objects/02/d76ef223568f52d37f9c0f021dae2357ac7bc9": "e054610f8330901b8d98733f532fab02",
".git/objects/04/43f8ea7bb201db90797786d413991b08dc7e3d": "2bd2e2036044e61e515c51731b061fad",
".git/objects/04/b177862f20265b11ad61bd73ba3abf0f7e9bc7": "d7dbd18711c55b442618d3f3d53c8936",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/9b63df0a14c9da20f02e852f30ad16493d7fd1": "4dad962408088381a87bf620d4ff3b70",
".git/objects/0d/49869935867a1164d33e0f6cd071d3f52bef89": "4cbb4737cb05ba4ce08318dbb0099564",
".git/objects/0f/d85ea18444192c4c9e25d1d4efb5b5fddc8381": "479cb70297974073f59a00eaf8735365",
".git/objects/1a/6c5e1689e16c9a8235764cad76cb7f97920f0e": "b403c826ec63cc82fbdc37a0bd725aea",
".git/objects/1a/77ed947bcf4a1731138793d33015a1e72bf7bd": "a387b6f9608263c63e0dc7781bcac50e",
".git/objects/1e/0f3109ad2fccb42dc677a36ba186b4c49700a3": "19e7806980bac56550cb3dcbe6a7e34f",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2b/709341681b11c75a46cdcd52b04ba201707819": "3225bccdf38a148697df01a161772f62",
".git/objects/2b/783747170ef5b7a23a96a1965543b3dbfaa83c": "c2645a538af0c9005d77119728e94d3d",
".git/objects/2d/a8364c7334c9ff95cc32513df96b72ae304dad": "5c3dba4d878e046875bf25b3bbd728b1",
".git/objects/2f/25882ed8b70e58a545bb28d79661cc92b261b9": "514011411166ec548955ce336365ff6c",
".git/objects/30/2b8991135041237465b23801c0997308c2bec6": "fb3f91fa9b5ad19d079e0424627e0f1a",
".git/objects/31/39dc7cf301ea55d8f5e781d98d5c58a6ee1ccd": "e26ff2b827306e1115fe3796b3329bdc",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/3f923c6a46d81268d5c92b75bdcc4eb4ee2dd8": "fbe08b66ac1dab5ea9e597e702304e8a",
".git/objects/36/c07e9a7b35033828b26b7b9d513024d9fb7851": "efb27957f81f0cc61899a6cb8080d454",
".git/objects/39/1f95e45c91980d92170198b787cb451dae8584": "a840f65dbb1f3b7eb598e9454a94e3bf",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/43/c724406ac0a12836fee36d8914e5f0ffd606a8": "62e314392de03a589013845300ac3e7e",
".git/objects/43/ec0667daa112f1e3e7651a3f78d738d7c4f3c3": "7adb66c89e3280cab009c3cd81216f7a",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/be5226519ba60f02d916e8f717ba43c16d1e11": "c599e207c1e01b36b0b45024f89bef49",
".git/objects/49/d0afb8d0b378bfdceb9fa1bafba389a2519946": "7a56d6eb3c61c778d964ca9633a97c80",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4a/b54d71505e383158771004942c3160b309f2cc": "6417944544e6b8233dc03dfa41046e4f",
".git/objects/55/e731418df936a2300a9a18a3b8638347aa6d02": "5278604e89c49cd5e203c68fb0d571ad",
".git/objects/57/53d8dcd7cd2dffdd81442d56af0e9208e6ad8f": "d5bb43347b809ce3eff08ae9cf53f0c1",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/410a49a8a856e257d072b7061e64535e976f2a": "dcf9b96a824efbd463a9c04641ef9928",
".git/objects/5b/5ebf704e610d4b81bc27b438f7a232afeb9c2b": "3f0174f460cffc6b7ed9933d086725ae",
".git/objects/5e/8630bf9f72a734aba9fa675d8f0932fd0f2ddd": "e202f388eb80f90d347ff052d8d8a389",
".git/objects/61/2190ad748effe3b0e7ec6d6e1c0d55ad266439": "059e1599939d5fd180ec300460c93c0d",
".git/objects/63/a63d81215a39b66e1775f7345c9e800036e3e5": "fdecec3493b154c1efb95e374d2adbfc",
".git/objects/64/8c1795dee5c328e85b8eec47459ace6c6b3afc": "a062775540eed7e810765a8d0e06a493",
".git/objects/64/deb99059dbb86b64aaced52a1bdd372226d71d": "8576250f44840f61747b9bfa2ef8f290",
".git/objects/6a/513dbe25d028926cad14b9d9e28be200aa1aba": "cccb4f5da8dd28b42615ac6e597072fa",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/1a0097910d75ce8fbcb97b3cbcf3c3bf96bf01": "11aa272a82805a6f88865c08f9314f16",
".git/objects/78/15f5ed44c3336fbb47f17e1955f5ab3c30c0a2": "6fd85669bc3b93b3e56105b329d75018",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/83/8fb67684d50b0b5357a899f12474fa941a1664": "3ed44fac82d8884e03b12154e8700116",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/328521c1b08243aaad6a5f76c26158dc65c92a": "1bb5a2b79ea495219ec18efffb8f9dbe",
".git/objects/85/a46f67d6fff9a92c9b6bfa71efe4d9b2888c1b": "673182cdc1e868ee1ac9778b6b21e55a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/0aca6498b7460e20b21a7ab3e4557a0e3cb836": "f24b761b8a871400c195dda5c954d186",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d8975f09492edd7cfc0ca26c0e15ec0033ff87": "bb85e07b5ea5df2a2f19a3fe52e08fb0",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/24f302533198a940b952290c2028d2b5c42164": "24f075e33e215bfb94315ad26020446f",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "a391c0384d1cabd19155f2907d961b09",
".git/objects/9f/b793ebfbaaa6c9447fb4c3b3b7665c1a250ae8": "03b6313f7ff494329e97685aafcefe33",
".git/objects/a2/3ff06eb2ff07750caba55c187f5eef804e8600": "efcef0f0e60440828ef57b55f67ae359",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a4/c52fe8a9c8fbb76b6d56ece1e3d226edf70866": "33bdf460510f7de0c49ca9ec431bbe4e",
".git/objects/a5/6934afe05ba6c6ff6e5d893af52b54718bd56f": "0b4dac3fb14883dab929cb570ea8e4e2",
".git/objects/a5/a0fdd3170567191c90f56d8cf3fe1f00292473": "117af2d1406c123433fa1fb9f0b1fb6e",
".git/objects/a8/270fc36ffb82c6ce450e18f3dc1daba6ab2459": "87090b38e22dc2256994fd729d18547f",
".git/objects/a9/c55889fa684c6da28a4d06b63743e31a3779c5": "3f621ad718ecbbc8de77e98e479b58fb",
".git/objects/ab/6f09981f6cdaff5ea0921a4875e4592d5d5d3a": "7e851fc57bdd9daf6102dd398bbca099",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ac/9ed7f1e8dd508958e5db98c7d92f9f627c4f91": "ec3f92cc47bf6459d4f59c89b9ce5778",
".git/objects/b0/076d4a37f474c498f0de58b6ac059399e639a8": "dc321b0eb23faae0c812c59cc1f72a99",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/615d66de8f655d2a643988ee22e120dea0252f": "ee7c86f2f83f0dfb053a6f38432144cc",
".git/objects/ba/2c0494e81c7327ae3af6486089fee078e9d492": "568148cae2bf00a0f8229a7f1c87f555",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c7/2c48926def11d45ea4257461ddef70b355a4aa": "192e290406a168c3c28c20de8be8daca",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cf/5f4b03ea032cb394c549c0a4ad2e2ebc63c53d": "7da718aeb42aad96bc49ce4284406f6c",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7510518eb6b8298b42644651196a14e1afdca8": "052195dd009abd1743543b49190553f8",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/22fbb91645600fde1305e3aa9a9714afb12fef": "7ffb0641e264115b7f410582b26a837d",
".git/objects/dd/036c2fb9cddbc5d2e1bfaf2bc7caf0598057d1": "38b895100e3a643760791f54dd96c928",
".git/objects/e0/86f983d734b6ea6af23e60ed7478cb4ab15f24": "d6147bf23320b4ba5f768243dda1d65d",
".git/objects/e3/35e8f7fe37571035b0f38e5a6b0885e78c4b88": "be2a32295f298a7de351bb4ab6bcfbd6",
".git/objects/e6/2e1926831965eb2ada068b3c9c0085bea97e4b": "d573a7c097b91132764cc6496ad71c92",
".git/objects/e7/19843b77492471bfa82c3934958e1ee1afdf97": "7f93ea56533331d15539aafffc36fa04",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/eb03fe48c26bc801dd17a9d7fa39f6bbe53d50": "d65188f94c51e5441d5dc85488b9a26d",
".git/objects/ed/572a8b5759b9dc405caaff018e479c797b3902": "8a89bc28e8851740ea469c8ea45bfdab",
".git/objects/f0/042b8718be45240875bd23439f74a51edf67c1": "906aca4b685e7c2824b76f9c107ef1a7",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/f0/f5ad8c496d45420427c122290ea983d6808624": "cf0007281ee381ee848443f5c04fdde2",
".git/objects/f1/03fac58b3cb932ad6a61d46ff7b4518dd60d06": "f8a85e6942907206c535bc972e895d46",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/aae2c4ca41d6b81b60821fd1c17d59e5309c74": "09b886f6cc111a05297ccf044fb436a7",
".git/objects/fc/bda43ab168ecd8d47fca54e93e06caf1d583a1": "19ca2b1ccff2f7daf0bd3d4d585abe73",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/ORIG_HEAD": "9f1f6c94b91f973fb3cdb826376d80e6",
".git/refs/heads/main": "3b8530f2351d5693212aa8c0d105530c",
".git/refs/remotes/origin/main": "3b8530f2351d5693212aa8c0d105530c",
"assets/AssetManifest.bin": "5ffdb9a6aed6d54618169e9c85d90162",
"assets/AssetManifest.bin.json": "271e7ba56cf1c54bda0757a37f54dcd1",
"assets/AssetManifest.json": "4083fdadfdfa92edda1c41f4e8ce684c",
"assets/assets/icons/behance.svg": "1487dff57f5c15131037cb6965a4d0bf",
"assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"assets/assets/icons/cpp.svg": "d9496ae833ab0a61133dac14fcbe7d29",
"assets/assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"assets/assets/icons/dribble.svg": "cf842513f50591eb280695ad14bfa409",
"assets/assets/icons/email.svg": "13a238cf2b82ebadf4b09d1ed7e8a7a3",
"assets/assets/icons/github.svg": "49b7a0f6543674cc4743ec1a9f02e368",
"assets/assets/icons/java.svg": "c1842155f0151aebae5bc949bbbc51cf",
"assets/assets/icons/linkedin.svg": "2f5e837978e8a6bb595dfd11c8dbd42f",
"assets/assets/icons/mysql.svg": "0cb2d6a4ee032880703fed4fa80e4f3a",
"assets/assets/icons/photo_profile.svg": "6144c5200721004808b7efcb36c70faa",
"assets/assets/icons/redis.svg": "07de0dac6d9fcc4fce26a4cf6505530b",
"assets/assets/icons/spring_boot.svg": "8eb3d0cb697805dcc58b135e510ad3eb",
"assets/assets/icons/tomcat.svg": "0a71147ef9b73e1c0a72ab6f795b7ecf",
"assets/assets/icons/twitter.svg": "c09d9f98cb67b0dfc2aa4c63170f2632",
"assets/assets/images/background_dark.png": "f0d5c26bf27351546462dc345b6e2e3f",
"assets/assets/images/background_light.png": "450ab25803d62c15ae678d937a000c1d",
"assets/assets/images/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/images/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/images/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/images/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/images/splash.png": "61ef95707bc8e9cfbfbeb2b1cf5708c6",
"assets/assets/images/splash_android_dark.png": "a17c99d57fe935937d7ed9987e9c00aa",
"assets/assets/images/splash_android_light.png": "0a57057c00d93cee029a723a2fe9a409",
"assets/assets/images/splash_image.png": "971a46a9ba209ed5a3c99c6bb12be090",
"assets/assets/images/triangle.png": "086ab5ca50d3e558e3307ff009975083",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "63958cd25ae8eb88241ed981aa41e6eb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "088d57bc5172ba21afd70fcd83429955",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00a0d5a58ed34a52b40eb372392a8b98",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1dec37ae6f66ff59b6c6529e15cfbe68",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "32a15f7713f52ace70814eec9f775ec2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "1abbbab3eb98347853067b36f9b83953",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "09f763a931e25a86b10ec8dbd404ef78",
"/": "09f763a931e25a86b10ec8dbd404ef78",
"main.dart.js": "8ea3b12089c3e9f19b7636cc3a50c3a4",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"splash/img/dark-1x.png": "1ca1e9f687f18b2cbfab9f91b9ea2519",
"splash/img/dark-2x.png": "bc5c3fed88a20a38ee784be455a7d09d",
"splash/img/dark-3x.png": "43b9fe2cea06a4e8eb67f35e4a7611d6",
"splash/img/dark-4x.png": "352564d0daa6c222008427de08212cb0",
"splash/img/dark-background.png": "f0d5c26bf27351546462dc345b6e2e3f",
"splash/img/light-1x.png": "1ca1e9f687f18b2cbfab9f91b9ea2519",
"splash/img/light-2x.png": "bc5c3fed88a20a38ee784be455a7d09d",
"splash/img/light-3x.png": "43b9fe2cea06a4e8eb67f35e4a7611d6",
"splash/img/light-4x.png": "352564d0daa6c222008427de08212cb0",
"splash/img/light-background.png": "450ab25803d62c15ae678d937a000c1d",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
