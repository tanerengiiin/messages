// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "https://auth.tanerengiiin.github.io/messages/auth/handler",
  projectId: "message-64c8d",
  storageBucket: "message-64c8d.appspot.com",
  messagingSenderId: "915101468513",
  appId: "1:915101468513:web:d2411b6afbf2e2921b2720",
  measurementId: "G-EM6LNTZ7VC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;