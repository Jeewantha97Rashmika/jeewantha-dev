import React from "react";
import HeroSection from "./home/HeroSection";
import CountBanner from "./home/CountBanner";
import EduAndExp from "./home/EduAndExp";
import Projrcts from "./home/Projrcts";
import FunActivity from "./home/FunActivity";
import Testimonials from "./home/Testimonials";
import Servicesnew from "./home/Servicesnew";
import { Box } from "@mui/material";

export default function Home() {

  return (
    <>
      <Box>
        {" "}
        <HeroSection />
        {/* <SkillMarquee/> */}
        {/* <TerminalLayout/> */}
        <CountBanner />
        {/* <Services /> */}
        <Servicesnew />
        <Projrcts />
        <Testimonials />
        <EduAndExp />
        {/* <Sreen /> */}
        {/* <SkillAndTech/> */}
        {/* <SkillGrid /> */}
        {/* <BlogSection/> */}
        <FunActivity />
        {/* <ExploreWork /> */}
        {/* <CursorOne /> */}
      </Box>
    </>
  );
}
