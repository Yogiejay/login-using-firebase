// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS5C6yxrrijAxPrKyMUDk8TzyHiptYVao",
  authDomain: "login-auth-usingfirebase.firebaseapp.com",
  projectId: "login-auth-usingfirebase",
  storageBucket: "login-auth-usingfirebase.appspot.com",
  messagingSenderId: "923760501010",
  appId: "1:923760501010:web:09edf6ff6627e4dd6d13cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
