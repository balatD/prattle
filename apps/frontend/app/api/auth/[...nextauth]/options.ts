import type { NextAuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.NEXTAUTH_GITHUB_CLIENT_ID as string,
            clientSecret: process.env.NEXTAUTH_GITHUB_SECRET as string
        }),

        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "***"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "***"
                }
            },

            async authorize(credentials) {
                const user = { id: "1", name: "Dragan", password: "nextauth" }

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else {
                    null
                }
            }
        })
    ],
}