// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdnUNfm_M_-Lt4Me5xovu7UFe66vy2wyk",
    authDomain: "react-realtor-clone-8238e.firebaseapp.com",
    projectId: "react-realtor-clone-8238e",
    storageBucket: "react-realtor-clone-8238e.appspot.com",
    messagingSenderId: "133719121037",
    appId: "1:133719121037:web:97b58aa29a046bcdc396c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()

export const auth = getAuth(app)