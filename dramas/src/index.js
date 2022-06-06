import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import "./App.css";

const dramas = ReactDOM.createRoot(document.getElementById('dramas'));
dramas.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

