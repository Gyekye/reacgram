
const { FieldValue } = window.firebase.firestore;

const firebaseConfig = {
  apiKey: "AIzaSyDUBOhImCs4XOJE65Ef4XkOX6ipioxOR0Y",
  authDomain: "reacgram.firebaseapp.com",
  projectId: "reacgram",
  storageBucket: "reacgram.appspot.com",
  messagingSenderId: "600386473434",
  appId: "1:600386473434:web:77b880ef0d2f82843984e3",
  measurementId: "G-FS61B7LG91"
};

// Initialize Firebase
const app = window.firebase.initializeApp(firebaseConfig);

// exporting modules
export {app, FieldValue};