var dataCacheName = 'newsData';

self.addEventListener('fetch', function(e) {
  var dataUrl = 'https://newsapi.org/v2';
  if (e.request.url.indexOf(dataUrl) > -1) {
    /*
    * When the request URL contains dataUrl, the app is asking for fresh
    * news data. In this case, the service worker always goes to the
    * network and then caches the response. This is called the "Cache then
    * network" strategy:
    * https://jakearchibald.com/2014/offline-cookbook/#cache-then-network
    */
    console.log('[Service Worker] Fetch', e.request.url);
    e.respondWith(
      caches.open(dataCacheName).then(function(cache) {
        return fetch(e.request).then(function(response){
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    );
  }
});

self.addEventListener('push', (e) => {
  console.log(e)
  var options = {
    body: 'This notification was generated from a push!',
    icon: 'android-chrome-512x512.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {action: 'explore', title: 'Explore this new world',
        icon: 'android-chrome-16x16.png'},
      {action: 'close', title: 'Close',
        icon: 'android-chrome-16x16.png'},
    ]
  };
  e.waitUntil(
    self.registration.showNotification('Hello world!', options)
  );
});