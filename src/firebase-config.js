import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"

import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCuJcmjGqrRS86ysF6DYLFUg_cGDiYBdNc",
  authDomain: "room-chat-application.firebaseapp.com",
  projectId: "room-chat-application",
  storageBucket: "room-chat-application.appspot.com",
  messagingSenderId: "612246741145",
  appId: "1:612246741145:web:d9593043e12d9fb0dfd808"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
