import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { supabase } from '../lib/supabase'
import { X, Mail, Github, Google } from 'lucide-react'

interface SignInModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SignInModal({ isOpen, onClose }: SignInModalProps) {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [authMethod, setAuthMethod] = useState<'nextauth' | 'supabase' | null>(null)
  const [error, setError] = useState('')

  const handleNextAuthSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const result = await signIn('email', {
        email,
        callbackUrl: '/',
        redirect: false,
      })

      if (result?.error) {
        setError('Failed to send sign-in email. Please try again.')
      } else {
        onClose()
        // Show success message or redirect to verification page
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSupabaseSignIn = async (provider: 'google' | 'github') => {
    setIsLoading(true)
    setError('')

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) {
        setError(error.message)
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        {!authMethod ? (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <p className="text-gray-600">Choose your preferred sign-in method</p>
            </div>

            {/* NextAuth Email Option */}
            <button
              onClick={() => setAuthMethod('nextauth')}
              className="w-full flex items-center justify-center space-x-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Mail size={20} className="text-gray-600" />
              <span className="text-gray-700 font-medium">Sign in with Email</span>
            </button>

            {/* Supabase Social Options */}
            <div className="space-y-3">
              <button
                onClick={() => handleSupabaseSignIn('google')}
                disabled={isLoading}
                className="w-full flex items-center justify-center space-x-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                <Google size={20} className="text-red-600" />
                <span className="text-gray-700 font-medium">Continue with Google</span>
              </button>

              <button
                onClick={() => handleSupabaseSignIn('github')}
                disabled={isLoading}
                className="w-full flex items-center justify-center space-x-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                <Github size={20} className="text-gray-800" />
                <span className="text-gray-700 font-medium">Continue with GitHub</span>
              </button>
            </div>
          </div>
        ) : authMethod === 'nextauth' ? (
          <form onSubmit={handleNextAuthSignIn} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex space-x-3">
              <button
                type="button"
                onClick={() => setAuthMethod(null)}
                className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isLoading || !email}
                className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Sign-in Link'}
              </button>
            </div>
          </form>
        ) : null}
      </div>
    </div>
  )
}