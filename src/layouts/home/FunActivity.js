import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import DescriptionLayout from "./DescriptionLayout";
import PhotoSet from "./PhotoSet";

export default function FunActivity() {
  return (
    <div>
      <DescriptionLayout/>
      <PhotoSet/>
    </div>
  )
}
