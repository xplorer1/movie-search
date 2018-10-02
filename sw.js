//importScripts('sw-toolbox.js');

self.addEventListener('install', function(event) {
    console.log('Service Worker registered and installed!');
    console.log(event.request);
});
console.log('Loaded service worker!');

self.addEventListener('sync', (event) => {
    const data = toCome.stillComing(event.tag);
    event.waitUntil(pirateManager.postMessage(data));
});

self.addEventListener('push', (event) => {
    const data = event.data.json();

    console.log('Got push! ' + data);

    let options = {
        body: data.body,
        icon: 'images/request.png'
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    ); 
});