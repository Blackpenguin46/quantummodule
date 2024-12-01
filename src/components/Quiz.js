import React, { useState } from 'react';

function Quiz() {
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (!answered) {
      setAnswered(true);
      if (isCorrect) {
        setScore(score + 1);
      }
    }
  };

  return (
    <div>
      <h1>Quiz: Test Your Knowledge</h1>
      <p>What is a qubit?</p>
      <button onClick={() => handleAnswer(true)}>A quantum bit</button>
      <button onClick={() => handleAnswer(false)}>A classical bit</button>

      <p>Current score: {score}</p>
    </div>
  );
}

export default Quiz;
