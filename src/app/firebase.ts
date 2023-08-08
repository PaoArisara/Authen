import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiivAMbZQDkvzLpcH1mnhyCkECmYM2qUg",
  authDomain: "tradar-aff60.firebaseapp.com",
  projectId: "tradar-aff60",
  storageBucket: "tradar-aff60.appspot.com",
  messagingSenderId: "39353538409",
  appId: "1:39353538409:web:503b78bb381808ee8b0ff8",
  measurementId: "G-Y4QFG7FJYY"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth }