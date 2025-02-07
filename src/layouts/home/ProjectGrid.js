import React, { useState, useEffect } from "react";
import { useLottie } from "lottie-react";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const ProjectItem = ({ project }) => {
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
          transition:  "transform 0.3s ease, border 0.5s ease, color 0.5s ease, background-color 0.5s ease",
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
        <Box sx={{
          my: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
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
};

export default function ProjectGrid() {
  const shopifyDevelopment = [
    "https://www.realisable.co.uk/wp-content/themes/realisable/images/logos/shopify.svg",
    "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    // "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
  ];

  const Development = [
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    "https://cdn.iconscout.com/icon/free/png-512/free-gatsby-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-3-pack-logos-icons-2944886.png?f=webp&w=256",
    // "https://www.realisable.co.uk/wp-content/themes/realisable/images/logos/shopify.svg",
    "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    // "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
  ];

  const uidesign = [
    "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
  ];
  const projectData = [
    {
      heading: "Xcamera",
      tools: uidesign,
      subheading:
        "Modern Photographer official web site UI/UX Design using figma and photoshop",
      imgSrc: require("../../images/lottie/photographer.json"),
      technology: "uidesign",
      href: "https://www.figma.com/proto/aSWFsx4n0Z6J9HYVKLdLcZ/photography-site?page-id=115%3A293&node-id=129-2&viewport=4358%2C1087%2C0.13&t=v7NnYf6IZuxd6W10-1&scaling=min-zoom&content-scaling=fixed",
    },

    {
      heading: "Radikadilanka",
      tools: uidesign,
      subheading:
        "Radikadilanka's official website UI/UX Design using figma and photoshop.",
      imgSrc: require("../../images/lottie/radika.json"),
      technology: "uidesign",
      href: "https://radikadilanka.com/",
    },
    {
      heading: "XCINAMA",
      tools: uidesign,
      subheading:
        "Xcinama is movie ticket booking website UI/UX Design using figma",
      imgSrc: require("../../images/lottie/movie.json"),
      technology: "uidesign",
      href: "https://www.figma.com/proto/NUO6CLqeR6HbAIVjMyXZEp/Movies?page-id=199%3A4683&node-id=199-4684&viewport=1171%2C907%2C0.32&t=dmZ0byNEKBuimxLD-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=199%3A4684",
    },

    {
      heading: "XCINAMA",
      tools: uidesign,
      subheading:
        "Xcinama is movie ticket booking website UI/UX Design using figma",
      imgSrc: require("../../images/lottie/taxi.json"),
      technology: "uidesign",
      href: "https://www.figma.com/proto/NUO6CLqeR6HbAIVjMyXZEp/Movies?page-id=199%3A4683&node-id=199-4684&viewport=1171%2C907%2C0.32&t=dmZ0byNEKBuimxLD-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=199%3A4684",
    },
    {
      heading: "FLO-Shop",
      tools: uidesign,
      subheading:
        "Modern Flower shop official web site UI/UX Design using figma and photoshop",
      imgSrc: require("../../images/lottie/flo.json"),
      technology: "uidesign",
      href: "https://www.figma.com/proto/QbC5mD6qjy6RwzQLSC8u0y/Flower-shop?page-id=56%3A28&node-id=56-30&viewport=711%2C499%2C0.13&t=8PwO1w6oawXkaXYC-1&scaling=min-zoom&content-scaling=fixed",
    },
    // {
    //   heading: "Highteclanka",
    //   subheading:
    //     "Highteclanka's official website UI/UX Design using figma and photoshop.",
    //   imgSrc: require("../../images/lottie/hightec.json"),
    //   technology: "uidesign",
    //   href: "https://highteclanka.com/",
    // },
    // {
    //   heading: "Xiomiband",
    //   subheading:
    //     "Xiomiband is official website UI/UX Design using figma and photoshop and developed it using Shopify. - password - 12345",
    //   imgSrc: require("../../images/lottie/xiomiband.json"),
    //   technology: "shopifyDevelopment",
    //   href: "https://xiomi-tec.myshopify.com/",
    // },
    // {
    //   heading: "Ezivizhub",
    //   subheading:
    //     "Ezivizhub is official website UI/UX Design using figma and photoshop and developed it using Shopify - password - 12345",
    //   imgSrc: require("../../images/lottie/ezivizhub.json"),
    //   technology: "shopifyDevelopment",
    //   href: "https://ezvizhub.myshopify.com/",
    // },
  ];
  return (
    <Container>
      <Grid
        container
        spacing={4}
        sx={{
          pt: { md: 10, xs: 5 },
          pb: { md: 10, xs: 5 },
        }}
      >
        {projectData.map((project, key) => (
          <ProjectItem key={key} project={project} />
        ))}
      </Grid>
    </Container>
  );
}
