import React from "react";
import {  Container } from "@mui/material";

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
