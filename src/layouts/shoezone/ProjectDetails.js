import React from "react";
import Heading2 from "../../components/common/Heading2";
import BodyText from "../../components/common/BodyText";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import NormalText from "../../components/common/NormalText";
import ProjectImage from "../../images/ui_project_01.png";
import { Container } from "@mui/material";
export default function ProjectDetails() {
  return (
    <div style={{ backgroundColor: "#f6fafd", minHeight: "700px" }}>
      <Container sx={{pt:{xs:5,md:7} , width:"90%"}}>
        <BodyText
          component={"p"}
          bodyText={"Project / UI/UX Design / ShoeZone"}
        />
        <Heading2
          component={"h2"}
          text={
            "Modern Shoe Shopping Solutions Mobile App and Web Admin UI/UX Design using figma"
          }
        />
        <Box sx={{ width: "100%", flexGrow: 1, pb: 2, mt: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <img
                alt="shoezone"
                src={ProjectImage}
                width={700}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Grid>
            <Grid item xs={12} md={4} sx={{ mt: 5 }}>
              <Grid container spacing={5}>
                <Grid item xs={6}>
                  <BodyText component={"p"} bodyText={"My role"} />
                  <br></br>
                  <NormalText component={"p"} bodyText={"UI /UX Designer"} />
                  <NormalText component={"p"} bodyText={"Design System"} />
                </Grid>
                <Grid item xs={6}>
                  <BodyText component={"p"} bodyText={"Platform"} />
                  <br></br>
                  <NormalText component={"p"} bodyText={"Android"} />
                  <NormalText component={"p"} bodyText={"IOS"} />
                </Grid>
                <Grid item xs={6}>
                  <BodyText component={"p"} bodyText={"Product"} />
                  <br></br>
                  <NormalText component={"p"} bodyText={"ShoeZone"} />
                </Grid>
                <Grid item xs={6}>
                  <BodyText component={"p"} bodyText={"Year"} />
                  <br></br>
                  <NormalText component={"p"} bodyText={"2023"} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
       
      </Container>
    </div>
  );
}
