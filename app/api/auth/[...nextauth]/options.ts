import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const options = {
  providers: [
    FacebookProvider({
      profile(profile) {
        console.log("Profile facebook: ", profile);

        let userRole = "facebook User";
        if (profile?.email === "moeissa410@gmail.com") {
          userRole = "admin";
        }
        //
        const userId: string = String(profile?.id);

        return {
          ...profile,
          role: userRole,
          id: userId,
        };
      },
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    GitHubProvider({
      profile(profile) {
        console.log("Profile GitHub: ", profile);

        let userRole = "GitHub User";
        if (profile?.email === "moeissa410@gmail.com") {
          userRole = "admin";
        }
        //
        const userId: string = String(profile?.id);

        return {
          ...profile,
          role: userRole,
          id: userId,
        };
      },
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_Secret!,
    }),
    GoogleProvider({
      profile(profile) {
        console.log("Profile Google: ", profile);

        let userRole = "Google User";
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_Secret!,
    }),
  ],

  callbacks: {
    async jwt({ token, user }: any) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }: any) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
  secret: process.env.NEXT_PUBLIC_SECRET,
};
