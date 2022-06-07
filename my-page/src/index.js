import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import "./App.css";

const myPage = ReactDOM.createRoot(document.getElementById('myPage'));
myPage.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
