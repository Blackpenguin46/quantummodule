'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { theme } from '@/app/styles/theme'
import Card from './Card'

export function Tooltip({ 
  children, 
  content 
}: { 
  children: React.ReactNode
  content: string 
}) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Accordion({
  items
}: {
  items: { title: string; content: React.ReactNode }[]
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <Card key={index} hover={false} className="overflow-hidden">
          <button
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            className="w-full px-6 py-4 text-left flex justify-between items-center"
          >
            <span className="font-medium">{item.title}</span>
            <motion.span
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              ▼
            </motion.span>
          </button>
          
          <motion.div
            initial={false}
            animate={{
              height: activeIndex === index ? 'auto' : 0,
              opacity: activeIndex === index ? 1 : 0
            }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4">
              {item.content}
            </div>
          </motion.div>
        </Card>
      ))}
    </div>
  )
}

export function ProgressRing({
  progress,
  size = 100,
  strokeWidth = 8,
  color = theme.colors.primary[500]
}: {
  progress: number
  size?: number
  strokeWidth?: number
  color?: string
}) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (progress / 100) * circumference

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      initial={{ rotate: -90 }}
      animate={{ rotate: 270 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#e2e8f0"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1, ease: "easeInOut" }}
        fill="none"
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        className="text-xl font-bold"
        fill="currentColor"
      >
        {Math.round(progress)}%
      </text>
    </motion.svg>
  )
} 