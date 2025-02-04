'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Card from './components/ui/Card'

const modules = [
  {
    id: 'quantum-basics',
    title: 'Quantum Basics',
    description: 'Start your quantum journey here with fundamental concepts',
    icon: '⚛️',
    iconBg: 'bg-blue-500/20',
    iconColor: 'text-blue-400',
  },
  {
    id: 'quantum-risks',
    title: 'Quantum Risks',
    description: 'Understand the challenges and risks in quantum computing',
    icon: '⚠️',
    iconBg: 'bg-amber-500/20',
    iconColor: 'text-amber-400',
  },
  {
    id: 'quantum-safety',
    title: 'Quantum Safety',
    description: 'Learn about quantum-safe cryptography and security measures',
    icon: '🛡️',
    iconBg: 'bg-green-500/20',
    iconColor: 'text-green-400',
  },
  {
    id: 'business-impact',
    title: 'Business Impact',
    description: 'Explore how quantum computing transforms industries',
    icon: '💼',
    iconBg: 'bg-purple-500/20',
    iconColor: 'text-purple-400',
  },
  {
    id: 'quantum-labs',
    title: 'Interactive Labs',
    description: 'Hands-on quantum circuit experiments and simulations',
    icon: '🔬',
    iconBg: 'bg-cyan-500/20',
    iconColor: 'text-cyan-400',
  },
  {
    id: 'quantum-community',
    title: 'Community',
    description: 'Connect with fellow quantum computing enthusiasts',
    icon: '🤝',
    iconBg: 'bg-pink-500/20',
    iconColor: 'text-pink-400',
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section with Grid Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="relative pt-24 pb-16 md:pt-32 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="container mx-auto px-6 text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Quantum Learning
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
              Explore the fascinating world of quantum computing through interactive lessons and practical examples.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="container mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Explore Quantum Computing
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/${module.id}`}>
                <div className="group relative overflow-hidden rounded-2xl bg-[#1a1a1a] p-6 transition-all duration-300 hover:bg-[#222] hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className="flex items-start gap-4">
                    <div className={`rounded-xl ${module.iconBg} p-3 ring-1 ring-white/10 transition-all duration-300 group-hover:ring-white/20`}>
                      <span className={`text-2xl ${module.iconColor}`}>{module.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-blue-400">
                        {module.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {module.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Gradient border on hover */}
                  <div className="absolute inset-0 rounded-2xl transition-all duration-300 group-hover:border group-hover:border-blue-500/50" />
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 transition-all duration-300 group-hover:opacity-10" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="relative rounded-2xl bg-[#1a1a1a] p-8 overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Why Learn Quantum Computing With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🎯',
                  title: 'Interactive Learning',
                  description: 'Hands-on quantum circuit simulations and experiments'
                },
                {
                  icon: '📈',
                  title: 'Track Progress',
                  description: 'Monitor your learning journey with detailed analytics'
                },
                {
                  icon: '🤝',
                  title: 'Community Support',
                  description: 'Learn alongside fellow quantum computing enthusiasts'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center p-6 rounded-xl bg-[#222] hover:bg-[#2a2a2a] transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
        </div>
      </div>
    </main>
  )
} 