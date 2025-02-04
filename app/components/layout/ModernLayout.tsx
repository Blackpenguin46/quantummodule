'use client'

import { motion } from 'framer-motion'
import Navigation from './Navigation'
import { theme } from '../../styles/theme'

interface ModernLayoutProps {
  children: React.ReactNode
  showSidebar?: boolean
}

export default function ModernLayout({ children, showSidebar = false }: ModernLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="flex">
        {showSidebar && (
          <motion.aside
            initial={{ x: -240 }}
            animate={{ x: 0 }}
            className="fixed left-0 top-16 w-60 h-[calc(100vh-4rem)] bg-white shadow-md z-10"
          >
            <nav className="p-4">
              {/* Sidebar content */}
            </nav>
          </motion.aside>
        )}

        <main className={`flex-1 ${showSidebar ? 'ml-60' : ''}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8"
          >
            {children}
          </motion.div>
        </main>
      </div>

      {/* Background gradient */}
      <div 
        className="fixed inset-0 -z-10 opacity-50"
        style={{
          background: `
            radial-gradient(circle at 0% 0%, ${theme.colors.accent.purple}20 0%, transparent 50%),
            radial-gradient(circle at 100% 0%, ${theme.colors.accent.teal}20 0%, transparent 50%),
            radial-gradient(circle at 50% 100%, ${theme.colors.accent.orange}20 0%, transparent 50%)
          `
        }}
      />
    </div>
  )
} 