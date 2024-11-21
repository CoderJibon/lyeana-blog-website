"use client";
import { useContext } from "react";
import AuthContext from "./AuthContext/AuthContext.jsx";
import CategoryContext from "./CategoryContext/CategoryContext.jsx";

// Custom Hook
export const useAuth = () => useContext(AuthContext);

export const useCategory = () => useContext(CategoryContext);
