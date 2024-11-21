import React from "react";
import { Chip, Grid, Typography } from "@mui/material";

export default function UiSkill() {
  const uiSkills = [
    {
      name: "figma",
      image: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    },
    {
      name: "xd",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
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
  ];

  return (
    <div>
      <Typography
        component="h3"
        sx={{
          mt:{md:10 ,xs:1},
          color: "black",
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
                backgroundColor: "rgba(112, 112, 112, 0.1)",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(0.95)",
                },
              }}
              label={<Typography sx={{fontWeight:"600"}}>{val.name}</Typography>}
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
