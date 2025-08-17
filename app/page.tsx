'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function HomePage() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (!session) {
    redirect('/auth/signin')
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to CorpFin Pro</h1>
      <p className="text-muted-foreground mb-4">
        Welcome back, {session?.user?.name} • {session?.user?.orgName}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Total Revenue</h2>
          <p className="text-2xl font-bold">$2,500,000</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Gross Margin</h2>
          <p className="text-2xl font-bold">68%</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">EBITDA</h2>
          <p className="text-2xl font-bold">$700,000</p>
        </div>
      </div>
    </div>
  )
}
