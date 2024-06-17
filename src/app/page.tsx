// app/page.tsx
import { auth } from "@/auth"; // Adjust the import path as necessary
import Main from "./components/Main";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  const user = session?.user || null;

  return (
    <div>
      {user ? (
        <Main user={user} />
      ) : (
        <Link href={"/api/auth/signin"}>Sign In</Link>
      )}
    </div>
  );
}
