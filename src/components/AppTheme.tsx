// src/components/AppTheme.tsx
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const AppTheme: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#007bff', // Bright blue for primary actions
            },
            secondary: {
                main: '#e9ecef', // Light gray for secondary actions (adjusted for contrast)
            },
            success: {
                main: '#28a745', // Green for success messages
            },
            text: {
                primary: '#343a40', // Dark gray for primary text
                secondary: '#868e96', // Medium gray for secondary text
            },
            background: {
                default: '#f9f9f9', // Light background for overall app
                paper: '#ffffff', // White background for paper components
            },
        },
        typography: {
            fontFamily: "'Fira Code', monospace",
            h4: {
                fontSize: '2rem',
                fontWeight: 700,
                lineHeight: 1.25, // Improved line height for readability
            },
            h6: {
                fontSize: '1.2rem',
                fontWeight: 600,
            },
            body1: {
                fontSize: '1rem',
            },
        },
        components: {
            MuiButton: {
                defaultProps: {
                    variant: 'contained', // Default button variant
                    color: 'primary', // Default button color
                },
                styleOverrides: {
                    root: {
                        borderRadius: '8px', // Rounded corners for a modern look
                        padding: '10px 20px', // Consistent padding for buttons
                    },
                },
            },
            MuiTextField: {
                defaultProps: {
                    variant: 'outlined', // Default text field variant
                },
                styleOverrides: {
                    root: {
                        marginBottom: '16px', // Consistent spacing between text fields
                    },
                },
            },
        },
    });

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppTheme;
