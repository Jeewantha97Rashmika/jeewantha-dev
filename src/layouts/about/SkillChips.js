import React from "react";
import { Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import DevSkill from "../../components/about/DevSkill";
import UiSkill from "../../components/about/UiSkills";
import HarlfCircel from "../../images/circel.svg";

const SkillsChips = () => {

  return (
    <div style={{
      position: "relative"
    }}>
      <Container sx={{
        pb: 8,

      }}>
        <Box
          component={motion.div}
          initial={{ opacity: 1, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 2, type: "spring" }}
          sx={{
            position: "absolute",
            display: { xs: "none", lg: "block" },
            bottom: { xs: 220, md: 400 },
            left: { xs: -30, md: 0 },
            width: "auto",
            height: "auto",
            overflow: "hidden",
          }}
        >
          <img
            src={HarlfCircel}
            style={{
              transform: "rotate(0deg)",
            }}
            alt="HarlfCircel"
          />
        </Box>
        <DevSkill />
        <UiSkill />
      </Container>
    </div>
  );
};

export default SkillsChips;
