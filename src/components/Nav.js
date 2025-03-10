import React, { useState } from "react";
import { motion } from "framer-motion";
import { menuSlide } from "./anim";
import LinkList from "./LinkList";
import Curve from "./Curve";

import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareBehance } from "react-icons/fa6";
import { Box, Button, useTheme } from "@mui/material";

const socialLinks = [
  {
    name: "Linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/jeewantha-rashmika-b5a56820a/",
  },
  {
    name: "Github",
    icon: <FaSquareGithub />,
    link: "https://github.com/Jeewantha97Rashmika",
  },
  {
    name: "Email",
    icon: <MdAttachEmail />,
    link: "mailto:jeewantharashmika80@gmail.com",
  },
  {
    name: "instagram",
    icon: <FaSquareInstagram />,
    link: "https://www.instagram.com/jeewantha_rashmika97/",
  },
  {
    name: "facebook",
    icon: <FaFacebookSquare />,
    link: "https://www.facebook.com/jeewatharashmika.calyso",
  },
  {
    name: "Behance",
    icon: <FaSquareBehance />,
    link: "https://www.behance.net/jeewantharashmika",
  },
];
export default function Nav({ themeMode, toggleTheme, setIsActive }) {
  const theme = useTheme();

  const navItems = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/#services" },
    { title: "Work", href: "/#work" },
    { title: "Testimonials", href: "/#testimonials" },
    {
      title: themeMode === "light" ? "Dark Mode" : "Light Mode",
      href: toggleTheme,
    },
    // { title: "Favourites", href: "/#favourites" },
  ];
  const path = window.location.pathname;

  const [selectedIndicator, setSelectedIndicator] = useState(path);

  console.log(selectedIndicator);
  const styles = {
    menu: {
      height: "100%",
      width: "100%",
      backgroundColor: theme.palette.bgColor?.nav,
      transition: "background-color 0.3s ease, color 0.5s ease",
      position: "fixed",
      right: 0,
      top: 0,
      color: "white",
    },
    body: {
      boxSizing: "border-box",
      height: "100%",
      padding: "30px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    nav: {
      display: "flex",
      flexDirection: "column",
      fontSize: "48px",
      gap: "12px",
      marginTop: "80px",
      color: "white",
    },
    header: {
      color: "rgb(153, 153, 153)",
      borderBottom: "1px solid rgb(153, 153, 153)",
      textTransform: "uppercase",
      fontSize: "11px",
      marginBottom: "40px",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontWeight: 300,
    },
    footer: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      fontSize: "30px",
      gap: "20px",
    },
  };
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      style={styles.menu}
    >
      <div style={styles.body}>
        <div onMouseLeave={() => setSelectedIndicator(path)} style={styles.nav}>
          <div style={styles.header}>
            <p>Navigation</p>
          </div>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
              {/* {themeMode === "light" ? (
                <FiSun style={{ fontSize: "1.25rem", zIndex: 10 }} />
              ) : (
                <FiMoon
                  style={{
                    fontSize: "5.25rem",
                    zIndex: 10,
                    color: theme.palette.textColor?.main,
                  }}
                />
              )} */}

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
          </Box>
          {navItems.map((data, index) => (
            <LinkList
              setIsActive={setIsActive}
              key={index}
              data={{ ...data, index }}
              isActive={selectedIndicator === data.href}
              setSelectedIndicator={setSelectedIndicator}
            />
          ))}
        </div>
        <div style={styles.footer}>
          {socialLinks.map((data, index) => (
            <a
              style={styles.link}
              href={data.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.icon}
            </a>
          ))}
          {/* <a style={styles.link}>Instagram</a> */}
        </div>
      </div>

      <Curve />
    </motion.div>
  );
}
