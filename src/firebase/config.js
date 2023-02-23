// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbRy_6Jb-hAIgvTvfwW6uqaEcI0_abMAo",
  authDomain: "mini-blog-ff4a5.firebaseapp.com",
  projectId: "mini-blog-ff4a5",
  storageBucket: "mini-blog-ff4a5.appspot.com",
  messagingSenderId: "961759229681",
  appId: "1:961759229681:web:7940dd5507ff5193a75b50",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
