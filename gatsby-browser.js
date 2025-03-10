


import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const wrapPageElement = ({ element }) => {
  // Get saved theme from localStorage
  const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('themeMode') || 'light' : 'light';
  
  const theme = savedTheme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {element}
    </ThemeProvider>
  );
};