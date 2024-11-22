"use client";

import { useCategory } from "@/context/CustomHook.jsx";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function createCategory() {
  const {
    category,
    isLoading,
    error,
    image,
    handleCategory,
    handleCategoryCreate,
    handleCategoryImage,
    message,
  } = useCategory();

  useEffect(() => {
    if (message) {
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [message, error]);

  return (
    <main className="w-full p-6 flex flex-col gap-3">
      <div className="flex gap-5 items-center">
        {/* <div className="flex">
          <h3 className="text-white bg-orange-500 px-4 py-2 rounded-full text-xs font-bold">
            Update
          </h3>
        </div> */}
        <div className="flex">
          <h3 className="text-white bg-green-500 px-4 py-2 rounded-full text-xs font-bold">
            Create
          </h3>
        </div>
        <h1 className="font-bold">Category | Form</h1>
      </div>
      <section className="flex">
        <form
          onSubmit={handleCategoryCreate}
          className="flex flex-col gap-2 bg-blue-50 rounded-xl p-7"
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-500">
              Category Name <span className="text-red-500">*</span>{" "}
            </label>
            <input
              className="px-4 py-2 rounded-full border bg-gray-50"
              placeholder="Enter Category Name"
              type="text"
              name="name"
              onChange={handleCategory}
              value={category.name}
              required
            />
          </div>
          {image && (
            <div>
              <img className="h-40" src={URL.createObjectURL(image)} alt="" />
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-500">Image </label>
            <input
              className="px-4 py-2 rounded-full border bg-gray-50"
              placeholder="Enter Category Slug"
              type="file"
              accept="image/*"
              onChange={handleCategoryImage}
            />
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="bg-blue-500 rounded-full px-4 py-2 text-white"
          >
            {isLoading ? "Loading..." : "Create"}
          </button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      </section>
    </main>
  );
}
