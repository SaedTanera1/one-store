// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkUHJjlXotWp98mhxTZUWhC8D1PchUTvM",
  authDomain: "myprofile-75911.firebaseapp.com",
  projectId: "myprofile-75911",
  storageBucket: "myprofile-75911.firebasestorage.app",
  messagingSenderId: "618198561564",
  appId: "1:618198561564:web:b75a99bd736a0112f1c0d9",
  measurementId: "G-ZSWVLT5VM5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
