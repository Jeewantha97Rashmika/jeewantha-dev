import React,{useState, useEffect} from "react";
import Header from "../layouts/Header";
import Home from "../layouts/Home";
import "../global.css";
import Footer from "../layouts/Footer";
import { Helmet } from "react-helmet";
import { Box } from "@mui/material";
import Preloder from "../components/Preloder";
import ThemeLayout from "../Theme/ThemeLayout";
const IndexPage = () => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);


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

  return (
    <>
      <Helmet>
        <title>Jeewantha.dev</title>

        <meta
          name="description"
          content="UI/UX designer who is interested in solving complex problems through designing and mobile app/web development"
        />
        <link rel="canonical" href="" />
      </Helmet>
      {loading ? (
        <Preloder />
      ) : (
        <ThemeLayout themeMode={themeMode}>
          <Box>
            <Header themeMode={themeMode} toggleTheme={toggleTheme}/>
            <Home />
            <Footer />
          </Box>
        </ThemeLayout>
      )}
    </>
  );
};

export default IndexPage;
