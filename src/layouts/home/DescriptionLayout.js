import { Grid, Typography, Box, Container } from "@mui/material";
import React from "react";
import MainBtn from "../../components/MainBtn";

export default function DescriptionLayout() {
  return (
    <Box
      sx={{
        backgroundColor: "#FFD3D0",
        height: { xs: "35vh", md: "25vh" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={5}>
            <Typography
              sx={{
                fontSize: { xs: "30px", md: "40px" },
                fontWeight: "bold",
                color: "#0B0C0C",
              }}
            >
              Why you should{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "30px", md: "40px" },
                fontWeight: "bold",
                color: "#FF595A",
              }}
            >
              hire me Now?
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                color: "#1F1F1F",
                fontWeight: 400,
                mb: 3,
              }}
            >
              Explore my design services, from user interface and experience to
              prototyping and testing. Let's craft exceptional digital
              experiences together.
            </Typography>
            <MainBtn />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
