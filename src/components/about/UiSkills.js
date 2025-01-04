import React from "react";
import { Box,  Grid, Typography, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
export default function UiSkill() {
  const uiSkills = [
    {
      name: "figma",
      image: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    },
    {
      name: "xd",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
    },
    {
      name: "photoshop",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
    },

    {
      name: "illustrator",
      image:
        "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg",
    },
    {
      name: "Sketch",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg",
    },
  ];
  const theme = useTheme();
  return (
    <Box
    
    component={motion.section}
    initial={{ opacity: 0, y: 80 }} // Start with hidden and below position
    whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position
    viewport={{ once :true, amount: 0.2 }} // Only animate once when 20% of the component is in view
    transition={{ type: "spring", stiffness: 100 }}
    >
      <Typography
        component="h3"
        sx={{
          mt: { md: 10, xs: 1 },
          color: theme.palette.textColor?.secondary,
          fontSize: "30px",
          fontWeight: 600,
          fontFamily: "Montserrat",
        }}
      >
        UI/UX Design Tools
      </Typography>
      <br />
      <Grid container spacing={1}>
        {uiSkills.map((val, key) => (
          <Grid item xs={12} md={4} key={key}>
            <Box
              sx={{
                p: 2,
                display: "flex",
                gap: 1,
                borderRadius: "10px",
                width: "100%",
                // border: "1px solid #E3E3E3",
                // boxShadow: theme.palette.shadow?.main,
                backgroundColor: theme.palette.cardBgColor?.main,
                transition: "background-color 0.5s ease, color 0.5s ease",
              
                "&:hover": {
                  transform: "scale(0.95)",
                },
              }}
            >
              <Grid container>
                <Grid item xs={8}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                    }}
                  >
                    <img
                      src={val.image}
                      alt={val.name}
                      width="25"
                      height="25"
                    />
                    <Typography sx={{ fontWeight: "600", fontSize: "16px" }}>
                      {val.name}
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: "flex",
                    alignItems: "rigth",
                    justifyContent: "end",
                  }}
                >
                  <ArrowForwardIcon
                    sx={{
                      backgroundColor: theme.palette.bgColor?.main,
                      rotate: "-45deg",
                      color: theme.palette.textColor?.main,
                      marginLeft: "10px",
                      padding: "3px",
                      borderRadius: "50%",
                      fontSize: { xs: "28px", sm: "28px" },
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        ))}
      </Grid>
      <br />
    </Box>
  );
}
