'use client'

import { useState, useEffect } from 'react'

interface ModuleProgress {
  moduleId: string
  progress: number
  completed: boolean
  lastAccessed: string
}

export function useProgress(moduleId: string) {
  const [progress, setProgress] = useState<ModuleProgress>({
    moduleId,
    progress: 0,
    completed: false,
    lastAccessed: new Date().toISOString()
  })

  useEffect(() => {
    // Load progress from localStorage
    const stored = localStorage.getItem(`module-progress-${moduleId}`)
    if (stored) {
      setProgress(JSON.parse(stored))
    }
  }, [moduleId])

  const updateProgress = (newProgress: number, completed = false) => {
    const updated = {
      moduleId,
      progress: newProgress,
      completed,
      lastAccessed: new Date().toISOString()
    }
    setProgress(updated)
    localStorage.setItem(`module-progress-${moduleId}`, JSON.stringify(updated))
  }

  return { progress, updateProgress }
} 