// src/App.tsx
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Paper, Typography } from '@mui/material';
import PasswordLengthInput from './components/PasswordLengthInput';
import PasswordDisplay from './components/PasswordDisplay';
import '@fontsource/fira-code'; // Correctly imported Fira Code font

// Create a theme with Fira Code font
const theme = createTheme({
  typography: {
    fontFamily: "'Fira Code', monospace",
  },
});

// Main App component
const App: React.FC = () => {
  const [password, setPassword] = useState<string>(''); // State for the generated password
  const [passwordLength, setPasswordLength] = useState<number>(12); // Default password length
  const [showMessage, setShowMessage] = useState<boolean>(false); // Message state for clipboard copy

  // Function to generate a random password
  const generatePassword = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+'; // Characters to use in password
    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length); // Get random index
      generatedPassword += charset[randomIndex]; // Add random character to password
    }
    setPassword(generatedPassword); // Update the password state
  };

  // Function to copy the generated password to the clipboard
  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password).then(() => {
        setShowMessage(true); // Show success message
        setTimeout(() => setShowMessage(false), 2000); // Hide message after 2 seconds
      });
    }
  };

  return (
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm" style={{ marginTop: '50px' }}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h4" align="center" gutterBottom>
              Password Generator
            </Typography>
            {/* Password length input */}
            <PasswordLengthInput
                passwordLength={passwordLength}
                setPasswordLength={setPasswordLength}
                generatePassword={generatePassword} // Pass the function to generate password
            />
            {/* Password display with copy and generate buttons */}
            <PasswordDisplay
                password={password}
                copyToClipboard={copyToClipboard}
                showMessage={showMessage}
                generatePassword={generatePassword} // Pass the function to regenerate password
            />
          </Paper>
        </Container>
      </ThemeProvider>
  );
};

export default App;
