import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Navigation from '../components/Navigation'
import '../styles/index.css'
import '../styles/globals.css'
import '../styles/App.css'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
} 