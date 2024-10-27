import React from "react";
import { Typography } from "@mui/material";
export default function SkillDescription() {
  return (
    <Typography
      component="h3"
      sx={{
        mt: 5,
        color: "rgba(112, 112, 112, 1)",
        fontSize: "20px",
        fontWeight: 400,
      fontFamily: "Montserrat",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(0.98)",
        },
      }}
    >
      I am a passionate professional committed to utilizing the latest
      technologies to enhance project efficiency and deliver exceptional
      results. With a focus on continuous learning, I strive to stay up-to-date
      with cutting-edge advancements and apply them to drive innovation. Through
      my expertise and acquired skills, I aim to create unique and impactful
      solutions that elevate the quality and speed of projects.
    </Typography>
  );
}
