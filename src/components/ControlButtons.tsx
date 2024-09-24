// src/components/ControlButtons.tsx
import React from 'react';
import { Button, Box } from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

interface ControlButtonsProps {
    generatePassword: () => void;
}

const ControlButtons: React.FC<ControlButtonsProps> = ({ generatePassword }) => {
    return (
        <Box display="flex" justifyContent="center" mt={2}>
            <Button
                variant="contained"
                color="primary"
                startIcon={<VpnKeyIcon />}
                onClick={generatePassword}
                fullWidth
            >
                Generate Password
            </Button>
        </Box>
    );
};

export default ControlButtons;
