import React from "react";
import { Chip, Grid, Typography, useTheme } from "@mui/material";

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
    <div >
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
          <Grid item key={key}>
            <Chip
              sx={{
                p: 3,
                m: 1,
                border:"1px solid #E3E3E3",
                boxShadow:theme.palette.shadow?.main,
                backgroundColor: theme.palette.cardBgColor?.main,
                transition: "background-color 0.5s ease, color 0.5s ease",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(0.95)",
                },
              }}
              label={
                <Typography sx={{ fontWeight: "600" }}>{val.name}</Typography>
              }
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
