"use client";
// import { getServerSession } from "next-auth";
// import { options } from "./api/auth/[...nextauth]/options";

import React, { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Home = () => {
  const router = useRouter();

  const { data: session, status: sessionStatus } = useSession();
  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/");
    }
  }, [sessionStatus, router]);
  return (
    <div>
      <h1>Member Server Session</h1>
      <p>{session?.user?.email}</p>
    </div>
  );
};

export default Home;
