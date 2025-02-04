'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function QuantumRisks() {
  const [currentSection, setCurrentSection] = useState(0)

  const sections = [
    {
      title: 'Understanding Quantum Threats',
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold mb-4">Quantum Computing Threats</h2>
          <p className="text-gray-700 leading-relaxed">
            Quantum computers pose significant risks to current cryptographic systems,
            particularly those based on factoring large numbers or discrete logarithms.
          </p>
        </motion.div>
      )
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Quantum Risks</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        {sections[currentSection].content}
      </div>
    </div>
  )
} 