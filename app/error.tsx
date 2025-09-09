'use client'

import { useEffect } from 'react'
import { AlertTriangle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-red-100 rounded-full">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong!</h1>
          <p className="text-gray-600 mb-6">
            An error occurred while loading this page.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
            <p className="font-medium">Error: {error.message}</p>
            {error.digest && (
              <p className="mt-2">Error ID: {error.digest}</p>
            )}
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={reset} 
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try again
            </button>
            <button 
              onClick={() => window.location.href = '/'} 
              className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Go home
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
