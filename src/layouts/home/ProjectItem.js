import React, { useState, useEffect } from "react";
import { useLottie } from "lottie-react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ProjectItem({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();
  const { View: ProjectView, animationItem } = useLottie({
    animationData: project.imgSrc,
    loop: false,
    autoplay: false,
  });

  useEffect(() => {
    if (animationItem) {
      if (isHovered) {
        animationItem.setDirection(1); // Play forward
        animationItem.play();
      } else {
        animationItem.setDirection(-1); // Play in reverse
        animationItem.play();
      }
    }
  }, [isHovered, animationItem]);

  return (
    <Grid container item xs={12} md={6}>
      <Box
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          transition:
            "transform 0.3s ease, border 0.5s ease, color 0.5s ease, background-color 0.5s ease",
          // boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: theme.palette.cardBgColor?.main,
          borderRadius: "1.8rem",
          cursor: "pointer",
          padding: "15px",
          // border: `1px solid ${theme.palette.cardBgColor?.main}`,
          "&:hover": {
            //  border: "1px solid rgb(77, 77, 77)",
            transform: "scale(0.98)",
            transition:
              "transform 0.3s ease, border 0.5s ease, color 0.5s ease, background-color 0.5s ease",
            // transform: "scale(0.95)", // Slightly scale down on hover
          },
        }}
      >
        <Box sx={{ borderRadius: "18px", overflow: "hidden" }}>
          {ProjectView}
        </Box>
        <Box
          sx={{
            my: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">{project.heading}</Typography>
          <ArrowForwardIcon
            sx={{
              backgroundColor: "#FF7262",
              rotate: "-45deg",
              color: "#fff",
              marginLeft: "10px",
              padding: "3px",
              borderRadius: "50%",
              fontSize: { xs: "24px", sm: "28px" },
            }}
          />
        </Box>
        {project.tools.map((val, key) => {
          return (
            <img
              src={val}
              key={key}
              style={{ width: "1.5rem", marginRight: "1rem" }}
              alt={`Image representing a link for `}
            />
          );
        })}
        <Typography variant="body2">{project.subheading}</Typography>
      </Box>
    </Grid>
  );
}
