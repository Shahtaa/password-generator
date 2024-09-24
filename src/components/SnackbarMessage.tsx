// src/components/SnackbarMessage.tsx
import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface SnackbarMessageProps {
    open: boolean;                // Control the visibility of the Snackbar
    onClose: () => void;          // Function to handle Snackbar closure
    message: string;              // The message to display in the Snackbar
    severity: 'success' | 'error'; // Severity level of the Snackbar
}

const SnackbarMessage: React.FC<SnackbarMessageProps> = ({ open, onClose, message, severity }) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={onClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert onClose={onClose} severity={severity} variant="filled">
                {message}
            </Alert>
        </Snackbar>
    );
};

export default SnackbarMessage;
