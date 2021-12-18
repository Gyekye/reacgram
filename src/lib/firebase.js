import { initializeApp } from "firebase/app";
import { FieldValue } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyDUBOhImCs4XOJE65Ef4XkOX6ipioxOR0Y",
    authDomain: "reacgram.firebaseapp.com",
    projectId: "reacgram",
    storageBucket: "reacgram.appspot.com",
    messagingSenderId: "600386473434",
    appId: "1:600386473434:web:77b880ef0d2f82843984e3",
    measurementId: "G-FS61B7LG91"
  };

const firebase = initializeApp(firebaseConfig);
const reacgramAnalytics = getAnalytics(firebaseConfig);

export {firebase, reacgramAnalytics, FieldValue};