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
      main: "#FF7262",
    },
    btnColor: {
      main: "#2E90FA",
      text: "#fff",
      secondary:"#212121"
    },
    bgColor: {
      main: "#ffffff",
      secondary: "#2C2B2E",
      dec: "#FFD3D0",
      header: "#F3F3F3",
    },
    textColor: {
      main: "#707070",
      svg:"#333",
      secondary: "#333",
      decText: "#FF7262",
      funTextColor: "#FF7262",
      bigText: "#AAAAAA",
    },
    borderColor: {
      main: "#333",
    },
    cardBgColor: {
      main: "#F1F5F9",
    },
    blogCardBgColor: {
      main: "#fff",
    },
    arrowColor:{
      main:"#fff"
    },
    shadow: {
      main: "0px 2px 6px rgba(0, 0, 0, 0.03)",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
      offBlack: "#333",
    },
    secondary: {
      main: "#FF7262",
    },
    btnColor: {
      main: "#2E90FA",
      text: "#fff",
         secondary:"#fff"
    },
    bgColor: {
      main: "#2C2B2E",
      secondary: "#191919",
      dec: "#FF8081",
      header: "#212121",
    },
    textColor: {
      main: "#ffffff",
      svg:"#fff",
      secondary: "#fff",
      decText: "#fff",
      funTextColor: "#C3C4FF",
      bigText: "#AAAAAA",
    },
    borderColor: {
      main: "#fff",
    },
    cardBgColor: {
      main: "#333",
    },

    blogCardBgColor: {
      main: "#333",
    },
    arrowColor:{
      main:"#333"
    },
    shadow: {
      main: "0px 2px 6px rgba(255, 255, 255, 0.1)",
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
