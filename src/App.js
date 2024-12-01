import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import QuantumBasics from './modules/QuantumBasics';
import QuantumRisks from './modules/QuantumRisks';
import QuantumSafePractices from './modules/QuantumSafePractices';
import BusinessAdoption from './modules/BusinessAdoption';
import ClosingActivity from './modules/ClosingActivity';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quantum-basics" element={<QuantumBasics />} />
        <Route path="/quantum-risks" element={<QuantumRisks />} />
        <Route path="/quantum-safe-practices" element={<QuantumSafePractices />} />
        <Route path="/business-adoption" element={<BusinessAdoption />} />
        <Route path="/closing-activity" element={<ClosingActivity />} />
      </Routes>
    </Router>
  );
}

export default App;
