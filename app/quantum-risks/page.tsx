'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ProgressBar from '../components/modules/ProgressBar'
import InteractiveDemo from '../components/modules/InteractiveDemo'
import Quiz from '../components/modules/Quiz'

const riskQuestions = [
  {
    id: 'qr1',
    question: 'Which cryptographic systems are most vulnerable to quantum attacks?',
    options: [
      'RSA and ECC',
      'AES and SHA-256',
      'One-time pads',
      'Symmetric key algorithms'
    ],
    correctAnswer: 0,
    explanation: 'RSA and ECC rely on mathematical problems that quantum computers can solve efficiently using Shor\'s algorithm.'
  },
  // Add more questions
]

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
          <InteractiveDemo
            type="encryption-demo"
            className="my-8"
          />
        </motion.div>
      )
    },
    // Add more sections
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Quantum Risks</h1>
      <ProgressBar progress={(currentSection + 1) / sections.length * 100} />
      
      {/* Rest of the component */}
    </div>
  )
} 