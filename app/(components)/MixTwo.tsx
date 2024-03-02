"use client";
import { useState } from "react";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CiLock } from "react-icons/ci";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
const MixTwo = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [translateX, setTranslateX] = useState(false);

  return (
    <div className=" flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 to-skyblue">
      <div className=" max-w-full md:w-[768px] w-[480px] mx-4 md:min-h-[450px] h-full flex md:flex-row flex-col rounded-2xl  bg-white  ">
        <div
          className={`md:w-1/2 w-full  flex flex-col justify-center items-center gap-8 duration-700 ${
            translateX
              ? " md:translate-x-[100%] md:translate-y-0 translate-y-[135px] "
              : ""
          }`}
        >
          {translateX ? <SignUp /> : <SignIn />}
        </div>

        {/*  */}
        <div
          className={` md:w-1/2 w-full flex tra flex-col md:gap-8 gap-4 items-center justify-center rounded-2xl text-center bg-purble  text-white duration-700 ${
            translateX
              ? " md:translate-x-custom translate-x-0 md:translate-y-0 translate-y-[-410px] rounded-bl-[30%] rounded-br-[30%]  md:rounded-tr-[40%] md:rounded-2xl md:rounded-br-[40%]"
              : " rounded-tl-[30%] rounded-tr-[30%]  md:rounded-tl-[40%] md:rounded-2xl md:rounded-bl-[40%]"
          }`}
        >
          <h1 className=" md:text-3xl text-xl font-extrabold">
            {translateX ? "Welcome Back!" : "Hello, Friend!"}
          </h1>
          <p className=" text-base font-medium text-gray-200">
            {translateX
              ? "Enter your personal details to use all of site features"
              : "Register with your personal details to use all of site features"}
          </p>
          <button
            onClick={() => setTranslateX(!translateX)}
            type="submit"
            className="bg-purble border rounded-lg px-10 py-1 text-base font-[50px] hover:bg-[#5e33c2] duration-200  mb-3 "
          >
            {translateX ? "SIGN IN " : "SIGN UP"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MixTwo;
