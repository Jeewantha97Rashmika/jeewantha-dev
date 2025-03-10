import React from "react";
import {  motion } from "framer-motion";
import { useTheme } from "@mui/material";
export const RevealLinks = ({ title, link }) => {

  return (
    <section
      style={{
        // display: "grid",
        placeContent: "center",
        gap: "8px",

        // padding: "96px 32px",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <FlipLink href={link}>{title}</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  const theme = useTheme();
  const linkStyle = {
    position: "relative",
    display: "block",
    overflow: "hidden",
    whiteSpace: "nowrap",
    fontSize: "1rem", // Equivalent to text-4xl
    fontWeight: "500", // Equivalent to font-black
    lineHeight: 0.75,
    textDecoration: "none",
    color: theme.palette.textColor?.main,
    cursor: "pointer",
    marginRight: "50px",
  };

  const spanStyle = {
    display: "inline-block",
  };

  const containerStyle = {
    position: "absolute",
    inset: 0,
  };

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      style={linkStyle}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            style={spanStyle}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div style={containerStyle}>
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            style={spanStyle}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default RevealLinks;
