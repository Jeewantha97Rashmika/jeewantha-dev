import React, { useState, useEffect } from "react";
import Header from "../layouts/Header";
import Home from "../layouts/Home";
import "../global.css";
import Footer from "../layouts/Footer";
import { Helmet } from "react-helmet";
import { Box,useMediaQuery } from "@mui/material";

import ThemeLayout from "../Theme/ThemeLayout";
const IndexPage = () => {
  const [themeMode, setThemeMode] = useState(() => {
    return typeof window !== "undefined"
      ? localStorage.getItem("themeMode") || "light"
      : "light";
  });

  useEffect(() => {
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  const isMobile = useMediaQuery("(max-width: 1006px)");
  return (
    <>
      <Helmet>
        <title>Jeewantha Rashmika | UI/UX Designer</title>

        <meta
          name="description"
          content="UI/UX designer who is interested in solving complex problems through designing and mobile app/web development"
        />
      
        <link rel="canonical" href="" />
      </Helmet>

      <ThemeLayout themeMode={themeMode}>
        <Box>
          <Header themeMode={themeMode} toggleTheme={toggleTheme} isMobile={isMobile} />
          <Home />
          <Footer />
        </Box>
      </ThemeLayout>
    </>
  );
};

export default IndexPage;
