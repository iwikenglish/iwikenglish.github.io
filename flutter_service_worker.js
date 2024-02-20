'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {
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
  "assets/fonts/MaterialIcons-Regular.otf": "f86fc68f08504759841091053321c15b",
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
  "icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
  "icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
  "icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
  "index.html": "88e0887037c157a2014414e1c6a7038c",
  "/": "88e0887037c157a2014414e1c6a7038c",
  "main.dart.js": "c8b0072f434b4edaf3f28d07ae6af06d",
  "manifest.json": "e333f05f28712588048cbfd5f7174eba",
  "version.json": "dc489e9d9a5750f6808c4642a4446de5"
};
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
        CORE.map((value) => new Request(value, { 'cache': 'reload' })));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function (event) {
  return event.waitUntil(async function () {
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
    .then((cache) => {
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
