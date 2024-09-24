// src/components/PasswordGenerator.tsx
import React, { useState } from 'react';
import { Container, Paper, Typography } from '@mui/material';
import PasswordLengthInput from './PasswordLengthInput';
import PasswordDisplay from './PasswordDisplay';
import CharacterOptions from './CharacterOptions';
import Footer from './Footer';
import SnackbarMessage from './SnackbarMessage'; // Updated import

const PasswordGenerator: React.FC = () => {
    const [password, setPassword] = useState<string>('');
    const [passwordLength, setPasswordLength] = useState<number>(12);
    const [showMessage, setShowMessage] = useState<boolean>(false);
    const [showError, setShowError] = useState<boolean>(false);
    const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
    const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
    const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
    const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
    const [snackbarMessage, setSnackbarMessage] = useState<string>('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

    const generatePassword = () => {
        const charset =
            (includeUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '') +
            (includeLowercase ? 'abcdefghijklmnopqrstuvwxyz' : '') +
            (includeNumbers ? '0123456789' : '') +
            (includeSymbols ? '!@#$%^&*()-_=+' : '');

        if (charset.length === 0) {
            setShowError(true);
            setSnackbarMessage('Please select at least one character type!');
            setSnackbarSeverity('error');
            return;
        }

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
                setSnackbarMessage('Password copied to clipboard!');
                setSnackbarSeverity('success');
                setTimeout(() => setShowMessage(false), 6000);
            });
        }
    };

    const handleCloseSnackbar = () => {
        setShowError(false);
        setShowMessage(false);
    };

    return (
        <>
            <Container maxWidth="sm" style={{ marginTop: '50px', padding: '20px' }}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Secure Password Generator
                    </Typography>
                    <PasswordLengthInput
                        passwordLength={passwordLength}
                        setPasswordLength={setPasswordLength}
                        generatePassword={generatePassword}
                    />
                    <CharacterOptions
                        includeUppercase={includeUppercase}
                        setIncludeUppercase={setIncludeUppercase}
                        includeLowercase={includeLowercase}
                        setIncludeLowercase={setIncludeLowercase}
                        includeNumbers={includeNumbers}
                        setIncludeNumbers={setIncludeNumbers}
                        includeSymbols={includeSymbols}
                        setIncludeSymbols={setIncludeSymbols}
                    />
                    <PasswordDisplay
                        password={password}
                        copyToClipboard={copyToClipboard}
                        showMessage={showMessage}
                        generatePassword={generatePassword}
                    />
                </Paper>
                <Footer />
            </Container>
            <SnackbarMessage
                open={showError || showMessage}
                onClose={handleCloseSnackbar}
                message={snackbarMessage}
                severity={snackbarSeverity}
            />
        </>
    );
};

export default PasswordGenerator;
