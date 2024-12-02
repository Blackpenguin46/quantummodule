import React, { useState } from 'react';
import './QuantumSafePractices.css';

const QuantumSafePractices = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
  });

  const questions = [
    {
      question: 'What is Post-Quantum Cryptography (PQC)?',
      options: [
        'Cryptography immune to quantum attacks',
        'Quantum algorithms for classical encryption',
        'Quantum encryption for classical computers',
      ],
      correctAnswer: 'Cryptography immune to quantum attacks',
      id: 'q1',
    },
    {
      question: 'Which cryptographic approach is considered post-quantum?',
      options: ['Lattice-based cryptography', 'RSA', 'SHA-256'],
      correctAnswer: 'Lattice-based cryptography',
      id: 'q2',
    },
    // Add more questions here as needed
  ];

  const handleAnswerChange = (questionId, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  const handleSubmit = () => {
    let allCorrect = true;
    questions.forEach((question) => {
      if (answers[question.id] !== question.correctAnswer) {
        allCorrect = false;
      }
    });
    setQuizCompleted(true);
    alert(allCorrect ? 'All answers are correct! Great job!' : 'Some answers were incorrect. Try again!');
  };

  return (
    <div className="quantum-safe-practices">
      <h1>Quantum Safe Practices</h1>
      <p>Learn about the adoption of quantum-safe cryptographic practices and the importance of securing systems in the quantum era.</p>

      {/* Quiz Section */}
      <div className="quiz-section">
        <h2>Quiz: Test Your Knowledge on Quantum-Safe Cryptography</h2>
        <form>
          {questions.map((question) => (
            <div key={question.id} className="quiz-question">
              <p>{question.question}</p>
              {question.options.map((option, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name={question.id}
                    value={option}
                    checked={answers[question.id] === option}
                    onChange={() => handleAnswerChange(question.id, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}
          <button type="button" onClick={handleSubmit}>Submit Quiz</button>
        </form>
      </div>

      {/* Result after quiz is completed */}
      {quizCompleted && (
        <div className="quiz-result">
          <p>Quiz Completed! {answers.q1 === 'Cryptography immune to quantum attacks' && answers.q2 === 'Lattice-based cryptography' ? 'Great job! You got all the answers correct.' : 'Some answers were incorrect. Try again!'}</p>
        </div>
      )}
    </div>
  );
};

export default QuantumSafePractices;

