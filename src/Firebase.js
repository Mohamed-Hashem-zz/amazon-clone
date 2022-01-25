// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmybTQ97LqGnK3uKTdzNEkEPPORwcppN0",
  authDomain: "ecommerce-e9fc2.firebaseapp.com",
  projectId: "ecommerce-e9fc2",
  storageBucket: "ecommerce-e9fc2.appspot.com",
  messagingSenderId: "536070291474",
  appId: "1:536070291474:web:218d57905ebb56e63198cb",
  measurementId: "G-QL0SSB5N9S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Auth
export const auth = getAuth();

// export { db, auth };
export const SignUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const SignIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const SignOut = () => {
  return signOut(auth);
};
