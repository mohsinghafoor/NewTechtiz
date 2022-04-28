import introImg from "./assets/introImg.png";
import NativeImg from "./assets/Native.png";
import FlutterImg from "./assets/Flutter.png";
import AndroidImg from "./assets/Android.png";
import IOSImg from "./assets/IOS.png";
import bulb from "./assets/MVP.png";
import shield from "./assets/Data.png";
import customers from "./assets/Brand.png";
import tools from "./assets/Sales.png";
import Intro from "../Components/Intro";
import satisfaction from "./assets/Customer.png";
import customized from "./assets/Customized.png";
import solution from "./assets/Solution.png";
import OurServices from "../Components/OurServices";
import { Grid, GridItem, Heading, HStack, Stack } from "@chakra-ui/react";
import CrossFunctionalApps from "../Components/CrossFunctionalApps";
import Footer from "../../Footer";
import WhatWeOffer from "../Components/WhatWeOffer";
const introData = [
  {
    img: introImg,
    heading: "Delight Your Customers with Game-Changing Mobile Applications ",
    text: "We have got the expertise to help ambitious business disruptors fulfill their dreams",
  },
];
const servicesData = [
  {
    img: NativeImg,
    heading: `React Native Development`,
    text: `High-quality digital products developed by utilizing the best cross-platform mobile app development framework`,
    btntext: `Talk to React Developers`,
    left: true,
  },
  {
    img: FlutterImg,
    heading: `Flutter App Development`,
    text: `Flutter’s UI framework utilized by innovative developers to provide top-notch services combined with pleasing app designs.`,
    btntext: `Talk to our Flutter Developers`,
    left: false,
  },
  {
    img: AndroidImg,
    heading: `Android Development`,
    text: `User-centric android applications for every type of device developed to create an intuitive user experience that boosts engagement.`,
    btntext: `Talk to our Android Developers`,
    left: true,
  },
  {
    img: IOSImg,
    heading: `iOS Development`,
    text: `Functionally rich and innovative iOS applications developed by expert programmers that are proficient in all the latest coding languages.  `,
    btntext: `Talk to our iOS Experts`,
    left: false,
  },
];
const crossAppData = [
  {
    logo: bulb,
    heading: `MVP Software for Startups`,
    text: `Utilize the time users spend on smartphones to launch new products with customized MVP software.`,
  },
  {
    logo: shield,
    heading: `Data Collection & Processing`,
    text: `We design your customized mobile app to extract maximum advantages and create an exceptional user experience.`,
  },
  {
    logo: customers,
    heading: `Brand Loyalty`,
    text: `Get additional features to improve customer interactions - Enable push notifications and personalized messages in your app.`,
  },
  {
    logo: tools,
    heading: `Improved Sales`,
    text: `Get your bespoke mobile application built with next-gen technologies to establish your digital identity and sell your products better.`,
  },
];
const whatWeOfferData = [
  {
    logo: satisfaction,
    heading: `Customer Satisfaction`,
    text: `Today’s businesses are heavily dependent on mobile applications as they enable customers to conveniently interact and perform desired tasks.`,
    btnText: `Estimate Project`,
  },
  {
    logo: solution,
    heading: `Integrated Solutions`,
    text: `TechTiz offers integrated third-party systems and customized functionalities that allow effective management of teams and back office operations. `,
    btnText: `Get Started`,
  },
  {
    logo: customized,
    heading: `Customized Experience`,
    text: `We deliver visually pleasing bespoke mobile applications while sticking to coding standards and pre-defined project schedules.`,
    btnText: `Discuss a Project`,
  },
];
export default function MobileDevelopment() {
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
        py="50px"
        // mx={{ base: "5", md: "0" }}
        maxW={"750px"}
        textAlign="center"
      >
        The Right Mobile App Gives Your Business the Competitive Edge
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
