// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANquyin1WR2A8HguPn9pdpKJLYfoJL3SQ",
  authDomain: "weddingfirebase-d342d.firebaseapp.com",
  projectId: "weddingfirebase-d342d",
  storageBucket: "weddingfirebase-d342d.firebasestorage.app",
  messagingSenderId: "554440660317",
  appId: "1:554440660317:web:818deace2143984c7044b4",
  measurementId: "G-23GHYK2HBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firestoreを取得
export const db = getFirestore(app);