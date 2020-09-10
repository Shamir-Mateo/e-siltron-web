import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCavvYuQiVZFaUlF9mtMVdkvQEfBPA-ZFI",
    authDomain: "siltron-app.firebaseapp.com",
    databaseURL: "https://siltron-app.firebaseio.com",
    projectId: "siltron-app",
    storageBucket: "siltron-app.appspot.com",
    messagingSenderId: "529584566629",
    appId: "1:529584566629:web:ca7f151882cd30398e718c",
    measurementId: "G-87DDWT92BT"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);