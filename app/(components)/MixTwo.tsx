"use client";
import { useState } from "react";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CiLock } from "react-icons/ci";
const MixTwo = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className=" flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 to-skyblue">
      <div className=" max-w-full md:w-[768px] w-[480px] mx-4 md:min-h-[450px] h-full flex md:flex-row flex-col rounded-2xl  bg-white  ">
        <div className=" md:w-1/2 w-full  flex flex-col justify-center items-center gap-8 ">
          <div className="  w-full flex flex-col gap-8">
            <h1 className=" text-center text-3xl font-bold">Sign In</h1>
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
              <p className=" cursor-pointer">forget password</p>
              <button
                type="submit"
                className="bg-purble  border rounded-lg px-10 py-1 text-base font-[50px] text-white  hover:bg-[#5e33c2] duration-200  mb-3"
              >
                SIGN IN
              </button>
            </form>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex flex-col md:gap-8 gap-4 items-center justify-center text-center bg-purble  rounded-tl-[30%] rounded-tr-[30%]  rounded-2xl md:rounded-tl-[40%] md:rounded-2xl md:rounded-bl-[40%] text-white">
          <h1 className=" md:text-3xl text-xl font-extrabold">
            Hello, Friend!
          </h1>
          <p className=" text-base font-medium text-gray-200">
            Register with your personal details to use all of site features
          </p>
          <button
            type="submit"
            className="bg-purble border rounded-lg px-10 py-1 text-base font-[50px] hover:bg-[#5e33c2] duration-200  mb-3 "
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default MixTwo;
