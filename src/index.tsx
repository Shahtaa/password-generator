// src/index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
import '@fontsource/fira-code'; // Import Fira Code font
import './index.css'; // Your global styles

// Get the root element
const container = document.getElementById('root');

// Create a root
const root = createRoot(container!); // Using TypeScript, the '!' operator is used to assert that the container is not null

// Render the app
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
