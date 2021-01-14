importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
);
//set debug to true if want to get additional info in console
workbox.setConfig({ debug: false });
workbox.core.skipWaiting();
workbox.core.clientsClaim();
//we inject file names here with sw-build.js
workbox.precaching.precacheAndRoute([]);
