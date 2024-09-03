import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/app/lib/prismadb";
import authConfig from "@/auth.config";
// import { getUserById } from "./app/data/user";

export const { handlers, auth, signIn, signOut } = NextAuth({
  // pages: {
    // signIn: "/",
    // error: "/error",
  // },
  events: {
    async linkAccount({ user }) {
      await prisma.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    // async signIn({ user }) {
    //   console.log(user);
    //   if (user.id) {
    //     const existingUser = await getUserById(user.id);

    //     if (!existingUser || !existingUser.emailVerified) {
    //       return false;
    //     }
    //   }

    //   return true;
    // },

    async session({ token, session }) {
      console.log({ sessionToken: token });
      // console.log("token.user", token);
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      return session;
    },
    async jwt({ token }) {
      // console.log("token in jwt:", token);
      token.customField = "test1";
      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});
