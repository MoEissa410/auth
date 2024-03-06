import MixTwo from "@/app/(components)/MixTwo";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
const LogIn = async () => {
  const session = await getServerSession(options);
  if (session) {
    return redirect("/");
  }
  return (
    <>
      <MixTwo x={false} />
    </>
  );
};

export default LogIn;
