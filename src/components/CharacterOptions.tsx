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
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={includeUppercase}
                            onChange={(e) => setIncludeUppercase(e.target.checked)}
                            name="includeUppercase"
                        />
                    }
                    label={
                        <Box display="flex" alignItems="center">
                            Uppercase
                            <Tooltip title="Includes uppercase letters (A-Z)." arrow>
                                <IconButton size="small" style={{ marginLeft: '4px' }}>
                                    <InfoIcon fontSize="inherit" />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    }
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={includeLowercase}
                            onChange={(e) => setIncludeLowercase(e.target.checked)}
                            name="includeLowercase"
                        />
                    }
                    label={
                        <Box display="flex" alignItems="center">
                            Lowercase
                            <Tooltip title="Includes lowercase letters (a-z)." arrow>
                                <IconButton size="small" style={{ marginLeft: '4px' }}>
                                    <InfoIcon fontSize="inherit" />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    }
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={includeNumbers}
                            onChange={(e) => setIncludeNumbers(e.target.checked)}
                            name="includeNumbers"
                        />
                    }
                    label={
                        <Box display="flex" alignItems="center">
                            Numbers
                            <Tooltip title="Includes numeric digits (0-9)." arrow>
                                <IconButton size="small" style={{ marginLeft: '4px' }}>
                                    <InfoIcon fontSize="inherit" />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    }
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={includeSymbols}
                            onChange={(e) => setIncludeSymbols(e.target.checked)}
                            name="includeSymbols"
                        />
                    }
                    label={
                        <Box display="flex" alignItems="center">
                            Symbols
                            <Tooltip title="Includes special characters (e.g., !&quot;#$%&amp;'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~)." arrow>
                                <IconButton size="small" style={{ marginLeft: '4px' }}>
                                    <InfoIcon fontSize="inherit" />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    }
                />
            </Box>
        </Box>
    );
};

export default CharacterOptions;
