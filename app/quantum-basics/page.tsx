'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ModuleSection from '../components/modules/ModuleSection'
import ProgressBar from '../components/modules/ProgressBar'
import InteractiveDemo from '../components/modules/InteractiveDemo'
import Quiz from '../components/modules/Quiz'

const sections = [
  {
    title: "Introduction to Quantum Computing",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Quantum computing harnesses quantum mechanical phenomena to process 
          information in fundamentally new ways. Unlike classical computers that 
          use bits (0s and 1s), quantum computers use quantum bits or qubits.
        </p>
        <InteractiveDemo type="qubit-visualization" />
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Key Concept: Superposition</h4>
          <p className="text-gray-700">
            Qubits can exist in multiple states simultaneously, a property known 
            as superposition. This allows quantum computers to process vast amounts 
            of information in parallel.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Quantum Gates and Circuits",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Quantum gates are the building blocks of quantum circuits. They manipulate 
          qubits to perform computations, similar to how classical logic gates 
          operate on classical bits.
        </p>
        <InteractiveDemo type="quantum-circuit" />
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Try It Yourself</h4>
          <p className="text-gray-700">
            Experiment with different quantum gates to see how they affect the 
            state of qubits. Common gates include the Hadamard (H) gate and the 
            CNOT gate.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Applications and Impact",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Quantum computing has the potential to revolutionize fields such as 
          cryptography, drug discovery, and optimization problems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold mb-2">Cryptography</h4>
            <p className="text-gray-700">Breaking current encryption methods</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h4 className="font-semibold mb-2">Drug Discovery</h4>
            <p className="text-gray-700">Simulating molecular interactions</p>
          </div>
        </div>
      </div>
    )
  }
]

export default function QuantumBasics() {
  const [currentSection, setCurrentSection] = useState(0)
  const [progress, setProgress] = useState(0)

  const handleSectionComplete = (index: number) => {
    const newProgress = ((index + 1) / sections.length) * 100
    setProgress(Math.max(progress, newProgress))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Quantum Computing Basics
      </h1>
      
      <ProgressBar progress={progress} />

      <div className="space-y-6">
        {sections.map((section, index) => (
          <ModuleSection
            key={index}
            title={section.title}
            content={section.content}
            index={index}
            isActive={index === currentSection}
          />
        ))}
      </div>

      <div className="mt-8">
        <Quiz
          questions={[
            {
              id: 'q1',
              question: 'What is a qubit?',
              options: [
                'A classical bit',
                'A quantum bit that can be in superposition',
                'A type of quantum gate',
                'A quantum computer'
              ],
              correctAnswer: 1,
              explanation: 'A qubit is a quantum bit that can exist in multiple states simultaneously through superposition.'
            }
          ]}
          onComplete={() => setProgress(100)}
        />
      </div>
    </motion.div>
  )
} 