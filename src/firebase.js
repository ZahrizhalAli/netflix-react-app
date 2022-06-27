// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhR5PrW33Trreaoh2MZXxHW66TAV9zZRE",
  authDomain: "netflix-clone-3a434.firebaseapp.com",
  projectId: "netflix-clone-3a434",
  storageBucket: "netflix-clone-3a434.appspot.com",
  messagingSenderId: "919027310710",
  appId: "1:919027310710:web:052454b60054437a78ff57",
  measurementId: "G-F1Q34508M3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);