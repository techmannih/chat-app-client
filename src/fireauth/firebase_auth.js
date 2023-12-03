// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "chat-app-dec.firebaseapp.com",
  projectId: "chat-app-dec",
  storageBucket: "chat-app-dec.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGEID,
  appId: import.meta.env.VITE_FIREBASE_APPID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleSignIn = new GoogleAuthProvider();