"use client";
// import { getServerSession } from "next-auth";
// import { options } from "./api/auth/[...nextauth]/options";

import React from "react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/ClientMember");
    },
  });
  if (!session) {
    return "no data";
  }
  return (
    <div>
      <h1>Member Server Session</h1>
      <p>{session?.user?.email}</p>
    </div>
  );
};

export default Home;
