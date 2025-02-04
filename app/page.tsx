'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const modules = [
  {
    id: 'quantum-basics',
    title: 'Quantum Basics',
    description: 'Start your quantum journey here',
    color: 'bg-blue-500',
    icon: '🔄'
  },
  {
    id: 'quantum-risks',
    title: 'Quantum Risks',
    description: 'Understand the challenges ahead',
    color: 'bg-red-500',
    icon: '⚠️'
  },
  {
    id: 'quantum-safe-practices',
    title: 'Quantum Safety',
    description: 'Prepare for the quantum future',
    color: 'bg-green-500',
    icon: '🛡️'
  },
  {
    id: 'business-adoption',
    title: 'Business Impact',
    description: 'Quantum in enterprise',
    color: 'bg-purple-500',
    icon: '💼'
  }
]

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to Quantum Learning
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore the fascinating world of quantum computing through interactive
          lessons and practical examples.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {modules.map((module, index) => (
          <motion.div
            key={module.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/${module.id}`}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`${module.color} h-2`} />
                <div className="p-8">
                  <span className="text-4xl mb-4 block">{module.icon}</span>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {module.title}
                  </h2>
                  <p className="text-gray-600">{module.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 