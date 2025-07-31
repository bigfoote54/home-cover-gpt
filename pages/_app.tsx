import type { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/globals.css'
import '../styles/App.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F4F8] to-white">
      <Component {...pageProps} />
    </div>
  )
} 