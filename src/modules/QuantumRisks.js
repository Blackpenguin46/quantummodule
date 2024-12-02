import React, { useState } from 'react';
import './QuantumRisks.css';

const QuantumRisks = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    {
      question: 'Which quantum algorithm poses a risk to current encryption methods?',
      options: ['Shor’s Algorithm', 'RSA', 'AES'],
      correctAnswer: 'Shor’s Algorithm',
    },
    {
      question: 'What does quantum computing potentially threaten?',
      options: ['Classical encryption systems', 'Supercomputers', 'Cloud storage'],
      correctAnswer: 'Classical encryption systems',
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
      <h1>Quantum Risks</h1>
      <p>Explore the potential risks posed by quantum computing to current security systems.</p>

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

export default QuantumRisks;


