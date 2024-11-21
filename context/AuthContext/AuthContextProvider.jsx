"use client";
import { useEffect, useState } from "react";
import AuthContext from "./AuthContext.jsx";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "@/firebase/firebaseApp.js";

function AuthContextProvider({ children }) {
  //user state
  const [user, setUser] = useState(null);
  // loadings state
  const [isLoading, setIsLoading] = useState(false);
  // error state
  const [error, setError] = useState(null);

  //get user data
  useEffect(() => {
    setIsLoading(true);
    const loginData = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      } else {
        setUser(null);
        setIsLoading(false);
      }
    });
    return () => loginData();
  }, []);

  //sing in with google
  const handleSingInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };
  //sing out with google
  const handleLogOutWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };
  return (
    <>
      <AuthContext.Provider
        value={{
          user,
          isLoading,
          error,
          handleSingInWithGoogle,
          handleLogOutWithGoogle,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}

export default AuthContextProvider;
