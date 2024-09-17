import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ginnan - The Cat Meme Revolution',
  description: 'Join the feline sensation taking the crypto world by storm!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/SysFalsoW00-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SysFalsoW00-Italic.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <style jsx global>{`
          @font-face {
            font-family: 'SysFalso';
            src: url('/fonts/SysFalsoW00-Regular.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'SysFalso';
            src: url('/fonts/SysFalsoW00-Italic.ttf') format('truetype');
            font-weight: normal;
            font-style: italic;
            font-display: swap;
          }
          body {
            font-family: 'SysFalso', sans-serif;
          }
        `}</style>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}