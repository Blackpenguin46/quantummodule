import React from 'react';
import { Typography, Container, Box, Paper } from '@mui/material';

function QuantumBasics() {
  return (
    <Container maxWidth="md">
      <Paper sx={{ padding: '2rem', marginBottom: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          Quantum Basics
        </Typography>
        <Typography variant="body1" paragraph>
          Quantum computing leverages properties of quantum mechanics to solve complex problems that traditional computers cannot. Unlike classical computing, which uses binary bits, quantum computing uses qubits. These qubits can represent multiple states at once due to superposition.
        </Typography>
        <Typography variant="body1" paragraph>
          Imagine quantum computing as a special umbrella that can adapt to cover multiple storms at once, whereas classical computing handles one scenario at a time.
        </Typography>
        <Typography variant="body1" paragraph>
          This new paradigm has the potential to disrupt many industries, especially sectors like cybersecurity, by challenging current encryption standards.
        </Typography>
      </Paper>
    </Container>
  );
}

export default QuantumBasics;


