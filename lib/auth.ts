import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Demo users for development
        if (credentials.email === 'manager@trustline.com' && credentials.password === 'Manager123!') {
          return {
            id: '1',
            name: 'Manager User',
            email: 'manager@trustline.com',
            role: 'MANAGER',
            orgId: 'trustline-insurance',
            orgName: 'TrustLine Insurance'
          }
        }

        if (credentials.email === 'agent@trustline.com' && credentials.password === 'Agent123!') {
          return {
            id: '2',
            name: 'Agent User',
            email: 'agent@trustline.com',
            role: 'AGENT',
            orgId: 'trustline-insurance',
            orgName: 'TrustLine Insurance'
          }
        }

        if (credentials.email === 'underwriter@trustline.com' && credentials.password === 'Underwriter123!') {
          return {
            id: '3',
            name: 'Underwriter User',
            email: 'underwriter@trustline.com',
            role: 'UNDERWRITER',
            orgId: 'trustline-insurance',
            orgName: 'TrustLine Insurance'
          }
        }

        return null
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.orgId = user.orgId
        token.orgName = user.orgName
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!
        session.user.role = token.role as string
        session.user.orgId = token.orgId as string
        session.user.orgName = token.orgName as string
      }
      return session
    }
  },
  pages: {
    signIn: '/auth/signin'
  }
}

