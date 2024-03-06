import MixTwo from "@/app/(components)/MixTwo";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
const Register = async () => {
  const session = await getServerSession(options);
  if (session) redirect("/");
  return (
    <>
      <MixTwo x={true} />
    </>
  );
};

export default Register;
