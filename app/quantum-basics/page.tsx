'use client'

import ModuleContent from '../components/modules/ModuleContent'

export default function QuantumBasics() {
  const sections = [
    {
      title: 'Introduction',
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">What is Quantum Computing?</h2>
          <p className="text-gray-700">
            Quantum computing is a type of computation that harnesses the 
            collective properties of quantum states to perform calculations.
          </p>
        </div>
      )
    },
    // Add more sections
  ]

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Quantum Computing Basics</h1>
      <ModuleContent sections={sections} />
    </div>
  )
} 