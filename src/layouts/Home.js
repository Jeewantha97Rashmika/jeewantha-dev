import React from 'react';
import HeroSection from "./home/HeroSection";
import CountBanner from "./home/CountBanner";
import Services from "./home/Services";
import EduAndExp from "./home/EduAndExp";

import Projrcts from "./home/Projrcts";
import FunActivity from "./home/FunActivity";
import Testimonials from "./home/Testimonials";
import BlogSection from './home/BlogSection';

export default function Home() {
  
 
  return (
    <>
      
      <HeroSection />
      {/* <SkillMarquee/> */}
      <CountBanner />
      <Services />
      <Projrcts />
      <Testimonials />
      <EduAndExp />
      {/* <SkillAndTech/> */}

      {/* <SkillGrid /> */}
      <BlogSection/>
      <FunActivity />
      {/* <ExploreWork /> */}
      {/* <CursorOne /> */}
    </>

  );
}
