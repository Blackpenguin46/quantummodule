'use client'

import { motion } from 'framer-motion'
import Navigation from './Navigation'
import { useState } from 'react'
import { FiBook, FiHome, FiAward, FiLayers, FiUser } from 'react-icons/fi'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(true)

  const menuItems = [
    { icon: <FiHome size={20} />, label: 'Dashboard', path: '/' },
    { icon: <FiBook size={20} />, label: 'Modules', path: '/modules' },
    { icon: <FiLayers size={20} />, label: 'Labs', path: '/labs' },
    { icon: <FiAward size={20} />, label: 'Certifications', path: '/certs' },
    { icon: <FiUser size={20} />, label: 'Profile', path: '/profile' },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navigation />
      
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -240 }}
        animate={{ x: isSidebarOpen ? 0 : -240 }}
        className="fixed left-0 top-16 w-60 h-[calc(100vh-4rem)] bg-[#1a1a1a] border-r border-white/10 z-30"
      >
        <div className="p-4 space-y-4">
          {/* Progress Overview */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10">
            <h3 className="text-sm font-medium text-gray-300 mb-2">Course Progress</h3>
            <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '35%' }}
                className="absolute h-full bg-gradient-to-r from-blue-500 to-purple-500"
              />
            </div>
            <p className="text-xs text-gray-400 mt-2">35% Complete</p>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <motion.button
                key={item.label}
                whileHover={{ x: 5 }}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                {item.icon}
                <span>{item.label}</span>
              </motion.button>
            ))}
          </nav>

          {/* Current Module */}
          <div className="p-4 rounded-xl bg-white/5">
            <h3 className="text-sm font-medium text-gray-300 mb-2">Current Module</h3>
            <p className="text-xs text-gray-400">Quantum Basics: Introduction</p>
            <div className="mt-2 text-xs text-blue-400 cursor-pointer hover:text-blue-300">
              Continue Learning →
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className={`transition-all duration-300 ${
        isSidebarOpen ? 'ml-60' : 'ml-0'
      }`}>
        <div className="min-h-screen pt-16 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
          {children}
        </div>
      </main>

      {/* Toggle Sidebar Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="fixed bottom-4 left-4 z-40 p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
      >
        <svg
          className={`w-6 h-6 transition-transform ${isSidebarOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
    </div>
  )
} 