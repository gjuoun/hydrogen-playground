import React from 'react';
import {CssBaseline, ThemeProvider} from '@mui/material';

export const AppThemeProvider = ({children}) => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={{}}>{children}</ThemeProvider>
    </>
  );
};
