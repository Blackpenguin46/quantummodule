'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card } from './components/ui/Card'
import ModernLayout from './components/layout/ModernLayout'

const modules = [
  {
    id: 'quantum-basics',
    title: 'Quantum Basics',
    description: 'Start your quantum journey here',
    icon: '🔄',
    color: 'from-blue-500 to-blue-600',
    link: '/quantum-basics'
  },
  {
    id: 'quantum-risks',
    title: 'Quantum Risks',
    description: 'Understand the challenges ahead',
    icon: '⚠️',
    color: 'from-red-500 to-red-600',
    link: '/quantum-risks'
  },
  {
    id: 'quantum-safety',
    title: 'Quantum Safety',
    description: 'Prepare for the quantum future',
    icon: '🛡️',
    color: 'from-green-500 to-green-600',
    link: '/quantum-safety'
  },
  {
    id: 'business-impact',
    title: 'Business Impact',
    description: 'Quantum in enterprise',
    icon: '💼',
    color: 'from-purple-500 to-purple-600',
    link: '/business-impact'
  }
]

export default function Home() {
  return (
    <ModernLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32"
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Welcome to{' '}
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
              Explore the fascinating world of quantum computing through interactive
              lessons and practical examples.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="/quantum-basics"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Learning
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {modules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={module.link}>
                  <Card
                    className="p-6 h-full cursor-pointer group"
                    gradient="primary"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`
                        w-12 h-12 rounded-lg flex items-center justify-center text-2xl
                        bg-gradient-to-br ${module.color} text-white
                      `}>
                        {module.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {module.title}
                        </h3>
                        <p className="text-gray-600">
                          {module.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Learn With Us?
            </h2>
            <p className="text-xl text-gray-600">
              Master quantum computing concepts through our interactive platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Interactive Learning',
                description: 'Engage with hands-on exercises and simulations'
              },
              {
                icon: '📈',
                title: 'Track Progress',
                description: 'Monitor your learning journey with detailed analytics'
              },
              {
                icon: '🤝',
                title: 'Community Support',
                description: 'Learn together with fellow quantum enthusiasts'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
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