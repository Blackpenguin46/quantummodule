import React, { useState } from 'react';
import './QuantumBasics.css';

const QuantumBasics = () => {
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
      question: 'What is Quantum Computing?',
      options: ['Classical Computing', 'Quantum Mechanics', 'Artificial Intelligence'],
      correctAnswer: 'Quantum Mechanics',
      id: 'q1',
    },
    {
      question: 'What is a qubit?',
      options: ['A bit in classical computing', 'A unit of data storage', 'A quantum bit'],
      correctAnswer: 'A quantum bit',
      id: 'q2',
    },
    {
      question: 'What does superposition in quantum mechanics refer to?',
      options: ['A particle being in two states at once', 'The probability of an event', 'Quantum entanglement'],
      correctAnswer: 'A particle being in two states at once',
      id: 'q3',
    },
    {
      question: 'Which algorithm is most associated with quantum computing?',
      options: ['Shor\'s algorithm', 'RSA', 'AES'],
      correctAnswer: 'Shor\'s algorithm',
      id: 'q4',
    },
    {
      question: 'What is quantum entanglement?',
      options: ['Particles separated by large distances are linked', 'A property of classical systems', 'A type of quantum interference'],
      correctAnswer: 'Particles separated by large distances are linked',
      id: 'q5',
    }
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
    <div className="quantum-basics">
      <h1>Quantum Basics</h1>
      <p>Quantum computing is an advanced field of computing that leverages the principles of quantum mechanics to solve problems that are difficult or impossible for classical computers. Unlike classical bits, which can be in one of two states (0 or 1), quantum bits, or qubits, can be in a superposition of states, meaning they can be both 0 and 1 simultaneously.</p>

      <p>One of the fundamental principles of quantum mechanics that quantum computing takes advantage of is superposition. This allows quantum computers to process many possibilities at once, which gives them the potential to solve certain problems much faster than classical computers.</p>

      <p>Another key concept in quantum computing is quantum entanglement. This phenomenon occurs when particles become correlated in such a way that the state of one particle instantly affects the state of another, even if they are far apart. Entanglement is a crucial resource for many quantum algorithms, including those used in quantum cryptography.</p>

      <p>Quantum computers also rely on quantum gates, which are operations that manipulate qubits in specific ways. These gates perform mathematical operations on qubits and can be combined to create more complex quantum algorithms.</p>

      <p>Quantum computing is still in its early stages, but it promises to revolutionize fields such as cryptography, optimization, and materials science. As we continue to develop quantum computers, the potential applications are vast and could have a profound impact on various industries.</p>

      {/* Quiz Section */}
      <div className="quiz-section">
        <h2>Quiz: Test Your Knowledge of Quantum Basics</h2>
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
          <p>Quiz Completed! {answers.q1 === 'Quantum Mechanics' && answers.q2 === 'A quantum bit' && answers.q3 === 'A particle being in two states at once' && answers.q4 === 'Shor\'s algorithm' && answers.q5 === 'Particles separated by large distances are linked' ? 'Great job! You got all the answers correct.' : 'Some answers were incorrect. Try again!'}</p>
        </div>
      )}
    </div>
  );
};

export default QuantumBasics;


