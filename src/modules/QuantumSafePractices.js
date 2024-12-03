import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './QuantumSafePractices.css';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (index, option) => {
    setSelectedAnswers({ ...selectedAnswers, [index]: option });
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = () => {
    const calculatedScore = questions.reduce(
      (total, question, index) => total + (selectedAnswers[index] === question.correctAnswer ? 1 : 0),
      0
    );
    setScore(calculatedScore);
    setQuizSubmitted(true);
  };

  const handleRedo = () => {
    setSelectedAnswers({});
    setScore(0);
    setQuizSubmitted(false);
    setCurrentQuestion(0);
  };

  return (
    <div className="quiz-section">
      {!quizSubmitted ? (
        <>
          <div className="quiz-progress">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <div className="quiz-question">
            <h3>{questions[currentQuestion].question}</h3>
            <div className="quiz-options">
              {questions[currentQuestion].options.map((option, i) => (
                <button
                  key={i}
                  className={`quiz-option ${selectedAnswers[currentQuestion] === option ? 'selected' : ''}`}
                  onClick={() => handleOptionSelect(currentQuestion, option)}
                  aria-pressed={selectedAnswers[currentQuestion] === option}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="quiz-navigation">
            <button onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
              Previous
            </button>
            {currentQuestion === questions.length - 1 ? (
              <button
                className="submit-button"
                onClick={handleSubmit}
                disabled={Object.keys(selectedAnswers).length !== questions.length}
              >
                Submit Quiz
              </button>
            ) : (
              <button onClick={handleNextQuestion}>
                Next
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="quiz-results">
          <h3>Quiz Completed!</h3>
          <p>Your score is {score} out of {questions.length}.</p>
          <button className="redo-button" onClick={handleRedo}>
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
};

const QuantumSafePractices = () => {
  const [currentSection, setCurrentSection] = useState(0);

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

  const sections = useMemo(
    () => [
      {
        title: 'Risks of Quantum Computing',
        content: (
          <div className="section-content">
            <p>
              Quantum computing represents a revolutionary shift in computation, leveraging the principles of quantum mechanics to solve problems that are infeasible for classical computers.
            </p>
            <p>
              Traditional computers process information as bits, which are in a state of either 0 or 1. Quantum computers, on the other hand, use <em>qubits</em>, which can exist in a superposition of 0 and 1 states simultaneously. This enables quantum computers to process vast amounts of information in parallel.
            </p>
          </div>
        ),
      },
      {
        title: 'Core Quantum Principles',
        content: (
          <div className="section-content">
            <div className="accordion">
              <div className="accordion-item">
                <h3 className="accordion-header">Superposition</h3>
                <div className="accordion-content">
                  A quantum particle, like an electron, can exist in multiple states at once. In quantum computing, this means qubits can perform multiple calculations simultaneously.
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header">Entanglement</h3>
                <div className="accordion-content">
                  When two particles become entangled, the state of one is instantly correlated with the state of the other, regardless of the distance between them. This allows for powerful interconnections in quantum systems.
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header">Interference</h3>
                <div className="accordion-content">
                  Quantum computers use interference to amplify correct solutions while canceling out incorrect ones, improving computational accuracy.
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: 'Applications of Quantum Computing',
        content: (
          <div className="section-content">
            <p>Quantum computers are poised to revolutionize fields such as cryptography, optimization, drug discovery, and artificial intelligence. For instance:</p>
            <ul>
              <li><strong>Cryptography:</strong> Quantum algorithms like Shor's algorithm can break widely used encryption systems, such as RSA, by efficiently factoring large numbers.</li>
              <li><strong>Optimization:</strong> Quantum systems can solve complex optimization problems in logistics, finance, and engineering faster than classical approaches.</li>
              <li><strong>Quantum Simulation:</strong> Simulating quantum systems is essential for advancing material science, chemistry, and physics research.</li>
            </ul>
          </div>
        ),
      },
      {
        title: 'Quiz: Test Your Knowledge',
        content: <Quiz questions={questions} />,
      },
    ],
    [questions]
  );

  return (
    <div className="quantum-basics-container">
      <h1 className="module-title">Quantum Safe Practices</h1>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
        ></div>
      </div>
      <div className="module-content">
        <h2 className="section-title">{sections[currentSection].title}</h2>
        {sections[currentSection].content}
      </div>
      <div className="navigation-buttons">
        <button onClick={() => setCurrentSection((prev) => Math.max(prev - 1, 0))} disabled={currentSection === 0}>
          Previous
        </button>
        <button onClick={() => setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1))} disabled={currentSection === sections.length - 1}>
          Next
        </button>
      </div>
      <div className="module-navigation">
        <Link to="/business-adoption" className="next-module-button">
          Next Module: Business Adoption
        </Link>
      </div>
    </div>
  );
};

export default QuantumSafePractices;


