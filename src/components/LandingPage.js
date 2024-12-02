import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1>Welcome to the Quantum Learning Module!</h1>
      <p>Choose a module to get started.</p>

      <ul>
        <li><Link to="/quantum-basics">Quantum Basics</Link></li>
        <li><Link to="/quantum-risks">Quantum Risks</Link></li>
        <li><Link to="/quantum-safe-practices">Quantum Safe Practices</Link></li>
        <li><Link to="/business-adoption">Business Adoption</Link></li>
        <li><Link to="/closing-activity">Closing Activity</Link></li>
      </ul>
    </div>
  );
}

export default LandingPage;


