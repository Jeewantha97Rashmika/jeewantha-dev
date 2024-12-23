import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Heading1 from "../../components/common/Heading1";
import { Container, Typography } from "@mui/material";
import GridImage from "../../images/grid.svg";
import ProfileImage from "../../images/gridux.svg";
import MainBtn from "../../components/MainBtn";
import Typewrite from "../../components/Typewrite";
import SubTilte from "../../components/SubTilte";
import BigTextnimation from "../../components/BigTextnimation";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles"; // Import useTheme

export default function HeroSection() {
  const theme = useTheme();

  const examples = [" Hello , How are you?", " Contact me to know more"];
  const bgColor = theme.palette.bgColor?.main;

  return (
    <Box
      sx={{
        backgroundColor: bgColor,
        transition: "background-color 0.5s ease, color 0.5s ease",

        backgroundImage: `url(${GridImage})`,
      }}
    >
      {/* <ScrollEffect> */}
      <Container
        sx={{
          position: "relative",
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            width: "100%",
            paddingLeft: { xs: 0, md: "15px" },
          }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid
              item
              xs={12}
              md={5}
              sx={{ order: { xs: 1, md: 2 }, mt: { xs: 5, md: 4, lg: 10 } }}
            >
              <motion.div
                initial={{ opacity: 1, x: 300, rotate: 60 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 1, type: "spring" }}
              >
                <Box
                  sx={{
                    paddingLeft: { xs: 0, md: "15px" },
                    position: "relative",
                  }}
                >
                  <SubTilte />
                  <Box>
                    <Heading1
                      component={"h1"}
                      text1={"Hello, I'm Jeewantha."}
                    />
                  </Box>
                  <br></br>
                  <Typography
                    component={"p"}
                    sx={{
                      color: theme.palette.textColor?.main,
                      fontSize: { xs: "16px", sm: "18px" },
                      textAlign: "justify",
                      fontFamily: "Montserrat",
                      fontWeight: 500,
                      lineHeight: 1.6,
                      backgroundColor: theme.palette.bgColor?.main,
                      transition: "background-color 0.5s ease, color 0.5s ease",
                    }}
                  >
                    {
                      <span>
                        {/* I am a passionate <b> UI/UX designer</b> who is
                        interested in solving complex problems through designing
                        and
                        <b> mobile app/web development </b> dedicated to
                        crafting exceptional digital experiences. */}
                        Welcome to my portfolio of captivating digital
                        experiences. Explore my work and let's create something
                        extraordinary together.
                      </span>
                    }
                  </Typography>
                  <br />
                  <Typewrite examples={examples} />
                  <br></br>
                  <br />
                  <MainBtn title={"Hire me just now"} />
                </Box>
              </motion.div>
            </Grid>
            <Grid
              item
              xs={12}
              md={7}
              sx={{
                order: { xs: 2, md: 1 },
                display: "flex",
                justifyContent: "start",
                alignItems: "left",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  // marginTop: "20px",
                  pt: { md: 10, lg: 0, xl: 5 },
                }}
              >
                <img
                  src={ProfileImage}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    position: "relative",
                  }}
                  alt="knovik"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <BigTextnimation />
    </Box>
  );
}
