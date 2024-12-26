import React from "react";
import { Box, Chip, Grid, Typography, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

export default function DevSkill() {
  const skills = [
    {
      name: "html5",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    },
    {
      name: "Bootstrap",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    },
    {
      name: "CSS3",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    },
    {
      name: "Javascript",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "React JS",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    },
    {
      name: "Redux",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    },
    {
      name: "Nodejs",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "Gatsby JS",
      image: "https://cdn.iconscout.com/icon/free/png-512/free-gatsby-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-3-pack-logos-icons-2944886.png?f=webp&w=256",
    },
    {
      name: "Sass",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
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
      name: "Ghost CMS",
      image: "https://raw.githubusercontent.com/docker-library/docs/c88522f95bebcab2322f3020f2f735210286939b/ghost/logo.png",
    },

    {
      name: "Android",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg",
    },
   
    {
      name: "Dart",
      image: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg",
    },
    {
      name: "Flutter",
      image: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
    },
    {
      name: "Firebase",
      image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    },
    {
      name: "Git",
      image: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    },
    {
      name: "Mongodb",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    },
    {
      name: "Mysql",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    },
    {
      name: "Postman",
      image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
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
    <Box
    component={motion.section}
    initial={{ opacity: 0, y: 80 }} // Start with hidden and below position
    whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position
    viewport={{  once :true, amount: 0.2 }} // Only animate once when 20% of the component is in view
    transition={{ type: "spring", stiffness: 100 }}
    >
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
             transition: "transform 0.2s",
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
    </Box>
  );
}
