import React from "react";
import AboutHeroSection from "./about/AboutHeroSection";
import WorkingExperince from "./about/WorkingExperince";
import SkillAndTech from "./about/SkillAndTech";
import SkillsChips from "./about/SkillChips";

export default function AboutLayout() {
  return (
    <div>
      <AboutHeroSection />
      <WorkingExperince/>
      <SkillAndTech/>
      <SkillsChips/>

    </div>
  );
}
