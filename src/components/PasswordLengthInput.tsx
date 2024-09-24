// src/components/PasswordLengthInput.tsx
import React from 'react';
import { Box, Slider, Typography } from '@mui/material';

interface PasswordLengthInputProps {
    passwordLength: number;
    setPasswordLength: (length: number) => void;
    generatePassword: () => void;
}

const PasswordLengthInput: React.FC<PasswordLengthInputProps> = ({ passwordLength, setPasswordLength, generatePassword }) => {
    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        const length = newValue as number;
        setPasswordLength(length);
        generatePassword();
    };

    return (
        <Box mb={3}>
            <Typography gutterBottom variant="body1">Password Length: {passwordLength}</Typography>
            <Slider
                value={passwordLength}
                onChange={handleSliderChange}
                min={12}
                max={60}
                step={1}
                valueLabelDisplay="auto"
                name="passwordLength"
            />
            <Typography variant="body2" color="textSecondary">
                Adjust the slider to set the desired password length (12-60 characters).
            </Typography>
        </Box>
    );
};

export default PasswordLengthInput;
