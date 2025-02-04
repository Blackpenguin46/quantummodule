'use client'

import { motion } from 'framer-motion'

const features = [
  {
    name: 'Interactive Learning',
    description: 'Engage with quantum concepts through hands-on simulations and experiments.',
    icon: '🔄'
  },
  {
    name: 'Real-world Applications',
    description: 'Understand how quantum computing is transforming industries.',
    icon: '🌍'
  },
  {
    name: 'Progress Tracking',
    description: 'Monitor your learning journey with detailed progress analytics.',
    icon: '📊'
  },
  {
    name: 'Expert Community',
    description: 'Connect with quantum computing experts and fellow learners.',
    icon: '👥'
  }
]

export default function Features() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base text-blue-600 font-semibold tracking-wide uppercase"
          >
            Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            A better way to learn quantum computing
          </motion.p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white text-2xl">
                  {feature.icon}
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 