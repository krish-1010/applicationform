import Image from "next/image";
import myimg from "../../../public/assests/header.png";
import Link from "next/link";
import { User } from "next-auth";
import { signOut } from "@/auth";
import { signOutAction } from "../actions";

type NavbarProps = {
  user: User | null;
};

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  return (
    <>
      <Image src={myimg} alt="our logo" height={90} width={150} />
      <h1 className="text-2xl mb-12">
        <b>Application Form</b>
      </h1>
      <div>
        {user ? (
          <>
            {user.name}{" "}
            <div>
              <SignOutButton />
            </div>
          </>
        ) : (
          <SignInButton />
        )}
      </div>
    </>
  );
};

const SignInButton = () => {
  return (
    <>
      <Link href={"/api/auth/signin"}>Sign In</Link>
    </>
  );
};

const SignOutButton = () => {
  return (
    <form action={signOutAction}>
      <button type="submit"> Sign out</button>
    </form>
  );
};

export default Navbar;
