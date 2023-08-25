import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: '',
            clientSecret: '',
            // clientId: process.env.GOOGLE_CLIENT_ID,
            // clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    async session({ session }) {
        // session.user.id = user.id;
        // return session;
    },
    async signIn({ profile }){

    }
})

export { handler as GET, handler as POST};