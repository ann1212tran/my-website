import { NextAuthConfig } from "next-auth";
import { signIn } from "next-auth/react";

export const authConfig = {
    pages: {
        signIn: '/login'
    },
    callbacks: {
        authorized ({ auth, request: { nextURL }}) {
            const isLoggedIn = !!auth?.user;
            const isOnBlogs = nextURL.pathname.startsWith('/blogs');
            if (isOnBlogs) {
                if(isLoggedIn) return true;
                return false; //Redirect authenticated user to login page

            } else if ( isLoggedIn) {
                return Response.redirect(new URL('/blogs', nextURL));
            }
            return true;
        }
    },
     providers:[], 
} 