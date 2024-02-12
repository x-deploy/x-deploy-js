import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import {fetchOauth} from "../../../../lib/fetch";
import {toast} from "sonner";
import {cookies} from "next/headers";

const handler = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID || '',
            clientSecret: process.env.GITHUB_SECRET || '',
        })
    ],
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async jwt({ token, account, profile, user, session,  } : any) {
            if (account) {
                const apiAccessToken = await fetchOauth(account.provider, account.access_token)
                if (apiAccessToken) {
                    if (!apiAccessToken.error) {
                        cookies().set("token", apiAccessToken.token);
                    } else {
                        cookies().set("error", apiAccessToken.error);
                    }
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

//TODO to type better

export { handler as GET, handler as POST }
