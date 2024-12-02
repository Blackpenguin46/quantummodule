import React, { useState } from 'react';
import './QuantumRisks.css';

const QuantumRisks = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
  });

  const questions = [
    {
      question: 'Which quantum algorithm poses a risk to current encryption methods?',
      options: ['Shor’s Algorithm', 'RSA', 'AES'],
      correctAnswer: 'Shor’s Algorithm',
      id: 'q1',
    },
    {
      question: 'What does quantum computing potentially threaten?',
      options: ['Classical encryption systems', 'Supercomputers', 'Cloud storage'],
      correctAnswer: 'Classical encryption systems',
      id: 'q2',
    },
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
    <div className="quantum-risks">
      <h1>Quantum Risks</h1>
      <p>Explore the potential risks posed by quantum computing to current security systems. Quantum computing holds promise but also presents significant challenges, especially with respect to the vulnerabilities it creates for classical encryption systems.</p>

      {/* Quiz Section */}
      <div className="quiz-section">
        <h2>Quiz: Test Your Knowledge of Quantum Risks</h2>
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
          <p>Quiz Completed! {answers.q1 === 'Shor’s Algorithm' && answers.q2 === 'Classical encryption systems' ? 'Great job! You got all the answers correct.' : 'Some answers were incorrect. Try again!'}</p>
        </div>
      )}
    </div>
  );
};

export default QuantumRisks;



