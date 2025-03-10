import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import GetStarted01 from "../../images/shoezone/11.png";
import GetStarted02 from "../../images/shoezone/12.png";
import GetStarted03 from "../../images/shoezone/13.png";
import GetStarted04 from "../../images/shoezone/14.png";

import { Container } from "@mui/material";

export default function HomeImage() {
  const startedImages = [
    {
      path: GetStarted01,
    },
    {
      path: GetStarted02,
    },
    {
      path: GetStarted03,
    },
    {
      path: GetStarted04,
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
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
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
