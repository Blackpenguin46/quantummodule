'use client'

import ModernLayout from '../components/layout/ModernLayout'
import Card from '../components/ui/Card'
import { motion } from 'framer-motion'
import { theme } from '../styles/theme'
import ModuleViewer from '../components/modules/ModuleViewer'

const sections = [
  {
    id: 'introduction',
    title: 'Introduction to Quantum Computing',
    content: (
      <div className="space-y-6">
        <Card gradient="primary" className="p-6">
          <h3 className="text-xl font-bold mb-4">What is Quantum Computing?</h3>
          <p className="text-gray-700 leading-relaxed">
            Quantum computing harnesses quantum mechanical phenomena to process 
            information in fundamentally new ways.
          </p>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card gradient="secondary" className="p-6">
            <h4 className="font-semibold mb-2">Key Concepts</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Superposition</li>
              <li>Entanglement</li>
              <li>Quantum Gates</li>
            </ul>
          </Card>

          <Card gradient="accent" className="p-6">
            <h4 className="font-semibold mb-2">Applications</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Cryptography</li>
              <li>Drug Discovery</li>
              <li>Optimization</li>
            </ul>
          </Card>
        </div>
      </div>
    )
  },
  // Add more sections...
]

export default function QuantumBasics() {
  return (
    <ModernLayout showSidebar>
      <ModuleViewer
        moduleId="quantum-basics"
        title="Quantum Computing Basics"
        sections={sections}
      />
    </ModernLayout>
  )
}  