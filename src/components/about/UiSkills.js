import React from "react";
import { Chip, Container, Grid, Typography } from "@mui/material";

export default function UiSkill() {
  const uiSkills = [
    {
      name: "figma",
      image: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    },
    {
      name: "xd",
      image: "https://cdn.worldvectorlogo.com/logos/adobe-xd.svg",
    },
    {
      name: "photoshop",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg",
    },

    {
      name: "illustrator",
      image:
        "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg",
    },
  ];

  return (
    <div>
      <Typography
        component="h3"
        sx={{
          mt: 5,
          color: "black",
          fontSize: "20px",
          fontWeight: 400,
          fontFamily: "Work Sans",
        }}
      >
        UI/UX Design Tools
      </Typography>
      <br />
      <Grid container spacing={1}>
        {uiSkills.map((val, key) => (
          <Grid item key={key}>
            <Chip
              sx={{
                p: 3,
                m: 1,
                backgroundColor: "#e8f5ff",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(0.95)",
                },
              }}
              label={val.name}
              avatar={
                <img src={val.image} alt={val.name} width="25" height="25" />
              }
            />
          </Grid>
        ))}
      </Grid>
      <br />
    </div>
  );
}
