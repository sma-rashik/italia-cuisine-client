// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4GalnDRiFIaYHKjvnx09qHsW_sNOTh4A",
    authDomain: "italia-cuisine.firebaseapp.com",
    projectId: "italia-cuisine",
    storageBucket: "italia-cuisine.appspot.com",
    messagingSenderId: "584428048741",
    appId: "1:584428048741:web:e1e61d3ba031654070d18c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app