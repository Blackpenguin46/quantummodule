import React, { useState } from 'react';
import Quiz from '../components/Quiz';  // Adjust the path according to where your module is located


const QuantumSafePractices = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      question: 'What is Post-Quantum Cryptography (PQC)?',
      options: ['Cryptography immune to quantum attacks', 'Quantum algorithms for classical encryption', 'Quantum encryption for classical computers'],
      correctAnswer: 'Cryptography immune to quantum attacks',
    },
    {
      question: 'Which cryptographic approach is considered post-quantum?',
      options: ['Lattice-based cryptography', 'RSA', 'SHA-256'],
      correctAnswer: 'Lattice-based cryptography',
    },
    {
      question: 'What is the primary goal of PQC?',
      options: ['To improve classical encryption', 'To resist quantum attacks', 'To build quantum computers'],
      correctAnswer: 'To resist quantum attacks',
    },
    {
      question: 'How does lattice-based encryption work?',
      options: ['Uses quantum states to encrypt data', 'Uses mathematical lattice structures for security', 'Uses classical encryption techniques'],
      correctAnswer: 'Uses mathematical lattice structures for security',
    },
    {
      question: 'What makes hash-based cryptography quantum-resistant?',
      options: ['Its reliance on hashing functions immune to quantum attacks', 'It uses quantum keys for encryption', 'Its reliance on quantum mechanics'],
      correctAnswer: 'Its reliance on hashing functions immune to quantum attacks',
    },
    {
      question: 'Why is error correction important in PQC?',
      options: ['It fixes broken encryption systems', 'It ensures correct operation in noisy quantum environments', 'It increases encryption speed'],
      correctAnswer: 'It ensures correct operation in noisy quantum environments',
    },
    {
      question: 'What role do quantum-safe algorithms play in cybersecurity?',
      options: ['They protect data against quantum computer threats', 'They encrypt classical data faster', 'They work on quantum computers only'],
      correctAnswer: 'They protect data against quantum computer threats',
    },
    {
      question: 'What are hash-based signatures used for in PQC?',
      options: ['To prove the authenticity of quantum messages', 'To provide secure communication over quantum channels', 'To provide digital signatures resistant to quantum attacks'],
      correctAnswer: 'To provide digital signatures resistant to quantum attacks',
    },
    {
      question: 'How does a quantum-safe algorithm differ from a classical one?',
      options: ['It uses quantum computing for encryption', 'It’s designed to be secure against quantum computing threats', 'It uses a longer key size'],
      correctAnswer: 'It’s designed to be secure against quantum computing threats',
    },
    {
      question: 'Why is it important to begin PQC adoption today?',
      options: ['To prevent quantum threats in the future', 'To reduce encryption costs', 'To improve the speed of classical encryption'],
      correctAnswer: 'To prevent quantum threats in the future',
    }
  ];

  return (
    <div>
      <h1>Quantum Safe Practices</h1>
      <p>Learn about the adoption of quantum-safe cryptographic practices.</p>
      
      {/* Module Content */}
      <p>This module covers various quantum-safe cryptographic techniques, including lattice-based encryption and hash-based signatures.</p>
      
      {/* Quiz at the end of the module */}
      {!quizCompleted ? (
        <Quiz
          questions={questions}
          onComplete={() => setQuizCompleted(true)}
        />
      ) : (
        <p>Quiz Completed! Great job!</p>
      )}
    </div>
  );
};

export default QuantumSafePractices;
