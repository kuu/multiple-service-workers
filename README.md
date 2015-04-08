# multiple-service-workers
To see if it's possible to register multiple service workers for different paths.

## Conclusion
It's totally ok to register multiple SWs with different scopes.
(verified using Chrome Canary - 43.0.2357.2)

```
    // Registering multiple SWs with different scopes.
    navigator.serviceWorker.register('sw-foo.js', {scope: '/foo'});
    navigator.serviceWorker.register('sw-bar.js', {scope: '/bar'});
```
