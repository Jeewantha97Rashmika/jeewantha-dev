import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Heading1 from "../../components/common/Heading1";
import { Container, Typography } from "@mui/material";
import GridImage from "../../images/grid.svg";
import ProfileImage from "../../images/gridux.svg";
import MainBtn from "../../components/MainBtn";
import HarlfCircel from "../../images/circel.svg";
import Typewrite from "../../components/Typewrite";
import SubTilte from "../../components/SubTilte";
import BigTextnimation from "../../components/BigTextnimation";
import { motion } from "framer-motion";
import { Scale } from "@mui/icons-material";
export default function HeroSection() {
  const handleLinkedinClick = () => {
    window.location.href =
      "https://www.linkedin.com/in/jeewantha-rashmika-b5a56820a/"; // Replace with your desired URL
  };

  const examples = [
    " Hello , How are you?",
    " Contact me to know more",
    " jeewantharashmika80@gmail.com",
    " 077 123 4567 | 077 123 4567",
  ];
  return (
    <Box
      sx={{
        backgroundColor: "#f6fafd",
        minHeight: { xs: "550px", md: "700px" },
        backgroundImage: `url(${GridImage})`,
      }}
    >
      <Container
        sx={{
          position: "relative",
          zIndex: 100,
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
              sx={{ order: { xs: 1, md: 2 }, mt: { xs: 5, md: 4, lg: 7 } }}
            >
              <motion.div
                initial={{ opacity: 1, x: 300, rotate: 60 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 2, type: "spring" }}
              >
                <Box
                  sx={{
                    paddingLeft: { xs: 0, md: "15px" },
                    position: "relative",
                  }}
                >
                  <SubTilte />
                  <Box
                    sx={
                      {
                        // backgroundColor: { xs: "none", md: "#f6fafd" },
                      }
                    }
                  >
                    <Heading1
                      component={"h1"}
                      text1={"Hello, I'm Jeewantha."}
                    />
                  </Box>
                  <br></br>
                  <Typography
                    component={"p"}
                    sx={{
                      color: "rgba(112, 112, 112, 1)",
                      fontSize: { xs: "16px", sm: "18px" },
                      textAlign: "justify",
                      fontFamily: "Montserrat",
                      fontWeight: 500,
                      lineHeight: 1.6,
                      backgroundColor: "#f6fafd",
                    }}
                  >
                    {
                      <span>
                        I am a passionate <b> UI/UX designer</b> who is
                        interested in solving complex problems through designing
                        and
                        <b> mobile app/web development </b> dedicated to
                        crafting exceptional digital experiences.
                      </span>
                    }
                  </Typography>
                  <br />
                  <Typewrite examples={examples} />
                  <br></br>
                  <br />
                  <Box>
                    <MainBtn handleLinkedinClick={handleLinkedinClick} />
                  </Box>
                </Box>
              </motion.div>
              {/* <SecondaryBtn title={"View my CV"} /> */}
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

      <Box
        component={motion.div}
        initial={{ opacity: 1, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, type: "spring" }}
        sx={{
          position: "absolute",
          top: { xs: 100, md: 200 }, // Align to top
          right: { xs: 0, md: 0 }, // Align to rightZ
          width: "auto",
          height: "auto",
          overflow: "hidden",
        }}
      >
        <img
          src={HarlfCircel}
          style={{
            transform: "rotate(180deg)",
            overflow: "hidden",
          }}
          alt="HarlfCircel"
        />
      </Box>

      {/* Bottom HarlfCircel */}
      <Box
        component={motion.div}
        initial={{ opacity: 1, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, type: "spring" }}
        sx={{
          position: "absolute",
          bottom: { xs: 220, md: 400 },
          left: { xs: -30, md: 0 },
          width: "auto",
          height: "auto",
          overflow: "hidden",
        }}
      >
        <img
          src={HarlfCircel}
          style={{
            transform: "rotate(0deg)",
          }}
          alt="HarlfCircel"
        />
      </Box>
    </Box>
  );
}
