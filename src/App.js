import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import QuantumBasics from './modules/QuantumBasics';
import QuantumRisks from './modules/QuantumRisks';
import QuantumSafePractices from './modules/QuantumSafePractices';
import BusinessAdoption from './modules/BusinessAdoption';
import ClosingActivity from './modules/ClosingActivity';
import Sidebar from './components/Sidebar'; // Import Sidebar component
import './App.css'; // Import any global styles

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar /> {/* Sidebar is now included */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/quantum-basics" element={<QuantumBasics />} />
            <Route path="/quantum-risks" element={<QuantumRisks />} />
            <Route path="/quantum-safe-practices" element={<QuantumSafePractices />} />
            <Route path="/business-adoption" element={<BusinessAdoption />} />
            <Route path="/closing-activity" element={<ClosingActivity />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
