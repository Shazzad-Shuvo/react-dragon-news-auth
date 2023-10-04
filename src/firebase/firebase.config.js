// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIBEF-Ho9IjA_7XW0CwYFrc9lcJ6NvQ6E",
  authDomain: "react-dragon-news-auth-794bb.firebaseapp.com",
  projectId: "react-dragon-news-auth-794bb",
  storageBucket: "react-dragon-news-auth-794bb.appspot.com",
  messagingSenderId: "199888177233",
  appId: "1:199888177233:web:9edb7b6e56d1472acb9070"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

export default app;

