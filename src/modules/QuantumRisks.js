import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './QuantumRisks.css';

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

const QuantumRisks = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const questions = [
    {
      question: 'What risk does quantum computing pose to current cryptography?',
      options: [
        'It can bypass encryption algorithms like AES.',
        'It makes cryptographic keys insecure.',
        'It introduces computational errors.',
      ],
      correctAnswer: 'It makes cryptographic keys insecure.',
    },
    {
      question: 'Which quantum algorithm threatens RSA encryption?',
      options: ['Shor\'s algorithm', 'Grover\'s algorithm', 'Dijkstra\'s algorithm'],
      correctAnswer: 'Shor\'s algorithm',
    },
    {
      question: 'What is a key challenge in creating quantum-safe cryptography?',
      options: [
        'Quantum systems are too expensive.',
        'Quantum algorithms evolve rapidly.',
        'New algorithms must withstand both classical and quantum attacks.',
      ],
      correctAnswer: 'New algorithms must withstand both classical and quantum attacks.',
    },
    {
      question: 'How does quantum entanglement impact cybersecurity risks?',
      options: [
        'It increases secure communication.',
        'It enables eavesdropping on secure channels.',
        'It accelerates classical computations.',
      ],
      correctAnswer: 'It enables eavesdropping on secure channels.',
    },
    {
      question: 'What is the primary limitation of quantum threats today?',
      options: [
        'Quantum computers are not widely available.',
        'Quantum computers have no practical use cases.',
        'Quantum physics lacks formal definition.',
      ],
      correctAnswer: 'Quantum computers are not widely available.',
    },
  ];

  const sections = useMemo(
    () => [
      {
        title: 'Overview of Quantum Risks',
        content: (
          <div className="section-content">
            <p>
              Quantum computing introduces unprecedented risks to current cybersecurity systems. Its ability to solve
              complex mathematical problems, which classical computers cannot efficiently tackle, poses a significant
              threat to traditional encryption methods.
            </p>
          </div>
        ),
      },
      {
        title: 'Threats to Encryption',
        content: (
          <div className="section-content">
            <p>
              Quantum algorithms like Shor's algorithm can break public-key encryption, such as RSA and ECC. These
              encryption schemes secure our financial systems, emails, and internet transactions. Without quantum-safe
              alternatives, secure communication could become obsolete.
            </p>
          </div>
        ),
      },
      {
        title: 'Challenges in Mitigating Risks',
        content: (
          <div className="section-content">
            <ul>
              <li>
                <strong>Scalability:</strong> Creating quantum-resistant algorithms that remain secure under both
                classical and quantum attacks.
              </li>
              <li>
                <strong>Adoption:</strong> Transitioning legacy systems to quantum-safe protocols without disrupting
                operations.
              </li>
              <li>
                <strong>Cost:</strong> Implementing new cryptographic standards across industries.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: 'Quiz: Test Your Knowledge on Quantum Risks',
        content: <Quiz questions={questions} />,
      },
    ],
    [questions]
  );

  return (
    <div className="quantum-risks-container">
      <h1 className="module-title">Quantum Risks</h1>
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
        <button
          onClick={() => setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1))}
          disabled={currentSection === sections.length - 1}
        >
          Next
        </button>
      </div>
      <div className="module-navigation">
        <Link to="/quantum-basics" className="prev-module-button">
          Previous Module: Quantum Basics
        </Link>
        <div className="next-module-container">
          <Link to="/quantum-safe-practices" className="next-module-button">
            Next Module: Quantum Safe Practices
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuantumRisks;












