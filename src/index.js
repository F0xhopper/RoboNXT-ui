import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Creating a root element using ReactDOM.createRoot method
const root = ReactDOM.createRoot(document.getElementById('root'));
// Rendering the main application component wrapped in React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


