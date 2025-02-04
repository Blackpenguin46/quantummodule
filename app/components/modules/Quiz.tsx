'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface QuizProps {
  questions: QuizQuestion[]
  onComplete?: () => void
}

export default function Quiz({ questions, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index)
    setShowExplanation(true)
    
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setIsComplete(true)
      onComplete?.()
    }
  }

  if (isComplete) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 bg-white rounded-lg shadow-lg"
      >
        <h3 className="text-2xl font-bold mb-4">Quiz Complete!</h3>
        <p className="text-lg">
          Your score: {score} out of {questions.length}
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-white rounded-lg shadow-lg"
    >
      <h3 className="text-2xl font-bold mb-6">Knowledge Check</h3>
      
      <div className="mb-6">
        <p className="text-lg mb-4">{questions[currentQuestion].question}</p>
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={showExplanation}
              className={`w-full p-4 text-left rounded-lg transition-colors ${
                selectedAnswer === index
                  ? index === questions[currentQuestion].correctAnswer
                    ? 'bg-green-100 border-green-500'
                    : 'bg-red-100 border-red-500'
                  : 'bg-gray-50 hover:bg-gray-100'
              } ${showExplanation ? 'cursor-default' : 'cursor-pointer'}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {showExplanation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 p-4 bg-blue-50 rounded-lg"
        >
          <p className="text-gray-700">{questions[currentQuestion].explanation}</p>
        </motion.div>
      )}

      {showExplanation && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleNext}
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {currentQuestion < questions.length - 1 ? 'Next Question' : 'Complete Quiz'}
        </motion.button>
      )}
    </motion.div>
  )
} 