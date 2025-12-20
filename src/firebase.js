// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔹 Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCfZy1vOMu7rplp-bVZbcQIU8JnzlSIWgY",
  authDomain: "pr-skillverse.firebaseapp.com",
  databaseURL: "https://pr-skillverse-default-rtdb.firebaseio.com",
  projectId: "pr-skillverse",
  storageBucket: "pr-skillverse.firebasestorage.app",
  messagingSenderId: "908984127628",
  appId: "1:908984127628:web:fd038bf965a5ecf67f6ba9",
  measurementId: "G-9NK8PXPY03"
};
// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔹 Export AUTH
export const auth = getAuth(app);

// 🔹 Export FIRESTORE (THIS FIXES YOUR ERROR)
export const db = getFirestore(app);
