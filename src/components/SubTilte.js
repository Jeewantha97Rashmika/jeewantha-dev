import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Designer from "../images/designer.svg";
export default function SubTilte() {
  return (
    <Grid container>
      <Grid>
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: "16px", sm: "20px" },
            border: "3px dashed #333333",
            display: "inline-block",
            padding: "0px 10px 0px 10px",
            position: "relative",
            backgroundColor: "#FF595A",
            transform: "rotate(5deg)",
          }}
        >
          UI / UX Designer & Developer
        </Typography>
      </Grid>
      <Grid>
        <Box
          sx={{
            // position: "",
            // bottom: { xs: 390, sm: 270, md: 390, lg: 360 },
            width: { xs: 100, md: 100 },
            // left: { xs: 250, sm: 290, md: 260, lg: 300 },
          }}
        >
          <img src={Designer} alt="Designer" width={"100%"} height={"auto"} />
        </Box>
      </Grid>
    </Grid>
  );
}
