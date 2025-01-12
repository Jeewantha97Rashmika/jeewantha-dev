import React from "react";
import HeroSection from "./home/HeroSection";
import CountBanner from "./home/CountBanner";
import EduAndExp from "./home/EduAndExp";
import Projrcts from "./home/Projrcts";
import FunActivity from "./home/FunActivity";
import Testimonials from "./home/Testimonials";
import Servicesnew from "./home/Servicesnew";
import { Box, useTheme } from "@mui/material";

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ backgroundColor: theme.palette.bgColor?.main }}>
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
