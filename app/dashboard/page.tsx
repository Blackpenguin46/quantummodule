'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { UserProgress, Module } from '../types'

const modules: Module[] = [
  {
    id: 'quantum-basics',
    title: 'Quantum Basics',
    description: 'Introduction to quantum computing fundamentals',
    duration: '45 mins',
    progress: 0
  },
  // Add other modules
]

export default function Dashboard() {
  const [userProgress, setUserProgress] = useState<UserProgress[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await fetch('/api/progress')
        const data = await response.json()
        setUserProgress(data)
      } catch (error) {
        console.error('Failed to fetch progress:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProgress()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Learning Journey</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <motion.div
            key={module.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
              <p className="text-gray-600 mb-4">{module.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">{module.duration}</span>
                <span className="text-sm font-medium text-blue-600">
                  {module.progress}% Complete
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full mb-4">
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: `${module.progress}%` }}
                />
              </div>
              <Link
                href={`/${module.id}`}
                className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                {module.progress === 0 ? 'Start' : 'Continue'}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 