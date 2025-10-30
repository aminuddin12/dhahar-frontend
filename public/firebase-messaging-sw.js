importScripts(
    'https://www.gstatic.com/firebasejs/9.13.0/firebase-app-compat.js'
)
importScripts(
    'https://www.gstatic.com/firebasejs/9.13.0/firebase-messaging-compat.js'
)
firebase?.initializeApp({
    apiKey: 'AIzaSyB4yq-rdrZPjf6-2YhL0tsP53gkP0rD6Gw',
    authDomain: 'dhahar-id.firebaseapp.com',
    projectId: 'dhahar-id',
    storageBucket: 'dhahar-id.firebasestorage.app',
    messagingSenderId: '1063100312311',
    appId: '1:1063100312311:web:225739f04f3cac4506c1f2',
    measurementId: 'G-1M4JERDWCG',
})

// Retrieve firebase messaging
const messaging = firebase?.messaging()

messaging.onBackgroundMessage(function (payload) {
    const notificationTitle = payload.notification.title
    const notificationOptions = {
        body: payload.notification.body,
    }

    self.registration.showNotification(notificationTitle, notificationOptions)
})
