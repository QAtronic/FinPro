'use client'

import Link from 'next/link'
import { FileQuestion } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <FileQuestion className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Page not found</h1>
          <p className="text-gray-600 mb-6">
            The page you're looking for doesn't exist.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg text-center">
            <p className="font-medium">Error 404</p>
          </div>
          <div className="flex space-x-2">
            <Link href="/" className="flex-1">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Go home
              </button>
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
