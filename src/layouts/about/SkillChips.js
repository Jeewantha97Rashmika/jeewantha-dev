import React from "react";
import { Chip, Container, Grid, Typography } from "@mui/material";
import BodyText from "../../components/common/BodyText";
import DevSkill from "../../components/about/DevSkill";
import UiSkill from "../../components/about/UiSkills";

const SkillsChips = () => {

  return (
    <Container>
      <DevSkill />
      <UiSkill />
    </Container>
  );
};

export default SkillsChips;
