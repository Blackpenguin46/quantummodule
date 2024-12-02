import React, { useState } from 'react';
import './QuantumSafePractices.css';

const QuantumSafePractices = () => {
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
    <div className="quantum-safe-practices">
      <h1>Quantum Safe Practices</h1>
      <p>
        <strong>Shor’s Algorithm and Cryptographic Vulnerability</strong><br />
        At the heart of the quantum threat to encryption is Shor's algorithm. This quantum algorithm is capable of factoring large integers and computing discrete logarithms in polynomial time, a feat that is infeasible with classical computing for sufficiently large numbers. RSA, ECC, and Diffie-Hellman cryptographic protocols, which underpin the security of most digital communication systems, become vulnerable as a result. Shor's algorithm can theoretically break these systems, compromising the confidentiality and integrity of digital information.
      </p>
      <p>
        <strong>Grover's Algorithm and Symmetric Cryptography</strong><br />
        While Shor’s algorithm targets asymmetric cryptography, Grover's algorithm presents a subtler but still significant threat to symmetric cryptographic systems, including block ciphers and hash functions. Grover's algorithm achieves a quadratic speedup in searching unsorted databases, effectively reducing the security provided by symmetric keys by half. Although symmetric cryptography is not as directly vulnerable as asymmetric systems, the implications of Grover's algorithm necessitate a doubling of key sizes to maintain current security levels in a quantum computing era.
      </p>
      <p>
        <strong>Quantum Computing and Data Privacy</strong><br />
        The threat posed by quantum computing extends beyond the immediate breaking of cryptographic systems; it also introduces challenges to long-term data privacy. Information encrypted with current cryptographic standards could be at risk if quantum computers become capable of breaking these encryption methods. This retrospective decryption capability means that data encrypted today could be decrypted in the future by quantum computers, posing significant risks to data privacy in a post-quantum world.
      </p>
      <p>
        <strong>Importance of Quantum Cryptography</strong><br />
        The development and adoption of quantum-safe cryptographic methods are essential in mitigating the risks posed by quantum computing to current security systems. Quantum-safe cryptography, such as lattice-based encryption and hash-based signatures, is designed to be resistant to quantum algorithms like Shor’s and Grover’s. By transitioning to quantum-resistant protocols, organizations can secure their digital assets against future quantum threats, ensuring long-term confidentiality, integrity, and authenticity in digital communication and data storage.
      </p>

      {/* Quiz section */}
      <div className="quiz-section">
        <h2>Quiz: Test Your Knowledge of Quantum Safe Practices</h2>
        {!quizCompleted ? (
          <div className="quiz-question">
            <h3>{questions[currentQuestionIndex].question}</h3>
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
          <p>Quiz Completed! Great job!</p>
        )}
      </div>
    </div>
  );
};

export default QuantumSafePractices;

