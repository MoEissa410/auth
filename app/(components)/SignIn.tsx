"use client";
import React, { useEffect, useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import Image from "next/image";
import cat from "../../public/cat.jpg";
import logo from "../../public/asit.png";
import { LuPartyPopper } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-[#adadcf] text-gray-900 flex justify-center">
      <div className="m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center ">
        <div className="lg:w-1/2 xl:w-5/12 p-4 sm:p-8">
          <div>
            <Image
              width={200}
              height={200}
              src={logo}
              alt="logo"
              className="w-20 "
            />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className=" text-lg xl:text-2xl flex items-center gap-2">
              <LuPartyPopper className="w-10 h-10  " />
              <div>You 're back !!</div>
            </h1>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-2 rounded-2xl font-medium bg-gray-100 border border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                />
                <div className="flex justify-between item-center">
                  <input
                    className="w-full px-8 py-2 rounded-2xl  font-medium bg-gray-100 border border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                  />
                </div>

                <div className="w-full  flex items-center justify-between mt-6">
                  <button>oops, forget password?</button>
                  <button className=" tracking-wide  bg-[#2a1b4dfa] text-gray-100 w-24  py-2 rounded-2xl hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    Sign in
                  </button>
                </div>

                <div className="mt-10 text-xs text-gray-600 text-center flex items-center gap-4">
                  <div>got no account?. Registerusing these</div>
                  <div>
                    <button>
                      <HiOutlineMail className="w-4 h-4 " />
                    </button>
                  </div>
                  <div>
                    <button>
                      <FaGoogle className="w-4 h-4 " />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 text-center hidden lg:flex">
          <div className=" m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat skew-x-6 ">
            <Image
              width={500}
              height={500}
              src={cat}
              alt="logo"
              className="rounded-xl clip-polygon  w-46  mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
