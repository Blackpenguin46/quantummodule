import React, { useState } from 'react';
import Quiz from './Quiz';

const BusinessAdoption = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      question: 'Why should businesses adopt quantum-safe practices?',
      options: ['To prepare for quantum threats to encryption', 'To increase their computing power', 'To enhance their cybersecurity tools'],
      correctAnswer: 'To prepare for quantum threats to encryption',
    },
    {
      question: 'What is the role of a business in PQC adoption?',
      options: ['Implementing quantum-safe cryptography systems', 'Building quantum computers', 'Running quantum algorithms'],
      correctAnswer: 'Implementing quantum-safe cryptography systems',
    },
    {
      question: 'How can quantum computing impact business operations?',
      options: ['By making classical computers obsolete', 'By disrupting data privacy and security', 'By offering more storage space'],
      correctAnswer: 'By disrupting data privacy and security',
    },
    {
      question: 'What is the first step for a business in adopting quantum-safe practices?',
      options: ['Conducting a quantum readiness assessment', 'Purchasing quantum computers', 'Training employees on quantum programming'],
      correctAnswer: 'Conducting a quantum readiness assessment',
    },
    {
      question: 'How does quantum computing affect financial sectors?',
      options: ['It increases transaction speeds', 'It poses a risk to current encryption methods used in financial systems', 'It replaces blockchain'],
      correctAnswer: 'It poses a risk to current encryption methods used in financial systems',
    },
    {
      question: 'What is one potential use of quantum computing in business?',
      options: ['Advanced machine learning algorithms', 'Creating quantum-resistant encryption methods', 'Replacing traditional computers'],
      correctAnswer: 'Advanced machine learning algorithms',
    },
    {
      question: 'Why is the transition to quantum-safe cryptography important for businesses?',
      options: ['To prepare for quantum computer hacking threats', 'To improve customer service', 'To integrate artificial intelligence'],
      correctAnswer: 'To prepare for quantum computer hacking threats',
    },
    {
      question: 'Which area of business will be most impacted by quantum computing?',
      options: ['Customer support', 'Cybersecurity and data protection', 'Marketing'],
      correctAnswer: 'Cybersecurity and data protection',
    },
    {
      question: 'How can businesses future-proof their cybersecurity infrastructure?',
      options: ['By adopting quantum-safe encryption algorithms now', 'By relying on traditional encryption methods', 'By ignoring quantum developments'],
      correctAnswer: 'By adopting quantum-safe encryption algorithms now',
    },
    {
      question: 'Which industry should lead in adopting quantum-safe cryptography?',
      options: ['Healthcare', 'Financial Services', 'Retail'],
      correctAnswer: 'Financial Services',
    }
  ];

  return (
    <div>
      <h1>Business Adoption</h1>
      <p>Explore how businesses can adopt quantum-safe practices.</p>
      
      {/* Module Content */}
      <p>This module covers strategies businesses can use to adopt quantum-safe cryptography to protect against quantum threats.</p>
      
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

export default BusinessAdoption;

