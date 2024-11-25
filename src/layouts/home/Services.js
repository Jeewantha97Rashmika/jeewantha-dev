import React from "react";
import { motion } from "framer-motion";
import { Grid, Box, Typography, useTheme } from "@mui/material";
import FigmaLogo from "../../images/Figma.svg";
import UXResearch from "../../images/usResearch.svg";
import Testing from "../../images/testing.svg";
import Development from "../../images/Development.svg";
import DescriptionLayout from "./DescriptionLayout";
import HarlfCircel from "../../images/circel.svg";
import ScrollEffect from "../../components/common/ScrollEffect";

export default function Services() {
  const theme = useTheme();
  return (
    <Box
      id="services"
      sx={{
        backgroundColor: theme.palette.bgColor?.main,
        position: "relative",
      }}
    >
      <DescriptionLayout />

      {/* <Box
        component={motion.div}
        initial={{ opacity: 1, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 2, type: "spring" }}
        sx={{
          position: "absolute",
          top: { xs: 100, md: 300 }, // Align to top
          right: { xs: 0, md: 0 }, // Align to rightZ
          width: "auto",
          height: "auto",
          display: { xs: "none", lg: "block" },
          overflow: "hidden",
        }}
      >
        <img
          src={HarlfCircel}
          style={{
            transform: "rotate(180deg)",
            overflow: "hidden",
          }}
          alt="HarlfCircel"
        />
      </Box> */}

      {/* Bottom HarlfCircel */}
      {/* <Box
        component={motion.div}
        initial={{ opacity: 1, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 2, type: "spring" }}
        sx={{
          position: "absolute",
          display: { xs: "none", lg: "block" },
          bottom: { xs: 220, md: 100 },
          left: { xs: -30, md: 0 },
          width: "auto",
          height: "auto",
          overflow: "hidden",
        }}
      >
        <img
          src={HarlfCircel}
          style={{
            transform: "rotate(0deg)",
          }}
          alt="HarlfCircel"
        />
      </Box> */}
      <ScrollEffect>
        <Box
          component={motion.section}
          initial={{ opacity: 0, y: 80 }} // Start with hidden and below position
          whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position
          viewport={{ once: true, amount: 0.2 }} // Only animate once when 20% of the component is in view
          transition={{ type: "spring", stiffness: 100 }}
          sx={{
            margin: "0 auto",
            maxWidth: "74rem",
            padding: "3rem 1rem",
            color: "#334155",
            pb: 5,
            pt:10
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
                    "I specialize in web development and design, creating
                    visually appealing, user-friendly digital experiences.""
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
                    web development, and ensuring user-friendly digital
                    products."
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
                  <img
                    src={Testing}
                    alt="figma"
                    width={"100%"}
                    height={"auto"}
                  />
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
                    "I specialize in web development and design, creating
                    visually appealing, user-friendly digital experiences."
                  </Typography>
                </Box>
              </BounceCard>
            </Grid>
          </Grid>
        </Box>
      </ScrollEffect>
    </Box>
  );
}
const BounceCard = ({ children }) => {
  const theme = useTheme();
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      style={{
        position: "relative",
        minHeight: "300px",
        cursor: "pointer",
        overflow: "hidden",
        borderRadius: "1rem",
        // border:"1px solid #8B8B8B",
        backgroundColor: theme.palette.cardBgColor?.main,
        padding: "2rem",
        transition: "transform 10ms",
      }}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  const theme = useTheme();
  return (
    <Typography
      component="h3"
      sx={{
        color:theme.palette.textColor.secondary,
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
