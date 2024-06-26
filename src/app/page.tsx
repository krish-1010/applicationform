// app/page.tsx
import { auth } from "@/auth"; // Adjust the import path as necessary
import Main from "./components/Main";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  const user = session?.user || null;

  return (
    <div>
      <div className="">
        {user ? (
          <Main user={user} />
        ) : (
          <div className=" bg-black h-screen text-white flex justify-center items-center flex-col">
            <h2 className="text-blue-500 font-bold xl:text-2xl">
              Welcome to Monolith&apos;s Application Form
            </h2>
            <h3>Sign In to continue</h3>
            <Link
              className="rounded-md mt-5 bg-lime-500 py-1 px-4 inline-block text-center text-black"
              href={"/api/auth/signin"}
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
