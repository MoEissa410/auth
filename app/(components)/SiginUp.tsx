"use client";

/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import cat from "../../public/cat.jpg";
import Image from "next/image";
import { HiOutlineMailOpen } from "react-icons/hi";
import { VscLock } from "react-icons/vsc";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className=" bg-gradient-to-r from-orange-400 from-10% via-red-600 to-fuchsia-600 to-90% flex justify-center items-center min-h-screen ">
      <div className=" sm:px-4 px-[2px] max-width-3xl bg-bbb flex  gap-5 items-center  rounded-2xl">
        <div
          className=" relative items-center justify-center md:flex hidden w-1/2"
          style={{ width: 350, height: 350 }}
        >
          <Image
            width={400}
            height={400}
            src={cat}
            alt="photo"
            className=" absolute max-w-full"
          />
        </div>
        <div className=" max-w-80 grid gap-5">
          <h1 className=" text-5xl text-white">Login</h1>
          <p>Access to 300+ hours of courses, tutorials and livestreams</p>
          <form className=" space-y-6">
            <div className=" relative flex items-center">
              <div className="w-full ">
                <input
                  type="text"
                  placeholder="name"
                  className="w-full   rounded-md p-2 focus:ring-1 focus:ring-green-500  focus:outline-none  border-2 border-cyan-300 focus:border-cyan-600  "
                />
              </div>
              <div className=" absolute  right-3">
                <HiOutlineMailOpen className="text-[#c026d3]" />
              </div>
            </div>
            <div className=" relative flex items-center">
              <div className=" w-full ">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="w-full rounded-md p-2 focus:ring-1 focus:ring-green-500  focus:outline-none   border-2 border-cyan-300 focus:border-cyan-600  "
                />
              </div>
              <div className=" absolute right-3">
                <VscLock
                  className=" text-[#c026d3] cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            </div>
            <button
              type="submit"
              className=" bg-[#c026d3] hover:bg-[#881c96] hover:scale-105 duration-300 w-full p-2 rounded-2xl"
            >
              apply
            </button>
          </form>
          <div>
            <p>
              Don't have an account?
              <a>Sign up</a>
            </p>
            <p>
              Forgot password?
              <a>Reset password</a>
            </p>
            <p>
              Don't have a password yet? <a>Set password</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
