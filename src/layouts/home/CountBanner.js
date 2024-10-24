import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
export default function CountBanner() {
  return (
    <div
      style={{
        backgroundColor: "#2C2B2E",
      }}
    >
      <Container>
        <Box
          sx={{
            Height: "50vh",
            py: 5,
          }}
        >
          <Grid container>
            <Grid xs={12} md={4}>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "64px",
                  fontWeight: 800,
                  fontFamily: "Work Sans",
                  textAlign: "center",
                }}
              >
                100+
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "16px",
                  fontWeight: 400,
                  fontFamily: "Work Sans",
                  textAlign: "center",
                }}
              >
                Projects Done
              </Typography>
            </Grid>
            <Grid xs={12} md={4}>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "64px",
                  fontWeight: 800,
                  fontFamily: "Work Sans",
                  textAlign: "center",
                }}
              >
                04+
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "16px",
                  fontWeight: 400,
                  fontFamily: "Work Sans",
                  textAlign: "center",
                }}
              >
                Years of Experience
              </Typography>
            </Grid>
            <Grid xs={12} md={4}>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "64px",
                  fontWeight: 800,
                  fontFamily: "Work Sans",
                  textAlign: "center",
                }}
              >
                198+
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "16px",
                  fontWeight: 400,
                  fontFamily: "Work Sans",
                  textAlign: "center",
                }}
              >
                Clients
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
