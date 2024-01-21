// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAR8Y5UAu1NGfaGHNYJ_GgcORjNG_YcTzg",
  authDomain: "bharatstore-f562e.firebaseapp.com",
  projectId: "bharatstore-f562e",
  storageBucket: "bharatstore-f562e.appspot.com",
  messagingSenderId: "910877265153",
  appId: "1:910877265153:web:d45c1c14912ffef1e85f00",
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
