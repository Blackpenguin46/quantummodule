import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/layout/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quantum Learning Module',
  description: 'Learn quantum computing concepts interactively',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-16 bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  )
} 