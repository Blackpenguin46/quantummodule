'use client'

import { motion } from 'framer-motion'
import { theme } from '../../styles/theme'

interface CardProps {
  children: React.ReactNode
  className?: string
  gradient?: keyof typeof theme.gradients
  hover?: boolean
  onClick?: () => void
}

export default function Card({ 
  children, 
  className = '', 
  gradient,
  hover = true,
  onClick 
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, boxShadow: theme.shadows.xl } : undefined}
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-xl bg-white shadow-md 
        transition-all duration-300 ${className}
        ${onClick ? 'cursor-pointer' : ''}
      `}
    >
      {gradient && (
        <div 
          className="absolute inset-0 opacity-10"
          style={{ background: theme.gradients[gradient] }}
        />
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
} 