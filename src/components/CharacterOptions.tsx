// src/components/CharacterOptions.tsx
import React from 'react';
import { Box, FormControlLabel, Checkbox, Typography, Tooltip, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

interface CharacterOptionsProps {
    includeUppercase: boolean;
    setIncludeUppercase: (value: boolean) => void;
    includeLowercase: boolean;
    setIncludeLowercase: (value: boolean) => void;
    includeNumbers: boolean;
    setIncludeNumbers: (value: boolean) => void;
    includeSymbols: boolean;
    setIncludeSymbols: (value: boolean) => void;
}

const CharacterOptions: React.FC<CharacterOptionsProps> = ({
                                                               includeUppercase,
                                                               setIncludeUppercase,
                                                               includeLowercase,
                                                               setIncludeLowercase,
                                                               includeNumbers,
                                                               setIncludeNumbers,
                                                               includeSymbols,
                                                               setIncludeSymbols,
                                                           }) => {
    return (
        <Box mb={3}>
            <Typography variant="h6">Character Types:</Typography>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
                {[{
                    label: "Uppercase",
                    checked: includeUppercase,
                    setChecked: setIncludeUppercase,
                    tooltip: "Includes uppercase letters (A-Z)."
                }, {
                    label: "Lowercase",
                    checked: includeLowercase,
                    setChecked: setIncludeLowercase,
                    tooltip: "Includes lowercase letters (a-z)."
                }, {
                    label: "Numbers",
                    checked: includeNumbers,
                    setChecked: setIncludeNumbers,
                    tooltip: "Includes numeric digits (0-9)."
                }, {
                    label: "Symbols",
                    checked: includeSymbols,
                    setChecked: setIncludeSymbols,
                    tooltip: "Includes special characters (e.g., !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~)."
                }].map((option, index) => (
                    <FormControlLabel
                        key={index}
                        control={
                            <Checkbox
                                checked={option.checked}
                                onChange={(e) => option.setChecked(e.target.checked)}
                                name={option.label}
                            />
                        }
                        label={
                            <Box display="flex" alignItems="center">
                                {option.label}
                                <Tooltip title={option.tooltip} arrow>
                                    <IconButton size="small" style={{ marginLeft: '4px' }}>
                                        <InfoIcon fontSize="inherit" />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        }
                    />
                ))}
            </Box>
        </Box>
    );
};

export default CharacterOptions;
