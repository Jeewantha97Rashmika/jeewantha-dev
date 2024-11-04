import React from "react";
import { Container, Grid, Box, Typography, Button } from "@mui/material";
import Logo from "../images/mylogo.svg";
import { useMediaQuery } from "@mui/material";
export default function Footer() {
  const handleLinkedinClick = () => {
    window.location.href =
      "https://www.linkedin.com/in/jeewantha-rashmika-b5a56820a/"; // Replace with your desired URL
  };
  const handleAboutClick = () => {
    window.location.href = "/about"; // Replace with your desired URL
  };
  const handleWordClick = () => {
    window.location.href = "/#work"; // Replace with your desired URL
  };
  const handleKnowledgeClick = () => {
    window.location.href = "/#knowledge-sharing"; // Replace with your desired URL
  };

  const isMobile = useMediaQuery("(max-width: 920px)");
  return (
    <div
      style={{
        backgroundColor: "#1F1F1F",
      }}
    >
      <Container sx={{ pt: { xs: 10 },}}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={Logo} alt="logo" width={200} />
        </Box>
        <Box sx={{ mt: { md: 10, xs: 5 } }}>
          <Grid item xs={12}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                onClick={handleAboutClick}
                color="inherit"
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
                  fontSize: "18px",
                  padding: "5px 20px",
                  transition: "transform 0.2s",
                }}
              >
                About
              </Button>
              <Button
                onClick={handleWordClick}
                color="inherit"
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
                  fontSize: "18px",
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
                  fontSize: "18px",
                  padding: "5px 20px",
                  transition: "transform 0.2s",
                }}
              >
                Knowledge Sharing
              </Button>
              <Button
                onClick={handleLinkedinClick}
                color="inherit"
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
                  fontSize: "18px",
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
      <Box sx={{ display: "flex", justifyContent: "center" ,pb: { md:3, xs: 3 }}}>
        <Typography
          component="h3"
          sx={{
            mt: { md: 10, xs: 5 },
            transition: "transform 0.2s",
            color: "#f1f1f1",
            fontSize: { xs: "12px", md: "14px" },
            fontWeight: 400,
            fontFamily: "Montserrat",
          }}
        >
          Designed by Jeewantha, built using Gatsby-Js in 2023.
        </Typography>
      </Box>
    </div>
  );
}
