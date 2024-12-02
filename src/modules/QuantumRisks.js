import React, { useState } from 'react';
import Quiz from '../components/Quiz';  // Adjust the path according to where your module is located


const QuantumRisks = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);

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
    {
      question: 'Which cryptographic method could be broken by a quantum computer?',
      options: ['RSA', 'AES', 'Elliptic Curve Cryptography'],
      correctAnswer: 'RSA',
    },
    {
      question: 'How could quantum computers impact cybersecurity?',
      options: ['By breaking current encryption methods', 'By making classical systems more secure', 'By encrypting data faster'],
      correctAnswer: 'By breaking current encryption methods',
    },
    {
      question: 'What is quantum key distribution?',
      options: ['A method to transfer quantum bits securely', 'A technique for faster encryption', 'A form of quantum cryptography for secure communication'],
      correctAnswer: 'A form of quantum cryptography for secure communication',
    },
    {
      question: 'What are the key vulnerabilities quantum computers might exploit?',
      options: ['Classical encryption protocols', 'Network latency', 'Bandwidth limitations'],
      correctAnswer: 'Classical encryption protocols',
    },
    {
      question: 'Which quantum concept is central to quantum hacking?',
      options: ['Quantum entanglement', 'Quantum tunneling', 'Superposition'],
      correctAnswer: 'Quantum entanglement',
    },
    {
      question: 'What is the main concern about quantum computers and privacy?',
      options: ['They could break encryption algorithms that secure personal data', 'They will make data more private', 'They will encrypt all data automatically'],
      correctAnswer: 'They could break encryption algorithms that secure personal data',
    },
    {
      question: 'Which encryption system is most at risk from quantum computing?',
      options: ['RSA', 'AES', 'SHA-256'],
      correctAnswer: 'RSA',
    },
    {
      question: 'What is a potential benefit of quantum-safe cryptography?',
      options: ['It uses classical encryption methods', 'It’s immune to quantum hacking threats', 'It’s faster than traditional encryption methods'],
      correctAnswer: 'It’s immune to quantum hacking threats',
    }
  ];

  return (
    <div>
      <h1>Quantum Risks</h1>
      <p>Explore the potential risks posed by quantum computing to current security systems.</p>
      
      {/* Module Content */}
      <p>This module explores the risks quantum computing poses to cybersecurity and encryption protocols, and discusses potential threats to current systems.</p>
      
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

export default QuantumRisks;

