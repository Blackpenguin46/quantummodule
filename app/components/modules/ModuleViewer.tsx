'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useProgress } from '@/app/hooks/useProgress'

interface Section {
  id: string
  title: string
  content: React.ReactNode
  interactive?: React.ReactNode
}

interface ModuleViewerProps {
  moduleId: string
  title: string
  sections: Section[]
}

export default function ModuleViewer({ moduleId, title, sections }: ModuleViewerProps) {
  const [currentSection, setCurrentSection] = useState(0)
  const { progress, updateProgress } = useProgress(moduleId)

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1)
      const newProgress = ((currentSection + 2) / sections.length) * 100
      updateProgress(newProgress)
    } else {
      updateProgress(100, true)
    }
  }

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="p-6">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4">
                {sections[currentSection].title}
              </h2>
              
              <div className="prose max-w-none">
                {sections[currentSection].content}
              </div>

              {sections[currentSection].interactive && (
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  {sections[currentSection].interactive}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentSection === 0}
              className="px-4 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700"
            >
              {currentSection === sections.length - 1 ? 'Complete' : 'Next'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 