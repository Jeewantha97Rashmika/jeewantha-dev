import React, { useState, useEffect } from "react";
import { Box, Button, Container, useTheme, useMediaQuery } from "@mui/material";
import Logo2 from "../images/logo.svg";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SpringModal from "../components/SpringModal";
import Nav from "../components/Nav";
import RevealLinks from "../components/animationComponents/RevealLinks";

export default function Header({ themeMode, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  // Add these state variables for scroll detection
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Determine if we're scrolled down enough to apply styles
      if (currentScrollPos > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine scroll direction and visibility
      // Show header when scrolling up or at top
      // Hide header when scrolling down (but not at top)
      const isScrollingUp = prevScrollPos > currentScrollPos;
      const isAtTop = currentScrollPos < 10;

      setIsVisible(isScrollingUp || isAtTop);
      setPrevScrollPos(currentScrollPos);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]); // Add prevScrollPos as dependency

  const styles = {
    button: {
      position: "fixed",
      right: "15px",
      top: "20px",
      zIndex: 100, // Increased z-index to be above header
      width: "40px",
      height: "40px",
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
      display: "block",
      height: "1px",
      width: "40%",
      margin: "auto",
      backgroundColor: "white",
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
  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <>
      {/* Separate the backdrop blur to its own element */}
      <Box
        sx={{
          position: "sticky",
          top: 10,
          zIndex: 10, // Lower than the burger button but higher than content
          maxWidth: "1200px",
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          margin: "0 auto",
          // Add transform for header show/hide animation
          transform: isVisible ? "translateY(0)" : "translateY(-110%)",
          transition: "transform 0.3s ease",
        }}
      >
        <Box
          component={motion.div}
          animate={{
            backgroundColor: isScrolled
              ? theme.palette.bgColor?.header // When scrolled
              : "transparent",
            backdropFilter: isScrolled ? "blur(12px)" : "none",
            width: isScrolled ? "53rem" : "100%",
            // borderRadius: isScrolled ? "60px" : "60px",
            borderRadius: isScrolled
              ? isMobile
                ? "0px"
                : "60px"
              : isMobile
              ? "0px"
              : "60px",
            boxShadow: isScrolled ? theme.palette.shadow?.main : "none",
            // border: !isScrolled ? "none" : "1px solid #E5E5E5",
          }}
          transition={{
            backgroundColor: { duration: 0.1, ease: "easeInOut" },
            backdropFilter: { duration: 0.1, ease: "easeInOut" },
            width: { duration: 0.1, ease: "easeInOut" },
            borderRadius: { duration: 0.1, ease: "easeInOut" },
            // border: { duration: 0.1, ease: "easeInOut" },
          }}
          sx={{
            transition: "background-color 0.3s ease, color 0.3s ease",
            //  mx:"10px",
            overflow: "hidden",
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
                minHeight: "60px",
              }}
            >
              <a href="/">
                <img src={Logo2} alt="logo" width={"auto"} height={20} />
              </a>
            </Box>

            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              <RevealLinks title={"Services"} link="/#services" />
              <RevealLinks title={"Work"} link="/#work" />
              <RevealLinks title={"Testimonials"} link="/#testimonials" />

              <Button
                color="inherit"
                onClick={() => setIsOpen(true)}
                sx={{
                  color: theme.palette.btnColor?.text,
                  width: { xs: "100%", sm: "auto" },
                  backgroundColor: "#FF7262",
                  transition:
                    "background-color 0.5s ease, color 0.5s ease, border-radius 0.5s ease",
                  display: { xs: "inline-flex" },
                  alignItems: "center",
                  borderRadius: "30px",
                  justifyContent: "center",
                  height: "46px",
                  mr: 2,
                  padding: "5px 10px 5px 20px",
                  "&:hover": {
                    backgroundColor: "#FF7262",
                    transition:
                      "background-color 0.5s ease, color 0.5s ease, border-radius 0.5s ease",
                    borderRadius: "0px",
                  },
                  fontFamily: "Montserrat",
                  textAlign: "center",
                  textTransform: "none",
                  fontSize: "16px",
                }}
              >
                {"Let's Talk"}
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
                onClick={toggleTheme}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  color: theme.palette.textColor?.main,
                  transition: "background-color 0.5s ease, color 0.5s ease",
                  display: { xs: "inline-flex" },
                  borderRadius: "9999px",
                  px: 2,
                  py: 1,
                }}
              >
                {themeMode === "dark" ? (
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
            </Box>

            <Box
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              {/* Empty Box to maintain layout, actual burger menu is outside */}
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Move the burger menu and mobile navigation outside of the header */}
      <Box
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
          position: "fixed", // Fixed position for the burger menu
          zIndex: 20, // Higher z-index to be above the header
        }}
      >
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
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
