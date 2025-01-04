import React from "react";
import { Container} from "@mui/material";
import { motion } from "framer-motion";
export default function Preloader() {

  return (
    <Container
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <span className="loader"></span>
      <motion.div
        style={{
          fontSize: "24px",
          fontWeight: "400",
          fontFamily: "Montserrat",
          marginTop: "3rem",
          background: "linear-gradient(90deg, #ffff, #FF595A, #fff)",
          backgroundClip: "text",
          color: "transparent",
          display: "inline-block",
          backgroundSize: "200%",
          animation: "shine 3s infinite linear",
        }}
        animate={{
          backgroundPosition: ["200% 0", "-200% 0"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        Jeewantha Rashmika Wickramasinghe
      </motion.div>
    </Container>
  );
}
