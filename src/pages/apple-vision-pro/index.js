import React, { useState, useEffect } from "react";
import Header from "../../layouts/Header";
import ScrollToTop from "react-scroll-to-top";
import "../../global.css";
import Footer from "../../layouts/Footer";
import { Helmet } from "react-helmet";
import { Box } from "@mui/material";
import ThemeLayout from "../../Theme/ThemeLayout";
import Layout from "../../layouts/xCamera/Layout";
import Cover from "../../images/vision_pro_cover.png";
import VisionPro from '../../images/vision-pro-design.png'

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
            color="#6f00ff"
            style={{
              zIndex: 100000,
            }}
          />
          <Layout
            cover={"https://cdn.jeewantharashmika.com/projects/vision_pro_cover.png"}
            projectImage={"https://cdn.jeewantharashmika.com/projects/vision-pro-design.png"}
            title="Apple Vision Pro UI Reimagined: Facebook & TikTok"
            roles={"UI/UX Designer"}
            description="My latest Figma design project explores how popular social media platforms might evolve in Apple's spatial computing environment. These conceptual interfaces for Facebook and TikTok are crafted specifically for the Apple Vision Pro, embracing the device's unique capabilities while maintaining the core functionality users expect."
            client="Personal Project"
          />
          <Footer />
        </Box>
      </ThemeLayout>
    </>
  );
};

export default IndexPage;
