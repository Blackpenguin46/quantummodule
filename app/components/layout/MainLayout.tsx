'use client'

import { motion } from 'framer-motion'
import Navigation from './Navigation'

interface MainLayoutProps {
  children: React.ReactNode
  showSidebar?: boolean
}

export default function MainLayout({ children, showSidebar = false }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navigation />
      
      <div className="flex">
        {showSidebar && (
          <motion.aside
            initial={{ x: -240, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="fixed left-0 top-16 w-60 h-[calc(100vh-4rem)] bg-[#1a1a1a] border-r border-white/10"
          >
            {/* Sidebar content */}
            <div className="p-4">
              <div className="space-y-2">
                {['Overview', 'Lessons', 'Exercises', 'Resources'].map((item) => (
                  <motion.button
                    key={item}
                    whileHover={{ x: 5 }}
                    className="w-full text-left px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.aside>
        )}

        <main className={`flex-1 ${showSidebar ? 'ml-60' : ''} pt-16`}>
          {children}
        </main>
      </div>
    </div>
  )
} 