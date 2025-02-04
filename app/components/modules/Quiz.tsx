'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../ui/Button'

interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

interface QuizProps {
  questions: QuizQuestion[]
  onComplete?: (score: number) => void
}

export default function Quiz({ questions, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showExplanation, setShowExplanation] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    setShowExplanation(true)
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(prev => prev + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setIsCompleted(true)
      onComplete?.(score)
    }
  }

  if (isCompleted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center p-8 bg-white rounded-lg shadow"
      >
        <h3 className="text-2xl font-bold mb-4">Quiz Completed!</h3>
        <p className="text-xl mb-4">
          Your score: {score} out of {questions.length}
        </p>
        <p className="text-gray-600">
          {score === questions.length 
            ? 'Perfect score! Excellent work!' 
            : 'Keep learning and try again!'}
        </p>
      </motion.div>
    )
  }

  return (
    <div className="space-y-6">
      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white p-6 rounded-lg shadow"
      >
        <h3 className="text-xl font-semibold mb-4">
          Question {currentQuestion + 1} of {questions.length}
        </h3>
        <p className="text-gray-800 mb-6">{questions[currentQuestion].question}</p>
        
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showExplanation}
              className={`w-full p-4 text-left rounded-lg border transition-colors ${
                selectedAnswer === index
                  ? selectedAnswer === questions[currentQuestion].correctAnswer
                    ? 'bg-green-100 border-green-500'
                    : 'bg-red-100 border-red-500'
                  : 'hover:bg-gray-50 border-gray-200'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {showExplanation && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 p-4 bg-blue-50 rounded-lg"
            >
              <p className="text-blue-800">
                {questions[currentQuestion].explanation}
              </p>
              <Button
                onClick={handleNext}
                className="mt-4"
              >
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'Complete Quiz'}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
} 