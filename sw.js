const CACHE = 'toolspotr-v2';
const URLS = ['/','/manifest.json','/assets/app.js','/assets/style.css'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(URLS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.map(k => k !== CACHE ? caches.delete(k) : null))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      if(e.request.url.startsWith(self.location.origin) && e.request.method === 'GET' && !e.request.url.includes('?')){
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
      }
      return res;
    }))
  );
});
