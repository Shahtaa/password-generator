// src/components/Footer.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                padding: '16px',
                textAlign: 'center',
                backgroundColor: 'transparent', // Make the background transparent
                backdropFilter: 'blur(5px)', // Optional: Add a blur effect for better aesthetics
                marginTop: 'auto',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)', // Optional: Border for separation
            }}
        >
            <Typography variant="body2" color="textSecondary">
                Built with <strong>TypeScript</strong>, <strong>React</strong>, and <strong>Material-UI</strong>
            </Typography>

        </Box>
    );
};

export default Footer;
