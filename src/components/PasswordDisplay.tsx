import React from 'react';
import { TextField, IconButton, InputAdornment, Typography, Box } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import RefreshIcon from '@mui/icons-material/Refresh';

interface PasswordDisplayProps {
    password: string;               // The generated password to be displayed
    copyToClipboard: () => void;    // Function to copy the password to clipboard
    showMessage: boolean;            // Flag to show the success message
    generatePassword: () => void;    // Function to generate a new password
}

const PasswordDisplay: React.FC<PasswordDisplayProps> = ({
                                                             password,
                                                             copyToClipboard,
                                                             showMessage,
                                                             generatePassword
                                                         }) => {
    return (
        <Box mt={3}>
            <Typography variant="h6" gutterBottom>
                Generated Password:
            </Typography>
            <TextField
                label="Your Password"
                variant="outlined"
                value={password}
                fullWidth
                name="generatedPassword"
                inputProps={{
                    readOnly: true,
                    'aria-label': 'Generated Password',
                    style: { backgroundColor: '#f9f9f9' }, // Light background for the password field
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={copyToClipboard} aria-label="Copy password">
                                <ContentCopyIcon />
                            </IconButton>
                            <IconButton onClick={generatePassword} aria-label="Generate new password">
                                <RefreshIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            {showMessage && (
                <Typography variant="body2" color="success.main" align="center" style={{ marginTop: '10px' }}>
                    Password copied to clipboard!
                </Typography>
            )}
        </Box>
    );
};

export default PasswordDisplay;
