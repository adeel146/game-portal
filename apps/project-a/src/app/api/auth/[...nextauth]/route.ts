import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { users,routerLinks,NEXT_AUTH_PROVIDER_ID } from '@game-portal/constants';
import { AppUser } from '@game-portal/types';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: NEXT_AUTH_PROVIDER_ID,
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = users.find(
          (u) => u.username === credentials?.username && u.password === credentials?.password
        );
        if (user) {
          return {
            id: String(user.id),
            name: user.name,
            email: user.username,
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: routerLinks.login,
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as AppUser;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
