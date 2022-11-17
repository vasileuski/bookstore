import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8qWQKT6t3-ewp6k-Oi9F_vHubFhYGxqo",
  authDomain: "bookstore-b6647.firebaseapp.com",
  projectId: "bookstore-b6647",
  storageBucket: "bookstore-b6647.appspot.com",
  messagingSenderId: "36279797887",
  appId: "1:36279797887:web:6cf5d17bf56d284012574a",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
