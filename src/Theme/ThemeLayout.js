// src/components/ThemeLayout.js

import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme, CssBaseline, Button } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#333",
    },
    secondary: {
      main: "#9c27b0",
    },
    btnColor: {
      main: "#333333",
      text: "#ffffff",
    },
    bgColor: {
      main: "#ffffff",
    },
    textColor: {
      main: "#707070",
    },
    borderColor:{
      main:"#333"
    }
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    btnColor: {
      main: "#ffffff",
      text: "#333333",
    },
    bgColor: {
      main: "#09072B",
    },
    textColor: {
      main: "#ffffff",
    },
    borderColor:{
      main:"#fff"
    }
  },
});

const ThemeLayout = ({ children }) => {
  // Check for theme in localStorage or default to 'light'
  const savedTheme =
    typeof window !== "undefined"
      ? localStorage.getItem("themeMode") || "light"
      : "light";
  const [themeMode, setThemeMode] = useState(savedTheme);

  const toggleTheme = () => {
    const newMode = themeMode === "light" ? "dark" : "light";
    setThemeMode(newMode);
    localStorage.setItem("themeMode", newMode); // Persist theme in localStorage
  };

  const theme = themeMode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color="primary"
        onClick={toggleTheme}
        sx={{
          position: "fixed",

          top: "50%",
          right: 0,
          zIndex: 1000000,
        }}
      >
        Toggle Theme
      </Button>
      <CssBaseline />

      {children}
    </ThemeProvider>
  );
};

export default ThemeLayout;
