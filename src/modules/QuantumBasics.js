import React, { useState } from 'react';
import './QuantumBasics.css';

const QuantumBasics = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

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
    <div className="quantum-basics-container">
      <h1 className="module-title">Quantum Basics</h1>
      <p className="module-description">
        Quantum computing is a modern way of computing that is based on the science of quantum mechanics and its unbelievable phenomena. It is a beautiful combination of physics, mathematics, computer science, and information theory. It provides high computational power, less energy consumption, and exponential speed over classical computers by controlling the behavior of small physical objects, i.e. microscopic particles like atoms, electrons, photons, etc.
      </p>
      <p className="module-description">
        This module presents an introduction to the fundamental concepts and some ideas of quantum computing. We start with the origin of traditional computing and discuss the improvements and transformations that have been made due to their limitations until now. Then, we move on to the basic working of quantum computing and the quantum properties it follows, like superposition, entanglement, and interference.
      </p>
      <p className="module-description">
        To understand the full potential and challenges of a practical quantum computer that can be launched commercially, we cover the architecture, hardware, software, design, types, and algorithms that are specifically required by quantum computers. We also explore the capabilities of quantum computers and their potential impacts on various fields like cybersecurity, traffic optimization, medicine, artificial intelligence, and more.
      </p>
      <p className="module-description">
        Small-scale quantum computers are currently being developed, and this development is heading toward a great future due to their high potential capabilities and advancements in ongoing research. Before focusing on the significance of general-purpose quantum computers and exploring the power of this emerging technology, it is beneficial to review the origin, potential, and limitations of traditional computing. This background helps us understand the possible challenges in developing this exotic and competitive technology and provides insight into the ongoing progress in this field.
      </p>

      {/* Quiz section */}
      <div className="quiz-section">
        <h2 className="quiz-title">Quiz: Test Your Knowledge of Quantum Basics</h2>
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

export default QuantumBasics;

