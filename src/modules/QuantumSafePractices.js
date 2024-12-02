import React, { useState } from 'react';
import './QuantumSafePractices.css';

const QuantumSafePractices = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: 'What is the primary goal of post-quantum cryptography?',
      options: [
        'To optimize classical encryption methods',
        'To develop algorithms resistant to quantum computers',
        'To create new hardware for encryption',
      ],
      correctAnswer: 'To develop algorithms resistant to quantum computers',
    },
    {
      question: 'Which of the following is an example of a post-quantum cryptographic algorithm?',
      options: ['RSA', 'Lattice-based cryptography', 'AES'],
      correctAnswer: 'Lattice-based cryptography',
    },
    {
      question: 'What does quantum key distribution (QKD) enable?',
      options: [
        'Public key encryption',
        'Secure communication with quantum-resistant keys',
        'Breaking traditional cryptography',
      ],
      correctAnswer: 'Secure communication with quantum-resistant keys',
    },
    {
      question: 'Which is a potential challenge in implementing quantum-safe practices?',
      options: [
        'Lack of interest in the cryptographic community',
        'Compatibility with existing infrastructure',
        'No effective algorithms available',
      ],
      correctAnswer: 'Compatibility with existing infrastructure',
    },
    {
      question: 'What is one way quantum-safe practices can be implemented in the short term?',
      options: [
        'Using longer encryption keys in current systems',
        'Developing quantum computers',
        'Using only classical encryption methods',
      ],
      correctAnswer: 'Using longer encryption keys in current systems',
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
    <div className="quantum-safe-practices-container">
      <h1 className="module-title">Quantum Safe Practices</h1>
      <p className="module-description">
        As quantum computers evolve, their ability to break traditional encryption methods grows closer to reality. According to the **NIST Post-Quantum Cryptography Project**, the development of post-quantum cryptographic standards is crucial to safeguard data against quantum-enabled threats. These standards ensure long-term security and resilience for both public and private organizations.
      </p>

      <p className="module-description">
        <strong>Post-Quantum Cryptography (PQC)</strong><br />
        NIST has been leading efforts to standardize PQC algorithms that are resistant to attacks from both classical and quantum computers. For instance, lattice-based cryptography has emerged as a strong contender, offering security grounded in complex mathematical problems. The NIST standards aim to finalize a list of approved algorithms by the mid-2020s, ensuring the world can transition securely to quantum-resistant solutions.
      </p>

      <p className="module-description">
        <strong>Quantum Key Distribution (QKD)</strong><br />
        QKD is another approach recognized by NIST and international organizations. This method uses quantum mechanics to securely distribute encryption keys. While QKD is promising, NIST emphasizes the need for continued research into integrating QKD with classical systems and its scalability for widespread adoption.
      </p>

      <p className="module-description">
        <strong>Challenges in Transitioning to Quantum-Safe Practices</strong><br />
        NIST highlights several challenges, including:
        <ul>
          <li><strong>Infrastructure Compatibility:</strong> Retrofitting existing systems to support new algorithms can be costly and complex.</li>
          <li><strong>Interoperability:</strong> Ensuring seamless communication between quantum-resistant and legacy systems is critical during the transition period.</li>
          <li><strong>Implementation and Testing:</strong> Algorithms must be rigorously tested in real-world environments to ensure their resilience.</li>
        </ul>
      </p>

      <p className="module-description">
        <strong>Short-Term Solutions</strong><br />
        NIST recommends hybrid cryptographic models as an interim solution, combining classical encryption methods with quantum-resistant algorithms. Additionally, increasing key sizes for symmetric encryption, such as transitioning to AES-256, can bolster security while awaiting full adoption of post-quantum standards.
      </p>

      <p className="module-description">
        <strong>Action Steps for Organizations</strong><br />
        Organizations should begin auditing their cryptographic systems and planning for a phased transition to PQC. NIST's guidelines suggest collaborating with cybersecurity experts to assess risk levels, prioritize critical systems, and implement quantum-resistant algorithms early in the process.
      </p>

      {/* Quiz section */}
      <div className="quiz-section">
        <h2 className="quiz-title">Quiz: Test Your Knowledge of Quantum Safe Practices</h2>
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

export default QuantumSafePractices;


