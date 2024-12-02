import React, { useState } from 'react';
import './QuantumRisks.css';

const QuantumRisks = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: 'What algorithm can quantum computers use to factor large numbers?',
      options: ['Grover\'s algorithm', 'Shor\'s algorithm', 'RSA'],
      correctAnswer: 'Shor\'s algorithm',
    },
    {
      question: 'Which cryptographic system is most affected by quantum computing?',
      options: ['Symmetric cryptography', 'Elliptic Curve Cryptography (ECC)', 'Quantum encryption'],
      correctAnswer: 'Elliptic Curve Cryptography (ECC)',
    },
    {
      question: 'What does Grover\'s algorithm reduce in symmetric cryptography?',
      options: ['Security level', 'Key length', 'Search time'],
      correctAnswer: 'Security level',
    },
    {
      question: 'What is the main challenge in transitioning to quantum-resistant cryptography?',
      options: ['Investment in research', 'Finding quantum-resistant algorithms', 'Updating existing infrastructure'],
      correctAnswer: 'Updating existing infrastructure',
    },
    {
      question: 'Which aspect of quantum computing poses a significant threat to data privacy?',
      options: ['Data decryption capability', 'Quantum key distribution', 'Quantum tunneling'],
      correctAnswer: 'Data decryption capability',
    },
  ];

  const handleOptionClick = (questionIndex, option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: option,
    });
  };

  const handleSubmit = () => {
    let correctAnswersCount = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctAnswersCount += 1;
      }
    });
    setScore(correctAnswersCount);
    setQuizCompleted(true);
  };

  return (
    <div className="quantum-risks-container">
      <h1 className="module-title">Quantum Risks</h1>
      <p className="module-description">
        Quantum computing offers transformative possibilities but also introduces significant risks, especially to current cryptographic practices. Understanding these risks is essential to prepare for a quantum-secure future.
      </p>

      <div className="module-content">
        <h2>Key Risks of Quantum Computing</h2>
        <p>
          The rapid advancement of quantum technology poses several challenges, particularly in the realm of cybersecurity. Here are some key risks:
        </p>
        <ul>
          <li>
            <strong>Breaking Classical Encryption:</strong> Algorithms like Shor's can efficiently factorize large numbers, threatening the security of RSA and ECC, which underpin most modern encryption systems.
          </li>
          <li>
            <strong>Impact on Symmetric Cryptography:</strong> Grover's algorithm halves the effective key length of symmetric algorithms, making 256-bit keys necessary for future-proof encryption.
          </li>
          <strong>Data Privacy Risks:</strong> Encrypted data intercepted today can be stored and decrypted in the future by quantum computers, compromising long-term confidentiality.
        </ul>

        <h3>Challenges in Transitioning to Quantum-Resistant Cryptography</h3>
        <ul>
          <li>
            <strong>Infrastructure Updates:</strong> Many organizations rely on legacy systems that are difficult to update, creating vulnerabilities during the transition.
          </li>
          <li>
            <strong>Standardization:</strong> The development and standardization of quantum-resistant algorithms take time, and adoption across industries can be slow.
          </li>
          <li>
            <strong>Cost:</strong> Upgrading to quantum-safe systems requires significant investment in research, development, and deployment.
          </li>
        </ul>

        <h3>Mitigating Quantum Risks</h3>
        <p>
          Preparing for the quantum era involves adopting a proactive approach:
        </p>
        <ul>
          <li>
            Begin transitioning to <strong>Post-Quantum Cryptography (PQC)</strong> standards as they are finalized by organizations like NIST.
          </li>
          <li>
            Implement hybrid cryptographic solutions that combine classical and quantum-resistant algorithms.
          </li>
          <li>
            Increase awareness of quantum risks and provide training to cybersecurity professionals to address emerging challenges.
          </li>
        </ul>
      </div>

      {/* Quiz Section */}
      <div className="quiz-section">
        <h2 className="quiz-title">Quiz: Test Your Knowledge of Quantum Risks</h2>
        {!quizCompleted ? (
          <div className="quiz-question">
            {questions.map((question, index) => (
              <div key={index} className="question-container">
                <h3 className="question-text">{question.question}</h3>
                <div className="options-container">
                  {question.options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      className={`quiz-option ${
                        selectedAnswers[index] === option
                          ? option === question.correctAnswer
                            ? 'correct'
                            : 'incorrect'
                          : ''
                      }`}
                      onClick={() => handleOptionClick(index, option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button className="submit-button" onClick={handleSubmit}>Submit</button>
          </div>
        ) : (
          <div className="quiz-completed">
            <p>Quiz Completed! You scored {score} out of {questions.length}!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuantumRisks;





