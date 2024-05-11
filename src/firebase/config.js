// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth,GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmzWf2SUajNqvg0tIw1YbgvYAVfZ8sny8",
  authDomain: "chat-app-ee4d7.firebaseapp.com",
  projectId: "chat-app-ee4d7",
  storageBucket: "chat-app-ee4d7.appspot.com",
  messagingSenderId: "678360287662",
  appId: "1:678360287662:web:fcf40757d91697d56e603f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider()


export const db = getFirestore(app)