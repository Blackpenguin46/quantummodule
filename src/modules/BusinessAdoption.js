import React, { useState } from 'react';
import './BusinessAdoption.css';

const BusinessAdoption = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    {
      question: 'What is the main concern for businesses adopting quantum computing?',
      options: [
        'Cost of hardware',
        'Security vulnerabilities from quantum threats',
        'Lack of trained professionals',
      ],
      correctAnswer: 'Security vulnerabilities from quantum threats',
    },
    {
      question: 'What is one of the key benefits of adopting quantum-safe practices in business?',
      options: [
        'Increased encryption strength against quantum threats',
        'Reduction in quantum computing costs',
        'Faster communication over networks',
      ],
      correctAnswer: 'Increased encryption strength against quantum threats',
    },
    {
      question: 'Which industry can benefit the most from quantum computing?',
      options: ['Healthcare', 'Entertainment', 'Retail'],
      correctAnswer: 'Healthcare',
    },
    {
      question: 'Which quantum computing challenge is businesses most concerned with?',
      options: ['Developing quantum algorithms', 'Transitioning from classical to quantum systems', 'Quantum hardware availability'],
      correctAnswer: 'Transitioning from classical to quantum systems',
    },
    {
      question: 'What is essential for businesses to secure their systems in the quantum era?',
      options: [
        'Investing in quantum-resistant cryptography',
        'Reducing IT budgets',
        'Implementing faster classical encryption systems',
      ],
      correctAnswer: 'Investing in quantum-resistant cryptography',
    },
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
      <h1>Business Adoption of Quantum Computing</h1>
      <p>Learn how businesses are adopting quantum computing and the challenges and opportunities they face.</p>

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

export default BusinessAdoption;




