import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export default function ScrollEffect({ children }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const IMG_PADDING = 12;
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
    >
      <motion.div
        style={{
        //   position: "absolute",
          inset: 1,
        
          //   backgroundColor: "rgba(18, 18, 18, 0.7)", // Neutral color with opacity
        }}
      />
      <div style={{ position: "relative", zIndex: 1000,  opacity, }}>{children}</div>
    </motion.div>
  );
}
