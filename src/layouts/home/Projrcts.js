import React from "react";
import DescriptionLayout from "./DescriptionLayout";
import ProjectList from "./ProjectList";

export default function Projrcts() {
  return (
    <div id="work">
      <DescriptionLayout />
      {/* <ScrollEffect> */}
      <ProjectList />
      {/* </ScrollEffect> */}
    </div>
  );
}
