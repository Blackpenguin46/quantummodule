'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Chart } from 'react-chartjs-2'

interface InteractiveDemoProps {
  type: 'qubit-visualization' | 'quantum-circuit' | 'encryption-demo'
  className?: string
}

export default function InteractiveDemo({ type, className = '' }: InteractiveDemoProps) {
  const [demoState, setDemoState] = useState({
    rotation: 0,
    superposition: false,
    measurement: null
  })

  const renderDemo = () => {
    switch (type) {
      case 'qubit-visualization':
        return (
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Qubit Visualization</h3>
            <div className="aspect-square max-w-md mx-auto relative">
              <motion.div
                animate={{ rotate: demoState.rotation }}
                className="w-full h-full"
              >
                {/* Add Bloch sphere visualization */}
              </motion.div>
              <div className="mt-4 space-x-4">
                <button
                  onClick={() => setDemoState(prev => ({
                    ...prev,
                    rotation: prev.rotation + 90
                  }))}
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Rotate
                </button>
                <button
                  onClick={() => setDemoState(prev => ({
                    ...prev,
                    superposition: !prev.superposition
                  }))}
                  className="px-4 py-2 bg-green-600 text-white rounded"
                >
                  Toggle Superposition
                </button>
              </div>
            </div>
          </div>
        )
      
      // Add other demo types
      default:
        return null
    }
  }

  return (
    <div className={className}>
      {renderDemo()}
    </div>
  )
} 