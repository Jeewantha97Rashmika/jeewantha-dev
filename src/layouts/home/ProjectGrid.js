import React from "react";
import { Container, Grid } from "@mui/material";
import Photographer from "../../images/Photographer.json";
import Radika from "../../images/radika.json";
import Xcinama from "../../images/movie.json";
import Flo from "../../images/flo.json";
import Taxi from "../../images/taxi.json";
import ProjectItem from "./ProjectItem";

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
      imgSrc: Photographer,
      technology: "uidesign",
      href: "/x-camera",
    },

    {
      heading: "Radikadilanka",
      tools: uidesign,
      subheading:
        "Radikadilanka's official website UI/UX Design using figma and photoshop.",
      imgSrc: Radika,
      technology: "uidesign",
      href: "https://radikadilanka.com/",
    },
    {
      heading: "XCINAMA",
      tools: uidesign,
      subheading:
        "Xcinama is movie ticket booking website UI/UX Design using figma",
      imgSrc: Xcinama,
      technology: "uidesign",
      href: "https://www.figma.com/proto/NUO6CLqeR6HbAIVjMyXZEp/Movies?page-id=199%3A4683&node-id=199-4684&viewport=1171%2C907%2C0.32&t=dmZ0byNEKBuimxLD-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=199%3A4684",
    },

    {
      heading: "Taxi Service",
      tools: uidesign,
      subheading:
        "Xcinama is movie ticket booking website UI/UX Design using figma",
      imgSrc: Taxi,
      technology: "uidesign",
      href: "https://www.figma.com/proto/NUO6CLqeR6HbAIVjMyXZEp/Movies?page-id=199%3A4683&node-id=199-4684&viewport=1171%2C907%2C0.32&t=dmZ0byNEKBuimxLD-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=199%3A4684",
    },
    {
      heading: "FLO-Shop",
      tools: uidesign,
      subheading:
        "Modern Flower shop official web site UI/UX Design using figma and photoshop",
      imgSrc: Flo,
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
