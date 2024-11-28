import React from "react";
import { Chip, Grid, Typography } from "@mui/material";

export default function BannerChips() {
  const skills = [
    {
      name: "android",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg",
    },
    {
      name: "html5",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    },
    {
      name: "bootstrap",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
    },
    {
      name: "css3",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    },
    {
      name: "javascript",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "react",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    },
    {
      name: "redux",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    },
    {
      name: "nodejs",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "dart",
      image: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg",
    },
    {
      name: "flutter",
      image: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
    },
    {
      name: "firebase",
      image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    },
    {
      name: "git",
      image: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    },
    {
      name: "mongodb",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    },
    {
      name: "mysql",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    },
    {
      name: "postman",
      image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    },
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
      <Grid container spacing={1}>
        {skills.map((val, key) => (
          <Grid item key={key}>
            <Chip
              sx={{
                p: 3,
                m: 1,
                backgroundColor: "#e8f5ff",
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
    </div>
  );
}
