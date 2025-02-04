'use client'

import { motion } from 'framer-motion'
import { useProgress } from '@/app/hooks/useProgress'

const modules = [
  'quantum-basics',
  'quantum-gates',
  'quantum-algorithms',
  'quantum-cryptography'
]

export default function ProgressDashboard() {
  const moduleProgress = modules.map(moduleId => ({
    moduleId,
    ...useProgress(moduleId).progress
  }))

  const totalProgress = moduleProgress.reduce(
    (acc, curr) => acc + (curr.progress || 0),
    0
  ) / modules.length

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Learning Progress
        </h2>

        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              Overall Progress
            </span>
            <span className="text-sm font-medium text-blue-600">
              {Math.round(totalProgress)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${totalProgress}%` }}
            />
          </div>
        </div>

        <div className="space-y-6">
          {moduleProgress.map((module, index) => (
            <motion.div
              key={module.moduleId}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">
                  {module.moduleId.split('-').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ')}
                </span>
                <span className="text-sm font-medium text-blue-600">
                  {Math.round(module.progress || 0)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${module.progress || 0}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
} 