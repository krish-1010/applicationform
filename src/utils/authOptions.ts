// import { PrismaAdapter } from "@auth/prisma-adapter";
// import CredentialsProvider from "next-auth/providers/credentials";
// import prisma from "./../app/lib/prisma";
// import { verifyPassword } from "@/utils/password";
// // import type { NextAuthOptions } from "next-auth/index";
// // import type { User } from "@prisma/client";
// import type { Session, User } from "next-auth";

// import type { JWT } from "next-auth/jwt";

// export const authOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         username: { label: "Username", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (
//           !credentials ||
//           typeof credentials.username !== "string" ||
//           typeof credentials.password !== "string"
//         ) {
//           throw new Error("Invalid credentials");
//         }

//         const user = await prisma.user.findUnique({
//           where: { username: credentials.username },
//         });

//         if (
//           user &&
//           user.password &&
//           (await verifyPassword(credentials.password, user.password))
//         ) {
//           return user;
//         } else {
//           return null;
//         }
//       },
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     async jwt({ token, user }: { token: JWT; user?: User }) {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//     async session({ session, token }: { session: Session; token: JWT }) {
//       if (token?.id && session.user) {
//         session.user.id = token.id;
//       }
//       return session;
//     },
//   },
// };
