import React from "react";
import { Chip, Grid, Typography, useTheme } from "@mui/material";

export default function DevSkill() {
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
        "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
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
      name: "sass",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
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
      name: "Shopify",
      image: "https://www.realisable.co.uk/wp-content/themes/realisable/images/logos/shopify.svg",
    },
    {
      name: "Wordpress",
      image: "https://wpapprentice.com/wp-content/uploads/2020/05/wordpress-logo-200x200-1.png",
    },
    {
      name: "Gatsby JS",
      image: "https://cdn.iconscout.com/icon/free/png-512/free-gatsby-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-3-pack-logos-icons-2944886.png?f=webp&w=256",
    },
    // {
    //   name: "postman",
    //   image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    // },
    // {
    //   name: "postman",
    //   image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    // },
    // {
    //   name: "postman",
    //   image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    // },
    // {
    //   name: "postman",
    //   image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    // },
    // {
    //   name: "postman",
    //   image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    // },
  ];
const theme = useTheme();
  return (
    <div>
      <Typography
        component="h3"
        sx={{
          mt: 5,
          color: theme.palette.textColor?.secondary,
          fontSize: "30px",
          fontWeight: 600,
        fontFamily: "Montserrat",
        }}
      >
        Development Tools and Technologies
      </Typography>
      <br />
      <Grid container spacing={1}>
        {skills.map((val, key) => (
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
              label={<Typography sx={{fontWeight:"600"}}>{val.name}</Typography>}
              avatar={
                <img src={val.image} alt={val.name} width="25" height="25" />
              }
            />
          </Grid>
        ))}
      </Grid>
      <br />

      {/* <div>
        <Box
          sx={{
            width: "100%",
            mb: 10,
            mt: 5,
            display: "flex",
            justifyContent: "left",
            alignItems: "left",
          }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} md={4} mb={3}>
              <div>
                <img
                  align="left"
                  src="https://camo.githubusercontent.com/1e57e854a1b614c83faada86c942dd395d9e05ba15a7f1a876a90849891a900e/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d6a656577616e7468613937726173686d696b612673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374"
                  alt="jeewantha97rashmika"
                  style={{ maxWidth: "100%", height: "auto" ,paddingTop:"5px"}}
                />
              </div>
            </Grid>
            <Grid xs={12} md={8}>
              <div>
                <img
                  align="left"
                  src="https://github-readme-streak-stats.herokuapp.com/?user=jeewantha97rashmika&"
                  alt="jeewantha97rashmika"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </Grid>
          </Grid>
        </Box>
      </div> */}
    </div>
  );
}
