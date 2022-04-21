import React from "react";
import { Stack } from "@chakra-ui/react";
import IndustriesBusiness from "./Business";
import FoodIndustry from "./FoodIndustries";
import EducationIndustry from "./EducationIndustry";
import ECommerce from "./ECommerce";
import SocialNetwork from "./SocialNetworking";
import MVPs from "./MVPs";
import Footer from "../Footer";
export default function Industries() {
  return (
    <>
      <IndustriesBusiness />
      <FoodIndustry />
      <EducationIndustry />
      <ECommerce />
      <SocialNetwork />
      <MVPs />
      <Footer />
    </>
  );
}
