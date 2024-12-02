import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          {/* Change this link to point to the root "/" for the main page */}
          <li><Link to="/">Quantum Learning Module</Link></li>  
          <li><Link to="/quantum-basics">Quantum Basics</Link></li>
          <li><Link to="/quantum-risks">Quantum Risks</Link></li>
          <li><Link to="/quantum-safe-practices">Quantum Safe Practices</Link></li>
          <li><Link to="/business-adoption">Business Adoption</Link></li>
          <li><Link to="/closing-activity">Closing Activity</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
