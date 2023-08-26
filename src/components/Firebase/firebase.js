// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDWXJNiKW4fryK7cm18GpP6bk0ixLNu_VA",
    authDomain: "car-rental-e5ece.firebaseapp.com",
    projectId: "car-rental-e5ece",
    storageBucket: "car-rental-e5ece.appspot.com",
    messagingSenderId: "925699487120",
    appId: "1:925699487120:web:53bd13561fc6ad7a88ef15"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
