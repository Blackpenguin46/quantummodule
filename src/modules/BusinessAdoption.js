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
        Quantum computing represents a major shift in computational power, with the potential to revolutionize industries by solving complex problems that traditional computers cannot. Its integration into business strategies requires not only technological development but also a deep understanding of how to leverage its capabilities for business transformation.
      </p>
      <p className="module-description">
        The adoption of quantum computing in business poses a range of challenges, both technical and organizational. According to the **National Institute of Standards and Technology (NIST)**, businesses need to approach quantum integration strategically by preparing their infrastructure, processes, and workforce for the complexities of quantum technology.
      </p>

      <p className="module-description">
        Key aspects of business adoption include:
        <ul>
          <li><strong>Strategic Planning:</strong> Quantum computing is not just a technological upgrade; it requires a comprehensive strategy that aligns with the company's long-term goals. This involves assessing the potential impact on existing business models and identifying areas where quantum algorithms can offer a competitive advantage.</li>
          <li><strong>Organizational Readiness:</strong> Businesses must ensure that their organizational structures are equipped to handle the complexity of quantum computing. This includes building a skilled workforce and fostering an environment conducive to innovation.</li>
          <li><strong>Cognitive Shift:</strong> Quantum computing requires a fundamental shift in how problems are approached. This includes moving away from traditional models of computation to a new paradigm where quantum algorithms are used to process information in ways that classical systems cannot.</li>
        </ul>
      </p>

      <p className="module-description">
        Among industries, **healthcare** stands out as one of the most promising sectors to benefit from quantum computing applications. Quantum computing could revolutionize healthcare by enabling faster drug discovery, improving diagnostic algorithms, and optimizing supply chains. For instance, **quantum-enhanced machine learning** could be used to identify patterns in vast datasets, aiding in personalized medicine and advanced research.
      </p>

      <p className="module-description">
        **Challenges to Business Adoption of Quantum Computing**:
        While the potential for quantum computing is vast, businesses face significant barriers to adoption. Some of these include:
        <ul>
          <li><strong>High Initial Investment:</strong> The cost of developing quantum computing infrastructure, both in terms of hardware and talent, can be prohibitive for many organizations.</li>
          <li><strong>Quantum Software Development:</strong> Developing software that can effectively leverage quantum computing power requires specialized knowledge, and the ecosystem for quantum software is still emerging.</li>
          <li><strong>Integration with Existing Systems:</strong> Integrating quantum technologies with current systems presents challenges, as it requires new architectures and potentially rethinking entire business processes.</li>
        </ul>
      </p>

      <p className="module-description">
        **Strategies for Overcoming Adoption Challenges**:
        To address these challenges, businesses should consider a phased approach to quantum adoption:
        <ul>
          <li><strong>Collaboration with Quantum Experts:</strong> Partnering with quantum computing firms or academic institutions can help businesses gain access to expertise and accelerate the adoption process.</li>
          <li><strong>Hybrid Quantum-Classical Solutions:</strong> In the short term, companies can integrate quantum computing with classical systems. This hybrid approach enables businesses to use quantum computing for specific tasks while maintaining traditional systems for other operations.</li>
          <li><strong>Talent Development:</strong> Nurturing a workforce skilled in quantum computing is essential for ensuring long-term success. This involves not only hiring experts but also providing training for existing employees to understand the new computational paradigms.</li>
        </ul>
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











