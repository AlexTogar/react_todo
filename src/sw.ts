const appShellFilesToCache = [
  './',
  'index.html',
  'main-bundle.js',
  '930-bundle.js',
  '405-bundle.js',
  '0cd50bb133d483a8181db7384593e009.svg',
  '1ea279c98d92249d47421a67ab9b2811.svg',
  '408f492f866fb2ed18fc14ea5837e0c6.svg',
  '4df817758985f21153e2f8193880b850.svg',
  '6e96cd4fcfb2637eb734a91b575433b9.svg',
  '763917efe70a151c2ac5753935e32002.svg',
  '9245920397190e532ea29fc72d8a293a.svg',
  '94f23189f93a272badc6b2d3e75fc979.svg',
  'd07449cb527353d4a033d608451ceb2e.svg',
  'da3fc0896e48b46ebd3c746f070195d1.svg',
  'dfa0e9aa27f531cef592b23bf471da6a.svg',
  'e100c436b9b6a752e3dbccabfb3735a4.svg',
  'e4b27e82316509fc74f1ca9c17e4b6a0.svg',
];
const cacheName = 'react_todo_cache';

self.addEventListener('install', (event: any) => {
  //do not swith to next phase until file caching is done
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(appShellFilesToCache);
    })
  );
  console.log('sw installed');
});

self.addEventListener('activate', (event) => {
  console.log('sw activated');
});

self.addEventListener('fetch', (event: any) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        //if response is in cache => return cached value
        return response;
      } else {
        // if cache doesn't contain needed value => fetch it from the internet
        return fetch(event.request);
      }
    })
  );
});
