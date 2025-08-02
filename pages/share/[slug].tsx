import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

// Force new deployment - Vercel should pick up latest changes
interface Analysis {
  id: string
  createdAt: string
  resultJson: string
  shareSlug: string
}

interface SharePageProps {
  slug: string
}

export default function SharePage({ slug }: SharePageProps) {
  const router = useRouter()
  const [analysis, setAnalysis] = useState<Analysis | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const response = await fetch(`/api/share/${slug}`)
        if (response.ok) {
          const data = await response.json()
          setAnalysis(data.analysis)
        } else {
          setError('Analysis not found')
        }
      } catch (err) {
        setError('Failed to load analysis')
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchAnalysis()
    }
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          <p className="mt-4 text-gray-600">Loading analysis...</p>
        </div>
      </div>
    )
  }

  if (error || !analysis) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Analysis Not Found</h1>
          <p className="text-gray-600">{error || 'This analysis could not be found.'}</p>
        </div>
      </div>
    )
  }

  const result = JSON.parse(analysis.resultJson)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Shared Analysis</h1>
            <p className="text-sm text-gray-500 mt-1">
              Generated on {new Date(analysis.createdAt).toLocaleDateString()}
            </p>
          </div>
          
          <div className="px-6 py-4">
            {/* Display the analysis results here */}
            <div className="prose max-w-none">
              {result.summary && (
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Summary</h2>
                  <p className="text-gray-700">{result.summary}</p>
                </div>
              )}
              
              {result.recommendations && (
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Recommendations</h2>
                  <p className="text-gray-700">{result.recommendations}</p>
                </div>
              )}
              
              {result.keyFindings && (
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Key Findings</h2>
                  <ul className="list-disc pl-5 text-gray-700">
                    {Array.isArray(result.keyFindings) 
                      ? result.keyFindings.map((finding: string, index: number) => (
                          <li key={index}>{finding}</li>
                        ))
                      : <li>{result.keyFindings}</li>
                    }
                  </ul>
                </div>
              )}
              
              {result.coverage && (
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Coverage Analysis</h2>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                      {JSON.stringify(result.coverage, null, 2)}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Return empty paths to avoid build-time generation
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string }
  
  return {
    props: {
      slug,
    },
    revalidate: 60, // Revalidate every 60 seconds
  }
}