import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBgMFZoeCLyyWMaORS4QbsD2afra4RpFPk",
  authDomain: "mern-stack-44131.firebaseapp.com",
  projectId: "mern-stack-44131",
  storageBucket: "mern-stack-44131.appspot.com",
  messagingSenderId: "220206282303",
  appId: "1:220206282303:web:54f88f179aa665c03b2a8a",
  measurementId: "G-7BLV8MX98K",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
export const database = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);
