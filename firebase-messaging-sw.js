// 1. استيراد المكتبات اللازمة للعمل في الخلفية
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCgdZ1NicU8mZzW-pe1-Tk9X36ivcx0OMo",
    authDomain: "nabd-aust.firebaseapp.com",
    projectId: "nabd-aust",
    messagingSenderId: "921777725948",
    appId: "1:921777725948:web:7b024d0aa101068bef9279"
});

const messaging = firebase.messaging();

// معالجة الإشعارات عندما تكون الصفحة مغلقة أو في الخلفية
messaging.onBackgroundMessage((payload) => {
    console.log('وصل إشعار في الخلفية: ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/3119/3119338.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
