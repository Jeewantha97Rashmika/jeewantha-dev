import React from "react";
import DescriptionLayout from "./DescriptionLayout";

import ProjectGrid from "./ProjectGrid";

export default function Projrcts() {
  return (
    <div id="work">
      <DescriptionLayout />
      {/* <ScrollEffect> */}
      {/* <ProjectList /> */}
      <ProjectGrid/>
      {/* </ScrollEffect> */}
    </div>
  );
}
