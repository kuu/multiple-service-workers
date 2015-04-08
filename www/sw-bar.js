'use strict';

importScripts('serviceworker-cache-polyfill.js');

self.addEventListener('install', function (event) {
  console.log('ServiceWorker-bar.oninstall: ', event);
  // Do nothing.
});

self.addEventListener('activate', function(event) {
  console.log('ServiceWorker-bar.onactive: ', event);
  // Do nothing.
});

self.addEventListener('fetch', function (event) {
  console.log('ServiceWorker-bar.onfetch: ', event.request.url);
  // Do nothing.
});
