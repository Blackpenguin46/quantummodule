'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface ModuleSectionProps {
  title: string
  content: React.ReactNode
  index: number
  isActive: boolean
}

export default function ModuleSection({ 
  title, 
  content, 
  index, 
  isActive 
}: ModuleSectionProps) {
  const [isExpanded, setIsExpanded] = useState(isActive)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="mb-6"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-900">
            {title}
          </h3>
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            ▼
          </motion.span>
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-6 bg-white border-t border-gray-100">
          {content}
        </div>
      </motion.div>
    </motion.div>
  )
} 