'use strict';

importScripts('serviceworker-cache-polyfill.js');

self.addEventListener('install', function (event) {
  console.log('ServiceWorker-foo.oninstall: ', event);
  // Do nothing.
});

self.addEventListener('activate', function(event) {
  console.log('ServiceWorker-foo.onactive: ', event);
  // Do nothing.
});

self.addEventListener('fetch', function (event) {
  console.log('ServiceWorker-foo.onfetch: ', event.request.url);
  // Do nothing.
});
