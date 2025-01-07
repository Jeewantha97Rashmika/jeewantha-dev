import React from "react";
import { Container, Grid, Box, Typography, Button } from "@mui/material";
import Logo from "../images/mylogo3.svg";
import { useMediaQuery } from "@mui/material";
import MainBtn from "../components/MainBtn";
import Pattern from "../images/pattern.png";
export default function Footer() {
  const handleLinkedinClick = () => {
    window.location.href =
      "https://www.linkedin.com/in/jeewantha-rashmika-b5a56820a/"; // Replace with your desired URL
  };
  const handleServicesClick = () => {
    window.location.href = "/#services"; // Replace with your desired URL
  };
  const handleWordClick = () => {
    window.location.href = "/#work"; // Replace with your desired URL
  };
  // const handleKnowledgeClick = () => {
  //   window.location.href = "/#knowledge-sharing"; // Replace with your desired URL
  // };

  const isMobile = useMediaQuery("(max-width: 920px)");
  return (
    <div
      style={{
        backgroundColor: "#1F1F1F",
        transition: "background-color 0.5s ease, color 0.5s ease",
        mask: `url(${Pattern}) repeat-x`,
        // backgroundImage: `url(${Pattern})`,
        // maskImage: `url(${Pattern})`,
        maskSize: "auto",
        maskRepeat: "repeat-x",
        maskOrigin: "border-box",
        maskClip: "border-box",
        maskComposite: "add",
        maskMode: "match-source",
        WebkitMaskPositionX: "0%", // CamelCase for Webkit properties
        WebkitMaskPositionY: "0%",
      }}
    >
      <Container sx={{ pt: { xs: 10 } }}>
        <Box
          sx={{
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={Logo} alt="logo" width={200} />
          <Typography sx={{ color: "white", mt: 2, mb: 3 }}>
            {" "}
            <a
              href="mailto:jeewantharashmika80@gmail.com"
              style={{ color: "#ffff" }}
            >
              jeewantharashmika80@gmail.com{" "}
            </a>
          </Typography>
          <MainBtn title={"Contact Me"} />
        </Box>
        <Box sx={{ mt: { md: 10, xs: 5 } }}>
          <Grid item xs={12}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                onClick={handleServicesClick}
                color="inherit"
                sx={{
                  color: "white",
                  ml: 2,
                  display: isMobile ? "block" : "inline",
                  "&:hover": {
                    // backgroundColor: "#e8f5ff",
                    padding: "5px 20px",
                    borderRadius: "40px",
                    transform: "scale(0.95)",
                  },
                  fontFamily: "Montserrat",
                  textAlign: "center",
                  textTransform: "none",
                  fontSize: "16px",
                  padding: "5px 20px",
                  transition: "transform 0.2s",
                }}
              >
                Services
              </Button>
              <Button
                onClick={handleWordClick}
                color="inherit"
                sx={{
                  color: "white",
                  ml: 2,
                  display: isMobile ? "block" : "inline",
                  "&:hover": {
                    // backgroundColor: "#e8f5ff",
                    padding: "5px 20px",
                    borderRadius: "40px",
                    transform: "scale(0.95)",
                  },
                  fontFamily: "Montserrat",
                  textAlign: "center",
                  textTransform: "none",
                  fontSize: "16px",
                  padding: "5px 20px",
                  transition: "transform 0.2s",
                }}
              >
                Work
              </Button>
              {/* <Button
                color="inherit"
                onClick={handleKnowledgeClick}
                sx={{
                  color: "white",
                  ml: 2,
                  display: isMobile ? "none" : "inline",
                  "&:hover": {
                    // backgroundColor: "#e8f5ff",
                    padding: "5px 20px",
                    borderRadius: "40px",
                    transform: "scale(0.95)",
                  },
                  fontFamily: "Montserrat",
                  textAlign: "center",
                  textTransform: "none",
                  fontSize: "16px",
                  padding: "5px 20px",
                  transition: "transform 0.2s",
                }}
              >
                Knowledge Sharing
              </Button> */}
              <Button
                onClick={handleLinkedinClick}
                color="inherit"
                sx={{
                  color: "white",
                  ml: 2,
                  display: isMobile ? "block" : "inline",
                  "&:hover": {
                    // backgroundColor: "#e8f5ff",
                    padding: "5px 20px",
                    borderRadius: "40px",
                    transform: "scale(0.95)",
                  },
                  fontFamily: "Montserrat",
                  textAlign: "center",
                  textTransform: "none",
                  fontSize: "16px",
                  padding: "5px 20px",
                  transition: "transform 0.2s",
                }}
              >
                Linkedin
              </Button>
            </div>
          </Grid>
        </Box>
      </Container>
      {/* <Box>
        <Button
          onClick={handleServicesClick}
          color="inherit"
          sx={{
            color: "white",
            ml: 2,

            "&:hover": {
              // backgroundColor: "#e8f5ff",
              padding: "5px 20px",
              borderRadius: "40px",
              transform: "scale(0.95)",
            },
            fontFamily: "Montserrat",
            textAlign: "center",
            textTransform: "none",
            fontSize: "14px",
            padding: "5px 20px",
            transition: "transform 0.2s",
          }}
        >
          Services
        </Button>
        <Button
          onClick={handleWordClick}
          color="inherit"
          sx={{
            color: "white",
            ml: 2,

            "&:hover": {
              // backgroundColor: "#e8f5ff",
              padding: "5px 20px",
              borderRadius: "40px",
              transform: "scale(0.95)",
            },
            fontFamily: "Montserrat",
            textAlign: "center",
            textTransform: "none",
            fontSize: "14px",
            padding: "5px 20px",
            transition: "transform 0.2s",
          }}
        >
          Work
        </Button>
        <Button
          color="inherit"
          onClick={handleKnowledgeClick}
          sx={{
            color: "white",
            ml: 2,
            "&:hover": {
              // backgroundColor: "#e8f5ff",
              padding: "5px 20px",
              borderRadius: "40px",
              transform: "scale(0.95)",
            },
            fontFamily: "Montserrat",
            textAlign: "center",
            textTransform: "none",
            fontSize: "14px",
            padding: "5px 20px",
            transition: "transform 0.2s",
          }}
        >
          Knowledge Sharing
        </Button>
      </Box> */}
      <hr style={{ border: "1px solid #2B2B2B", marginTop: "20px" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pb: { md: 3, xs: 3 },
        }}
      >
        <Typography
          component="h3"
          sx={{
            mt: { md: 5, xs: 5 },
            transition: "transform 0.2s",
            color: "#f1f1f1",
            fontSize: { xs: "12px", md: "14px" },
            fontWeight: 600,
            fontFamily: "Montserrat",
          }}
        >
          Copyright © 2025 Jeewantha Rashmika. All rights reserved.
        </Typography>
        <Typography
          component="h3"
          sx={{
            transition: "transform 0.2s",
            color: "#f1f1f1",
            fontSize: { xs: "10px", md: "12px" },
            fontWeight: 400,
            fontFamily: "Montserrat",
          }}
        >
          Designed & developed by Jeewantha Rashmika
        </Typography>
      </Box>
    </div>
  );
}
