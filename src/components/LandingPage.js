import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1>Welcome to the Quantum Computing Training Module</h1>
      <p>This course will teach you the fundamentals of Quantum Computing and how it impacts businesses and security.</p>
      
      <ul>
        <li><Link to="/quantum-basics">Module 1: Quantum Computing Basics</Link></li>
        <li><Link to="/quantum-risks">Module 2: Quantum Computing Risks</Link></li>
        <li><Link to="/quantum-safe-practices">Module 3: Quantum-Safe Practices</Link></li>
        <li><Link to="/business-adoption">Module 4: Business Adoption</Link></li>
        <li><Link to="/closing-activity">Closing Activity</Link></li>
        <li><Link to="/quiz">Take the Quiz</Link></li>
      </ul>
    </div>
  );
}

export default LandingPage;
