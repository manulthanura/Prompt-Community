import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    async session({ session }) {
        // session.user.id = user.id;
        // return session;
    },
    async signIn({ profile }){
        try{
            // server side validation
        } catch (error) {
            // console.log(error);
            // return false;
        }

    }
})

export { handler as GET, handler as POST};