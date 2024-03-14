// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-imWKergYL9X-TPU2QHvf_ue3H95D64s",
  authDomain: "create-my-firebase-app.firebaseapp.com",
  projectId: "create-my-firebase-app",
  storageBucket: "create-my-firebase-app.appspot.com",
  messagingSenderId: "992824561511",
  appId: "1:992824561511:web:ab0541acdd56681e7ea9c2",
  measurementId: "G-3MBEYTW8B7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Auth= getAuth(app);
export const db=getFirestore(app);