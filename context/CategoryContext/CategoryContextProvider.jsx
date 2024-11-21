"use client";
import React, { useState } from "react";
import CategoryContext from "./CategoryContext.jsx";

function CategoryContextProvider({ children }) {
  //get category data
  const [category, setCategory] = useState([]);
  // loadings state
  const [isLoading, setIsLoading] = useState(false);
  // error state
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);
  console.log(category);
  //handle category
  const handleCategory = (e) => {
    e.preventDefault();
    setCategory((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };
  const handleCategoryCreate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  const handleCategoryImage = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <>
      <CategoryContext.Provider
        value={{
          category,
          isLoading,
          error,
          image,
          handleCategory,
          handleCategoryCreate,
          handleCategoryImage,
        }}
      >
        {children}
      </CategoryContext.Provider>
    </>
  );
}

export default CategoryContextProvider;
