import React from "react";
import HeroSection from "./home/HeroSection";
import CountBanner from "./home/CountBanner";
import Services from "./home/Services";
import EduAndExp from "./home/EduAndExp";
import SkillGrid from "./home/SkillGrid";
import Projrcts from "./home/Projrcts";
import FunActivity from "./home/FunActivity";
import { CursorOne } from "cursor-style";
import Testimonials from "./home/Testimonials";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <CountBanner />
      <Services />
      <Projrcts />
      <Testimonials />
      <EduAndExp />
      {/* <SkillGrid /> */}
      <FunActivity />
      {/* <ExploreWork /> */}
      <CursorOne />
    </div>
  );
}
