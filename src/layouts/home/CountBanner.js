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
            sx={{
              color: "#FFF",
              fontSize: "40px",
              fontWeight: 800,
              fontFamily: "Montserrat",
            }}
          >
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
            I’m a UI/UX Engineer and Designer passionate about creating
            intuitive digital experiences. With{" "}
            {new Date().getFullYear() - 2021} years of experience in web design
            and user experience engineering, I bridge the gap between
            functionality and creativity to deliver impactful solutions
            together.
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
            From interactive prototypes to pixel-perfect designs, I strive to
            craft experiences that not only look stunning but also feel
            seamless. My approach blends technical expertise with a deep
            understanding of user needs, ensuring that every project is as
            functional as it is beautiful.
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
                  color: "#FF7262",
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
                  color: "#fff",
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
                  color: "#FF7262",
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
                  color: "#fff",
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
                  color: "#FF7262",
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
                  color: "#fff",
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
