import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import "./App.css";

const books = ReactDOM.createRoot(document.getElementById('books'));
books.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

