import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Photographer from "../../images/Photographer.json";
import Radika from "../../images/radika.json";
import ProjectItem from "./ProjectItem";
import DesignSystem from "../../images/design_system.json";
import AppleVisionPro from "../../images/apple_vision_pro.json";
import { FaBehanceSquare } from "react-icons/fa";
import Background from "../../images/WireframeBg.svg";

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
      heading: "Photographer Portfolio Website ",
      tools: uidesign,
      subheading:
        "Modern Photographer official web site UI/UX Design using figma and photoshop",
      imgSrc: Photographer,
      technology: "uidesign",
      href: "/x-camera",
    },

    {
      heading: "Radika dilanka Official Website",
      tools: uidesign,
      subheading:
        "Radikadilanka's official website UI/UX Design using figma and photoshop.",
      imgSrc: Radika,
      technology: "uidesign",
      href: "https://radikadilanka.com/",
    },
    {
      heading: "Comprehensive Design System",
      tools: uidesign,
      subheading:
        "creating a complete, customized design system for a client, built entirely in Figma",
      imgSrc: DesignSystem,
      technology: "uidesign",
      href: "/design-system",
    },
    {
      heading: "Apple Vision Pro UI Reimagined",
      tools: uidesign,
      subheading:
        "Figma design project explores how popular social media platforms might evolve in Apple's spatial computing environment",
      imgSrc: AppleVisionPro,
      technology: "uidesign",
      href: "/apple-vision-pro",
    },
    // {
    //   heading: "FLO-Shop",
    //   tools: uidesign,
    //   subheading:
    //     "Modern Flower shop official web site UI/UX Design using figma and photoshop",
    //   imgSrc: Flo,
    //   technology: "uidesign",
    //   href: "https://www.figma.com/proto/QbC5mD6qjy6RwzQLSC8u0y/Flower-shop?page-id=56%3A28&node-id=56-30&viewport=711%2C499%2C0.13&t=8PwO1w6oawXkaXYC-1&scaling=min-zoom&content-scaling=fixed",
    // },
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
  const theme = useTheme();
  return (
    <div
      style={
        {
          // backgroundImage: `url(${Background})`,
        }
      }
    >
      <Container
        sx={{
          py: { md: 15, xs: 5 },
        }}
      >
        <Grid container spacing={4}>
          {projectData.map((project, key) => (
            <ProjectItem key={key} project={project} />
          ))}
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 10,
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: theme.palette.cardBgColor?.main,
            padding: "30px 30px",
            borderRadius: "10px",
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "23px",
                  fontWeight: 600,
                  color: theme.palette.textColor?.Secondary,
                  fontFamily: "Montserrat",
                  lineHeight: "24px",
                }}
              >
                See More UI/UX design projects on Behance
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                href="https://www.behance.net/jeewantharashmika"
                target="_blank"
                // variant="outlined"
                sx={{
                  backgroundColor: "#0057ff",
                  width: { xs: "100%", md: "auto" },
                  mt: { xs: 2, md: 0 },
                  borderColor: theme.palette.btnColor?.main,
                  borderRadius: "30px",
                  padding: "10px 20px ",
                  textTransform: "none",
                  transition:
                    "background-color 0.5s ease, color 0.5s ease , border-radius 0.5s ease",
                  "&:hover": {
                    transition:
                      "background-color 0.5s ease, color 0.5s ease , border-radius 0.5s ease",
                    backgroundColor: "#0057ff",
                    borderRadius: "0px",
                    borderColor: theme.palette.borderColor?.graybg,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    fontFamily: "Montserrat",
                    color: theme.palette.btnColor?.text,
                  }}
                >
                  View more in Behance
                </Typography>
                <FaBehanceSquare
                  size={20}
                  style={{
                    marginLeft: "10px",
                    color: "#fff",
                    // backgroundColor: theme.palette.bgColor?.secondary,
                  }}
                />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
