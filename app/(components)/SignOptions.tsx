"use client";
import { getServerSession } from "next-auth";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { signIn } from "next-auth/react";
import React, { useEffect, useState } from "react";

const SignOptions = () => {
  return (
    <div className="  w-full flex flex-col gap-6">
      <h1 className=" text-center text-3xl font-bold pt-1">Sign In</h1>
      <div className=" flex justify-evenly items-center">
        <button
          className="border rounded-lg w-11 h-11 flex items-center justify-center hover:bg-purble hover:text-white duration-300 cursor-pointer"
          type="submit"
          onClick={() => {
            signIn("google", { callbackUrl: "http://localhost:3000/" });
          }}
        >
          <AiOutlineGooglePlus />
        </button>
        {/*  facebook*/}
        <button
          className="border rounded-lg w-11 h-11 flex items-center justify-center hover:bg-purble hover:text-white duration-300 cursor-pointer"
          type="submit"
          onClick={() => {
            signIn("facebook", { callbackUrl: "http://localhost:3000/" });
          }}
        >
          <FaFacebookF />
        </button>
        <button
          className="border rounded-lg w-11 h-11 flex items-center justify-center hover:bg-purble hover:text-white duration-300 cursor-pointer"
          type="submit"
          onClick={() => {
            signIn("github", { callbackUrl: "http://localhost:3000/" });
          }}
        >
          <FaGithub />
        </button>
        <div className="border rounded-lg w-11 h-11 flex items-center justify-center hover:bg-purble hover:text-white duration-300 cursor-pointer">
          <RiLinkedinFill />
        </div>
      </div>
    </div>
  );
};

export default SignOptions;
