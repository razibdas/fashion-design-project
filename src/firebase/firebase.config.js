// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnoMIu5oWTh15dImWICz4edSuizUhyGm8",
  authDomain: "fashion-design-project.firebaseapp.com",
  projectId: "fashion-design-project",
  storageBucket: "fashion-design-project.appspot.com",
  messagingSenderId: "321236547262",
  appId: "1:321236547262:web:cc3068eb157a24494490ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;