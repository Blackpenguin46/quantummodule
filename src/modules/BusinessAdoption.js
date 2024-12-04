import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './BusinessAdoption.css';

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

const BusinessAdoption = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const questions = [
    {
      question: 'What is a key benefit of quantum computing for businesses?',
      options: ['Higher electricity usage', 'Efficient optimization', 'Slower computation speeds'],
      correctAnswer: 'Efficient optimization',
    },
    {
      question: 'How does quantum computing benefit supply chain management?',
      options: ['Improves optimization and reduces costs', 'Slows down processes', 'Reduces storage needs'],
      correctAnswer: 'Improves optimization and reduces costs',
    },
    {
      question: 'What industries benefit the most from quantum computing?',
      options: ['Finance, logistics, and healthcare', 'Retail, farming, and tourism', 'Transportation only'],
      correctAnswer: 'Finance, logistics, and healthcare',
    },
    {
      question: 'Which area of business innovation can quantum computing enhance?',
      options: ['Developing new materials', 'Traditional bookkeeping', 'Manual labor'],
      correctAnswer: 'Developing new materials',
    },
    {
      question: 'What is a competitive advantage of adopting quantum computing early?',
      options: ['Higher computation costs', 'Gaining a leadership position', 'Slower innovation'],
      correctAnswer: 'Gaining a leadership position',
    },
  ];

  const sections = useMemo(
    () => [
      {
        title: 'Introduction to Business Adoption of Quantum Computing',
        content: (
          <div className="section-content">
            <p>
              Quantum computing is transforming the business landscape, offering unprecedented opportunities to solve complex problems efficiently. By leveraging quantum computing, businesses can achieve competitive advantages, innovate rapidly, and optimize their operations in ways previously thought impossible.
            </p>
          </div>
        ),
      },
      {
        title: 'Business Benefits of Quantum Computing',
        content: (
          <div className="section-content">
            <ul>
              <li><strong>Optimization:</strong> Quantum systems enhance decision-making in supply chain management, logistics, and resource allocation.</li>
              <li><strong>Innovation:</strong> Businesses can develop new materials, drugs, and solutions using quantum simulations.</li>
              <li><strong>Competitive Advantage:</strong> Early adopters of quantum computing can establish themselves as leaders in their industries.</li>
              <li><strong>Data Security:</strong> With post-quantum cryptography, businesses can protect sensitive information and customer data.</li>
            </ul>
          </div>
        ),
      },
      {
        title: 'Industries Transforming with Quantum Computing',
        content: (
          <div className="section-content">
            <p>
              Quantum computing is driving advancements across various industries:
            </p>
            <ul>
              <li><strong>Finance:</strong> Enhances risk analysis and portfolio optimization.</li>
              <li><strong>Healthcare:</strong> Accelerates drug discovery and improves diagnostic tools.</li>
              <li><strong>Logistics:</strong> Optimizes routes, inventory, and supply chains.</li>
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
      <h1 className="module-title">Business Adoption of Quantum Computing</h1>
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
        <Link to="/quantum-safe-practices" className="prev-module-button">Previous Module: Quantum Safe Practices</Link>
        <div className="next-module-container">
          <Link to="/closing-activity" className="next-module-button">Next Module: Closing Activity</Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessAdoption;












