// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrQoQb3LFLnCGCqCtS_AHFzfPvIAicBr8",
  authDomain: "reactfinals-e5b93.firebaseapp.com",
  projectId: "reactfinals-e5b93",
  storageBucket: "reactfinals-e5b93.appspot.com",
  messagingSenderId: "102941495310",
  appId: "1:102941495310:web:654ac93ab6e61bf981ac5f",
  measurementId: "G-0ZN6CBVNLY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);