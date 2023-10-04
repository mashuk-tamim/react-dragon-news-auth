// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCworJ5OrwRCsrylzV8IuEitb-N-0fEk8M",
  authDomain: "react-dragon-news-auth-mashuk.firebaseapp.com",
  projectId: "react-dragon-news-auth-mashuk",
  storageBucket: "react-dragon-news-auth-mashuk.appspot.com",
  messagingSenderId: "528052760767",
  appId: "1:528052760767:web:8087e6d1945f5d404d960a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;