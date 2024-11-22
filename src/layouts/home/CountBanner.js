import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Container, Typography, useTheme } from "@mui/material";
import CountUp from "react-countup";


export default function CountBanner() {
const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary?.offBlack,
        marginTop: "-5px",
        zIndex:100,

        // borderRadius: "3rem",
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
                  fontFamily: "Montserrat",
                  textAlign: "center",
                }}
              >
                <CountUp start={0} end={100} />
                {"+"}
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "16px",
                  fontWeight: 400,
                  fontFamily: "Montserrat",
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
                  fontFamily: "inter",
                  textAlign: "center",
                }}
              >
                <CountUp start={0} end={4} />
                {"+"}
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "16px",
                  fontWeight: 400,
                  fontFamily: "inter",
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
                  fontFamily: "inter",
                  textAlign: "center",
                }}
              >
                <CountUp start={0} end={198} />
                {"+"}
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "16px",
                  fontWeight: 400,
                  fontFamily: "inter",
                  textAlign: "center",
                }}
              >
                Clients
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      
    </Box>
  );
}
