import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../Footer";
import CrossFunctionalApps from "./CrossFunctionalApps";
import Intro from "./Intro";
import OurServices from "./OurServices";

export default function WebDevelopment() {
  return (
    <Box background=" linear-gradient(134.89deg, #EBF1FF 14.48%, rgba(244, 247, 255, 0) 87.06%)">
      <Intro />
      <OurServices />
      <CrossFunctionalApps />
      <Footer />
    </Box>
  );
}
