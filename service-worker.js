const CACHE_NAME = 'raides-cache-v1';
const urlsToCache = [
  './index.html',
  './manifest.json',
  './service-worker.js',
  './audio/A.m4a',
  './audio/Ą.m4a',
  './audio/B.m4a',
  './audio/C.m4a',
  './audio/Č.m4a',
  './audio/D.m4a',
  './audio/E.m4a',
  './audio/Ę.m4a',
  './audio/Ė.m4a',
  './audio/F.m4a',
  './audio/G.m4a',
  './audio/H.m4a',
  './audio/I.m4a',
  './audio/Y.m4a',
  './audio/J.m4a',
  './audio/K.m4a',
  './audio/L.m4a',
  './audio/M.m4a',
  './audio/N.m4a',
  './audio/O.m4a',
  './audio/P.m4a',
  './audio/R.m4a',
  './audio/S.m4a',
  './audio/Š.m4a',
  './audio/T.m4a',
  './audio/U.m4a',
  './audio/Ų.m4a',
  './audio/Ū.m4a',
  './audio/V.m4a',
  './audio/Z.m4a',
  './audio/Ž.m4a',
  // Add more audio files as needed
  // Add any additional assets like icons
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
