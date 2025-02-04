'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Line } from 'react-chartjs-2'
import ProgressBar from '../components/modules/ProgressBar'
import Quiz from '../components/modules/Quiz'

export default function BusinessAdoption() {
  const [currentSection, setCurrentSection] = useState(0)

  const adoptionData = {
    labels: ['2023', '2024', '2025', '2026', '2027'],
    datasets: [
      {
        label: 'Quantum Computing Market Growth',
        data: [5, 12, 25, 45, 80],
        borderColor: 'rgb(59, 130, 246)',
        tension: 0.4
      }
    ]
  }

  const sections = [
    {
      title: 'Market Growth and Adoption',
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold">Market Trends</h2>
          <p className="text-gray-700">
            The quantum computing market is experiencing rapid growth as businesses
            recognize its potential to transform industries.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Line data={adoptionData} />
          </div>
        </motion.div>
      )
    },
    // Add more sections
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Business Adoption</h1>
      <ProgressBar progress={(currentSection + 1) / sections.length * 100} />
      {/* Rest of component */}
    </div>
  )
} 