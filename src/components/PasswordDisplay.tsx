// src/components/PasswordDisplay.tsx
import React from 'react';
import { TextField, IconButton, InputAdornment, Typography, Box } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import RefreshIcon from '@mui/icons-material/Refresh';

interface PasswordDisplayProps {
    password: string; // The generated password
    copyToClipboard: () => void; // Function to copy password to clipboard
    showMessage: boolean; // Flag to show/hide copy message
    generatePassword: () => void; // Function to generate a new password
}

// Component to display the generated password and copy/regenerate buttons
const PasswordDisplay: React.FC<PasswordDisplayProps> = ({ password, copyToClipboard, showMessage, generatePassword }) => {
    return (
        <Box mt={2}>
            <TextField
                label="Generated Password"
                variant="outlined"
                value={password} // Display the generated password
                fullWidth
                InputProps={{
                    readOnly: true, // Make the input read-only
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={copyToClipboard} aria-label="Copy password">
                                <ContentCopyIcon /> {/* Icon for copying password */}
                            </IconButton>
                            <IconButton onClick={generatePassword} aria-label="Generate new password">
                                <RefreshIcon /> {/* Icon for regenerating password */}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            {showMessage && (
                <Typography variant="body2" color="success.main" align="center" style={{ marginTop: '10px' }}>
                    Password copied to clipboard! {/* Confirmation message */}
                </Typography>
            )}
        </Box>
    );
};

export default PasswordDisplay;
