import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Demo credentials for development
        if (credentials.email === 'admin@corpfin.pro' && credentials.password === 'Admin123!') {
          return {
            id: 'demo-user-1',
            email: 'admin@corpfin.pro',
            name: 'Admin User',
            role: 'CFO',
            orgId: 'demo-org-1',
            orgName: 'CorpFin Pro Demo'
          }
        }

        // Additional demo users
        if (credentials.email === 'analyst@corpfin.pro' && credentials.password === 'Analyst123!') {
          return {
            id: 'demo-user-2',
            email: 'analyst@corpfin.pro',
            name: 'Financial Analyst',
            role: 'ANALYST',
            orgId: 'demo-org-1',
            orgName: 'CorpFin Pro Demo'
          }
        }

        if (credentials.email === 'controller@corpfin.pro' && credentials.password === 'Controller123!') {
          return {
            id: 'demo-user-3',
            email: 'controller@corpfin.pro',
            name: 'Controller',
            role: 'CONTROLLER',
            orgId: 'demo-org-1',
            orgName: 'CorpFin Pro Demo'
          }
        }

        return null
      }
    })
  ],
  session: {
    strategy: "jwt"
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
    signIn: "/auth/signin"
  },
  secret: process.env.NEXTAUTH_SECRET
}
