import React, { useRef } from "react";
import { Box ,useTheme} from "@mui/material";
import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";

export default function BigTextnimation() {
  const targetRef = useRef(null);
const theme= useTheme();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  const skewXRaw = useTransform(
    scrollVelocity,
    [-0.5, 0.5],
    ["45deg", "-45deg"]
  );
  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -4000]);
  const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });
  return (
    <Box
      component={motion.dev}
      initial={{ opacity: 1, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", }}
      ref={targetRef}
      sx={{
        zIndex: 1,
        position: "absolute",
        top: { xs: -780, sm: -100, md: -100, lg: 600, xl: 610 },
        height: { xs: "20vh", md: "40vh" },
        overflow: "hidden",
        width: "100%",
      }}
    >
      <div
        style={{
          position: "relative",
          top: 0,
          display: "flex",
          height: "20vh",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <motion.p
          style={{
            transformOrigin: "bottom left",
            whiteSpace: "nowrap",
            fontSize: "10rem",
            fontFamily: "inter",
            textTransform: "uppercase",
            lineHeight: 0.85,
            skewX,
            x,

            maxWidth: "100%",
            "@media (min-width: 768px)": {
              fontSize: "4.5rem",
              lineHeight: 0.85,
            },
          }}
        >
          <span
            style={{
              color: "transparent",
              
              WebkitTextStroke: `1px ${theme.palette.textColor?.bigText}`,
            }}
          >
            Freelancer - UI/UX Designer & Developer
          </span>
        </motion.p>
      </div>
    </Box>
  );
}
