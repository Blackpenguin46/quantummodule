export interface Module {
  id: string
  title: string
  description: string
  duration: string
  progress: number
}

export interface Quiz {
  id: string
  question: string
  options: string[]
  correctAnswer: number
}

export interface UserProgress {
  moduleId: string
  completed: boolean
  quizScore?: number
  lastAccessed: Date
} 