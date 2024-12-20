"use client";
import Image from "next/image.js";
import React, { useEffect } from "react";
import google from "@/public/google.png";
import { useAuth } from "@/context/CustomHook.jsx";
import Link from "next/link.js";
import { toast } from "react-toastify";

function LoginButton() {
  const {
    user,
    isLoading,
    error,
    handleSingInWithGoogle,
    handleLogOutWithGoogle,
    message,
  } = useAuth();
  if (isLoading) return <h1>Loading...</h1>;
  console.log(message);
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

  if (user) {
    return (
      <>
        <div className="flex gap-2">
          <button className=" flex gap-3 items-center bg-cyan-100 px-4 py-2 text-black rounded-xl font-semibold font-lg ">
            <Image
              width={100}
              height={100}
              src={user.photoURL}
              className="w-10 h-10 rounded-full object-cover "
              alt="Google Icons"
            />
            <Link href={"/admin"} className="text-left">
              <p className="font-semibold">{user.displayName}</p>
              <p className="text-xs">{user.email}</p>
            </Link>
          </button>
          <div>
            <button
              onClick={() => handleLogOutWithGoogle()}
              className=" flex gap-3 items-center   bg-black px-4 py-2 text-white rounded-xl h-full font-semibold font-lg "
            >
              <Image src={google} className="w-7 h-7" alt="Google Icons" />
              Logout
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <button
        onClick={() => handleSingInWithGoogle()}
        className=" flex gap-3 items-center   bg-black px-4 py-2 text-white rounded-xl font-semibold h-full font-lg "
      >
        <Image src={google} className="w-7 h-7" alt="Google Icons" />
        Login with Google
      </button>
    </>
  );
}

export default LoginButton;
