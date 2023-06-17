import React from "react";
import { Container, Grid, Box } from "@mui/material";
import Heading2 from "../../components/common/Heading2";
import SkillDescription from "../../components/about/SkillDescription";

export default function SkillAndTech() {
  return (
    <Container>
      <Heading2 component={"h2"} text={"Explore works"} />

      <Box sx={{ width: "100%", mt: 5 }}>
        <Grid item xs={12}>
          <SkillDescription />
        </Grid>
      </Box>
    </Container>
  );
}
