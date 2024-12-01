import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import QuantumBasics from './modules/QuantumBasics';
import QuantumRisks from './modules/QuantumRisks';
import QuantumSafePractices from './modules/QuantumSafePractices';
import BusinessAdoption from './modules/BusinessAdoption';
import ClosingActivity from './modules/ClosingActivity';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/quantum-basics" component={QuantumBasics} />
        <Route path="/quantum-risks" component={QuantumRisks} />
        <Route path="/quantum-safe-practices" component={QuantumSafePractices} />
        <Route path="/business-adoption" component={BusinessAdoption} />
        <Route path="/closing-activity" component={ClosingActivity} />
      </Switch>
    </Router>
  );
}

export default App;
