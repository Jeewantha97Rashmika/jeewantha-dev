import { Grid, Typography, Box, Container, useTheme } from "@mui/material";
import React from "react";
import MainBtn from "../../components/MainBtn";

export default function DescriptionLayout({description,btnTitle}) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.bgColor?.dec,
        transition: "background-color 0.5s ease, color 0.5s ease",

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
                color: theme.palette.textColor?.decText,
              }}
            >
              hire me Now?
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              sx={{
                fontSize: { xs: "16px"},
                color: "#1F1F1F",
                fontWeight: 400,
                mb: 3,
              }}
            >
              Explore my design services, from user interface and experience to
              prototyping and testing. Let's craft exceptional digital
              experiences together.
            </Typography>
            <MainBtn title={"Hire Me"}/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
