// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCJsjBjlKbi30tIz6rfqIxVDjeI4RBXpvE",
  authDomain: "coder-react-52d68.firebaseapp.com",
  projectId: "coder-react-52d68",
  storageBucket: "coder-react-52d68.firebasestorage.app",
  messagingSenderId: "866748070904",
  appId: "1:866748070904:web:aaf293508002ae41d3b40d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);