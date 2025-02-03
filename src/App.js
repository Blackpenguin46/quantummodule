import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Use HashRouter for GitHub Pages
import LandingPage from './components/LandingPage';
import QuantumBasics from './modules/quantum-basics';
import QuantumRisks from './modules/quantum-risks';
import QuantumSafePractices from './modules/quantum-safe-practices';
import BusinessAdoption from './modules/business-adoption';
import ClosingActivity from './modules/closing-activity';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            {/* Landing Page */}
            <Route path="/" element={<LandingPage />} />
            {/* Quantum Basics */}
            <Route path="/quantum-basics" element={<QuantumBasics />} />
            {/* Quantum Risks */}
            <Route path="/quantum-risks" element={<QuantumRisks />} />
            {/* Quantum Safe Practices */}
            <Route path="/quantum-safe-practices" element={<QuantumSafePractices />} />
            {/* Business Adoption */}
            <Route path="/business-adoption" element={<BusinessAdoption />} />
            {/* Closing Activity */}
            <Route path="/closing-activity" element={<ClosingActivity />} />
            {/* Fallback Route */}
            <Route path="*" element={<p>Not Found</p>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;






