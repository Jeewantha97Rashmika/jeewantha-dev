import React from "react";
import { motion } from "framer-motion";
import { Grid, Box, Typography, Button } from "@mui/material";
import UiBanner from "../../images/uibanner.png";
import FigmaLogo from "../../images/Figma.svg";
import UXResearch from "../../images/usResearch.svg";
import Testing from "../../images/testing.svg";
import Development from "../../images/Development.svg";
import DescriptionLayout from "./DescriptionLayout";
export default function Services() {
  return (
    <div style={{   backgroundColor: "#fff", }}>
      <DescriptionLayout />

      <Box
        component="section"
        sx={{
        
          margin: "0 auto",
          maxWidth: "74rem",
          padding: "3rem 1rem",
          color: "#334155",
          mb:5,
        }}
      >
        <Grid container spacing={2} sx={{ marginBottom: "1rem" }}>
          <Grid item xs={12} md={8}>
            <BounceCard>
              <Box
                sx={{
                  width: "50px",
                  margin: "0 auto",
                  // position: "absolute",
                }}
              >
                <img
                  src={FigmaLogo}
                  alt="figma"
                  width={"100%"}
                  height={"auto"}
                />
              </Box>
              <CardTitle>UI/ UX Design</CardTitle>

              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: "1rem",
                  right: "1rem",
                  top: "8rem",
                  transform: "translateY(2rem)",
                  borderRadius: "1rem 1rem 0 0",

                  backgroundImage:
                    "linear-gradient(to bottom right, #f59e0b, #f97316)",
                  padding: "1rem",
                  transition: "transform 250ms",
                  "&:hover": {
                    transform: "rotate(2deg) ",
                  },
                }}
              >
                <Typography
                  align="center"
                  sx={{
                    fontWeight: "400",
                    color: "#fff",
                    maxWidth: "450px",
                    margin: "0 auto",
                    fontFamily: "Montserrat",
                  }}
                >
                  "I specialize in web development and design, creating visually
                  appealing, user-friendly digital experiences.""
                </Typography>
              </Box>
            </BounceCard>
          </Grid>

          <Grid item xs={12} md={4}>
            <BounceCard>
              <Box
                sx={{
                  width: "50px",
                  margin: "0 auto",
                  // position: "absolute",
                }}
              >
                <img
                  src={UXResearch}
                  alt="figma"
                  width={"100%"}
                  height={"auto"}
                />
              </Box>
              <CardTitle>UX Research</CardTitle>
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: "1rem",
                  right: "1rem",
                  top: "8rem",
                  transform: "translateY(2rem)",
                  borderRadius: "1rem 1rem 0 0",
                  backgroundImage:
                    "linear-gradient(to bottom right, #7c3aed, #4f46e5)",
                  padding: "1rem",
                  transition: "transform 250ms",
                  "&:hover": {
                    transform: "rotate(2deg) ",
                  },
                }}
              >
                <Typography
                  align="center"
                  sx={{
                    fontWeight: "400",
                    color: "#fff",
                    fontFamily: "Montserrat",
                  }}
                >
                  "I specialize in user experience research, collaborating on
                  web development, and ensuring user-friendly digital products."
                </Typography>
              </Box>
            </BounceCard>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <BounceCard>
              <Box
                sx={{
                  width: "50px",
                  margin: "0 auto",
                  // position: "absolute",
                }}
              >
                <img src={Testing} alt="figma" width={"100%"} height={"auto"} />
              </Box>
              <CardTitle>Usability Testing</CardTitle>
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: "1rem",
                  right: "1rem",
                  top: "8rem",
                  transform: "translateY(2rem)",
                  borderRadius: "1rem 1rem 0 0",

                  backgroundImage:
                    "linear-gradient(to bottom right, #ec4899, #f43f5e)",
                  padding: "1rem",
                  transition: "transform 250ms",
                  "&:hover": {
                    transform: "rotate(2deg) ",
                  },
                }}
              >
                <Typography
                  align="center"
                  sx={{
                    fontWeight: "400",
                    color: "#fff",
                    maxWidth: "450px",
                    margin: "0 auto",
                    fontFamily: "Montserrat",
                  }}
                >
                  "I perform usability testing and optimize designs websites
                  based on real-user feedback for seamless interactions.""
                </Typography>
              </Box>
            </BounceCard>
          </Grid>

          <Grid item xs={12} md={8}>
            <BounceCard>
              <Box
                sx={{
                  width: "50px",
                  margin: "0 auto",
                  // position: "absolute",
                }}
              >
                <img
                  src={Development}
                  alt="figma"
                  width={"100%"}
                  height={"auto"}
                />
              </Box>
              <CardTitle>Web Development</CardTitle>
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: "1rem",
                  right: "1rem",
                  top: "8rem",
                  transform: "translateY(2rem)",
                  borderRadius: "1rem 1rem 0 0",
                  backgroundImage:
                    "linear-gradient(to bottom right, #10b981, #059669)",
                  padding: "1rem",
                  transition: "transform 250ms",
                  "&:hover": {
                    transform: "rotate(2deg) ",
                  },
                }}
              >
                <Typography
                  align="center"
                  sx={{
                    fontWeight: "400",
                    color: "#fff",
                    maxWidth: "450px",
                    margin: "0 auto",
                    fontFamily: "Montserrat",
                  }}
                >
                  "I specialize in web development and design, creating visually
                  appealing, user-friendly digital experiences."
                </Typography>
              </Box>
            </BounceCard>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

const BounceCard = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      style={{
        position: "relative",
        minHeight: "300px",
        cursor: "pointer",
        overflow: "hidden",
        borderRadius: "1rem",
        backgroundColor: "#f8fafc",
        padding: "2rem",
        transition: "transform 10ms",
      }}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <Typography
      component="h3"
      sx={{
        margin: "0 auto",
        textAlign: "center",
        fontSize: "1.875rem",
        lineHeight: "2rem",
        fontWeight: "600",
        fontFamily: "Montserrat",
      }}
    >
      {children}
    </Typography>
  );
};
