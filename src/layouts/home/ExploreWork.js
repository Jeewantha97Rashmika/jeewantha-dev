import * as React from "react";

import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import Project01 from "../../images/ui_project_01.png";
import Project02 from "../../images/ui_project_02.png";
import Project03 from "../../images/ui_project_03.png";
import Project04 from "../../images/ui_project_04.png";
import Project05 from "../../images/ui_project_05.png";
import Project06 from "../../images/ui_project_06.png";
import { Container } from "@mui/material";
import Heading2 from "../../components/common/Heading2";
import Heading3 from "../../components/common/Heading3";
import BodyText from "../../components/common/BodyText";
export default function ExploreWork() {
  const exploreWork = [
    {
      image: Project01,
      subTitle: "Project / UI/UX Design / ShoeZoon",
      title:
        "Modern Shoe Shopping Solutions Mobile App and Web Admin UI/UX Design using figma ",
    },
    {
      image: Project02,
      subTitle: "Project / UI/UX Design and Develop / Pacient Care",
      title:
        "Mobile app and admin panel UI/UX design and develop for Pacient care Medical system",
    },
    {
      image: Project03,
      subTitle: "Project / UI/UX Design / Hightec Lanka",
      title:
        "Redesign the Setel web design system to improve the quality of the deliverables",
    },
    {
      image: Project04,
      subTitle: "Project / UI/UX Design / Learn Shape",
      title:
        "UI/ UX Design for Java swing library application to learn shaps (This pro premary students)",
    },
    
    {
      image: Project06,
      subTitle: "Project / UI/UX Design / Best mom",
      title:
        "Modern Android app Solutions UI/UX Design using figma",
    },
    {
        image: Project05,
        subTitle: "Project / UI/UX Design / IPL",
        title:
          "Redesign the Setel web design system to wordpress theme",
      },
  ];
  return (
    <Container sx={{ mt: {md:10 ,xs :5} }} id="work">
      <Heading2 component={"h2"} text={"Explore works"} />
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {exploreWork.map((val, key) => {
            return (
              <Grid
                key={key}
                item
                xs={12}
                md={6}
                sx={{
                  mt: 5,
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(0.95)",
                  },
                }}
              >
                <div>
                  <img
                    src={val.image}
                    alt="Shoe Zoon UI design project"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                  <BodyText component={"p"} bodyText={val.subTitle} />
                  <br></br>
                  <Heading3 component={"h3"} text={val.title} />
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}
