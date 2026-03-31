importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyCgdZ1NicU8mZzW-pe1-Tk9X36ivcx00Mo",
    projectId: "nabd-aust",
    messagingSenderId: "92177725948",
    appId: "1:92177725948:web:7b024d0aa101068bef9279"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('وصل إشعار جديد:', payload);
});
