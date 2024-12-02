import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Use HashRouter for GitHub Pages
import LandingPage from './components/LandingPage'; // Ensure correct path
import QuantumBasics from './modules/QuantumBasics'; // Ensure correct path
import QuantumRisks from './modules/QuantumRisks'; // Ensure correct path
import QuantumSafePractices from './modules/QuantumSafePractices'; // Ensure correct path
import BusinessAdoption from './modules/BusinessAdoption'; // Ensure correct path
import ClosingActivity from './modules/ClosingActivity'; // Ensure correct path
import Sidebar from './components/Sidebar'; // Ensure correct path
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} /> {/* Landing Page */}
            <Route path="/quantum-basics" element={<QuantumBasics />} />
            <Route path="/quantum-risks" element={<QuantumRisks />} />
            <Route path="/quantum-safe-practices" element={<QuantumSafePractices />} />
            <Route path="/business-adoption" element={<BusinessAdoption />} />
            <Route path="/closing-activity" element={<ClosingActivity />} />
            {/* Removed fallback route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;







