import type { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/globals.css'
import '../styles/App.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-background">
      <Component {...pageProps} />
    </div>
  )
} 