import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure React 18 setup
import './index.css';
import App from './components/App'; // Correct relative path to App component
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Correct root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
