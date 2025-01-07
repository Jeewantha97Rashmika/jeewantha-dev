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
        transition: "background-color 0.5s ease, color 0.5s ease",

        marginTop: "-5px",
        zIndex: 100,
        pb: 3,
        // borderRadius: "3rem",
      }}
    >
      <Container>
        <Box
          sx={{
            py: 5,
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
           sx={{ color: "#FFF", fontSize: "40px", fontWeight: 800 , fontFamily: "Montserrat"}}>
            
              About Me
          
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: "16px",
              fontWeight: 400,
              fontFamily: "Montserrat",
              textAlign: "center",
              maxWidth: "800px",
            }}
          >
            I'm Jeewantha Rashmika, a UI/UX designer dedicated to crafting intuitive and
            visually stunning digital experiences. With a passion for
            user-centric design, I transform ideas into functional and beautiful
            interfaces. Let's collaborate and shape the future of design
            together.
          </Typography>
        </Box>
        <Box
          sx={{
            py: 1,
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={4}>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "64px",
                  fontWeight: 800,
                  fontFamily: "Montserrat",
                  textAlign: "center",
                }}
              >
                <CountUp start={0} end={150} />
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
            <Grid item xs={12} sm={4}>
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
            <Grid item xs={12} sm={4}>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "64px",
                  fontWeight: 800,
                  fontFamily: "inter",
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
