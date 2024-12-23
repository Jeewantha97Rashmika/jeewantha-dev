import React from "react";
import HeroSection from "./home/HeroSection";
import CountBanner from "./home/CountBanner";
import Services from "./home/Services";
import EduAndExp from "./home/EduAndExp";
import SkillGrid from "../layouts/home/SkillGrid";
import Projrcts from "./home/Projrcts";
import FunActivity from "./home/FunActivity";
import Testimonials from "./home/Testimonials";
import BlogSection from "./home/BlogSection";
import Terminal from "./home/Terminal";
import TerminalLayout from "./home/TerminalLayout";
import ScrollEffect from "../components/common/ScrollEffect";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <SkillMarquee/> */}
      {/* <TerminalLayout/> */}
      <CountBanner />
      <ScrollEffect>
        <Services />
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
