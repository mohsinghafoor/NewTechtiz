import introImg from "./assets/introImg.png";
import frontendImg from "./assets/User.png";
import backendImg from "./assets/Team.png";
import fullstackImg from "./assets/End.png";
import bulb from "./assets/Understanding.png";
import shield from "./assets/Optimizing.png";
import customers from "./assets/Upgrading.png";
import tools from "./assets/Notch.png";
import satisfaction from "./assets/Delight.png";
import customized from "./assets/Prototyping.png";
import solution from "./assets/Efficient.png";
import Intro from "../Components/Intro";
import OurServices from "../Components/OurServices";
import { Grid, GridItem, Heading, Stack } from "@chakra-ui/react";
import CrossFunctionalApps from "../Components/CrossFunctionalApps";
import Footer from "../../Footer";
import WhatWeOffer from "../Components/WhatWeOffer";
const introData = [
  {
    img: introImg,
    heading: "Software Designs that Pay Off",
    text: "Establishing your internet presence with user-friendly & responsive interfaces",
  },
];
const servicesData = [
  {
    img: frontendImg,

    heading: `User Experience Design`,
    text: `Get rid of difficult to use interfaces and create a delightful user experience for your customers with easily accessible functionalities.`,
    btntext: `Get Started`,
    left: false,
  },

  {
    img: backendImg,
    heading: `Team Augmentation`,
    text: `Establishing your internet presence with attractive designs while utilizing maximum team productivity to help you achieve business goals.`,
    btntext: `Talk to our Design Experts`,
    left: true,
  },
  {
    img: fullstackImg,
    heading: `End-to-End UI Design`,
    text: `Identifying the critical points to make your website/app design stand out among the rest. We take complete responsibility for successful project delivery.`,
    btntext: `Discuss Project`,
    left: false,
  },
];
const crossAppData = [
  {
    logo: bulb,
    heading: `Understanding Requirements`,
    text: `We analyze customer trends to accurately determine the most intuitive design features.`,
  },
  {
    logo: shield,
    heading: `Optimizing Business Pages`,
    text: `Establishing customer loyalty by designing engaging apps and websites based on client’s requirements`,
  },
  {
    logo: customers,
    heading: `Upgrading Brand Identity`,
    text: `Creating a blend of design, usability, and function to develop enjoyable digital experiences.`,
  },
  {
    logo: tools,
    heading: `Taking Your Sales Up a Notch`,
    text: `Launching your business by understanding what the customer desires and sticks to.`,
  },
];
const whatWeOfferData = [
  {
    logo: satisfaction,
    heading: `Delightful User Experience`,
    text: `Today’s businesses are heavily dependent on mobile applications as they enable customers to conveniently interact and perform desired tasks.`,
    btnText: `Estimate Project`,
  },
  {
    logo: solution,
    heading: `Prototyping and Testing`,
    text: `We create prototypes and interact with you throughout the project to ensure that each design feature and functionality works for you.`,
    btnText: `Get Started`,
  },
  {
    logo: customized,
    heading: `Efficient and Functional Apps`,
    text: `Business apps are all about user experience. We deliver every kind of design from simple landing pages to a custom enterprise solution.`,
    btnText: `Discuss a Project`,
  },
];
export default function UI() {
  return (
    <Stack
      align={"center"}
      pt="200px"
      background=" linear-gradient(134.89deg, #EBF1FF 14.48%, rgba(244, 247, 255, 0) 87.06%)"
    >
      {introData.map((introData, index) => (
        <Intro key={index} introData={introData} />
      ))}
      <Heading
        color="#00164D"
        fontWeight={"700"}
        fontSize={{ base: "28px", md: "36px" }}
        fontFamily={"DM Sans"}
        pb="50px"
        maxW={"750px"}
      >
        Our Services
      </Heading>
      {servicesData.map((servicesData, index) => (
        <OurServices key={index} servicesData={servicesData} />
      ))}
      <Heading
        color="#00164D"
        fontWeight={"700"}
        fontSize={{ base: "24px", md: "36px" }}
        fontFamily={"DM Sans"}
        py="30px"
        maxW={"750px"}
        textAlign={{ base: "center", md: "left" }}
      >
        Achieve Business Goals with Intuitive App Design
      </Heading>
      <Grid templateColumns="repeat(12, 1fr)" gap={2} py="35px">
        {crossAppData.map((crossAppData, index) => (
          <GridItem colSpan={{ base: 12, md: 6 }}>
            <CrossFunctionalApps key={index} crossAppData={crossAppData} />
          </GridItem>
        ))}
      </Grid>
      <Heading
        color="#00164D"
        fontWeight={"700"}
        fontSize={{ base: "30px", md: "36px" }}
        fontFamily={"DM Sans"}
        py="50px"
        // mx={{ base: "5", md: "0" }}
        maxW={"750px"}
        textAlign="center"
      >
        What We offer
      </Heading>
      <Grid templateColumns="repeat(12, 1fr)" gap={"25px"} py="35px">
        {whatWeOfferData.map((whatWeOfferData, index) => (
          <GridItem colSpan={{ base: 12, md: 4 }} py="25px">
            <WhatWeOffer whatWeOfferData={whatWeOfferData} />
          </GridItem>
        ))}
      </Grid>
      <Footer />
    </Stack>
  );
}
