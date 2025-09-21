const CACHE_NAME = 'kju-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './cl.html',
  './cc.html',
  './memo.html',
  './Agrandir-Regular.otf',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Installer le service worker et mettre en cache les fichiers
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Activer le service worker
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Intercepter les requêtes et servir depuis le cache si possible
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(() => caches.match('./index.html')) // fallback si offline
  );
});
