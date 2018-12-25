addEventListener('install', installEvent => {
  installEvent.waitUntil(
    caches.open('offline')
    .then( offlineCache => {
      offlineCache.addAll([
       '/offline.html'
      ]);
    })
  ); 
});

addEventListener('fetch', fetchEvent => {
  const request = fetchEvent.request;
  fetchEvent.respondWith(
    fetch(request)
    .then( responseFromFetch => {
      return responseFromFetch;
    })
    .catch( fetchError => {
      caches.match(request)
      .then( responseFromCache => {
        if (responseFromCache) {
         return responseFromCache;
       } else {
         if (request.headers.get('Accept').includes('text/html')) {
           return caches.match('/offline.html');
         }
       } 
     }) 
   }) 
  ); 
});
