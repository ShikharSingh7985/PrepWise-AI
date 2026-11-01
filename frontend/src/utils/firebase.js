
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
 authDomain: "interviewmitra-9b80e.firebaseapp.com",
  projectId: "interviewmitra-9b80e",
  storageBucket: "interviewmitra-9b80e.firebasestorage.app",
  messagingSenderId: "578010665132",
  appId: "1:578010665132:web:3bcc0a8f3562e773d38f09"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}