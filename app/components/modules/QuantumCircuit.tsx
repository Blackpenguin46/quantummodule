'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface Gate {
  type: 'H' | 'X' | 'CNOT' | 'Z' | 'Y'
  position: number
  control?: number
}

export default function QuantumCircuit() {
  const [gates, setGates] = useState<Gate[]>([])
  const [numQubits, setNumQubits] = useState(2)
  const [selectedGate, setSelectedGate] = useState<Gate['type']>('H')

  const addGate = (position: number) => {
    if (selectedGate === 'CNOT') {
      setGates([...gates, { type: selectedGate, position, control: position > 0 ? position - 1 : position + 1 }])
    } else {
      setGates([...gates, { type: selectedGate, position }])
    }
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6 flex space-x-4">
        {(['H', 'X', 'CNOT', 'Z', 'Y'] as Gate['type'][]).map((gate) => (
          <button
            key={gate}
            onClick={() => setSelectedGate(gate)}
            className={`px-4 py-2 rounded ${
              selectedGate === gate 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {gate}
          </button>
        ))}
      </div>

      <div className="relative border-2 border-gray-200 rounded-lg p-4">
        {Array.from({ length: numQubits }).map((_, qubit) => (
          <div key={qubit} className="flex items-center h-16 border-b border-gray-200">
            <div className="w-12 font-mono">q{qubit}</div>
            <div className="flex-1 relative">
              <div className="absolute inset-y-1/2 w-full h-0.5 bg-gray-300" />
              {gates.map((gate, i) => (
                gate.position === qubit && (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded">
                      {gate.type}
                    </div>
                    {gate.type === 'CNOT' && gate.control !== undefined && (
                      <div className="absolute w-0.5 h-16 bg-blue-500" 
                           style={{ 
                             top: gate.control > gate.position ? '50%' : '-50%' 
                           }} 
                      />
                    )}
                  </motion.div>
                )
              ))}
              <button
                onClick={() => addGate(qubit)}
                className="absolute inset-0 w-full h-full opacity-0 hover:opacity-100 bg-blue-100/50"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-between">
        <button
          onClick={() => setNumQubits(Math.max(1, numQubits - 1))}
          className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
        >
          Remove Qubit
        </button>
        <button
          onClick={() => setNumQubits(numQubits + 1)}
          className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
        >
          Add Qubit
        </button>
      </div>
    </div>
  )
} 