// src/components/SnackbarError.tsx
import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface SnackbarErrorProps {
    open: boolean;                // Control the visibility of the Snackbar
    onClose: () => void;          // Function to handle Snackbar closure
}

const SnackbarError: React.FC<SnackbarErrorProps> = ({ open, onClose }) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={onClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert onClose={onClose} severity="error" variant="filled">
                Please select at least one character type!
            </Alert>
        </Snackbar>
    );
};

export default SnackbarError;
