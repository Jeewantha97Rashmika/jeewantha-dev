import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image01 from "../../images/shoezone/15.png";
import Image02 from "../../images/shoezone/16.png";
import Image03 from "../../images/shoezone/17.png";
import Image04 from "../../images/shoezone/18.png";
import Image05 from "../../images/shoezone/19.png";
import Image06 from "../../images/shoezone/20.png";
import Image07 from "../../images/shoezone/21.png";
import Image08 from "../../images/shoezone/22.png";
import Image09 from "../../images/shoezone/23.png";
import Image10 from "../../images/shoezone/24.png";
import Image11 from "../../images/shoezone/25.png";
import Image12 from "../../images/shoezone/26.png";
import Image13 from "../../images/shoezone/27.png";
import Image14 from "../../images/shoezone/28.png";
import { Container } from "@mui/material";

export default function OtherScreenImage() {
  const startedImages = [
    {
      path: Image01,
    },
    {
      path: Image02,
    },
    {
      path: Image03,
    },
    {
      path: Image04,
    },
    {
      path: Image05,
    },
    {
      path: Image06,
    },
    {
      path: Image07,
    },
    {
      path: Image08,
    },
    {
      path: Image09,
    },
    {
      path: Image10,
    },
    {
      path: Image11,
    },
    {
      path: Image12,
    },
    {
      path: Image13,
    },
    {
      path: Image14,
    },
  ];
  return (
    <div
      style={{
        backgroundColor: "#f6fafd",
      }}
    >
      <Container>
        {" "}
        <Box sx={{ width: "100%", flexGrow: 1, pb: 5, mt: 4 }}>
          <Grid container spacing={3}>
            {startedImages.map((val, key) => {
              return (
                <Grid
                  item
                  xs={6}
                  md={2}
                  key={key}
                  sx={{
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(0.95)",
                    },
                  }}
                >
                  <img
                    alt="shoezone"
                    src={val.path}
                    width={700}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
