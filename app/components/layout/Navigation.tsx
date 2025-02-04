'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Quantum Basics', path: '/quantum-basics' },
  { name: 'Quantum Risks', path: '/quantum-risks' },
  { name: 'Quantum Safety', path: '/quantum-safety' },
  { name: 'Business Impact', path: '/business-impact' },
]

export default function Navigation() {
  const [activeItem, setActiveItem] = useState('/')

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
            >
              QuantumNex
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium
                    ${activeItem === item.path 
                      ? 'bg-white/10 text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'}
                    transition-all duration-200
                  `}
                  onClick={() => setActiveItem(item.path)}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-lg bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-all duration-200"
            >
              Sign In
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
} 