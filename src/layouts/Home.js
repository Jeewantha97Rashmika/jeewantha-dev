import React from "react";
import HeroSection from "./home/HeroSection";
import ExploreWork from "./home/ExploreWork";
import { Height } from "@mui/icons-material";

import CountBanner from "./home/CountBanner";
import Services from "./home/Services";
import EduAndExp from "./home/EduAndExp";
import SkillGrid from "./home/SkillGrid";
import Projrcts from "./home/Projrcts";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CountBanner/>
      <Services/>
      <EduAndExp/>
      <SkillGrid/>
      <Projrcts/>
      {/* <ExploreWork /> */}
    </div>
  );
}
