import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM0mjt4DzYGgaMMVjB4enwVLu-UkmgHrM",
  authDomain: "fir-916d8.firebaseapp.com",
  projectId: "fir-916d8",
  storageBucket: "fir-916d8.appspot.com",
  messagingSenderId: "489096079721",
  appId: "1:489096079721:web:6e2394e293e0837b6275f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
