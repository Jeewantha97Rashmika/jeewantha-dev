import React, { useState, useEffect } from "react";
import Header from "../../layouts/Header";
import ScrollToTop from "react-scroll-to-top";
import "../../global.css";
import Footer from "../../layouts/Footer";
import { Helmet } from "react-helmet";
import { Box } from "@mui/material";
import ThemeLayout from "../../Theme/ThemeLayout";
import Layout from "../../layouts/xCamera/Layout";

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
        <Box
          sx={{
            backgroundColor: themeMode === "light" ? "#f7f8fa" : "#0b0b0d",
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
        >
          <Header themeMode={themeMode} toggleTheme={toggleTheme} />
          <ScrollToTop
            top={900}
            smooth
            color="#333"
            style={{
              zIndex: 100000,
            }}
          />
          <Layout
            cover={"https://cdn.jeewantharashmika.com/projects/x_camera_cover.png"}
            projectImage={"https://cdn.jeewantharashmika.com/projects/xcamera.png"}
            title="Photographer Portfolio Website Design" 
            roles={"UI/UX Designer"}
            description="My recent UI design project showcases a sophisticated digital platform for a professional photographer, creating a visual narrative that elevates their brand while highlighting their exceptional photography skills. The interface serves as an elegant canvas that complements the photographer's work without overshadowing it."
            client="Personal Project"
          />
          <Footer />
        </Box>
      </ThemeLayout>
    </>
  );
};

export default IndexPage;
