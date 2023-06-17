import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Container sx={{ mt: 20 }}>
      <hr></hr>
      <Box sx={{ mt: 10 }}>
        <Grid item xs={12}>
          <Typography
            component="h3"
            sx={{
              fontSize: "24px",
              fontWeight: 800,
              fontFamily: "Work Sans",
            }}
          >
            Contact
          </Typography>
          <Typography
            component="h3"
            sx={{
              mt: 5,
              color: "rgba(112, 112, 112, 1)",
              fontSize: "20px",
              fontWeight: 400,
              fontFamily: "Work Sans",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(0.99)",
              },
            }}
          >
            jeewantharashmika80@gmail.com
          </Typography>
          <a
            href="https://www.linkedin.com/in/jeewantha-rashmika-b5a56820a/"
            style={{
              textDecoration: "none",
            }}
          >
            <Typography
              component="h3"
              sx={{
                transition: "transform 0.2s",
                "&:hover": {
                  cursor: "pointer",
                  transform: "scale(0.99)",
                },
                mt: 3,
                color: "rgba(112, 112, 112, 1)",
                fontSize: "20px",
                fontWeight: 400,
                fontFamily: "Work Sans",
              }}
            >
              {" "}
              linkedin/in/jeewantha
            </Typography>
          </a>
          <Typography
            component="h3"
            sx={{
              mt: 10,
              mb: 20,
              color: "rgba(112, 112, 112, 1)",
              fontSize: "16px",
              fontWeight: 400,
              fontFamily: "Work Sans",
            }}
          >
            Designed by Jeewantha, built using Gatsby-Js in 2023.
          </Typography>
        </Grid>
      </Box>
    </Container>
  );
}
