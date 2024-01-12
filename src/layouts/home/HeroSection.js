import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Heading1 from "../../components/common/Heading1";
import { Container, Typography } from "@mui/material";
import ProImage from "../../images/profileImage.png";
import PrimaryBtn from "../../components/common/Primarybtn";
import SecondaryBtn from "../../components/common/SecondaryBtn";
import Marquee from "react-fast-marquee";
import UiSkill from "../../components/about/UiSkills";
import BannerChips from "../../components/BannerChips";

export default function HeroSection() {
  return (
    <div style={{ backgroundColor: "#f6fafd", minHeight: "670px" }}>
      <Container>
        <Box
          sx={{
            width: "100%",
            paddingTop: { xs: "10px", md: "100px" },
            pb: { md: 5, xs: 15 },
          }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item xs={12} md={7} sx={{ order: { xs: 2, md: 1 } }}>
              <Heading1 component={"h1"} text1={"Hello, I'm Jeewantha."} />
              <br></br>
              <Typography
                component={"p"}
                sx={{
                  color: "rgba(112, 112, 112, 1)",
                  fontSize: { xs: "14px", sm: "16px" },
                  fontWeight: 400,
                  fontFamily: "Work Sans",
                }}
              >
                {
                  <span>
                    I am a passionate <b> UI/UX designer</b> who is interested
                    in solving complex problems through designing and
                    <b> mobile app/web development </b> dedicated to crafting
                    exceptional digital experiences.
                  </span>
                }
              </Typography>
              <br></br>
              <br />
              <PrimaryBtn title={"Explore work"} id="work" />
              <SecondaryBtn title={"View my CV"} />
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                order: { xs: 1, md: 2 },
                display: "flex",
                alignItems: { xs: "left", md: "right" },
                justifyContent: { xs: "left", md: "right" },
              }}
            >
              <img src={ProImage} width="350px" height="350px" alt="" />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box
        sx={{
          backgroundColor: "white",
          width: "100%",
          height: "4rem",
          transform: "rotate(-1deg)",
          boxShadow: "0 5px 15px rgba(0,0,0,.1)",
          position: "absolute",
          bottom: { md: 100, xs: 10 },
        }}
      >
        <Marquee>
          <BannerChips />
        </Marquee>
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          width: "100%",
          height: "4rem",
          marginTop:"65px",
          boxShadow: "0 5px 15px rgba(0,0,0,.1)",
          position: "absolute",
          // bottom:{md:100 ,xs:10}
        }}
      >
        <Marquee direction="right" autoFill="true" >
          <Typography
            sx={{
              color: "rgba(112, 112, 112, 1)",
              fontSize: { xs: "14px", sm: "42px" },
              fontWeight: 600,
              fontFamily: "Work Sans",
            }}
          >
            | UI/UX Designer || Web Developer || Mobile Developer || Graphic
            Designer || Content Creator |
          </Typography>
        </Marquee>
      </Box>
    </div>
  );
}
