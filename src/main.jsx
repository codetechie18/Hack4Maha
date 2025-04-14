// main.jsx or index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ❌ This causes double render in dev
// <React.StrictMode>
//   <App />
// </React.StrictMode>

// ✅ Use this instead (for development only)
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);
