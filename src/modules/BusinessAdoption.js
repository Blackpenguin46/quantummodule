import React, { useState } from 'react';
import './BusinessAdoption.css';

const BusinessAdoption = () => {
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: ''
  });

  const handleAnswerChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value
    });
  };

  const checkAnswers = () => {
    const correctAnswers = {
      q1: 'Strategic',
      q2: 'Healthcare',
      q3: 'Quantum Team',
      q4: 'Organizational readiness',
      q5: 'Cognitive shift'
    };

    let score = 0;
    for (const question in answers) {
      if (answers[question] === correctAnswers[question]) {
        score++;
      }
    }

    alert(`You scored ${score} out of 5!`);
  };

  return (
    <div className="quantum-basics-container">
      <h1 className="module-title">Business Adoption of Quantum Computing</h1>
      <p className="module-description">
        Quantum Computing is not only another “emerging computational technology” to be introduced into companies’ value chains, but it brings also specific challenges that are rooted in its complex, quantum nature, from a strategic perspective – what are the organizational infrastructure and needed processes? – as well as from a “business problem transformation” standpoint – what is the new cognitive paradigm to exploit quantum capabilities? – for designing algorithms.
      </p>
      <p className="module-description">
        Meanwhile, among many other industries, healthcare is one of the most promising markets that will benefit from quantum applications, for its variety of business challenges that rely on many variables, heavy streams of information, and digital processes.
      </p>

      <div className="quiz-section">
        <h2 className="quiz-title">Quiz</h2>
        <p>Answer the following questions to test your understanding:</p>

        <div className="quiz-question">
          <p className="question-text">1. What is a strategic challenge in adopting quantum computing in businesses?</p>
          <div className="options-container">
            <button
              className="quiz-option"
              name="q1"
              value="Technological"
              onClick={handleAnswerChange}
            >Technological</button>
            <button
              className="quiz-option"
              name="q1"
              value="Strategic"
              onClick={handleAnswerChange}
            >Strategic</button>
            <button
              className="quiz-option"
              name="q1"
              value="Operational"
              onClick={handleAnswerChange}
            >Operational</button>
          </div>
        </div>

        <div className="quiz-question">
          <p className="question-text">2. Which industry is highlighted as benefiting greatly from quantum applications?</p>
          <div className="options-container">
            <button
              className="quiz-option"
              name="q2"
              value="Healthcare"
              onClick={handleAnswerChange}
            >Healthcare</button>
            <button
              className="quiz-option"
              name="q2"
              value="Finance"
              onClick={handleAnswerChange}
            >Finance</button>
            <button
              className="quiz-option"
              name="q2"
              value="Education"
              onClick={handleAnswerChange}
            >Education</button>
          </div>
        </div>

        <div className="quiz-question">
          <p className="question-text">3. What is the proposed solution for overcoming quantum adoption challenges?</p>
          <div className="options-container">
            <button
              className="quiz-option"
              name="q3"
              value="Quantum Hub"
              onClick={handleAnswerChange}
            >Quantum Hub</button>
            <button
              className="quiz-option"
              name="q3"
              value="Quantum Team"
              onClick={handleAnswerChange}
            >Quantum Team</button>
            <button
              className="quiz-option"
              name="q3"
              value="Quantum Experts"
              onClick={handleAnswerChange}
            >Quantum Experts</button>
          </div>
        </div>

        <div className="quiz-question">
          <p className="question-text">4. What capability is needed in the healthcare industry for quantum adoption?</p>
          <div className="options-container">
            <button
              className="quiz-option"
              name="q4"
              value="Organizational readiness"
              onClick={handleAnswerChange}
            >Organizational readiness</button>
            <button
              className="quiz-option"
              name="q4"
              value="Technological readiness"
              onClick={handleAnswerChange}
            >Technological readiness</button>
            <button
              className="quiz-option"
              name="q4"
              value="Market readiness"
              onClick={handleAnswerChange}
            >Market readiness</button>
          </div>
        </div>

        <div className="quiz-question">
          <p className="question-text">5. What shift is necessary for businesses adopting quantum technologies?</p>
          <div className="options-container">
            <button
              className="quiz-option"
              name="q5"
              value="Cognitive shift"
              onClick={handleAnswerChange}
            >Cognitive shift</button>
            <button
              className="quiz-option"
              name="q5"
              value="Cultural shift"
              onClick={handleAnswerChange}
            >Cultural shift</button>
            <button
              className="quiz-option"
              name="q5"
              value="Technological shift"
              onClick={handleAnswerChange}
            >Technological shift</button>
          </div>
        </div>

        <button onClick={checkAnswers} className="quiz-option">Submit Quiz</button>
      </div>
    </div>
  );
};

export default BusinessAdoption;










