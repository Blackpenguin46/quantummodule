import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        {/* Route to the landing page */}
        <li>
          <NavLink to="/" exact activeClassName="active">
            Quantum Learning Module
          </NavLink>
        </li>
        {/* Other modules */}
        <li>
          <NavLink to="/quantum-basics" activeClassName="active">
            Quantum Basics
          </NavLink>
        </li>
        <li>
          <NavLink to="/quantum-risks" activeClassName="active">
            Quantum Risks
          </NavLink>
        </li>
        <li>
          <NavLink to="/quantum-safe-practices" activeClassName="active">
            Quantum Safe Practices
          </NavLink>
        </li>
        <li>
          <NavLink to="/business-adoption" activeClassName="active">
            Business Adoption
          </NavLink>
        </li>
        <li>
          <NavLink to="/closing-activity" activeClassName="active">
            Closing Activity
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;



