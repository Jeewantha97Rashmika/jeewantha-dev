import React from "react";
import { Container } from "@mui/material";

import DevSkill from "../../components/about/DevSkill";
import UiSkill from "../../components/about/UiSkills";

const SkillsChips = () => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Container
        sx={{
          pb: 8,
        }}
      >
        
        <DevSkill />
        <UiSkill />
      </Container>
    </div>
  );
};

export default SkillsChips;
