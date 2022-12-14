'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "50b730de904d09fa38697bd283113877",
"icons/Icon-512.png": "f6fcbe88be24ba5c9ca9302d22ee4d98",
"icons/Icon-192.png": "83ddc2836861d2f3d30142dc7e127a52",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
".git/refs/remotes/origin/master": "e6b27dd9ad89bd8165eb5252d7f155ea",
".git/refs/heads/master": "e6b27dd9ad89bd8165eb5252d7f155ea",
".git/FETCH_HEAD": "e3c360cd4385ecc4e986f4d5e2f67c5d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/config": "b35999685ff03909c04efab899db68f8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/remotes/origin/master": "84f2dd60868156a0db0cd7531aeb3131",
".git/logs/refs/heads/master": "08c9ee47b8e884d39b7403c278da5e43",
".git/logs/HEAD": "08c9ee47b8e884d39b7403c278da5e43",
".git/objects/52/e7330c3bf1453045ef451e52b57b25175358c3": "6474b55b345c2f2d84af6157ac7a81d5",
".git/objects/71/28e318c71a3c890191035a2e2d3d11a846965f": "e571130db50f4894bffae848cfa43bbf",
".git/objects/d7/ebf925d6b465068a1dbaad4161bd0538ba2c50": "0abe508fe5a68d0bef23f436d6fe2892",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/bf/7d2e251c26fe8e45a62d3dd1245e1dce087fe9": "cf61d65c378a5c3b19a197948200e7e5",
".git/objects/0c/73d64a91748e447d467fbc00a4ede85a63c9f4": "7783445eef19112f82a2fa3fa5344630",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/18/fc52ddd14bb08038e162857909020f642a9c01": "e7a97dcfa4cb977b674c979bd0f2a77e",
".git/objects/18/b097d48b7ad2189e9b4454b38a38f402e55e4d": "6fa59dbd7d739ea65a980a2770d103e6",
".git/objects/ae/ddd0f8047020bd936f05ad0b61d00a26d440a7": "dbbf833a7425a0437e0ca845f32f33f9",
".git/objects/c4/dd984f88f7ebc199bb524f8a453f17e278c5d9": "384c234614fc2c5f1ca411c66341716c",
".git/objects/c4/45d8bde7f331c30fb6ed950501b74c72d5b2fa": "00e9d4ebe43cce4763beede4bfb8dd3d",
".git/objects/40/1b7322bf7248e475a554f02be12d0a2a401db1": "0b18085d916914a7462c89c9b23ebc3d",
".git/objects/f0/8c07f71fe67cafba1c243521da9ee0390e65e3": "597b0fdbfa985089d881f11446b4d193",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/27/79ca1b0daa5b2acbf2562495b7b6e17bd86e4d": "ec630993997924e52addbca23f2ccd54",
".git/objects/47/818cc125f4b61ab58210edd3c06f8c437f90ba": "ce1161c7701ab241f737dc9b927be76d",
".git/objects/f8/9fc9f854f31dfa1481d31d1b19c25816da4947": "6e21873c815076cd177381687146928c",
".git/objects/63/de0ca6b54aa744e08e67fb650a28090bd37981": "b4d32faf892a7431397f40ede6a1eb6f",
".git/objects/75/4d9572a7ba749f9093f1811b794c7e3bab01e7": "17ca767e29d9c9e0522bdf511cc23fc3",
".git/objects/15/b3259b46aaf2f01d763286b6cde4d4d8f07d2c": "edbda6175e32f2deb28453c0093da107",
".git/objects/3b/f5f4b8d26fca384e2633a1f7cdc9334ee7500c": "57c460ce726ba5fd4ea3237d2cbc8261",
".git/objects/6f/942452245b494bc90bd65559aee310d88d0559": "610fdd5278f8f526cc288a2f2a31d8ce",
".git/objects/93/c8d52126e3b388c870208bc2334f9fb46a0a49": "2a1f8e70b3837ac3d2d76384a3e59aaa",
".git/objects/9d/2ad795459f75fc1b596cb086dd33726c6ff56e": "9aa1a5c07869866463f8d0b9ae522f61",
".git/objects/f2/40c683366c3b852129fb98ed35018beec06498": "fa292454b6c7f0382daa4c0355e27867",
".git/objects/68/8bc3f1c34ece70ebb44678f332603470a455c9": "7da8aea5b0e68d9b265468b3752f1563",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/e9/a4d862af157c9e226daa43be258b11fd0f225a": "c1c786cc84d5e57597a547fcd858d180",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/f619c669a4a9b3549646fa7635219eb7ab3992": "d575fe25e0ca49905aa731fd83938fbe",
".git/objects/58/95b13f4d96f3fc73bbdeb9c2162c50a4930a3b": "b80779948b46e617cd74dec1c9bd8275",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/22/db43513aadad04853713464e6555d93d8d46bb": "fd728bab3be1a1cbc0a235222861321c",
".git/objects/5c/4bd685ef26b8d5752c1a33d2a238ae0e3ee071": "743d38c1ab0e830a47b08bc40f9d00b7",
".git/objects/c3/dbfa87d21e822a0cea6f82b9c2cac7655a753e": "444134a957ef712a1c60cbb394c77a31",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/06/e42543ebd1eadae8aea66b875b755f34471f21": "25b27af151b083db62ac7556d5025ea1",
".git/objects/9a/396d14b9e84a86a5ab3c9072a6661a15cef5cf": "ec3cef1e98d81384644ba938ea770a58",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/4db6afffbb12548a4f8006bfcf45822d22c5fa": "bd8cab08f792ecf0d435bd0ceef58d67",
".git/objects/d6/dfe517ff146f69fb0e3fd195e1333210ef124a": "56a9ed1b119e128d95d538308ebe12e3",
".git/objects/11/d262a1eaf23fed22f7954d080d0ede192d08ee": "0ab9327048c6bd4959f9c978f8a8c08f",
".git/objects/e2/5c2be523aef3ed7c5b8fa56e4037919d4a2dd7": "2ad7b2a7a176450115599ca63901c185",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a5/ae14325ad101e906ebff7ee0072e047d39fe2b": "f10e28c07bb5a0245274d27dc262bdc7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/97/bb35165268f87046ac1c6a047c68534b15c339": "5680ad094cddd4bba98740f698b662b4",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a9/cb67eae0b019f68795e478bd43c34d3f9470d2": "afb9b4a6d7d6ad7092b2621d92e1c891",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/index": "898eb5392f9056fbd8cc33f26bfd1b5c",
".git/COMMIT_EDITMSG": "aadf38e0c02ef947e510c26ccee62ee4",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"manifest.json": "9113d2c215e9485c3593916de7767206",
"index.html": "75ec7a619df9b3a5217e40b86037e9a1",
"/": "75ec7a619df9b3a5217e40b86037e9a1",
"version.json": "009c9e65172e010890f7f65fde438006",
"assets/AssetManifest.json": "7336b08e8d090c68ad297aa8af88e0a9",
"assets/shaders/ink_sparkle.frag": "d9e647d41f6a89f007f7ec9e0ba23a96",
"assets/FontManifest.json": "16d92f7800f4bae7659edbce60b4681e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/FragmentMono-Regular.ttf": "edf03ca61f6902e1c211e98676346368",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/NOTICES": "a3da1a216aad89e7984725255bdeb0ca",
"main.dart.js": "ec50b3f4fb5cd6f5ba4e14251fac9113"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
