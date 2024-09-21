import React from 'react';
import { createRoot } from 'react-dom/client';  // Import createRoot from react-dom/client
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

// Get the container element where you want to mount the React app
const container = document.getElementById('root');

// Create a root instance
const root = createRoot(container);

// Render the app using the new API
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
