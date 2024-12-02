import React, { useState } from 'react';
import './ClosingActivity.css';

const ClosingActivity = () => {
  const [selectedSystem, setSelectedSystem] = useState(null);
  const [quantumAlgorithm, setQuantumAlgorithm] = useState(null);
  const [isQuantumSafe, setIsQuantumSafe] = useState(false);
  const [simulationInProgress, setSimulationInProgress] = useState(false);

  const systems = ['RSA', 'ECC', 'AES'];
  const quantumAlgorithms = ['Shor\'s Algorithm', 'Grover\'s Algorithm'];

  const handleSystemChange = (e) => {
    setSelectedSystem(e.target.value);
  };

  const handleAlgorithmChange = (e) => {
    setQuantumAlgorithm(e.target.value);
  };

  const handleQuantumSafeToggle = () => {
    setIsQuantumSafe(!isQuantumSafe);
  };

  const handleSimulation = () => {
    if (selectedSystem && quantumAlgorithm) {
      setSimulationInProgress(true);
      setTimeout(() => {
        setSimulationInProgress(false);
      }, 3000);
    }
  };

  const renderSystemImage = (system) => {
    switch (system) {
      case 'RSA':
        return <img src="rsa.png" alt="RSA" className="system-image" />;
      case 'ECC':
        return <img src="ecc.png" alt="ECC" className="system-image" />;
      case 'AES':
        return <img src="aes.png" alt="AES" className="system-image" />;
      default:
        return null;
    }
  };

  const renderQuantumAlgorithmEffect = () => {
    if (selectedSystem && quantumAlgorithm) {
      return simulationInProgress ? (
        <p className="simulation-status">Simulating Quantum Attack...</p>
      ) : (
        <>
          <div className={`system-status ${isQuantumSafe ? 'secure' : 'vulnerable'}`}>
            {isQuantumSafe
              ? `${quantumAlgorithm} has been countered, and the ${selectedSystem} system is now secure!`
              : `${quantumAlgorithm} would break the ${selectedSystem} system. It's vulnerable to quantum attacks.`}
          </div>
          <div className="system-description">
            {isQuantumSafe ? (
              <p>The system is now protected using a quantum-safe cryptographic solution like Lattice-based encryption or Hybrid cryptography.</p>
            ) : (
              <p>The system is vulnerable, and quantum algorithms like Shor's could easily break it.</p>
            )}
          </div>
        </>
      );
    }
    return 'Please select a cryptographic system and quantum algorithm.';
  };

  return (
    <div className="closing-activity-container">
      <h1 className="activity-title">Quantum in Action: Visualizing Cryptographic Vulnerabilities</h1>
      <p className="activity-description">
        In this interactive activity, explore how quantum algorithms affect cryptographic systems and see how quantum-safe solutions can defend against these attacks.
      </p>

      <div className="selection-container">
        <div className="selection">
          <label>Choose a Cryptographic System:</label>
          <select value={selectedSystem} onChange={handleSystemChange}>
            <option value="">Select a System</option>
            {systems.map((system) => (
              <option key={system} value={system}>
                {system}
              </option>
            ))}
          </select>
        </div>

        <div className="selection">
          <label>Choose a Quantum Algorithm:</label>
          <select value={quantumAlgorithm} onChange={handleAlgorithmChange}>
            <option value="">Select an Algorithm</option>
            {quantumAlgorithms.map((algorithm) => (
              <option key={algorithm} value={algorithm}>
                {algorithm}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="quantum-safe-toggle">
        <label>Apply Quantum-Safe Solution:</label>
        <input
          type="checkbox"
          checked={isQuantumSafe}
          onChange={handleQuantumSafeToggle}
        />
      </div>

      {/* Visual Feedback and Simulation */}
      {selectedSystem && quantumAlgorithm && renderSystemImage(selectedSystem)}

      <div className="simulation-container">
        <button className="simulate-button" onClick={handleSimulation}>
          Simulate Quantum Attack
        </button>

        <div className="result-container">{renderQuantumAlgorithmEffect()}</div>
      </div>

      <div className="closing-note">
        <p>By understanding how quantum algorithms affect encryption, you can better prepare for a quantum-secure future.</p>
      </div>
    </div>
  );
};

export default ClosingActivity;
