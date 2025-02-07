import React, { useState, useEffect } from "react";
import { Box, Button, Container, useTheme } from "@mui/material";
import Logo from "../images/JeewanthaLogoblack.svg";
import Logo2 from "../images/JeewanthaLogowhite.svg";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SpringModal from "../components/SpringModal";
import Nav from "../components/Nav";

export default function Header({ themeMode, toggleTheme, isMobile }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleLinkedinClick = () => {
    window.location.href =
      "https://www.linkedin.com/in/jeewantha-rashmika-b5a56820a/"; // Replace with your desired URL
  };
  const handleAboutClick = () => {
    window.location.href = "/#services"; // Replace with your desired URL
  };
  const handleWordClick = () => {
    window.location.href = "/#work"; // Replace with your desired URL
  };

  const theme = useTheme();

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //

  const styles = {
    button: {
      position: "fixed",
      right: "15px",
      top: "10px",
      // margin: "20px",
      zIndex: 5,
      width: "40px",
      height: "40px",
      // transform: "translate(-50%, -50%)",
      borderRadius: "50%",
      backgroundColor: theme.palette.secondary?.main,
      transition: "background-color 0.3s ease, color 0.5s ease",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    burger: {
      width: "100%",
      position: "relative",
      display: "block",
    },
    burgerBeforeAfter: {
      // content: '""',
      display: "block",
      height: "1px",
      width: "40%",
      margin: "auto",
      backgroundColor: "white",
      // marginTop: "5px",
      // marginBottom: "5px",
      position: "relative",
      transition: "transform 0.3s",
    },
    burgerBefore: {
      top: "5px",
    },
    burgerAfter: {
      top: "-5px",
    },
    burgerActiveBefore: {
      transform: "rotate(-45deg)",
      top: "0px",
    },
    burgerActiveAfter: {
      transform: "rotate(45deg)",
      top: "-1px",
    },
  };
  const [isActive, setIsActive] = useState(false);
  return (
    <Box
      component={motion.div}
      animate={{
        backgroundColor: isScrolled
          ? theme.palette.bgColor?.header // When scrolled
          : theme.palette.bgColor?.fixHeader,

        boxShadow: isScrolled ? theme.palette.shadow?.main : "none",
      }}
      transition={{
        backgroundColor: { duration: 0.1, ease: "easeInOut" }, // Smooth color transition
      }}
      sx={{
        // backgroundColor: theme.palette.bgColor?.main,
        transition: "background-color 0.1s ease, color 0.5s ease",

        position: "sticky",
        width: "100%",
        top: 0,
        zIndex: 10,
        overflow: " hidden",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            color: "black",
            "&:hover": {
              transform: "scale(0.95)",
            },
            transition: "transform 0.2s",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <a href="/">
            <img
              src={themeMode === "dark" ? Logo2 : Logo}
              alt="logo"
              width={"auto"}
              height={60}
            />
          </a>
        </Box>
        {!isMobile && (
          <div>
            <Button
              onClick={handleAboutClick}
              color="inherit"
              sx={{
                color: theme.palette.textColor?.main,
                ml: 2,
                display: isMobile ? "none" : "inline",
                "&:hover": {
                  // backgroundColor: "#e8f5ff",
                  padding: "5px 20px",
                  borderRadius: "40px",
                  transform: "scale(0.95)",
                },
                fontFamily: "Montserrat",
                textAlign: "center",
                textTransform: "none",
                fontSize: "18px",
                padding: "5px 20px",
                transition: "transform 0.2s",
              }}
            >
              Services
            </Button>
            <Button
              onClick={handleWordClick}
              color="inherit"
              sx={{
                color: theme.palette.textColor?.main,
                ml: 2,
                display: isMobile ? "none" : "inline",
                "&:hover": {
                  // backgroundColor: "#e8f5ff",
                  padding: "5px 20px",
                  borderRadius: "40px",
                  transform: "scale(0.95)",
                },
                fontFamily: "Montserrat",
                textAlign: "center",
                textTransform: "none",
                fontSize: "18px",
                padding: "5px 20px",
                transition: "transform 0.2s",
              }}
            >
              Work
            </Button>
            {/* <Button
            color="inherit"
            onClick={handleKnowledgeClick}
            sx={{
              color: theme.palette.textColor?.main,
              ml: 2,
              display: isMobile ? "none" : "inline",
              "&:hover": {
                // backgroundColor: "#e8f5ff",
                padding: "5px 20px",
                borderRadius: "40px",
                transform: "scale(0.95)",
              },
              fontFamily: "Montserrat",
              textAlign: "center",
              textTransform: "none",
              fontSize: "18px",
              padding: "5px 20px",
              transition: "transform 0.2s",
            }}
          >
            Knowledge Sharing
          </Button> */}

            <Button
              onClick={handleLinkedinClick}
              color="inherit"
              sx={{
                color: theme.palette.textColor?.main,
                ml: 2,
                mr: 2,
                display: isMobile ? "none" : "inline",
                "&:hover": {
                  // backgroundColor: "#e8f5ff",
                  padding: "5px 20px",
                  borderRadius: "40px",
                  transform: "scale(0.95)",
                },
                fontFamily: "Montserrat",
                textAlign: "center",
                textTransform: "none",
                fontSize: "18px",
                padding: "5px 20px",
                transition: "transform 0.2s",
              }}
            >
              Linkedin
            </Button>

            <Button
              color="inherit"
              onClick={() => setIsOpen(true)}
              sx={{
                color: theme.palette.btnColor?.text,
                width: { xs: "100%", sm: "auto" },
                backgroundColor: "#FF7262",
                transition:
                  "background-color 0.5s ease, color 0.5s ease, border-radius 0.5s ease",
                display: isMobile ? "none" : "inline-flex",
                alignItems: "center",
                borderRadius: "30px",
                justifyContent: "center",
                height: "46px",
                mr: 2,
                padding: "5px 10px 5px 20px",
                "&:hover": {
                  backgroundColor: "#FF7262",
                  transition:
                    "background-color 0.5s ease, color 0.5s ease , border-radius 0.5s ease",

                  // transform: "scale(0.95)",
                  borderRadius: "0px",
                },
                fontFamily: "Montserrat",
                textAlign: "center",
                textTransform: "none",
                fontSize: "16px",

                // transition: "transform 0.1s",
              }}
            >
              {"Let’s Talk"}
              <ArrowForwardIcon
                sx={{
                  rotate: "-45deg",
                  backgroundColor: "#fff",
                  color: "#333",
                  marginLeft: "10px",
                  padding: "3px",
                  borderRadius: "50%",
                  fontSize: { xs: "24px", sm: "28px" },
                }}
              />
            </Button>

            <Button
              // variant="contained"
              onClick={toggleTheme}
              sx={{
                color: theme.palette.textColor?.main,
                // backgroundColor: theme.palette.btnColor?.main,
                transition: "background-color 0.5s ease, color 0.5s ease",
                // position: "fixed",
                display: isMobile && "none",
                borderRadius: "9999px",
                px: 2,
                py: 1,
              }}
            >
              {themeMode === "light" ? (
                <FiSun style={{ fontSize: "1.25rem", zIndex: 10 }} />
              ) : (
                <FiMoon
                  style={{
                    fontSize: "1.25rem",
                    zIndex: 10,
                    color: theme.palette.textColor?.main,
                  }}
                />
              )}

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 0,
                  display: "flex",
                  justifyContent:
                    themeMode === "dark" ? "flex-end" : "flex-start",
                }}
              ></div>
            </Button>

            {/* <Box>
            <IconButton
              color="black"
              aria-label="toggle menu"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: isMobile ? "block" : "none" }}
            >
              <MenuIcon />
            </IconButton>
          </Box> */}

            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        )}

        {isMobile && (
          <Box>
            <div onClick={() => setIsActive(!isActive)} style={styles.button}>
              <div style={styles.burger}>
                <span
                  style={{
                    ...styles.burgerBeforeAfter,
                    ...styles.burgerBefore,
                    ...(isActive ? styles.burgerActiveBefore : {}),
                  }}
                ></span>
                <span
                  style={{
                    ...styles.burgerBeforeAfter,
                    ...styles.burgerAfter,
                    ...(isActive ? styles.burgerActiveAfter : {}),
                  }}
                ></span>
              </div>
            </div>
            <AnimatePresence mode="wait">
              {isActive && (
                <Nav
                  themeMode={themeMode}
                  toggleTheme={toggleTheme}
                  setIsActive={setIsActive}
                />
              )}
            </AnimatePresence>
          </Box>
        )}
        {/* </Toolbar>
        </AppBar> */}
      </Container>
    </Box>
  );
}
