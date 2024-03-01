import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <>
      <Link href={"/Register"}>Register</Link>
      <Link href={"/LogIn"}>LogIn</Link>
    </>
  );
};

export default Nav;
