// src/components/PasswordLengthInput.tsx
import React from 'react';
import { Box, Slider, Typography } from '@mui/material';

interface PasswordLengthInputProps {
    passwordLength: number;
    setPasswordLength: (length: number) => void;
    generatePassword: () => void; // Add generatePassword prop
}

const PasswordLengthInput: React.FC<PasswordLengthInputProps> = ({ passwordLength, setPasswordLength, generatePassword }) => {
    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        const length = newValue as number;
        setPasswordLength(length);
        generatePassword(); // Generate password whenever the slider is adjusted
    };

    return (
        <Box mb={2}>
            <Typography gutterBottom>Password Length: {passwordLength}</Typography>
            <Slider
                value={passwordLength}
                onChange={handleSliderChange}
                min={12}
                max={60}
                step={1}
                valueLabelDisplay="auto" // Display the value on the slider thumb
            />
        </Box>
    );
};

export default PasswordLengthInput;
