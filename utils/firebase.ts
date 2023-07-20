// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC60rr6o60BCkRBPFu8KwxGI9WmQp-ZsDA",
  authDomain: "kapsywebsite2.firebaseapp.com",
  projectId: "kapsywebsite2",
  storageBucket: "kapsywebsite2.appspot.com",
  messagingSenderId: "678990272359",
  appId: "1:678990272359:web:361b9d9cf9aa69d377c1c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();