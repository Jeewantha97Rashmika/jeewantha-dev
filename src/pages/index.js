import React, { useState, useEffect } from "react";
import Header from "../layouts/Header";
import Home from "../layouts/Home";
import "../global.css";
import Footer from "../layouts/Footer";
import { Helmet } from "react-helmet";
import { Box } from "@mui/material";
import ThemeLayout from "../Theme/ThemeLayout";
import ScrollToTop from "react-scroll-to-top";

const IndexPage = () => {
  const [themeMode, setThemeMode] = useState(() => {
    return typeof window !== "undefined"
      ? localStorage.getItem("themeMode") || "light"
      : "light";
  });
  // const theme = useTheme();

  useEffect(() => {
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Helmet>
        <title>Jeewantha Rashmika | UI/UX Designer</title>

        <meta
          name="description"
          content="UI/UX designer who is interested in solving complex problems through designing and mobile app/web development"
        />
      </Helmet>

      <ThemeLayout themeMode={themeMode}>
        <Box>
          <Header themeMode={themeMode} toggleTheme={toggleTheme} />
          <ScrollToTop top={900} smooth color="#333" style={{
            zIndex: 100000,
         
          }} />
          <Home />

          <Footer />
        </Box>
      </ThemeLayout>
    </>
  );
};

export default IndexPage;
