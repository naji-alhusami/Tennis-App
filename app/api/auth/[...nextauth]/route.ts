// import authOptions from "@/app/lib/authOptions";
// import NextAuth from "next-auth";

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

import { handlers } from "@/auth"
export const { GET, POST } = handlers