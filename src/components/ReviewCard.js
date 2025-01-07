import React, { useState } from "react";
import { Box, Typography, useTheme ,Button} from "@mui/material";
import { motion } from "framer-motion";
export default function ReviewCard({
  img,
  name,
  review,
  date,
  job,
  socialMedias,
}) {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <Box
      sx={{
        zIndex: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: { xs: "100%", md: "50vw" },
        height: "100%",
        my: 5,

        minHeight: "40rem",
        // backgroundColor: theme.palette.cardBgColor?.main,
        gap: 2,
        padding: { xs: "1rem", md: "2rem" },
        borderRadius: "30px",
        // boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Rotating border container */}
      <motion.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "200px",
          height: "200px",
          borderRadius: "50%", // Circular border around the image
          border: "4px dashed rgb(211, 64, 64)", // Border style
          position: "relative", // Ensure border is around the image
        }}
        // initial={{ border: "4px solid transparent" }}
        animate={{
          border: [
            // "4px solid transparent",
            "3px dashed #FF5733",
            // "3px dashed rgb(248, 104, 72)",
            // "4px dashed rgb(250, 160, 140)",
            // "1px dashed #FF5733",
            // "2px dashed rgb(250, 160, 140)",
            // "3px dashed rgb(248, 104, 72)",
            // "4px dashed #FF5733",

            // "4px solid transparent",
          ],
        }}
        transition={{
          duration: 1, // Duration for one full rotation
          ease: "linear", // Smooth constant speed
          repeat: Infinity, // Infinite loop
          repeatType: "loop", // Loop in the same direction
        }}
      >
        {/* Image inside the rotating border */}
        <img
          src={img}
          alt="img"
          style={{
            position: "fixed",
            borderRadius: "50%", // Make the image circular
            width: "180px",
            height: "180px",
            objectFit: "cover", // Ensure the image covers the circle
          }}
        />
      </motion.div>

      <Typography
        sx={{
          color: theme.palette.textColor?.secondary,
          fontSize: "26px",
          fontWeight: 600,
          fontFamily: "Montserrat",
          lineHeight: "1.5rem",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          color: "#fff",
          fontSize: { xs: "12px", md: "15px" },
          fontWeight: 400,
          fontFamily: "Montserrat",
          lineHeight: "1.5rem",
          px: 2,
          py: 1,
          backgroundColor: theme.palette.bgColor?.secondary,
          // p: 1,
          borderRadius: "30px",
        }}
      >
        {job}
      </Typography>

      <Box>
        {socialMedias.map((val, key) => {
          return (
            <a key={key} href={val.link} target="_blank" rel="noreferrer">
              <Typography
                sx={{
                  color: theme.palette.textColor?.main,
                  fontSize: "28px",
                  fontWeight: 400,
                  fontFamily: "Montserrat",
                  marginRight: "1rem",
                  display: "inline-block",
                  transition: "all 0.3s",
                  ":hover": {
                    color: "#FF5733",
                    scale: 1.2,
                    transition: "all 0.3s",
                  },
                }}
              >
                {val.icon}
              </Typography>
            </a>
          );
        })}
      </Box>
      <div>
        <Typography
          sx={{
            color: theme.palette.textColor?.main,
            fontSize: { xs: "12px", md: "15px" },
            fontWeight: 400,
            fontFamily: "Montserrat",
            lineHeight: "1.5rem",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: isExpanded ? "visible" : "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: isExpanded ? "none" : 5, // Limits to 5 lines
          }}
        >
          {review}
        </Typography>
        <Button
          onClick={toggleExpand}
          sx={{
            mt: 1,
            color: "#FF5733",
            fontSize: "12px",
            fontWeight: 500,
            textTransform: "none",
          }}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </Button>
      </div>
      <Typography
        sx={{
          color: theme.palette.textColor?.secondary,
          fontSize: "16px",
          fontWeight: 400,
          fontFamily: "Montserrat",
          lineHeight: "1.5rem",
        }}
      >
        {date}
      </Typography>
    </Box>
  );
}
