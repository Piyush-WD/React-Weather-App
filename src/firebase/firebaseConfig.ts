import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEucO5WhXEFh5exWep_p1bSpChU1OwiOs",
  authDomain: "react-basic-weather-app.firebaseapp.com",
  projectId: "react-basic-weather-app",
  storageBucket: "react-basic-weather-app.appspot.com",
  messagingSenderId: "423401869472",
  appId: "1:423401869472:web:d7139b52258475e81eb9c5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);