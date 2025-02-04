'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

interface MenuItem {
  name: string
  path: string
  description?: string
  subItems?: MenuItem[]
}

const menuItems: MenuItem[] = [
  {
    name: 'Learn',
    path: '/learn',
    subItems: [
      {
        name: 'Quantum Basics',
        path: '/quantum-basics',
        description: 'Start your quantum journey here'
      },
      {
        name: 'Quantum Risks',
        path: '/quantum-risks',
        description: 'Understanding security implications'
      },
      {
        name: 'Quantum Safety',
        path: '/quantum-safe-practices',
        description: 'Preparing for the quantum future'
      }
    ]
  },
  {
    name: 'Practice',
    path: '/practice',
    subItems: [
      {
        name: 'Interactive Labs',
        path: '/labs',
        description: 'Hands-on quantum experiments'
      },
      {
        name: 'Quizzes',
        path: '/quizzes',
        description: 'Test your knowledge'
      }
    ]
  },
  {
    name: 'Resources',
    path: '/resources',
    subItems: [
      {
        name: 'Documentation',
        path: '/docs',
        description: 'Detailed quantum computing guides'
      },
      {
        name: 'Community',
        path: '/community',
        description: 'Join the discussion'
      }
    ]
  }
]

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const handleMouseEnter = (path: string) => {
    setActiveDropdown(path)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link 
              href="/"
              className="flex items-center px-4 font-bold text-xl text-blue-600"
            >
              Quantum Learning
            </Link>

            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.path)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.path}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      pathname === item.path
                        ? 'border-blue-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>

                  <AnimatePresence>
                    {activeDropdown === item.path && item.subItems && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 w-64 mt-2 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                      >
                        <div className="py-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.path}
                              href={subItem.path}
                              className="block px-4 py-3 hover:bg-gray-50"
                            >
                              <div className="text-sm font-medium text-gray-900">
                                {subItem.name}
                              </div>
                              {subItem.description && (
                                <div className="mt-1 text-xs text-gray-500">
                                  {subItem.description}
                                </div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Start Learning
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  )
} 