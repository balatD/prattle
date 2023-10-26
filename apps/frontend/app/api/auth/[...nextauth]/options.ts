import type { NextAuthOptions, Session, User } from 'next-auth';
import type UserResponse from '../../../../types/auth/user-response';
import CredentialsProvider from 'next-auth/providers/credentials';

const fetchUserData = async (credentials: { email: string, password: string }): Promise<UserResponse> => {
    const response = await fetch(`${process.env.STRAPI_API_ENDPOINT}/auth/local`, {
        method: 'POST',
        headers: {
            'Authorization': process.env.NEXTAUTH_STRAPI_API_KEY,
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            identifier: credentials.email,
            password: credentials.password
        }),

        cache: 'no-cache'
    }).then(response => response.json());

    if (!response.ok) {
        return {
            jwt: response.jwt as string,
            id: response.user.id as string,
            username: response.user.username as string,
            email: response.user.email as string,
            provider: response.user.provider as string,
            confirmed: response.user.confirmed as boolean,
            blocked: response.user.blocked as boolean,
            createdAt: response.user.createdAt as string,
            updatedAt: response.user.updatedAt as string
        }
    } else {
        return response;
    }
}

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'E-Mail',
                    type: 'email',
                    placeholder: ''
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: ''
                }
            },

            async authorize(credentials) {
                return fetchUserData(credentials);
            }
        })
    ],
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async session({ session, token }) {
            session.id = token.id;
            session.jwt = token.jwt;

            return session;
        },

        async jwt({ token, user }) {
            const isSignIn = user ? true : false;
            if (isSignIn) {
                token.id = user.id;
                token.jwt = user.jwt;
            }

            return Promise.resolve(token);
        },
    }
}