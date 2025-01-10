import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material";
export default function Curve() {
    const theme = useTheme();
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const svgStyles = {
    position: "absolute",
    zIndex: 10,
    top: 0,
    left: "-99px",
    width: "100px",
    height: "100%",
    fill: theme.palette.bgColor?.nav,
    stroke: "none",
  };
  return (
    
    <svg style={svgStyles}>
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
}
