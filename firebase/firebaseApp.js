import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsh83DVZMVZwkM5xzi0E4oqz2gFgGHxq4",
  authDomain: "lyeana-blog-web.firebaseapp.com",
  projectId: "lyeana-blog-web",
  storageBucket: "lyeana-blog-web.firebasestorage.app",
  messagingSenderId: "430541506108",
  appId: "1:430541506108:web:7f38f6de10588814a72539",
  measurementId: "G-2D2KG5CHEQ",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
export const database = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
