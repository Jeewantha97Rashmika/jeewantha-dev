import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Heading1 from "../../components/common/Heading1";
import { Container, Typography } from "@mui/material";
import GridImage from "../../images/grid.svg";
import ProfileImage from "../../images/heroimage.png";
import MainBtn from "../../components/MainBtn";
import Typewrite from "../../components/Typewrite";
import SubTilte from "../../components/SubTilte";
import BigTextnimation from "../../components/BigTextnimation";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles"; // Import useTheme
import SecondaryBtn from "../../components/common/SecondaryBtn";

export default function HeroSection() {
  const theme = useTheme();
  const handleClick = () => {
    window.location.href = "/#work";
  };
  const examples = [" Hello , How are you?", " Contact me to know more"];

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.bgColor?.main,
        transition: "background-color 0.5s ease, color 0.5s ease",
        backgroundImage: `url(${GridImage})`,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: { xs: 520, md: 250 },
          left: { xs: "50%", md: "40%" },
          transform: "translateX(-50%)",
          width: { xs: "300px", md: "800px" },
          height: { xs: "300px", md: "400px" },
          borderRadius: "50%",
          backgroundColor: "rgba(255, 0, 0, 0.2)",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      ></Box>
      {/* <ScrollEffect> */}
      <Container
        sx={{
          position: "relative",
          // zIndex: 10,
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
              sx={{ order: { xs: 1, md: 2 }, mt: { xs: 5, md: 15, lg: 10 } }}
            >
              <motion.div
              // initial={{ opacity: 1, x: 300, rotate: 60 }}
              // animate={{ opacity: 1, x: 0, rotate: 0 }}
              // transition={{ duration: 1, type: "spring" }}
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
                      text1={"Hello, I'm "}
                      text2={"Jeewantha"}
                    />
                  </Box>
                  <br></br>
                  <Typography
                    component={"p"}
                    sx={{
                      color: theme.palette.textColor?.secondary,
                      fontSize: { xs: "16px", sm: "18px" },
                      textAlign: "justify",
                      fontFamily: "Montserrat",
                      fontWeight: 500,
                      lineHeight: 1.6,
                      // backgroundColor: theme.palette.bgColor?.main,
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
                  <Grid
                    container
                    spacing={2}
                    alignItems="flex-start"
                    justifyContent={{ xs: "center", md: "flex-start" }}
                  >
                    <Grid item xs={12} lg={6}>
                      <MainBtn title={"Let’s Collaborate"} size={"100%"}/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <SecondaryBtn title={"Look Work"} handleClick = {handleClick} />
                    </Grid>
                  </Grid>
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
                    zIndex: 2,
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
