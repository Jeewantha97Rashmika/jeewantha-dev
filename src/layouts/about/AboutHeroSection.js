import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Heading1 from "../../components/common/Heading1";

import { Container, Typography } from "@mui/material";
import ProImage from "../../images/pro2.jpg";
import SecondaryBtn from "../../components/common/SecondaryBtn";

export default function AboutHeroSection() {
  return (
    <div style={{ backgroundColor: "#f6fafd", minHeight: "700px" }}>
      <Container>
        <Box
          sx={{ width: "100%", paddingTop: { xs: "10px", md: "100px" }, pb: 5 }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item xs={12} md={7} sx={{ order: { xs: 2, md: 1 } }}>
              <Heading1
                component={"h1"}
                text1={"A UI / UX designer,a mobile/web developer."}
              />
              <br />
              <Typography
                component={"p"}
                sx={{
                  color: "rgba(112, 112, 112, 1)",
                  fontSize: { xs: "14px", sm: "16px" },
                  fontWeight: 400,
                fontFamily: "Montserrat",
                }}
              >
                {
                  <span>
                    I’m a Ui / Ux designer from Sri Lanka passionate about
                    solving complex problems through designing and development.
                    My primary focus is mobile/web app development and
                    mobile/web designing. I have a favour for gaming 🖥️ and
                    playing guitar. 🎸
                  </span>
                }
              </Typography>
              <br></br>
              <br />
              {/* <SecondaryBtn title={"View my CV"} /> */}

              <SecondaryBtn
                title={"View Linedin"}
                url={
                  "https://www.linkedin.com/in/jeewantha-rashmika-b5a56820a/"
                }
              />
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
              <img
                src={ProImage}
                width="350px"
                height="440px"
                alt=""
                style={{
                  borderRadius: "10px",
                  boxShadow: "0 5px 15px rgba(0,0,0,.1)",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
