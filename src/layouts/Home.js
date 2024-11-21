import React, { useState } from 'react';
import { CssBaseline, Button } from '@mui/material';
import HeroSection from "./home/HeroSection";
import CountBanner from "./home/CountBanner";
import Services from "./home/Services";
import EduAndExp from "./home/EduAndExp";
import SkillGrid from "./home/SkillGrid";
import Projrcts from "./home/Projrcts";
import FunActivity from "./home/FunActivity";
import { CursorOne } from "cursor-style";
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
