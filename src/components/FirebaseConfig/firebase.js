// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3dplixwOMDjrltqmEKuh8qRfxY0bcWxM",
  authDomain: "interpoolbuenosaires.firebaseapp.com",
  projectId: "interpoolbuenosaires",
  storageBucket: "interpoolbuenosaires.appspot.com",
  messagingSenderId: "576658297049",
  appId: "1:576658297049:web:c4aa93e63dbd5c77b66ec8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)