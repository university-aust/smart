// 1. استيراد المكتبات اللازمة للعمل في الخلفية
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// 2. إعدادات مشروع نبض AUST (نفس إعداداتك الحالية)
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

// 3. المحرك المسؤول عن "إجبار" الهاتف على إظهار الإشعار في البرداية
messaging.onBackgroundMessage(function(payload) {
    console.log('[sw.js] وصل إشعار في الخلفية: ', payload);

    // استخراج العنوان والنص من البيانات القادمة
    const notificationTitle = payload.notification ? payload.notification.title : "تنبيه جديد من نبض AUST";
    const notificationOptions = {
        body: payload.notification ? payload.notification.body : "لديك رسالة جديدة في النظام",
        icon: payload.notification ? payload.notification.icon : 'https://cdn-icons-png.flaticon.com/512/3119/3119338.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/3119/3119338.png', // أيقونة صغيرة تظهر في شريط الحالة
        vibrate: [200, 100, 200], // تفعيل الهزاز لجذب الانتباه
        data: {
            url: "https://university-aust.github.io/smart/dashboard.html"
        }
    };

    // الأمر الفعلي لإظهار الإشعار في برداية أندرويد
    return self.registration.showNotification(notificationTitle, notificationOptions);
});

// 4. جعل الإشعار قابلاً للنقر لفتح الموقع
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow(event.notification.data.url)
    );
});
