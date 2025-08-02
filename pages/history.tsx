import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'

interface Analysis {
  id: string
  createdAt: string
  inputHash: string
  shareSlug: string
  resultJson: string
}

export default function History() {
  const { user, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()
  const [analyses, setAnalyses] = useState<Analysis[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (isLoading) return

    if (!isAuthenticated) {
      router.push('/')
      return
    }

    fetchAnalyses()
  }, [isAuthenticated, isLoading, router])

  const fetchAnalyses = async () => {
    try {
      const response = await fetch('/api/analyses')
      if (response.ok) {
        const data = await response.json()
        setAnalyses(data.analyses)
      }
    } catch (error) {
      console.error('Error fetching analyses:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleView = (analysisId: string) => {
    router.push(`/analyses/${analysisId}`)
  }

  const handleDownloadPDF = async (analysisId: string) => {
    try {
      const response = await fetch(`/api/export/${analysisId}`)
      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `analysis-${analysisId}.pdf`
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
      }
    } catch (error) {
      console.error('Error downloading PDF:', error)
    }
  }

  const handleCopyShareLink = async (shareSlug: string) => {
    const shareUrl = `${window.location.origin}/share/${shareSlug}`
    try {
      await navigator.clipboard.writeText(shareUrl)
      // You could add a toast notification here
    } catch (error) {
      console.error('Error copying to clipboard:', error)
    }
  }

  if (isLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // Will redirect to home
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Analysis History</h1>
          <p className="mt-2 text-gray-600">
            View and manage your past home cover analyses
          </p>
        </div>

        {analyses.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No analyses found. Start by analyzing a document!</p>
          </div>
        ) : (
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {analyses.map((analysis) => (
                <li key={analysis.id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                            <span className="text-indigo-600 font-medium">
                              {new Date(analysis.createdAt).getDate()}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            Analysis #{analysis.id.slice(-8)}
                          </p>
                          <p className="text-sm text-gray-500">
                            {new Date(analysis.createdAt).toLocaleDateString()} at{' '}
                            {new Date(analysis.createdAt).toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleView(analysis.id)}
                          className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleDownloadPDF(analysis.id)}
                          className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200"
                        >
                          Download PDF
                        </button>
                        <button
                          onClick={() => handleCopyShareLink(analysis.shareSlug)}
                          className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
                        >
                          Copy Share Link
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}