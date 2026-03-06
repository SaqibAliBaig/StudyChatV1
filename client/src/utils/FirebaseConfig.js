import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoQIFRbWjj_vlLHxkDXK_OLOML805cwCs",
  authDomain: "studychat-8051f.firebaseapp.com",
  projectId: "studychat-8051f",
  storageBucket: "studychat-8051f.firebasestorage.app",
  messagingSenderId: "725833427952",
  appId: "1:725833427952:web:49798fe340c4cc66ba8b35",
  measurementId: "G-LF4J2H55P6",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
