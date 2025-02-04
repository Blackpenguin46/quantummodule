'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface Gate {
  type: 'H' | 'X' | 'Y' | 'Z' | 'CNOT'
  position: number
  control?: number
}

export default function QuantumCircuit() {
  const [gates, setGates] = useState<Gate[]>([])
  const [qubits, setQubits] = useState(2)

  const addGate = (type: Gate['type'], position: number) => {
    setGates([...gates, { type, position }])
  }

  const clearCircuit = () => {
    setGates([])
  }

  return (
    <div className="quantum-circuit bg-white p-6 rounded-lg shadow-lg">
      <div className="controls mb-4 flex space-x-2">
        <button
          onClick={() => addGate('H', 0)}
          className="btn-primary"
        >
          Add H Gate
        </button>
        <button
          onClick={() => addGate('X', 0)}
          className="btn-primary"
        >
          Add X Gate
        </button>
        <button
          onClick={clearCircuit}
          className="btn-secondary"
        >
          Clear Circuit
        </button>
      </div>

      <div className="circuit-grid border-2 border-gray-200 p-4">
        {Array.from({ length: qubits }).map((_, i) => (
          <div key={i} className="qubit-line flex items-center h-12 border-b">
            {gates
              .filter(gate => gate.position === i)
              .map((gate, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="gate-box"
                >
                  {gate.type}
                </motion.div>
              ))}
          </div>
        ))}
      </div>
    </div>
  )
} 