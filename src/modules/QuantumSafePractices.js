import React, { useState } from 'react';
import './QuantumSafePractices.css';

const QuantumSafePractices = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    {
      question: 'What is Post-Quantum Cryptography (PQC)?',
      options: [
        'Cryptography immune to quantum attacks',
        'Quantum algorithms for classical encryption',
        'Quantum encryption for classical computers',
      ],
      correctAnswer: 'Cryptography immune to quantum attacks',
    },
    {
      question: 'Which cryptographic approach is considered post-quantum?',
      options: ['Lattice-based cryptography', 'RSA', 'SHA-256'],
      correctAnswer: 'Lattice-based cryptography',
    },
    // Add more questions here
  ];

  const handleOptionClick = (option) => {
    setSelectedAnswer(option);
    if (option === questions[currentQuestionIndex].correctAnswer) {
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex((prev) => prev + 1);
        } else {
          setQuizCompleted(true);
        }
        setSelectedAnswer(null);
      }, 500);
    }
  };

  return (
    <div>
      <h1>Quantum Safe Practices</h1>
      <p>Learn about the adoption of quantum-safe cryptographic practices.</p>

      {!quizCompleted ? (
        <div className="quiz-section">
          <h2>{questions[currentQuestionIndex].question}</h2>
          <div className="options-container">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className={`quiz-option ${
                  selectedAnswer === option
                    ? option === questions[currentQuestionIndex].correctAnswer
                      ? 'correct'
                      : 'incorrect'
                    : ''
                }`}
                onClick={() => handleOptionClick(option)}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p className="quiz-completed-message">Quiz Completed! Great job!</p>
      )}
    </div>
  );
};

export default QuantumSafePractices;
