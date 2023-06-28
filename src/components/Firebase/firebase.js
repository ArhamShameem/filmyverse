import { initializeApp } from "firebase/app";
import {getFirestore,collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDkhQvz43df1powdDcjL4fQ7gt9_ttcpUQ",
  authDomain: "filmyverse-80efe.firebaseapp.com",
  projectId: "filmyverse-80efe",
  storageBucket: "filmyverse-80efe.appspot.com",
  messagingSenderId: "604816286247",
  appId: "1:604816286247:web:6b5b5179e8cea03ba66402"
};

const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
export const moviesRef=collection(db,"movies");
export const reviewsRef=collection(db,"reviews");
export const usersRef=collection(db,"users");

export default app;