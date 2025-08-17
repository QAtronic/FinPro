'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileQuestion } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <FileQuestion className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Page not found</CardTitle>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-muted-foreground">
            <p>Error 404</p>
          </div>
          <div className="flex space-x-2">
            <Link href="/" className="flex-1">
              <Button className="w-full">
                Go home
              </Button>
            </Link>
            <Button variant="outline" onClick={() => window.history.back()} className="flex-1">
              Go back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
