import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA3zTWU2OHricxX7Tm03IqdXLdyVTm0aPc",
  authDomain: "touch-time-tracking-app.firebaseapp.com",
  databaseURL: "https://touch-time-tracking-app-default-rtdb.firebaseio.com",
  projectId: "touch-time-tracking-app",
  storageBucket: "touch-time-tracking-app.appspot.com",
  messagingSenderId: "894137472381",
  appId: "1:894137472381:web:e394ef3efff187693b2814",
  measurementId: "G-YE3HYVLW5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
