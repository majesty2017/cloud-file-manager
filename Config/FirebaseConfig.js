// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "cloud-file-manager-393911.firebaseapp.com",
    projectId: "cloud-file-manager-393911",
    storageBucket: "cloud-file-manager-393911.appspot.com",
    messagingSenderId: "516376030114",
    appId: "1:516376030114:web:45dd7be6d400e2faa2e0fb",
    measurementId: "G-66XFBWBSKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


