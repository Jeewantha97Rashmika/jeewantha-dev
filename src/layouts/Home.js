import React from "react";
import HeroSection from "./home/HeroSection";
import CountBanner from "./home/CountBanner";

import EduAndExp from "./home/EduAndExp";

import Projrcts from "./home/Projrcts";
import FunActivity from "./home/FunActivity";
import Testimonials from "./home/Testimonials";

import ScrollEffect from "../components/common/ScrollEffect";
import Servicesnew from "./home/Servicesnew";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <SkillMarquee/> */}
      {/* <TerminalLayout/> */}
      <CountBanner />
      <ScrollEffect>
        {/* <Services /> */}
        <Servicesnew />
      </ScrollEffect>
      <ScrollEffect>
        <Projrcts />
      </ScrollEffect>
      <ScrollEffect>
        <Testimonials />
      </ScrollEffect>
      <ScrollEffect>
        <EduAndExp />
      </ScrollEffect>
      {/* <SkillAndTech/> */}

      {/* <SkillGrid /> */}
      {/* <BlogSection/> */}
      <ScrollEffect>
        <FunActivity />
      </ScrollEffect>
      {/* <ExploreWork /> */}
      {/* <CursorOne /> */}
    </>
  );
}
