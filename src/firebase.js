// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSOxhUFdHbzpzIFfOm5sb-t12MumZ9Pv0",
  authDomain: "dev-hub-565d0.firebaseapp.com",
  projectId: "dev-hub-565d0",
  storageBucket: "dev-hub-565d0.appspot.com",
  messagingSenderId: "624883473891",
  appId: "1:624883473891:web:c155dfa62a63a9301094d6",
  measurementId: "G-2QM8TT178Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);