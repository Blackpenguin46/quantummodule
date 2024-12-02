import React, { useState } from 'react';
import './QuantumRisks.css';

const QuantumRisks = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    {
      question: 'What algorithm can quantum computers use to factor large numbers?',
      options: ['Grover\'s algorithm', 'Shor\'s algorithm', 'RSA'],
      correctAnswer: 'Shor\'s algorithm',
    },
    {
      question: 'Which cryptographic system is most affected by quantum computing?',
      options: ['Symmetric cryptography', 'Elliptic Curve Cryptography (ECC)', 'Quantum encryption'],
      correctAnswer: 'Elliptic Curve Cryptography (ECC)',
    },
    {
      question: 'What does Grover\'s algorithm reduce in symmetric cryptography?',
      options: ['Security level', 'Key length', 'Search time'],
      correctAnswer: 'Security level',
    },
    {
      question: 'What is the main challenge in transitioning to quantum-resistant cryptography?',
      options: ['Investment in research', 'Finding quantum-resistant algorithms', 'Updating existing infrastructure'],
      correctAnswer: 'Updating existing infrastructure',
    },
    {
      question: 'Which aspect of quantum computing poses a significant threat to data privacy?',
      options: ['Data decryption capability', 'Quantum key distribution', 'Quantum tunneling'],
      correctAnswer: 'Data decryption capability',
    }
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
    <div className="quantum-risks-container">
      <h1 className="module-title">Quantum Risks</h1>
      <p className="module-description">
        The applications of quantum computing extend far beyond cryptography, promising to revolutionize fields such as drug discovery, material science, and complex system simulation. However, its potential to break classical encryption algorithms presents a clear and present danger to cybersecurity, necessitating the development of new cryptographic practices resilient to quantum attacks.
      </p>

      {/* Quiz section */}
      <div className="quiz-section">
        <h2 className="quiz-title">Quiz: Test Your Knowledge of Quantum Risks</h2>
        {!quizCompleted ? (
          <div className="quiz-question">
            <h3 className="question-text">{questions[currentQuestionIndex].question}</h3>
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
          <p className="quiz-completed">Quiz Completed! Great job!</p>
        )}
      </div>
    </div>
  );
};

export default QuantumRisks;




