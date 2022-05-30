import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import "./App.css";

const login = ReactDOM.createRoot(document.getElementById('login'));
login.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

