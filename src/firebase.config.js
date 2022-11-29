import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFwgdUiDTOzqOngdsngU26OYZoiyC9AX8",
  authDomain: "kk-shop-a1dd9.firebaseapp.com",
  projectId: "kk-shop-a1dd9",
  storageBucket: "kk-shop-a1dd9.appspot.com",
  messagingSenderId: "527051296825",
  appId: "1:527051296825:web:2456ea62fb07c2f7bfbde8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()