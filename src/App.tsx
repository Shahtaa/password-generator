// src/App.tsx
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Paper, Typography } from '@mui/material';
import PasswordLengthInput from './components/PasswordLengthInput';
import PasswordDisplay from './components/PasswordDisplay';
// In src/index.tsx or src/App.tsx
import '@fontsource/fira-code'; // Correctly imported Fira Code font

const theme = createTheme({
  typography: {
    fontFamily: "'Fira Code', monospace",
  },
});

const App: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [passwordLength, setPasswordLength] = useState<number>(12); // Default password length
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const generatePassword = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password).then(() => {
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 2000);
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
            <PasswordLengthInput
                passwordLength={passwordLength}
                setPasswordLength={setPasswordLength}
                generatePassword={generatePassword} // Pass the generatePassword function
            />
            <PasswordDisplay
                password={password}
                copyToClipboard={copyToClipboard}
                showMessage={showMessage}
                generatePassword={generatePassword} // Pass the generatePassword function
            />
          </Paper>
        </Container>
      </ThemeProvider>
  );
};

export default App;
