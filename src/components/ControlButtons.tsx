// src/components/ControlButtons.tsx
import React from 'react';
import { Button, Box } from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

interface ControlButtonsProps {
    generatePassword: () => void; // Function to generate password
}

// Control buttons component
const ControlButtons: React.FC<ControlButtonsProps> = ({ generatePassword }) => {
    return (
        <Box display="flex" justifyContent="center" mt={2}>
            <Button
                variant="contained"
                color="primary"
                startIcon={<VpnKeyIcon />} // Icon for the button
                onClick={generatePassword} // Trigger password generation on click
                fullWidth
                sx={{ borderRadius: '8px' }} // Rounded corners for a modern look
            >
                Generate Password
            </Button>
        </Box>
    );
};

export default ControlButtons;
