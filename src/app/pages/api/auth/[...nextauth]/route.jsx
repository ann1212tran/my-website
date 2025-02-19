import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "auth.config";
import { z } from "zod";

export default NextAuth({
    secret: process.env.NEXTAUTH_SECRET, 
    providers: [
        CredentialsProvider({
            id: "credentials",
            type: "credentials",
            name: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type:"text",
                },
                password: {
                    label: "Password",
                    type: "password",
                }
            },

            async authorize(credentials) {
                //databaselookup
                const response = await fetch (
                    "http://localhost:3001/login", {
                        method: "POST",
                        credentials: "include",
                        body: JSON.stringify({
                            username: credentials.email,
                            password: credentials.password,
                        }),
                        headers: 
                        {"Content-Type": "application/json"}
                    }
                );
                const data = await response.json();
                if (response.status == 200) {
                    return {
                        token: data.acces,
                        name: credentials.email,
                        email: credentials.email,
                    };
                }
                return null;
            }
        })
    ],
    logger: {
        error(code, metadata) {
            console.error(code, metadata);
        },
        warn(code) {
            console.warn(code);
        },
        debuf(code, metadata) {
            console.debug(code, metadata)
        },
    },
    callbacks: {
        signIn: async ({ account, profile }) => {
            if (account.provider == 'credentials') 
                return true;
        },
        jwt: async ({ token, user, account }) => {
            if (user && account.provider == 'credentials') {
                token.accessToken = user.token;
                token.provider = account.provider;
            }
            return token;
        },

    session: async ({ token, session }) => {
        if(token) {
            session.accessToken = token.accessToken;
            session.provider = token.provider;
        }
        return session;
    }
    },
})
