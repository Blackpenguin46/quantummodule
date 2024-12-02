import React, { useState } from 'react';

const Quiz = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
      onComplete(answers);
    }
  };

  if (showResults) {
    const correctAnswers = questions.filter(
      (q, index) => q.correctAnswer === answers[index]
    ).length;
    return (
      <div>
        <h2>Your score: {correctAnswers}/{questions.length}</h2>
      </div>
    );
  }

  const question = questions[currentQuestionIndex];

  return (
    <div>
      <h3>{question.question}</h3>
      <div>
        {question.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;

