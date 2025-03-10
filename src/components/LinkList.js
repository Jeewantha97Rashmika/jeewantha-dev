import React from "react";
import { motion } from "framer-motion";
import { slide, scale } from "./anim";
export default function LinkList({ isActive, setSelectedIndicator, data,setIsActive }) {
  const linkStyles = {
    position: "relative",
    display: "flex",
    alignItems: "center",
  };

  const indicatorStyles = {
    width: "10px",
    height: "10px",
    backgroundColor: "white",
    borderRadius: "50%",
    position: "absolute",
    left: "-30px",
  };

  const { href, title, index } = data;
  return (
    <motion.div
      style={linkStyles}
      onMouseEnter={() => setSelectedIndicator(href)}
      onClick={() => setIsActive(false)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        style={indicatorStyles}
        variants={scale}
        animate={isActive ? "open" : "closed"}
      ></motion.div>
      <a
        style={{
          color: "white",
          textDecoration: "none",
          marginBottom: "3rem",
        }}
        href={href}
      >
        {title}
      </a>
    </motion.div>
  );
}
