import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image01 from "../../images/shoezone/6.png";
import Image02 from "../../images/shoezone/7.png";
import Image03 from "../../images/shoezone/8.png";
import Image04 from "../../images/shoezone/9.png";
import Image05 from "../../images/shoezone/10.png";
import { Container } from "@mui/material";

export default function SignImage() {
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
  ];
  return (
    <div
      style={{
        backgroundColor: "#f6fafd",
        transition: "background-color 0.5s ease, color 0.5s ease",

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
