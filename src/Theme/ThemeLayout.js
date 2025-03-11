// src/components/ThemeLayout.js

import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      isDesktop: 1024,
    },
  },

  palette: {
    mode: "light",
    primary: {
      main: "#333",
      offBlack: "#1D1D1E",
    },
    secondary: {
      main: "#FF7262",
    },
    btnColor: {
      // main: "#2E90FA",
      main: "#333333",
      text: "#fff",
      secondary: "#212121",
    },
    bgColor: {
      main: "#ffffff",
      secondary: "#2C2B2E",
      graybg:"#f7f8fa",
      dec: "#FFD3D0",
      header: "rgba(255, 255, 255, 0.8)",
      fixHeader: "transparent",
      nav: "rgb(58, 58, 58)",
    },
    textColor: {
      main: "rgb(141, 141, 141)",
      svg: "#333",
      secondary: "#333",
      decText: "#FF7262",
      funTextColor: "#FF7262",
      bigText: "#AAAAAA",
    },
    borderColor: {
      main:"rgb(196, 196, 196)",
    },
    cardBgColor: {
      main: "#fff",
    },
    blogCardBgColor: {
      main: "#fff",
    },
    arrowColor: {
      main: "#fff",
    },
    shadow: {
      main: "0px 0px 50px rgba(0, 0, 0, 0.2)",
      secondary: "0 10px 20px rgba(151, 151, 151, 0.2)",
    },
  },
});

const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      isDesktop: 1024,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
      offBlack: "#1D1D1E",
    },
    secondary: {
      main: "#FF7262",
    },
    btnColor: {
      main: "#FF7262",
      text: "#fff",
      secondary: "#fff",
    },
    bgColor: {
      main: "#121212",
      secondary: "#1A1A1B",
      graybg:"#0b0b0d",
      dec: "#FF8081",
      fixHeader: "rgb(18 18 18)",
      header: "rgba(58, 58, 58, 0.8)",
      nav: "rgb(41, 41, 41)",
    },
    textColor: {
      main: "rgb(170, 170, 170)",
      svg: "#fff",
      secondary: "#fff",
      decText: "#fff",
      funTextColor: "#C3C4FF",
      bigText: "#AAAAAA",
    },
    borderColor: {
      main:"rgb(63, 63, 63)",
    },
    cardBgColor: {
      main: "#333",
    },

    blogCardBgColor: {
      main: "#333",
    },
    arrowColor: {
      main: "#333",
    },
    shadow: {
      main: "0px 2px 6px rgba(255, 255, 255, 0.5)",
      secondary: "0 10px 20px rgba(168, 168, 168, 0.28)",
    },
  },
});

const ThemeLayout = ({ children, themeMode }) => {
  const theme = themeMode === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {children}
    </ThemeProvider>
  );
};

export default ThemeLayout;
