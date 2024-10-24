import React from "react";
import HeroSection from "./home/HeroSection";
import ExploreWork from "./home/ExploreWork";
import { Height } from "@mui/icons-material";

import CountBanner from "./home/CountBanner";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CountBanner/>
      <ExploreWork />
    </div>
  );
}
