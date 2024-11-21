import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import reportWebVitals from './reportWebVitals';

// Add debug logging
console.log('Starting app initialization');

// Verify root element exists
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = ReactDOM.createRoot(rootElement);
console.log('Root created');

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
        <App />
      </div>
    </ErrorBoundary>
  </React.StrictMode>
);

console.log('Render called');

reportWebVitals(console.log);