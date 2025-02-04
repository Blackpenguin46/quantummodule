'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Card from './components/ui/Card'

// Dynamic background component with floating particles
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
          initial={{ 
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            scale: Math.random() * 0.5 + 0.5,
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
            duration: Math.random() * 20 + 20,
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
    description: 'Start your quantum journey here with fundamental concepts',
    icon: '⚛️',
    iconBg: 'bg-blue-500/20',
    iconColor: 'text-blue-400',
    gradient: 'from-blue-500 to-cyan-500',
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
  const { scrollY } = useScroll()
  const [activeModule, setActiveModule] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Parallax and opacity effects
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const heroY = useTransform(scrollY, [0, 300], [0, 100])
  const gridScale = useTransform(scrollY, [0, 300], [1, 0.95])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Enhanced Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative pt-32 pb-24"
        >
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                Quantum Learning
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
                Explore the fascinating world of quantum computing through interactive lessons and practical examples.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center gap-4"
              >
                <Link href="/quantum-basics">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    Start Learning
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  Watch Demo
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400"
        >
          <span className="block text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border-2 border-gray-400 rounded-full mx-auto"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 bg-gray-400 rounded-full mx-auto mt-2"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Modules Grid */}
      <motion.div 
        style={{ scale: gridScale }}
        className="container mx-auto px-6 py-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Explore Quantum Computing
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setActiveModule(module.id)}
              onHoverEnd={() => setActiveModule(null)}
            >
              <Link href={`/${module.id}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-2xl bg-[#1a1a1a] p-6 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`rounded-xl ${module.iconBg} p-3 ring-1 ring-white/10 transition-all duration-300 group-hover:ring-white/20`}
                    >
                      <span className={`text-2xl ${module.iconColor}`}>{module.icon}</span>
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-blue-400">
                        {module.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {module.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Enhanced hover effects */}
                  <motion.div
                    animate={{
                      opacity: activeModule === module.id ? 1 : 0,
                      scale: activeModule === module.id ? 1 : 0.95,
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl"
                  />
                  <div className="absolute inset-0 rounded-2xl transition-all duration-300 group-hover:border group-hover:border-blue-500/50" />
                  <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 transition-all duration-300 group-hover:opacity-10" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Features Section */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl bg-[#1a1a1a] p-8 overflow-hidden"
        >
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
          
          {/* Enhanced background effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:2rem_2rem]" />
          </div>
        </motion.div>
      </div>
    </main>
  )
} 