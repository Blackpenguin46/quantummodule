import React, { useState } from 'react';
import './QuantumBasics.css';

const QuantumBasics = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
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

  const handleOptionSelect = (questionIndex, option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: option,
    }));
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
    setQuizSubmitted(true);
  };

  const handleRedo = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setScore(0);
  };

  return (
    <div className="quantum-basics-container">
      <h1 className="module-title">Quantum Basics</h1>
      <p className="module-description">
        Quantum computing represents a revolutionary shift in computation, leveraging the principles of quantum mechanics to solve problems that are infeasible for classical computers.
      </p>

      <div className="module-content">
        <h2>Key Concepts of Quantum Computing</h2>
        <p>
          Traditional computers process information as bits, which are in a state of either 0 or 1. Quantum computers, on the other hand, use *qubits*, which can exist in a superposition of 0 and 1 states simultaneously. This enables quantum computers to process vast amounts of information in parallel.
        </p>
        <h3>Core Quantum Principles</h3>
        <ul>
          <li>
            <strong>Superposition:</strong> A quantum particle, like an electron, can exist in multiple states at once. In quantum computing, this means qubits can perform multiple calculations simultaneously.
          </li>
          <li>
            <strong>Entanglement:</strong> When two particles become entangled, the state of one is instantly correlated with the state of the other, regardless of the distance between them. This allows for powerful interconnections in quantum systems.
          </li>
          <li>
            <strong>Interference:</strong> Quantum computers use interference to amplify correct solutions while canceling out incorrect ones, improving computational accuracy.
          </li>
        </ul>
        <h3>Applications of Quantum Computing</h3>
        <p>
          Quantum computers are poised to revolutionize fields such as cryptography, optimization, drug discovery, and artificial intelligence. For instance:
        </p>
        <ul>
          <li>
            <strong>Cryptography:</strong> Quantum algorithms like Shor's algorithm can break widely used encryption systems, such as RSA, by efficiently factoring large numbers.
          </li>
          <li>
            <strong>Optimization:</strong> Quantum systems can solve complex optimization problems in logistics, finance, and engineering faster than classical approaches.
          </li>
          <li>
            <strong>Quantum Simulation:</strong> Simulating quantum systems is essential for advancing material science, chemistry, and physics research.
          </li>
        </ul>
      </div>

      {/* Quiz Section */}
      <div className="quiz-section">
        <h2 className="quiz-title">Quiz: Test Your Knowledge</h2>
        {!quizSubmitted ? (
          <div className="quiz-questions">
            {questions.map((question, index) => (
              <div key={index} className="quiz-question">
                <h3 className="question-text">{`${index + 1}. ${question.question}`}</h3>
                <div className="options-container">
                  {question.options.map((option, i) => (
                    <button
                      key={i}
                      className={`quiz-option ${
                        selectedAnswers[index] === option ? 'selected' : ''
                      }`}
                      onClick={() => handleOptionSelect(index, option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button className="submit-button" onClick={handleSubmit}>
              Submit Quiz
            </button>
          </div>
        ) : (
          <div className="quiz-results">
            <h3 className="results-title">Quiz Completed!</h3>
            <p className="score-text">
              You scored {score} out of {questions.length}.
            </p>
            <button className="redo-button" onClick={handleRedo}>
              Redo Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuantumBasics;




