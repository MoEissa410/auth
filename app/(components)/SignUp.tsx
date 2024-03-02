"use client";
import { useState } from "react";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CiLock } from "react-icons/ci";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [translateX, setTranslateX] = useState(false);
  return (
    <>
      <div className="  w-full flex flex-col gap-6">
        <h1 className=" text-center text-3xl font-bold">Sign Up</h1>
        <div className=" flex justify-evenly items-center">
          <div className="border rounded-lg w-11 h-11 flex items-center justify-center hover:bg-purble hover:text-white duration-300 cursor-pointer">
            <AiOutlineGooglePlus />
          </div>
          <div className="border rounded-lg w-11 h-11 flex items-center justify-center hover:bg-purble hover:text-white duration-300 cursor-pointer">
            <FaFacebookF />
          </div>
          <div className="border rounded-lg w-11 h-11 flex items-center justify-center hover:bg-purble hover:text-white duration-300 cursor-pointer">
            <FaGithub />
          </div>
          <div className="border rounded-lg w-11 h-11 flex items-center justify-center hover:bg-purble hover:text-white duration-300 cursor-pointer">
            <RiLinkedinFill />
          </div>
        </div>
      </div>
      <div className="w-full">
        <form className=" flex flex-col justify-center items-center gap-5 text-gray-500 font-mdeium mx-auto w-full ">
          <p>or use your email password</p>
          <div className="relative md:max-w-[340px] w-[85%] flex justify-end items-center">
            <input
              type="text"
              placeholder="email"
              className="w-full border-2 rounded-lg py-1 px-1 bg-gray-100 text-black focus:ring-2 focus:ring-purble focus:outline-none duration-150"
            />
            <HiOutlineMailOpen className="  text-purble  absolute right-3 " />
          </div>
          <div className="relative md:max-w-[340px] w-[85%] flex justify-end items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className="w-full  border-2 rounded-lg py-1 px-1 bg-gray-100 text-black focus:ring-2 focus:ring-purble focus:outline-none duration-150"
            />
            <CiLock
              className=" text-purble cursor-pointer absolute right-3 hover:text-xl duration-300 "
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <div className="relative md:max-w-[340px] w-[85%] flex justify-end items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="repeat password"
              className="w-full  border-2 rounded-lg py-1 px-1 bg-gray-100 text-black focus:ring-2 focus:ring-purble focus:outline-none duration-150"
            />
            <CiLock
              className=" text-purble cursor-pointer absolute right-3 hover:text-xl duration-300 "
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <button
            type="submit"
            className="bg-purble  border rounded-lg px-10 py-1 text-base font-[50px] text-white  hover:bg-[#5e33c2] duration-200  mb-3"
          >
            SIGN UP
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
