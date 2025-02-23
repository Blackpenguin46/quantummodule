'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import MainLayout from './components/layout/MainLayout'
import { ProgressCircle } from './components/ui/ProgressCircle'

// Using basic emoji icons instead of react-icons for now
const modules = [
  {
    id: 'quantum-basics',
    title: 'Quantum Computing Fundamentals',
    description: 'Introduction to quantum computing concepts',
    duration: '2 hours',
    lessons: 5,
    progress: 80,
    status: 'In Progress',
    image: '/quantum-basics.jpg',
    icon: '⚛️',
    topics: ['Qubits', 'Superposition', 'Entanglement', 'Quantum Gates'],
  },
  {
    id: 'quantum-algorithms',
    title: 'Quantum Algorithms',
    description: 'Essential quantum algorithms and their applications',
    duration: '3 hours',
    lessons: 7,
    progress: 30,
    status: 'Started',
    image: '/quantum-algorithms.jpg',
    icon: '🔄',
    topics: ["Grover Algorithm", "Shor Algorithm", "Quantum Fourier Transform"],
  },
  {
    id: 'quantum-applications',
    title: 'Practical Applications',
    description: 'Real-world applications of quantum computing',
    duration: '4 hours',
    lessons: 6,
    progress: 0,
    status: 'Not Started',
    image: '/quantum-applications.jpg',
    icon: '💻',
    topics: ['Cryptography', 'Optimization', 'Machine Learning'],
  }
]

export default function Home() {
  const { scrollY } = useScroll()
  const [activeModule, setActiveModule] = useState<string | null>(null)

  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-white/10"
          >
            <h1 className="text-3xl font-bold text-white mb-4">
              Welcome back, Quantum Explorer! 👋
            </h1>
            <p className="text-gray-400 mb-6">
              Continue your journey into quantum computing. Your current progress:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: 'Modules Completed', value: '2/8', icon: '📚' },
                { label: 'Time Spent', value: '4.5 hours', icon: '⏱️' },
                { label: 'Exercises Completed', value: '12', icon: '✅' },
                { label: 'Achievements', value: '3', icon: '🏆' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 rounded-xl p-4"
                >
                  <div className="flex items-center gap-3 text-gray-400 mb-2">
                    <span className="text-xl">{stat.icon}</span>
                    <span className="text-sm">{stat.label}</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Course Modules */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Your Learning Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {module.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {module.description}
                      </p>
                    </div>
                    <ProgressCircle progress={module.progress} size={60} />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span>⏱️</span>
                      <span>{module.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span>📚</span>
                      <span>{module.lessons} Lessons</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {module.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-400"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Interactive Lab',
              description: 'Practice with quantum circuits',
              icon: '🔬',
              color: 'from-blue-500/20 to-cyan-500/20',
            },
            {
              title: 'Weekly Challenge',
              description: 'Test your quantum knowledge',
              icon: '🎯',
              color: 'from-purple-500/20 to-pink-500/20',
            },
            {
              title: 'Community Forum',
              description: 'Discuss with other learners',
              icon: '👥',
              color: 'from-amber-500/20 to-orange-500/20',
            },
          ].map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-gradient-to-br p-6 rounded-2xl border border-white/10 cursor-pointer"
              style={{
                backgroundImage: `linear-gradient(to bottom right, ${action.color})`,
              }}
            >
              <div className="text-3xl mb-4">{action.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {action.title}
              </h3>
              <p className="text-gray-400 text-sm">{action.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </MainLayout>
  )
} 