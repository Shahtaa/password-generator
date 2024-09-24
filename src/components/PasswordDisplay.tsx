// src/components/PasswordDisplay.tsx
import React from 'react';
import { TextField, IconButton, InputAdornment, Typography, Box } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import RefreshIcon from '@mui/icons-material/Refresh';

interface PasswordDisplayProps {
    password: string;
    copyToClipboard: () => void;
    showMessage: boolean;
    generatePassword: () => void; // Prop to allow generating passwords
}

const PasswordDisplay: React.FC<PasswordDisplayProps> = ({ password, copyToClipboard, showMessage, generatePassword }) => {
    return (
        <Box mt={2}>
            <TextField
                label="Generated Password"
                variant="outlined"
                value={password}
                fullWidth
                slotProps={{
                    input: {
                        readOnly: true,
                        style: { fontFamily: "'Fira Code', monospace" }, // Ensure font is applied
                    },
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={copyToClipboard} aria-label="Copy password">
                                <ContentCopyIcon />
                            </IconButton>
                            <IconButton onClick={generatePassword} aria-label="Generate new password">
                                <RefreshIcon /> {/* This icon indicates regeneration */}
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
