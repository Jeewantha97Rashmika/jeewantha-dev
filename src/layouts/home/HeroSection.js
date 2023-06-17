import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Heading1 from "../../components/common/Heading1";
import { Container, Typography } from "@mui/material";
import ProImage from "../../images/profileImage.png";
import PrimaryBtn from "../../components/common/Primarybtn";
import SecondaryBtn from "../../components/common/SecondaryBtn";

export default function HeroSection() {
  return (
    <div style={{ backgroundColor: "#f6fafd", minHeight: "70vh" }}>
      <Container>
        <Box sx={{ width: "100%", paddingTop: { xs: "10px", md: "150px" } }}>
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
                  fontSize: { xs: "14px", sm: "20px" },
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
    </div>
  );
}
