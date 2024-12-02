import React, { useState } from 'react';
import Quiz from '../components/Quiz';  // Adjust the path according to where your module is located


const QuantumBasics = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);

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
    {
      question: 'What is a quantum gate?',
      options: ['A device that operates on classical bits', 'A mathematical operation on qubits', 'A security measure'],
      correctAnswer: 'A mathematical operation on qubits',
    },
    {
      question: 'Which technology is NOT based on quantum mechanics?',
      options: ['Laser', 'Classical computer', 'MRI scanner'],
      correctAnswer: 'Classical computer',
    },
    {
      question: 'What is the Heisenberg Uncertainty Principle?',
      options: ['You cannot simultaneously know the position and momentum of a particle', 'The existence of a quantum state in a vacuum', 'Quantum energy is finite'],
      correctAnswer: 'You cannot simultaneously know the position and momentum of a particle',
    },
    {
      question: 'What does "quantum supremacy" mean?',
      options: ['A quantum computer surpasses a classical computer in all tasks', 'A quantum computer can solve specific problems faster than classical computers', 'A quantum computer replaces classical computing entirely'],
      correctAnswer: 'A quantum computer can solve specific problems faster than classical computers',
    },
    {
      question: 'What role does quantum cryptography play?',
      options: ['It’s used for creating quantum computers', 'It secures communications by leveraging quantum mechanics', 'It stores data in a quantum state'],
      correctAnswer: 'It secures communications by leveraging quantum mechanics',
    }
  ];

  return (
    <div>
      <h1>Quantum Basics</h1>
      <p>Learn the foundational concepts of quantum computing.</p>
      
      {/* Module Content */}
      <p>This module covers the basics of quantum computing, including key concepts like qubits, quantum gates, superposition, and entanglement.</p>
      
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

export default QuantumBasics;
