'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useProgress } from '@/app/hooks/useProgress'

interface Module {
  id: string
  title: string
  description: string
  duration: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  prerequisites?: string[]
  icon: string
}

const modules: Module[] = [
  {
    id: 'quantum-basics',
    title: 'Quantum Computing Fundamentals',
    description: 'Learn the basic principles of quantum computing and qubits',
    duration: '45 mins',
    difficulty: 'Beginner',
    icon: '🔄'
  },
  {
    id: 'quantum-gates',
    title: 'Quantum Gates & Circuits',
    description: 'Master the building blocks of quantum algorithms',
    duration: '1 hour',
    difficulty: 'Beginner',
    prerequisites: ['quantum-basics'],
    icon: '🔧'
  },
  {
    id: 'quantum-algorithms',
    title: 'Quantum Algorithms',
    description: 'Explore famous quantum algorithms and their applications',
    duration: '1.5 hours',
    difficulty: 'Intermediate',
    prerequisites: ['quantum-gates'],
    icon: '📊'
  },
  {
    id: 'quantum-cryptography',
    title: 'Quantum Cryptography',
    description: 'Understand quantum-safe encryption methods',
    duration: '2 hours',
    difficulty: 'Advanced',
    prerequisites: ['quantum-algorithms'],
    icon: '🔒'
  }
]

export default function LearningPath() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900">Your Learning Path</h2>
        <p className="mt-4 text-lg text-gray-600">
          Follow our structured learning path to master quantum computing
        </p>
      </motion.div>

      <div className="relative">
        {/* Connection lines */}
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-200 -translate-x-1/2" />

        <div className="space-y-12">
          {modules.map((module, index) => {
            const { progress } = useProgress(module.id)
            
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, x: index % 2 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`relative flex ${
                  index % 2 ? 'justify-start' : 'justify-end'
                } md:w-1/2 ${index % 2 ? 'md:ml-auto' : ''}`}
              >
                <div className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="absolute top-8 -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-xl">
                    {module.icon}
                  </div>
                  
                  <div className="ml-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${
                      module.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      module.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {module.difficulty}
                    </span>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {module.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {module.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {module.duration}
                      </span>
                      
                      <Link
                        href={`/modules/${module.id}`}
                        className={`px-4 py-2 rounded-md text-sm font-medium ${
                          progress?.completed
                            ? 'bg-green-500 text-white'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                      >
                        {progress?.completed ? 'Review' : 'Start Learning'}
                      </Link>
                    </div>

                    {progress && (
                      <div className="mt-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progress.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
} 