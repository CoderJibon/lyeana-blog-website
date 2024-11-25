"use client";
import React, { useEffect, useState } from "react";
import CategoryContext from "./CategoryContext.jsx";
import {
  createCategoryDoc,
  getCategoryDocs,
  uploadCategoryIcon,
} from "@/lib/category/category.js";
import generateSlug from "@/lib/generateSlug/generateSlug.js";

function CategoryContextProvider({ children }) {
  //get category data
  const [category, setCategory] = useState([]);
  // loadings state
  const [isLoading, setIsLoading] = useState(false);
  // error state
  const [error, setError] = useState(null);
  // message state
  const [message, setMessage] = useState(null);
  // category icons
  const [image, setImage] = useState(null);
  // get all categories
  const [allCat, setAllCat] = useState([]);
  //handle category
  const handleCategory = (e) => {
    e.preventDefault();
    setCategory((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleCategoryCreate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      if (!category?.name) {
        setError("Category name is required!");
      } else {
        setError(null);
      }

      if (image) {
        const icon = await uploadCategoryIcon(image.name, image);
        const cat = await createCategoryDoc({
          name: category.name,
          slug: category?.name ? generateSlug(category?.name) : "",
          icon: icon,
        });
        setMessage("category created");
      } else {
        const cat = await createCategoryDoc({
          name: category.name,
          slug: category?.name ? generateSlug(category?.name) : "",
          icon: null,
        });
        setMessage("category created");
      }
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
    category.name = "";
    setImage(null);
  };

  const handleCategoryImage = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    getCategoryDocs(setAllCat);
  }, []);

  console.log(allCat);

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
          message,
        }}
      >
        {children}
      </CategoryContext.Provider>
    </>
  );
}

export default CategoryContextProvider;
