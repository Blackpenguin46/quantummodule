import React, { useState } from 'react';
import './QuantumBasics.css'; // Make sure to add the updated CSS

const QuantumBasics = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: 'What is Quantum Computing?',
      options: ['Classical Computing', 'Quantum Mechanics', 'Artificial Intelligence'],
      correctAnswer: 'Quantum Mechanics',
    },
    {
      question: 'What is a qubit?',
      options: ['A bit in classical computing', 'A unit of data storage', 'A quantum bit'],
      correctAnswer: 'A quantum bit',
    },
    {
      question: 'What does superposition in quantum mechanics refer to?',
      options: ['A particle being in two states at once', 'The probability of an event', 'Quantum entanglement'],
      correctAnswer: 'A particle being in two states at once',
    },
    {
      question: 'Which algorithm is most associated with quantum computing?',
      options: ['Shor\'s algorithm', 'RSA', 'AES'],
      correctAnswer: 'Shor\'s algorithm',
    },
    {
      question: 'What is quantum entanglement?',
      options: ['Particles separated by large distances are linked', 'A property of classical systems', 'A type of quantum interference'],
      correctAnswer: 'Particles separated by large distances are linked',
    },
  ];

  const handleAnswer = (questionIndex, answer) => {
    if (questions[questionIndex].correctAnswer === answer) {
      setScore(score + 1);
    }

    if (questionIndex === questions.length - 1) {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="quantum-basics-container">
      <h1 className="module-title">Quantum Basics</h1>
      <p className="module-description">Learn the foundational concepts of quantum computing.</p>

      {/* Module Content */}
      <div className="module-content">
        <p>
          This module covers the basics of quantum computing, including key concepts like qubits,
          quantum gates, superposition, and entanglement.
        </p>
      </div>

      {/* Quiz Section */}
      <div className="quiz-section">
        <h2 className="quiz-title">Quiz</h2>
        {quizCompleted ? (
          <div className="quiz-completed">
            <p>
              🎉 <strong>Quiz Completed!</strong> Your score is <strong>{score}/{questions.length}</strong>.
            </p>
          </div>
        ) : (
          questions.map((question, index) => (
            <div key={index} className="quiz-question">
              <p className="question-text">
                <strong>Q{index + 1}:</strong> {question.question}
              </p>
              <div className="options-container">
                {question.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(index, option)}
                    className="quiz-option"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default QuantumBasics;


