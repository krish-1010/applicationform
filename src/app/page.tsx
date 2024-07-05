// // app/page.tsx
// // import { auth } from "@/auth"; // Adjust the import path as necessary

// import { auth } from "@/auth";
// import Main from "./components/Main";
// import Link from "next/link";

// export default async function Home() {
//   const session = await auth();
//   const user = session?.user || null;

//   console.log(user);

//   // const { data: session, status } = useSession();
//   // const user = session?.user;

//   return (
//     <div>
//       <div className="">
//         {user ? (
//           <Main user={user} />
//         ) : (
//           <div className="bg-black h-screen text-white flex justify-center items-center flex-col">
//             <h2 className="text-blue-500 font-bold xl:text-2xl">
//               Welcome to Monolith&apos;s Application Form
//             </h2>
//             <h3>Do you want to create a New form or Load from Previous</h3>
//             <Link
//               className="rounded-md mt-5 mb-2 bg-lime-500 py-1 px-4 inline-block text-center text-black"
//               href="/login"
//             >
//               Load from Previous
//             </Link>
//             or
//             <Link
//               className="rounded-md mt-4 bg-lime-500 py-1 px-4 inline-block text-center text-black"
//               href="/register"
//             >
//               New Form
//             </Link>
//             <br />
//             {/* <h2>Login if you&apos;ve just registered</h2> */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // app/page.tsx
// "use client";
// import { useState, useEffect } from "react";
// import { auth } from "@/auth";
// import Main from "./components/Main";
// import AuthModal from "./components/AuthModal";
// import { User } from "next-auth";

// export default function Home() {
//   const [user, setUser] = useState<User | null>(null);
//   const [showModal, setShowModal] = useState(true);

//   useEffect(() => {
//     async function fetchSession() {
//       const session = await auth();
//       if (session?.user) {
//         setUser(session.user);
//         setShowModal(false);
//       }
//     }
//     fetchSession();
//   }, []);

//   const handleAuthSuccess = (user: User) => {
//     setUser(user);
//     setShowModal(false);
//   };

//   return (
//     <div className="relative">
//       <Main user={user} />
//       {showModal && <AuthModal onClose={handleAuthSuccess} />}
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Main from "./components/Main";
import AuthModal from "./components/AuthModal";
import { User } from "next-auth"; // Correct import

export default function Home() {
  const { data: session, status } = useSession();
  const user = session?.user as User | null;

  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    if (status === "authenticated") {
      setShowModal(false);
    } else if (status === "unauthenticated") {
      setShowModal(true);
    }
  }, [status]);

  return (
    <div className="relative">
      <Main user={user} />
      {showModal && <AuthModal />}
    </div>
  );
}
