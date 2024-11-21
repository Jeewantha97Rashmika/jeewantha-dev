// src/components/ThemeLayout.js

import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme, CssBaseline, Button } from "@mui/material";
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { Light } from "@mui/icons-material";

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
        secondary:"#2C2B2E"
    },
    textColor: {
      main: "#707070",
    },
    borderColor: {
      main: "#333",
    },
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
      main: "#2C2B2E",
      secondary:"#191919"
    },
    textColor: {
      main: "#ffffff",
    },
    borderColor: {
      main: "#fff",
    },
  },
});

const ThemeLayout = ({ children }) => {
  // Check for theme in localStorage or default to 'light'
  const savedTheme =
    typeof window !== "undefined"
      ? localStorage.getItem("themeMode") || "light"
      : "light";
  const [themeMode, setThemeMode] = useState(savedTheme);
  const [selected, setSelected] = useState("light");

  const toggleTheme = () => {
    const newMode = themeMode === "light" ? "dark" : "light";
    setThemeMode(newMode);
    setSelected(newMode);
    localStorage.setItem("themeMode", newMode); // Persist theme in localStorage
  };
  const theme = themeMode === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button
          variant="contained"
          onClick={toggleTheme}
          sx={{
            backgroundColor: theme.palette.btnColor.main,
            position: "fixed",
            borderRadius: "9999px",
            px:2,
            py:1,
            top: "80%",
            right: 10,
            zIndex: 1000000,
            "&:hover":{
              backgroundColor: theme.palette.btnColor.main,
            }
          }}
        >
          {themeMode === "light" ? (
            <FiSun style={{ fontSize: "1.25rem", zIndex: 10 }} />
          ) : (
            <FiMoon style={{ fontSize: "1.25rem", zIndex: 10 }} />
          )}

          <span style={{ zIndex: 10 }}>
            {themeMode === "dark" ? "Light" : "Dark"}
          </span>
          {/* Animated background slider */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              display: "flex",
              justifyContent: selected === "dark" ? "flex-end" : "flex-start",
            }}
          >
            <motion.span
              layout
              transition={{ type: "spring", damping: 15, stiffness: 250 }}
              style={{
                height: "100%",
                width: "50%",
                borderRadius: "9999px", // Full rounded background
                background: "linear-gradient(to right, #7c3aed, #6366f1)", // Gradient from violet to indigo
              }}
            />
          </div>
        </Button>
      </div>
      <CssBaseline />

      {children}
    </ThemeProvider>
  );
};

export default ThemeLayout;
