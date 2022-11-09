self.__precacheManifest = [].concat(self.__precacheManifest || []);
// workbox.precaching.suppressWarnings();
// workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// Needed to trigger pwa install
self.addEventListener("fetch", function (event) {
  event.respondWith(fetch(event.request));
});

//Web Push Notifications//
// let click_open_url
// self.addEventListener('push', function (event) {
//     console.log(
//         "[service-worker.js] push ",
//         event);
//     let push_message = event.data.json()
//     // push notification can send event.data.json() as well
//     click_open_url = push_message.notification.data.url
//     const options = {
//         body: push_message.notification.body,
//         icon: push_message.notification.icon,
//         image: push_message.notification.image,
//         tag: 'alert'
//     };
//     event.waitUntil(self.registration.showNotification(push_message.notification.title, options));
// });

// self.addEventListener('notificationclick', function (event) {
//     console.log(
//         "[service-worker.js] notificationclick ",
//         event);
//     // Close notification.
//     event.notification.close();

//     var promise = new Promise(function (resolve) {
//         setTimeout(resolve, 1);
//     }).then(function () {
//         // return the promise returned by openWindow, just in case.
//         // Opening any origin only works in Chrome 43+.

//       //   return clients.openWindow('/?notificationdata=' + JSON.stringify(event.notification));
//         return clients.openWindow((event.notification.data.url +'?notificationdata=' + JSON.stringify(event.notification)));
//     });

//     // Now wait for the promise to keep the permission alive.
//     event.waitUntil(promise);
// });

// self.addEventListener('notificationclick', function(event) {
//     console.log(
//         "[service-worker.js] notificationclick ",
//         event );
//     const clickedNotification = event.notification;
//     clickedNotification.close();
//     if ( click_open_url ){
//         const promiseChain = clients.openWindow(click_open_url);
//         event.waitUntil(promiseChain);
//     }
// });

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

/*self.addEventListener('notificationclick', function(event) {
  // Close notification.
  event.notification.close();

  var promise = new Promise(function(resolve) {
    setTimeout(resolve, 1);
  }).then(function() {
    // return the promise returned by openWindow, just in case.
    // Opening any origin only works in Chrome 43+.

    return clients.openWindow('/?notification='+JSON.stringify(event.notification));
  });

  // Now wait for the promise to keep the permission alive.
  event.waitUntil(promise);
});*/
