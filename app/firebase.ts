// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo7jIHnxlN5musKhN93ZyTHGgNgyuZLNw",
  authDomain: "blogs-3e4b9.firebaseapp.com",
  projectId: "blogs-3e4b9",
  storageBucket: "blogs-3e4b9.firebasestorage.app",
  messagingSenderId: "506184797269",
  appId: "1:506184797269:web:a23ac0857aabbd01c918dc",
  measurementId: "G-MNG3MK5GYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);