// src/components/PasswordGenerator.tsx
import React, { useState } from 'react';
import { Container, Paper, Typography } from '@mui/material';
import PasswordLengthInput from './PasswordLengthInput';
import PasswordDisplay from './PasswordDisplay';
import CharacterOptions from './CharacterOptions';
import Footer from './Footer';
import SnackbarError from './SnackbarError';

const PasswordGenerator: React.FC = () => {
    const [password, setPassword] = useState<string>('');
    const [passwordLength, setPasswordLength] = useState<number>(12);
    const [showMessage, setShowMessage] = useState<boolean>(false);
    const [showError, setShowError] = useState<boolean>(false);
    const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
    const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
    const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
    const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);

    const generatePassword = () => {
        const charset =
            (includeUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '') +
            (includeLowercase ? 'abcdefghijklmnopqrstuvwxyz' : '') +
            (includeNumbers ? '0123456789' : '') +
            (includeSymbols ? '!@#$%^&*()-_=+' : '');

        if (charset.length === 0) {
            setShowError(true);
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
                setTimeout(() => setShowMessage(false), 6000);
            });
        }
    };

    const handleCloseError = () => {
        setShowError(false);
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
            <SnackbarError open={showError} onClose={handleCloseError} />
        </>
    );
};

export default PasswordGenerator;
