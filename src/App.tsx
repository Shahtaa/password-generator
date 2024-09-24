// src/App.tsx
import React from 'react';
import AppTheme from './components/AppTheme';
import PasswordGenerator from './components/PasswordGenerator';
import '@fontsource/fira-code';
import './App.css';

const App: React.FC = () => {
  return (
      <AppTheme>
        <PasswordGenerator />
      </AppTheme>
  );
};

export default App;
