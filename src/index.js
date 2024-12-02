import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional, but make sure it's there if you're using styles
import App from './App';
import reportWebVitals from './reportWebVitals'; // Optional

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(); // Optional, for performance monitoring

