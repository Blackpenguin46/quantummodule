import React, { useState } from 'react';
import './BusinessAdoption.css';

const BusinessAdoption = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
  });

  const questions = [
    {
      question: 'What is the main concern for businesses adopting quantum computing?',
      options: [
        'Cost of hardware',
        'Security vulnerabilities from quantum threats',
        'Lack of trained professionals',
      ],
      correctAnswer: 'Security vulnerabilities from quantum threats',
      id: 'q1',
    },
    {
      question: 'What is one of the key benefits of adopting quantum-safe practices in business?',
      options: [
        'Increased encryption strength against quantum threats',
        'Reduction in quantum computing costs',
        'Faster communication over networks',
      ],
      correctAnswer: 'Increased encryption strength against quantum threats',
      id: 'q2',
    },
    {
      question: 'Which industry can benefit the most from quantum computing?',
      options: ['Healthcare', 'Entertainment', 'Retail'],
      correctAnswer: 'Healthcare',
      id: 'q3',
    },
    {
      question: 'Which quantum computing challenge is businesses most concerned with?',
      options: ['Developing quantum algorithms', 'Transitioning from classical to quantum systems', 'Quantum hardware availability'],
      correctAnswer: 'Transitioning from classical to quantum systems',
      id: 'q4',
    },
    {
      question: 'What is essential for businesses to secure their systems in the quantum era?',
      options: [
        'Investing in quantum-resistant cryptography',
        'Reducing IT budgets',
        'Implementing faster classical encryption systems',
      ],
      correctAnswer: 'Investing in quantum-resistant cryptography',
      id: 'q5',
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
    alert(allCorrect ? 'All answers are correct! Great job!' : 'Some answers are incorrect. Try again!');
  };

  return (
    <div className="business-adoption">
      <h1>Business Adoption of Quantum Computing</h1>
      <p>Learn how businesses are adopting quantum computing and the challenges and opportunities they face. Quantum computing is revolutionizing industries, but it also presents new challenges, especially around security and the transition from classical to quantum systems.</p>

      {/* Quiz Section */}
      <div className="quiz-section">
        <h2>Quiz: Test Your Knowledge of Business Adoption of Quantum Computing</h2>
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
          <p>Quiz Completed! {answers.q1 === 'Security vulnerabilities from quantum threats' && answers.q2 === 'Increased encryption strength against quantum threats' && answers.q3 === 'Healthcare' && answers.q4 === 'Transitioning from classical to quantum systems' && answers.q5 === 'Investing in quantum-resistant cryptography' ? 'Great job! You got all the answers correct.' : 'Some answers were incorrect. Try again!'}</p>
        </div>
      )}
    </div>
  );
};

export default BusinessAdoption;




