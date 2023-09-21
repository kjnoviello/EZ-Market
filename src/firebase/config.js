// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq4TTg9VvoTyUG6ZCE0xVFMGUSuBefga8",
  authDomain: "noviello-ecommerce-c47175.firebaseapp.com",
  projectId: "noviello-ecommerce-c47175",
  storageBucket: "noviello-ecommerce-c47175.appspot.com",
  messagingSenderId: "45205821173",
  appId: "1:45205821173:web:2ead163ee311bd798997bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app
