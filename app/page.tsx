'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Card from './components/ui/Card'
import ModernLayout from './components/layout/ModernLayout'
import { ProgressRing } from './components/ui/InteractiveElements'

// Interactive particle background component
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
          initial={{ 
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%'
          }}
          animate={{
            x: [
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
              Math.random() * 100 + '%'
            ],
            y: [
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
              Math.random() * 100 + '%'
            ]
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

const modules = [
  {
    id: 'quantum-basics',
    title: 'Quantum Basics',
    description: 'Start your quantum journey here',
    icon: '🔄',
    color: 'from-blue-500 to-blue-600',
    link: '/quantum-basics',
    progress: 0
  },
  {
    id: 'quantum-risks',
    title: 'Quantum Risks',
    description: 'Understand the challenges ahead',
    icon: '⚠️',
    color: 'from-red-500 to-red-600',
    link: '/quantum-risks',
    progress: 0
  },
  {
    id: 'quantum-safety',
    title: 'Quantum Safety',
    description: 'Prepare for the quantum future',
    icon: '🛡️',
    color: 'from-green-500 to-green-600',
    link: '/quantum-safety',
    progress: 0
  },
  {
    id: 'business-impact',
    title: 'Business Impact',
    description: 'Quantum in enterprise',
    icon: '💼',
    color: 'from-purple-500 to-purple-600',
    link: '/business-impact',
    progress: 0
  }
]

export default function Home() {
  const { scrollY } = useScroll()
  const [activeModule, setActiveModule] = useState<string | null>(null)
  const [moduleProgress, setModuleProgress] = useState(modules)

  // Parallax effect for hero section
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  // Simulate loading module progress
  useEffect(() => {
    const loadProgress = async () => {
      // In a real app, this would fetch from your backend
      const updatedModules = moduleProgress.map(module => ({
        ...module,
        progress: Math.floor(Math.random() * 100)
      }))
      setModuleProgress(updatedModules)
    }
    loadProgress()
  }, [])

  return (
    <ModernLayout>
      {/* Dynamic Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <ParticleBackground />
        <motion.div style={{ y, opacity }} className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Quantum Learning
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              >
                Master quantum computing through interactive learning
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-x-4"
              >
                <Link
                  href="/quantum-basics"
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Start Learning
                </Link>
                <button
                  onClick={() => {/* Add demo functionality */}}
                  className="inline-block bg-white text-gray-800 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Watch Demo
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <motion.div
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400"
          >
            ↓ Scroll to explore
          </motion.div>
        </motion.div>
      </section>

      {/* Interactive Modules Grid */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {moduleProgress.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, x: index % 2 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setActiveModule(module.id)}
                onHoverEnd={() => setActiveModule(null)}
              >
                <Link href={module.link}>
                  <Card className="p-6 h-full relative overflow-hidden group">
                    <div className="flex items-start space-x-4">
                      <div className={`
                        w-12 h-12 rounded-lg flex items-center justify-center text-2xl
                        bg-gradient-to-br ${module.color} text-white transform group-hover:scale-110 transition-transform
                      `}>
                        {module.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {module.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {module.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <ProgressRing progress={module.progress} size={40} />
                          <span className="text-sm text-gray-500">
                            {module.progress}% Complete
                          </span>
                        </div>
                      </div>
                    </div>
                    {activeModule === module.id && (
                      <motion.div
                        layoutId="highlight"
                        className="absolute inset-0 border-2 border-blue-500 rounded-xl"
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Interactive Learning Experience
            </h2>
            <p className="text-xl text-gray-600">
              Engage with quantum computing concepts in real-time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Interactive Simulations',
                description: 'Experiment with quantum circuits in real-time'
              },
              {
                icon: '📈',
                title: 'Progress Tracking',
                description: 'Monitor your learning journey with detailed analytics'
              },
              {
                icon: '🤝',
                title: 'Live Collaboration',
                description: 'Learn and solve problems with fellow students'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4 transform transition-transform hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ModernLayout>
  )
} 