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
import { createUserDoc } from "@/lib/users/users.js";

function AuthContextProvider({ children }) {
  //user state
  const [user, setUser] = useState(null);
  // loadings state
  const [isLoading, setIsLoading] = useState(false);
  // error state
  const [error, setError] = useState(null);
  // message state
  const [message, setMessage] = useState(null);

  //get user data
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Set user data
      } else {
        setUser(null); // No user is signed in
      }
      setIsLoading(false); // Stop loading once the state is determined
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  //sing in with google
  const handleSingInWithGoogle = async () => {
    setIsLoading(true);
    try {
      const loginUser = await signInWithPopup(auth, new GoogleAuthProvider());
      await createUserDoc(
        {
          id: loginUser.user.uid,
          name: loginUser.user.displayName,
          email: loginUser.user.email,
          photoURL: loginUser.user.photoURL,
        },
        loginUser.user.uid
      );
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
          message,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}

export default AuthContextProvider;
