import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "@mui/material";

export default function ScrollEffect({ children }) {
  const theme = useTheme();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "start end"], // Starts when the top of the element reaches the top of the viewport
  });

  const IMG_PADDING = 12;

  // Animate scale and opacity based on scroll position
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1]);  // Scale the element as you scroll
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);  // Fade out as you scroll

  return (
    <motion.div
      ref={targetRef}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        top: IMG_PADDING,
        scale,
        opacity, // Apply the scroll-triggered opacity here
      }}
    >
      <motion.div
        style={{
          inset: 1,
          opacity, // Apply the scroll-triggered opacity to the overlay as well
        }}
      />
      <div style={{ position: "relative", opacity, backgroundColor:theme.palette.bgColor?.main }}>
        {children}
      </div>
    </motion.div>
  );
}
