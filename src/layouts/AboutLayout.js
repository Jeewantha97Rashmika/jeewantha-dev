import React from "react";
import AboutHeroSection from "./About/AboutHeroSection";
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
