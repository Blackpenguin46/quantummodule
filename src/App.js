import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Box } from '@mui/material';
import Sidebar from './Sidebar';
import LandingPage from './LandingPage';
import QuantumBasics from './QuantumBasics';
import QuantumRisks from './QuantumRisks';
import QuantumSafePractices from './QuantumSafePractices';
import BusinessAdoption from './BusinessAdoption';
import ClosingActivity from './ClosingActivity';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: '#f4f4f9',
            padding: '2rem',
          }}
        >
          <AppBar position="sticky" sx={{ marginBottom: '1rem' }}>
            <Toolbar>
              <Typography variant="h6">Quantum Learning Module</Typography>
            </Toolbar>
          </AppBar>
          <Container maxWidth="lg">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/quantum-basics" element={<QuantumBasics />} />
              <Route path="/quantum-risks" element={<QuantumRisks />} />
              <Route path="/quantum-safe-practices" element={<QuantumSafePractices />} />
              <Route path="/business-adoption" element={<BusinessAdoption />} />
              <Route path="/closing-activity" element={<ClosingActivity />} />
            </Routes>
          </Container>
        </Box>
      </Box>
    </Router>
  );
}

export default App;


