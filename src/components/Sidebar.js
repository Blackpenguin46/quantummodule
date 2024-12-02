import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Landing Page</Link></li> {/* Link to the main landing page */}
        <li><Link to="/quantum-basics">Quantum Basics</Link></li>
        <li><Link to="/quantum-risks">Quantum Risks</Link></li>
        <li><Link to="/quantum-safe-practices">Quantum Safe Practices</Link></li>
        <li><Link to="/business-adoption">Business Adoption</Link></li>
        <li><Link to="/closing-activity">Closing Activity</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;

