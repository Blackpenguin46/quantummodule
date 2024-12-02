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
    <div className="quantum-risks">
      <h1>Quantum Risks</h1>
      <p>
        The applications of quantum computing extend far beyond cryptography, promising to revolutionize fields such as drug discovery, material science, and complex system simulation. However, its potential to break classical encryption algorithms presents a clear and present danger to cybersecurity, necessitating the development of new cryptographic practices resilient to quantum attacks.
      </p>
      <p>
        <strong>Current Cybersecurity Frameworks and Their Quantum Vulnerabilities</strong><br />
        The foundation of contemporary cybersecurity relies on cryptographic algorithms designed to secure digital communications and data against unauthorized access. Among the most widely used cryptographic protocols are the RSA algorithm, based on the difficulty of factoring large prime numbers, and elliptic curve cryptography (ECC), which utilizes the algebraic structure of elliptic curves over finite fields. These cryptographic systems are deemed secure against attacks from classical computers, as the computational effort required to break them is prohibitively high.
      </p>
      <p>
        The advent of quantum computing introduces significant vulnerabilities into these frameworks. Quantum computers leverage quantum mechanical properties, such as superposition and entanglement, enabling them to perform calculations at speeds unattainable by their classical counterparts. This capability poses a direct threat to cryptographic algorithms like RSA and ECC. Shor's algorithm, a quantum algorithm developed by Peter Shor in 1994, can factor large numbers and compute discrete logarithms in polynomial time, rendering RSA and ECC effectively obsolete in a post-quantum world.
      </p>
      <p>
        Grover's algorithm, another quantum algorithm, offers a quadratic speedup for unstructured search problems, potentially halving the effective key length of symmetric cryptographic systems. While not as devastating as Shor's algorithm, Grover's algorithm still significantly reduces the security margin of these systems.
      </p>
      <p>
        The National Institute of Standards and Technology (NIST) has acknowledged these vulnerabilities and is in the process of evaluating and standardizing post-quantum cryptographic algorithms designed to resist quantum attacks. The transition to quantum-resistant cryptography is not merely a technical challenge but also a logistical and strategic one. Current infrastructures must be audited and updated, and new protocols must be adopted globally to maintain the integrity of digital security in the face of quantum computing. This process involves significant investment in research, development, and implementation to ensure a seamless transition to a post-quantum secure world.
      </p>
      <p>
        <strong>Quantum Computing's Threat to Cybersecurity</strong><br />
        The dawn of quantum computing brings forth unparalleled computational capabilities that, while beneficial for solving complex problems across various domains, simultaneously pose existential threats to contemporary cybersecurity frameworks. The core of this threat lies in quantum computing's ability to fundamentally disrupt the cryptographic algorithms that secure the digital world. This section delves into the specific threats quantum computing poses to cybersecurity, focusing on the vulnerability of cryptographic protocols in a quantum-enabled future.
      </p>
      
      

      {/* Quiz section */}
      <div className="quiz-section">
        <h2>Quiz: Test Your Knowledge of Quantum Risks</h2>
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

export default QuantumRisks;




