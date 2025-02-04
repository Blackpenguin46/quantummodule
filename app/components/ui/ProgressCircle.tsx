'use client'

import { motion } from 'framer-motion'

interface ProgressCircleProps {
  progress: number
  size?: number
}

export function ProgressCircle({ progress, size = 40 }: ProgressCircleProps) {
  const circumference = size * Math.PI
  const strokeWidth = size / 10
  const radius = (size - strokeWidth) / 2
  const progressOffset = circumference - (progress / 100) * circumference

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
      >
        <circle
          className="text-white/5"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="none"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <motion.circle
          className="text-blue-500"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          stroke="currentColor"
          fill="none"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: progressOffset }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            strokeDasharray: circumference,
          }}
        />
      </svg>
      <div 
        className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white"
        style={{ fontSize: size / 4 }}
      >
        {progress}%
      </div>
    </div>
  )
} 