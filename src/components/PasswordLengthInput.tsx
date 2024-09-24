// src/components/PasswordLengthInput.tsx
import React from 'react';
import { Box, Slider, Typography } from '@mui/material';

interface PasswordLengthInputProps {
    passwordLength: number; // Current password length
    setPasswordLength: (length: number) => void; // Function to set the password length
    generatePassword: () => void; // Function to generate password
}

// Slider component for selecting password length
const PasswordLengthInput: React.FC<PasswordLengthInputProps> = ({ passwordLength, setPasswordLength, generatePassword }) => {
    // Handle changes to the slider
    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        const length = newValue as number;
        setPasswordLength(length); // Update password length state
        generatePassword(); // Generate password whenever the slider is adjusted
    };

    return (
        <Box mb={2}>
            <Typography gutterBottom>Password Length: {passwordLength}</Typography>
            <Slider
                value={passwordLength}
                onChange={handleSliderChange}
                min={12} // Minimum password length
                max={60} // Maximum password length
                step={1} // Step size for slider
                valueLabelDisplay="auto" // Show current value on the slider
            />
        </Box>
    );
};

export default PasswordLengthInput;
