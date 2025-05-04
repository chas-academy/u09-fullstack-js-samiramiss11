const CACHE_NAME = 'neuronexus-v1';
const toCache = [
  '/',                
  '/index.html',

];

// On install, cache our shell
self.addEventListener('install', (evt) => {
  console.log('[SW] Install');
  evt.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(toCache))
      .then(() => self.skipWaiting())
  );
});

// On activate, clean up old caches
self.addEventListener('activate', (evt) => {
  console.log('[SW] Activate');
  evt.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME)
            .map(k => caches.delete(k))
      )
    )
  );
});

// On fetch, serve from cache, fall back to network
self.addEventListener('fetch', (evt) => {
  // only handle same-origin GETs
  if (evt.request.method !== 'GET' || new URL(evt.request.url).origin !== location.origin) {
    return;
  }
  evt.respondWith(
    caches.match(evt.request).then(cached => 
      cached || fetch(evt.request).then(fresh => {
        // optionally cache new requests:
        // caches.open(CACHE_NAME).then(c => c.put(evt.request, fresh.clone()));
        return fresh;
      })
    )
  );
});
