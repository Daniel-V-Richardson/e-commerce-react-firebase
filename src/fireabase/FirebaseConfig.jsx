// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDoJvalILWn6esetahpL9BGRT__B5azWvI",
//   authDomain: "myfirstapp-38751.firebaseapp.com",
//   projectId: "myfirstapp-38751",
//   storageBucket: "myfirstapp-38751.appspot.com",
//   messagingSenderId: "273202707457",
//   appId: "1:273202707457:web:5724f212508b5b82f31400"
// };
const firebaseConfig = {
  apiKey: "AIzaSyAR8Y5UAu1NGfaGHNYJ_GgcORjNG_YcTzg",
  authDomain: "bharatstore-f562e.firebaseapp.com",
  projectId: "bharatstore-f562e",
  storageBucket: "bharatstore-f562e.appspot.com",
  messagingSenderId: "910877265153",
  appId: "1:910877265153:web:d45c1c14912ffef1e85f00",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
