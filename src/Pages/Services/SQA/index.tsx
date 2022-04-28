import introImg from "./assets/introImg.png";
import frontendImg from "./assets/Unit.png";
import backendImg from "./assets/Behaviour.png";
import fullstackImg from "./assets/Integration.png";
import bulb from "./assets/Testing.png";
import shield from "./assets/Quality.png";
import customers from "./assets/Software.png";
import tools from "./assets/Maintainance.png";
import satisfaction from "./assets/Functionality.png";
import customized from "./assets/Performance.png";
import solution from "./assets/Security.png";
import Intro from "../Components/Intro";
import OurServices from "../Components/OurServices";
import { Grid, GridItem, Heading, Stack } from "@chakra-ui/react";
import CrossFunctionalApps from "../Components/CrossFunctionalApps";
import Footer from "../../Footer";
import WhatWeOffer from "../Components/WhatWeOffer";
const introData = [
  {
    img: introImg,
    heading: "Software Quality to Achieve Business Goals",
    text: "Customized quality testing approach to extract maximum business benefits.",
  },
];
const servicesData = [
  {
    img: frontendImg,
    heading: `Unit Testing`,
    text: `Breaking down your complex digital product into separate functionalities and testing each one individually to see if it works.`,
    btntext: `Get Started`,
    left: false,
  },

  {
    img: backendImg,
    heading: `Behavior Testing`,
    text: `Collectively testing the overall functionality of your mobile or web application to ensure smooth operation.`,
    btntext: `Talk to our Design Experts`,
    left: true,
  },
  {
    img: fullstackImg,
    heading: `Integration Testing`,
    text: `Testing the compatibility of different units and functionalities with each other in your software product.`,
    btntext: `Discuss Project`,
    left: false,
  },
];
const crossAppData = [
  {
    logo: bulb,
    heading: `Testing for the Long-run`,
    text: `Utilize the time users spend on smartphones to launch new products with customized MVP software.`,
  },
  {
    logo: shield,
    heading: `Improved Quality Assurance`,
    text: `We design your customized mobile app to extract maximum advantages and create an exceptional user experience.`,
  },
  {
    logo: customers,
    heading: `Improved Software Efficiency`,
    text: `Get additional features to improve customer interactions - Enable push notifications and personalized messages in your app.`,
  },
  {
    logo: tools,
    heading: `Reduced Maintenance Costs`,
    text: `Get your bespoke mobile application built with next-gen technologies to establish your digital identity and sell your products better.`,
  },
];
const whatWeOfferData = [
  {
    logo: satisfaction,
    heading: `Functionality Testing`,
    text: `Testing mobile and web applications to eliminate bugs in each function including front-end, back-end, APIs, & integrations.`,
    btnText: `Estimate Project`,
  },
  {
    logo: solution,
    heading: `Performance Testing`,
    text: `Analyzing every aspect of performance in your application with large datasets and the maximum possible traffic.`,
    btnText: `Get Started`,
  },
  {
    logo: customized,
    heading: `Security Testing`,
    text: `Testing your software from the security perspective to identify the systems’ loopholes and ensure maximum data protection.`,
    btnText: `Discuss a Project`,
  },
];
export default function SQA() {
  return (
    <Stack align={"center"}>
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
        Software Quality that Speaks for Itself
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
