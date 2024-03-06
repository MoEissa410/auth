import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";

import React from "react";

const Home = async () => {
  const session = await getServerSession(options);

  // if (!session) {
  //   redirect("/api/auth/signin?callbackUrl=/Member");
  // }
  if (!session) {
    return "no data";
  }
  return (
    <div>
      <h1>Member Server Session</h1>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
    </div>
  );
};

export default Home;
