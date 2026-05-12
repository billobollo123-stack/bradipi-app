importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAzJBnonlJDUmXA_NJiGQwHmIALQeKQn9M",
  authDomain: "famiglia-bradipi-34604.firebaseapp.com",
  projectId: "famiglia-bradipi-34604",
  messagingSenderId: "445818268171",
  appId: "1:445818268171:web:6055107542a8b4f86f350e"
});

const messaging = firebase.messaging();

// Gestisce notifiche quando app è in background
messaging.onBackgroundMessage(function(payload) {
  const title = payload.notification.title;
  const body = payload.notification.body;
  self.registration.showNotification(title, {
    body: body,
    icon: '/bradipi-app/icon-192.png',
    badge: '/bradipi-app/icon-192.png',
    vibrate: [200, 100, 200]
  });
});
