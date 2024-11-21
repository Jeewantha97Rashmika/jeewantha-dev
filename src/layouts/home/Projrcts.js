import React from "react";
import DescriptionLayout from "./DescriptionLayout";
import ProjectList from "./ProjectList";
import ScrollEffect from "../../components/common/ScrollEffect";

export default function Projrcts() {
  return (
    <div id="projects">
      <DescriptionLayout />
      {/* <ScrollEffect> */}
        <ProjectList />
      {/* </ScrollEffect> */}
    </div>
  );
}
