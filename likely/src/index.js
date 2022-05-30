import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import "./App.css";

const likely = ReactDOM.createRoot(document.getElementById('likely'));
likely.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
