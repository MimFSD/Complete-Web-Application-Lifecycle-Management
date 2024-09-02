// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdPg5icIf5Gl8DRMduX-K9csUeIH15dFc",
  authDomain: "our-dragon-news.firebaseapp.com",
  projectId: "our-dragon-news",
  storageBucket: "our-dragon-news.appspot.com",
  messagingSenderId: "337517973951",
  appId: "1:337517973951:web:9e313176c313e6fe1b510a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app ;