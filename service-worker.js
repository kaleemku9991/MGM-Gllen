// var CACHE_NAME = 'v2';
// var urlsToCache = [
//   'index.html',
//   '/js/main.js',
//   '/css/style.css',
//   'tubing.html'
// ];

// self.addEventListener('install', function(event) {
//   // Perform install steps
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(function(cache) {
//         console.log('Opened cache');
//         return cache.addAll(urlsToCache);
//       })
//   );
// });

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         // Cache hit - return response
//         if (response) {
//           return response;
//         }
//         return fetch(event.request);
//       }
//     )
//   );
// });

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         // Cache hit - return response
//         if (response) {
//           return response;
//         }

//         return fetch(event.request).then(
//           function(response) {
//             // Check if we received a valid response
//             if(!response || response.status !== 200 || response.type !== 'basic') {
//               return response;
//             }

//             // IMPORTANT: Clone the response. A response is a stream
//             // and because we want the browser to consume the response
//             // as well as the cache consuming the response, we need
//             // to clone it so we have two streams.
//             var responseToCache = response.clone();

//             caches.open(CACHE_NAME)
//               .then(function(cache) {
//                 cache.put(event.request, responseToCache);
//               });

//             return response;
//           }
//         );
//       })
//     );
// });



// Our current cache version and its contents.
var CACHE = {
  version: 'site-version-number',
  resources: [
      '/index.html', // caches index.html
      // caches all the contents inside the /css folder
  ]
};

// Install service worker, adding all our cache entries
this.addEventListener('install', function (event) {
  event.waitUntil(
          caches.open(CACHE.version).then(function (cache) {
      return cache.addAll(CACHE.resources);
  })
          );
});

// Handle a fetch request. If not fetched from cache, attempt to add to cache.
this.addEventListener('fetch', function (event) {
  event.respondWith(
          caches.match(event.request).then(function (resp) {
      return resp || fetch(event.request).then(function (response) {
          return caches.open(CACHE.version).then(function (cache) {
              cache.put(event.request, response.clone()).catch(function (error) {
                  console.log('Could not add to cache!' + error);
              });
              return response;
          }).catch(function (error) {
              console.log('Could not open cache!' + error);
          });
      }).catch(function (error) {
          console.log('Resource not found!' + error);
      });
  }).catch(function (error) {
      console.log('Resource not found in the cache!' + error);
  })
          );
});

// Activate service worker
this.addEventListener('activate', function (event) {
  // Remove all caches that aren't whitelisted
  var cacheWhitelist = [CACHE.version];
  event.waitUntil(
          caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
          if (cacheWhitelist.indexOf(key) === -1) {
              return caches.delete(key);
          }
      }));
  })
          );
});

