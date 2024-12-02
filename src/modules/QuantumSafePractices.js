import React, { useState } from 'react';
import './QuantumSafePractices.css';

const QuantumSafePractices = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    {
      question: 'What is the primary goal of post-quantum cryptography?',
      options: ['To optimize classical encryption methods', 'To develop algorithms resistant to quantum computers', 'To create new hardware for encryption'],
      correctAnswer: 'To develop algorithms resistant to quantum computers',
    },
    {
      question: 'Which of the following is an example of a post-quantum cryptographic algorithm?',
      options: ['RSA', 'Lattice-based cryptography', 'AES'],
      correctAnswer: 'Lattice-based cryptography',
    },
    {
      question: 'What does quantum key distribution (QKD) enable?',
      options: ['Public key encryption', 'Secure communication with quantum-resistant keys', 'Breaking traditional cryptography'],
      correctAnswer: 'Secure communication with quantum-resistant keys',
    },
    {
      question: 'Which is a potential challenge in implementing quantum-safe practices?',
      options: ['Lack of interest in the cryptographic community', 'Compatibility with existing infrastructure', 'No effective algorithms available'],
      correctAnswer: 'Compatibility with existing infrastructure',
    },
    {
      question: 'What is one way quantum-safe practices can be implemented in the short term?',
      options: ['Using longer encryption keys in current systems', 'Developing quantum computers', 'Using only classical encryption methods'],
      correctAnswer: 'Using longer encryption keys in current systems',
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
    <div className="quantum-safe-practices-container">
      <h1 className="module-title">Quantum Safe Practices</h1>
      <p className="module-description">
        As quantum computers become more capable, the need for quantum-safe practices in cryptography is growing. Post-quantum cryptography (PQC) seeks to develop algorithms that are secure against both classical and quantum computing threats. This module explores the fundamental concepts and best practices for maintaining data privacy and security in a post-quantum world.
      </p>

      <p className="module-description">
        <strong>Post-Quantum Cryptography (PQC)</strong><br />
        PQC is a category of cryptographic algorithms designed to withstand attacks from quantum computers. Classical encryption methods like RSA and ECC rely on problems that quantum computers could solve efficiently, making them vulnerable. Therefore, new cryptographic methods are being developed to ensure secure communication even in a quantum-enabled future.
      </p>

      <p className="module-description">
        <strong>Quantum Key Distribution (QKD)</strong><br />
        QKD is a technique that allows two parties to securely share encryption keys using quantum mechanics. Unlike traditional key distribution methods, QKD ensures that any eavesdropping attempts can be detected by the communicating parties. This provides a significant advantage over classical cryptography in securing communication channels.
      </p>

      <p className="module-description">
        <strong>Challenges in Transitioning to Quantum-Safe Practices</strong><br />
        Transitioning to quantum-safe cryptography poses significant challenges, especially when it comes to compatibility with existing infrastructure. Cryptographic systems must be updated or replaced with quantum-resistant alternatives, and this process requires substantial effort, including auditing current systems and deploying new algorithms. Additionally, quantum-safe practices are still in the early stages of development, with many algorithms not yet fully tested in real-world scenarios.
      </p>

      <p className="module-description">
        <strong>Short-Term Solutions</strong><br />
        While post-quantum cryptography is still evolving, some short-term solutions can help mitigate risks, such as using longer encryption keys or hybrid cryptography (combining classical and quantum-resistant algorithms). These practices help provide an additional layer of security while quantum-safe algorithms mature.
      </p>

      {/* Quiz section */}
      <div className="quiz-section">
        <h2 className="quiz-title">Quiz: Test Your Knowledge of Quantum Safe Practices</h2>
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

export default QuantumSafePractices;
