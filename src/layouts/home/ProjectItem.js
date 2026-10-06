import React, { useState, useEffect } from "react";
import { useLottie } from "lottie-react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "gatsby";
import { motion } from "framer-motion";

function LottiePreview({ data, isHovered }) {
  const { View, animationItem } = useLottie({
    animationData: data,
    loop: false,
    autoplay: false,
  });

  useEffect(() => {
    if (animationItem) {
      animationItem.setDirection(isHovered ? 1 : -1);
      animationItem.play();
    }
  }, [isHovered, animationItem]);

  return View;
}

export default function ProjectItem({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();
  return (
    <Grid container item xs={12} md={6} sx={{

    }}>
      <Link to={project.href} style={{ textDecoration: "none" }}>
        <Box
         component={motion.div}
         initial={{ opacity: 0, y: 80 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.2 }}
         transition={{
           type: "spring",
           stiffness: 100,
           duration: 0.3,
         }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          sx={{
            minHeight:{md:"31rem",xs:"27rem"},
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            transition:
              "transform 0.3s ease, border 0.5s ease, color 0.5s ease, background-color 0.5s ease",
            // boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: theme.palette.cardBgColor?.main,
            borderRadius: "20px",
            cursor: "pointer",
            padding: "15px",
            // border: `1px solid ${theme.palette.cardBgColor?.main}`,
            "&:hover": {
              //  border: "1px solid rgb(77, 77, 77)",

              transition:
                "transform 0.3s ease, border 0.5s ease, color 0.5s ease, background-color 0.5s ease",
              // transform: "scale(0.95)", // Slightly scale down on hover
            },
          }}
        >
          <Box sx={{ borderRadius: "18px", overflow: "hidden" }}>
            {project.coverImage ? (
              <img
                src={project.coverImage}
                alt={project.heading}
                style={{ width: "100%", display: "block" }}
              />
            ) : (
              <LottiePreview data={project.imgSrc} isHovered={isHovered} />
            )}
          </Box>
          <Box
            sx={{
              my: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: "1.4rem",
                fontWeight: 600,
                color: theme.palette.textColor?.secondary,
                fontFamily: "Montserrat",
              }}
            >
              {project.heading}
            </Typography>
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
         
          <Typography
            sx={{
              fontSize: "1rem",
              color: theme.palette.textColor?.main,
              mb:1,
              fontWeight: 400,
              fontFamily: "Montserrat",
            }}
          >
            {project.subheading}
          </Typography>
          {project.tools.map((val, key) => {
            return (
              <img
                src={val}
                key={key}
                style={{ width: "1.5rem", marginRight: "1rem" }}
                alt={`representing a link for `}
              />
            );
          })}
        </Box>
      </Link>
    </Grid>
  );
}
