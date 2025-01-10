import React, { useState, useEffect, useRef } from "react";
import Header from "../layouts/Header";
import Home from "../layouts/Home";
import "../global.css";
import Footer from "../layouts/Footer";
import { Helmet } from "react-helmet";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import ThemeLayout from "../Theme/ThemeLayout";

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
  const isMobile = useMediaQuery("(max-width: 1006px)");
  const loader = useRef(null);
  const path = useRef(null);

  const styles = {
    main: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    body: {
      width: "80%",
      fontSize: "2vw",
      textAlign: "center",
    },
    loader: {
      height: "calc(100vh + 200px)",
      width: "100%",
      position: "fixed",
      zIndex: 9999999,
    },
    svg: {
      fill: "#121212",
      height: "100%",
      width: "100%",
    },
    path: {
      stroke: "black",
      strokeWidth: "1px",
    },
  };

  const initialCurve = 200;

  useEffect(() => {
    setPath(initialCurve);
  }, []);

  const setPath = (curve) => {
    const width = window.innerWidth;

    const height = loaderHeight();

    path.current.setAttributeNS(
      null,
      "d",

      `M0 0

    L${width} 0

    L${width} ${height}

    Q${width / 2} ${height - curve} 0 ${height}

    L0 0`
    );
  };

  const duration = 1000;

  let start;

  useEffect(() => {
    setPath(initialCurve);

    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 500);
  }, []);

  const animate = (timestamp) => {
    if (start === undefined) {
      start = timestamp;
    }

    const elapsed = timestamp - start;
    const newCurve = easeOutQuad(elapsed, initialCurve, -200, duration);

    setPath(newCurve);
    loader.current.style.top =
      easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";

    if (elapsed < duration) {
      requestAnimationFrame(animate);
    }
  };

  const easeOutQuad = (time, start, end, duration) => {
    return -end * (time /= duration) * (time - 2) + start;
  };

  const loaderHeight = () => {
    const loaderBounds = loader.current.getBoundingClientRect();

    return loaderBounds.height;
  };
  return (
    <>
      <div ref={loader} style={styles.loader}>
        <svg style={styles.svg}>
          <path ref={path} style={styles.path}></path>
        </svg>
      </div>
      <Helmet>
        <title>Jeewantha Rashmika | UI/UX Designer</title>

        <meta
          name="description"
          content="UI/UX designer who is interested in solving complex problems through designing and mobile app/web development"
        />
      </Helmet>

      <ThemeLayout themeMode={themeMode}>
        <Box>
          <Header
            themeMode={themeMode}
            toggleTheme={toggleTheme}
            isMobile={isMobile}
          />
          <Home />
          <Footer />
        </Box>
      </ThemeLayout>
    </>
  );
};

export default IndexPage;
