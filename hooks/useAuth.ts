import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export function useAuth() {
  const { data: session, status } = useSession()
  const [supabaseUser, setSupabaseUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        setSupabaseUser(user)
      } catch (error) {
        console.error('Error getting Supabase user:', error)
      } finally {
        setIsLoading(false)
      }
    }

    getUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSupabaseUser(session?.user ?? null)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  // Return the authenticated user from either NextAuth or Supabase
  const user = session?.user || supabaseUser
  const isAuthenticated = !!user
  const isLoadingAuth = status === 'loading' || isLoading

  return {
    user,
    isAuthenticated,
    isLoading: isLoadingAuth,
    session,
    supabaseUser,
  }
}