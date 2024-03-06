"use client";
import { useState } from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CiLock } from "react-icons/ci";
import SignOptions from "./SignOptions";
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  //
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  //
  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <SignOptions />
      <div className="w-full">
        <form
          className=" flex flex-col justify-center items-center gap-4 text-gray-500 font-medium mx-auto w-full "
          onSubmit={handleForm}
        >
          <p>or use your email password</p>
          <div className="relative md:max-w-[340px] w-[85%] flex justify-end items-center">
            <input
              value={formData.email}
              name="email"
              type="text"
              placeholder="email"
              className="w-full border-2 rounded-lg py-1 px-1 bg-gray-100 text-black focus:ring-2 focus:ring-purble focus:outline-none duration-150"
              onChange={handleChange}
            />
            <HiOutlineMailOpen className="  text-purble  absolute right-3 " />
          </div>
          <div className="relative md:max-w-[340px] w-[85%] flex justify-end items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className="w-full  border-2 rounded-lg py-1 px-1 bg-gray-100 text-black focus:ring-2 focus:ring-purble focus:outline-none duration-150"
              onChange={handleChange}
              name="password"
              value={formData.password}
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
    </>
  );
};

export default SignIn;
