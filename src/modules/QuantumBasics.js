import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './QuantumBasics.css';

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

const QuantumBasics = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const questions = [
    {
      question: 'What is Quantum Computing?',
      options: ['Classical Computing', 'Quantum Mechanics', 'Artificial Intelligence'],
      correctAnswer: 'Quantum Mechanics',
    },
    {
      question: 'What is a qubit?',
      options: ['A classical bit', 'A quantum bit', 'A unit of data storage'],
      correctAnswer: 'A quantum bit',
    },
    {
      question: 'What does superposition refer to?',
      options: ['A particle in one state', 'A particle in two states at once', 'Quantum entanglement'],
      correctAnswer: 'A particle in two states at once',
    },
    {
      question: 'What is entanglement in quantum mechanics?',
      options: ['Particles that interact with light', 'Particles linked at a distance', 'A type of noise'],
      correctAnswer: 'Particles linked at a distance',
    },
    {
      question: 'How can quantum computers outperform classical ones?',
      options: [
        'By faster electricity flow',
        'By leveraging quantum principles like superposition',
        'By increasing the CPU speed',
      ],
      correctAnswer: 'By leveraging quantum principles like superposition',
    },
  ];

  const sections = useMemo(
    () => [
      {
        title: 'Introduction to Quantum Computing',
        content: (
          <div className="section-content">
            <p>
              Quantum computing leverages quantum mechanics to solve complex problems far beyond the capability of classical computers. At its core are qubits, which unlike classical bits, can represent both 0 and 1 simultaneously through superposition.
            </p>
          </div>
        ),
      },
      {
        title: 'Core Principles of Quantum Mechanics',
        content: (
          <div className="section-content">
            <p>Quantum mechanics underpins quantum computing and includes principles like:</p>
            <ul>
              <li><strong>Superposition:</strong> Qubits can exist in multiple states, allowing parallel computation.</li>
              <li><strong>Entanglement:</strong> Particles can be linked across distances, enabling powerful correlations.</li>
              <li><strong>Interference:</strong> Quantum systems can amplify correct answers and cancel out incorrect ones.</li>
            </ul>
          </div>
        ),
      },
      {
        title: 'Applications of Quantum Computing',
        content: (
          <div className="section-content">
            <p>
              Quantum computers have the potential to revolutionize various fields, including:
            </p>
            <ul>
              <li><strong>Cryptography:</strong> Breaking encryption systems like RSA with Shor's algorithm.</li>
              <li><strong>Optimization:</strong> Solving complex logistics or financial problems.</li>
              <li><strong>Drug Discovery:</strong> Modeling molecules and reactions at a quantum level.</li>
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
      <h1 className="module-title">Quantum Basics</h1>
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
        <Link to="/" className="prev-module-button">Return to Main Page</Link>
      </div>
    </div>
  );
};

export default QuantumBasics;






