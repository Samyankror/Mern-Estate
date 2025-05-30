// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-8d470.firebaseapp.com",
  projectId: "mern-estate-8d470",
  storageBucket: "mern-estate-8d470.firebasestorage.app",
  messagingSenderId: "633495504927",
  appId: "1:633495504927:web:b63fdd409b41b37e3d2d2a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);