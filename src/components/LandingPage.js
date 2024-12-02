import React from 'react';
import './LandingPage.css'; // Make sure to include your custom CSS file for styling

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-page-header">
        <h1>Welcome to the Quantum Learning Module</h1>
        <p>Your guide to understanding Quantum Computing and its impact on the future.</p>
      </div>

      <section className="overview">
        <h2>What is Quantum Computing?</h2>
        <p>
          Quantum computing is an advanced type of computation that takes advantage of the strange, counterintuitive properties of quantum mechanics. Unlike classical computers, which process information in bits (0 or 1), quantum computers use qubits that can exist in multiple states at once. This unique property allows quantum computers to solve certain complex problems much faster than traditional computers.
        </p>
        <p>
          Quantum computing is expected to revolutionize various industries, including cryptography, medicine, artificial intelligence, and materials science. With the ability to solve problems that are practically impossible for classical computers, it has the potential to transform the world as we know it.
        </p>
      </section>

      <section className="future-impact">
        <h2>How Will Quantum Computing Shape the Future?</h2>
        <p>
          As quantum computers become more powerful and accessible, they will unlock new possibilities for innovation. Some key areas where quantum computing will have a significant impact include:
        </p>
        <ul>
          <li><strong>Cryptography:</strong> Quantum computers could break traditional encryption methods, prompting the need for new, quantum-resistant algorithms.</li>
          <li><strong>Healthcare:</strong> Quantum simulations could lead to breakthroughs in drug discovery and disease modeling.</li>
          <li><strong>Artificial Intelligence:</strong> Quantum computers could enhance machine learning algorithms, leading to faster and more accurate predictions.</li>
          <li><strong>Optimization Problems:</strong> Quantum computing could provide solutions to complex optimization problems, improving efficiency in logistics, finance, and more.</li>
        </ul>
      </section>

      <section className="why-learn">
        <h2>Why is it Important to Learn About Quantum Computing?</h2>
        <p>
          As quantum computing evolves, understanding its principles and potential impacts will be crucial for businesses, governments, and individuals alike. By learning about quantum computing now, you can stay ahead of the curve and be prepared for the changes it will bring.
        </p>
        <p>
          This module will guide you through the fundamental concepts of quantum computing, highlight the risks and opportunities associated with it, and provide insights into how businesses can prepare for its future integration. Whether you're a professional looking to understand its implications or someone curious about this exciting field, this learning module is for you.
        </p>
      </section>

      <section className="module-goals">
        <h2>What Will This Module Help You Accomplish?</h2>
        <p>
          By completing this module, you will:
        </p>
        <ul>
          <li>Understand the basics of quantum computing and how it differs from classical computing.</li>
          <li>Learn about the risks and challenges quantum computing poses to current cybersecurity measures.</li>
          <li>Explore safe practices and quantum-safe cryptography methods to secure data in a quantum-enabled world.</li>
          <li>Gain insights into how businesses can start adopting quantum computing strategies.</li>
        </ul>
        <p>
          Prepare yourself to navigate the future of computing and stay ahead in the ever-evolving tech landscape.
        </p>
      </section>
    </div>
  );
}

export default LandingPage;




