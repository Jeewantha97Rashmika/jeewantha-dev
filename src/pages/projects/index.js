import React, { useState, useEffect } from "react";
import Header from "../../layouts/Header";

import "../../global.css";
import ProjectGrid from '../../layouts/home/ProjectGrid'
import SeoSection from '../../components/shoezone/SeoSection'
import ThemeLayout from '../../Theme/ThemeLayout'
import { Box } from '@mui/material'
import ScrollToTop from '../../components/ScrollToTop'
import Footer from '../../layouts/Footer'

export default function Index() {
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
    <div>
        <SeoSection
        title={"Photographer Portfolio Website Design"}
        description={
          "Elegant UI design for a professional photographer's digital platform, enhancing brand identity while showcasing exceptional photography."
        }
        canonical={"projects/"}
      />

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
         <ProjectGrid/>
          <Footer />
        </Box>
      </ThemeLayout>
    </div>
  )
}
