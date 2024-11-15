import React from "react";
import MarqueeItem from "../../components/MarqueeItem";
import Logo1 from "../../images/skill (1).png";
import Logo2 from "../../images/skill (2).png";
import Logo3 from "../../images/skill (3).png";
import Logo4 from "../../images/skill (4).png";
import Logo5 from "../../images/skill (5).png";
import Logo6 from "../../images/skill (6).png";
import Logo7 from "../../images/skill (7).png";
import Logo8 from "../../images/skill (8).png";
import Logo9 from "../../images/skill (9).png";
import Logo10 from "../../images/skill (10).png";
import Logo11 from "../../images/skill (11).png";
import Logo12 from "../../images/skill (12).png";
import Logo13 from "../../images/skill (13).png";
export default function SkillMarquee() {
  const upperMarquee = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

  const lowerMarquee = [Logo7, Logo8, Logo9, Logo10, Logo11, Logo12, Logo13];
  return (
    <div className="container mx-auto">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
      <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} />
    </div>
  );
}
