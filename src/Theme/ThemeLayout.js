// src/components/ThemeLayout.js

import React, { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Button } from "@mui/material";
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#333",
      offBlack:"#333"
    },
    secondary: {
      main: "#FF595A",
    },
    btnColor: {
      main: "#333333",
      text: "#ffffff",
    },
    bgColor: {
      main: "#ffffff",
      secondary: "#2C2B2E",
      dec:"#FFD3D0"
    },
    textColor: {
      main: "#707070",
      secondary:"#333",
      decText:"#FF595A",
      funTextColor:"#6366F1",
    },
    borderColor: {
      main: "#333",
    },
    cardBgColor:{
      main:"#f8fafc"
    }
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
      offBlack:"#333"
    },
    secondary: {
      main: "#FF595A",
    },
    btnColor: {
      main: "#ffffff",
      text: "#333333",
    },
    bgColor: {
      main: "#2C2B2E",
      secondary: "#191919",
      dec:"#FF8081"
    },
    textColor: {
      main: "#ffffff",
      secondary:"#fff",
      decText:"##fff",
      funTextColor:"#C3C4FF",
    },
    borderColor: {
      main: "#fff",
      
    },
    cardBgColor:{
      main:"#333"
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
            backgroundColor: theme.palette.btnColor?.main,
            position: "fixed",
            borderRadius: "9999px",
            px: 2,
            py: 1,
            top: "80%",
            right: 10,
            zIndex: 1000000,
            "&:hover": {
              backgroundColor: theme.palette.btnColor?.main,
            },
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
