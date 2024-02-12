import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import {fetchOauth} from "../../../../lib/fetch";

const handler = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID || '',
            clientSecret: process.env.GITHUB_SECRET || '',
        })
    ],
    pages: {
        signIn: "/auth/login"
    },
    callbacks: {
        async jwt({ token, account, profile, user, session,  } : any) {
            if (account) {
                const apiAccessToken = await fetchOauth(account.provider, account.access_token)
                if (apiAccessToken) {
                    console.log(apiAccessToken)
                    token.accessToken = apiAccessToken.token
                }
            }
            return token;
        },
        async session({ session, token, user }) {
            session.accessToken = token.accessToken
            return session
        }
    },
})

export { handler as GET, handler as POST }
