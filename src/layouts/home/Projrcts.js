import React from "react";
import DescriptionLayout from "./DescriptionLayout";
import loadable from "@loadable/component";

const ProjectGrid = loadable(() => import("./ProjectGrid"));

export default function Projrcts() {
  return (
    <div id="work">
      <DescriptionLayout />
      {/* <ScrollEffect> */}
      {/* <ProjectList /> */}
      <ProjectGrid />
      {/* </ScrollEffect> */}
    </div>
  );
}
