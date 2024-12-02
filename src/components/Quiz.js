import React, { useState } from 'react';
import './Quiz.css';

const Quiz = ({ moduleName, questions }) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelectAnswer = (index, answerIndex) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[index] = answerIndex;
    setSelectedAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correct) score += 1;
    });
    setScore(score);
    setSubmitted(true);
  };

  const handleRetry = () => {
    setSelectedAnswers([]);
    setSubmitted(false);
    setScore(0);
  };

  const percentage = submitted ? ((score / questions.length) * 100).toFixed(2) : null;

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2>{moduleName} Quiz</h2>
        <p>Test your knowledge on {moduleName.toLowerCase()} with this quiz!</p>
      </div>
      
      <div className="quiz-content">
        {questions.map((q, index) => (
          <div key={index} className="question">
            <div className="question-text">{q.question}</div>
            <ul className="answer-options">
              {q.answers.map((answer, i) => (
                <li
                  key={i}
                  className={`answer-option ${submitted ? (i === q.correct ? 'correct' : (i === selectedAnswers[index] ? 'incorrect' : '')) : ''}`}
                  onClick={() => !submitted && handleSelectAnswer(index, i)}
                >
                  {answer}
                </li>
              ))}
            </ul>
          </div>
        ))}
        
        {!submitted && <button className="submit-button" onClick={handleSubmit}>Submit</button>}
        
        {submitted && (
          <div className="results">
            <p>You scored: <span className="score">{score}/{questions.length}</span></p>
            <p>Your percentage: <span className="score">{percentage}%</span></p>
            <button className="retry-button" onClick={handleRetry}>Try Again</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;


