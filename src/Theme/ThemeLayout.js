// src/components/ThemeLayout.js

import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";


const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#333",
      offBlack: "#333",
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
      dec: "#FFD3D0",
    },
    textColor: {
      main: "#707070",
      secondary: "#333",
      decText: "#FF595A",
      funTextColor: "#6366F1",
      bigText: "#AAAAAA",
    },
    borderColor: {
      main: "#333",
    },
    cardBgColor: {
      main: "#f8fafc",
    },
    shadow:{
      main:"0px 2px 6px rgba(0, 0, 0, 0.03)"
    }
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
      offBlack: "#333",
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
      dec: "#FF8081",
    },
    textColor: {
      main: "#ffffff",
      secondary: "#fff",
      decText: "##fff",
      funTextColor: "#C3C4FF",
      bigText: "#AAAAAA",
    },
    borderColor: {
      main: "#fff",
    },
    cardBgColor: {
      main: "#333",
    },
    shadow:{
      main:"0px 2px 6px rgba(255, 255, 255, 0.1)"
    }
  },
});

const ThemeLayout = ({ children, themeMode }) => {
  // Check for theme in localStorage or default to 'light'
  // const savedTheme =
  //   typeof window !== "undefined"
  //     ? localStorage.getItem("themeMode") || "light"
  //     : "light";
  // const [themeMode, setThemeMode] = useState(savedTheme);
  // const [selected, setSelected] = useState("light");

  // const toggleTheme = () => {
  //   const newMode = themeMode === "light" ? "dark" : "light";
  //   setThemeMode(newMode);
  //   setSelected(newMode);
  //   localStorage.setItem("themeMode", newMode); // Persist theme in localStorage
  // };
  const theme = themeMode === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {children}
    </ThemeProvider>
  );
};

export default ThemeLayout;
