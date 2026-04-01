importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCgdZ1NicU8mZzW-pe1-Tk9X36ivcx0OMo",
    authDomain: "nabd-aust.firebaseapp.com",
    databaseURL: "https://nabd-aust-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "nabd-aust",
    storageBucket: "nabd-aust.firebasestorage.app",
    messagingSenderId: "921777725948",
    appId: "1:921777725948:web:7b024d0aa101068bef9279"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('وصل إشعار في الخلفية: ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon || 'https://university-aust.github.io/smart/logo.png',
        data: payload.data
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
