// "use client";
// import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className=" flex justify-end gap-10 px-2">
      <Link href={"/Register"}>Register</Link>
      <Link href={"/LogIn"}>LogIn</Link>
      {/* <button onClick={() => signOut()}>LogOut</button> */}
    </div>
  );
};

export default Nav;
