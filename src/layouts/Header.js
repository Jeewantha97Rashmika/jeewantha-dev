import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Logo from "../images/JeewanthaLogoblack.svg";
import Logo2 from "../images/JeewanthaLogowhite.svg";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import ProImage from "../images/pro02.png";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SpringModal from "../components/SpringModal";

export default function Header({ themeMode, toggleTheme }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1006px)");
  const [isOpen, setIsOpen] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleLinkedinClick = () => {
    window.location.href =
      "https://www.linkedin.com/in/jeewantha-rashmika-b5a56820a/"; // Replace with your desired URL
  };
  const handleAboutClick = () => {
    window.location.href = "/#services"; // Replace with your desired URL
  };
  const handleWordClick = () => {
    window.location.href = "/#projects"; // Replace with your desired URL
  };
  // const handleKnowledgeClick = () => {
  //   window.location.href = "/#knowledge-sharing"; // Replace with your desired URL
  // };
  const theme = useTheme();
  // const [themeMode, setThemeMode] = useState("");
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setThemeMode(localStorage.getItem("themeMode"));
  //   }
  // }, [typeof window !== "undefined" && localStorage.getItem("themeMode")]);

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
  return (
    <Box
      component={motion.div}
      animate={{
        backgroundColor: isScrolled
          ? theme.palette.bgColor?.header // When scrolled
          : theme.palette.bgColor?.main, // When at top
      }}
      transition={{
        backgroundColor: { duration: 0.5, ease: "easeInOut" }, // Smooth color transition
      }}
      sx={{
        // backgroundColor: theme.palette.bgColor?.main,
        transition: "background-color 0.5s ease, color 0.5s ease",
        // boxShadow: theme.palette.shadow?.main,
        position: "sticky",
        width: "100%",
        top: 0,
        zIndex: 1000,
        overflow: " hidden",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        // opacity: 0.93,

        // boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container
        sx={{
          // paddingTop: { md: "10px", xs: "10px" },

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
            Projects
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
            // sx={{
            //   color: theme.palette.textColor?.main,
            //   ml: 2,
            //   display: isMobile ? "none" : "inline",
            //   justifyContent: "center",
            //   alignItems: "center",
            //   "&:hover": {
            //     // backgroundColor: "#e8f5ff",
            //     padding: "5px 20px",
            //     borderRadius: "40px",
            //     transform: "scale(0.95)",
            //   },
            //   fontFamily: "Montserrat",
            //   textAlign: "center",
            //   textTransform: "none",
            //   fontSize: "18px",
            //   padding: "5px 20px",
            //   transition: "transform 0.2s",
            // }}
            sx={{
              color: theme.palette.btnColor?.text,
              width: { xs: "100%", sm: "auto" },
              backgroundColor: theme.palette.btnColor?.main,
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
                backgroundColor: theme.palette.btnColor?.main,
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
            {"Hire me now"}
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

          {/* <MainBtn
            // handleLinkedinClick={handleLinkedinClick}
            isMobile={isMobile}
            title="Hire Me now" 
          /> */}
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
              // top: "80%",
              // right: 10,
              // zIndex: 1000000,
              // "&:hover": {
              //   backgroundColor: theme.palette.btnColor?.main,
              // },
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

            {/* <span style={{ zIndex: 10 }}>
              {themeMode === "dark" ? "Light" : "Dark"}
            </span> */}
            {/* Animated background slider */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 0,
                display: "flex",
                justifyContent:
                  themeMode === "dark" ? "flex-end" : "flex-start",
              }}
            >
              {/* <motion.span
                layout
                transition={{ type: "spring", damping: 15, stiffness: 250 }}
                style={{
                  height: "100%",
                  width: "50%",
                  borderRadius: "9999px", // Full rounded background
                  // background: "linear-gradient(to right, #7c3aed, #6366f1)", // Gradient from violet to indigo
                }}
              /> */}
            </div>
          </Button>

          <Box>
            <IconButton
              color="black"
              aria-label="toggle menu"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: isMobile ? "block" : "none" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
          <Container
            sx={{
              mt: 8,
            }}
          >
            <div
              style={{
                padding: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                src={ProImage}
                alt="Profile Picture"
                sx={{ width: 150, height: 150 }}
              />
            </div>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Montserrat",
              }}
            >
              Jeewantha Rashmika
            </p>
            <p
              style={{
                marginBottom: "20px",
                fontSize: "13px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Montserrat",
              }}
            >
              jeewantharashmika80@gmail.com
            </p>
            <center>
              <Button
                // variant="contained"
                onClick={toggleTheme}
                sx={{
                  color: theme.palette.textColor?.main,
                  // backgroundColor: theme.palette.btnColor?.main,
                  transition: "background-color 0.5s ease, color 0.5s ease",
                  // position: "fixed",

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

                {/* Animated background slider */}
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
            </center>
            <br />
            <hr></hr>
            <List sx={{ width: 260 }} onClick={handleDrawerToggle}>
              <ListItem button component="a" href="/#services">
                <ListItemText
                  primary="Services"
                  primaryTypographyProps={{
                    style: { fontFamily: "Montserrat" },
                  }}
                />
              </ListItem>
              <ListItem button component="a" href="/#projects">
                <ListItemText
                  primary="Projects"
                  primaryTypographyProps={{
                    style: { fontFamily: "Montserrat" },
                  }}
                />
              </ListItem>
              {/* <ListItem button component="a" href="/#knowledge-sharing">
                <ListItemText
                  primary="Knowledge Sharing"
                  primaryTypographyProps={{
                    style: { fontFamily: "Montserrat" },
                  }}
                />
              </ListItem> */}
              <ListItem
                button
                component="a"
                href="https://www.linkedin.com/in/jeewantha-rashmika-b5a56820a/"
              >
                <ListItemText
                  primary="LinkedIn"
                  primaryTypographyProps={{
                    style: { fontFamily: "Montserrat" },
                  }}
                />
              </ListItem>
            </List>
          </Container>
        </Drawer>
        {/* </Toolbar>
        </AppBar> */}
      </Container>
    </Box>
  );
}
