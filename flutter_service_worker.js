'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "598dd0064bf9e4970e89c85add32fbfc",
"main.dart.js": "cfdae5fc6d84f0c8220a347650e873eb",
"assets/assets/arun.mp4": "2a31f966a8b9938e28ac697d8db5eb85",
"assets/assets/arun.jpeg": "68b8ade37e5f6464b225b8ae967af0c1",
"assets/AssetManifest.json": "a1ccee8ece52f4abf2f952c77993dda1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "280af3b1b8a2f644e43956f292f24ccb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"manifest.json": "58f673766e02c044a17965dbc8fd3aa3",
"index.html": "8dfc8c2ce295393d83af311a831184d1",
"/": "8dfc8c2ce295393d83af311a831184d1",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/index": "2794e5eb2794488e026129af86da13e6",
".git/refs/remotes/origin/main": "117457eb3fc25e774a1cc3c4ca6339ca",
".git/refs/heads/main": "117457eb3fc25e774a1cc3c4ca6339ca",
".git/config": "b2d8268ec789956feb88d2fe231397f5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
".git/logs/refs/remotes/origin/main": "f1d5895f24a2c1ad0417a5c0a5dfc436",
".git/logs/refs/heads/main": "9088585ba29e1c69196653ec7b13634e",
".git/logs/HEAD": "d87e06ebc022c4376e6f0a52133b91d6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/objects/42/5cd75280dc68bef7146105289c4579e867736e": "a049a5e4726b8700d6836feb8c116352",
".git/objects/8d/a58ac169f43a967a1517df6b4169b9b292941c": "c1ea537102ea1816d3a24454cd4a2518",
".git/objects/85/fb0a3e53dfd16b09a9a7f21d30bc2485082028": "06e15a1ca12b1a07791b8b6547169d06",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/80/489c3c40e7dd6cbb8d3e84545a22213afe5c9e": "9f9b6a542fe79bf90b391515ea69a934",
".git/objects/62/41b148b9b359f144c2214636b0ee6d8eac96f3": "5f7dc650b612c95f54eed5d8c445b412",
".git/objects/e9/1ae89fbd778b27d18f56aaf600128e3ec1c55d": "e76a2eb2b57cafb2fd1f3ec02c027da7",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/34/efa6a2555e9c496c5557307fd970263df7dc65": "2f0bce949d6b61a3f3c0fece1a821935",
".git/objects/c1/4c29d6506cb9236f2c979472e615feb82fffb5": "4851bcf475a5b3f2cb51419f75fa3899",
".git/objects/1b/2617d1fba4cc4afaf9386758df7812b3808492": "78c25ddde60a0aa655ad6aea63e451bf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/52/47d19905d12b2eaf1b8f2c7443bb0386f3c6e3": "6925c8fd351768edc240b2b6517aa89b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/89/612e515a5cf80d22b479c50f0a7d4bfea1ad5e": "2e878906ab8119c2d953ced08119bf14",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/6d/cb86c13a4c4c047d04c425df7370f461442e46": "a31b9bf48e2e3e1372e10cfda48500b8",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/64/4276b71411961d8657db505bbc13cc87b99e5f": "cdcb427b637c1bdf82192143b572bc10",
".git/objects/6f/0032636b9fd409972e2ee5fa84b551a4dff4ea": "a25042c76434596d72462fd97385d334",
".git/objects/1e/f233ba0da48289e1fb562b56b9c9786929facf": "a3fd44a86582e5614b6be8958e7f88de",
".git/objects/45/a1c62e3bb42e5f76b2d8895e4b0218b8006cfe": "5aeeea1f7b7e35ee6c270c5994a07b0e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/37/88892652db7891763ef2850b9a32e307a9f083": "2a5b259d34877b34930177a48456eef1",
".git/objects/8f/e59d8bfa8decad5fa1fde6083716cf61761cb8": "8ed51e9326cd8f6f896b09a44df998a9",
".git/objects/5e/0f3520ce694798bc2edeb85d9ff5f237680084": "26830bef2400ec09900cac5fdf3ae9e1",
".git/objects/9a/95adda9ed89a548a3c362ea0688822e076e8bb": "d9b56b59e1c4cdef4e946701e3cc9507",
".git/objects/c9/55f853df6b3b197fd7d4c7175637d86d31f223": "f5e214b3661f6d4f1f4813f14332b306",
".git/objects/35/88c6d8ed1b1047a9dcdd534250efa6ffb80b31": "abc529713172cef7d2e209613f29cf9a",
".git/objects/35/781c0b7bb87671bedf8de5f4c532e771d5f071": "68fdff750256c440a0a00069b4d68da4",
".git/objects/35/73bd0df42472442b7be1a79c7a1daa96bcb893": "bd82d36177da85225935fa75a5055edf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/36/8cd83b684ed1cf56cddd7e7fce03afcdc4e1af": "88bb3b39dd99856cf316d86a612cc0dd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/b3460fe3aeb6397bbf49a0548f7a697c9c424b": "ca72b8f538402751c1e141f81cb0c1a8",
".git/objects/02/4feddc2eacdf3615927277e792fdf44da0d7d8": "85d6e5e876fd884d38a82774e9d42e58",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/f6/c50fffd9809c7b3bed134a797b4b9f2af4dca7": "ed3dd30fb08f3b030c89ddbcaa4ae845",
".git/objects/2c/3ea1acaff6c39c10394555041590f69bea31b2": "c9a166e78e971b8e634c23e0991b9841",
".git/objects/a9/86b216e923d8d6a40fb48be2cd2a148b65cc83": "1dbcd58ea6d832c51971e95fc8324c58",
".git/objects/ce/3ef523e882d7d8b658e4e29652ab33ccc35e4f": "d5a99396ef5504bb504302e89007c5f7",
".git/objects/ff/bf15292c95ad3a6d857036ecf79afdc5e2bf6e": "6ae86be90b24fbd1c6fdb9859f224c5a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a3/726b47b253ff22817c1555aa8824017850406e": "a6bd4e99870209617d6054b47dc89b83",
".git/objects/a3/033288677003f9eeb459e4370e9cd82492ca20": "e4ffce0eeee5d74520a32a6c27a6ae29",
".git/objects/ec/5972eb1dfdbb8b3fdf2e9abdc681807ab4610c": "fa27f914d7121c899941de248469ac67",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/78/5a3c79f7cda56e6b13ae94fa29664878178ad9": "a92683a657129c250cb0641993113a74",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
