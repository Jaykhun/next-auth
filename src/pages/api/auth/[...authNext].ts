import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'auth',
            credentials: {} as any, 
            async authorize(credentials, req): Promise<any> {
                const { email, password } = credentials as any
                console.log(email)

                if (email && password) {
                    return { email, password }
                }

                else return null
            }
        })
    ],

    pages: {
        signIn: '/login'
    }
}

export default NextAuth(authOptions)