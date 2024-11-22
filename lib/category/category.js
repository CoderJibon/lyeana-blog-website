import { create, uploadFile } from "@/firebase/models.js";
import { serverTimestamp } from "firebase/firestore";

// upload category icon
export const uploadCategoryIcon = async (name, file) => {
  const uploadURL = await uploadFile(`category/${name}`, file);
  return uploadURL;
};

// create a category
export const createCategoryDoc = async (data) => {
  const db = await create("category", {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: null,
  });

  return { message: "category created successfully" };
};
